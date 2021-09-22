import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/test.module.scss';
import styles2 from '../styles/hoge.module.scss';
import Hoge from '../components/hoge';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>k6n.jp</title>
      </Head>
      <p>
        このサイトは現在作成中です。<br />
        This site is under construction.<br />
      </p>
      <p>
        公開しましたら Twitter <Link href="/tw">@kazuemon_0602</Link> でお知らせいたします。<br />
        I&apos;ll let you know via Twitter <Link href="/tw">@kazuemon_0602</Link> when this site goes live.<br />
      </p>
      <p className={styles.title}>
        <span className={styles.bigTitle}>big</span>
        <span className={styles.boldTitle}>bold</span>
        red
      </p>
      <Hoge text="hey">
        <span>YouTube</span>
        <span>YouTube</span>
        <span>YouTube</span>
      </Hoge>
      <div style={{height: 30 + 'px'}}></div>
      <a href="https://github.com/kazuemon">
        <Image
          src={"https://raw.githubusercontent.com/kazuemon/kazuemon/master/profile-summary-card-output/default/0-profile-details.svg"}
          alt={"github-profile-card"}
          width={700}
          height={200}
          unoptimized={true}
        />
      </a>
    </div>
  )
}

export default Home
