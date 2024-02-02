import { Link } from "react-router-dom"

const Dashboard = () => {
  return (
    <section >
      <main className="lg:p-10 p-5 bg-orange-200">
        <p className="font-bold lg:text-3xl text-2xl" >Welcome!</p>

        <div className="py-5 lg:py-5 flex justify-between">
          <strong>Last 30 days</strong>
          <Link className="underline text-gray-600">check all</Link>
        </div>
        <div>
          <h4 className="font-bold text-4xl">$23,000</h4>
        </div>
      </main>
      </section>
  )
}

export default Dashboard