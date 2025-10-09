import './index.css'
import Hero from './components/Hero'
import GlowCard from './components/GlowCard'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero
        eyebrow="Fullhouse Dev"
        title={<>
          Trung tâm duy nhất 100% giáo viên đạt giải quốc gia, quốc tế
        </>}
        description={
          <>
            Hệ thống website với <span className="font-semibold text-brand-300">3000 bài tập</span> tích hợp <span className="font-semibold text-brand-300">AI đồng hành</span> trên từng dòng code.
          </>
        }
        actions={[
          { label: 'Bắt đầu ngay', href: '#start', variant: 'primary' },
          { label: 'Xem khóa học', href: '#courses', variant: 'secondary' },
        ]}
        align="left"
        background="grid"
        media={
          <div className="grid w-full max-w-md grid-cols-3 gap-3">
            {[...Array(6)].map((_, i) => (
              <GlowCard key={i}>
                <div className="h-20 w-full rounded-md bg-gradient-to-br from-brand-500/30 to-purple-500/30" />
              </GlowCard>
            ))}
          </div>
        }
      />

      <Hero
        eyebrow="Khóa học nổi bật"
        title={<>
          Lập trình hiện đại với TypeScript, React, và Python
        </>}
        description="Lộ trình bài bản từ cơ bản đến nâng cao, dự án thực tế, mentor đồng hành."
        actions={[{ label: 'Đăng ký', href: '#signup', variant: 'primary' }]}
        align="center"
        background="radial"
      />

      <footer className="py-10 text-center text-white/60">
        © {new Date().getFullYear()} Fullhouse Dev
      </footer>
    </div>
  )
}

export default App
