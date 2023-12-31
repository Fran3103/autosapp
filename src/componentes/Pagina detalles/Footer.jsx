import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {FaFacebook, FaLinkedin, FaInstagramSquare, FaTwitterSquare, FaYoutube , FaApple, FaAndroid} from "react-icons/fa";
import nollamar  from '../../img/Otras/footerLOgo/dont-call.jpg';
import fiscal  from '../../img/Otras/footerLOgo/DATAWEB.jpg'
import data  from '../../img/Otras/footerLOgo/aaip.jpg'
import ssn  from '../../img/Otras/footerLOgo/SSN.jpg'
import { FiAlertCircle, FiXSquare} from "react-icons/fi";



const Footer = () => {
    
const [visible , setVisible] = useState ("AyudaPreguntas ")




const botonclick = () => {
   
        setVisible("AyudaPreguntas ver")
      
}
const botonCerrar = () => {
   
    setVisible("cerrado")
    
}


  return (
    <div className='ContenedorFooter'>
        <div className="ContenedorFooterLinks">
          
            <ul className='FooterListaLinks'>
                <Link to="/" className='logofooter uno'>LOGO</Link>
                <li className="FooterLink dos">
                    <Link to="/autos">Compra un auto</Link>
                </li>
                <li className="FooterLink tres">
                    <Link to="/vender">Vende un auto</Link>
                </li>
                <li className="FooterLink cuatro">
                    <Link to="/#">Financiamiento</Link>
                </li>
                <li className="FooterLink cinco">
                    <Link to="/sucursales">Sedes</Link>
                </li>
                <li className="FooterLink seis">
                    <Link to="/PreguntasFrecuentesPrincipal">Preguntas Frecuentes</Link>
                </li>
                <li className="FooterLink siete">
                    <Link to="/#">Testimoniales</Link>
                </li>
                <li className="FooterLink ocho">
                    <Link to="/#">Blog</Link>
                </li>
                <li className="FooterLink nueve">
                    <Link to="/service">Service</Link>
                </li>
                <li className="FooterLink diez">
                    <Link to="/#">Libro de quejas</Link>
                </li>
            </ul>
        </div>
        <div className="FooterRedes">
               <FaFacebook />
               <FaInstagramSquare/>
               <FaTwitterSquare/>
               <FaYoutube />
               <FaLinkedin/>
               <FaApple/>
               <FaAndroid/>

        </div>
        <hr />
        <div className="FooterCopy">
            <p>© 2023 Check Movilidad S.A. Todos los derechos reservados.</p>
            <Link to="/politicadeprivacidad"> Políticas de Privacidad </Link>
            <Link to="/politicadeprivacidad"> Terminos y Condiciones </Link>
            <a href="https://autogestion.produccion.gob.ar/consumidores" target='blank'> Defensa al consumidor </a>
        </div>
        <p className="footercuit">
            CUIT N° 30-71594543-2 Shopping DOT 3er Subsuelo- Vedia 3600, CP 1430, Capital Federal, Argentina
        </p>

        <div className="footerlogos">
            <img src={nollamar} alt="nollmar" />
            <img src={data} alt="data" />
            <img src={fiscal} alt="fiscal" />
            <img src={ssn} alt="ssn" />
        </div>
        <p className='footerley'>
                LA AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, en su carácter de Órgano de Control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que interpongan quienes resulten afectados en sus derechos por incumplimiento de las normas vigentes en materia de protección de datos personales.
        </p>

        <div className="footerAyuda" >
            <p onClick={botonclick}>
                <FiAlertCircle/> Ayuda
            </p>

            <div className={visible}   >
                <div className="cerrar"  onClick={botonCerrar}><FiXSquare  /></div>
                <Link to="/PreguntasFrecuentesPrincipal">Preguntas Frecuentes</Link>
                <hr />
                <Link to="/#">Contacto</Link>
                <hr />
            </div>
        </div>
    </div>
  )
}

export default Footer