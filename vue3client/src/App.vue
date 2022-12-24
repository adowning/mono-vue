<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Game from '@/components/Game.vue'
import FW from '@/fw/FW.vue'
import { onBeforeMount, onMounted, watch } from 'vue';
import { useVisitorData } from '@fingerprintjs/fingerprintjs-pro-vue-v3';
import {supabase} from './plugins/presence'
import { ImmortalDB } from 'immortal-db'
import { useOnAuthStateChange } from './plugins/composables';

//  onBeforeMount(() => {
//     document.addEventListener('beforeunload',() =>{
//       console.log('logged out')
//       const d = new Date()
//        supabase.auth.getSession().then(session =>{
//         supabase.from('sessions').update({ finished_at: d }).eq('user_id',session.data.session?.user.id ).is('finished_at', null)

//        })

//     })

//   })

// const authChanged = async (event: any, session: any) =>{
  // console.log("event", event)
  // console.log("session", session)
  // if(event == 'SIGNED_IN'){
  //  const sid = await supabase.from('sessions').insert({ user_id: session.data.session.id, session_type: 'auth'  })
  //   console.log(sid)

  // }else{
  //   const d = new Date()
  //   supabase.from('sessions').update({ finished_at: d }).eq('user_id',session.data.session?.user.id ).is('finished_at', null)

  // }
  
// }
// const { data, error, isLoading, getData } = useVisitorData(
//   { extendedResult: true }, 
//   // Set to true to fetch data on mount
//   { immediate: false }
// );

// watch(data, async(currentData) => {
//   if (currentData) {
//     // Do something with the data
//     // localStorage.setItem('userData', JSON.stringify(currentData))
//     await ImmortalDB.set('userData', JSON.stringify(currentData)  )

//   }
// });

// onMounted(() => {
//  ImmortalDB.get('userData').then(value =>{
// if(!value)
// getData()
//  })
//  const auth = useOnAuthStateChange(authChanged)
// });
//   const auth = useOnAuthStateChange(authChanged)

// })

</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header> -->

  <main>
    <!-- <Game /> -->
    <FW />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
