import {StyleSheet} from 'react-native';

const estilos = StyleSheet.create({
    
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    quadroEstatico: {
        width: '80%',
        height: 200,
        backgroundColor: '#004c2a',
        justifyContent: 'center',
        borderWidth: 5,
        borderColor: 'white',
        marginTop: 60,
    },
    
    textoQuadro: {
        fontFamily: "AnnieUseYourTelescope_400Regular",
        fontSize: 60,
        color: 'white',
        textAlign: 'center',
        lineHeight: 65,
    },

    pressable:{
        marginBottom: 120,
    },

})

export default estilos