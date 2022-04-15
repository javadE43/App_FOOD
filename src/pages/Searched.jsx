import React from 'react'
import {useEffect,useState} from 'react';
import {Link,useParams} from 'react-router-dom';
import Styled from 'styled-components';

function Searched() {
    let params=useParams();
    const [searchedrecipes,setSearchedrecipes]=useState([])

    const getsearch = async(name)=>{
        const data =await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const recipes =await data.json();
        setSearchedrecipes(recipes.results);
 }


useEffect(()=>{
    getsearch(params.search)
},[params.search])

  return (
    <Grid>
         {searchedrecipes.map((item)=>{
             return(
                 <Card key={item.id}>
                    <Link to={'/recipe/'+item.id}>    
                     <img src={item.image}/>
                     <h4>{item.title}</h4>
                    </Link> 
                 </Card>
             )
         })}
    </Grid>
  )
};

const Grid = Styled.div`
display:grid;
grid-template-columns:repeat(auto-fit,minmax(10rem,1fr));
grid-gap:3rem;

`;

const Card=Styled.div`

img{
  width:100%;
  border-radius:2rem;

}
a{
  text-decoration:none;

}
h4{
  text-align:center;
  padding:1rem;

}

`





export default Searched