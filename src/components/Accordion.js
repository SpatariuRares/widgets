import React, {useState} from "react";

const Accordion =({items})=>{
    const [ActiveIndex,setActiveIndex]=useState(null)
    const onTitleClick=(index)=>{
        setActiveIndex(index);
    }
    const renderedItems=items.map((item,index)=>{
        return (
            <React.Fragment key={index}>
                <div 
                    className={`title ${ActiveIndex === index?"active":""}`}
                    onClick={()=>{onTitleClick(index)}}
                >
                    <i className="dropdown icon"/>
                    {item.title}
                </div>
                <div className={`content ${ActiveIndex === index?"active":""}`}>
                    {item.content}
                </div>
            </React.Fragment>
            
        )
    })
    return( <div className="ui styled accordion">{renderedItems}</div>)
}

export default Accordion