import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import ui from '../layouts/theme'
import backgroundImage from '../../static/images/dogs.jpg'

const Title = styled.h1`
  color: ${ui.color.background};
`
const Container = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
  display: flex;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  padding: ${ui.size.s};
`

const IndexPage = () => (
  <Container>
    <Title>Homes</Title>
  </Container>
)

export default IndexPage