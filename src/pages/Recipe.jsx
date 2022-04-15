import { useState,useEffect } from "react";
import Styled from 'styled-components';
import { useParams } from "react-router-dom";
import React from 'react';
  
function Recipe() {

  let params=useParams()
  const [datails,setDatails] = useState({});
  const [activeTab,setActivedTab] = useState('Instructions');


   const fetchdatails=async ()=>{
     const data=await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
     const datailsData=await data.json();
     setDatails(datailsData)
      console.log(datailsData)
    
   }

   useEffect(()=>{
    fetchdatails();
   },[params.name])

  return (
    <div>
      <DetailsWrapper>
         <div style={{'gridColumn':'1/6'}}>
           <h2>{datails.title}</h2>
           <img style={{'width':'100%'}} src={datails.image}/>
         </div>
         <Info>
           <Button className={activeTab === 'Instructions'?'active':''} onClick={()=>setActivedTab('Instructions')}>
             Instructions
           </Button>
           <Button  className={activeTab === 'Ingredients'?'active':''} onClick={()=>setActivedTab('Ingredients')}>
             Ingredients
           </Button>
           {activeTab ==='Instructions' && (
              <div>
              <h3 dangerouslySetInnerHTML={{__html:datails.summary}}></h3>
              <h3 dangerouslySetInnerHTML={{__html:datails.instructions}}></h3>
              </div>
           )}
            
        {activeTab ==='Ingredients' && (
           <ul>
             {datails.extendedIngredients.map(item=>{
               return(
                 <li key={item.id}>{item.original}</li>
               )
             })}
           </ul>
        )}

         </Info>
      </DetailsWrapper>
    </div>
  )
}


const DetailsWrapper=Styled.div`
margin-top:10rem;
margin-bottom:5rem;
display: grid;
grid-template: repeat(1,auto)/repeat(12,1fr);
.active{
  background:linear-gradient(35deg,#494949,#313131);
  color:white;

}
h2{
  margin-bottom:2rem;
}

li{
  font-size:1.2rem;
  line-height:2.5rem;
}

ul{
  margin-top:2rem;
}

`;

const Button=Styled.button`

padding:1rem 2rem;
color:#313131;
background:white;
border:2px solid black;
margin-right:2rem;
font-weight:600;
`;

const Info=Styled.div`
margin-left:10rem;
grid-column:6/-1;
`;




export default Recipe