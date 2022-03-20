import React,{useState} from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options=[
    {
        label:'Italian',
        value:'it',

    },
    {
        label:'France',
        value:'fr',

    },
    {
        label:'Espanol',
        value:'es',

    }
]

const Translate = ()=>{
    const [language,setLanguage]=useState(options[0])
    const [text,setText]=useState('')

    return (
        <div>
            <form className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input 
                    type="text" 
                    value={text}
                    onChange={(e)=>{setText(e.target.value)}}
                    />
                </div>
            </form>
            <Dropdown 
                selected={language} 
                onSelectedChange={setLanguage}
                options={options}
                text='choose language'/>
                <hr/>
            <Convert target={language} q={text}/>
        </div>
    )
}

export default Translate