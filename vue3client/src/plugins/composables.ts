import { inject, onMounted, onUnmounted } from "vue";
import { createClient } from '@supabase/supabase-js'
import type {
  SupabaseClient,
  AuthChangeEvent,
  Session,
} from "@supabase/supabase-js";
const supabaseSymbol = Symbol("supabase");

// // Create a single supabase client for interacting with your database
// const supabase = createClient('https://vmntkncfphhpgixfurmj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMzg1ODY5OSwiZXhwIjoxOTQ5NDM0Njk5fQ.NlwEMewzQOj8tpvtu_2_tQwHjANzKzNvUFWhsvZIr2M',)
import {supabase} from './presence'

export default supabaseSymbol;

export function useSupabase(): SupabaseClient {
  if (!supabase) {
    throw new Error("Supabase provider not found");
  }
  return supabase;
}

export function useSupabaseAuth(): SupabaseClient["auth"] {
  const supabase = useSupabase();
  return supabase.auth;
}

export function useSupabaseStorage(): SupabaseClient["storage"] {
  const supabase = useSupabase();
  return supabase.storage;
}

export function useSupabaseFrom(): SupabaseClient["from"] {
  const supabase = useSupabase();
  return supabase.from;
}

export function useSupabaseFunctions(): SupabaseClient["functions"] {
  const supabase = useSupabase();
  return supabase.functions;
}

type AuthChangeHandler = (
  event: AuthChangeEvent,
  session: Session | null
) => void;

export function useOnAuthStateChange(callback: AuthChangeHandler): void {
  // console.log('ding')
  const client = useSupabase();

  onMounted(() => {
    client.auth.getSession().then((session) => {
      console.log(session)
      if (session.data.session) {
        callback("SIGNED_IN", session.data.session);
      } else {
        supabase.auth.signUp({ email: 'randomemafil@random.org', password: 'asdfasdf' }).then(user => {
          console.log(user)
        })
      }
    })

  });

  const { data: authListener } = client.auth.onAuthStateChange(
    (event, session) => {
      callback(event, session);
    }
  );

  onUnmounted(() => {
    authListener?.subscription.unsubscribe
  });
}