import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'

const FeedbackForm = () => {

  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [reviewText, setReviewText] = useState('')

  const handleSubmitReview = async e=> {
    e.preventDefault()
  }


  return (
    <form action="">
      <div>
        <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0'>How would you rate the overall experience ?</h3>
        <div>
          {[...Array(5).keys()].map((_, index) => {
            index += 1
            return <button key={index} type='button' className={`${index <= ((rating && hover) || hover) ? 'text-[#FEB60D]' : 'text-gray-400'} bg-transparent border-none outline-none text-[22px] cursor-pointer`} onClick={() => setRating(index)} onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(rating)} onDoubleClick={() => { setHover(0); setRating(0) }}><span><AiFillStar /></span></button>
          })}
        </div>
      </div>

      <div className="mt-[30px]">
       <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0'>Share your feedback or suggestions</h3>
       <textarea  rows="5" className="border border-solid border-[green] focus:outline outline-[green] w-full px-4 py-3 rounded-md" placeholder='Write your message' onChange={()=>setReviewText(e.target.value)}></textarea>
      </div>
      <button type='submit' onClick={handleSubmitReview} className="border border-gray-300 text-black font-bold py-1.5 px-5 rounded-md lg:ml-32 lg:ml-7 lg:shadow xl:ml-96 mt-8 hover:bg-green-300 hover:border-green-500 duration-500  lg:hover:scale-105   mb-16 px-12">Submit Feedback</button>

    </form>
  )
}

export default FeedbackForm