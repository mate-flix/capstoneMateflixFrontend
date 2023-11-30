// App.tsx in /src
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LinkedInLoginScreen from './src/pages/auth/login';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      
     <LinkedInLoginScreen />
    </NavigationContainer>
  );
};

export default App;
