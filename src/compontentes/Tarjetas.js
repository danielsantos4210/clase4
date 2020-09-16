import React from 'react'

function Tarjetas(props) {
    return (
        <div>
            <div className="col-md-12">
                <div className="resume-item mb-4">
                    <span className="date"><span className="icon-calendar"></span>{props.fecha}</span>
                    <h3>{props.title}</h3>
                    <p>{props.body}</p>
                    <span className="school">{props.referencia}</span>
                </div>
            </div>
        </div>

    )
}
export default Tarjetas;