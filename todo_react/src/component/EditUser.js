import React,{useState,useEffect} from 'react';

function EditUser(props) {
    useEffect(()=>{
        setUser(props.currentData)
    },[props]);
    const dataFirst = {id:null,name:''};
    const [user,setUser] = useState(props.currentData); 
    const changeInput = event =>{
        console.log(event.target);
        const {name,value} = event.target;
        setUser({...user,[name]:value});
    }
    const submitForm = event =>{
        event.preventDefault();
        if(user.name){
            props.updateUser(user)
        }
    }
    return (
        <div>
            <form>
                <label>Name</label>
                <input name="name" type="text" onChange={changeInput}  value={user.name} className="form-control"/><br/>
                <button className="btn btn-info" onClick={submitForm}>Sửa nội dung </button>
            </form>
        </div>
    );
}

export default EditUser;