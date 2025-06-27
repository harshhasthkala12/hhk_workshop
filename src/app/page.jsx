import Header from '../components/Header'
import HomeClient from './HomeClient'

export const metadata = {
  title: 'Handicrafts Workshop - Learn Traditional Indian Arts',
  description: 'Learn traditional Indian handicrafts like Lippan, Madhubani, and more in our expert-led workshops',
}

export default function Home() {
  return (
    <>
      <Header />
      <HomeClient />
    </>
  )
}
