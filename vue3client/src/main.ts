import { createApp } from 'vue'
import { fpjsPlugin, type FpjsVueOptions } from '@fingerprintjs/fingerprintjs-pro-vue-v3';
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/main.css'
import { supabase } from './plugins/presence'





// import { Apis } from './apis';
// import type { SigninResponse } from './dto/response/signin-response.dto';
// import type { ErrorResponse } from './dto/response/error-response.dto';
// import { VueSupabaseClient } from './plugins/VueSupabaseClient';
// import type { PluginObject } from 'vue';
// import type { SupabaseClientOptions } from '@supabase/supabase-js';
// Apis.Signin({
//     signDto: {
//         username: "asdf",
//         password: "asdfasdf",
//     },
//     onSuccess: (data: SigninResponse) => {
//         // router.push(data.path);
//         console.log(data)
//         // const cookieHeaders = data.headers['Set-Cookie'];
//         // console.log(cookieHeaders)

//     },
//     onFailure: (err: ErrorResponse) => {
//         // alert(err.message);
//         console.log(err)
//         // const cookieHeaders = err.headers['Set-Cookie'];
//         // console.log(cookieHeaders)

//     },
// });

const app = createApp(App)
app.use(createPinia()).mount('#app');
// const apiKey = 'bEvNWUZO5FzWDjlCrF9R'


// supabase.auth.getSession().then(data => {
//     // console.log(error)
//     // @ts-ignore
//     // console.log(data.data.session)
//     // @ts-ignore
//     if (!data.data.session) {

//         supabase.auth.signInWithPassword({ email: "asdf@asdf.com", password: "asdfasdf" }).then(result => {
//             console.log(result)
//             //@ts-ignore
//             localStorage.setItem('user', result.data.session || result.data.user || null)
//             const user = JSON.parse(localStorage.getItem('user')!)

//             const presenceChannel = supabase.channel('online-users', {
//                 config: {
//                     presence: {
//                         key: user.user.id,
//                     },
//                 },
//             })
//             presenceChannel.on('presence', { event: 'sync' }, () => {
//                 console.log('Online users: ', presenceChannel.presenceState())
//             })

//             presenceChannel.on('presence', { event: 'join' }, ({ newPresences }) => {
//                 console.log('New users have joined: ', newPresences)
//             })

//             presenceChannel.on('presence', { event: 'leave' }, ({ leftPresences }) => {
//                 console.log('Users have left: ', leftPresences)
//             })
//             presenceChannel.subscribe(async (status) => {
//                 console.log(status)
//                 if (status === 'SUBSCRIBED') {
//                     const status = await presenceChannel.track({ online_at: new Date().toISOString() })
//                     console.log(status)
//                 }

//                 // app.use(VueSupabase, {
//                 //     supabaseUrl: 'https://vmntkncfphhpgixfurmj.supabase.co',
//                 //     supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMzg1ODY5OSwiZXhwIjoxOTQ5NDM0Njk5fQ.NlwEMewzQOj8tpvtu_2_tQwHjANzKzNvUFWhsvZIr2M',
//                 //     supabaseOptions: {}
//                 //   })

//                 app
//                     .use(fpjsPlugin, {
//                         loadOptions: {
//                             apiKey,
//                         },
//                     } as FpjsVueOptions)
//                     .mount('#app');

//             })


//         })
//     } else {
//         //@ts-ignore
//         // console.log(data.data.session)
//         console.log(data.data.session.user)
//         if (!data.data.session.user.user_metadata.php_id) {
//             const u = data.data.session.user
//             supabase.from('w_users').select('*').eq('sb_id', u.id).then(sbuser => {
//                 //@ts-ignore
//                 const u = sbuser.data[0]
//         console.log(u.id)
//         supabase.auth.updateUser({ data: { 'php_id': u.id } })
//         localStorage.setItem('user', JSON.stringify(data.data.session))

//             })
//         }
//         //@ts-ignore
//         localStorage.setItem('user', JSON.stringify(data.data.session))
//         const user = JSON.parse(localStorage.getItem('user')!)
//         console.log(user.user.id)

//         const presenceChannel = supabase.channel('online-users', {
//             config: {
//                 presence: {
//                     key: user.user.id,
//                 },
//             },
//         })
//         presenceChannel.on('presence', { event: 'sync' }, () => {
//             console.log('Online users: ', presenceChannel.presenceState())
//         })

//         presenceChannel.on('presence', { event: 'join' }, ({ newPresences }) => {
//             console.log('New users have joined: ', newPresences)
//         })

//         presenceChannel.on('presence', { event: 'leave' }, ({ leftPresences }) => {
//             console.log('Users have left: ', leftPresences)
//         })

//         //   presenceChannel.subscribe(async (status) => {
//         //     if (status === 'SUBSCRIBED') {
//         //       const status = await presenceChannel.track({ online_at: new Date().toISOString() })
//         //       console.log(status)
//         //     }
//         //   })

//         presenceChannel.subscribe(async (status) => {
//             if (status === 'SUBSCRIBED') {
//                 const status = await presenceChannel.track({ online_at: new Date().toISOString() })
//                 console.log(status)
//             }
//             const app = createApp(App)
//             app.use(createPinia())
//             // app.use(VueSupabase, {
//             //     supabaseUrl: 'https://vmntkncfphhpgixfurmj.supabase.co',
//             //     supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMzg1ODY5OSwiZXhwIjoxOTQ5NDM0Njk5fQ.NlwEMewzQOj8tpvtu_2_tQwHjANzKzNvUFWhsvZIr2M',
//             //     supabaseOptions: {}
//             //   })
//             app
//                 .use(fpjsPlugin, {
//                     loadOptions: {
//                         apiKey,
//                     },
//                 } as FpjsVueOptions)
//                 .mount('#app');
//         })
//     }
// })



// })


// const game = new Phaser.Game({  })
// createPhavuerApp(game, app)
