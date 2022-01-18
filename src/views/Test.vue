<template>
  <div class="page-wrapper">
    <span>这是一个新页面</span>
    <p>{{userId}}</p>
    <div v-for="(item, i) in list" :key="i" :ref="el => {divs[i] = el}">
      {{ item }}---{{divs[i]}}
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, ref, onBeforeUpdate, computed, defineComponent, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'Test',
  setup () {
    const ctx = getCurrentInstance()
    console.log(ctx)
    const router = useRouter()
    const route = useRoute()
    const store = useStore()
    console.log(router, route, store, 'router,route,store')
    console.log(router.currentRoute.value)
    const userId = store.state.userId
    // const userId = computed(() => store.state.app.userId)
    console.log(userId)
    const list = reactive([1, 2, 3])
    const divs = ref([])
    onBeforeUpdate(() => {
      divs.value = []
    })
    return { userId, list, divs }
  }
})
</script>
