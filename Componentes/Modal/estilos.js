import {StyleSheet} from 'react-native';

const estilos = StyleSheet.create({

quadro: {
    width: '80%',
    height: 200,
    backgroundColor: '#004c2a',
    borderWidth: 5,
    borderColor: 'white',
    marginTop: 150,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'relative'
},

fecharModal:{
    borderRadius: 99,
    borderColor: 'white',
    borderWidth: 5,
    padding: 7,
    position: 'absolute',
    top: -5,
    right: -5
},

botaoX:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
},



textoQuadro: {
    fontFamily: "AnnieUseYourTelescope_400Regular",
    fontSize: 60,
    color: 'white',
    textAlign: 'center',
    lineHeight: 66
},

})

export default estilos;