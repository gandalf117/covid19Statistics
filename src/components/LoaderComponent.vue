<template>
  <div class="text-center">
    <v-overlay :value="showLoader" :z-index="100">
      <v-progress-circular
        :indeterminate="true"
        :rotate="0"
        :size="loader.size"
        :value="value"
        :width="loader.width"
        color="white">
        <span v-if="loader.useCounter">
          {{ value }}
        </span>
      </v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
  import { EventBus } from '@/utils'

  export default {
    name: 'loader-component',
    components: {

    },
    data () {
      return {
        value: 1,
        loader: {},
        defaultOptions: {
          show: false,
          useCounter: true,
          minLoad: false,
          minLoadTime: 500,
          size: 100,
          width: 2
        }
      }
    },
    computed: {
      showLoader () {
        return this.loader.show || this.loader.minLoad
      }
    },
    methods: {
      setLoader (options) {
        this.loader = Object.assign(this.defaultOptions, options)
        /* Starts the loader counter if is set */
        if (this.loader.show && this.loader.useCounter) {
          this.value = 1
          clearInterval(this.minLoad)
          this.loader.minLoad = setInterval(() => {
            this.value++
            if (this.value >= 100) {
              clearInterval(this.loader.minLoad)
              this.loader.minLoad = false
            }
          }, this.loader.minLoadTime / 100)
        }
      }
    },
    created () {
      this.loader = this.defaultOptions
      EventBus.$on('setCoreLoader', (options) => this.setLoader(options))
    }
  }
</script>

<style lang="sass" scoped>
</style>
