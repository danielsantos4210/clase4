import React from 'react'
import Tarjetas6 from './Tarjetas6'

function Redes() {
    const datos = [
        {
            icon: 'icon-facebook2'
        },
        {
            icon: 'icon-twitter'
        },
        {
            icon: 'icon-instagram2'
        },
        {
            icon: 'icon-linkedin2'
        },
        {
            icon: 'icon-vimeo'
        }

    ]
    return (
        <footer class="site-footer">
            <div class="container">
                <div class="row mb-5">
                Copyright &copy; <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart text-danger" aria-hidden="true" ></i> by <a href="https://colorlib.com" target="_blank" class="text-primary">Colorlib</a>
                    <div class="col-md-12 text-center">

                        <div className="filters-content">
                            <div class="row grid">
                                {
                                    datos.map((value) => {
                                        return <Tarjetas6
                                            icon={value.icon} />
                                    })
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Redes;