// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules : [
        '@nuxtjs/axios',
        [
            '@nuxtjs/firebase',
            {
                config: {
                    apiKey: 'AIzaSyCkaB_sAlFOu1kOs2UCAtknjdaI3-9pCYw',
                    authDomain: 'challenge-nuxt-auth.firebaseapp.com',
                    projectId: 'challenge-nuxt-auth',
                    storageBucket: 'challenge-nuxt-auth.appspot.com',
                    messagingSenderId: '681989257575',
                    appId: '1:681989257575:web:cfac80593bc86c923d97c2',
                },
                 services: {
                    auth: true
                 }
            }
        ]
    ]
})
