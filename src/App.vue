<template>
  <div id="app">
    <router-view />

    <Footer />
  </div>
</template>
<script>
    import Footer from '@/components/Footer'
    export default {
       components: {Footer}
    }
</script>
<style>
    ::-webkit-scrollbar {
  width: 9px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1; 
}

::-webkit-scrollbar-thumb {
  background: #888; 
}

::-webkit-scrollbar-thumb:hover {
  background: #555; 
} /* Для scrollbar */
</style>
