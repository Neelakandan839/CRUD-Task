import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Context } from "./Context";
import Header from "./component/Header";
import Users from "./component/Users";
import CreateUser from "./component/CreateUser";
import EditUser from "./component/EditUser";

function App() {
  const [users, setUsers] = useState([]);

  // fucntion to get user data
  let getUsers = async () => {
    const { data } = await axios.get(
      "https://612dbcede579e1001791dd21.mockapi.io/users"
    );
    console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
    console.log("rendered");
  }, []);

  return (
    <div>
      <Context.Provider
        value={{
          users,
          setUsers,
        }}
      >
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Users} />
            <Route path="/createuser" component={CreateUser} />
            <Route path="/edituser/:id" component={EditUser} />
          </Switch>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
