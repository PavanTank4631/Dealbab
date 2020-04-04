import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { version } from 'next-i18next/package.json'

//styling
import { withTranslation } from '../i18n'
import { Container, Row, Col } from 'reactstrap'

//icons & colors
import { FaRegQuestionCircle } from 'react-icons/fa'

class Footer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      SERVICES: [
        { name: props.t('about-us') },
        { name: props.t('media-centers') },
        { name: props.t('contact-us') },
        { name: props.t('terms') },
        { name: props.t('privacy') },
      ],
      POPULAR_SEARCHES: [
        { name: props.t('category1') },
        { name: props.t('category2') },
        { name: props.t('category3') },
        { name: props.t('category4') },
        { name: props.t('category5') },
        { name: props.t('category6') },
        { name: props.t('category7') },
        { name: props.t('category8') },
        { name: props.t('category9') },
        { name: props.t('category10') },

      ],
      ACCOUNT_DETAIL: [
        { name: props.t('login') },
        { name: props.t('register') },
        { name: props.t('my-fav') },
        { name: props.t('account-settings') },
        { name: props.t('account-summary') },
      ],
      SOCIAL_LOGOES: [
        { img: "/static/images/twitter.png" },
        { img: "/static/images/facebook.png" },
        { img: "/static/images/youtube.png" },
        { img: "/static/images/instagram.png" },
        { img: "/static/images/pinterest.png" },
      ]
    }
  }

  render() {
    return (
      <footer className="footer-container">
        {this.renderFirstFooterContainer()}
        {this.renderSecondFooterContainer()}
      </footer>
    )
  }

  renderFirstFooterContainer = () => {
    const { SERVICES, POPULAR_SEARCHES, ACCOUNT_DETAIL, SOCIAL_LOGOES } = this.state
    const { t } = this.props

    return (
      <div className="first-footer">
        <Container fluid className="spacing">
          <Row>
            <Col lg={3} md={6} sm={12} className="column">
              <div className="logo-col">
                <p id="title">Dealbab</p>
                <p id="sub-title">{t('explore-more')}</p>
              </div>
              {/* {SERVICES.map((item, index) => {
                return ( */}
              <a href="#" className="col-items-service">{t('about-us')}</a>
              <a href="#" className="col-items-service">{t('media-centers')}</a>
              <a href="#" className="col-items-service">{t('contact-us')}</a>
              <a href="#" className="col-items-service">{t('terms')}</a>
              <a href="#" className="col-items-service">{t('privacy')}</a>
              {/* //   )
            // })} */}
            </Col>
            <Col lg={3} md={6} sm={12} className="column">
              <h5 className="col-title">{t('popular-search')}</h5>
              {/* {POPULAR_SEARCHES.map((item, index) => {
                return ( */}
              <p className="col-items">{t('category1')}</p>
              <p className="col-items">{t('category2')}</p>
              <p className="col-items">{t('category3')}</p>
              <p className="col-items">{t('category4')}</p>
              <p className="col-items">{t('category5')}</p>
              <p className="col-items">{t('category6')}</p>
              <p className="col-items">{t('category7')}</p>
              <p className="col-items">{t('category8')}</p>
              <p className="col-items">{t('category9')}</p>
              <p className="col-items">{t('category10')}</p>
              {/* //   )
            // })} */}
            </Col>
            <Col lg={3} md={6} sm={12} className="column">
              <h5 className="col-title">{t('my-account')}</h5>
              {/* {ACCOUNT_DETAIL.map((item, index) => {
                return ( */}
              <p className="col-items">{t('login')}</p>
              <p className="col-items">{t('register')}</p>
              <p className="col-items">{t('my-fav')}</p>
              <p className="col-items">{t('account-settings')}</p>
              <p className="col-items">{t('account-summary')}</p>
              {/* //   )
              // })} */}
              <h5 className="col-title col-semi-title">{t('intellectual-property')}</h5>
              <p className="col-items">{t('brand-owners')}</p>
              <p className="col-items">{t('market-sellers')}</p>
            </Col>
            <Col lg={3} md={6} sm={12} className="column">
              <div className="help-container">
                <p className="help-title">{t('help-title')}<FaRegQuestionCircle className="help-icon" /></p>
                <p className="help-subtitle">{t('help-tagline')}</p>
              </div>
              <h5 className="col-title">{t('follow-us')}</h5>
              {SOCIAL_LOGOES.map((item, index) => {
                return (
                  <a href="#">
                    <img src={item.img} alt="404!" className="social-logoes" />
                  </a>
                )
              })}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

  renderSecondFooterContainer = () => {
    return (
      <div className="second-footer">
        <Container fluid className="spacing">
          <p className="copyright">&copy; 2020 Dealbab.com </p>
        </Container>
      </div>
    )
  }
}


Footer.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('footer')(Footer)
