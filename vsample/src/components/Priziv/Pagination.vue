<template>
  <div class="pagination">
    <a
      class="pagination_link"
      @click.prevent="forwardPage"
      v-if="setPagesComputed"
      href="#"
      >{{ "Back" }}</a
    >
    <a
      class="pagination_link"
      :class="{ activeBtn: getActualPage == n }"
      href="#"
      v-for="n in setPagesComputed"
      :data-id="n"
      :key="n"
      @click.prevent="setPages($event)"
    >
      {{ n }}
    </a>
    <a
      class="pagination_link"
      @click.prevent="forwardPage"
      v-if="setPagesComputed"
      href="#"
      >{{ "Forward" }}</a
    >
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Pagination",
  methods: {
    ...mapMutations(["setActualPage"]),
    setPages(event) {
      this.$store.commit("setActualPage", +event.target.innerText);
    },
    forwardPage() {
      if (this.getActualPage < this.setPagesComputed) {
        this.$store.commit("setActualPage", this.getActualPage + 1);
      } else if (this.getActualPage > 1) {
        this.$store.commit("setActualPage", this.getActualPage - 1);
      }
    },
  },
  computed: {
    ...mapGetters(["getActualPage", "getFilteredArr", "getItemCount"]),
    setPagesComputed() {
      return Math.ceil(this.getFilteredArr.length / this.getItemCount);
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  font-size: 10px;
  color: rgb(102, 105, 121);
  &_link {
    font-size: 8px;
    color: rgb(102, 105, 121);
    padding: 2px 4px;
    text-decoration: none;
  }
}

.activeBtn {
  color: rgb(54, 55, 66);
  font-size: 10px;
  font-weight: 600;
}
</style>
