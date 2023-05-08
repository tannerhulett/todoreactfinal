import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { ImEye, ImEyeBlocked } from 'react-icons/im'

export default function FilterCat(props) {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get(`http://todoapi.tannerhulett.com/api/Categories`).then(response => {
            console.log(response)
            setCategories(response.data)
          })
    }, [])

  return (
    <div className='text-center mt-5'>
        <button className="btn btn-outline-success bg-dark m-1" onClick={() => props.setFilter(0)}>
            All
        </button>
        {categories.map(cat => 
            <button key={cat.categoryId} className="btn btn-outline-success bg-dark m-1" onClick={() => props.setFilter(Number(cat.categoryId))}>
                {cat.catName}
            </button>
        )}
        
            {/* {!props.showDone ?
                <button className="btn btn-success m-1" onClick={() => props.setShowDone(!props.showDone)}>
                    Show Complete &ensp;<ImEye />
                </button>:
                <button className="btn btn-warning m-1" onClick={() => props.setShowDone(!props.showDone)}>
                    Hide Complete &ensp;<ImEyeBlocked/> 
                </button>
            }    */}
    </div>
  )
}
