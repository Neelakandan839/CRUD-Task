import "../components.css";
function CreateUsers(props) {
  //to set the values of name,email,country in inputfiled
  let handleInput = ({ target: { value, name } }) => {
    if (name === "name") {
      props.setName(value);
    }
    if (name === "email") {
      props.setEmail(value);
    }
    if (name === "country") {
      props.setCountry(value);
    }
  };

  return (
    <>
      <div style={{width:'500px',background:'cyan'}} className="card mx-auto createuser">
        <div className="card-body">
          <form className="form">
            <div className="form-group">
              <label className="font-weight-bold">Name:</label>
              <br />
              <input
                className="form-control"
                type="text"
                placeholder="User Name"
                value={props.name}
                onChange={handleInput}
                name="name"
              />
            </div>
            <div className="form-group">
              <label className="font-weight-bold">Email:</label>
              <br />
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                value={props.email}
                onChange={handleInput}
                name="email"
              />
            </div>
            <div className="form-group">
              <label className="font-weight-bold">Country:</label>
              <br />
              <input
                className="form-control"
                type="text"
                placeholder="Country"
                value={props.country}
                onChange={handleInput}
                name="country"
              />
            </div>

            <br />
            <div className="text-center">
              <button
                className="mx-auto btn btn-success"
                type="submit"
                onClick={props.handleSubmit}
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateUsers;
