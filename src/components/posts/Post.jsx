import React from 'react'
import { useFirebaseStore } from '../../firebase/firebase' 
import Top from '../top/Top'
import Footer from '../footer/Footer'
import GetStarted from '../get-started/GetStarted'
import "./post.css"
import img1 from "../../assets/asset 6.webp"
import { Post } from "../blog/Blog"

function Posts() {
  const { posts } = useFirebaseStore();
    return (
    <>
    <Top />
    <div className="base center">
        <h1>Knowledge Base</h1>
        <img src={img1} alt="" className='background' />
    </div>
    <div className="blog-posts">
      {
        posts && posts.map(post => {
          let url = "";
              post.image === "11122.jpg" ? url = `src/assets/${post.image}` : url = post.image;
         return <Post image={url} text={post.title} key={post.id} postId={post.id} />
        })
      }
    </div>
    <GetStarted />
    <Footer /> 
    </>
  )
}

export default Posts