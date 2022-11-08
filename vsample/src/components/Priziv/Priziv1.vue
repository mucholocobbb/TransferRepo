<template>
  <div class="main">
    <div class="main_head">
      <input class="main_input" type="file" id="myFiles" @change="getFiles" />
      <div class="main_head_select">
        <p class="main_head_select-Text">Показывать по :</p>
        <select
          class="main_head_select-List"
          v-model="itemCount"
          @change="setCount"
        >
          <option>15</option>
          <option>30</option>
          <option>60</option>
          <option>100</option>
        </select>
      </div>
      <button class="main_head_btn" @click="textToArray">Parse</button>
      <button class="main_head_btn" @click="getFilesFetch">Fetch</button>
    </div>
    <FilterComp />
    <Pagination />
    <Table />
    <Pagination />
  </div>
</template>

<script>
import FilterComp from "./FilterComp.vue";
import Table from "./Table.vue";
import Pagination from "./Pagination.vue";
export default {
  components: { Table, Pagination, FilterComp },
  name: "priziv",
  data() {
    return {
      parsedText: "",
      itemCount: 15,
      url: "https://raw.githubusercontent.com/mucholocobbb/API-s/master/ForGeekBrains/txtTest.txt",
    };
  },
  methods: {
    getFiles(event) {
      const promise = new Promise(function (resolve) {
        let reader = new FileReader();
        reader.readAsText(event.target.files[0]);
        reader.onload = function () {
          resolve(reader.result);
        };
      });
      promise.then((result) => {
        this.parsedText = result;
      });
    },
    getFilesFetch() {
      fetch(this.url)
        .then((data) => data.text())
        .then((res) => this.parsedText = res);
    },
    textToArray() {
      this.$store.commit("setMainArr", this.parsedText.split("\n"));
      this.$store.commit("setfilteredArr", this.parsedText.split("\n"));
    },
    setCount() {
      this.$store.commit("setItemCount", this.itemCount);
    },
  },
  mounted() {
    this.$store.commit("setItemCount", this.itemCount);
  },
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: 0;
  text-decoration: none;
}
.main {
  margin-left: calc(50vw - 450px);
  margin-right: calc(50vw - 450px);
  background-color: rgba(227, 227, 227, 0.351);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  &_input {
    background-color: rgb(90, 140, 255);
    border: 1px solid black;
    border-radius: 5px;
    width: 200px;
    height: 24px;
    transition: all 0.2s;
    &:hover {
      background-color: rgb(172, 193, 243);
      border: 1px solid rgb(172, 193, 243);
    }
  }
  &_head {
    background-color: aliceblue;
    width: 100%;
    min-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    &_select {
      display: flex;
      align-items: center;
      &-Text {
        font-size: 12px;
        color: black;
        padding-right: 8px;
      }
      &-List {
        width: 64px;
        height: 24px;
        font-size: 10px;
      }
    }
    &_btn {
      width: 64px;
      height: 24px;
      background-color: rgb(90, 140, 255);
      border: 1px solid black;
      border-radius: 5px;
      transition: all 0.2s;
      &:hover {
        background-color: rgb(55, 112, 245);
        border: 4px solid black;
        border-radius: 0;
      }
      &:active {
        background-color: rgb(21, 86, 239);
      }
    }
  }
}
</style>
