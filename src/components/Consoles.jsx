import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Console from './Console'

function Consoles() {
    const [consoles, setConsoles] = useState([])
    const [selectedConsole, setSelectedConsole] = useState(null)

    function GetAllConsoles() {
        axios.get('https://csc225.mockable.io/consoles').then(function (response) {
            setConsoles(response.data)
        });
    }

    useEffect(function () {
        GetAllConsoles()
    }, [])

    if (selectedConsole) {
        return (
            <div className="text-center">
                <Console selectedConsole={selectedConsole} />
                <button onClick={() => setSelectedConsole(null)} className="mt-3">Back</button>
            </div >
        )
    }

    if (consoles.length === 0) {
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
        <div className="row text-center">
            {consoles.map(function (console) {
                return (
                    <div className="col-6 mt-5" key={console.id}>
                            <button onClick={() => setSelectedConsole(console.id)}>
                                <img src={console.image} className="img-fluid" alt={console.name}/>
                                {console.name}
                            </button>
                    </div>
                );
            })}
        </div>
    );
}

export default Consoles