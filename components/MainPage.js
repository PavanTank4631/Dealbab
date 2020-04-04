import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { withTranslation } from '../i18n'


//styling
import {
  Container, Row, Button
} from 'reactstrap';

//icons & colors
import { FaSearch } from 'react-icons/fa'
import { COLORS } from '../Helper/Constants'

const FEATURED_PRODUCTS = [
  {
    "img": "/static/images/1.png",
    "title": "65-Inch 4K UHD Smart OLED TV OLED65C9PVA Black"
  },
  {
    "img": "/static/images/2.png",
    "title": "Samsung Galaxy Tab 10.1 T580"
  },
  {
    "img": "/static/images/3.png",
    "title": "DeLonghi ECAM 350.75 Dinamica Fully Automatic Coffee Machine, Silver"
  },
  {
    "img": "/static/images/4.png",
    "title": "Samsung Galaxy Fit Black"
  },
  {
    "img": "/static/images/5.png",
    "title": "Astro Gaming A20 Headset"
  },
  {
    "img": "/static/images/6.png",
    "title": "Men's Nate Chronograph Quartz Watch JR1354"
  },
]

const DEALBAB_DEALS = [
  {
    "img": "/static/images/7.png",
    "title": "Calvin Klein Eternity Moment For Women"
  },
  {
    "img": "/static/images/8.png",
    "title": "Lancome La Nuit Tresor For Women 75ml"
  },
  {
    "img": "/static/images/9.png",
    "title": "Fujifilm Instax Mini 25"
  },
  {
    "img": "/static/images/10.png",
    "title": "DJI Mavic 2 Zoom Drone Quadcopter"
  },
  {
    "img": "/static/images/11.png",
    "title": "Microsoft Surface Pro 6"
  },
  {
    "img": "/static/images/12.png",
    "title": "Bowers and Wilkins P9 Signature headphones"
  },
]

const MOST_POPULAR = [
  {
    "img": "/static/images/13.png",
    "title": "Lenovo ThinkPad"
  },
  {
    "img": "/static/images/14.png",
    "title": "HP Omen 15 Laptop"
  },
  {
    "img": "/static/images/15.png",
    "title": "Huawei P20 Pro"
  },
  {
    "img": "/static/images/16.png",
    "title": "Apple iPad Pro 2017 12 9 Inch"
  },
  {
    "img": "/static/images/17.png",
    "title": "Nintendo Switch"
  },
  {
    "img": "/static/images/18.png",
    "title": "Apple iPhone 11"
  },
]

const COUPENS = [
  {
    "img": "/static/images/c1.png",
    "title": "Babystore",
    "subtitle": "55 AED off coupon from Babystore"
  },
  {
    "img": "/static/images/c2.png",
    "title": "Bath&Body Works",
    "subtitle": "10% off coupon from Bath&Body Works"
  },
  {
    "img": "/static/images/c3.png",
    "title": "boohoo",
    "subtitle": "20% off coupon from boohoo"
  },
  {
    "img": "/static/images/c4.png",
    "title": "Gap",
    "subtitle": "10 AED off coupon from Gap"
  },
  {
    "img": "/static/images/c5.png",
    "title": "H&M",
    "subtitle": "Use coupon 'HM25' for 25% off from H&M"
  },
  {
    "img": "/static/images/c6.png",
    "title": "lacoste",
    "subtitle": "12% off coupon from lacoste"
  },
  {
    "img": "/static/images/c7.png",
    "title": "French Fragrance",
    "subtitle": "10% off coupon from French Fragrance"
  },
  {
    "img": "/static/images/c8.png",
    "title": "Shop Global 24x7",
    "subtitle": "5% off coupon from Shop Global 24x7"
  },
  {
    "img": "/static/images/c9.png",
    "title": "Sprii",
    "subtitle": "10% off coupon from Sprii"
  },
  {
    "img": "/static/images/c10.png",
    "title": "Zypermart",
    "subtitle": "120 AED off coupon from Zypermart"
  }
]

class MainPage extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const { favIndex } = this.state;
    const { t } = this.props

    return (
      <div className="main-page-container">
        {this.renderBodyContainer()}
      </div>
    )
  }

  /*
  .##........#######...######...####..######...######.
  .##.......##.....##.##....##...##..##....##.##....##
  .##.......##.....##.##.........##..##.......##......
  .##.......##.....##.##...####..##..##........######.
  .##.......##.....##.##....##...##..##.............##
  .##.......##.....##.##....##...##..##....##.##....##
  .########..#######...######...####..######...######.
  */

  _toggleDropDown = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen })
  }

  /*
  ..######...#######..##.....##.########...#######..##....##.########.##....##.########..######.
  .##....##.##.....##.###...###.##.....##.##.....##.###...##.##.......###...##....##....##....##
  .##.......##.....##.####.####.##.....##.##.....##.####..##.##.......####..##....##....##......
  .##.......##.....##.##.###.##.########..##.....##.##.##.##.######...##.##.##....##.....######.
  .##.......##.....##.##.....##.##........##.....##.##..####.##.......##..####....##..........##
  .##....##.##.....##.##.....##.##........##.....##.##...###.##.......##...###....##....##....##
  ..######...#######..##.....##.##.........#######..##....##.########.##....##....##.....######.
  */

  renderBodyContainer = () => {
    return (
      <Container fluid className="spacing">
        <div className="products-section">
          {this.renderFeaturedProducts()}
          {this.renderCoupens()}
          {this.renderFoundByDealbabProducts()}
          {this.renderMostPopularProducts()}
        </div>
      </Container>
    )
  }

  renderFeaturedProducts = () => {
    const { t } = this.props

    return (
      <div>
        <h3 className="section-title">{t('featured-products')}</h3>
        <Row>
          {FEATURED_PRODUCTS.map((item, index) => {
            return (
              <div className="product-container">
                <div className="product-semicontainer">
                  <img src={item.img} className="product-img" />
                  <p className="product-title">{item.title}</p>
                  <p className="product-subtitle">deals from 4 shops</p>
                </div>
                <div className="deal-button">
                  <p className="button-text">check deal</p>
                </div>
              </div>
            )
          })}
        </Row>
      </div>
    )
  }

  renderCoupens = () => {
    const { t } = this.props

    return (
      <div>
        <h3 className="section-title">{t('featured-products')}</h3>
        <Row>
          {COUPENS.map((item, index) => {
            return (
              <div className="product-container coupen-container">
                <div className="coupen-logo-div">
                  <img src={item.img} className="coupen-logo-img" />
                </div>
                <p className="coupen-name">{item.title}</p>
                <p className="coupen-detail">{item.subtitle}</p>
                <p className="eligible-product-text">{t('view-eligible-products')}</p>
              </div>
            )
          })}
        </Row>
      </div>
    )
  }

  renderFoundByDealbabProducts = () => {
    const { t } = this.props

    return (
      <div>
        <h3 className="section-title">{t('deals-by-Dealbab')}</h3>
        <Row>
          {DEALBAB_DEALS.map((item, index) => {
            return (
              <div className="product-container">
                <div className="product-semicontainer">
                  <img src={item.img} className="product-img" />
                  <p className="product-title">{item.title}</p>
                  <p className="product-subtitle">deals from 4 shops</p>
                </div>
                <div className="deal-button">
                  <p className="button-text">check deal</p>
                </div>
              </div>
            )
          })}
        </Row>
      </div>
    )
  }

  renderMostPopularProducts = () => {
    const { t } = this.props

    return (
      <div>
        <h3 className="section-title">{t('most-popular')}</h3>
        <Row>
          {MOST_POPULAR.map((item, index) => {
            return (
              <div className="product-container">
                <div className="product-semicontainer">
                  <img src={item.img} className="product-img" />
                  <p className="product-title">{item.title}</p>
                  <p className="product-subtitle">deals from 4 shops</p>
                </div>
                <div className="deal-button">
                  <p className="button-text">check deal</p>
                </div>
              </div>
            )
          })}
        </Row>
      </div>
    )
  }
}

MainPage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('mainpage')(MainPage)
