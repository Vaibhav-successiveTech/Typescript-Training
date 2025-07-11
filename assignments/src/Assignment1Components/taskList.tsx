
const list : string[] = ['task1','task2','task3','task4','task5']

const TaskList = ({list} : {list : string[]})=>{
    return (
        <>
            
            <ol>
                {list.map((i)=> {return <> <li> {i} </li> <br/></>})}
            </ol>
        </>
    );
}

export default TaskList;
export {list};