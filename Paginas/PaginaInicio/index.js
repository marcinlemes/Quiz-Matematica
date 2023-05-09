import React from "react";
import {View, Text, ImageBackground, Pressable, Image} from 'react-native';


import imgFundo from '../../assets/background.png';
import botaoIniciar from '../../assets/btn_iniciar.png';

import estilos from "./estilos";

export default function PaginaInicio(props){


    return(
        <ImageBackground source={imgFundo} style={estilos.container}>
           
            <View style={estilos.quadroEstatico}>
                <Text style={estilos.textoQuadro}>Quiz de Matemática</Text>
            </View>

            <Pressable style={estilos.pressable} onPress={() => {props.navigation.navigate('Quiz')}}>
                <Image source={botaoIniciar} />
            </Pressable>

        </ImageBackground>
    )
}