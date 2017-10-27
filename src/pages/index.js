import React from 'react'
import styled from 'styled-components'
//import ui from '../layouts/theme'
//import backgroundImage from '../../static/images/dogs.jpg'

const IndexPage = ({ className }) => (
  <div className={className}>
    <h1>Home page</h1>
  </div>
)

export default styled(IndexPage)`
  height: 100%;
  width: 100%;
  flex: 1;
  display: flex;
  //background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  //padding: ${ui.size.s};
`
