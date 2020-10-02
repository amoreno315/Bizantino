import React from 'react'
import './hoverCardStyle.css'

// Card 1 content
const number = "01"
const title = "Mortal Kombat"
const text = "Mortal Kombat Trilogy es el quinto videojuego de la serie de videojuegos de lucha Mortal Kombat, la segunda actualización de la tercera entrega, publicado por Midway Games en 1996 inicialmente para Nintendo 64."

// Card 2 content
const number0 = "02"
const title0 = "Tienda"
const text0 = "Una tienda o negocio es un tipo de establecimiento comercial, físico o virtual, donde el comprador puede adquirir tanto bienes como servicios a cambio de dinero. ¿Qué estas esperando para ver los nuestros productos?. "


// Card 3 content
const number1 ="03"
const title1 = "Winter is coming"
const text1 = "Probablemente leiste el titulo y estas esperando algo de Game of Thrones, lamentablemente esta pagina es solo para practicar Css3 en React asique sera mejor que entres y veas lo que Css3 puede hacer"

// Visible component.
const HoverCard = () => {


    return (
        <div className="container">
            <div className="card">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div className="content">
                    <h2>{number}</h2>
                    <h3>{title}</h3>
                    <br></br>
                    <p>{text}</p>
                    <a href='/' > Read More</a>
                </div>
            </div>
            <div className="card">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div className="content">
                    <h2>{number0}</h2>
                    <h3>{title0}</h3>
                    <br></br>
                    <p>{text0}</p>
                    <a href='/' > Read More</a>
                </div>
            </div>
            <div className="card">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div className="content">
                    <h2>{number1}</h2>
                    <h3>{title1}</h3>
                    <br></br>
                    <p>{text1}</p>
                    <a href='/' > Read More</a>
                </div>
            </div>
        </div>
    )
}

export default HoverCard