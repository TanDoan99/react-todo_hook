import React, {useState} from 'react'
import UserTable from './component/UserTable';
import AddUser from './component/AddUser';
import EditUser from './component/EditUser';
import data from './data';
function App() {
  const [users,setUsers] = useState(data);
  const addUser = user =>{
    user.id =users.length + 1;
    setUsers([...users,user]);
  }
  const deleteUser = id =>setUsers(users.filter(element =>element.id !=id));
  const [edit,setEdit] = useState(false);
  const dataFrist = {id:null,nam:''};
  const [currentData,setCurrentData] = useState(dataFrist);
  const updateUser = newUser =>{
    setUsers(users.map(user=>(user.id==currentData.id)?newUser:user));
    setEdit(false);
  }
  const editUser = (id,user) =>{
    setEdit(true);
    setCurrentData({id:id,name:user})
  }
  return (
    <div className="container">
      <h1 className="text-center" >C.R.U.D hook</h1>
      <div className="row">
        {edit?(
          <div className="col-md-6">
          <h2>Sửa nội dung </h2>
          <EditUser 
          setEdit = {setEdit}
          currentData={currentData}
          updateUser={updateUser}
          />
        </div>
        ):(
          <div className="col-md-6">
            <h2>Thêm nội dung</h2>
            <AddUser addUser = {addUser}/>
          </div>
        )}
          
          <div className="col-md-6">
           <h2>Danh sách </h2>
           <UserTable userTable = {users} editUser ={editUser} deleteUser = {deleteUser}/>
          </div>
      </div>
    </div>
  );
}

export default App;
