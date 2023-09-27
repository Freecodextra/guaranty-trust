import React, { useState } from "react";
import "./dashboard.css";
import Logo from "../../../assets/G Logo.png";
import { useFirebaseStore } from "../../../firebase/firebase";
import {useNavigate} from "react-router-dom"

function Dashboard() {
  const { posts, addNewPost, updatePost, deletePost, uploadImage } =
    useFirebaseStore();
  const [content, setContent] = useState({ title: "", body: "" });
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleFileChange(e) {
    const file = e.target.files[0];
    setSelectedFile(file);
  }
  function addPost(title, body, downloadUrl = "11122.jpg") {
    addNewPost(title, body, downloadUrl)
      .then()
      .catch((err) => {
        setError(err);
        console.log(err.message);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { title, body } = content;
    if ((title !== "") && (body !== "")) {
      if (selectedFile) {
        const [downloadUrl, progressBar, error] = uploadImage(
          selectedFile.name,
          selectedFile
        );
        if (!error) {
           downloadUrl && addPost(title, body, downloadUrl)
        } else {
          addPost(title, body);
        }
      } else {
        addPost(title, body);
      }
    }
    setContent({ title: "", body: "" });
    setSelectedFile(null);
  }

  function handleChange(e) {
    const { id, value } = e.target;
    if (id === "title") {
      setContent((prev) => {
        return {
          ...prev,
          title: value,
        };
      });
    }
    if (id === "body") {
      setContent((prev) => {
        return {
          ...prev,
          body: value,
        };
      });
    }
  }

  function handlePostButtons(e) {
    const { name, value } = e.target;
    if (name === "delete") {
      deletePost(value)
        .then()
        .catch((err) => console.log(err));
    }
    if (name === "view") {
      navigate(`/posts/${value}`);
    }
    if (name === "update") {
      return;
    }
  }

  return (
    <div className="dashboard">
      <div className="header">
        <div className="h-left">
          <img src={Logo} alt="icon" />
        </div>
        <div className="h-right">
          <div className="h-icon">
            <i className="bi bi-person"></i>
          </div>
          <div className="h-btn">
            <button className="btn btn-sm">Logout</button>
          </div>
        </div>
      </div>
      <div className="info">
        <h1>Dashboard</h1>
        <p>Welcome back, Admin</p>
      </div>
      <div className="cards center">
        <div className="row center">
          <div className="col-md-4 d-card center">
            <div className="c-icon first">
              <i className="bi bi-columns-gap"></i>
            </div>
            <div className="c-text">
              <span>Total Posts</span>
            </div>
            <div className="c-num first">
              <span>{posts && posts.length}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button
          type="button"
          className="btn btn-dark"
          data-bs-toggle="modal"
          data-bs-target="#myModal1"
        >
          Add New Guest
        </button>
      </div>
      {/* <!-- =================== MODAL 2============================== --> */}
      <div className="modal fade" id="myModal1">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* <!-- Modal Header --> */}
            <div className="modal-header">
              <h4 className="modal-title">Add New Post</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            {/* <!-- Modal body --> */}
            <div className="modal-body">
              <form id="guest" name="post" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Title"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="body" className="form-label">
                    Body
                  </label>
                  <textarea
                    className="form-control"
                    id="body"
                    placeholder="Body"
                    cols="30"
                    rows="10"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">
                    Image
                  </label>
                  <input type="file" className="form-control" id="image" onChange={handleFileChange} />
                </div>
                <div className="d-grid shadow-sm">
                  <button type="submit" className="btn btn-dark">
                    Add Post
                  </button>
                </div>
              </form>
            </div>

            {/* <!-- Modal footer --> */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="table-data shadow-sm">
        <div className="alert">
          <h3>POSTS</h3>
        </div>
        <table className="table table-hover" id="guest-table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Image</th>
              <th>Title</th>
              <th>Body</th>
              <th>createdAt</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {posts && posts.map((post, index) => {
              const { title, body, image, createdAt, id } = post;
              const dateOutput = new Date(createdAt?.seconds * 1000);
              let url = "";
              image === "11122.jpg" ? url = `src/assets/${image}` : url = image;
              return <TableRow 
              key={id}
              index={index}
              image={url}
              body={body.substr(0,50)}
              title={title}
              id={id}
              createdAt={dateOutput.toLocaleDateString()}
              handlePostButtons={handlePostButtons}
              />
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TableRow({ id, image, title, body, createdAt, index, handlePostButtons }) {
  return (
    <tr key={id}>
      <td>{index + 1}</td>
      <td>
        <div className="user">
          <div className="u-left">
            <img src={image} alt="avatar" />
          </div>
          {/* <div className="u-right">
                    <span>Kiran Achaya</span>
                    <span>@kiranachaya</span>
                  </div> */}
        </div>
      </td>
      <td>{title}</td>
      <td>{body}</td>
      <td>{createdAt}</td>
      <td>
        •••
        <div className="links shadow-sm">
          <button
            type="submit"
            name="update"
            value={id}
            onClick={handlePostButtons}
          >
            Update Post
          </button>
          <button
            type="submit"
            name="view"
            value={id}
            onClick={handlePostButtons}
          >
            View Post
          </button>
          <button
            type="submit"
            name="delete"
            value={id}
            onClick={handlePostButtons}
          >
            Delete Post
          </button>
        </div>
      </td>
    </tr>
  );
}

export default Dashboard;
   