import reviewImg from '../assets/Group306.png'

const ReviewDash = () => {
  return (
    <main className="p-3 lg:p-10">
      <p className="text-3xl font-bold">Your reviews</p>
      <p className="mt-3 text-gray-500">Last <u>30 days</u></p>
      <div className="mt-5 flex justify-center ">
        <img src={reviewImg} alt="review image" />
      </div>
    </main>
  )
}

export default ReviewDash