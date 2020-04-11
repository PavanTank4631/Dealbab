import React, { Component } from 'react'
import PropTypes from 'prop-types'

//i18n
import { i18n, Link, withTranslation } from '../i18n'

//file imports
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainPage from '../components/MainPage'
import SearchPage from '../components/SearchPage'

class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isArabic: false
    }
  }

  _manageLanguage = () => {
    this.setState({ isArabic: !this.state.isArabic }, () => {
      i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en')
    })
  }

  render() {
    const { isArabic } = this.state
    const { t } = this.props

    return (
      <html dir={isArabic ? "rtl" : "ltr"}>
        <Header isArabic={isArabic} manageLanguage={this._manageLanguage} flagUrl={!isArabic ? '/static/images/ar.png' : '/static/images/en.png'} />
        {/* <MainPage /> */}
        <SearchPage />
        <Footer />
      </html>
    )
  }
}

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer', 'header', 'mainpage', 'searchpage'],
})

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Homepage)
