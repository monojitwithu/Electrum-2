import React, { useEffect, useState } from "react"
import {BsStarFill,BsStar,BsStarHalf} from "react-icons/bs"

const Rating=({rating})=>{
    const [star,setStar]=useState(rating);

   
    return(
        <div className="rating">
            
            <div className="star-container">
                {Array(5).fill().map((item,index)=>{
                    
                    if(index+1<=star) return <BsStarFill className="fill"/>
                    if(index+1>=star&&index+1<star+1){
                        return <BsStarHalf className="half"/>

                    }else if(index+1>star) return <BsStar className="empty"/>

                })}
               

            </div>

        </div> 
    )
}



export default  Rating;