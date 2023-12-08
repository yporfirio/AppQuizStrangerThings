import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar, ImageBackground, TextInput, ScrollView} from 'react-native';
import stylesLogin from '../configs/css/style_login';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  const[nome, setNome] = useState('');
  const[email, setEmail] = useState('');
  const[telefone, setTelefone] = useState('');
  const[senha, setSenha] = useState('');

  const informacaoUsuario = () =>{
    if(nome === "" && email === "" && telefone === "" && senha === "" && confirmarSenha === ""){
      window.alert("É necessário preencher todos os campos.");
    }else if(nome === ""){
      window.alert("É necessário que o campo nome seja preenchido.");
    }else if(nome.length < 8){
      window.alert("É necessário que o campo nome tenha no minímo 8 caracteres.");
    }else if(email === ""){
      window.alert("É necessário que o campo de e-mail seja preenchido.");
    }else if(email.indexOf("@") === -1){
      window.alert("É necessário que o campo e-mail contenha o símbolo '@'.");
    }else if(telefone === ""){
      window.alert("É necessário que o campo telefone seja preenchido.");
    }else if(senha === ""){
      window.alert("É necessário que o campo senha seja preenchido.");
    }else if(senha.length < 8){
      window.alert("É necessário que o campo senha tenha no minímo 8 caracteres.");
    }else{
      window.alert("A sua conta foi criada com sucesso!");
      navigation.navigate('Login', {nome, email, telefone, senha});
    }
  } 

  return(
    <View style={stylesLogin.container}>
      <StatusBar backgroundColor="#202020" barStyle="light-content"/>
      <ImageBackground source={require('../configs/img/imagem_registro.jpeg')} style={stylesLogin.containerImagem}>
      </ImageBackground>

      <Animatable.View animation="fadeInUp" delay={300} style={stylesLogin.conteudo}>
        <Text style={stylesLogin.titulo}>Faça login com sua conta</Text>
        <Text style={stylesLogin.texto}>Para acessar todos os recursos do quiz dos Stranger Things, faça login em sua conta.</Text>

        <ScrollView style={stylesLogin.formulario}>
          <Text style={stylesLogin.textologininput}>Nome de usuário <Text style={stylesLogin.validado}>*</Text></Text>
          <TextInput
            value={nome}
            onChangeText={novoNome => setNome(novoNome)}
            style={stylesLogin.inputForm}
            placeholder="ex: usuário_teste123"
          />
          
          <Text style={stylesLogin.textologininput}>Endereço de e-mail <Text style={stylesLogin.validado}>*</Text></Text>
          <TextInput
            value={email}
            onChangeText={novoEmail => setEmail(novoEmail)}
            style={stylesLogin.inputForm}
            keyboardType="email-address"
            placeholder="testeemail@dominio.com"
          />

          <Text style={stylesLogin.textologininput}>Número de telefone <Text style={stylesLogin.validado}>*</Text></Text>
          <TextInput
            value={telefone}
            onChangeText={novoTelefone => setTelefone(novoTelefone)}
            style={stylesLogin.inputForm}
            placeholder="ex: (+55 11 99999-0000)"
          />

          <Text style={stylesLogin.textologininput}>Senha de acesso <Text style={stylesLogin.validado}>*</Text></Text>
          <TextInput
            value={senha}
            onChangeText={novaSenha => setSenha(novaSenha)}
            style={stylesLogin.inputForm}
            secureTextEntry={true}
            placeholder="ex: ************"
          />
        
          <TouchableOpacity onPress={informacaoUsuario} style={stylesLogin.btnLogin}>
            <Text style={stylesLogin.btntituloLogin}>CRIAR CONTA</Text>
          </TouchableOpacity>

          <Text style={stylesLogin.criarConta}>Já possui uma conta? <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={stylesLogin.textoCriar}>Fazer login.</Text>
          </TouchableOpacity></Text>
        </ScrollView>
      </Animatable.View>
    </View>
  );
}

export default SplashScreen;