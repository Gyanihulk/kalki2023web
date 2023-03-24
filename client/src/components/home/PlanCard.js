import React from 'react'

const PlanCard = ({cardDetails}) => {
  return (
    <div className="w-80 h-94 border p-6 flex flex-col justify-center bg-gradient-to-t from-gray-900 to-black rounded-md">
        <div className="plan-item text-center">
          <h3 className="text-3xl">{cardDetails?.title}</h3>
          <div className="plan-price mt-1">
            <h2 className="text-3xl font-bold text-orange-500">₹ {cardDetails?.marketPrice}</h2>
          </div>
          <button className="bg-slate-800 hover:bg-slate-700 text-white py-2 px-8 rounded mt-5">
            Enroll now
          </button>
          <div className="text-left mt-6">
            <ul className="list-disc pl-6">
              <li>
              {cardDetails?.description}
              </li>
              <li>Training under expert supervision</li>
              <li>Batch formation as per fitness level and goals</li>
              <li>Flexible timing community</li>
              <li>Free access to workshops and events</li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default PlanCard