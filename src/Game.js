import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Button
  } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gameState: [
                [ 0 , 0 , 0],
                [ 0 , 0 , 0],
                [ 0 , 0 , 0]
            ],
            currentPlayer: 1,
            gameIcon: 1,
            gameStatus: -1
        }
    }

    componentDidMount(){
        this.initializeGame();
    }

    initializeGame = () => {
        const { 
            gameState,
            currentPlayer,
            gameIcon
         } = this.state;
         this.setState({
             gameState: [
                 [ 0 , 0 , 0],
                 [ 0 , 0 , 0],
                 [ 0 , 0 , 0]
             ],
             currentPlayer: 1,
             gameStatus: -1
         })
    }

    renderIcon = (row,col) => {
        const value = this.state.gameState[row][col];
        switch(value) {
            case  1: return <Feather name="circle" size={80} color={"lawngreen"}/>
            case -1: return <AntDesign name="close" size={80} color={"red"}/>
            default: <View/>
        }
    }

    onTilePress = (row,col) => {
        const value = this.state.gameState[row][col];
        if(value !== 0) { return }
        const currentPlayer = this.state.currentPlayer;
        let arr = this.state.gameState.slice();
        arr[row][col] = currentPlayer;
        this.setState({gameState: arr});

        this.setState({gameStatus: 1})

        var nextPlayer = (currentPlayer === 1 ) ? -1 : 1 ;
        this.setState({currentPlayer: nextPlayer});
        const winner = this.checkWinner();
        if(winner === 1) {
            alert('Player 1 won');
            this.initializeGame();
        } 
        if(winner === -1) {
            alert('Player 2 won')
            this.initializeGame();
        }
    }

    checkWinner = () => {
        const arr = this.state.gameState;
        let sum;
        for(let i = 0; i < 3; i ++ ) {
            sum = arr[i][0] + arr[i][1] + arr[i][2];
            if(sum === 3) { return 1 }
            else if(sum === -3) { return -1 }
        }
        for(let i = 0; i < 3; i ++ ) {
            sum = arr[0][i] + arr[1][i] + arr[2][i];
            if(sum === 3) { return 1 }
            else if(sum === -3) { return -1 }
        }
        sum = arr[0][0] + arr[1][1] + arr[2][2];
            if(sum === 3) { return 1 }
            else if(sum === -3) { return -1 }

        sum = arr[0][2] + arr[1][1] + arr[2][0];
        if(sum === 3) { return 1 }
            else if(sum === -3) { return -1 }
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={[ styles.textStyle,{ color: 'white' }]}>Tic Tac Toe</Text>
                </View>
                <View style={ styles.boxContainer }>
                    <View style={[ styles.box,{ borderTopWidth: 0, borderLeftWidth: 0 }]}>
                        <TouchableOpacity onPress= {() => this.onTilePress(0,0)} style={{flex: 1,justifyContent: 'center'}}>
                            {this.renderIcon(0,0)}
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress= {() => this.onTilePress(0,1)} style={[ styles.box,{ borderTopWidth: 0 }]}>
                        {this.renderIcon(0,1)}
                    </TouchableOpacity>
                    <TouchableOpacity onPress= {() => this.onTilePress(0,2)} style={[ styles.box,{ borderTopWidth: 0, borderRightWidth: 0 }]}>
                        {this.renderIcon(0,2)}
                    </TouchableOpacity>
                </View>
                <View style={styles.boxContainer}>
                    <TouchableOpacity onPress= {() => this.onTilePress(1,0)} style={[ styles.box,{  borderLeftWidth: 0 }]}>
                        {this.renderIcon(1,0)}
                    </TouchableOpacity>
                    <View style={styles.box}>
                        <TouchableOpacity onPress= {() => this.onTilePress(1,1)} style={{flex: 1,justifyContent: 'center'}}>
                            {this.renderIcon(1,1)}
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress= {() => this.onTilePress(1,2)} style={[ styles.box,{  borderRightWidth: 0 }]}>
                        {this.renderIcon(1,2)}
                    </TouchableOpacity>
                </View>
                <View style={styles.boxContainer}>
                    <TouchableOpacity onPress= {() => this.onTilePress(2,0)} style={[ styles.box,{ borderBottomWidth: 0, borderLeftWidth: 0 }]}>
                        {this.renderIcon(2,0)}
                    </TouchableOpacity>
                    <TouchableOpacity onPress= {() => this.onTilePress(2,1)} style={[ styles.box,{ borderBottomWidth: 0 }]}>
                        {this.renderIcon(2,1)}
                    </TouchableOpacity>
                    <TouchableOpacity onPress= {() => this.onTilePress(2,2)} style={[ styles.box,{ borderBottomWidth: 0, borderRightWidth: 0 }]}>
                        {this.renderIcon(2,2)}
                    </TouchableOpacity>
                </View>
                <View style={styles.textContainer}>
                    <Text style={[styles.textStyle,{color: 'dodgerblue'}]}>Game Status : {this.state.gameStatus === 1 ? 'In Progress' : 'Click to start'}</Text>
                </View>
                <TouchableOpacity onPress={() => this.initializeGame()}>
                    <Text style={{color: 'yellow',textAlign:'center',borderRadius: 20,borderWidth: 1,borderColor: 'white',padding: 20,margin: 20}}>New Game</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 4,
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: 'black'
    },
    boxContainer: {
      flexDirection: 'row',
      flex: 1,
      height: 100
    },
    box: {
      borderWidth: 4,
      borderColor: 'orange',
      flex: 1,
    padding: 20
      },
      textContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50
      },
      textStyle: {
        fontWeight: 'bold',
        fontSize: 30
      }
  });