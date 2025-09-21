import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import WhyChooseUs from '@/components/WhyChooseUs'
import CallToAction from '@/components/CallToAction'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <WhyChooseUs />
      <CallToAction />
    </Layout>
  )
}
