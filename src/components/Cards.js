import React from 'react';
import "./styles/Cards.css";

export default function Cards(props) {
    return (
        <>
            <div class="cards1">
                <div class="pies-cards1">
                    <div class="iconos">
                        <div class="fecha">
                            <text class="diaMes">{props.data.fecha}</text>
                            <div class="icCalendario">
                                <vec class="calendario"></vec>
                                <vec class="compCal"></vec>
                            </div>
                        </div>
                        <div class="mensaje">
                            <img class="nube" src={props.data.nube} alt=""/>
                            <text class="numMensajes">{props.data.mensaje}</text>
                        </div>
                        <div class="clip">
                            <text class="numClip">{props.data.textClip}</text>
                            <img class="icClip" src={props.data.clip} alt=""/>
                        </div>
                        <elipse class="bolita"></elipse>
                    </div>
                    <img class="imag" src={props.data.imagenPerfil} alt="" />
                </div>
                <div class="cabecera-cards1">
                    <div class={props.data.themeTitulo}>
                        <text class={props.data.themeTexto}>{props.data.titulo}</text>
                    </div>
                    <div class="puntos1">
                        <vec class="vec1"></vec>
                        <vec class="vec2"></vec>
                        <vec class="vec3"></vec>
                    </div>
                </div>
                <text class="textoMedio">{props.data.descripcion}</text>
                


            </div>
        </>
    )
}
