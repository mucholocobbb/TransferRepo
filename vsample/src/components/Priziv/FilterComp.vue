<template>
  <div>
    <input type="text" v-model="searchLine" @input.prevent="filterGoods"/>
    <button class="btn" type="submit" @click="filterGoods">Search</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      searchLine: "",
    };
  },
  computed: {
    ...mapGetters(["getMainArr"]),
  },

  methods: {
    filterGoods() {
      let filteredArr = this.getMainArr.filter((el) => {
        return el.toUpperCase().includes(this.searchLine.toUpperCase());
      });
      this.$store.commit("setfilteredArr", filteredArr);
    },
  },
};
</script>

<style lang="scss" scoped></style>
