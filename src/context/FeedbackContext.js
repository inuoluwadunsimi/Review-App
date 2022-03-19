import { createContext, useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: 'I really loved the app.',
    },
    {
      id: 2,
      rating: 9,
      text: 'save the high data volume it consumes. every other thing is perfect.',
    },
    {
      id: 3,
      rating: 8,
      text: 'Customer service is topnotch',
    },
  ])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

 

 

  // Add feedback
  const addFeedback =  (newFeedback) => {
      newFeedback.id = uuidv4()
      setFeedback([newFeedback,...feedback])
  }

  // Delete feedback
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item)=> item.id !== id))
    }
  }

  // Update feedback item
  const updateFeedback = async (id, updItem) => {
    setFeedback(
      feedback.map((item)=>(item.id === id ? {...item, ...updItem}:item))
    )
  }

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext