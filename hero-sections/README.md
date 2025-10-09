# Hero Sections (React + Vite + Tailwind)

## Run locally
```bash
cd hero-sections
npm install
npm run dev
```

## Components
- `src/components/Hero.tsx`: Reusable hero with props: `eyebrow`, `title`, `description`, `actions`, `media`, `align` (`left|center|right`), `background` (`plain|grid|radial|image`), `imageUrl`.
- `src/components/GlowCard.tsx`: Small glowing card used as sample media.

## Example usage
```tsx
<Hero
  eyebrow="Fullhouse Dev"
  title={<>Trung tâm duy nhất 100% giáo viên đạt giải quốc gia, quốc tế</>}
  description={<>Hệ thống website với <b>3000 bài tập</b> tích hợp <b>AI đồng hành</b>.</>}
  actions={[{label:'Bắt đầu ngay', href:'#', variant:'primary'}]}
  align="left"
  background="grid"
/>
```

## Tailwind setup
- Config files: `tailwind.config.js`, `postcss.config.js`
- Entry CSS imports Tailwind: `src/index.css`
