import React, {
    useContext,
    createContext,
    useState,
    children,
    useEffect,
  } from "react";
import { getCategories } from "../lib/sanity";


  
const Context = createContext();


export const SanityContext = ({ children }) => {
    const[categories,setCategories]=useState([])
    useEffect(()=>{
        async function setup(){
            const fetchedCategories=await getCategories()
            if(fetchedCategories.length!=categories.length){
                setCategories((oldCategories) => [...oldCategories, ...fetchedCategories]);
            }
            
            console.log("newcategories",categories)
        }
        setup()
        
    },[])
   
    return (
        <Context.Provider value={{  categories}}>
          {children}
        </Context.Provider>
      );

}

export const useSanityContext = () => useContext(Context);