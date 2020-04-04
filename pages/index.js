import React, { Component } from 'react'
import PropTypes from 'prop-types'

//i18n
import { i18n, Link, withTranslation } from '../i18n'

//file imports
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainPage from '../components/MainPage'

class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isArabic: false
    }
  }

  render() {
    const { isArabic } = this.state
    const { t } = this.props

    return (
      <html dir={isArabic ? "rtl" : "ltr"}>
        <Header isArabic={isArabic} />
        <MainPage />
        <Footer />
      </html>
    )
  }
}

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer', 'header'],
})

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Homepage)
