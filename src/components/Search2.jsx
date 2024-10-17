import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
function Search2(){
    let[api,setapi]=useState([])
    let[search,upsearch]=useState([])
    useEffect(()=>
    {
        let res=fetch(`https://pixabay.com/api/?key=46193708-7c98f95a788b9e1e390fd55b3&q=${search}&image_type=photo&pretty=trueu`)
        res.then(x=>x.json()).then(val=>{
            console.log(val);
            setapi(val.hits)
            
        },[])
    }
    )
    // <i class="fa-solid fa-magnifying-glass"></i>
    return(
        <>
        
         <div id="indiv">
            <h1>Fuel Your Imagination With The Right Image </h1>
         <input type="text" onChange={e=>upsearch(e.target.value)}  placeholder=" Search for all images"/><i class="fa-solid fa-magnifying-glass"></i>
         </div>
         <div id="bcts">
             <Link to={"./uiimg"}><buttons>Photos</buttons></Link>
             <buttons> Illustrations</buttons>
             <buttons>Vectors</buttons>
             <buttons>Vedios</buttons>
             <buttons>Music</buttons>
         </div>
        <div id="Sdiv">
        {
            api.map(x=>{
                return(
                    <div >
                    <img src={x.webformatURL} alt="" className="Simg" />
                    </div>
                )
            })
        }
        </div>
        </>
    )
}
export default Search2