import { defineStore } from 'pinia'
import axios from 'axios'

export const useTransaksiStore = defineStore('transaksi', {
  state: () => ({
    keranjang: [],
    transaksiList: []
  }),

  getters: {
    totalHarga: (state) =>
      state.keranjang.reduce((sum, item) => sum + item.harga * item.jumlah, 0),

    transaksiBelumSelesai: (state) =>
      state.transaksiList.filter((t) => !t.selesai),

    transaksiSelesai: (state) =>
      state.transaksiList.filter((t) => t.selesai)
  },

  actions: {
    tambahKeKeranjang(item) {
      this.keranjang.push({ ...item, jumlah: 1 })
    },

    hapusDariKeranjang(index) {
      this.keranjang.splice(index, 1)
    },

    async fetchTransaksi() {
      try {
        const res = await axios.get('http://localhost:3000/transaksi')
        this.transaksiList = res.data
      } catch (err) {
        console.error('Gagal fetch transaksi', err)
      }
    },

    async simpanTransaksi(name) {
      if (this.keranjang.length === 0) return

      const data = {
        id: Date.now().toString(),
        pelanggan: name,
        items: this.keranjang,
        total: this.keranjang.reduce((sum, item) => sum + item.harga * item.jumlah, 0),
        waktu: new Date().toISOString(),
        selesai: false
      }

      try {
        await axios.post('http://localhost:3000/transaksi', data)
        this.keranjang = []
        await this.fetchTransaksi()
      } catch (err) {
        console.error('Gagal simpan transaksi', err)
      }
    },

    async tandaiSelesai(id) {
      const transaksi = this.transaksiList.find((t) => t.id === id)
      if (!transaksi) return

      try {
        await axios.patch(`http://localhost:3000/transaksi/${id}`, {
          selesai: true
        })
        await this.fetchTransaksi()
      } catch (err) {
        console.error('Gagal update status selesai', err)
      }
    }
  }
})
