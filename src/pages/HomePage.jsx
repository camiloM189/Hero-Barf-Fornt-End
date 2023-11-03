import React from 'react'
import { useForm } from '../hook/useForm';
import { useDispatch } from 'react-redux';
import { enviarCorreo } from '../Actividades/EnviarCorreoThunks';
import Swal from 'sweetalert2';

export const HomePage = () => {
  const dispatch = useDispatch()
  const {onInputChange,onResetForm,Nombre,Comentario,Email,Telefono} = useForm('');



  const enviarEmail = (event) => {
      event.preventDefault();
   
      if(Email === undefined){
          const errorMessage = 'El Email es necesario'
  
          Swal.fire('Error al enviar el correo',errorMessage,'error')
          
          return
        }else if(Email.length === 0){
          const errorMessage = 'El Email es necesario'
  
          Swal.fire('Error al enviar el correo',errorMessage,'error')
          
          return
        };
        

        if(Telefono === undefined){
          const errorMessage = 'El Telefono es necesario';

          Swal.fire('Error al enviar el correo',errorMessage,'error');
          return
        }else if(Telefono.length === 0){
          const errorMessage = 'El Telefono es necesario';

          Swal.fire('Error al enviar el correo',errorMessage,'error');
          return

        }
  
         dispatch(enviarCorreo({Nombre,Comentario,Email,Telefono}));
         const errorMessage = 'se ha enviado con exito';
  
           Swal.fire('El correo se ha enviado con exito',errorMessage,'success');
           onResetForm();
  }







  return (
    <>
    <nav class="navbar navbar-expand-lg sticky-lg-top bg-light">
    <div class="container-fluid ">
      <a class="navbar-brand barra-de-navegador" href="#">
        <img src="logo-de-hero.png" alt="" className='logo'/>
        
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link  " href="#productos" aria-current="page">Productos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#que-es">¿Que es?</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#beneficios">Beneficios</a>
          </li>
         
        
          <li class="nav-item">
            <a class="nav-link " href="#contactanos">Contactanos</a>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
  <div className=''>
    <img src="primera-img-100.jpg" alt="" className='img-fluid mb-5'/>
  </div>
  <article className='container mb-5  mt-5' >
   <h1 id='productos'>Nuestro Producto</h1>

  <div className='row mt-5'>
          <div className='col-lg-6  text-start position-relative '>
          <p className=''>En cada porcion, encontraras jugoso pollo de alta calidad, una fuente de proteinas magras
           que promueve la salud muscular y la energia vital. La zanahoria fresca añade una dosis extra 
           de fibra y antioxidantes, que mantienen su piel y pelaje radiantes y su sistema inmunologico 
           fuerte. La avena, un grano integral, proporciona la energia sostenible necesaria para 
           mantener a tu amigo activo y saludable.</p>
        <br />
      <p >
      Nuestra dieta BARF es perfecta para aquellos que buscan una opcion de alimentacion 
      natural y equilibrada. Sin aditivos, sin conservantes, sin rellenos; solo los ingredientes más
      frescos y nutritivos para promover la vitalidad y el bienestar de tu mascota. Dale a tu peludo 
      amigo la comida que la madre naturaleza hubiera elegido. ¡Prueba la dieta BARF hoy y 
      observa la diferencia en su salud y felicidad!"</p>

          </div>
          <div className='col-lg-6'>
          <img src="producto.jpg" className='img-fluid' alt="" />

          </div>
        </div>



  </article>

<div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="carrusel1-100.jpg" class="d-block w-100 img-thumbnail" alt="..."/>
    </div>
    <div class="carousel-item"> 
      <img src="carrusel2-100.jpg" class="d-block w-100 img-thumbnail" alt="..."/>
    </div>
    <div class="carousel-item"> 
      <img src="carrusel3-100.jpg" class="d-block w-100 img-thumbnail" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>





   <article className='container mb-5  mt-5'>
   <h1 id="que-es">¿Que es la dieta BARF?</h1>

   <div className='row mt-5'>
          <div className='col-lg-6  text-start position-relative '>
          <p className=''>BARF es el acronimo de Biologically Appropriate Raw Food, o lo que es lo mismo, Alimentacion 
        Cruda Biologicamente Adecuada. Esta dieta fue constituido por Ian Billinghurst, un veterinario
        australiano defensor de una alimentacion a base de proteina animal, a la que hay se le incorpora 
        un breve porcentaje de frutas, verduras, huevos y vísceras. La dieta BARF no contiene cereales ni conservantes,
        por lo que es 100% natural, siendo esta su principal caracteristica.</p>
        <br />
      <p >
        La dieta BARF para gato o perro no solo se trata de dar carne cruda. Es necesario proporcionar
        la cantidad suficiente proteina, grasas, enzimas, minerales, vitaminas y antioxidantes. Por 
        tanto, preparar un menu de la dieta BARF lleva tiempo.</p>

          </div>
          <div className='col-lg-6'>
          <img src="que-es-dieta-barf.jpg" className='img-fluid' alt="" />

          </div>
        </div>
    
      

   </article>


     <article className='mt-5 container ' id="beneficios">
 

      <h1 className='mb-3 '>BENEFICIOS DE LA DIETA B.A.R.F</h1>
        <div className='row mt-5'>
          <div className='col-lg-6  text-center position-relative '>
          <p className='top-50 position-absolute Aumenta-la-energia-del-animal fs-5'>Aumenta la energia <br />
          del animal.</p>

          </div>
          <div className='col-lg-6 beneficios-1'>
          <img src="perrosenergia-100.jpg" className='img-fluid' alt="" />

          </div>
        </div>
        <div className='row mt-5 '>
          <div className='col-lg-6 col-12 text-center beneficios-div2'>
          <img src="perro2.jpg" className='img-fluid' alt="" />
          

          </div>
          <div className='col-lg-6 col-12 position-relative '>
          <p className='text-center fs-5 top-50 position-absolute se-mejora-el-pelaje beneficios-2'>Se mejora el pelaje,<br />
           tanto el color como el brillo, <br />
            y evita una caída excesiva de pelo.</p>

          </div>
        </div>
        <div className='row mt-5 position-relative'>
          <div className='col-lg-6  text-center '>
          <p className='text-center fs-5 top-50 position-absolute  nuestro-perro beneficios-3'>Nuestro perro no estara <br /> 
            expuesto a químicos, por lo que se <br />
            aumenta su longevidad.</p>
          
           
          </div>
          <div className='col-lg-6  col-12 beneficios-div2'>
          <img src="perro3.jpg" className='img-fluid' alt="" />
          

          </div>
        </div>
        <div className='row mt-5 '>
          <div className='col-lg-6 col-12 beneficios-div4'>
          <img src="perro4.jpg" className='img-fluid' alt="" />
        
          

          </div>
          <div className='col-lg-6 col-12 position-relative'>
          <p className='text-center fs-5 top-50 position-absolute el-sistema-inmunologico beneficios-4'>El sistema inmunologico <br />
            se vuelve mas fuerte.</p>

          </div>
        </div>
    </article>



    <div className='container animate__animated animate__backInDown' id='contactanos'>
        <article class="text-center mb-3 mt-5">
          <h1>¿Interesado?</h1>
          <p class="fs-5">Para mas informacion, puedes contactarnos en <a href="https://mail.google.com/mail/u/5">herobarf2020@gmail.com</a> </p>
        </article>
        <article class="">
          <form onSubmit={enviarEmail}>
            <div class="mb-3"> 
              <label class="form-label"  for="name">Nombre:</label>
              <input class="form-control "
               id="name" name="Nombre"
               onChange={onInputChange}
               placeholder="Tu nombre"
               type="text"
               value={Nombre || ''}
                 />
            </div>
            <div class="mb-3">
              <label class="form-label " for="email">Email:</label>
    

 
            <input type="email" className="form-control mb-4 input-text" 
           placeholder="Email"
				   value={Email || ''}
				   name='Email'
				   onChange={onInputChange}
				 
				   
				   />
            </div>
            <div class="mb-3">
              <label class="form-label " for="email">Telefono:</label>
    

 
            <input type="text" className="form-control mb-4 input-text" 
             placeholder="Telefono"
				    value={Telefono || ''}
				    name='Telefono'
				    onChange={onInputChange}
				 
				   
				   />
            </div>
            <div class="mb-3">
              <textarea class="form-control"
               for="comments " rows="5"
                name="Comentario" id="comments" 
                placeholder="Dejanos Tus Comentarios"
                value={Comentario || ''} 
                onChange={onInputChange}
                 ></textarea>
            </div>
           
            <div class="mb-3">
              <input class="btn btn-lg btn-success" type="submit" 
             />
            </div>
           
            
          </form>
        </article>
        </div>

    <div className='mt-5 mb-5'></div>
     <footer class="bg-dark p-3">
      <div class="container text-center">
      <nav class="d-flex  justify-content-evenly">
        <a href="https://www.facebook.com/profile.php?id=100089899257576" target="_blank"><i class="bi bi-facebook fs-3 footer"></i></a>
        {/* <a href="https://twitter.com" target="_blank"><i class="bi bi-twitter fs-3 footer"></i></a>
        <a href="https://github.com" target="_blank"><i class="bi bi-github fs-3 footer"></i></a>
        <a href="https://youtube.com" target="_blank"><i class="bi bi-youtube fs-3 footer"></i></a> */}
        <a href="https://www.instagram.com/heros.barf/" target="_blank"><i class="bi bi-instagram fs-3 footer"></i></a>
        {/* <a href="https://messenger.com" target="_blank"><i class="bi bi-messenger fs-3 footer"></i></a> */}
        <a href="https://whatsapp.com" target="_blank"><i class="bi bi-whatsapp fs-3 footer"></i></a>

      </nav>
      <small class="text-white">&copy;Hero Barf 2023</small>
    </div>
    </footer>
   </>
  )
}
