const Signin = () => {
  return (
    <div>
      <form>
        <div>
          <label>
            Username
            <input id="username" type="text" placeholder="Username" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              type="password"
              placeholder="******************"
            />
          </label>
        </div>
        <div>
          <button type="button">Sign In</button>
          <a href="#">Forgot Password?</a>
        </div>
      </form>

      <style jsx>{`
        form {
          padding: 32px;
          box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
        }
      `}</style>
    </div>
  );
};

export default Signin;
