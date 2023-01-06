import React from 'react'
import "./Footer.css"
import { Container} from '@mui/material'

function Footer() {
  return (
    <div className="footer">
  <Container>
    <div className="content">
        <div className="word">
            <p>Write better, faster, and clearer instantly</p>            
            <p className='para'>QuillBot is trusted by students, professional writers, and 
            business people who want to write more effectively.</p>
            </div>
        </div>
  
        <div className="divide">

          <div className="first">
          <div className="circle">
          <h1 className='per'>75%</h1>
            <span className='new'>time saved</span>
          </div><br/>
          <div className='last'>Average time savings per writing<br/>project.</div>
          </div>

          <div className="second">
          <div className="circle">
          <h1 className='per'>50+</h1>
            <span className='new'>million</span>
          </div><br/>
          <div className='last'>Trusted by millions worldwide.</div>
          </div>

          <div className="third">
          <div className="circle">
          <h1 className='per'>85%</h1>
            <span className='new'>of students</span>
          </div><br/>
          <div className='last'>Who reported their grades improved<br/>after using QuillBot.</div>
          </div>

        </div>
      
      </Container>
        </div>
   
  )
}

export default Footer
