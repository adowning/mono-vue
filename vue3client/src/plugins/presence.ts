import { createClient } from '@supabase/supabase-js'
// Create a single supabase client for interacting with your database
export const supabase = createClient('https://vmntkncfphhpgixfurmj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMzg1ODY5OSwiZXhwIjoxOTQ5NDM0Njk5fQ.NlwEMewzQOj8tpvtu_2_tQwHjANzKzNvUFWhsvZIr2M',)

// const messagesChannel = supabase.channel('db-message')

// const roomId = 'room1'
// const userId = 103

// messagesChannel.on(
//   'postgres_changes',
//   {
//     event: 'INSERT',
//     schema: 'public',
//     table: 'message',
//     filter: `room=eq.${roomId}`,
//   },
//   (payload) => console.log(payload)
// )

// messagesChannel.subscribe(async (status) => {
//   if (status === 'SUBSCRIBED') {
//     const res = await supabase.from('message').insert({
//       room: roomId,
//       user_id: userId,
//       content: 'Welcome to Realtime!',
//     })
//     console.log(res)
//   }
// })

const latencyChannel = supabase.channel('calc-latency', {
    config: {
      broadcast: { ack: true },
    },
  })
  
  latencyChannel.subscribe(async (status) => {
    if (status === 'SUBSCRIBED') {
      const begin = performance.now()
  
      await latencyChannel.send({
        type: 'broadcast',
        event: 'latency',
        payload: {},
      })
  
      const end = performance.now()
  
      console.log(`Latency is ${end - begin} milliseconds`)
    }
  })

// const presenceChannel = supabase.channel('online-users', {
//     config: {
//       presence: {
//         key: 'user1',
//       },
//     },
//   })
  
//   presenceChannel.on('presence', { event: 'sync' }, () => {
//     console.log('Online users: ', presenceChannel.presenceState())
//   })
  
//   presenceChannel.on('presence', { event: 'join' }, ({ newPresences }) => {
//     console.log('New users have joined: ', newPresences)
//   })
  
//   presenceChannel.on('presence', { event: 'leave' }, ({ leftPresences }) => {
//     console.log('Users have left: ', leftPresences)
//   })
  
//   presenceChannel.subscribe(async (status) => {
//     if (status === 'SUBSCRIBED') {
//       const status = await presenceChannel.track({ online_at: new Date().toISOString() })
//       console.log(status)
//     }
//   })