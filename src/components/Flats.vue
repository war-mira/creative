<template>
  <div class="container">
      <FlatItem :class="checkFavorite(flat.id)" 
        v-for="flat in flats" :key="flat.id" :flat="flat">
        </FlatItem>
  </div>
</template>

<script>
import FlatService from '@/services/FlatService'
import { mapGetters } from 'vuex'
import FlatItem from '@/components/FlatItem'

export default {
  name: 'Flats',
  components: {
    FlatItem
  },
  data () {
    return {
      flats: [],
    }
  },
  mounted () {
    this.getFlats()
  },
  computed: {
    ...mapGetters({
        favorites: 'getFavorites'
    })
  },
  methods: {
    async getFlats () {
      const response = await FlatService.getFlats();
      this.flats = response;
    },
    checkFavorite(id){
      if(this.favorites.includes(id)){
        return 'favorite'
      }
    },
  },
}
</script>
<style lang="scss">
  .container{
    width: 100%;
    margin: auto;
    max-width: 1200px;
  }
  .favorite{
    background: #e6f5ee;
      i{
        color: #f9e029;
      }
}

</style>