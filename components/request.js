import React from 'react';
import Link from 'next/link';

const Request = ({ id, studentName, instrument, address, availabilities }) => {
  return (
    <article>
      <div className="request">{studentName}</div>
      <div>{instrument.toString()}</div>

      <div>{Math.floor(Math.random() * Math.floor(15))} miles from you</div>

      <div>
        <Link href={`request/${id}`}>
          <a>Details</a>
        </Link>
      </div>

      <style jsx>{`
        article {
          margin-bottom: 16px;
          padding: 1em;
          border-radius: 8px;
          border: solid 1px #ccc;
        }
      `}</style>
    </article>
  );
};

export default Request;
