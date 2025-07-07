<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4">
    <div class="max-w-7xl mx-auto space-y-12">
      <!-- Judul -->
      <h1 class="text-3xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        🐱 Dashboard Perawatan Kucing
      </h1>

      <!-- Statistik -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="stat-card">
          <div class="icon-wrapper bg-gradient-to-br from-green-400 to-green-500">✅</div>
          <div>
            <h2 class="stat-value">{{ transaksiSelesai.length }}</h2>
            <p class="stat-label">Transaksi Selesai</p>
          </div>
        </div>

        <div class="stat-card">
          <div class="icon-wrapper bg-gradient-to-br from-yellow-400 to-yellow-500">🔧</div>
          <div>
            <h2 class="stat-value">{{ transaksiBelumSelesai.length }}</h2>
            <p class="stat-label">Sedang Dikerjakan</p>
          </div>
        </div>

        <div class="stat-card">
          <div class="icon-wrapper bg-gradient-to-br from-purple-400 to-pink-400">🧴</div>
          <div>
            <h2 class="stat-value">{{ menuStore.daftarMenu.length }}</h2>
            <p class="stat-label">Menu Perawatan</p>
          </div>
        </div>

        <div class="stat-card">
          <div class="icon-wrapper bg-gradient-to-br from-pink-500 to-red-400">💰</div>
          <div>
            <h2 class="stat-value">Rp {{ totalPendapatan.toLocaleString() }}</h2>
            <p class="stat-label">Total Pendapatan</p>
          </div>
        </div>
      </div>

      <!-- Ringkasan Tabel -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Tabel Sedang Dikerjakan -->
        <div class="bg-white border border-purple-100 rounded-xl shadow-xl p-6">
          <h2 class="text-xl font-bold text-purple-700 mb-4">🔧 Sedang Dikerjakan</h2>
          <div class="overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-700">
              <thead class="bg-purple-50 text-purple-700 font-semibold">
                <tr>
                  <th class="px-4 py-2">Pelanggan</th>
                  <th class="px-4 py-2">Tanggal</th>
                  <th class="px-4 py-2">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="trx in transaksiBelumSelesai.slice(0, 5)"
                  :key="trx.id"
                  class="border-b border-purple-100 hover:bg-purple-50"
                >
                  <td class="px-4 py-2">{{ trx.pelanggan }}</td>
                  <td class="px-4 py-2">{{ formatDate(trx.waktu) }}</td>
                  <td class="px-4 py-2 font-semibold text-purple-600">Rp {{ trx.total.toLocaleString() }}</td>
                </tr>
              </tbody>
            </table>
            <p v-if="transaksiBelumSelesai.length === 0" class="text-center text-gray-400 py-4">Tidak ada data.</p>
          </div>
        </div>

        <!-- Tabel Selesai -->
        <div class="bg-white border border-purple-100 rounded-xl shadow-xl p-6">
          <h2 class="text-xl font-bold text-purple-700 mb-4">✅ Riwayat Selesai</h2>
          <div class="overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-700">
              <thead class="bg-pink-50 text-pink-700 font-semibold">
                <tr>
                  <th class="px-4 py-2">Pelanggan</th>
                  <th class="px-4 py-2">Tanggal</th>
                  <th class="px-4 py-2">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="trx in transaksiSelesai.slice(0, 5)"
                  :key="trx.id"
                  class="border-b border-pink-100 hover:bg-pink-50"
                >
                  <td class="px-4 py-2">{{ trx.pelanggan }}</td>
                  <td class="px-4 py-2">{{ formatDate(trx.waktu) }}</td>
                  <td class="px-4 py-2 font-semibold text-pink-600">Rp {{ trx.total.toLocaleString() }}</td>
                </tr>
              </tbody>
            </table>
            <p v-if="transaksiSelesai.length === 0" class="text-center text-gray-400 py-4">Belum ada transaksi selesai.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useTransaksiStore } from '../stores/transaksiStore'
import { useMenuStore } from '../stores/menuStore'

const transaksiStore = useTransaksiStore()
const menuStore = useMenuStore()

onMounted(() => {
  transaksiStore.fetchTransaksi()
  menuStore.fetchMenu()
})

const transaksiSelesai = computed(() => transaksiStore.transaksiSelesai)
const transaksiBelumSelesai = computed(() => transaksiStore.transaksiBelumSelesai)

const totalPendapatan = computed(() =>
  transaksiSelesai.value.reduce((sum, trx) => sum + trx.total, 0)
)

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}
</script>

<style scoped>
.stat-card {
  background-color: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 8px 20px rgba(156, 163, 175, 0.15);
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid #e9d5ff;
  transition: transform 0.2s ease;
}

.stat-card:hover {
  transform: scale(1.02);
}

.icon-wrapper {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  color: white;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
}

.stat-value {
  font-size: 1.5rem;
  font-weight: bold;
  color: #6b21a8;
}

.stat-label {
  font-size: 0.875rem;
  color: #6b7280;
}
</style>
