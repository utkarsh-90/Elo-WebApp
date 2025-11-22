# Setting up Google OAuth for Supabase

To enable "Continue with Google" for both new and existing users, you need to configure the Google provider in your Supabase dashboard.

## Step 1: Get Google Cloud Credentials

1. Go to the [Google Cloud Console](https://console.cloud.google.com/apis/credentials).
2. Create a new project (if you haven't already).
3. Select **APIs & Services** > **Credentials**.
4. Click **Create Credentials** > **OAuth client ID**.
5. Select **Web application** as the application type.
6. Name it "Elo Web App".
7. Under **Authorized redirect URIs**, add:
   `https://gvjsmoalmlktaggqmajt.supabase.co/auth/v1/callback`
   *(This is your Supabase Project URL + `/auth/v1/callback`)*
8. Click **Create**.
9. Copy the **Client ID** and **Client Secret**.

## Step 2: Enable Google in Supabase

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard).
2. Select your project.
3. Go to **Authentication** > **Providers**.
4. Find **Google** in the list and click to expand it.
5. Toggle **Enable Sign in with Google** to ON.
6. Paste your **Client ID** and **Client Secret** from Step 1.
7. Click **Save**.

## Step 3: Test It

1. Go to your local app: `http://localhost:3000/login`
2. Click **Continue with Google**.
3. It should redirect you to Google, ask for permission, and then log you in!
   - If it's a new email, it creates a new account.
   - If it's an existing email, it signs you in.
