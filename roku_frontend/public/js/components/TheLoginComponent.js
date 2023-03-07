export default {
    name: 'TheLoginComponent',
    template: `
  <section class="container">
  <button @click="tryRouterPush"> Check Nav </button>
    <div class = "jumbotron">
        <h1>Welcome to Flashblack!</h1>
        <p class="lead">
        Before revisiting your favourite movies, tv shows or music from yesteryear, please log in with a valid username and password.
        </p>
    </div>

    <div class="log-in">
      <label class="sr-only" for="inlineFormInputName">Name</label>
      <input type="text" class="form-control" id="inlineFormInputName" placeholder="username" required>

      <label class="sr-only" for="inlineFormPassword">Name</label>
      <input type="password" class="form-control" id="inlineFormPassword" placeholder="password" required>
    </div>

    <button type="submit" class="btn btn-primary login-submit">Go!</button>
  </section>
`,
}