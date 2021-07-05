import React, { useEffect, useState } from "react"
import CollegeCard from "../collegeCard/CollegeCard"
import jsonData from './colleges.json'


const Home=()=>{
    const [data,setData]=useState(null);
   


    useEffect(()=>{
        getData()


    },[])
   
    const getData=()=>{
        setData(jsonData)
    }

    
    

    
  
    
    


    return(
        
            
        <div className="college-page">
            <h3 className="title">Colleges is north India</h3>
            
            { data && data.colleges.map(({offertext,nearest_place,famous_nearest_places,rating_remarks,rating,amenties,tags,ranking,image,fees_cycle,discounted_fees,original_fees,discount,college_name,promoted})=>
            (<CollegeCard offertext={offertext} nearest_place={nearest_place} famous_nearest_places={famous_nearest_places} rating_remarks={rating_remarks} rating={rating}  amenties={amenties} tags={tags} ranking={ranking} image={image} fees_cycle={fees_cycle} discounted_fees={discounted_fees} original_fees={original_fees} discount={discount} college_name={college_name} promoted={promoted}/>))

            }
            

        </div>
        
        
    )
}
export default Home;