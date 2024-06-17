import React, { useState } from 'react'
import './style.css'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";


const SpeechCards = () => {


  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  //   This hook is used to store the transcript data
  const [textToCopy,setTextToCopy]=useState()

  // useClipboard is used to copy the text which you have entered inside it.
  const [isCopied, setCopied] = useClipboard(textToCopy)

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true })
    console.log(transcript)
  }
  const stopListen = () => SpeechRecognition.stopListening();



  // this is used to check weather it browser support or not
  if (!browserSupportsSpeechRecognition) {
    return null
  }
  return (
    <>
      <div className="container">
        {/* <h2>Speech To Text Converter</h2>
      <p>A React App to converts speech from the microphone to text.</p> */}
        <div className="main-container" onClick={()=>setTextToCopy(transcript)}>
          {transcript}
        </div>
        <div className="btn-style">
          <button className='copy start-list' onClick={setCopied}>{isCopied?"Copied 👍":"Copy 👎"}</button>
          <button className='copy start-list' onClick={startListening}>Start Listening</button>
          <button className=' copy start-list' onClick={stopListen}>Stop Listening</button>
        </div>
      </div>
    </>
  )
}

export default SpeechCards