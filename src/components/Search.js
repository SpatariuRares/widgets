import React, {useEffect, useState} from "react";
import wikipedia from "../apis/wikipedia";

const Search =()=>{
    const[term,setTerm]=useState('');
    const[results,setresults]=useState([]);

    console.log(results)
    useEffect(()=>{
        const search=async()=>{
            const {data}= await wikipedia.get('',{
                params:{
                    srsearch:term
                }
            })
           setresults(data.query.search) 
        }
        if(term && !results.length){
            search()
        }else{
            const timeoutID = setTimeout(() => {
                if(term){
                    search();
                }
            }, 500);
            if (term==='' && !results.length){
                setresults([]) ;
            }
            return ()=>{
                clearTimeout(timeoutID)
            }
        }
    },[term]);

    const renderedResults = results.map((result)=>{
        return(
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html:result.snippet }}></span>
                </div>
            </div>
        )
    });

    return( 
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        className="input" 
                        value={term}
                        onChange={e=>setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>
        </div>
    )
}

export default Search