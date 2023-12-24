import config from './next.config'

// Make sure you can use "publicRuntimeConfig" within tests.
setConfig(config)

  publicRuntimeConfig: {
    // Will be available on both server and client
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    settings
  }
}

const nextConfig = {
  compiler: {
    emotion: true,
    styledComponents: true
