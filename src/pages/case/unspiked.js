import React from "react"
import Seo from "../../components/seo"
import Header from '../../components/header'
import Links from '../../components/links'
import Footer from '../../components/footer'
import * as styles from './case.module.scss'

export default function Unspiked() {

    return (
        <>
            <Seo title="Unpsiked" />
            <Header />
            <section className={styles.wrapper}>
                <p>Unspiked case</p>
            </section>
            <Links />
            <Footer />
        </>)
}