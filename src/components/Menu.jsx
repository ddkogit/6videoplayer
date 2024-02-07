import React from "react";

export default function Menu({ videos,sendVideo }) {
  

  const items = Object.keys(videos);
  
  const handleChange = (i)=>{
   

    sendVideo(videos[items[i]]);
  }

  return (
    <div>
      {items.map((item, i) => (
        <span key={i}>
          <label style={{ marginLeft: "20px", cursor: "pointer" }}>
            <input type="radio" name="item" style={{ cursor: "pointer" }} onClick={()=>handleChange(i)}/>
            {item}
          </label>
        </span>
      ))}
    </div>
  );
}
