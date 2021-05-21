import axios from 'axios';
import React, { useState, useEffect } from 'react'

function Console(props) {
    const [consoleData, setConsoleData] = useState(null)

    useEffect(function () {
        axios.get(`https://csc225.mockable.io/consoles/${props.selectedConsole}`)
            .then(function (response) {
                setConsoleData(response.data)
            })
    },
        [props.selectedConsole]
    );

    if (!consoleData) {
        return (
        <div className="text-center">
                <div className="spinner-grow spinner-grow-sm text-success m-5" role="status">
                    <span className="visually-hidden"></span>
                </div>
                <div className="spinner-grow text-primary" role="status">
                    <span className="visually-hidden"></span>
                </div>
                <div className="spinner-grow spinner-grow-sm text-danger m-5">
                    <span className="visually-hidden"></span>
                </div>
            </div> 
        )

    }
    return (
        <div className="card mx-auto" style={{ width: '20rem' }}>
            <div className="card-body text-center">
                    <img src={consoleData.image} className="card-img-top img-fluid" alt={consoleData.name}/>
                    <h3> {consoleData.name} </h3>
                    <p> Price: ${consoleData.price} </p>
                    <p> Created in {consoleData.country} </p>
                    <p> Released in {consoleData.releaseYear} </p>
            </div>
        </div>
    )
}

export default Console

