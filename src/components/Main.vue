<template>
  <div>
    <h1>Лучшие квартиры в городе</h1>
    <flats></flats>
  </div>
</template>

<script>
import Flats from '@/components/Flats'
export default {
  name: 'Main',
  components: {
    Flats
  }
}
</script>
<style>
    h1{
        text-align:center;
        border-bottom:2px solid #005394;
    }
    body {
      font-family: Arial, sans-serif;
    }
    input{
        width:300px;
        height:40px;
    
    }
</style>