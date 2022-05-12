import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';
import { addDoc,collection,doc, setDoc,getDoc,docData,getDocs,docSnap,where,query,updateDoc,deleteDoc } from "firebase/firestore"; 
import { db } from './components/config';

export default function App() {
  const [username,setname]=useState('');
  const [email,setemail]=useState('');
  //submitdata
  //*****************************Add data into firebase********************////
  function create(){
    addDoc(collection(db, "users"), {
      username: username,      
      email: email,
    }).then(()=>{
                //Data Submitted Successfully
                console.log('data submitted');
                }
            ).catch((error)=>{
              //the write fail
              console.log(error);
              }
                    );;
  }
  //************************************************************************* */
  //*****************************Get Individual record********************////
  function GetIndRec(){
    getDoc(doc(db, "users","LA")).then(docData => {
      if(docData.exists()){
          console.log(docData.data()); // Display data
          //for set data for fields//
          setname(docData.data().username);
          setemail(docData.data().email);
      }else{
        console.log('No such a data!!!!');
      }
}).catch((error)=>{
console.log(error);
}
)
  };
  //************************************************************************* */
  //*****************************Get All record********************////
  function GetAllData(){
    getDocs(collection(db, "users")).then(docSnap => {
      let alldata=[];
      if(!docSnap.empty){
        docSnap.forEach((doc=>{
          alldata.push({...doc.data(),id:doc.id});          
        })
        
        )
        console.log("Document Data",alldata);   
      }else{
        console.log('No such a data!!!!');
      }
}).catch((error)=>{
console.log(error);
}
)
  };
  //************************************************************************* */
  //*****************************Using QUery VIP Function********************////
  function QueryData(){
    getDocs(query(collection(db, "users"),where('email','==','user@gmail.com'))).then(docSnap => {
      let alldata=[];
      if(!docSnap.empty){
        docSnap.forEach((doc=>{
          alldata.push({...doc.data(),id:doc.id});          
        })
        
        )
        console.log("Document Data",alldata[0].username);   
      }else{
        console.log('No such a data!!!!');
      }
}).catch((error)=>{
console.log(error);
}
)
  };
  //************************************************************************* */
  //*****************************Update Record with ID(Hard coded ID)********************////
  function UpdateData(){
    updateDoc(doc(db, "users","LA"), {
      username: username,      
      email: email,
    }).then(()=>{
                //Data Submitted Successfully
                console.log('data Updated Successfully');
                }
            ).catch((error)=>{
              //the write fail
              console.log(error);
              }
                    );;
  }
  //************************************************************************* */
  //*****************************Delete Data individual record********************////
  function deleteData(){
    deleteDoc(doc(db, "users","xJuv2HI21rpYnU1pOhE2")); 
  }
     
  //************************************************************************* */
  return (
    <View style={styles.container}>
      <Text>Firebase Crud </Text>
      <TextInput value={username} onChangeText={(username)=>{setname(username)}} placeholder='Username' style={styles.textBoxes}></TextInput>

      <TextInput value={email} onChangeText={(email)=>{setemail(email)}} style={styles.textBoxes}></TextInput>
      <button onClick={create}>Submit Data</button>
      <button onClick={GetIndRec}>Get Ind Rec</button>
      <button onClick={GetAllData}>Get All Data</button>
      <button onClick={QueryData}>Query Data</button>
      <button onClick={UpdateData}>Update Data</button>
      <button onClick={deleteData}>Delete Data</button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBoxes:{
    width:'90%',
    fontSize:18,
    padding:'12',
    borderColor:'blue',
    borderWidth:0.2,
    borderRadius:10
  }
});
