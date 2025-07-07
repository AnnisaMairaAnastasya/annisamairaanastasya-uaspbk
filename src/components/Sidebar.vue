<template>
  <div class="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-purple-900 to-purple-800 text-white shadow-2xl z-50">
    <!-- Logo Header -->
    <div class="p-6 border-b border-purple-700">
      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9H21ZM19 21H5V3H14V9H19V21ZM12 18C10.9 18 10 17.1 10 16C10 14.9 10.9 14 12 14C13.1 14 14 14.9 14 16C14 17.1 13.1 18 12 18ZM12 10C10.9 10 10 9.1 10 8C10 6.9 10.9 6 12 6C13.1 6 14 6.9 14 8C14 9.1 13.1 10 12 10Z"/>
          </svg>
        </div>
        <div>
          <h1 class="text-xl font-bold">Cat Care</h1>
          <p class="text-sm text-purple-300">Dashboard</p>
        </div>
      </div>
    </div>

    <!-- Navigation Menu -->
    <nav class="mt-8 px-4">
      <ul class="space-y-2">
        <li>
          <router-link 
            to="/" 
            class="flex items-center px-4 py-3 rounded-lg transition-all duration-200 hover:bg-purple-700 group"
            :class="{ 'bg-purple-700 shadow-lg': $route.name === 'dashboard' }"
          >
            <svg class="w-5 h-5 mr-3 text-purple-300 group-hover:text-white" 
                 :class="{ 'text-white': $route.name === 'dashboard' }" 
                 fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"/>
            </svg>
            <span class="font-medium">Dashboard</span>
          </router-link>
        </li>

        <li>
          <router-link 
            to="/transaksi" 
            class="flex items-center px-4 py-3 rounded-lg transition-all duration-200 hover:bg-purple-700 group"
            :class="{ 'bg-purple-700 shadow-lg': $route.name === 'transaksi' }"
          >
            <svg class="w-5 h-5 mr-3 text-purple-300 group-hover:text-white" 
                 :class="{ 'text-white': $route.name === 'transaksi' }" 
                 fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 14H5L7 12H17L19 14ZM7 18H17L19 16H5L7 18ZM5 10H19L17 8H7L5 10ZM3 6V4H21V6H3ZM3 20V18H21V20H3Z"/>
            </svg>
            <span class="font-medium">Transaksi</span>
          </router-link>
        </li>

        <li>
          <router-link 
            to="/pengerjaan" 
            class="flex items-center px-4 py-3 rounded-lg transition-all duration-200 hover:bg-purple-700 group"
            :class="{ 'bg-purple-700 shadow-lg': $route.name === 'pengerjaan' }"
          >
            <svg class="w-5 h-5 mr-3 text-purple-300 group-hover:text-white" 
                 :class="{ 'text-white': $route.name === 'pengerjaan' }" 
                 fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM17 12H7V10H17V12ZM17 16H7V14H17V16ZM17 8H7V6H17V8Z"/>
            </svg>
            <span class="font-medium">Pengerjaan</span>
          </router-link>
        </li>

        <li>
          <router-link 
            to="/riwayat" 
            class="flex items-center px-4 py-3 rounded-lg transition-all duration-200 hover:bg-purple-700 group"
            :class="{ 'bg-purple-700 shadow-lg': $route.name === 'profile' }"
          >
            <svg class="w-5 h-5 mr-3 text-purple-300 group-hover:text-white" 
                 :class="{ 'text-white': $route.name === 'profile' }" 
                 fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 3C9.23 3 6.19 5.95 6 9.66L4.1 12.5C3.71 13.19 4.21 14 5 14H6.5C7.33 14 8 13.33 8 12.5V10.5C8 9.67 8.67 9 9.5 9H10.5C11.33 9 12 8.33 12 7.5V6.5C12 5.67 12.67 5 13.5 5H15.5C16.33 5 17 4.33 17 3.5V3.5C17 3.22 16.78 3 16.5 3H13ZM19 15V17H21V15H19ZM19 19V21H21V19H19ZM17 17V19H19V17H17ZM15 19V21H17V19H15Z"/>
            </svg>
            <span class="font-medium">Riwayat</span>
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- Cat Care Info Section -->
    <div class="absolute bottom-0 left-0 right-0 p-6 bg-purple-800 border-t border-purple-700">
      <div class="flex items-center space-x-3">
        <div class="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center">
          <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM18 14V16H6V14C6 12.9 6.9 12 8 12H16C17.1 12 18 12.9 18 14ZM12 18C10.9 18 10 17.1 10 16C10 14.9 10.9 14 12 14C13.1 14 14 14.9 14 16C14 17.1 13.1 18 12 18Z"/>
          </svg>
        </div>
        <div>
          <p class="text-sm font-medium">Admin Panel</p>
          <p class="text-xs text-purple-300">Sistem Perawatan</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  mounted() {
    // Menambahkan padding ke body untuk mengimbangi sidebar fixed
    document.body.style.paddingLeft = '16rem';
  },
  unmounted() {
    // Menghapus padding ketika component di-unmount
    document.body.style.paddingLeft = '0';
  }
}
</script>

<style scoped>
/* Custom styling untuk router-link active state */
.router-link-active {
  background-color: rgba(147, 51, 234, 0.7);
  box-shadow: 0 4px 14px 0 rgba(147, 51, 234, 0.39);
}

/* Smooth transition untuk hover effects */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

/* Gradient background animation */
.bg-gradient-to-b {
  background: linear-gradient(to bottom, #581c87, #7c3aed);
}

/* Box shadow untuk depth */
.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
</style>