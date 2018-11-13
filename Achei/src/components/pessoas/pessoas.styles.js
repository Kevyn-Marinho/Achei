import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF'
   },
    content: {
        flex:1,
        alignItems:'center'
    },
    choiceButton : {
        width: 70,
        height: 70,
        margin: 10,
    },
    buttons: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    image:{
        width: 50,
        height: 50
    },
    row: {
        padding: 15,
        height: 80,
        margin: 10,
        marginBottom: 5,
    }

});

export default styles;