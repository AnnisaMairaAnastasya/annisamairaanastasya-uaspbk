<template>
    <div class="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        <div class="p-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Kolom Kiri: Form & Menu -->
            <div class="md:col-span-2 space-y-8">
                <!-- Header Section -->
                <div class="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
                    <div class="flex items-center space-x-4 mb-6">
                        <div
                            class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M19 14H5L7 12H17L19 14ZM7 18H17L19 16H5L7 18ZM5 10H19L17 8H7L5 10ZM3 6V4H21V6H3ZM3 20V18H21V20H3Z" />
                            </svg>
                        </div>
                        <div>
                            <h1
                                class="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Transaksi Perawatan
                            </h1>
                            <p class="text-purple-400 text-sm">Sistem perawatan kucing terpadu</p>
                        </div>
                    </div>

                    <!-- Nama Pelanggan -->
                    <div>
                        <label class="block text-sm font-semibold text-purple-700 mb-2">Nama Pelanggan</label>
                        <input v-model="namaPelanggan" type="text" placeholder="Masukkan nama pelanggan"
                            class="w-full border-2 border-purple-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none shadow-sm transition-all duration-200 bg-purple-50/50" />
                    </div>
                </div>

                <!-- Daftar Menu Perawatan -->
                <div class="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
                    <div class="flex items-center space-x-3 mb-6">
                        <div
                            class="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM18 14V16H6V14C6 12.9 6.9 12 8 12H16C17.1 12 18 12.9 18 14ZM12 18C10.9 18 10 17.1 10 16C10 14.9 10.9 14 12 14C13.1 14 14 14.9 14 16C14 17.1 13.1 18 12 18Z" />
                            </svg>
                        </div>
                        <h2 class="text-2xl font-bold text-purple-800">Menu Perawatan</h2>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-9">
                        <div v-for="item in menuStore.daftarMenu" :key="item.id"
                            class="group relative border-2 border-purple-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-purple-50 flex flex-col justify-between overflow-hidden">
                            <!-- Decorative gradient overlay -->
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>

                            <div class="relative z-10">
                                <div class="flex items-center space-x-2 mb-3">
                                    <div
                                        class="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                                        <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" />
                                        </svg>
                                    </div>
                                    <h3
                                        class="font-bold text-purple-800 text-lg group-hover:text-purple-900 transition-colors">
                                        {{ item.nama }}
                                    </h3>
                                </div>
                                <p class="text-lg font-semibold text-purple-600 mb-4">
                                    Rp {{ item.harga.toLocaleString() }}
                                </p>
                            </div>

                            <button @click="tambah(item)" :disabled="keranjang.some(k => k.id === item.id)"
                                class="relative z-10 mt-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-sm py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                                </svg>
                                <span>Tambah</span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>

            <!-- Kolom Kanan: Keranjang -->
            <div class="bg-white rounded-2xl shadow-2xl p-8 border border-purple-100 h-fit sticky top-8">
                <div class="flex items-center space-x-3 mb-6">
                    <div
                        class="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M7 18C5.9 18 5 18.9 5 20S5.9 22 7 22 9 21.1 9 20 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5H5.21L4.27 3H1ZM17 18C15.9 18 15 18.9 15 20S15.9 22 17 22 19 21.1 19 20 18.1 18 17 18Z" />
                        </svg>
                    </div>
                    <h2
                        class="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Keranjang
                    </h2>
                </div>

                <div v-if="keranjang.length === 0" class="text-center py-12">
                    <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M7 18C5.9 18 5 18.9 5 20S5.9 22 7 22 9 21.1 9 20 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5H5.21L4.27 3H1ZM17 18C15.9 18 15 18.9 15 20S15.9 22 17 22 19 21.1 19 20 18.1 18 17 18Z" />
                        </svg>
                    </div>
                    <p class="text-purple-400 text-sm">Belum ada item ditambahkan</p>
                </div>

                <div v-else class="space-y-4">
                    <div class="max-h-96 overflow-y-auto space-y-3">
                        <div v-for="(item, index) in keranjang" :key="item.id"
                            class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100 hover:shadow-md transition-all duration-200">
                            <div class="flex justify-between items-start">
                                <div class="flex-1">
                                    <p class="font-semibold text-purple-800">{{ item.nama }}</p>
                                    <p class="text-sm text-purple-600 mt-1">
                                        x{{ item.jumlah }} | Rp {{ (item.harga * item.jumlah).toLocaleString() }}
                                    </p>
                                </div>
                                <button @click="hapus(index)"
                                    class="ml-3 text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-all duration-200">
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Total dan Checkout -->
                    <div class="border-t border-purple-200 pt-6 mt-6">
                        <div class="flex justify-between items-center mb-6">
                            <span class="text-lg font-semibold text-purple-700">Total:</span>
                            <span
                                class="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Rp {{ totalHarga.toLocaleString() }}
                            </span>
                        </div>

                        <button @click="checkout"
                            class="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-3">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M2 17H22L20 19H4L2 17ZM13.5 16H10.5V14H13.5V16ZM20 4H4V14H6V12H18V14H20V4ZM9 6H11V8H9V6ZM13 6H15V8H13V6Z" />
                            </svg>
                            <span>Checkout</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useMenuStore } from '@/stores/menuStore.js'
import { useTransaksiStore } from '@/stores/transaksiStore.js'

const namaPelanggan = ref('')
const menuStore = useMenuStore()
const transaksiStore = useTransaksiStore()

onMounted(() => {
    menuStore.fetchMenu()
})

const keranjang = computed(() => transaksiStore.keranjang)
const totalHarga = computed(() => transaksiStore.totalHarga)

function tambah(item) {
    const sudahAda = keranjang.value.some((k) => k.id === item.id)
    if (sudahAda) {
        showCustomAlert('Menu perawatan ini sudah dipilih.')
        return
    }

    transaksiStore.tambahKeKeranjang(item)
}


function hapus(index) {
    transaksiStore.hapusDariKeranjang(index)
}

function checkout() {
    if (!namaPelanggan.value.trim()) {
        // Custom alert dengan styling yang lebih baik
        showCustomAlert('Mohon isi nama pelanggan terlebih dahulu.')
        return
    }

    transaksiStore.simpanTransaksi(namaPelanggan.value)
    showCustomAlert(`Transaksi untuk ${namaPelanggan.value} berhasil!`, 'success')
    namaPelanggan.value = ''
}

function showCustomAlert(message, type = 'warning') {
    // Untuk sementara menggunakan alert biasa, bisa diganti dengan toast notification
    alert(message)
}
</script>

<style scoped>
/* Custom scrollbar untuk area keranjang */
::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #8b5cf6, #ec4899);
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, #7c3aed, #db2777);
}

/* Gradient background animation */
@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

/* Card hover effects */
.group:hover {
    transform: translateY(-2px);
}

/* Smooth transitions */
* {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Focus states */
input:focus {
    transform: scale(1.02);
}

/* Button press effects */
button:active {
    transform: scale(0.98);
}
</style>