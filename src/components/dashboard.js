import React,{Component} from 'react'
class Dashboard extends Component
{
    move=()=>
    {
        var expense=document.getElementById('expense');
        expense.classList.add('show');

    }
    render()
    {
      
        return(

            <div className='form'>
                
                <div className='dashboard flex-conatiner '>
                <div id='expense'>
            <h1></h1>
        </div>
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

                   
                    
                </div>

               
            </div>
            
           
        );
    }
}
export default Dashboard