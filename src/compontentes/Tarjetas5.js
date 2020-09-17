import React from 'react'

function Tarjetas5(props) {
    return (
        <div className="col-sm-6 col-lg-4 mb-4">
            <div className="blog-entry">
                <a href="#"><img src={props.imagen} alt="Image placeholder" className="img-fluid" /></a>
                <div className="blog-entry-text">
                    <h3><a href="#">{props.title}</a></h3>
                    <p className="mb-4">{props.body}</p>

                    <div className="meta">
                        <a href="#"><span className="icon-calendar"></span> {props.fecha}</a>
                        <a href="#"><span className="icon-bubble"></span> {props.comentarios}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tarjetas5;