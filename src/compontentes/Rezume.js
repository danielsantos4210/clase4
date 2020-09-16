import React from 'react';
import Tarjetas from './Tarjetas';
import Tarjetas2 from './Tarjetas2'

function Rezume() {
    const datos1 = [
        {
            title: 'Masteral in Information Technology',
            body: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
            referencia: 'New York University',
            fecha: ' March 2013 - Present'
        },
        {
            title: 'Masteral in Information Technology',
            body: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
            referencia: 'New York University',
            fecha: ' March 2013 - Present'
        },
        {
            title: 'Masteral in Information Technology',
            body: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
            referencia: 'New York University',
            fecha: ' March 2013 - Present'
        },
        {
            title: 'Masteral in Information Technology',
            body: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
            referencia: 'New York University',
            fecha: ' March 2013 - Present'
        }

    ]
    const datos2 = [
        {
            title: 'Lead Product Designer',
            body: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
            referencia: 'Github',
            fecha: ' March 2013 - Present'
        },
        {
            title: 'Lead Product Designer',
            body: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
            referencia: 'Facebook',
            fecha: ' March 2013 - Present'
        },
        {
            title: 'Lead Product Designer',
            body: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
            referencia: 'Twitter',
            fecha: ' March 2013 - Present'
        },
        {
            title: 'Lead Product Designer',
            body: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
            referencia: 'Shopify',
            fecha: ' March 2013 - Present'
        },
    ]



    return (
        <div>
            <section className="site-section " id="section-resume">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <dic className="section-heading text-center">
                                <h2>My <strong>Resume</strong></h2>
                            </dic>
                        </div>
                        <div className="col-md-6">
                            <h2 className="mb-5">Education</h2>
                            <div className="filters-content">
                                <div className="row grid">
                                    {
                                        datos1.map((value) => {
                                            return <Tarjetas
                                                title={value.title}
                                                body={value.body}
                                                referencia={value.referencia}
                                                fecha={value.fecha} />

                                        })
                                    }
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <h2 class="mb-5">Experience</h2>
                            <div className="filters-content">
                                <div class="row grid">
                                    {
                                        datos2.map((value) => {
                                            return <Tarjetas2
                                                title={value.title}
                                                body={value.body}
                                                referencia={value.referencia}
                                                fecha={value.fecha} />

                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Rezume;
/*
export default Rezume;
<section class="site-section " id="section-resume">
		<div class="container">
			<div class="row">
				<div class="col-md-12 mb-5">
					<div class="section-heading text-center">
						<h2>My <strong>Resume</strong></h2>
					</div>





                    <div className="filters-content">
                        <div class="row grid">
                            {
                                datos.map((value) => {
                                    return <Tarjetas
                                        title={value.title}
                                        body={value.body}
                                        referencia={value.referencia}
                                        fecha={value.fecha}/>

                                })
                            }
                </div>
            </div>*/