import { View, Text, TouchableOpacity, StatusBar, Image, ImageBackground } from 'react-native';
import stylePerguntas from '../configs/css/style_perguntas';
import * as Animatable from 'react-native-animatable';
import { useNavigation, useRoute} from '@react-navigation/native';

const QuartaPergunta = () => {
  const navigation = useNavigation(); 
  const route = useRoute();
  const { novaPontuacao: novaPontuacao2 } = route.params ? route.params : {};

  const respostaCerta = () => {
    const novaPontuacao3 = novaPontuacao2+1;
    navigation.navigate('QuintaPergunta', {novaPontuacao2: novaPontuacao3});
  }

  const respostaErrada = () => {
    const novaPontuacao3 = novaPontuacao2+0;
    navigation.navigate('QuintaPergunta', {novaPontuacao2: novaPontuacao3});
  }

  return(
    <ImageBackground source={require('../configs/img/imagensPerguntas/imagem_fundo_quiz.jpg')} style={stylePerguntas.container}>
      <StatusBar backgroundColor="#202020" barStyle="light-content"/>
      <View style={stylePerguntas.conteudoPrincipal}>
        <View style={stylePerguntas.headerPerguntas}>
          <Text style={stylePerguntas.textoHeader}>Perguntas: 4 / 5</Text>
          <Text style={stylePerguntas.textoHeader}>Pontuação: {novaPontuacao2}</Text>
        </View>

        <View style={stylePerguntas.campoImagem}>
          <Image style={stylePerguntas.imagemPergunta} source={require('../configs/img/imagensPerguntas/quartaImagem.jpg')} />
        </View>

        <View style={stylePerguntas.cntQuestao}>
          <Text style={stylePerguntas.txtQuestao}>Qual é o nome da irmã mais nova de Eleven (Onze) que também possui habilidades psicocinéticas?</Text>
        </View>

        <View style={stylePerguntas.botoesQuestoes}>
          <TouchableOpacity onPress={respostaCerta} style={stylePerguntas.btnQuestao}>
            <Text style={stylePerguntas.respostaQuestao}> a) Eight (Oito).</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaErrada} style={stylePerguntas.btnQuestao}>
            <Text style={stylePerguntas.respostaQuestao}> b) Nine (Nove).</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaErrada} style={stylePerguntas.btnQuestao}>
            <Text style={stylePerguntas.respostaQuestao}> c) Ten (Dez).</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaErrada} style={stylePerguntas.btnQuestao}>
            <Text style={stylePerguntas.respostaQuestao}> d) Seven (Sete)</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

export default QuartaPergunta;