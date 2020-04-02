import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

//styling
import {
  Container, Row, InputGroup, InputGroupAddon, Input, Button
} from 'reactstrap';

//icons & colors
import { GiEarthAfricaEurope } from 'react-icons/gi'
import { IoIosMenu } from 'react-icons/io'
import { FaSearch } from 'react-icons/fa'
import { COLORS } from '../Helper/Constants'

const CATEGORIES = [
  { title: 'All Categories' },
  { title: 'Supermarket' },
  { title: 'Mobiles & Tablets' },
  { title: 'Electronics' },
  { title: 'Home' },
  { title: 'Beauty' },
  { title: 'Baby' },
  { title: 'Toys' },
  { title: 'Sports' },
  { title: 'Brand' },
]


class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dropdownOpen: false,
      favIndex: 0
    }
  }

  render() {
    const { favIndex } = this.state

    return (
      <div className="header-container">
        <Head>
          <title>Dealbab</title>
          <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Nunito:wght@300&family=Nunito:wght@600&display=swap" rel="stylesheet" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" rel="stylesheet" />
          <link href="/static/app.css" rel="stylesheet" />
        </Head>

        <div id="main-header">
          <Container>
            <Row>
              <IoIosMenu color={COLORS.BLACK} className="menu-icon" />
              <div>
                <p id="title">Dealbab</p>
                <p id="sub-title">Explore more</p>
              </div>
              {this.renderSearchBar()}
              <div className="login-section">
                <p className="login">Log In</p>
              </div>
              <div className="favourite-deal">
                <div>
                  <img src="/static/images/like.png" alt="404!" className="favourite-img" />
                  <p className="fav-index">{favIndex}</p>
                </div>
              </div>
              <p className="favourite-text">Favourites</p>
              <div id="lng">
                <img src="/static/images/en.png" alt="404!" className="lng-icon" />
                <p className="lng-text">en-US</p>
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
    return (
      <InputGroup id="search-bar">
        <Input placeholder="What are you looking for?" className="search-input" />
        <InputGroupAddon addonType="append">
          <Button className="search-button">
            <FaSearch className="search-icon" />
          </Button>
        </InputGroupAddon>
      </InputGroup>
    )
  }

  renderSubHeader = () => {
    return (
      <div id="sub-header">
        <Container>
          <Row>
            <ul>
              {CATEGORIES.map((item, index) => {
                return (
                  <li className="categories" >
                    <a href="#">{item.title}</a>
                  </li>
                )
              })}
            </ul>
          </Row>
        </Container>
      </div>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
