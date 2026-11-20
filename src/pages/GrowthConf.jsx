import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { assetUrl } from '../lib/hotData'

// 拆书帮 2026 · 拆书家成长大会（广州站）「一年深耕，共启新程」
// 方案源：飞书《【广州成长大会】一年深耕，共启新程》（2026-11-19 修订）
// 日程在方案骨架上细化：时长 / 板块归属 / 带领角色 / 现场产出 / 控场要点
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
  { k: '形式', v: '线下大会：主题分享 · 工作坊 · 圆桌访谈 · 抽奖与仪式' },
  { k: '主办', v: '拆书帮广州小蛮腰分舵 · 广州大湾区分舵 · 深圳桃李分舵' },
  { k: '联合主办', v: '粤港澳大湾区（广东）创新创业孵化基地' },
]

const gains = [
  { d: '技能与方法', h: '拿到可复制的「怎么做」', x: 'RIA 便签、逐字稿、拆书技能 PK 等实战打磨——新手知道往哪儿使劲，老手突破低水平努力' },
  { d: '视野与撬动点', h: '看见拆书之外的更多可能', x: '三级拆书家与跨界嘉宾分享实战打法：从 AI 变现、社群 IP 到教练、OH 卡与身心成长' },
  { d: '实战演练成果', h: '带走一份看得见的产出', x: '通过拆书大赛、工作坊与共创辩论，现场产出个人成长蓝图、A2 行动计划或可复用的课程设计' },
  { d: '人脉与陪伴', h: '找到同频的成长搭子', x: '跨城市、跨分舵深度链接，卧谈会、时光演讲会等，把「网友」变成真正能互相借力的伙伴' },
  { d: '舞台与组织成长', h: '普通人也能成为主角', x: '普通会员登台讲自己的破局故事，承办分舵在申办到执行中完成一次组织能力跃迁' },
  { d: '城市与体验', h: '学习 + 旅行一次完成', x: '每站深度绑定当地风物，茶歇、抽奖、即兴戏剧与美食结伴，是「快乐成长」的一部分' },
]

const blocks = [
  { n: '板块一', t: '拆书赋能', d: '负责人寄语定调，拆书赋能，聚焦技能打磨' },
  { n: '板块二', t: '能量赋能', d: '能量唤醒工作坊，向内照见这一年的蓄力' },
  { n: '板块三', t: 'AI 赋能', d: '「AI 时代，你还好吗？」主题分享，拓展时代视野' },
  { n: '板块四', t: '共启新程', d: '圆桌访谈、面向未来分享，以共启新程仪式与合影收尾' },
]

// 全天 15 个时段（方案议程表骨架），补时长 / 板块 / 带领 / 产出
const agenda = [
  { time: '08:30—09:00', dur: '30′', name: '签到', tag: '会前', desc: '现场签到，领取胸卡与议程卡', who: '签到组 · 入口签到台', out: '入场即进入状态' },
  { time: '09:00—09:15', dur: '15′', name: '开场', tag: '板块一', desc: '主持人开场、舵主致欢迎词', who: '主持人 + 三主办分舵舵主', out: '定调「向内看进深」' },
  { time: '09:15—09:30', dur: '15′', name: '破冰', tag: '板块一', desc: '破冰活动，跨分舵混坐互识', who: '主持人', out: '同桌互识，打开连接' },
  { time: '09:30—10:10', dur: '40′', name: '嘉宾分享 · 帮主寄语', tag: '板块一', desc: '拆书家如何深耕 / AI 时代重新看拆书', who: '拆书帮负责人', out: '全年深耕的方向共识' },
  { time: '10:10—10:40', dur: '30′', name: '嘉宾分享 · AI 与提问力', tag: '板块一', desc: 'AI 与提问力', who: '资深拆书家 / 区域负责人', out: '一份自己的提问清单' },
  { time: '10:40—11:00', dur: '20′', name: '中场 · 第一轮抽奖', tag: '中场', desc: '休息 + 第一轮抽奖', who: '运营组 · 中场交流区', out: '茶歇交流，节奏缓冲' },
  { time: '11:00—12:00', dur: '60′', name: '嘉宾分享 · 双主题', tag: '板块一', desc: 'AI + 商拆课设计；AI & 拆书在家庭教育中的应用', who: '各分舵资深拆书家', out: '可复用的课程设计思路' },
  { time: '12:00—13:30', dur: '90′', name: '午餐与交流', tag: '中场', desc: '用餐与交流', who: '会务组 · 按兴趣/分舵拼桌', out: '跨城市、跨分舵深链接' },
  { time: '13:30—14:00', dur: '30′', name: '工作坊 · 能量唤醒', tag: '板块二', desc: '能量唤醒工作坊，向内照见这一年的蓄力', who: '引导师', out: '个人能量值与照见卡' },
  { time: '14:00—15:00', dur: '60′', name: '主题分享 · AI 之问', tag: '板块三', desc: 'AI 时代，你还好吗？——AI 相关主题', who: '主题分享嘉宾', out: '时代视野 + 一个自己的 AI 之问' },
  { time: '15:00—15:10', dur: '10′', name: '中场', tag: '中场', desc: '休息', who: '运营组', out: '节奏缓冲' },
  { time: '15:10—16:00', dur: '50′', name: '圆桌访谈', tag: '板块四', desc: '个人成长、转型、副业与拆书家发展路径访谈', who: '4 类嘉宾 + 主持人', out: '路径图 + 现场提问' },
  { time: '16:00—16:30', dur: '30′', name: '主题分享 · 面向未来', tag: '板块四', desc: '面向未来的主题分享', who: '区域负责人', out: '明年第一件事' },
  { time: '16:30—16:40', dur: '10′', name: '第二轮小抽奖', tag: '中场', desc: '第二轮小抽奖', who: '运营组', out: '轻松收束' },
  { time: '16:40—17:00', dur: '20′', name: '收尾 · 共启新程仪式', tag: '板块四', desc: '总结分享、共启新程仪式、全体合影', who: '全体', out: '仪式 + 全体合影' },
]

const guests = [
  { r: '第九小区区长', v: '区域运营与区域发展' },
  { r: '小蛮腰影响 & 专业代言人', v: '专业影响力与个人品牌' },
  { r: '前组织长老 / 前教育长老 / 前财务长老', v: '组织建设、教育体系与运营管理' },
]

const venue = [
  ['主会场', '可容纳 50—100 人，预留主讲区'],
  ['签到与休息区', '入口签到台、中场交流区'],
  ['视听设备', '大屏、音响、麦克风、线上连线与录制支持'],
  ['网络与餐饮', '稳定无线网络；午餐及饮用水'],
]

export default function GrowthConf() {
  const days = Math.max(0, Math.ceil((CONF_DATE.getTime() - Date.now()) / 86400000))

  return (
    <div className="hero-wash">
      {/* ==================== Hero ==================== */}
      <section className="pt-36 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="eyebrow mb-4">拆书帮 2026 · 拆书家成长大会（广州站）</div>
            <h1 className="headline text-[40px] md:text-[58px] mb-5">
              一年深耕，<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500">共启新程</span>
            </h1>
            <p className="text-[17px] md:text-[19px] leading-relaxed text-[#6e6e73] max-w-2xl mx-auto mb-4">
              怎么把书拆得更好、把自己长得更强——一年深耕，我们聚在广州，共启新程。
            </p>
            <p className="text-[14px] text-[#86868b] mb-8 max-w-2xl mx-auto leading-relaxed">
              拆书帮广州小蛮腰分舵 · 广州大湾区分舵 · 深圳桃李分舵 联合主办<br className="hidden md:block" />
              年会向上看方向，成长大会向内看进深；自 2017 年北京首届，这一传统今年落地广州大湾区。
            </p>
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-rose-500/10 border border-orange-500/20 mb-9">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-[14px] font-bold text-orange-600">
                {days > 0 ? `距大会还有 ${days} 天` : '大会进行中'}
              </span>
              <span className="text-[13px] text-[#86868b]">12 月 12 日 · 广州天河</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#agenda" className="btn-primary !bg-gradient-to-r !from-amber-500 !via-orange-500 !to-rose-500 !shadow-[0_8px_24px_rgba(249,115,22,.35)]">
                看完整议程 ↓
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

      {/* ==================== 定位：年会 vs 成长大会 ==================== */}
      <section className="py-20 px-4 bg-white border-y border-black/[.05]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="eyebrow mb-3">活动背景与定位</div>
          <h2 className="headline text-[28px] md:text-[36px] mb-6">一个向上看方向，一个向内看进深</h2>
          <p className="text-[15px] md:text-[16px] leading-[1.9] text-[#6e6e73] text-left md:text-center">
            拆书帮每年举办两次盛会：<b className="text-[#1d1d1f]">年底的年会</b>聚焦整体发展方向，<b className="text-[#1d1d1f]">拆书家成长大会</b>聚焦拆书家的进深——打磨拆书技能、共创问题解决方案、现场切磋、分享成长路径。
            成长大会是面向拆书家的大规模经验交流大会：以城市为单位、多地联动，跨区域的拆书家齐聚一堂，提升技能、沉淀经验，也是区域内学习爱好者的一次聚会与学习之旅。
          </p>
          <p className="mt-5 text-[15px] md:text-[16px] leading-[1.9] text-[#6e6e73] text-left md:text-center">
            自 2017 年北京首届起，成长大会已先后在上海、深圳、广州等地举办；至第四届，形成珠三角、长三角、北方区多地联动的格局。
            本次落地广州大湾区，是这一传统的延续。一句话定位：<b className="text-[#1d1d1f]">是技能与路径的输入场</b>。
          </p>
        </div>
      </section>

      {/* ==================== 六大收获 ==================== */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="eyebrow mb-3 text-center">参与者收获</div>
          <h2 className="headline text-[28px] md:text-[36px] text-center mb-4">六大收获，带得走的东西</h2>
          <p className="text-center text-[#6e6e73] text-[15px] mb-12 max-w-2xl mx-auto">
            年会聚焦「方向与归属」，成长大会聚焦「能力与行动」。
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {gains.map((g, i) => (
              <motion.div key={g.d} {...fadeUp(i * 0.05)} className="apple-card p-7">
                <div className="text-[12px] font-bold text-orange-600 mb-2 tracking-wide">{g.d}</div>
                <div className="text-[17px] font-bold text-[#1d1d1f] mb-2.5">{g.h}</div>
                <div className="text-[14px] leading-relaxed text-[#6e6e73]">{g.x}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 四大内容板块 ==================== */}
      <section className="py-20 px-4 bg-[#f5f5f7] border-y border-black/[.05]">
        <div className="max-w-5xl mx-auto">
          <div className="eyebrow mb-3 text-center">内容主线</div>
          <h2 className="headline text-[28px] md:text-[36px] text-center mb-4">拆书赋能 → 能量赋能 → AI 赋能 → 共启新程</h2>
          <p className="text-center text-[#6e6e73] text-[15px] mb-12 max-w-2xl mx-auto">
            上午以负责人寄语 + 拆书实战打磨技能，下午经能量唤醒、AI 之问、圆桌访谈与未来分享，完成从「深耕」到「共启」的完整闭环。
          </p>
          <div className="grid md:grid-cols-4 gap-3">
            {blocks.map((b, i) => (
              <motion.div key={b.n} {...fadeUp(i * 0.07)} className="apple-card p-5 h-full">
                <div className="text-[12px] font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500">{b.n}</div>
                <div className="text-[17px] font-bold text-[#1d1d1f] mb-2">{b.t}</div>
                <div className="text-[13px] leading-relaxed text-[#6e6e73]">{b.d}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 完整日程（细化版） ==================== */}
      <section id="agenda" className="py-20 px-4 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="eyebrow mb-3 text-center">完整议程 · 12 月 12 日（周六）</div>
          <h2 className="headline text-[28px] md:text-[36px] text-center mb-4">一天，从深耕到共启</h2>
          <p className="text-center text-[#6e6e73] text-[14px] mb-5 max-w-2xl mx-auto leading-relaxed">
            在方案框架上细化：每个环节补齐时长、板块归属、带领角色与现场产出，可直接用于现场执行与分工。
          </p>
          <div className="flex items-center justify-center gap-2 mb-10 px-4 py-2.5 rounded-full bg-amber-500/10 border border-amber-500/20 w-fit mx-auto">
            <span className="text-[13px] font-semibold text-amber-700">⏱ 设时间官全场控时 · 8:30 起签到 · 9:00 开场 · 17:00 准点结束</span>
          </div>

          <motion.div {...fadeUp()} className="apple-card overflow-hidden">
            {agenda.map((a, i) => (
              <div key={a.time} className={`grid md:grid-cols-[142px_1fr] gap-x-6 gap-y-2 px-6 py-4 ${i % 2 === 0 ? 'bg-black/[.015]' : ''} ${i !== agenda.length - 1 ? 'border-b border-black/[.04]' : ''}`}>
                <div>
                  <div className="text-[13px] font-semibold text-orange-600 tabular-nums">{a.time}</div>
                  <div className="text-[12px] text-[#86868b] mt-0.5">{a.dur} · {a.tag}</div>
                </div>
                <div>
                  <div className="text-[15px] font-bold text-[#1d1d1f] mb-1">{a.name}</div>
                  <div className="text-[13.5px] leading-relaxed text-[#3a3a3c]">{a.desc}</div>
                  <div className="text-[12.5px] leading-relaxed text-[#86868b] mt-1.5">
                    带领：{a.who}　·　产出：{a.out}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          <p className="text-[12px] text-[#86868b] text-center mt-4">全天 15 个时段，含 3 次中场缓冲；场地支持大屏、音响、麦克风与线上连线录制。</p>
        </div>
      </section>

      {/* ==================== 圆桌访谈专场 ==================== */}
      <section className="py-20 px-4 bg-white border-y border-black/[.05]">
        <div className="max-w-4xl mx-auto">
          <div className="eyebrow mb-3 text-center">圆桌访谈专场 · 50 分钟</div>
          <h2 className="headline text-[28px] md:text-[36px] text-center mb-4">看见「拆书家可以走向哪里」</h2>
          <p className="text-center text-[#6e6e73] text-[15px] mb-10 max-w-2xl mx-auto leading-relaxed">
            承接「分享拆书家发展路径」的传统，是「链接同好、看见他人」的核心环节。
            访谈主题：<b className="text-[#1d1d1f]">个人成长、转型、副业，及拆书家的发展路径</b>；由主持人引导对话，并设置现场提问环节。
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {guests.map((g, i) => (
              <motion.div key={g.r} {...fadeUp(i * 0.07)} className="apple-card p-6">
                <div className="text-[15px] font-bold text-[#1d1d1f] mb-2 leading-snug">{g.r}</div>
                <div className="text-[13px] text-[#6e6e73] leading-relaxed">{g.v}</div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-[13px] text-[#86868b] mt-6">
            几位嘉宾分别来自区域运营、专业影响力与组织管理不同路径，让参会者看见「拆书家可以怎样成长、可以走向哪里」。
          </p>
        </div>
      </section>

      {/* ==================== 会务保障 ==================== */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="eyebrow mb-3 text-center">场地支持需求</div>
          <h2 className="headline text-[26px] md:text-[32px] text-center mb-10">会务保障清单</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {venue.map(([k, v], i) => (
              <motion.div key={k} {...fadeUp(i * 0.06)} className="apple-card p-5 flex gap-4">
                <div className="shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500/15 to-rose-500/15 flex items-center justify-center text-[15px] font-black text-orange-600">{i + 1}</div>
                <div className="pt-1">
                  <div className="text-[14.5px] font-bold text-[#1d1d1f] mb-1">{k}</div>
                  <div className="text-[13px] leading-relaxed text-[#6e6e73]">{v}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-[14px] text-[#6e6e73] mt-8 leading-relaxed">
            大会预计吸引 50—100 位拆书家与学习爱好者齐聚广州，既延续拆书帮多年成长大会的传统，也将为场地方带来一场有温度、有深度、有传播力的学习文化盛会。
          </p>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-20 px-4 bg-white border-t border-black/[.05]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="headline text-[26px] md:text-[34px] mb-4">报名通道即将开启</h2>
          <p className="text-[#6e6e73] text-[15px] leading-relaxed mb-8">
            12 月 12 日，广州天河，50—100 人的相聚。扫码订阅【小蛮腰AI拆书帮】知识库，
            报名通道开启第一时间通知你；也可在知识库里随时问大会的任何问题。
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
