import { View, Text, TouchableOpacity, StatusBar, Image, ImageBackground } from 'react-native';
import stylePerguntas from '../configs/css/style_perguntas';
import * as Animatable from 'react-native-animatable';
import { useNavigation, useRoute} from '@react-navigation/native';

const PrimeiraPergunta = () => {
  const navigation = useNavigation(); 
  var pontuacao = 0;
  
  const respostaCerta = () =>{
    pontuacao++;
    navigation.navigate('SegundaPergunta', {pontuacao});
  }

  const respostaErrada = () =>{
    pontuacao;
    navigation.navigate('SegundaPergunta', {pontuacao});
  }

  return(
    <ImageBackground source={require('../configs/img/imagensPerguntas/imagem_fundo_quiz.jpg')} style={stylePerguntas.container}>
      <StatusBar backgroundColor="#202020" barStyle="light-content"/>
      <View style={stylePerguntas.conteudoPrincipal}>
        <View style={stylePerguntas.headerPerguntas}>
          <Text style={stylePerguntas.textoHeader}>Perguntas: 1 / 5</Text>
          <Text style={stylePerguntas.textoHeader}>Pontuação: 0</Text>
        </View>

        <View style={stylePerguntas.campoImagem}>
          <Image style={stylePerguntas.imagemPergunta} source={require('../configs/img/imagensPerguntas/questao1.jpg')} />
        </View>

        <View style={stylePerguntas.cntQuestao}>
          <Text style={stylePerguntas.txtQuestao}>Qual é o nome completo do monstro da primeira temporada de Stranger Things, conhecido como Demogorgon?</Text>
        </View>

        <View style={stylePerguntas.botoesQuestoes}>
          <TouchableOpacity style={stylePerguntas.btnQuestao} onPress={respostaErrada}>
            <Text style={stylePerguntas.respostaQuestao}> a) Demogorgon das Sombras.</Text>
          </TouchableOpacity>

          <TouchableOpacity style={stylePerguntas.btnQuestao} onPress={respostaErrada}>
            <Text style={stylePerguntas.respostaQuestao}> b) Demogorgon do Abismo.</Text>
          </TouchableOpacity>

          <TouchableOpacity style={stylePerguntas.btnQuestao} onPress={respostaErrada}>
            <Text style={stylePerguntas.respostaQuestao}> c) Demogorgon do Vazio.</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaCerta} style={stylePerguntas.btnQuestao}>
            <Text style={stylePerguntas.respostaQuestao}> d) Demogorgon do Mundo Invertido.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

export default PrimeiraPergunta;