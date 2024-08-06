import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../components/Loading';

const UserProfile = () => {
    return <div>User Profile Page</div>
};

export default withAuthenticationRequired(UserProfile, {
    onRedirecting: () => <Loading />,
});