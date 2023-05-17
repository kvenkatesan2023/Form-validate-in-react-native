import { View, Text ,StyleSheet,TextInput,Button,Image,ImageBackground} from 'react-native'
import React, { useState } from 'react'
import {db} from "./config"
import {ref,set} from 'firebase/database'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { CheckBox } from 'react-native-web'


const App = ({navigation}) =>{
    const[Firstname,setFirstname]=useState('');
    const[lastname,setLastName]=useState('');
    const[gender,setgender]=useState('');
    const[phone,setPhone]=useState('');
    const[Dateofbirth,setDateofbirth]=useState('');
    const[Email,setEmail]=useState('');
    const[city,setCity]=useState('');
    const[address,setAddress]=useState('');
    const[college,setCollege]=useState('');
    const[degree,setDegree]=useState('');
    const[Department,setDepartment]=useState('');
    const[cgpa,setCgpa]=useState('');
    const[error,seterror]=useState('');
    const[select ,setSelect]=useState('');


    const submit =()=>
{
    set (ref(db , 'posts/' +Firstname),
    {
        Firstname:Firstname,
        lastname:lastname,
        gender:gender,
        phone:phone,
        Dateofbirth:Dateofbirth,
        Email:Email,
        city:city,
        address:address,
        college:college,
        degree:degree,
        Department:Department,
        cgpa:cgpa,
    });
     setFirstname('')
     setLastName('')
     setgender('')
     setPhone('')
     setDateofbirth('')
     setEmail('')
     setCity(''),
     setAddress('')
     setCollege('')
     setDegree('')
     setDepartment('')
     setCgpa('')
}
const handle=()=>{
      if(!setFirstname||!setLastName||!setgender){

      seterror("The field is required..")
}
else{
      seterror('')
      submit();
}
}
    return(
      
      <View style={styles.container}> 
        

        <View style={styles.container1}>
        <Text style={{fontSize:30,fontFamily:'arial',fontWeight:'bold',color:'black'}}>Registration Form</Text>
        <TextInput 
          placeholder='FirstName'
          value={Firstname}
          keyboardType='default'
          onChangeText={(text)=>setFirstname(text)}style={styles.input}/>
          {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
        
          <TextInput
             placeholder='LastName'
             value={lastname}
             keyboardType='name-phone-pad'
             onChangeText={(text)=>setLastName(text)}style={styles.input}
             maxLength={5}
                   required />
              {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
           
           <TextInput
              placeholder='Gender'
              value={gender} 
              keyboardType='name-phone-pad' 
              onChangeText={(text)=>setgender(text)}style={styles.input}
              maxLength={5}
                   required />
            {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
              
              <TextInput
              placeholder='Phonenumber'
              value={phone}  
              keyboardType='numeric'
              onChangeText={(text)=>setPhone(text)}style={styles.input}
              maxLength={5}
                   required 
              />
              <TextInput
              placeholder='Dateofbirth'
              value={Dateofbirth}
              keyboardType='numbers-and-punctuation'  
              onChangeText={(text)=>setDateofbirth(text)}style={styles.input}
              maxLength={5}
                   required 
              />
              <TextInput
              placeholder='Email'
              value={Email}  
              keyboardType='email-address'
              onChangeText={(text)=>setEmail(text)}style={styles.input}
              maxLength={5}
                   required 
              />
            
        
             <TouchableOpacity style={styles.btn}
                onPress={handle}>
              <Text style={{fontFamily:'arial',fontSize:20,textAlign:'center',marginTop:12,fontWeight:'bold'}}>submit</Text>
      
             </TouchableOpacity>
          

             <Button title="Review"
               onPress={() => {
                    navigation.navigate('search');
                    
              }}/>
             </View> 

                  
      </View>

        
           
    )
  
    
}
export default App
const styles = StyleSheet.create({
   
    container: {
        flex:1,
        padding:40,
        
        borderColor: "#000000",
        justifyContent:'flex-start',
        alignContent:'center',

    },
    input:{
      marginTop:30,
      padding:10,
      borderwidth :1,
     
      borderColor: "#000000",
      borderBottomWidth: 1,
      paddingRight:10,
      margin :10,
      padding:10,
      borderRadius:6,
      fontFamily:'arial',
      fontSize:19,
      width:'40%',

      
      

    },
    container1:{
      backgroundColor:'#F9C4BE',
      width:'50%',
      height:'100%',
      marginTop:30,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:20,
      marginLeft:300,
    
      
      
    },
    btn:{
        backgroundColor:'red',
        width:280,
        height:40,
        borderRadius:20,
        marginTop:15,
        
        
    }

    
    
    
    
    });
