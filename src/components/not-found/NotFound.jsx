import React from 'react'
import Top from '../top/Top'
import GetStarted from '../get-started/GetStarted'
import Footer from '../footer/Footer'
import "./not-found.css"

function NotFound() {
  return (
    <>
    <Top />
    <div className="not-found center">
        <h1>Error (404) - NOT FOUND</h1>
    </div>
    <GetStarted />
    <Footer />
    </>
  )
}

export default NotFound