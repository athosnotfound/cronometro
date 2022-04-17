import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      numero: 0,
      botao: 'VAI',
      ultimo: null
    };

    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);

  
  }

  vai(){

    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;

    }else{
       this.timer = setInterval( ()=> {
      this.setState({numero: this.state.numero + 0.1})
    }, 100);

    this.setState({botao: 'PARAR'});

    }

 
  }

  limpar(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      ultimo: this.state.numero,
      numero: 0,
      botao: 'VAI'
    })
  }

  render(){
  return (
    <View style={styles.container}>
      
      <Image
      source={require('./src/missminute.jpg')}
      style={styles.cronometro}
      />
      <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={this.vai}>
          <Text style={styles.btnTexto}>{this.state.botao}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={this.limpar}>
          <Text style={styles.btnTexto}>LIMPAR</Text>
        </TouchableOpacity>

       

      </View>
        <View style={styles.areaUltimo}>
        <Text style={styles.textoCorrida}>
            {this.state.ultimo > 0 ? 'Você passou: ' + this.state.ultimo.toFixed(2) + 's no Multiverso' : ''} </Text>


                </View>
    </View>
  );
}

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#431301'
  },

  timer:{
    marginTop: -325,
    marginLeft: -10,
    color: '#7D1813',
    fontSize: 85,
    fontWeight: 'bold',
  },

  btnArea:{
    flexDirection: 'row',
    marginTop: 210,
    height: 40,
  },

  btn:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7E1A14',
    height: 40,
    margin: 17,
    borderRadius: 9,
  },

  btnTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F8A121'
  },

  areaUltimo:{
    marginTop: 40,
  },
  textoCorrida:{
    fontSize:25,
    fontStyle:'italic',
    color: '#FFF',
  }

});


export default App;