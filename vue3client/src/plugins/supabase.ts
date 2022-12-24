import type { App, Plugin } from "vue";
import type { SupabaseClient, SupabaseClientOptions } from "@supabase/supabase-js";
import { VueSupabaseClient } from "./VueSupabaseClient";

// declare module "vue/types/vue" {
//   interface Vue {
//     $supabase: SupabaseClient;
//   }
// }

export type SupabasePluginOptions = {
  supabaseUrl: string;
  supabaseKey: string;
  supabaseOptions: any;
};

export function install(
  app: App,
  options: SupabasePluginOptions
) {
  const supabase = new VueSupabaseClient(
    options.supabaseUrl,
    options.supabaseKey,
    options.supabaseOptions
  );
  supabase.install(app);
  console.log('sup installeed', options.supabaseUrl)
}

const VueSupabasePlugin: any| Plugin = {
  install,
};

export {
    SupabaseClient,
} from "@supabase/supabase-js";
export type {
    SupabaseClientOptions, AuthUser,
    AuthUser as User,
    AuthSession,
    AuthSession as Session,
    Subscription
} from "@supabase/supabase-js";

export * from "./composables";

export { createVueSupabase } from "./VueSupabaseClient";

export default VueSupabasePlugin;