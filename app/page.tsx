import Timeline from '@/components/Timeline'
import worksData from '@/data/works.json'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-transparent">
      <Timeline works={worksData} />
    </div>
  )
}
