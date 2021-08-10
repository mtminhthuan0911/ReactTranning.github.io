import React , {useState , useEffect , useCallback} from 'react'
import Axios from 'axios'
export default function TodoList() {

    let [state, setState] = useState({
        TaskList : [] , 
        value : {
            taskName : ''
        },
        errors : {
            taskName : ''
        },
    })

    const getTaskList = () => {
        let promise = Axios ({
            url : '',
            method : 'GET'
        });
        promise.then((result) => {
            console.log(result.data);
            //setState của component 
            setState({
                ...state,
                TaskList : result.data
            })
            console.log('Succeess')
        });
        promise.catch((err) => {
            console.log('UnSuccess',err.reponse.data)
        })
    }
    //Render Task
    const renderTaskTodo = () => {
        return this.props.tasklist.filter(task => !task.done).map((task,index) => {
            return (
                <div key={index} className="Component">
                <p id="txtHeading3" className="txtHeding3">{task.taskname}</p>
               <div className="process">
               <button onClick={ () =>

                    this.props.dispatch(DoneTask(task.id))

               } className="Icons"><i class="fas fa-check"></i></button>


                <button onClick={()=>
                    
                    this.setState({
                        disabled : false
                    }, () => {
                        this.props.dispatch(EditTask(task))
                    })
                    
                   }  className="Icons"><i class="far fa-edit"></i>
                    
                </button>



                <button onClick={() => {

                    this.props.dispatch(DelTask(task.id))


                }} className="Icons"><i class="far fa-trash-alt"></i></button>
               </div>
             </div>
            )
        })
    }
    // UseEffect : Xử lí API 
    // HandleChange Input : 
    // HandleSubmit Form : 
    // AddTask : 

    return (
        <div>
            <div className="Block flex">
                    <div className="content">
                            <p className="txtHeading2">Task To Do</p>
                            <div className="content-tasklist">
                                    {/* {this.renderTaskTodo()} */}
                            </div>
                            <p className="txtHeading2">Task Completed</p>
                            <div className="content-tasklist">
                                {/* {this.renderTaskCompleted()} */}
                            </div>
                            <form action="">
                                <p className="txtHeading3">What's The Plan For To Day ?</p>
                                <div className="list-data">
                                    <input type="text" className="YourTask" placeholder=" " />
                                    <label htmlFor="">YourTask</label>
                                </div>
                            </form>
                    </div>
            </div>    
        </div>
    )
}
