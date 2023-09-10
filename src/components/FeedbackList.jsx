import React from 'react'
import FeedbackItem from './FeedbackItem'
import { useContext } from 'react'
import FeedbackDataContext from '../context/FeedbackContext'
import {motion, AnimatePresence} from 'framer-motion'

function FeedbackList() {
    const {feedbackData} = useContext(FeedbackDataContext)
    if (!feedbackData || feedbackData.length === 0){
        return <div>
            No Feedback Available.
        </div>;
    }
  return (
    <AnimatePresence>
      <div className='feedback-list'>
          {feedbackData.map((item,idx)=>(
            <motion.div key={idx} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
              <FeedbackItem key={idx} feedbackInfo = {item}/>
            </motion.div>
          ))}
      </div>
    </AnimatePresence>
  )

  // return (
  //   <div className='feedback-list'>
  //      {feedbackItemList.map((item,idx)=>(
  //           <FeedbackItem deleteComment={deleteComment} key={idx} feedbackInfo = {item}/>
  //      ))}
  //   </div>
  // )
}

export default FeedbackList
