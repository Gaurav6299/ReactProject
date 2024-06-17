import React from 'react'
import Student from './Student'
import Teacher from './Teacher'

const School = ({ isTest }) => {

  // if (isTest) {
  //   return <Teacher />
  // }
  // else {
  //   return <Student />
  // }

  return (
    <>
      {
        isTest ? <Student /> : <Teacher />
      }
    </>

  )
}

export default School