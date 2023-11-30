// App.tsx in /src
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
  );
};

export default App;
