import type {  App } from "vue";
import { SupabaseClient } from "@supabase/supabase-js";
import supabaseSymbol from "./symbol";
export class VueSupabaseClient extends SupabaseClient {
  constructor(
    supabaseUrl: string,
    supabaseKey: string,
    supabaseOptions?: any
  ) {
    super(supabaseUrl, supabaseKey, supabaseOptions);
  }

  install(app: App) {
    console.log('installing app')
    const self = this;
      app.provide(supabaseSymbol, self);
      Object.defineProperty(app.config.globalProperties, "$supabase", {
        get: () => self,
        configurable: true,
      });
  
  }
}

export function createVueSupabase({
  supabaseUrl,
  supabaseKey,
  supabaseOptions,
}: {
  supabaseUrl: string;
  supabaseKey: string;
  supabaseOptions?: any;
}) {
  return new VueSupabaseClient(supabaseUrl, supabaseKey, supabaseOptions);
}