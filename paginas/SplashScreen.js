import { View, Text, TouchableOpacity, StatusBar, Image, ImageBackground } from 'react-native';
import styles from '../configs/css/styles';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation(); 

  return(
    <View style={styles.container}>
      <StatusBar backgroundColor="#202020" barStyle="light-content"/>
      <ImageBackground source={require('../configs/img/image_content.jpg')} style={styles.containerImagem}>
        <Animatable.Image animation="flipInY" style={styles.campoImagem} source={require('../configs/img/logo_stranger_things.png')} />
      </ImageBackground>

      <Animatable.View animation="fadeInUp" delay={300} style={styles.conteudo}>
        <Text style={styles.titulo}>Descubra o mundo sombrio de Stranger Things com nosso incrível quiz!</Text>
        <Text style={styles.texto}>Faça seu Login para começar</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.btn}>
          <Text style={styles.btntitulo}>EMBARQUE NESSA AVENTURA!</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

export default SplashScreen;