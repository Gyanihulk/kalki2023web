import React from 'react'

const PlansContainer = () => {
  return (
    <div>  <div className="mt-10 px-20 mb-10">
    <hr />
    <div className="text-center mt-4">
      <h3 className="text-2xl text-orange-500">OUR PLANS</h3>
      <h3 className="text-3xl font-bold">GENERAL PLANS</h3>
    </div>
    <div className="flex justify-between flex-wrap mt-6">
      <div className="w-80 h-94 border p-6 flex flex-col justify-center bg-gradient-to-t from-gray-900 to-black rounded-md">
        <div className="plan-item text-center">
          <h3 className="text-3xl">1 Month Membership</h3>
          <div className="plan-price mt-1">
            <h2 className="text-3xl font-bold text-orange-500">₹ 1,000</h2>
          </div>
          <button className="bg-slate-800 hover:bg-slate-700 text-white py-2 px-8 rounded mt-5">
            Enroll now
          </button>
          <div className="text-left mt-6">
            <ul className="list-disc pl-6">
              <li>
                Different Batches for Fat Loss, General Fitness, Athletic
                Skills and Kids Fitness
              </li>
              <li>Training under expert supervision</li>
              <li>Batch formation as per fitness level and goals</li>
              <li>Flexible timing community</li>
              <li>Free access to workshops and events</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-80 h-94 border p-6 flex flex-col justify-center bg-gradient-to-t from-gray-900 to-black rounded-md">
        <div className="plan-item text-center">
          <h3 className="text-3xl">3 Month Membership</h3>
          <div className="plan-price mt-1">
            <h2 className="text-3xl font-bold text-orange-500">₹ 2,000</h2>
          </div>
          <button className="bg-slate-800 hover:bg-slate-700 text-white py-2 px-8 rounded mt-5">
            Enroll now
          </button>
          <div className="text-left mt-6">
            <ul className="list-disc pl-6">
              <li>
                Different Batches for Fat Loss, General Fitness, Athletic
                Skills and Kids Fitness
              </li>
              <li>Training under expert supervision</li>
              <li>Batch formation as per fitness level and goals</li>
              <li>Flexible timing community</li>
              <li>Free access to workshops and events</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-80 h-94 border p-6 flex flex-col justify-center bg-gradient-to-t from-gray-900 to-black rounded-md">
        <div className="plan-item text-center">
          <h3 className="text-3xl">Annual</h3>
          <h3 className="text-3xl">Membership</h3>
          <div className="plan-price mt-1">
            <h2 className="text-3xl font-bold text-orange-500">₹ 8,000</h2>
          </div>
          <button className="bg-slate-800 hover:bg-slate-700 text-white py-2 px-8 rounded mt-5">
            Enroll now
          </button>
          <div className="text-left mt-6">
            <ul className="list-disc pl-6">
              <li>
                Different Batches for Fat Loss, General Fitness, Athletic
                Skills and Kids Fitness
              </li>
              <li>Training under expert supervision</li>
              <li>Batch formation as per fitness level and goals</li>
              <li>Flexible timing community</li>
              <li>Free access to workshops and events</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default PlansContainer