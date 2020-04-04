import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { withTranslation } from '../i18n'


//styling
import {
  Container, Row, InputGroup, InputGroupAddon, Input, Button
} from 'reactstrap';

//icons & colors
import { FaSearch } from 'react-icons/fa'
import { COLORS } from '../Helper/Constants'


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
      <div>hello</div>
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


}

MainPage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('mainpage')(MainPage)
