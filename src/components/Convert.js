import React,{useState, useEffect} from "react";
import translate from "../apis/translate";

const Convert = ({target,q})=>{
    const[results,setresults]=useState('');
    useEffect(()=>{
        const convert=async()=>{
            const {data}= await translate.post('',{},{
                params: {
                    target:target.value,
                    q:q,
                },
            })
            console.log(data)
           setresults(data.data.translations[0].translatedText) 
        }
        if(q && !results.length){
            convert()
        }else{
            const timeoutID = setTimeout(() => {
                if(q){
                    convert();
                }
            }, 500);
            if (q==='' && !results.length){
                setresults('') ;
            }
            return ()=>{
                clearTimeout(timeoutID)
            }
        }
    },[target,q]);

    return (
        <div>
           <h2>Output</h2>
           <p>{results}</p>
        </div>
    )
}

export default Convert