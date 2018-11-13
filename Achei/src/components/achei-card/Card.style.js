import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignSelf: "stretch"
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch"
        },
    card : {
        flex: 1,
        borderWidth: 1,
        borderColor: "#d0678c",
        borderRadius: 5,
        height: 44,
        alignSelf: "stretch",
        marginTop: 30
    },
    titulo : {
        paddingTop: 75,
        paddingBottom: 15,
        color: "#d0678c",
        fontSize: 25,
        fontWeight: "bold"

    },
    descricao: {
        fontSize: 14,
        color: "#CCC"
    },
    backgroundImage: { 
        backgroundColor: '#ccc',
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center'
     }


});

export default styles;