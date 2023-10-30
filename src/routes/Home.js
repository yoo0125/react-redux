import React, { useState } from "react";
import { connect } from "react-redux";
import {getDependsOnOwnProps} from "react-redux/es/connect/wrapMapToProps";

function Home() {
    const [text, setText] = useState("");
    function  onChange(e){
        setText(e.target.value);
    }
    function onSubmit(e) {
        e.preventDefault();
        setText("");
    }
    return(
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}/>
                <button>Add</button>
            </form>
            <ul></ul>
        </>
    )
}

function getCurrentState( state, ownProps) {
    console.log(state, ownProps);
}

export default connect(getCurrentState) (Home);