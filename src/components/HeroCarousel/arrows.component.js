import React from "react";
import {BsChevronRight} from "react-icons/bs";

export const NextArrow = (props) => {
    //const {className,style,onClick} = props;
    return(
        <>
        <div 
        className={props.className}
        style={{ ...props.style, padding:"10px",paddingRight:"50px",marginRight:"-45px",backgroundColor: "rgba(0, 0, 0, 0.4)" ,color:"white",borderRadius:"5px",width:"45px",height:"40px"}}
        onClick={props.onClick} 
        ><BsChevronRight className="bg-blue-300"/></div>
        </>
    );
};

export const PrevArrow = (props) => {
    return(
        <>
        <div 
        className={props.className}
        style={{ ...props.style, backgroundColor: "black"}}
        onClick={props.onClick} 
        />
        </>
    );
};