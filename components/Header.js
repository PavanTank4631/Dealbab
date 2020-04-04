import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { withTranslation } from '../i18n'


//styling
import {
  Container, Row, InputGroup, InputGroupAddon, Input, Button, Col
} from 'reactstrap';

//icons & colors
import { GiEarthAfricaEurope } from 'react-icons/gi'
import { IoIosMenu } from 'react-icons/io'
import { FaSearch } from 'react-icons/fa'
import { COLORS } from '../Helper/Constants'


class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dropdownOpen: false,
      favIndex: 0,
      CATEGORIES: [
        { title: props.t('all-category') },
        { title: props.t('category1') },
        { title: props.t('category2') },
        { title: props.t('category3') },
        { title: props.t('category4') },
        { title: props.t('category5') },
        { title: props.t('category6') },
        { title: props.t('category7') },
        { title: props.t('category8') },
        { title: props.t('category9') },
      ]
    }
  }

  render() {
    const { favIndex } = this.state;
    const { t } = this.props

    return (
      <div className="header-container">
        <Head>
          <title>Dealbab</title>
          <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Nunito:wght@300&family=Nunito:wght@600&family=Nunito:wght@900&family=Nunito:wght@800&display=swap" rel="stylesheet" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" rel="stylesheet" />
          <link href="/static/app.css" rel="stylesheet" />
        </Head>

        <div id="main-header">
          <Container fluid className="spacing">
            <Row>
              <IoIosMenu color={COLORS.BLACK} className="menu-icon" />
              <div>
                <p id="title">Dealbab</p>
                <p id="sub-title">{t('explore-more')}</p>
              </div>
              {this.renderSearchBar()}
              <div className="login-section">
                <p className="login">{t('login')}</p>
              </div>
              <div className="favourite-deal">
                <div>
                  <img src="/static/images/like.png" alt="404!" className="favourite-img" />
                  <p className="fav-index">{favIndex}</p>
                </div>
              </div>
              <p className="favourite-text">{t('fav')}</p>
              <div id="lng" onClick={this.props.manageLanguage}>
                <img src={this.props.flagUrl} alt="404!" className="lng-icon" />
                <p className="lng-text">{!this.props.isArabic ? 'عربى' : 'English'}</p>
              </div>
            </Row>
          </Container>
        </div>
        {this.renderSubHeader()}
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

  renderSearchBar = () => {
    const { t } = this.props

    return (
      <InputGroup id="search-bar">
        <Input placeholder={t('search-placeholder')} className="search-input" />
        <InputGroupAddon addonType={this.props.isArabic ? "prepend" : "append"}>
          <Button className="search-button">
            <FaSearch className="search-icon" />
          </Button>
        </InputGroupAddon>
      </InputGroup >
    )
  }

  renderSubHeader = () => {
    const { CATEGORIES } = this.state
    const { t } = this.props

    return (
      <div id="sub-header">
        <Container fluid className="spacing">
          <Row>
            <ul>
              {/* {CATEGORIES.map((item, index) => {
                return ( */}
              <li className="categories" >
                <a href="#">{t('all-category')}</a>
              </li>
              <li className="categories" >
                <a href="#">{t('category1')}</a>
              </li>
              <li className="categories" >
                <a href="#">{t('category2')}</a>
              </li>
              <li className="categories" >
                <a href="#">{t('category3')}</a>
              </li>
              <li className="categories" >
                <a href="#">{t('category4')}</a>
              </li>
              <li className="categories" >
                <a href="#">{t('category5')}</a>
              </li>
              <li className="categories" >
                <a href="#">{t('category6')}</a>
              </li>
              <li className="categories" >
                <a href="#">{t('category7')}</a>
              </li>
              <li className="categories" >
                <a href="#">{t('category8')}</a>
              </li>
              <li className="categories" >
                <a href="#">{t('category9')}</a>
              </li>
              {/* )
              })} */}
            </ul>
          </Row>
        </Container>
      </div>
    )
  }
}

Header.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('header')(Header)
