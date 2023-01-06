import React from 'react'
import "./Main.css"
import { Card, Stack} from '@mui/material'
import { Check,Close, DiamondOutlined, ErrorOutline} from '@mui/icons-material'



function Main() {
  return (
    <div className='container'>
    
    <div className="title">
    Experience the full power of QuillBot
    </div>
    

    <div className='main'>
      
     <Stack
     direction={{ xs: 'column', sm: 'row' }}
     spacing={{ xs: 1, sm: 2, md: 4 }}
     >

     <Card className='left'>
     <div className="heading">
      <h3>FREE</h3>
     </div>

     <div className="btn">
      <button className="btn-one">Sign Up - It's Free</button>
     </div>
     <hr />

     <div className="text">
     <div className="check">
     <Check style={{color:"#499557",}}></Check>
     </div>
      <span>125 words in the Paraphraser</span>
      </div>
      <hr />

      <div className="text">
     <div className="check">
     <Check style={{color:"#499557",}}></Check>
     </div>
      <span>Standard and Fluency modes</span>
      </div>
      <hr />

      <div className="text">
     <div className="check">
     <Check style={{color:"#499557",}}></Check>
     </div>
      <span>3 synonym options</span>
      </div>
      <hr />

      <div className="text">
     <div className="check">
     <Check style={{color:"#499557",}}></Check>
     </div>
      <span>1 Freeze word or phrase</span>
      </div>
      <hr />

      <div className="text">
     <div className="check">
     <Check style={{color:"#499557",}}></Check>
     </div>
      <span>1200 words in the Summarizer</span>
      </div>
      <hr />
      
     <div className="text">
     <div className="check">
     <Close style={{color:"#FB3F4B",}}></Close>
     </div>
      <span>Faster processing speed</span>
      </div>
      <hr />

      <div className="text">
     <div className="check">
     <Close style={{color:"#FB3F4B",}}></Close>
     </div>
      <span>Advanced grammar rewrites</span>
      </div>
      <hr />

      <div className="text">
     <div className="check">
     <Close style={{color:"#FB3F4B",}}></Close>
     </div>
      <span>Compare Modes (Desktop only)</span>
      </div>
      <hr />

      <div className="text">
     <div className="check">
     <Close style={{color:"#FB3F4B",}}></Close>
     </div>
      <span>Plagiarism Checker*</span>
      </div>
      <hr />

      <div className="text">
     <div className="check">
     <Close style={{color:"#FB3F4B",}}></Close>
     </div>
      <span>Tone detection</span>
      </div>
      <hr />
      <div className='bottom'>No Credit Card Required</div>
     
      
      
     </Card>

    

     <Card className="right">
     
     <div className="heading-one">
     <div className="symbol"> <DiamondOutlined></DiamondOutlined></div>
      <h3 className='head'>PREMIUM</h3>
     </div>

     <div className="btn">
      <button className="btn-two">Upgrade to Premium</button>
     </div>
     <hr />

     <div className="text">
     <div className="check">
     <Check style={{color:"#DC9E00",}}></Check>
     </div>
      <span>Unlimited words in the Paraphraser</span>
      <ErrorOutline style={{color:"lightgrey",paddingLeft:99}}></ErrorOutline>
      </div>
      <hr />

      <div className="text">
     <div className="check">
     <Check style={{color:"#DC9E00",}}></Check>
     </div>
      <span>Standard, Fluency, Expand, Shorten, Formal, 
      </span>
      <ErrorOutline style={{color:"lightgrey",paddingLeft:40}}></ErrorOutline>
      </div>
      <hr />

      <div className="text">
     <div className="check">
     <Check style={{color:"#DC9E00",}}></Check>
     </div>
      <span>4 synonym options</span>
      <ErrorOutline style={{color:"lightgrey",paddingLeft:212}}></ErrorOutline>
      </div>
      <hr />

      <div className="text">
     <div className="check">
     <Check style={{color:"#DC9E00",}}></Check>
     </div>
      <span>Unlimited Freeze words and phrases</span>
      <ErrorOutline style={{color:"lightgrey",paddingLeft:90}}></ErrorOutline>
      </div>
      <hr />

      <div className="text">
     <div className="check">
     <Check style={{color:"#DC9E00",}}></Check>
     </div>
      <span>6000 words in the Summarizer</span>
      <ErrorOutline style={{color:"lightgrey",paddingLeft:130}}></ErrorOutline>
      </div>
      <hr />
      
     <div className="text">
     <div className="check">
     <Check style={{color:"#DC9E00",}}></Check>
     </div>
      <span>Faster processing speed</span>
      <ErrorOutline style={{color:"lightgrey",paddingLeft:176}}></ErrorOutline>
      </div>
      <hr />

      <div className="text">
     <div className="check">
     <Check style={{color:"#DC9E00",}}></Check>
     </div>
      <span>Advanced grammar rewrites</span>
      <ErrorOutline style={{color:"lightgrey",paddingLeft:146}}></ErrorOutline>
      </div>
      <hr />

      <div className="text">
     <div className="check">
     <Check style={{color:"#DC9E00",}}></Check>
     </div>
      <span>Compare Modes (Desktop only)</span>
      <ErrorOutline style={{color:"lightgrey",paddingLeft:120}}></ErrorOutline>
      </div>
      <hr />

      <div className="text">
     <div className="check">
     <Check style={{color:"#DC9E00",}}></Check>
     </div>
      <span>Plagiarism Checker*</span>
      <ErrorOutline style={{color:"lightgrey",paddingLeft:203}}></ErrorOutline>
      </div>
      <hr />

      <div className="text">
     <div className="check">
     <Check style={{color:"#DC9E00",}}></Check>
     </div>
      <span>Tone detection</span>
      <ErrorOutline style={{color:"lightgrey",paddingLeft:238}}></ErrorOutline>
      </div>
      <hr />
      <div className='bottom'>3-Day Money-Back Guarantee</div>
    </Card>
    </Stack>
    </div>
    <p>*Scan up to 20 pages a month</p>
    </div>
  )
}

export default Main
