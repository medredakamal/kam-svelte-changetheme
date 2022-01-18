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

<svelte:body style="padding:0;margin:0;" />

<main class={"theme-" + activetheme}>
  <h1>Hello {user}, {welcome}</h1>
  <div class="buttons">
    <button on:click={() => handleTheme("light")}>Light Mode</button>
    <button on:click={() => handleTheme("black")}>Black Mode</button>
    <button on:click={() => handleTheme("green")}>Green Mode</button>
    <button on:click={() => handleTheme("blue")}>Blue Mode</button>
  </div>

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

<svelte:head>
  <style>
    * {
      margin: 0;
      padding: 0;
    }
    body {
      margin: 0;
      padding: 0;
    }
  </style>
</svelte:head>

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
    background: none;
    border: 1.1px solid #000;
  }

  /* Buttons */
  .buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-flow: dense;
    grid-gap: 15px;
    padding: 0 10px;
  }

  /* Cards */
  .km-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 696px) {
    .km-cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .km-card {
    padding: 10px 15px;
    margin: 5px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0px 0px 2px 0.4px rgba(0, 0, 0, 0.25);
  }

  .km-card > span {
    display: block;
    text-align: center;
    font-size: 1rem;
  }

  .km-card > span:first-child {
    margin-bottom: 7.75px;
    font-weight: bold;
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
