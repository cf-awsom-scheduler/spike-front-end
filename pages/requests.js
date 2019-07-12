import React, { useState, useEffect } from 'react';
import Head from '../components/head';
import Nav from '../components/nav';
import Request from '../components/request';
import fetch from 'isomorphic-unfetch';

const Requests = ({ requests }) => {
  const [stateRequests, setStateRequests] = useState();

  useEffect(() => {
    setStateRequests(requests);
  });

  function handleFilter(event) {
    console.log(event.target.value);
  }

  return (
    <div>
      <Head title="Requests" />
      <Nav />

      <div className="row">
        <h1>Requests</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {stateRequests
          ? stateRequests.map(request => <Request {...request} />)
          : null}
      </div>

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

Requests.getInitialProps = async () => {
  const response = await fetch('http://localhost:3000/api/requests');
  const requests = await response.json();

  return { requests };
};

export default Requests;
