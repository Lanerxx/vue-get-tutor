<template>
  <div>
    <let-it-snow v-bind="snowConf" :show="show"></let-it-snow>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      snowConf: {
        windPower: 1,
        speed: 3,
        count: 12,
        size: 10,
        opacity: 1,
        images: ["@/assets/timg.gif", "@/assets/timg.gif", "@/assets/timg.gif"]
      },
      show: false
    };
  },
  mounted() {
    this.show = true;
    //   setTimeout( () => {
    //       this.show = false
    //   }, 5000)

    //   setTimeout( () => {
    //       this.show = true
    //   }, 10000)
  }
};
</script>
