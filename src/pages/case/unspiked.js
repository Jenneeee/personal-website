import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../../components/seo"
import Header from '../../components/header'
import Links from '../../components/links'
import Footer from '../../components/footer'
import CaseIntro from '../../components/case/case-intro'
import * as styles from './case.module.scss'

export default function Unspiked({ location }) {

    return (
        <>
            <Seo title="Unspiked" />
            <Header />
            <section className={styles.wrapper}>
                <CaseIntro title='Unspiked' subTitle='A campaign against spiking' color={location.state.color} />
                <StaticImage className={styles.imageLarge} src='../../data/images/unspiked/cover-image.jpg' alt="Website of unspiked" />
                <div className={styles.splitRight}>
                    <StaticImage src='../../data/images/unspiked/cover-image.jpg' alt="Website of unspiked" />
                    <div className={styles.splitText}>
                        <h3 className={styles.title}>Challenge</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pulvinar lectus, non pretium nisl. Sed orci felis, consequat sed magna ut, laoreet lobortis eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras venenatis tristique egestas. Nunc nisi metus, convallis vitae sagittis eu, iaculis sit amet lorem.</p>
                    </div>
                </div>
                <StaticImage className={styles.imageLarge} src='../../data/images/unspiked/cover-image.jpg' alt="Website of unspiked" />
                <div className={styles.splitLeft}>
                    <div className={styles.splitText}>
                        <h3 className={styles.title}>Solution</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pulvinar lectus, non pretium nisl. Sed orci felis, consequat sed magna ut, laoreet lobortis eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras venenatis tristique egestas. Nunc nisi metus, convallis vitae sagittis eu, iaculis sit amet lorem.</p>
                    </div>
                    <StaticImage src='../../data/images/unspiked/cover-image.jpg' alt="Website of unspiked" />
                </div>
                <StaticImage className={styles.imageLarge} src='../../data/images/unspiked/cover-image.jpg' alt="Website of unspiked" />
                <div className={styles.text}>
                    <h3 className={styles.title}>Result</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pulvinar lectus, non pretium nisl. Sed orci felis, consequat sed magna ut, laoreet lobortis eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras venenatis tristique egestas. Nunc nisi metus, convallis vitae sagittis eu, iaculis sit amet lorem.</p>
                </div>
                <StaticImage className={styles.imageLarge} src='../../data/images/unspiked/cover-image.jpg' alt="Website of unspiked" />
            </section>
            <Links />
            <Footer />
        </>)
}