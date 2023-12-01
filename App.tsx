// App.tsx in /src
<<<<<<< HEAD
import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LinkedInLoginScreen from './src/pages/auth/login';
import SignUp from "./src/pages/auth/signup";
import ForgotPassword from "./src/pages/auth/forgotPassword";


const App: React.FC = () => {
  return (
          // <NavigationContainer>
              <SignUp/>
          //     <LinkedInLoginScreen/>
          //     <ForgotPassword/>
          // </NavigationContainer>
=======
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LinkedInLoginScreen from './src/pages/auth/login';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      
     <LinkedInLoginScreen />
    </NavigationContainer>
>>>>>>> 8ff93202a5ca2a5e0730427d0d584e0c72f2d907
  );
};

export default App;
