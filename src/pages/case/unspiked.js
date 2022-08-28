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
                <CaseIntro title='Unspiked' subTitle='A campaign against spiking' overview='Each year, Devine second-year students take part in a joint design challenge with CMD students in Rotterdam. Our team, which consisted of one Devine student and two CMD students, had six weeks to complete the project. Throughout the process, we encountered many challenges, but the result was rewarding' client='Municipality of Rotterdam' team={`2 Devine students\n2 CMD students`} typefaces={`Inter\nIntegral`} completed='Spring 2022' />
                <StaticImage className={styles.imageLarge} src='../../data/images/unspiked/image-one.jpg' alt="Website design of unspiked" />
                <div className={styles.splitRight}>
                    <StaticImage src='../../data/images/unspiked/image-two.jpg' alt="Moodboard" />
                    <div className={styles.splitText}>
                        <h3 className={styles.title}>Challenge</h3>
                        <p>The municipality of Rotterdam challenged us to think of a solution that would bring Rotterdam closer to a safe social city for everyone. After an intense week of researching possible solutions to contribute to a safer social city we came up with the idea to set up an awareness campaign against spiking.<br /><br />Spiking is a phenomenon that is rising in youth culture where the goal is to drug someone deliberately. This is done by slipping a drug, pouring (extra) alcohol into someone's drink or even stinging someone with a drugged needle (needle spiking).</p>
                    </div>
                </div>
                <div className={styles.splitLeft}>
                    <div className={styles.splitText}>
                        <h3 className={styles.title}>Process</h3>
                        <p>The first week when we were in Rotterdam was mainly based around brainstorming our idea and pitching it to the jury. After that we went back home and 4 weeks of remote work were ahead of us. This was harder then expected in the first week but we learned along the time</p>
                    </div>
                    <StaticImage src='../../data/images/unspiked/cover-image.jpg' alt="Website of unspiked" />
                </div>
                <StaticImage className={styles.imageLarge} src='../../data/images/unspiked/image-three.jpg' alt="Website of unspiked" />
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