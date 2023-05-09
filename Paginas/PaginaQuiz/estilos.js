import {StyleSheet} from 'react-native';

const estilos = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },

    quadro: {
        width: '80%',
        height: 200,
        backgroundColor: '#004c2a',
        justifyContent: 'center',
        borderWidth: 5,
        borderColor: 'white',
        marginTop: 60,
        alignItems: 'center'
    },

    textoQuadro: {
        fontFamily: "AnnieUseYourTelescope_400Regular",
        fontSize: 52,
        color: 'white',
        textAlign: 'center',
        lineHeight: 55,
    },

    input: {
        width: '80%',
        borderBottomWidth: 3,
        borderBottomColor: 'white',
        fontFamily: "AnnieUseYourTelescope_400Regular",
        fontSize: 45,
        color: 'white',
        textAlign: 'center'
    },

    botao1:{
        marginTop:300,
    },

    botao2:{
        marginTop: 30
    }
})

export default estilos