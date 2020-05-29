import React, { Component } from 'react'
import Nav from './nav'
class Dashboard extends Component {

    state = {
        wya: '',
        amount: '',
        discription: ''
    };
    handlestring = (event) => {
        var wya = event.target.value;
        this.setState({ wya })
    };

    handleamount = (event) => {
        var amount = event.target.value;
        this.setState({ amount })
        var printsplit = document.getElementById('split')
        printsplit.innerHTML = amount;

    };

    handlediscription = (event) => {
        var discription = event.target.value;
        this.setState({ discription })
    };


    move = () => {
        var expense = document.getElementById('expense');
        expense.classList.add('show');

    }
    saveindb = (event) => {
        event.preventDefault();
        /*let db = [];
        let store = {
            name: this.state.wya,
            amt: this.state.amount,
            dis: this.state.discription
        }*/

    }

    render() {
        return (
            <div className='form'>
                <div className='test'> <Nav/> </div>
                <div className='navembed'>    
                    <div className='dashboard flex-conatiner '>
                        <div className='row flex-container'>
                            <div className='col-xs-6'>
                                <h3>Dashboard</h3>
                            </div>
                            <div className='col-xs-3' >
                                <button className='btn-primary' onClick={this.move}>Add an Expense</button>
                            </div>
                            <div className='col-xs-3'>
                                <button className='btn-success'>Settle up</button>
                            </div>
                        </div>

                        <div className='row flerx-container '>
                            <div className=' col-xs-4'>
                                <span>total balance</span>
                            </div>
                            <div className='col-xs-4'>
                                <span>you owe</span>
                            </div>
                            <div className='col-xs-4'>
                                <span>you are owed</span>
                            </div>
                        </div>

                        <div id='expense'>
                            <div className='expensediv'>
                                <nav className='navclass'>
                                    <h5>Add an expense</h5>
                                </nav>
                                <form action='/' method='get' onSubmit={this.saveindb}>
                                    <table className='xcontent'>
                                        <tr >
                                            <td>with you and:</td>
                                            <td> <input className='xname' placeholder='eg:-sai' type='text' value={this.state.wya} onChange={this.handlestring} /></td>
                                        </tr>

                                        <tr>
                                            <td>Amount:</td>
                                            <td><input className='xamt' placeholder='rs' type='text' value={this.state.amount} onChange={this.handleamount} /></td>
                                        </tr>
                                        <tr>
                                            <td>discription:</td>
                                            <td><input className='xdis' placeholder='eg:-appartment bill' type='text' value={this.state.discription} onChange={this.handlediscription} /></td>
                                        </tr>
                                    </table>
                                    <div>
                                        <div>
                                            <h5>split by you and other</h5>
                                        </div>
                                        <div>
                                            <p id='split'></p>
                                        </div>
                                    </div>
                                    <input type='submit' value='save' />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}
export default Dashboard