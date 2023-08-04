import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
mainContainer:{
    flex:1,
    
},
Container1:{
    marginTop:hp(2),
    marginLeft:wp(3),

},
Container1img:{
height:hp(10),
width:wp(18)
},
mainContainer1:{
  flexDirection:'row'},
Container2:{
    flexDirection:'row',
    borderWidth:wp(0.3),
    borderRadius:10,
    marginLeft:wp(3),
    marginRight:wp(2),
    marginTop:hp(2)
},
Container2img1:{
  height:hp(2.5) ,
  width:wp(5),
  marginTop:hp(1.8),
  marginLeft:wp(2),
  marginRight:wp(2) 
},
Container2Input:{
color:'black',
width:wp(72),
fontWeight:'700'
},
Container2img2:{
    height:hp(3.4) ,
  width:wp(7.3), 
  marginTop:hp(3.3),
  marginLeft:wp(2)
},



modalContainer: {
  backgroundColor: '#000000aa',
  flex: 1,
},
modalstyle: {
  backgroundColor: '#ffffff',
  height:hp(40),
  marginTop: hp(15),
// marginBottom:hp(2
  borderRadius: 20,
  marginLeft:wp(5),
  marginRight:wp(5),
  // flex: 1,
},

stylecrosimg: {
marginTop:hp(1.5),
alignItems:'flex-end',
marginRight:wp(3)
},
modalinput1:{
borderWidth:wp(0.3),
borderRadius:10,
marginLeft:wp(2),
marginRight:wp(2),
marginTop:hp(2)
},
modalinput2:{
  borderWidth:wp(0.3),
borderRadius:10,
marginLeft:wp(2),
marginRight:wp(2),
marginTop:hp(2)
},btntouch:{
  alignItems:'center',
  backgroundColor:'blue',
  marginLeft:wp(30),
marginRight:wp(30),
marginTop:hp(5),borderRadius:wp(10)
},
btntext:{
  fontSize:wp(6),
  fontWeight:'700',
  marginBottom:hp(1),
  color:'white',
},
Container3:{
  backgroundColor:'#B5D5C5',
  marginLeft:wp(3),
  marginRight:wp(3.5),
  marginTop:hp(5),
  borderRadius:wp(3),
  marginRight:wp(5),
  flexDirection:'row'
},
Container3title:{
marginLeft:wp(3),
marginTop:hp(1.5),
marginBottom:hp(1),
fontSize:wp(4),
fontWeight:'700'
},
Container3dis:{
  // marginTop:hp(1),
  marginBottom:hp(1.5),
  marginLeft:wp(3),
  fontSize:wp(4),
fontWeight:'700',
},delimg:{
  
  height:hp(3),
  width:wp(5),
  marginTop:hp(3.5),
  // marginLeft:wp(80)
},delcontainer:{
  position:'absolute',
  marginLeft:wp(80)
}

})