import react from "react";
import './student.css';

function Student(props){
var {name,username,email,isEnable,id} = props.student;
var {disable,enable} = props;
return (<div className="d-g">
    <div>{name}</div>
    <div>{username}</div>
    <div>{email}</div>
    {isEnable ? (<div className="cursor-pointer" onClick={()=> disable(id)}>Disable</div>):(<div className="cursor-pointer"  onClick={()=>{enable(id)}}>Enable</div>)}

</div>);
}
export default Student;