import React from 'react';
import Tarjetas3 from './Tarjetas3'

function Testimonios() {
    
    const datos = [
        {
            imagen: 'images/person_1.jpg',
            testimonio: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
            nombre: 'Ethan McCown, CEO'
        },
        {
            imagen: 'images/person_2.jpg',
            testimonio: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
            nombre: 'Ethan McCown, CEO'
        },
        {
            imagen: 'images/person_3.jpg',
            testimonio: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
            nombre: 'Ethan McCown, CEO'
        },
        {
            imagen: 'images/person_4.jpg',
            testimonio: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
            nombre: 'Ethan McCown, CEO'
        }

        
    ]
    return (
        <section className="site-section">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-12">
                        <div className="section-heading text-center">
                            <h2>Client <strong>Testimonial</strong></h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div classNameName="filters-content">
                        <div className="row grid">
                            {
                                datos.map((value) => {
                                    return <Tarjetas3
                                        imagen={value.imagen}
                                        testimonio={value.testimonio}
                                        nombre={value.nombre} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonios;