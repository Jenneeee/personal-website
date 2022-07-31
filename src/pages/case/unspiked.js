import React from "react"
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
            </section>
            <Links />
            <Footer />
        </>)
}