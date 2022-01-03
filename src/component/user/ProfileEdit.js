import "../components.css";
function ProfileEdit(props) {
  let handleChange = ({ target: { name, value } }) => {
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
      <div style={{width:'500px',background:'cyan'}} className="card editcard mx-auto mb-5 createuser">
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
                name="name"
                onChange={handleChange}
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
                name="email"
                onChange={handleChange}
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
                name="country"
                onChange={handleChange}
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

export default ProfileEdit;
