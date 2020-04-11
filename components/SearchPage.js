import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { withTranslation } from '../i18n'


//styling
import {
  Container, Row, Button, Col,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
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

class SearchPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      DISCLAIMER: [
        { title: props.t('descTitle1'), detail: props.t('descDetail1') },
        { title: props.t('descTitle2'), detail: props.t('descDetail2') },
        { title: props.t('descTitle3'), detail: props.t('descDetail3') },
        { title: props.t('descTitle4'), detail: props.t('descDetail4') },
        { title: props.t('descTitle5'), detail: props.t('descDetail5') },
        { title: props.t('descTitle6'), detail: props.t('descDetail6') },
      ],
      CATEGORIES: [
        { title: props.t('category1') },
        { title: props.t('category2') },
        { title: props.t('category3') },
        { title: props.t('category4') },
        { title: props.t('category5') },
        { title: props.t('category6') },
        { title: props.t('category7') },
        { title: props.t('category8') },
        { title: props.t('category9') },
      ],
      POPULAR_SEARCHES: [
        { title: props.t('popular-category1') },
        { title: props.t('popular-category2') },
        { title: props.t('popular-category3') },
        { title: props.t('popular-category4') },
        { title: props.t('popular-category5') },
        { title: props.t('popular-category6') },
        { title: props.t('popular-category7') },
        { title: props.t('popular-category8') },
        { title: props.t('popular-category9') },
        { title: props.t('popular-category10') },
      ],
      CAROUSEL_DATA: [
        { title: 'Slide1', img: '/static/images/slide2.jpg' },
        { title: 'Slide2', img: '/static/images/slide3.jpg' },
        { title: 'Slide3', img: '/static/images/slide1.jpg' },
      ],
      activeIndex: 0,
      animating: false
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

  _next = () => {
    const { animating, activeIndex } = this.state

    if (animating) return;
    const nextIndex = activeIndex === this.state.CAROUSEL_DATA.length - 1 ? 0 : activeIndex + 1;
    this.setState({ activeIndex: nextIndex })
  }

  _previous = () => {
    const { animating, activeIndex } = this.state

    if (animating) return;
    const previousIndex = activeIndex === 0 ? this.state.CAROUSEL_DATA.length - 1 : activeIndex - 1;
    this.setState({ activeIndex: previousIndex })
  }

  _goToIndex = (newIndex) => {
    if (this.state.animating) return;
    this.setState({ activeIndex: newIndex })
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
        <Row>
          <Col lg={3} md={0} sm={0} className="side-bar-col">
            <div id="side-bar">
              {this.renderLeftComponent()}
            </div>
          </Col>
          <Col lg={9} md={12} sm={12} className="main-col">
            <div className="products-section">
              {this.renderFilterSection()}
              {this.renderFeaturedProducts()}
            </div>
          </Col>
        </Row>

      </Container>
    )
  }

  renderLeftComponent = () => {
    const { CATEGORIES, POPULAR_SEARCHES } = this.state
    const { t } = this.props

    return (
      <div>
        {this.renderSideBarSection(CATEGORIES, t('top-category'))}
        {this.renderSideBarSection(POPULAR_SEARCHES, t('top-vendors'))}
        {this.renderSideBarSection(CATEGORIES, t('popular-searches'))}
      </div>
    )
  }

  renderSideBarSection = (data, title) => {
    const { t } = this.props

    return (
      <div className="side-bar-section">
        <h3 className="section-title">{title}</h3>
        {data.map((item, index) => {
          return (
            <div key={item.toString()}>
              <p className="sidebar-items">{item.title}</p>
            </div>
          )
        })}
      </div>
    )
  }

  renderFilterSection = () => {
    const { t } = this.props

    return (
      <div>
        <h3 className="section-title">{t('foundResult')} iPhone 11 case</h3>
      </div>
    )
  }

  renderFeaturedProducts = () => {
    const { t } = this.props

    return (
      <div>
        <Row>
          {FEATURED_PRODUCTS.map((item, index) => {
            return (
              <a className="product-link">
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
              </a>
            )
          })}
        </Row>
      </div>
    )
  }

}

SearchPage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('searchpage')(SearchPage)
