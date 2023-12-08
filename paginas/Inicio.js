import { View, Text, TouchableOpacity, StatusBar, Image, ImageBackground } from 'react-native';
import stylesInicio from '../configs/css/style_incio';
import * as Animatable from 'react-native-animatable';
import { useNavigation, useRoute} from '@react-navigation/native';

const Inicio = () => {
  const navigation = useNavigation(); 
  const route = useRoute();
  const { nome } = route.params ? route.params : {};

  return(
    <View style={stylesInicio.container}>
      <StatusBar backgroundColor="#202020" barStyle="light-content"/>
      <ImageBackground source={require('../configs/img/imagem_inicio.jpg')} style={stylesInicio.containerImagem}>
      </ImageBackground>

      <Animatable.View animation="fadeInUp" delay={300} style={stylesInicio.conteudo}>
          <ImageBackground style={stylesInicio.imageBakcgroundFundo} source={require('../configs/img/imagem_sobre.jpg')}>
            <View style={stylesInicio.headerConteudo}>
              <Text style={stylesInicio.texto}>Seja bem vindo: {nome}</Text>
              <Text style={stylesInicio.descricao}>Esperamos que goste do nosso quiz😉</Text>
            </View>

            <View style={stylesInicio.titulosConteudo}>
              <View style={stylesInicio.headerInformacoes}>
                <Text style={stylesInicio.textoHeader}>COMO O QUIZ FUNCIONA?</Text>
              </View>

              <View style={stylesInicio.descricaoConteudo}>
                <Text style={stylesInicio.textoDescricao}>Prepare-se para enfrentar as perguntas mais desafiadoras sobre o fascinante mundo de Stranger Things! Este quiz vai testar seus conhecimentos sobre a série de ficção científica e terror dos irmãos Duffer. Ao longo do jogo, você será desafiado com uma seleção cuidadosamente elaborada de perguntas que abrangem desde detalhes dos personagens até os momentos mais icônicos da série. Esteja preparado para mergulhar nas profundezas do Mundo Invertido enquanto enfrenta questões que vão testar sua memória e sua capacidade de observação.</Text>
              </View>

              <TouchableOpacity onPress={() => navigation.navigate('PrimeiraPergunta')} style={stylesInicio.btnComecar}>
                <Text style={stylesInicio.textoBtn}>CLIQUE PARA COMEÇAR O QUIZ</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </Animatable.View>
    </View>
  );
}

export default Inicio;