import React, { useEffect } from 'react'
import './HeroSection.css'

export default function HeroSection() {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Promotion message to engage new users
      alert('🎉 Ưu đãi đặc biệt: Giảm 30% cho khóa học đầu tiên nếu đăng ký hôm nay!')
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  const goToCourses = () => {
    window.location.href = '/courses'
  }

  return (
    <section className="hero">
      <div className="grid-wrap">
        <div className="hero-content">
          <h1 className="hero-title" aria-label="Code your future together">
            <span>CODE YOUR</span>
            <span>FUTURE</span>
            <span className="title-gradient">TOGETHER</span>
          </h1>

          <p className="hero-subtitle">
            Tham gia các khóa học chất lượng, kết nối cộng đồng sinh viên yêu công nghệ và
            phát triển kỹ năng thực chiến.
          </p>

          <div className="hero-cta">
            <button className="btn-primary" onClick={goToCourses}>
              BẮT ĐẦU NGAY <span className="arrow">→</span>
            </button>
          </div>

          <div className="tech-row" role="list" aria-label="Công nghệ nổi bật">
            <div className="tech-card" role="listitem">
              <div className="glow"></div>
              <img alt="Database" src="https://raw.githubusercontent.com/feathericons/feather/master/icons/database.svg" />
            </div>
            <div className="tech-card" role="listitem">
              <div className="glow"></div>
              <img alt="Python" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" />
            </div>
            <div className="tech-card" role="listitem">
              <div className="glow"></div>
              <img alt="Java" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" />
            </div>
          </div>
        </div>

        <div className="panda-wrap" aria-hidden="true">
          <div className="panda-orb">
            <img
              className="panda-img"
              src="https://raw.githubusercontent.com/egkoppel/pandas-svg-icons/main/svg/panda.svg"
              alt="Panda mascot"
            />
          </div>
          <div className="nlc-badge">NLC</div>
        </div>
      </div>
      <div className="grid-overlay"></div>
    </section>
  )
}
