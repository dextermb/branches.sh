import React from 'react'
import App from 'next/app'
import Head from 'next/head'

import { Provider, Consumer } from '@ninetynine/react-notices'
import '../styles/_app.scss'

class CustomApp extends App {
  render () {
    const { Component, pageProps } = this.props

    return (
      <React.Fragment>
        <Head>
          <title>Branches</title>
          <script src={'https://kit.fontawesome.com/6c32a1427b.js'} />
        </Head>
        <Provider>
          <Consumer>
            {({ notice }) => (
              <Component
                {...pageProps}
                notice={notice}
              />
            )}
          </Consumer>
        </Provider>
      </React.Fragment>
    )
  }
}

export default CustomApp
