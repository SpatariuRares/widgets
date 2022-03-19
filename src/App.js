import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdpwn from "./components/Dropdown";

const options=[
    {
        label:'the color red',
        value:'red',

    },
    {
        label:'the color green',
        value:'green',

    },
    {
        label:'the color blue',
        value:'blue',

    }
]

const items=[
    {
        title:'what\'s is react',
        content:'ciao'
    },
    {
        title:'what\'s is react',
        content:'ciao'
    },
    {
        title:'what\'s is react',
        content:'ciao'
    },
    {
        title:'what\'s is react',
        content:'ciao'
    }
]

const App =()=>{
    const [selected,setSelected]=useState(options[0])
     return (
        <div>
            {/* <Accordion items={items}/> */}
            {/* <Search/> */}
            <Dropdpwn 
                selected={selected} 
                onSelectedChange={setSelected}
                options={options}/>
        </div>
    )
}

export default App