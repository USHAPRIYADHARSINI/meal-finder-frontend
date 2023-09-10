import React from 'react'
import "./Items.css";

function Items({searchData}) {
  return (
    <div className='searchdata'>
        {searchData? searchData.map((n, index)=> (
            <div key={index} className='card'>
                <img className='img' src={n.strMealThumb}/>
                <h3 className='meal'>{n.strMeal}</h3>
                <button className='mealbtn'>
                <a href = {n.strYoutub} target='_blank'>Watch video</a>
                </button>
            </div>
        )) 
        :null}
    </div>
  )
}

export default Items