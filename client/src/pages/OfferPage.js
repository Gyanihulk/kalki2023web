import React from 'react'
import { useLocation } from 'react-router';

const OfferPage = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    console.log(id)
  return (
    <div>OfferPage</div>
  )
}

export default OfferPage