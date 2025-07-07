import { defineStore } from 'pinia'
import axios from 'axios'

export const useMenuStore = defineStore('menu', {
  state: () => ({
    daftarMenu: [],
    loading: false,
    error: null
  }),


  actions: {
    async fetchMenu() {
      this.loading = true
      this.error = null
      try {
        const res = await axios.get('http://localhost:3000/menu')
        this.daftarMenu = res.data
      } catch (err) {
        this.error = 'Gagal memuat data menu.'
        console.error(err)
      } finally {
        this.loading = false
      }
    }
  }
})
