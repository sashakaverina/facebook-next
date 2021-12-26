import Head from 'next/head'
import Header from '../components/Header'
import { getSession } from "next-auth/react"
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'



export default function Home( {session }) {
  if (!session) return <Login/>
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <Header/>
      <main>
        <div className='flex'>
        <Sidebar/>
        <Feed/>
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session
    }
  }
}
