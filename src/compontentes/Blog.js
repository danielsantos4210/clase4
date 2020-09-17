import React from 'react'
import Tarjetas5 from './Tarjetas5';

function Blog() {

    const datos = [
        {
            title: 'Creative Product Designer From Facebook',
            body: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
            fecha: 'Aug 7, 2018',
            comentarios: '5 Comments',
            imagen: 'images/post_1.jpg'
        },
        {
            title: 'Creative Product Designer From Facebook',
            body: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
            fecha: 'Aug 7, 2018',
            comentarios: '5 Comments',
            imagen: 'images/post_2.jpg'
        },
        {
            title: 'Creative Product Designer From Facebook',
            body: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
            fecha: 'Aug 7, 2018',
            comentarios: '5 Comments',
            imagen: 'images/post_3.jpg'
        }

    ]
    return (
        <section className="site-section" id="section-blog">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-5">
                        <div className="section-heading text-center">
                            <h2>Blog on <strong>Medium</strong></h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="filters-content">
                        <div class="row grid">
                            {
                                datos.map((value) => {
                                    return <Tarjetas5
                                        title={value.title}
                                        body={value.body}
                                        fecha={value.fecha}
                                        comentarios={value.comentarios}
                                        imagen={value.imagen} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog;