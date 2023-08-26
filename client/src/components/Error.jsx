import React from "react"
import imgError from "../Assets/error-404.jpeg"

import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { navShowAction } from "../redux/actions"

export default function Error () {

    const dispatch = useDispatch()
    useEffect (() => {
        dispatch(navShowAction(false))
    
    }, [])
    
    return (
        <div style={{backgroundColor: "rgb(249,165,66"}}>
            <img src={imgError} alt="not found" />
        
        </div>
    )
};