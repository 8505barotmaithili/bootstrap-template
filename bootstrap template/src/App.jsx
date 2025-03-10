
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => {
  return (

    <div className="container  d-flex align-items-center justify-content-center px-3"style={{
      border:'1px solid black',marginLeft:'90px'
    }}>
      <div className="row w-100 align-items-center">
        <div className="col-md-6 text-center text-md-start p-5" >
          <h1 className="fw-bold">Hi,I'm John Deo.</h1>
          <p className="text-muted fs-5">
            A freelance Web developer from London. I convert custom web designs to Bootstrap templates.
            I make YouTube videos and write Blog.
          </p>
          <button className="btn btn-primary">I'm Available</button>
          <div className="mt-3">
            <i className="bi bi-facebook mx-2 fs-4"></i>
            <i className="bi bi-twitter mx-2 fs-4"></i>
            <i className="bi bi-github mx-2 fs-4"></i>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <img src="https://chetanyacareers.com/events/wp-content/uploads/2017/10/speaker3-min.jpg" className="img-fluid rounded-circle w-75" alt="John Deo" />
        </div>
      </div>
    </div>
  );
};


export default App;
