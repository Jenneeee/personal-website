import React from "react"
import Seo from "../../components/seo"
import Header from '../../components/header'
import Links from '../../components/links'
import Footer from '../../components/footer'
import CaseIntro from '../../components/case/case-intro'
import * as styles from './case.module.scss'

export default function GoogleDoodle() {

    return (
        <>
            <Seo title="Google Doodle" />
            <Header />
            <section className={styles.wrapper}>
                <CaseIntro title='Unspiked' subTitle='A campaign against spiking' />
            </section>
            <Links />
            <Footer />
        </>)
}