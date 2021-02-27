import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    division:{
      width:'100%',
      height:'100%',
      backgroundColor:'#050A1A',
      borderColor:'#0072FF',
      borderStyle:'solid',
      borderBottomWidth: 3,
      borderTopWidth: 3,
      alignItems:'center',
      justifyContent:'center',
      flex:1
    },
    divisionText:{
      fontSize:35,
      color:'white',
      padding: '5%'
    },
    safeArea:{
      flex:1,
      height:'100%'
    },
    ScrollView:{
      marginHorizontal: 20,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    texto: {
      fontSize:30,
      color:'white',
      justifyContent: 'center',
    },
    header:{
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
      flex:1,
      width:'100%',
    },
    main:{
      flex:1,
      width:'100%',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    backGroundMain:{
      width:'100%',
      height:'100%',
      backgroundColor: "#000",
    },
    smallContainer:{
      flex:10,
      display: 'flex',
      alignItems:'center',
      justifyContent:'center'
    },
    buttonContainer:{
      marginTop:'10%',
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      borderRadius: 150
    },
    button:{
      fontSize:30,
      color: "#0072FF",
      fontWeight: 'bold',
      paddingVertical: '2%',
      paddingHorizontal: '5%',
  },
  logoContainer:{
    display: 'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'flex-start',
    width:'100%',
  },
  logo:{
    width:'100%'
  },
});  

  export default styles