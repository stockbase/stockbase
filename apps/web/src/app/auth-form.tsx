"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "models";

export default function AuthForm() {
  const supabase = createClientComponentClient<Database>();

  return (
    <Auth
      supabaseClient={supabase}
      view="sign_in"
      // view="magic_link"
      appearance={{ theme: ThemeSupa }}
      // appearance={{
      //   // If you want to extend the default styles instead of overriding it, set this to true
      //   extend: false,
      //   // Your custom classes
      //   className: {
      //     anchor: "my-awesome-anchor",
      //     button: "my-awesome-button",
      //     //..
      //   },
      // }}
      theme="light"
      // showLinks
      socialLayout="vertical"
      providers={["google", "facebook", "twitter"]}
      // TODO: this needs to be dynamic
      redirectTo="http://localhost:3002/auth/callback"
    />
  );
}
