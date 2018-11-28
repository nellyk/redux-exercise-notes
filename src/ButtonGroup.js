import React from 'react'
import {store} from "./store"
import {setTechnology} from "./actions"
const ButtonGroup = ({technologies}) =>{

    function dispactBtnAction (e){
console.log('====================================');
console.dir(e.target.innerText);
console.log('====================================');       
const tech = e.target.innerText;
        store.dispatch(setTechnology(tech));
    }
    return([
        <div className ="button-container">{
        technologies.map((tech, i)=>
            <button
        date-tech= {tech}
        key={`btn-${i}`}
        className ="hello-btn"
        onClick={dispactBtnAction}
        >
           {tech}
            </button>
        )
    }</div>
    ]
    );
}
export default ButtonGroup;