import React from 'react'

export default function Menu({videos}) {
    console.log(videos)
    
    const items = Object.keys(videos);
    console.log(items)
    return (
       
    <div>

{
    items.map((item)=>(
        <span>
            
        <input type="radio" name="item" />
        <span>{item}</span>
        </span>
    ))
}


    </div>
  )
}
