export const PROD_URL = "https://emojis.sh"
export const SITE_URL =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production" || process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : process.env.NGROK_URL
export const APP_STORE_URL = "https://apps.apple.com/us/app/ai-emojis-generator/id6468916301"

export const SITEMAP_PAGE_SIZE = 50_000

export const EMOJI_SIZE = 768
export const DEFAULT_OG_IMAGE =
  "https://aaah0mnbncqtinas.public.blob.vercel-storage.com/R8kNkB6-no-background-21MudH10pBTUrDtoi3EueKPZj5wnbd.png"
export const FEATURED_OG_IMAGES = [
  "https://aaah0mnbncqtinas.public.blob.vercel-storage.com/1p0Dvak-no-background-c8Xh7JPh6KwLVmCNzQe5fbVot7BGu4.png",]
