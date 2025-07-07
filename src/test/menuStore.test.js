import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useMenuStore } from '@/stores/menuStore.js'
import axios from 'axios'

// Mock axios
vi.mock('axios')

describe('Menu Store', () => {
  let menuStore

  beforeEach(() => {
    setActivePinia(createPinia())
    menuStore = useMenuStore()
  })

  it('should have default state', () => {
    expect(menuStore.daftarMenu).toEqual([])
    expect(menuStore.loading).toBe(false)
    expect(menuStore.error).toBe(null)
  })

  it('fetchMenu - success', async () => {
    const dummyData = [
      { id: 1, nama: 'Mandi Kucing', harga: 30000 },
      { id: 2, nama: 'Potong Kuku', harga: 20000 }
    ]

    axios.get.mockResolvedValue({ data: dummyData })

    await menuStore.fetchMenu()

    expect(menuStore.loading).toBe(false)
    expect(menuStore.error).toBe(null)
    expect(menuStore.daftarMenu).toEqual(dummyData)
  })

  it('fetchMenu - failure', async () => {
    axios.get.mockRejectedValue(new Error('Network Error'))

    await menuStore.fetchMenu()

    expect(menuStore.loading).toBe(false)
    expect(menuStore.error).toBe('Gagal memuat data menu.')
    expect(menuStore.daftarMenu).toEqual([])
  })
})
