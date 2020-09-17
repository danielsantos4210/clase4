import React from 'react'
import Tarjetas4 from './Tarjetas4';

function Servicios() {

    const datos = [
        {
            icono: 'icon-browser2',
            title: 'Web Design',
            body: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
            link: 'Learn More'
        },
        {
            icono: 'icon-presentation',
            title: 'Search Engine Optimization',
            body: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
            link: 'Learn More'
        },
        {
            icono: 'icon-video2',
            title: 'Video Editing',
            body: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
            link: 'Learn More'
        }
    ]
    return (
        <section class="site-section pb-0" id="section-services">
            <div class="container">

                <div class="row mb-4">
                    <div class="col-md-12">
                        <div class="section-heading text-center">
                            <h2>My <strong>Services</strong></h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div className="filters-content">
                            <div class="row grid">
                                {
                                    datos.map((value) => {
                                        return <Tarjetas4
                                            icono={value.icono}
                                            title={value.title}
                                            body={value.body}
                                            link={value.link} />
                                    })
                                }
                         </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Servicios;