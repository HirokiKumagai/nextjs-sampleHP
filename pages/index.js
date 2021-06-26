import Layout from '../components/Layout';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="min-h-screen py-0 px-2 flex flex-col justify-center items-center">
      <Layout title="Home">
        <h1 className="text-4xl">Hello World</h1>
      </Layout>
    </div>
  )
}
