import "./components.css";
import axios from "axios";
import { useState, useContext } from "react";
import { Context } from "../Context";
import ProfileEdit from "./user/ProfileEdit";

function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const context = useContext(Context);
  const [addeduser, setAddeduser] = useState(true);

  //create
  const postUser = async () => {
    let { data } = await axios.post(
      "https://612dbcede579e1001791dd21.mockapi.io/users",
      {
        name: name,
        email: email,
        country: country,
      }
    );
    console.log(data);
    let tempost = [...context.users];
    tempost.push(data);
    console.log(tempost);
    context.setUsers(tempost);
    setAddeduser(false);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    postUser();
  };

  return (
    <>
      <div className="Container">
        {addeduser ? (
          <>
            <h2 className="text-center text-info">CREATE USER</h2>
            <ProfileEdit
              name={name}
              email={email}
              country={country}
              setName={setName}
              setEmail={setEmail}
              setCountry={setCountry}
              handleSubmit={handleSubmit}
            />
          </>
        ) : (
          <>
            <div className="confirm-text text-center mt-5">
              <h3 style={{color:'green'}}>
                Added Successfully{" "}
                <i style={{color:'green'}} className="fas fa-check-circle"></i>
              </h3>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default CreateUser;
