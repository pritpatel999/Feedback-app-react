import FeedbackDataContext from '../context/FeedbackContext';
import {useContext} from 'react';

function FeedbackStat() {
  const {feedbackData} = useContext(FeedbackDataContext);
  let average = feedbackData.reduce((acc, cur)=>{
    return acc + cur.rating;
  },0) / feedbackData.length
  average = average.toFixed(1).replace(/[.,]0$/,"");
  return (
    <div className="feedback-stats">
        <h4>Reviews : {feedbackData.length}</h4>
        <h4>Average : {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStat
