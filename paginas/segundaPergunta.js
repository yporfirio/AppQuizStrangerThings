import { View, Text, TouchableOpacity, StatusBar, Image, ImageBackground } from 'react-native';
import stylePerguntas from '../configs/css/style_perguntas';
import * as Animatable from 'react-native-animatable';
import { useNavigation, useRoute} from '@react-navigation/native';

const SegundaPergunta = () => {
  const navigation = useNavigation(); 
  const route = useRoute();
  const { pontuacao } = route.params ? route.params : {};

  const respostaCerta = () => {
    const novaPontuacao = pontuacao+1;
    navigation.navigate('TerceiraPergunta', {pontuacao: novaPontuacao});
  }

  const respostaErrada = () => {
    const novaPontuacao = pontuacao+0;
    navigation.navigate('TerceiraPergunta', {pontuacao: novaPontuacao});
  }

  return(
    <ImageBackground source={require('../configs/img/imagensPerguntas/imagem_fundo_quiz.jpg')} style={stylePerguntas.container}>
      <StatusBar backgroundColor="#202020" barStyle="light-content"/>
      <View style={stylePerguntas.conteudoPrincipal}>
        <View style={stylePerguntas.headerPerguntas}>
          <Text style={stylePerguntas.textoHeader}>Perguntas: 2 / 5</Text>
          <Text style={stylePerguntas.textoHeader}>Pontuação: {pontuacao}</Text>
        </View>

        <View style={stylePerguntas.campoImagem}>
          <Image style={stylePerguntas.imagemPergunta} source={require('../configs/img/imagensPerguntas/imagem_perguntas2.jpg')} />
        </View>

        <View style={stylePerguntas.cntQuestao}>
          <Text style={stylePerguntas.txtQuestao}>Qual é o nome da organização governamental responsável pelos experimentos no Laboratório Nacional de Hawkins?</Text>
        </View>

        <View style={stylePerguntas.botoesQuestoes}>
          <TouchableOpacity style={stylePerguntas.btnQuestao} onPress={respostaCerta}>
            <Text style={stylePerguntas.respostaQuestao}> a) Laboratório de Pesquisas Científicas de Hawkins.</Text>
          </TouchableOpacity>

          <TouchableOpacity style={stylePerguntas.btnQuestao} onPress={respostaErrada}>
            <Text style={stylePerguntas.respostaQuestao}> b) Departamento de Defesa de Hawkins.</Text>
          </TouchableOpacity>

          <TouchableOpacity style={stylePerguntas.btnQuestao} onPress={respostaErrada}>
            <Text style={stylePerguntas.respostaQuestao}> c) Agência Nacional de Investigação de Hawkins.</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaErrada} style={stylePerguntas.btnQuestao}>
            <Text style={stylePerguntas.respostaQuestao}> d) Laboratórios de Energia Avançada de Hawkins.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

export default SegundaPergunta;