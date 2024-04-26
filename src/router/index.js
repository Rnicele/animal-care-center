import { createRouter, createWebHistory } from "vue-router";
// VIEWS
import Home from "../views/Home.vue";
import DailyTasks from "../views/DailyTasks.vue";
import NewPatient from "../views/NewPatient.vue";
import Annoucements from "../views/Annoucements.vue";
import MyCalendar from "../views/MyCalendar.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home, class: "" },
    { path: "/daily-task", component: DailyTasks, class: "" },
    { path: "/new-patient", component: NewPatient, class: "" },
    { path: "/annoucements", component: Annoucements, class: "" },
    { path: "/calendar", component: MyCalendar, class: "" },
  ],
});

export default router;
