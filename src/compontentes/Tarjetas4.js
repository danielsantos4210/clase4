import React from 'react'

function Tarjetas4(props) {
    return (
        <div class="col-md-6 col-lg-4 text-center mb-5">
            <div class="site-service-item site-animate" data-animate-effect="fadeIn">
                <span class="icon">
                    <span class={props.icono}></span>
                </span>
                <h3 class="mb-4">{props.title}</h3>
                <p>{props.body}</p>
                <p><a href="#" class="site-link">{props.link} <i class="icon-chevron-right"></i></a></p>
            </div>
        </div>
    )
}

export default Tarjetas4;