import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { Context } from "../Context";
import "./components.css";
import CreateUsers from "./user/CreateUsers";

export default function EditUser({ match }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const context = useContext(Context);
  const [userNotEdited, setUserNotEdited] = useState(true);

  //to set the user data in input when clicked editprofile button
  let setInput = async () => {
    let uservalue = context.users.filter((user) => user.id === match.params.id);
    //to fetch api and get user if page refreshed
    if (uservalue.length === 0) {
      const { data } = await axios.get(
        `https://612dbcede579e1001791dd21.mockapi.io/users/${match.params.id}`
      );
      uservalue.push(data);
    }
    uservalue.forEach((user) => {
      setName(user.name);
      setEmail(user.email);
      setCountry(user.country);
    });
  };

  useEffect(() => {
    setInput();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let PutUser = async () => {
    const { data } = await axios.put(
      `https://612dbcede579e1001791dd21.mockapi.io/users/${match.params.id}`,
      {
        name: name,
        email: email,
        country: country,
      }
    );

    console.log(data);
    let tempusers = [...context.users];
    let index = context.users.findIndex((user) => user.id === match.params.id);
    tempusers[index] = data;
    context.setUsers(tempusers);
    setUserNotEdited(false);
  };

  //to handle sumbmit and call put method
  let handleSubmit = (event) => {
    event.preventDefault();
    PutUser();
  };

  return (
    <>
      <div className="container">
        {userNotEdited ? (
          <>
            <h2 className="text-center text-primary">
              EDIT USER
            </h2>
            <CreateUsers
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
            <div className="confirm-text  text-center mt-5">
              <h3 style={{color:'green'}}>
                Update Successfully{" "}
                <i style={{color:'green'}} className="fas fa-check-circle"></i>
              </h3>
            </div>
          </>
        )}
      </div>
    </>
  );
}
