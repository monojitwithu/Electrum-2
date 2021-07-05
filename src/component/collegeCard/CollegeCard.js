import React, { useEffect, useState } from "react"
import Rating from "../common/rating/Rating"
import {AiFillTag} from 'react-icons/ai'

const CollegeCard=({offertext,nearest_place,famous_nearest_places,rating_remarks,rating,amenties,tags,ranking,image,fees_cycle,discounted_fees,original_fees,discount,college_name,promoted})=>{
     const [collegeName,setCollegeName]=useState([0])
     const [distance,setDistance]=useState([0])
     const[distance_from,setDistance_from]=useState([0])
     useEffect(()=>{
        settingData()
         

     })


    const settingData=()=>{
         setCollegeName(college_name.split("-"))
        var res = famous_nearest_places.split(", ");
  
     var distance = [];
     var distance_from = [];
  
     for(let i = 0; i< res.length; i++){
  	 distance[i] = res[i].split(" f")[0];
     distance_from[i] = "from " + res[i].split(" from ")[1];
   }
   setDistance(distance)
   setDistance_from(distance_from)

    }
    

      

    

   

    return(
        <div className="college-card">
    
            
            <div className="image-container">
                <div > 
                    <p className="tag" >{tags[0]}</p> <p className="tag distance">{tags[1]}</p> 
                
                </div>
                <div>
                <p className="rating">
                     <div className="r"><p> <span>{rating}</span>/5</p></div>
                    {rating_remarks}
                </p>
                <span>#{ranking}</span>

                </div>
                
                



            </div>
            <div className="details-container">
                <div className="information-container">
                <div className="college-name">
               <p>{collegeName[0]}   <Rating rating={rating}/> </p>
                </div>

                <div className="location">
                    <p>{nearest_place[0]} <span>| {nearest_place[1]}</span></p>
                </div>



                <div className="match">
                    <p> <span>93% Match :</span> <h4>{distance[0]}</h4> {distance_from[0]}<h4>{distance[1]}</h4> {distance_from[1]}</p>

                </div>
                <div className="offer">
                    <p>Flat Rs <span>2,000</span> off+upto <span>500</span> wallet! to avail...<span>LOGIN</span></p>

                </div>
                
                

            </div>
            <div className="price-container">
                <div className="tag2">
                    <p>      {original_fees}  <AiFillTag /> <span>{discount}</span></p>
                    
                </div>
                <div className="price">
                    <p className="value">      ₹ {  discounted_fees}</p>
                    <p>{fees_cycle}</p>

                </div>
                <div className="fesility">
                    <p>{amenties[0]} . {amenties[1]}</p>

                </div>


            </div>
            </div>

            <h3 class={`ribbon ${promoted?"show-ribbon":" "}` }>Promoted</h3>


            

        </div>
    )
}


export default CollegeCard;