import { StyleSheet, Dimensions } from 'react-native'

export const topicItem = StyleSheet.create({
    container:{
        padding:12,
        margin: 7,
        borderRadius:6,
    },
    text:{
        fontWeight:'bold',
        color:'white'
    }
});

export const introduction = StyleSheet.create({
    banner:{
        height: Dimensions.get('window').height/4,
        alignItems:'center',
        justifyContent:'center',
    }
})

export const jobItem = StyleSheet.create({
    container: {
        backgroundColor: "#e0e0e0",
        borderRadius:8,
        margin: 10,
        padding:10,
    },
    textTitle: {
        fontWeight:'bold',
        marginTop: 20,
        marginLeft: 20,
        fontSize: 17,    
    },
    textLocation: {
        margin: 20,
        fontSize: 17
    }
});

export const jobs = StyleSheet.create({
    titleContainer:{

        backgroundColor: '#ff5722',
        top: 25,
        width:300,
        height: 55,
        borderRadius: 50,
        alignSelf:'center',
        justifyContent:'center',
        shadowOffset:{  width: 0,  height: 0,  },
        shadowColor: 'black',
        shadowOpacity: 0.7,
        shadowRadius: 10,
        zIndex:5
    },
    title:{
        alignSelf:'center',
        fontSize:25,
        fontWeight:"bold",
        color: 'white',
    },
    container: {
        flexDirection: 'row', 
        alignItems:'center', 
        justifyContent:'center', 
        padding:10
    },
    modalBackGround: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 5,
    },
    unLiked :{
        height:30,
        width:34,
        alignSelf:'center',
        opacity:0.3,
        margin:20
    },
    liked:{
        height:30,
        width:34,
        alignSelf:'center',
        opacity:0.3,
        margin:20
    },
    exit :{
        height:34,
        width:34,
        alignSelf:'center',
        opacity:0.3,
        margin:20,
        tintColor: 'black'
    },
    favs :{
        position: 'absolute',
        backgroundColor: '#ff5722',
        bottom: 25,
        width: 75,
        height: 75,
        borderRadius: 50,
        right: 25,
        justifyContent:'center',
        shadowOffset:{  width: 0,  height: 0,  },
        shadowColor: 'black',
        shadowOpacity: 0.7,
        shadowRadius: 10,
    },
    favsIcon:{
        alignSelf:'center',
        height:30,
        width:34,
        alignSelf:'center',
        tintColor:'white',
        opacity:0.9,
        margin:20
    }
   
})