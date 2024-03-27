import React from 'react'
import "../ApartmentHeader/ApartmentHeader.scss"

export function ApartmentHeader({selectedFlat}) {
  const name = selectedFlat.host.name;
  const [firstName, lastName] = name.split(" ");

  return (
    <div className="apartment__header">
            <div className='apartment__title'>
            <h1>{selectedFlat.title}</h1>
            <h2>{selectedFlat.location}</h2>
            <div className='apartment__tags'>
            {selectedFlat.tags.map((tag) => (<span key={tag}>{tag}</span>))}
            </div>
        </div>
        <div className="apartment__owner">
            <div className='apartment__owner__details'>
            <h3>
              <span>{firstName}</span>
              <span>{lastName}</span>
            </h3>
            <div className="apartment__owner__badge">
              <img src={selectedFlat.host.picture} alt="" />
            </div>
            </div>
            <div className='apartment__owner__stars'>
            {[1, 2, 3, 4, 5].map((number)=> (
            <span key={number} className={selectedFlat.rating > number ? "fill" : ""}>★</span>
            ))}
            </div>
            </div>
            </div>
  )
}