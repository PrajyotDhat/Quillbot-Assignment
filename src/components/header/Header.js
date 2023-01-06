import { Card } from '@mui/material'
import React from 'react'
import "./Header.css"

function Header() {
  return (
    <div className='star'>
    <br /><br /><br />
    <div className="headers">
    Save time and write with confidence
    </div><br/><br />
      <div className="btn-btn">
        <button className='new-one'>Upgrade to Quillbot Premium</button>
      </div>

      <div className="single" >

        <div className="ones">
           <Card>
           <div className="galaxy">
            <div className="planet">
              <p className="sun">Modes:</p>
              <p className="earth">Standard</p>
              <p className="earth">Fluency</p>
              <p className='moon'>Formal</p>
              <p className="earth">Simple</p>
              <p className="earth">Creative</p>
              <p className="earth">Expand</p>
              <p className="earth">Shorten</p>
              
            </div>
           </div>
           
           <div className="direction">
           <div className="east">
            <p>Opportunities to add<br/>
            a touch of humour <br/>
            happen all of the<br/>
            time.
            </p>
           </div>
          <hr />
           <div className="west">
            <p>Opportunities<span className="moon">to <br/>
            incoporate laughter<br/>
            exist</span> all of time.</p>
           </div>
           </div>

           </Card>
        </div>

        <div className="twos">
           <div className="four">
            <h3>Increase your productivity</h3>
            Paraphrase more text at once to finish writing faster.
           </div>
           <hr />
           <div className="four">
           <h3>Access all modes</h3>
            Get maximum control over how you paraphrase.
           </div>
           <hr />
           <div className="four">
           <h3>Scan for plagiarism</h3>
            Unlock the Plagiarism Checker to guarantee all sources are cited and nothing is unintentionally plagiarized.
           </div>
           <hr />
           <div className="four">
           <h3>Compare all mode outputs at once</h3>
            Paraphrase in and compare outputs from all seven modes.
           </div>
           <hr />
           </div>
           
        </div>

      </div>
   
  )
}

export default Header
