import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { version } from 'next-i18next/package.json'

//styling
import { withTranslation } from '../i18n'
import { Container, Row, Col } from 'reactstrap'

//icons & colors
import { FaRegQuestionCircle } from 'react-icons/fa'

const SERVICES = [
  { name: 'About Us' },
  { name: 'Media Centers' },
  { name: 'Contact Us' },
  { name: 'Terms & Conditions' },
  { name: 'Privacy Policy' },
]

const POPULAR_SEARCHES = [
  { name: "Watches" },
  { name: "Macbook Air" },
  { name: "Shoes" },
  { name: "TV" },
  { name: "Mobiles" },
  { name: "Mobile Accessories" },
  { name: "Men's Fashion" },
  { name: "Women's Fashion" },
  { name: "Home Appliances" },
  { name: "Makeup" },
]

const ACCOUNT_DETAIL = [
  { name: 'Log In' },
  { name: 'Register' },
  { name: 'My Favourites' },
  { name: 'Account Settings' },
  { name: 'Account Summary' },
]

const SOCIAL_LOGOES = [
  { img: "/static/images/twitter.png" },
  { img: "/static/images/facebook.png" },
  { img: "/static/images/youtube.png" },
  { img: "/static/images/instagram.png" },
  { img: "/static/images/pinterest.png" },
]

class Footer extends Component {
  render() {
    return (
      <footer className="footer-container">
        {this.renderFirstFooterContainer()}
        {this.renderSecondFooterContainer()}
      </footer>
    )
  }

  renderFirstFooterContainer = () => {
    return (
      <div className="first-footer">
        <Container>
          <Row>
            <Col lg={3} md={6} sm={12} className="column">
              <div className="logo-col">
                <p id="title">Dealbab</p>
                <p id="sub-title">Explore more</p>
              </div>
              {SERVICES.map((item, index) => {
                return (
                  <a href="#" className="col-items-service">{item.name}</a>
                )
              })}
            </Col>
            <Col lg={3} md={6} sm={12} className="column">
              <h5 className="col-title">popular searches</h5>
              {POPULAR_SEARCHES.map((item, index) => {
                return (
                  <p className="col-items">{item.name}</p>
                )
              })}
            </Col>
            <Col lg={3} md={6} sm={12} className="column">
              <h5 className="col-title">my account</h5>
              {ACCOUNT_DETAIL.map((item, index) => {
                return (
                  <p className="col-items">{item.name}</p>
                )
              })}
              <h5 className="col-title col-semi-title">intellectual property</h5>
              <p className="col-items">Brand and Copyright Owners</p>
              <p className="col-items">Marketplace Sellers</p>
            </Col>
            <Col lg={3} md={6} sm={12} className="column">
              <div className="help-container">
                <p className="help-title">help center<FaRegQuestionCircle className="help-icon" /></p>
                <p className="help-subtitle">Have you any question or issue? We are always here for you.</p>
              </div>
              <h5 className="col-title">follow us on</h5>
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
        <Container>
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
