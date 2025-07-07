import { createRouter, createWebHistory } from "vue-router";
import Transaksi from "@/views/Transaksi.vue";
import Dashboard from "@/views/Dashboard.vue";
import Riwayat from "@/views/Riwayat.vue";
import pengerjaan from "@/views/pengerjaan.vue";

const routes = [
    {path: '/', name: 'dashboard', component: Dashboard},
    {path: '/transaksi', name: 'transaksi', component: Transaksi},
    {path: '/pengerjaan', name:'pengerjaan', component: pengerjaan},
    {path: '/riwayat', name:'profile', component: Riwayat}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;