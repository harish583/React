import react from "react";
import './student.css';

function Student(props){
console.log(props);
var {name,username,email,isEnable,id} = props.student;
var {disable} = props;
return (<div className="d-g">
    <div>{name}</div>
    <div>{username}</div>
    <div>{email}</div>
    {isEnable && <div className="cursor-pointer" onClick={()=> disable(id)}>disable</div>}

</div>);
}
export default Student;