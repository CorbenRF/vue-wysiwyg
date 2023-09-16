import { createRouter, createWebHashHistory } from "vue-router";
import WysiwygEditor from "../components/WysiwygEditor.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: WysiwygEditor,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
