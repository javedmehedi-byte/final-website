import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import WhyChooseUs from '@/components/WhyChooseUs'
import CallToAction from '@/components/CallToAction'
import AnnouncementBar from '@/components/AnnouncementBar'

export default function Home() {
  return (
    <Layout>
      <AnnouncementBar />
      <Hero />
      <WhyChooseUs />
      <CallToAction />
    </Layout>
  )
}
