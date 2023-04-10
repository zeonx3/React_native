import { StyleSheet } from "react-native/";

export const styles = StyleSheet.create({
    fondo:{
        flex:1,
        backgroundColor:'black',
    },
    calculadoraContainer:{
        flex:1,
        paddingHorizontal:20,
        justifyContent:'flex-end'

    },
    resultado:{
        color:'white',
        fontSize:60,
        textAlign:'right',
        marginBottom: 10
    },
    resultadoOld:{
        color:'rgba(255,255,255,0.5)',
        fontSize:30,
        textAlign:'right',
    },
    fila:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:10,
        paddingHorizontal:5
    }
    ,
    boton:{
        height:80,
        width:80,
        backgroundColor:'#2D2D2D',
        borderRadius: 100,
        justifyContent:'center',
        marginHorizontal: 10
    },
    botonTexto:{
        textAlign:'center',
        color:'#000000',
        padding:10,
        fontSize:30,
        fontWeight:'bold'
    }
})