import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { assetUrl } from '../lib/hotData'

// 拆书帮 2026 · 拆书家成长大会（广州站）「一年深耕，共启新程」
// 预告版：只公布主题、时间地点与内容方向；完整议程、嘉宾阵容、报名方式陆续揭晓
const CONF_DATE = new Date('2026-12-12T00:00:00+08:00')

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45, delay },
})

const facts = [
  { k: '时间', v: '2026年12月12日（周六）\n9:00—17:00（8:30 起签到）' },
  { k: '地点', v: '广州市天河区天慧路 10、12、14 号' },
  { k: '规模', v: '50—100 人 · 全国拆书帮会员、各分舵拆书家及学习爱好者' },
  { k: '形式', v: '线下大会 · 主题分享 / 工作坊 / 圆桌访谈 / 共启仪式\n具体安排以现场公布为准' },
  { k: '主办', v: '拆书帮广州小蛮腰分舵 · 广州大湾区分舵 · 深圳桃李分舵' },
  { k: '联合主办', v: '粤港澳大湾区（广东）创新创业孵化基地' },
]

// 预告只给方向，不展开环节与嘉宾
const highlights = [
  { n: '01', t: '拆书赋能', d: '把书拆得更好，技能再磨一层' },
  { n: '02', t: '能量赋能', d: '向内照见这一年的蓄力' },
  { n: '03', t: 'AI 赋能', d: 'AI 时代，我们还能怎么长' },
  { n: '04', t: '共启新程', d: '带着彼此的看见，走向下一年' },
]

export default function GrowthConf() {
  const days = Math.max(0, Math.ceil((CONF_DATE.getTime() - Date.now()) / 86400000))

  return (
    <div className="hero-wash">
      {/* ==================== Hero ==================== */}
      <section className="pt-36 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="eyebrow mb-4">拆书帮 2026 · 拆书家成长大会（广州站）· 预告</div>
            <h1 className="headline text-[40px] md:text-[58px] mb-5">
              一年深耕，<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500">共启新程</span>
            </h1>
            <p className="text-[17px] md:text-[19px] leading-relaxed text-[#6e6e73] max-w-2xl mx-auto mb-4">
              怎么把书拆得更好、把自己长得更强——一年深耕，我们聚在广州，共启新程。
            </p>
            <p className="text-[14px] text-[#86868b] mb-8 max-w-2xl mx-auto leading-relaxed">
              拆书帮广州小蛮腰分舵 · 广州大湾区分舵 · 深圳桃李分舵 联合主办<br className="hidden md:block" />
              年会向上看方向，成长大会向内看进深；完整议程、嘉宾阵容与报名方式，将陆续揭晓。
            </p>
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-rose-500/10 border border-orange-500/20 mb-9">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-[14px] font-bold text-orange-600">
                {days > 0 ? `距大会还有 ${days} 天` : '大会进行中'}
              </span>
              <span className="text-[13px] text-[#86868b]">12 月 12 日 · 广州天河</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#notify" className="btn-primary !bg-gradient-to-r !from-amber-500 !via-orange-500 !to-rose-500 !shadow-[0_8px_24px_rgba(249,115,22,.35)]">
                订阅报名通知 ↓
              </a>
              <Link to="/" className="btn-secondary">返回主页</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== 关键信息 ==================== */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
          {facts.map((f, i) => (
            <motion.div key={f.k} {...fadeUp(i * 0.06)} className="apple-card p-6">
              <div className="text-[12px] font-semibold text-orange-600 mb-2 tracking-wide">{f.k}</div>
              <div className="text-[15px] leading-relaxed text-[#1d1d1f] font-medium whitespace-pre-line">{f.v}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==================== 关于这场大会 ==================== */}
      <section className="py-20 px-4 bg-white border-y border-black/[.05]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="eyebrow mb-3">关于这场大会</div>
          <h2 className="headline text-[28px] md:text-[36px] mb-6">一年深耕，向内看进深</h2>
          <p className="text-[15px] md:text-[16px] leading-[1.9] text-[#6e6e73] text-left md:text-center">
            拆书帮每年有两次相聚：<b className="text-[#1d1d1f]">年底的年会</b>向上看方向，<b className="text-[#1d1d1f]">成长大会</b>向内看进深——打磨拆书技能、交换成长路径，把各自这一年攒下的东西摆到同一张桌上。
          </p>
          <p className="mt-5 text-[15px] md:text-[16px] leading-[1.9] text-[#6e6e73] text-left md:text-center">
            自 2017 年北京首届起，这一传统走过上海、深圳、广州；今年落地广州大湾区，由三个分舵联合主办。
            这一次，我们想和你一起回答：<b className="text-[#1d1d1f]">怎么把书拆得更好，把自己长得更强。</b>
          </p>
        </div>
      </section>

      {/* ==================== 内容方向 · 先睹为快 ==================== */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="eyebrow mb-3 text-center">内容方向 · 先睹为快</div>
          <h2 className="headline text-[28px] md:text-[36px] text-center mb-4">拆书赋能 → 能量赋能 → AI 赋能 → 共启新程</h2>
          <p className="text-center text-[#6e6e73] text-[15px] mb-12 max-w-2xl mx-auto">
            一整天，从技能的打磨，到向内照见，再到时代视野与下一年的出发。
          </p>
          <div className="grid md:grid-cols-4 gap-3">
            {highlights.map((b, i) => (
              <motion.div key={b.n} {...fadeUp(i * 0.07)} className="apple-card p-5 h-full">
                <div className="text-[12px] font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500">{b.n}</div>
                <div className="text-[17px] font-bold text-[#1d1d1f] mb-2">{b.t}</div>
                <div className="text-[13px] leading-relaxed text-[#6e6e73]">{b.d}</div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-[13px] text-[#86868b] mt-8 leading-relaxed">
            这一页先留个位置给期待：完整议程、分享嘉宾与现场玩法，将陆续揭晓。
          </p>
        </div>
      </section>

      {/* ==================== 陆续揭晓 ==================== */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              ['📋', '完整议程', '每个环节的时间与内容'],
              ['🎤', '嘉宾阵容', '分享与圆桌的出场嘉宾'],
              ['🎟', '报名通道', '报名方式与席位安排'],
            ].map(([icon, t, d], i) => (
              <motion.div key={t} {...fadeUp(i * 0.07)} className="apple-card p-6 text-center">
                <div className="text-[22px] mb-3">{icon}</div>
                <div className="text-[15px] font-bold text-[#1d1d1f] mb-1.5">{t}</div>
                <div className="text-[13px] text-[#6e6e73] leading-relaxed">{d}</div>
                <div className="inline-block mt-3 px-3 py-1 rounded-full bg-orange-500/10 text-[12px] font-semibold text-orange-600">即将公布</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section id="notify" className="py-20 px-4 bg-white border-t border-black/[.05] scroll-mt-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="headline text-[26px] md:text-[34px] mb-4">报名通道即将开启</h2>
          <p className="text-[#6e6e73] text-[15px] leading-relaxed mb-8">
            12 月 12 日，广州天河，50—100 人的相聚。完整议程、嘉宾阵容与报名方式将陆续公布——<br className="hidden md:block" />
            扫码订阅【小蛮腰AI拆书帮】知识库，第一时间收到通知，也可以随时问大会的任何问题。
          </p>
          <div className="flex flex-col items-center gap-3">
            <img src={assetUrl('/images/ima-knowledge-qr.png')} alt="【小蛮腰AI拆书帮】知识库二维码" className="w-[200px] rounded-2xl border border-black/[.06] shadow-[0_8px_28px_rgba(0,0,0,.10)]" />
            <p className="text-[14px] text-[#6e6e73] font-semibold">微信或 ima 扫码，订阅知识库接收报名通知</p>
            <p className="text-[12.5px] text-[#86868b] mt-1">项目对接：广州小蛮腰分舵舵主｜吕游 13261578643</p>
            <Link to="/" className="text-[13px] text-[#0071e3] hover:underline mt-2">← 返回主页</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
