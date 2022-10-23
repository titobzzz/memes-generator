import React from "react"


export default function Questions(props){
    //import an option props and Quoestion props
    //map

const options  = props.incorrectAnswer.map(answer=>{
    return answer
})  

const style={
    backgroundColor: "#293264"
}
options.push(props.correct);
options.sort()


return(
    <div className="Quiz">
    <h4 >{props.question}</h4>
    <span><h6 style={style} onClick={0]}</h6>
        <h6 style={style} >{options[1]}</h6>
        <h6 style={style} onClick={}>{options[2]}</h6>
        <h6 style={style} onClick={}>{options[3]}</h6>
    </span>
    
</div>
)}