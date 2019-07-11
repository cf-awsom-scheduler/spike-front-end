import React, { useState } from 'react';
import Head from '../../components/head';
import Nav from '../../components/nav';

import fetch from 'isomorphic-unfetch';

const Request = ({ request }) => {
  const { studentName, instrument } = request;

  const [showConfirmation, setConfirmation] = useState(false);

  function handleAcceptStudent() {
    console.log('Student has been accepted');
    setConfirmation(true);
  }

  return (
    <div>
      <Head title="Requests" />
      <Nav />
      <div className="row">
        {showConfirmation ? <div>The student has been accepted</div> : null}
        <h1>Request Details</h1>
        <h2>{studentName}</h2>
        <div>{instrument.toString()}</div>

        <button onClick={handleAcceptStudent}>Accept</button>

        <section>Calendar</section>

        <section>Map</section>
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

Request.getInitialProps = async ({ query }) => {
  const response = await fetch(`http://localhost:3000/api/request/${query.id}`);
  const request = await response.json();

  return { request };
};

export default Request;
