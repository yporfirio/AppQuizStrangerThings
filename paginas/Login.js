import { View, Text, TouchableOpacity, StatusBar, Image, ImageBackground, TextInput} from 'react-native';
import stylesLogin from '../configs/css/style_login';
import * as Animatable from 'react-native-animatable';
import { useNavigation, useRoute} from '@react-navigation/native';
import React, { useState } from 'react';

const Login = () => {
  const navigation = useNavigation(); 
  const route = useRoute();
  const { nome, senha } = route.params ? route.params : {};

  const[nomeLogin, setNomeLogin] = useState('');
  const[senhaLogin, setSenhaLogin] = useState('');

  const verificarLogin = () =>{
    if(nomeLogin == "" && senhaLogin == ""){
      window.alert("É necessário preencher todos os campos.");
    }else if(nomeLogin == ""){
      window.alert("É necessário que o campo e-mail seja preenchido.");
    }else if(senhaLogin == ""){
      window.alert("É necessário que o campo senha seja preenchido.");
    }else if(senhaLogin.length < 8){
      window.alert("É necessário que o campo senha tenha no minímo 8 caracteres.");
    }else if(nome === nomeLogin && senha === senhaLogin){
      navigation.navigate('Inicio', {nome});
    }else{
      window.alert("As informações depositadas no formulário não está registrado em nosso banco de dados.");
    }
  }

  return(
    <View style={stylesLogin.container}>
      <StatusBar backgroundColor="#202020" barStyle="light-content"/>
      <ImageBackground source={require('../configs/img/imagem_fundo.jpg')} style={stylesLogin.containerImagem}>
      </ImageBackground>

      <Animatable.View animation="fadeInUp" delay={300} style={stylesLogin.conteudo}>
        <Text style={stylesLogin.titulo}>Faça login com sua conta</Text>
        <Text style={stylesLogin.texto}>Para acessar todos os recursos do app de quiz dos Stranger Things, faça login com sua conta.</Text>

        <View style={stylesLogin.formulario}>
          <Text style={stylesLogin.textologininput}>Nome de Usuário <Text style={stylesLogin.validado}>*</Text></Text>
          <TextInput
            value={nomeLogin}
            onChangeText={nomeFormulario => setNomeLogin(nomeFormulario)}
            style={stylesLogin.inputForm}
            placeholder="ex: userteste123_!"
          />

          <Text style={stylesLogin.textologininput}>Senha de Acesso <Text style={stylesLogin.validado}>*</Text></Text>
          <TextInput
            value={senhaLogin}
            onChangeText={senhaFormulario => setSenhaLogin(senhaFormulario)}
            style={stylesLogin.inputForm}
            secureTextEntry={true}
            placeholder="ex: ************"
          />

          <TouchableOpacity>
            <Text style={stylesLogin.titulosenha}>Esqueceu a Senha?</Text>
          </TouchableOpacity>
        
          <TouchableOpacity onPress={verificarLogin} style={stylesLogin.btnLogin}>
            <Text style={stylesLogin.btntituloLogin}>CONTINUAR COM LOGIN</Text>
          </TouchableOpacity>

          <Text style={stylesLogin.criarConta}>Não possui uma Conta? <TouchableOpacity
            onPress={() => navigation.navigate('Cadastro')}
          >
            <Text style={stylesLogin.textoCriar}>Criar Conta</Text>
          </TouchableOpacity></Text>
        </View>
      </Animatable.View>
    </View>
  );
}

export default Login;