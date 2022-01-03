import React, { useContext } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";
import axios from "axios";
import "./components.css";

function Users() {
  let context = useContext(Context);
  let deleteid;
  let getdeleteid = (id) => {
    deleteid = id;
  };

  // To delete user
  let deleteuser = async () => {
    const { data } = await axios.delete(
      `https://612dbcede579e1001791dd21.mockapi.io/users/${deleteid}`
    );
    console.log(data);
    let tempusers = context.users.filter((x) => x.id !== deleteid);
    context.setUsers(tempusers);
  };

  return (
    <div>
      <div className="container-fluid">
        <h3 className="users-head text-center text-primary">USERS LIST</h3>
        <div className="user-data d-flex flex-wrap justify-content-center">
          {context.users.map((user) => {
            return (
              <div className="card mx-2 usercard my-4" key={user.id}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12 my-2 text-center">
                      <h4 style={{color:'teal'}} className="font-weight-bold">
                        {user.name}
                      </h4>
                    </div>
                  </div>
                  <p>
                    <b>Email : </b>

                    {user.email}
                  </p>
                  <p>
                    <b>Country : </b>

                    {user.country}
                  </p>
                  <div className="mt-2 d-flex flex-column justify-content-center">
                    <Link
                      to={`edituser/${user.id}`}
                      className="btn  mt-2  btn-success mx-2"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger  mt-2 mx-2"
                      data-toggle="modal"
                      data-target="#mymodal"
                      onClick={() => getdeleteid(user.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="modal  fade" id="mymodal">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-body">Delete User ?</div>
                <div className="modal-footer">
                  <button
                    className="btn btn-danger"
                    data-dismiss="modal"
                    onClick={deleteuser}
                  >
                    Delete
                  </button>
                  <button className="btn btn-success" data-dismiss="modal">
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
