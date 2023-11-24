<template>
  <div class="momomusic__Footer">
    <p>
      Copyright 2023 
      <sup>&copy;</sup> 
      <a href="https://github.com/momogoyo/momoplayer">momogoyo</a>.
      <a href="https://github.com/momogoyo/momoplayer/blob/main/LICENSE">All rights reserved</a>!
    </p>
  </div>
</template>

<style lang="scss" scoped>
.momomusic__Footer {
  color: var(--light-text);
  font-size: 0.75rem;
  line-height: 1rem;
  letter-spacing: 0.8px;
  margin-top: 0.8rem;

  > p {
    display: flex;
    justify-content: center;
    align-items: center;

    > sup {
      margin: 0 0.1rem;
    }
  }
}
</style>