import React, { useEffect, useState } from 'react'
import "./index.css";
import { PokemonCard } from './PokemonCard';
const Pokemon = () => {

const[pokemon,setPokemon]=useState([]);
const[loading,setLoading]=useState(true);
const[error,setError]=useState(null);


    const API='https://pokeapi.co/api/v2/pokemon?limit=124';

    const fetchPokemon=async()=>{
            try{
                const response=await fetch(API);
                if(!response.ok)
                    {
                    throw new Error("Failed to fetch pokemon Data");
                     }
                     const data=await response.json();
                    //  console.log(data);
                     const detailedPokemonData=data.results.map(async(curPokemon)=>{
                        // console.log(curPokemon.url);
                        const response=await fetch(curPokemon.url);
                        const data=await response.json();
                        return data;
                        
                     })
                    //  console.log(detailedPokemonData);
                     const detailResponse= await Promise.all(detailedPokemonData);
                    //  console.log(detailResponse);
                     setPokemon(detailResponse);
                  

            }catch(error){
                    // console.log(error);
                    setError(error);
                
            }
            finally{
                setLoading(false);
            }
    }
    useEffect(()=>{
        fetchPokemon();
    },[])
    if(loading){
        return<h2>Loading.....</h2>
    }
    if(error){
        return<h2>Error:{error.message}</h2>
    }
  return (
    <>
      <section>
        <header>
      <h1>Let's catch Pokemon</h1>
      </header>
      <div>
        <ul className='cards'>
            {
                pokemon.map((curPokemon)=>{
                    return<PokemonCard key={curPokemon.id} PokemonData={curPokemon}/>
                })
            }
        </ul>
      </div>
      </section>
    </>
  )
}

export default Pokemon;
