'use client'

import { useEffect, useState } from 'react';
import { Amplify, Auth, Hub } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';

Amplify.configure(awsconfig);


export default function SignIn() {

    const [user, setUser] = useState(null);

    useEffect(() => {
      Hub.listen('auth', ({ payload: { event, data } }) => {
        switch (event) {
          case 'signIn':
          case 'cognitoHostedUI':
            getUser().then(userData => setUser(userData));
            break;
          case 'signOut':
            setUser(null);
            break;
          case 'signIn_failure':
          case 'cognitoHostedUI_failure':
            console.log('Sign in failure', data);
            break;
        }
      });
  
      getUser().then(userData => setUser(userData));
   
    }, []);

    function getUser() {
        return Auth.currentAuthenticatedUser()
          .then(userData => userData)
          .catch(() => console.log('Not signed in'));
      }
    
      console.log()
    return (

        <div className='link'>
               <p>User: {user ? user?.attributes.email : 'None'}</p>
      {user ? (
        <button onClick={() => Auth.signOut()}>Sign Out</button>
      ) : (
        <button onClick={() => Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google })}>Federated Sign In</button>
      )}
        </div>

    )
}