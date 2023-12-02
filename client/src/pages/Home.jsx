import React from "react";
import {Link} from "react-router-dom"

import "../css/Home.scss"

const  Home = () => 
{
  const posts = 
  [
    {
      id: 1,
      title: "Test title",
      desc: "The is just atest decription for this test post. Blah Blah Blah ... The is just atest decription for this test post. Blah Blah Blah ... The is just atest decription for this test post. Blah Blah Blah ...",
      img: "https://images.unsplash.com/photo-1678051299678-439050e063a3?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: 2,
      title: "Test title",
      desc: "The is just a test decription for this test post. Blah Blah Blah ... The is just atest decription for this test post. Blah Blah Blah ... The is just atest decription for this test post. Blah Blah Blah ...",
      img: "https://images.unsplash.com/photo-1505506874110-6a7a69069a08?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: 3,
      title: "Test title",
      desc: "The is just atest decription for this test post. Blah Blah Blah ... The is just atest decription for this test post. Blah Blah Blah ... The is just atest decription for this test post. Blah Blah Blah ...",
      img: "https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?auto=format&fit=crop&q=80&w=1973&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: 4,
      title: "Test title",
      desc: "The is just atest decription for this test post. Blah Blah Blah ... The is just atest decription for this test post. Blah Blah Blah ... The is just atest decription for this test post. Blah Blah Blah ...",
      img: "https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: 5,
      title: "Test title",
      desc: "The is just atest decription for this test post. Blah Blah Blah ... The is just atest decription for this test post. Blah Blah Blah ... The is just atest decription for this test post. Blah Blah Blah ...",
      img: "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]

  return(
    <div className="home">
      <div className="posts">
        {posts.map(post=>(
          <div className="post" key={post.id}>

            <div className="img">
              <img src={post.img} alt =""/>
            </div>

            <div className="content">

              <Link className="link" to ={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>

              <p>{post.desc}</p>

              <button>Read More</button>

            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Home