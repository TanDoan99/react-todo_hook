import React,{useState} from 'react';

function UserTable(props) {
    return (
        <div>
            <table className="table">
                <tbody>
                    <tr>
                        <th>Id word</th>
                        <th>Content</th>
                        <th>Action</th>
                    </tr>
               
                    {props.userTable.length >0?(
                        props.userTable.map(el=>{
                            const {id,name} = el;
                            return(
                                <tr>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>
                                       <button className="btn btn-primary" onClick = {() => props.editUser(id,name)}>Edit</button>&nbsp;&nbsp;
                                       <button className="btn btn-danger" onClick={()=>props.deleteUser(id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    ):(
                        <p>Không có dữ liệu</p>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default UserTable;