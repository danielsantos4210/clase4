import React from 'react';

function Presentacion() {
    return(
        <section class="site-hero" 
        style={{backgroundImage: 'url("images/image_1.jpg");' }}>
		<div class="container">
			<div class="row intro-text align-items-center justify-content-center">
				<div class="col-md-10 text-center pt-5">

					<h1 class="site-heading site-animate">Hello, I'm <strong class="d-block">Daniel Santos</strong></h1>
					<strong class="d-block text-white text-uppercase letter-spacing">and this is My Rezume</strong>

				</div>
			</div>
		</div>
	</section>
    )
} 
export default Presentacion;
