import { View, Text, TouchableOpacity, StatusBar, Image, ImageBackground } from 'react-native';
import styles from '../configs/css/styles';
import * as Animatable from 'react-native-animatable';
import { useNavigation, useRoute} from '@react-navigation/native';

const ResultadoTela = () => {
  const navigation = useNavigation(); 
  const route = useRoute();
  const { novaPontuacao3: novaPontuacao4 } = route.params ? route.params : {};

  var mensagem = [];

  if(novaPontuacao4 == 0){
    mensagem = "Que pena! Você não conseguiu acertar nenhuma questão";
  }else if(novaPontuacao4 == 1 || novaPontuacao4 == 2){
    mensagem = "Uhhhh, foi por pouco, Tente Novamente";
  }else if(novaPontuacao4 == 3 || novaPontuacao4 == 4){
    mensagem = "Parece que você realmente sabe sobre a Série!";
  }else if(novaPontuacao4 == 5){
    mensagem = "Mandou bem demais, você realmente sabe sobre a série";
  }

  return(
    <View style={styles.container}>
      <StatusBar backgroundColor="#202020" barStyle="light-content"/>
      <ImageBackground source={require('../configs/img/imagensPerguntas/imagemResul.jpg')} style={styles.containerImagem2}>
        <Animatable.Image animation="flipInY" style={styles.campoImagem} source={require('../configs/img/logo_stranger_things.png')} />
      </ImageBackground>

      <Animatable.View animation="fadeInUp" delay={300} style={styles.conteudo2}>
        <Image style={{ width: 100, height: 100, marginLeft: 75, marginTop: 15, }} source={require('../configs/img/trofeu.png')}/>
        <Text style={{ marginTop: 30, fontFamily: "Verdana", fontSize: 18, textTransform: 'uppercase', marginBottom: 5}}> {mensagem}</Text>
        <Text style={styles.texto}>A sua pontuação foi de: {novaPontuacao4} Pontos</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Inicio')} style={styles.btn}>
          <Text style={styles.btntitulo}>VOLTAR AO MENU INICIAL</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

export default ResultadoTela;