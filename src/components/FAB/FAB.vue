<template>
  <nav class="bpit-fab-container" :class="{'open':expand}">
    <slot></slot>
  </nav>
</template>
<script>
export default {
  name: "bpit-fab-container",
  props: {
    expand: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.$children.forEach((v, i) => {
      v.$el.style.webkitTransitionDelay = `${i * 20}ms`;
      v.$el.style.transitionDelay = `${(i + 1) * 25}ms`;
    });
  }
};
</script>
<style scoped>
.bpit-fab-container {
  bottom: 0;
  position: fixed;
  margin: 1em;
  right: 0px;
  z-index: 2;
}

.bpit-fab-container.open .bpit-fab-buttons {
  opacity: 1;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
  margin: 15px auto 0;
  position: relative;
  width: 40px;
  height: 40px;
  font-size: initial;
}
</style>
