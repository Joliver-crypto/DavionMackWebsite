import Timeline from '@/components/Timeline'
import worksData from '@/data/works.json'

export default function HomePage() {
  return (
    <div className="relative h-screen overflow-hidden bg-transparent">
      {/* Center line only on home page */}
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-6 border-t border-black/30"
        aria-hidden="true"
      />
      <Timeline works={worksData} />
    </div>
  )
}
