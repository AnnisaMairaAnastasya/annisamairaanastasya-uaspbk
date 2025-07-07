<template>
    <div class="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-10 px-6">
        <div class="max-w-6xl mx-auto">
            <h1
                class="text-3xl font-extrabold text-center text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-10">
                🛠️ Daftar Perawatan Sedang Dikerjakan
            </h1>

            <div v-if="belumSelesai.length === 0" class="text-center py-20 text-purple-400 text-lg">
                Tidak ada perawatan yang sedang dikerjakan.
            </div>

            <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="transaksi in belumSelesai" :key="transaksi.id"
                    class="bg-white border border-purple-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition h-80 flex flex-col justify-between">
                    <!-- Header Pelanggan -->
                    <div>
                        <div class="flex justify-between items-center mb-3">
                            <div>
                                <h2 class="text-xl font-bold text-purple-700">{{ transaksi.pelanggan }}</h2>
                                <p class="text-sm text-purple-400">{{ formatDate(transaksi.waktu) }}</p>
                            </div>
                            <span class="bg-yellow-100 text-yellow-600 text-xs font-semibold px-3 py-1 rounded-full">
                                Belum Selesai
                            </span>
                        </div>

                        <!-- Scrollable Daftar Item -->
                        <div class="overflow-y-auto max-h-28 pr-1 custom-scroll">
                            <ul class="space-y-2">
                                <li v-for="item in transaksi.items" :key="item.menuId"
                                    class="flex justify-between text-purple-800 text-sm">
                                    <span>{{ item.nama }} (x{{ item.jumlah }})</span>
                                    <span>Rp {{ (item.harga * item.jumlah).toLocaleString() }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Total + Tombol -->
                    <div class="pt-4">
                        <div class="text-right text-sm font-bold text-purple-700 mb-4">
                            Total: Rp {{ transaksi.total.toLocaleString() }}
                        </div>
                        <button @click="selesaikan(transaksi.id)"
                            class="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-2 rounded-xl font-semibold shadow hover:shadow-md transition-all text-sm">
                            ✅ Tandai Selesai
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useTransaksiStore } from '@/stores/transaksiStore.js'

const transaksiStore = useTransaksiStore()

onMounted(() => {
    transaksiStore.fetchTransaksi()
})

const belumSelesai = computed(() => transaksiStore.transaksiBelumSelesai)

function selesaikan(id) {
    transaksiStore.tandaiSelesai(id)
}
function formatDate(tanggal) {
    const date = new Date(tanggal)
    return date.toLocaleString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })
}
</script>

<style scoped>
/* Animasi halus untuk card hover */
.card:hover {
    transform: translateY(-2px);
    transition: transform 0.2s ease;
}
</style>
