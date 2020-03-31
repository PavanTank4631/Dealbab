import React from 'react'
import PropTypes from 'prop-types'

import { version } from 'next-i18next/package.json'

import { withTranslation } from '../i18n'

const Footer = ({ t }) => (
  <footer className="foo">
    <p className="footerTitle">
      {t('description')}
    </p>
  </footer>
)

Footer.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('footer')(Footer)
