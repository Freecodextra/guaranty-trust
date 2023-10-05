import React from 'react'

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

export default TableRow