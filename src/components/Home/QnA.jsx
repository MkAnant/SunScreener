import React from 'react'
import "./QnA.css"

const QnA = ({question, answer}) => {
  return (
    <div className='qna'>
        <p className='question primary-font primary-color'>{question}</p>
        <p className='primary-font secondary-color'>{answer}</p>
    </div>
  )
}

export default QnA