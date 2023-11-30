import React,{useState} from "react";
import {View,Text,TextInput,Button,StyleSheet,Image} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import ImagePicker from 'react-native-image-picker';

interface CreateProfile{
     navigation:any;
}

interface imagePickerResponse {
    uri: string;
    didCancel:boolean;
    error:string;
    // uri:String;
}

const createProfileScreen:React.FC<CreateProfile> = ()=>{
    const [course,setCourse] = useState('');
    const [school,setSchool] = useState('');
    const [interest,setInterest] = useState('');
    const [username, setUsername] = useState('');
    const [phonenumber,setPhonenumber] = useState('');
    const [housenumber,setHousenumber] = useState('');
    const [street,setStreet] = useState('');
    const [state,setState] = useState('');
    const [profilePictue, setProfilePicture] = useState<string| null>(null);


    const pickImage = () =>{
        const option = {
            title:'Select profile Picture',
            storageOption:{
                skipBackUp:true,
                path:'image',
            }
        }
        ImagePicker.showImagePicker(option, (response:imagePickerResponse) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                setProfilePicture(response.uri);
            }
        });

    }




}
