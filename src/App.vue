<template>
  <div class="content">
    <WysiwygEditor v-model="someText" id="editorWindow"> </WysiwygEditor>
  </div>
</template>

<script>
import WysiwygEditor from "./components/WysiwygEditor.vue";
export default {
  components: { WysiwygEditor },
  data() {
    return {
      someText: "",
    };
  },
};
</script>
<style lang="scss">
#app {
  height: 100vh;
  width: 100wh;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #eaeaea;
  background-color: rgba(30, 30, 30, 1);
}

.content {
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  padding: 77px 5rem;
}
</style>
