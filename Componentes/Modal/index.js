import React from 'react'
import {Modal, View, Text, Pressable} from 'react-native';

import estilos from './estilos';

export default function ComponenteModal(props){
    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.visible}
            >


            <View style={estilos.quadro}>
                <Pressable onPress={props.fecharModal} style={estilos.fecharModal}>
                        <Text style={estilos.botaoX}>X</Text>
                </Pressable>

                <View sytle={estilos.containerTexto}>
                    <Text style={estilos.textoQuadro}>{props.mensagem}</Text>
                </View>

            </View>
        </Modal>
    )
}