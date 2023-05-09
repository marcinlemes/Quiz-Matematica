import React, {useState} from "react";
import {View, Text, ImageBackground, TextInput, TouchableWithoutFeedback, Keyboard, Pressable, Image} from 'react-native';

import imgFundo from '../../assets/background.png';
import botaoProxima from '../../assets/btn_proxima.png';
import botaoResponder from '../../assets/btn_responder.png';
import ComponenteModal from "../../Componentes/Modal";

import {VerificaRespostaCerta, RetornaQuestao} from '../../Funções/';

import estilos from "./estilos";

export default function PaginaQuiz(){

    const dismissKeyboard = () => {
        Keyboard.dismiss();
      };

    const [resposta, setResposta] = useState(""); // variavel de estado da resposta do usuario
    const [modal, setModal] = useState(false); // variavel de estado da visibilidade do modal
    const [mensagem, setMensagem] =useState(); // variavel de estado que me permite escolher qual mensagem eu quero exibir
    const [questao, setQuestao] = useState(RetornaQuestao()) // variavel de estado que me permite reeniciar a pergunta

      function exibeMensagemAcerto(){ // função que altera a variavel de estado "mensagem" se a resposta estiver certa
        setMensagem("Parabéns! \n Você acertou!")
        setModal(true)
      }

      function exibeMensagemErro(){ // função que altera a variavel de estado "mensagem" se a resposta estiver errada
        setMensagem("Ops! \n Você errou! ")
        setModal(true)
      }


    function RespondeQuestao() { // função que consome o serviço que verifica se a resposta está certa com os parâmetros da resposta digitada pelo usuário, e do item Resultado do objeto criado na váriavel questão
      const respondeuCerto = VerificaRespostaCerta(resposta, questao.Resultado)

      if(respondeuCerto){
        exibeMensagemAcerto();
      }else{
        exibeMensagemErro();
      }

      ProximaQuestao(); //Quando eu clicar no botão que tem essa função atribuida (RespondeQuestao), ele vai automaticamente gerar uma questão nova

      if(resposta == ""){
        alert("Você precisa digitar uma resposta");
      }

 }

 function ProximaQuestao() { // função que reenicia a pergunta gerando outra
    const proximaQuestao = RetornaQuestao();

    setQuestao(proximaQuestao)
    setResposta()
 }
    return(
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <ImageBackground source={imgFundo} style={estilos.container}>
            <View style={estilos.quadro}>
                <Text style={estilos.textoQuadro}>Pergunta</Text>
                <Text style={estilos.textoQuadro}>{questao.Pergunta} = ?</Text>

                <TextInput 
                style={estilos.input}
                keyboardType="number-pad"
                value={resposta}
                onChangeText={respostaDigitada => setResposta(respostaDigitada.replace(/[^0-9]/g, ''))}
                />
            </View>

            <Pressable style={estilos.botao1} onPress={() => RespondeQuestao()}>
                <Image source={botaoResponder} />
            </Pressable>

            <Pressable style={estilos.botao2} onPress={() => ProximaQuestao()}>
                <Image source={botaoProxima} />
            </Pressable>

            <ComponenteModal visible={modal} fecharModal={()=>setModal(false)} mensagem={mensagem}/>

        </ImageBackground>
    </TouchableWithoutFeedback>
    )
}