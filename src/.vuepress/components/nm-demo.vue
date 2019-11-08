<template>
  <section class="nm-docs-demo">
    <fieldset class="nm-box-shadow">
      <legend>示例</legend>
      <slot />
    </fieldset>
  </section>
</template>
<style lang="scss">
.nm-docs-demo {
  fieldset {
    padding: 5px 10px;
    margin: 10px 0 24px 0;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: 0.2s;
    legend {
      padding: 0 10px;
      text-align: center;
    }
  }
}
</style>