import { View, Text, TouchableOpacity, StatusBar, Image, ImageBackground } from 'react-native';
import stylePerguntas from '../configs/css/style_perguntas';
import * as Animatable from 'react-native-animatable';
import { useNavigation, useRoute} from '@react-navigation/native';

const QuintaPergunta = () => {
  const navigation = useNavigation(); 
  const route = useRoute();
  const { novaPontuacao2: novaPontuacao3 } = route.params ? route.params : {};

  const respostaCerta = () => {
    const novaPontuacao4 = novaPontuacao3+1;
    navigation.navigate('ResultadoTela', {novaPontuacao3: novaPontuacao4});
  }

  const respostaErrada = () => {
    const novaPontuacao4 = novaPontuacao3+0;
    navigation.navigate('ResultadoTela', {novaPontuacao3: novaPontuacao4});
  }

  return(
    <ImageBackground source={require('../configs/img/imagensPerguntas/imagem_fundo_quiz.jpg')} style={stylePerguntas.container}>
      <StatusBar backgroundColor="#202020" barStyle="light-content"/>
      <View style={stylePerguntas.conteudoPrincipal}>
        <View style={stylePerguntas.headerPerguntas}>
          <Text style={stylePerguntas.textoHeader}>Perguntas: 5 / 5</Text>
          <Text style={stylePerguntas.textoHeader}>Pontuação: {novaPontuacao3}</Text>
        </View>

        <View style={stylePerguntas.campoImagem}>
          <Image style={stylePerguntas.imagemPergunta} source={require('../configs/img/imagensPerguntas/quintaIMagem.jpg')} />
        </View>

        <View style={stylePerguntas.cntQuestao}>
          <Text style={stylePerguntas.txtQuestao}>Qual é o nome do shopping que se torna um dos principais cenários da terceira temporada de Stranger Things?</Text>
        </View>

        <View style={stylePerguntas.botoesQuestoes}>
          <TouchableOpacity onPress={respostaErrada} style={stylePerguntas.btnQuestao}>
            <Text style={stylePerguntas.respostaQuestao}> a) Hawkins Mall.</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaCerta} style={stylePerguntas.btnQuestao}>
            <Text style={stylePerguntas.respostaQuestao}> b) Starcourt Mall.</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaErrada} style={stylePerguntas.btnQuestao}>
            <Text style={stylePerguntas.respostaQuestao}> c) Upside Down Mall.</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaErrada} style={stylePerguntas.btnQuestao}>
            <Text style={stylePerguntas.respostaQuestao}> d) Arcade Mall.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

export default QuintaPergunta;