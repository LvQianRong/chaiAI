/** 部署子路径适配：GitHub Pages 项目页挂在 /chaiAI/ 下，
 *  代码里所有以 / 开头的站内绝对路径都要补 base 前缀。 */
const BASE = import.meta.env.BASE_URL || '/'
export function assetUrl(path) {
  if (!path) return path
  return path.startsWith('/') ? BASE + path.slice(1) : path
}

/** fetchJSON — 透明解压 .gz JSON（DecompressionStream，现代浏览器原生） */
export default async function fetchJSON(path) {
  const url = assetUrl(path)
  const res = await fetch(url)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  if (url.endsWith('.gz')) {
    if (typeof DecompressionStream === 'undefined') throw new Error('gzip unsupported')
    const stream = res.body.pipeThrough(new DecompressionStream('gzip'))
    return new Response(stream).json()
  }
  return res.json()
}

/** 玄龙（站长）双名判定：站方账号名 杨辉，品牌名 玄龙 */
export function isShifu(user) {
  return user === '玄龙' || user === '杨辉'
}
