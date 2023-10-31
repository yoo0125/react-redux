import React from 'react';
import {connect} from "react-redux";
import {useParams} from "react-router-dom";

function Detail({toDos}){
    const myId=useParams().id;
    const toDo = toDos.find((toDo) => toDo.id === parseInt(myId));
    return (
        <>
            <h1>{toDo?.text}</h1>
            <h4>created at: {toDo?.id}</h4>
        </>
  );
}

function mapStateToProps(state) {
    return { toDos : state };
}

export default connect(mapStateToProps)(Detail);
