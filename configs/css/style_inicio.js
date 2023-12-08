import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#000000',
  },
  containerImagem:{
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  conteudo:{
    flex: 5,
    backgroundColor: '#fefefe',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  headerConteudo:{
    width: '100%',
    height: 60,
    backgroundColor: '#020205',
    justifyContent: 'center',
    padding: '30px 20px',
  },
  texto:{
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 500,
    fontFamily: 'Verdana',
    textAlign: 'center',
  },
  titulosConteudo:{
    margin: '30px 20px',
  },
  tituloDescricao:{
    color: '#a3a3a3',
    fontSize: 17,
    fontFamily: 'Verdana',
    fontWeight: 600,
  },
  headerInformacoes:{
    width: '100%',
    height: 35,
    backgroundColor: '#020205',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  descricao:{
    color: '#cccccc',
    fontSize: 14,
    fontFamily: "Verdana",
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textoHeader:{
    color: '#ffffff',
    fontWeight: 'bold',
    fontFamily: "Verdana",
  },
  descricaoConteudo:{
    backgroundColor: '#ffffff',
    border: '1px solid #0000005e',
    padding: 5,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
  textoDescricao:{
    color: '#2f2d2d',
    textAlign: 'justify',
    padding: 10,
    fontFamily: "Verdana",
    fontSize: 16,
    fontWeight: 400,
  },
  imageBakcgroundFundo:{
    width: '100%',
    height: 580,
    resizeMode: 'cover',
  },
  btnComecar:{
    width: '100%',
    height: 50,
    backgroundColor: '#020205',
    borderRadius: 10,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBtn:{
    color: '#ffffff',
    fontSize: 17,
    fontFamily: "Verdana",
    fontWeight: 500,
  }
});

export default styles;