export default function Page() {
  return (
    <>
      <header>
        <h1>Authentication Page</h1>
        <p>TODO: Add switcher between login and sign up</p>
      </header>
      <section>
        <h2>Login Form</h2>
        <form action="/api/auth/login" method="post">
          <div>
            <label htmlFor="login-email">email</label>
            <input type="email" id="login-email" name="login-email" />
          </div>
          <div>
            <label htmlFor="login-password">email</label>
            <input type="password" id="login-password" name="login-password" />
          </div>
          <input type="submit" />
        </form>
      </section>
      <section>
        <h2>Sign Up Form</h2>
        <form action="/api/auth/signup" method="post">
          <div>
            <label htmlFor="login-email">email</label>
            <input type="email" id="signup-email" name="signup-email" />
          </div>
          <div>
            <label htmlFor="signup-password">Password</label>
            <input
              type="password"
              id="signup-password"
              name="signup-password"
            />
          </div>
          <div>
            <label htmlFor="signup-password-verification">
              Retype Password
            </label>
            <input
              type="password"
              id="signup-password-verification"
              name="signup-password-verification"
            />
          </div>
          <input type="submit" />
        </form>
      </section>
    </>
  );
}
