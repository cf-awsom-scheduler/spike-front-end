import React from 'react';
import Head from '../components/head';
import Nav from '../components/nav';

const Profile = () => {
  return (
    <div>
      <Head title="My Account" />
      <Nav />
      <row className="row">
        <h1>Profile</h1>
        <div>Name</div>
        <div>Address</div>
      </row>
      <style jsx>
        {`
          .row {
            max-width: 880px;
            margin: 80px auto 40px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
          }
        `}
      </style>
    </div>
  );
};

export default Profile;
