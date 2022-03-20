import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

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
    const [showDropdown,setShowDropdown]=useState(false)

    return (
        <div>
            {/* <Accordion items={items}/> */}
            {/* <Search/> */}
            {/* <button onClick={()=>{setShowDropdown(!showDropdown)}}>Toggle Dropdown</button>
            {showDropdown?
                <Dropdown 
                    selected={selected} 
                    onSelectedChange={setSelected}
                    options={options}
                    text=''select a color/>
                    : null
            }
            <div style={{color:`${selected.value}`}}>
                This text is {selected.value}
            </div> */}
            <Translate/>
        </div>
    )
}

export default App