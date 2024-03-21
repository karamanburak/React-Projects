import React from "react";
import { useNavigate } from "react-router-dom";

const Card =({card}) => {
  const {src,title,text,url} = card
  console.log(card);
  const navigate = useNavigate()
  return (
    <div className="box" >
        <img src={src} alt="" onClick={()=> navigate(`/${url}`)}/>
        <h3>{title}</h3>
        <p>{text}</p>
        <div>
        </div>
    </div>
  );
};

export default Card;
