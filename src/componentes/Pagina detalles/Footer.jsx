import React from 'react'
import { Link } from 'react-router-dom'
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { AiFillFacebook } from "react-icons/ai";

const Footer = () => {
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
                    <Link to="/financiamiento">Financiamiento</Link>
                </li>
                <li className="FooterLink cinco">
                    <Link to="/sedes">Sedes</Link>
                </li>
                <li className="FooterLink seis">
                    <Link to="/preguntasfrecuentes">Preguntas Frecuentes</Link>
                </li>
                <li className="FooterLink siete">
                    <Link to="/testimonios">Testimoniales</Link>
                </li>
                <li className="FooterLink ocho">
                    <Link to="/blog">Blog</Link>
                </li>
                <li className="FooterLink nueve">
                    <Link to="/contacto">Contacto</Link>
                </li>
                <li className="FooterLink diez">
                    <Link to="/librodequejas">Libro de quejas</Link>
                </li>
            </ul>
        </div>
        <div className="FooterRedes">
                
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
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
        <p className='footerley'>
                LA AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, en su carácter de Órgano de Control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que interpongan quienes resulten afectados en sus derechos por incumplimiento de las normas vigentes en materia de protección de datos personales.
        </p>

        <div className="footerAyuda">
            <p>
                Ayuda
            </p>

            <div className="AyudaPreguntas">
                <Link to="/preguntasFrecuentes">Preguntas Frecuentes</Link>
                <hr />
                <Link to="/contacto">Contacto</Link>
                <hr />
            </div>
        </div>
    </div>
  )
}

export default Footer