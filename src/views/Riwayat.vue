<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="mb-8 text-center">
        <h1 class="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          📋 Riwayat Transaksi Selesai
        </h1>
        <p class="text-purple-400 text-sm mt-1">Semua perawatan kucing yang telah diselesaikan</p>
      </div>

      <div v-if="selesaiList.length === 0" class="text-center py-24 text-purple-400">
        <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0Z" />
        </svg>
        <p class="text-lg">Belum ada transaksi yang selesai.</p>
      </div>

      <div v-else class="bg-white shadow-xl rounded-2xl overflow-x-auto border border-purple-100">
        <table class="min-w-full text-sm text-purple-800 table-auto">
          <thead class="bg-purple-100 text-left">
            <tr>
              <th class="px-6 py-4 font-bold">Pelanggan</th>
              <th class="px-6 py-4 font-bold">Tanggal</th>
              <th class="px-6 py-4 font-bold">Perawatan</th>
              <th class="px-6 py-4 font-bold text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="trx in selesaiList" :key="trx.id"
              class="border-b hover:bg-purple-50 transition duration-200">
              <td class="px-6 py-4">{{ trx.pelanggan }}</td>
              <td class="px-6 py-4">{{ formatDate(trx.waktu) }}</td>
              <td class="px-6 py-4">
                <ul class="list-disc list-inside space-y-1 max-h-28 overflow-y-auto pr-2 custom-scroll">
                  <li v-for="item in trx.items" :key="item.menuId">
                    {{ item.nama }} (x{{ item.jumlah }})
                  </li>
                </ul>
              </td>
              <td class="px-6 py-4 text-right font-semibold">
                Rp {{ trx.total.toLocaleString() }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useTransaksiStore } from '../stores/transaksiStore'

const transaksiStore = useTransaksiStore()

onMounted(() => {
  transaksiStore.fetchTransaksi()
})

const selesaiList = computed(() => transaksiStore.transaksiSelesai.reverse())

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return isNaN(date)
    ? 'Tanggal tidak valid'
    : date.toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
}
</script>

<style scoped>
.custom-scroll::-webkit-scrollbar {
  width: 4px;
}
.custom-scroll::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #a78bfa, #ec4899);
  border-radius: 4px;
}
.custom-scroll::-webkit-scrollbar-track {
  background: transparent;
}
</style>
