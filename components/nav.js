import React from 'react';
import Link from 'next/link';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <a>AWSOM Scheduler</a>
        </Link>
      </li>
      <ul>
        <li>
          <Link href="/requests">
            <a>Requests</a>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <a>My Account</a>
          </Link>
        </li>
        <li>
          <Link href="/register">
            <a>Register</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>Sign in</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>Sign out</a>
          </Link>
        </li>
      </ul>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
);

export default Nav;
