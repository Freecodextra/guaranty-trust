import React, { useEffect, useState } from 'react'
import Top from '../top/Top'
import GetStarted from '../get-started/GetStarted'
import Footer from '../footer/Footer'
import { useParams, useNavigate } from 'react-router-dom'
import { useFirebaseStore } from '../../firebase/firebase'

function EachPost() {
  const [post, setPost] = useState({title: "", body: "", image: "11122.jpg", createdAt: ""});
  const {postId} = useParams();
  const { getSinglePost } = useFirebaseStore();
  const [pic, setPic] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();
        function getPost() {
          getSinglePost(postId)
        .then(post => {
          console.log(post.data());
          setPost(post.data())
        })
        .catch(err => {
          console.log(err.message);
          navigate(-1);
        })
        }

        useEffect(() => {
          getPost();
          post.image === "11122.jpg" ? setPic("/src/assets/11122.jpg") : setPic(post.image);
            const postDate = new Date(post.createdAt.seconds * 1000);
            post.createdAt ? setDate(postDate.toLocaleDateString()) : setDate((new Date()).toLocaleDateString());
          
        }, [])
  return (
    <>
        <Top />
        <div className="each-post">
            <div className="each-post-head">
                <h2>{post.title}</h2>
               <span>{date}</span>
                <img src={pic} alt="" />
            </div>
            <div className="each-post-body">
                <p>{post.body}</p>
            </div>
        </div>
        <GetStarted />
        <Footer />
    </>
  )
}

export default EachPost