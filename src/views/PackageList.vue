<template>
  <div>
    <button @click="handleCreateTodo">显示</button>
    <a-list class="demo-loadmore-list" itemLayout="horizontal" :dataSource="packageLists">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-checkbox></a-checkbox>
        <a slot="actions">edit</a>
        <a slot="actions">more</a>
        <a-list-item-meta description>
          <a slot="title" href="https://vue.ant.design/">{{item.packageId}}</a>
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import axios from "axios";

export default {
  name: "todo-list",
  computed: {
    packageLists: function() {
      return this.$store.getters.packageLists;
    }
  },
  data: function() {
    return {};
  },
  methods: {
    handleCreateTodo: function() {
      this.$store.dispatch("getPackageList");
    }
  }
};
</script>