import React, { useStates, useEffect } from 'react';
import Card from './Card'

function Portafolio() {


    const datos = [
        {
            title: 'Titulo_1',
            subtitle: 'Subtitulo_1',
            image: 'images/p1.jpg'
        },
        {
            title: 'Titulo_2',
            subtitle: 'Subtitulo_2',
            image: 'images/p2.jpg'
        },
        {
            title: 'Titulo_3',
            subtitle: 'Subtitulo_3',
            image: 'images/p3.jpg'
        },
        {
            title: 'Titulo_4',
            subtitle: 'Subtitulo_4',
            image: 'images/p4.jpg'
        },
        {
            title: 'Titulo_5',
            subtitle: 'Subtitulo_5',
            image: 'images/p5.jpg'
        },
        {
            title: 'Titulo_6',
            subtitle: 'Subtitulo_6',
            image: 'images/p6.jpg'
        }
    ]
    return (
        <div>
            <section className="site-section" id="section-portfolio">
                <div className="container">
                    <div className="row">
                        <div className="section-heading text-center col-md-12">
                            <h2>Featured <strong>Portfolio</strong></h2>
                        </div>
                    </div>
                    <div className="filters">
                        <ul>
                            <li className="active" data-filter="*">All</li>
                            <li data-filter=".packaging">Packaging</li>
                            <li data-filter=".mockup">Mockup</li>
                            <li data-filter=".typography">Typography</li>
                            <li data-filter=".photography">Photography</li>
                        </ul>
                    </div>

                    <div className="filters-content">
                        <div class="row grid">
                            {
                                datos.map((value) => {
                                    return <Card
                                        title={value.title}
                                        subtitle={value.subtitle}
                                        imagen={value.image} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Portafolio;
