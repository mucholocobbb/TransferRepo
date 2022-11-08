<template>
  <div v-if="getFilteredArr.length > 0" class="listblock">
    <div class="listheader">
      <p class="headertext">Список пользователей :</p>
    </div>

    <div class="listheader" v-for="(item, index) in setArrRange" :key="index">
      <p class="categories" :class="{ darkRow: index % 2 === 0 }">{{ item }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Table",
  computed: {
    ...mapGetters(["getFilteredArr", "getActualPage", "getItemCount"]),
    setArrRange() {
      const count = this.getItemCount;
      let changeP = this.getActualPage <= 0 ? 0 : this.getActualPage - 1;

      const startNum = changeP * count;
      const lastNum = startNum + count;
      return this.getFilteredArr.slice(startNum, lastNum);
    },
  },
};
</script>

<style lang="postcss" scoped>
.darkRow {
  background-color: rgba(160, 255, 247, 0.7);
  color: rgba(73, 70, 70, 0.603);
}
.categories {
  font-size: 10px;
  color: rgb(0, 0, 0);
  text-align: left;
  padding: 2px 8px;
}
.headertext {
  height: 24px;
  font-size: 14px;
  color: rgb(0, 0, 0);
  text-align: left;
  background-color: rgba(165, 228, 223, 0.7);
  line-height: 24px;
  padding: 8px;
}
</style>
