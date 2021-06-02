import React from 'react';
import "./styles/Cards2.css";

export default function Cards2(props) {
    return (
        <>
            <div class="cards2">
                <div class="pies-cards2">
                    <div class="iconos2">
                        <div class="fecha2">
                            <text class="diaMes2">{props.data1.fecha}</text>
                        </div>
                        <div class="mensaje2">
                            <img class="nube2" src={props.data1.nube} alt=""/>
                            <text class="numMensajes2">{props.data1.mensaje}</text>
                        </div>
                        <div class="clip2">
                            <text class="numClip2">{props.data1.textClip}</text>
                            <img class="icClip2" src={props.data1.clip} alt=""/>
                        </div>
                    </div>
                    <img class="imag2" src={props.data1.imagenPerfil} alt="" />
                </div>
                <div class="cabecera-cards2">
                    <div class={props.data1.themeTitulo}>
                        <text class={props.data1.themeTexto}>{props.data1.titulo}</text>
                    </div>
                    <div class="puntos2">
                        <vec class="vec12"></vec>
                        <vec class="vec22"></vec>
                        <vec class="vec32"></vec>
                    </div>
                </div>
                <div class="textoMedio2">
                    <div class="tic">
                        <div class={props.data1.circuloAct}></div>
                        <div class={props.data1.ticAct}></div>
                    </div>
                    <text class={props.data1.textoT}>{props.data1.descripcion}</text>
                </div>
            </div>
        </>
    )
}
