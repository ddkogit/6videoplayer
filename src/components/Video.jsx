import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";



export default function Video({videoLink}) {

    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef) {
          videoRef.current.src = videoLink;
          videoRef.current.load();
        }
      }, [videoLink]);


  return (
    <div>
      <video ref={videoRef} id="videoPlayer" width={400} controls autoPlay>
     
      </video>
    </div>
  );
}
