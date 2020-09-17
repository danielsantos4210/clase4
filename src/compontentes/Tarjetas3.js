import React from 'react'

function Tarjetas3(props) {
    return (
        <div className="col-md-6">

            <div className="block-47 d-flex mb-5">
                <div className="block-47-image">
                    <img src={props.imagen} alt="Image placeholder" className="img-fluid" />
                </div>
                <blockquote className="block-47-quote">
                    <p>&ldquo;{props.testimonio}&rdquo;</p>
                    <cite className="block-47-quote-author">&mdash; {props.nombre} <a href="#">XYZ Inc.</a></cite>
                </blockquote>
            </div>

        </div>

    )
}

export default Tarjetas3;