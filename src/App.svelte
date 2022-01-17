<script>
  export let activetheme;
  export let welcome;
  export let user;
  export let orders;
  export let products;
  export let earnings;
  export let active_users;

  function handleTheme(theme) {
    activetheme = theme;
  }
</script>

<main class={"theme-" + activetheme}>
  <h1>Hello {user}, {welcome}</h1>
  <button on:click={() => handleTheme("light")}>Light Mode</button>
  <button on:click={() => handleTheme("black")}>Black Mode</button>
  <button on:click={() => handleTheme("green")}>Green Mode</button>
  <button on:click={() => handleTheme("blue")}>Blue Mode</button>
  <section>
    <div class="km-cards">
      <div class="km-card">
        <span>Orders</span>
        <span>{orders}</span>
      </div>
      <div class="km-card">
        <span>Products</span>
        <span>{products}</span>
      </div>
      <div class="km-card">
        <span>Earnings</span>
        <span>{earnings}</span>
      </div>
      <div class="km-card">
        <span>Active Users</span>
        <span>{active_users}</span>
      </div>
    </div>
  </section>
</main>

<style>
  h1 {
    text-align: center;
  }
  button {
    appearance: none;
    border: none;
    outline: none;
    font-weight: bold;
    padding: 12px 15px;
  }

  /* Light Theme */
  .theme-light {
    background-color: #fff;
  }

  /* Black Theme */
  .theme-black {
    background-color: #000;
  }

  /* Green Theme */
  .theme-green {
    background-color: #32cc7f;
  }

  /* Black Theme */
  .theme-blue {
    background-color: #2b7ae2;
  }
</style>
