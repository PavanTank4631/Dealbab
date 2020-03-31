import React, { Component } from 'react'
import PropTypes from 'prop-types'

//i18n
import { i18n, Link, withTranslation } from '../i18n'

//file imports
import Header from '../components/Header'
import Footer from '../components/Footer'

class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isArabic: true
    }
  }

  render() {
    const { isArabic } = this.state
    const { t } = this.props

    return (
      <html dir={isArabic ? "rtl" : "ltr"}>
        <main className='headerSection'>
          <Header title={t('h1')} />
          <h1>{isArabic}</h1>
          <div>
            <button
              className="changeLanguageButton"
              type='button'
              onClick={() => {
                i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en')
                this.setState({ isArabic: !isArabic })
              }}
            >
              {t('change-locale')}
            </button>
            <Link href='/second-page'>
              <button
                className="goToSecondPage"
                type='button'
              >
                {t('to-second-page')}
              </button>
            </Link>
          </div>
        </main>
        <Footer />
      </html>
    )
  }
}

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer'],
})

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Homepage)
