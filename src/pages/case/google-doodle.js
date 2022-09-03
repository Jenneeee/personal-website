import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../../components/seo"
import Header from '../../components/header'
import Links from '../../components/links'
import Footer from '../../components/footer'
import CaseIntro from '../../components/case/case-intro'
import * as styles from './case.module.scss'
import Video from '../../data/videos/google-doodle/video.mp4'

export default function GoogleDoodle() {

    return (
        <>
            <Seo title="Google Doodle" />
            <Header />
            <section className={styles.wrapper}>
                <CaseIntro title='Google Doodle' subTitle='Animate a Google doodle' color='#EFF5F9' overview='The assignment was to create a google doodle. Choose out a special day of the year that you like and animate it into a finished product' client='School project' team={`Myself`} typefaces={`Formula 1`} completed='Winter 2021' />
                <video src={Video} width='100%' height="100%" autoplay="true" muted loop />
                <div className={styles.splitRight}>
                    <StaticImage src='../../data/images/google-doodle/image-one.jpg' alt="Car design" />
                    <div className={styles.splitText}>
                        <h3 className={styles.title}>Challenge</h3>
                        <p>The assignment was to create a Google Doodle for a meaningful event/day in the future. My favourite show at the time was Drive to Survive, so I chose something F1-related. There's no denying that F1 is awesome.</p>
                    </div>
                </div>
                <div className={styles.splitLeft}>
                    <div className={styles.splitText}>
                        <h3 className={styles.title}>Process</h3>
                        <p>I started by sketching out some ideas on paper. As we only had a limited amount of time, I wanted to create something interesting but simple. Because details take time, I chose a flat illustration of the F1 car. After I finished the illustration, I went ahead and put it all together in After Effects</p>
                    </div>
                    <StaticImage src='../../data/images/google-doodle/cover-image.jpg' alt="Website of unspiked" />
                </div>
                <StaticImage className={styles.imageLarge} src='../../data/images/google-doodle/cover-image.jpg' alt="Website of unspiked" />
                <div className={styles.text}>
                    <h3 className={styles.title}>Result</h3>
                    <p>The result was a looping animation of 14 seconds. While the car slows down, the letters Google float across the car. When the car speeds up, the letters remain behind.</p>
                </div>
                <StaticImage className={styles.imageLarge} src='../../data/images/google-doodle/cover-image.jpg' alt="Website of unspiked" />
            </section>
            <Links />
            <Footer />
        </>)
}