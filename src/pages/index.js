import React from 'react'
import styled from 'styled-components'
import ui from '../layouts/theme'
import backgroundImage from '../../static/images/dogs.jpg'

const Container = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
  display: flex;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  padding: ${ui.size.s};
  h1 {
    color: ${ui.color.background};
  }
`

const IndexPage = () => (
  <Container>
    <h1>Homes</h1>
  </Container>
)
export default IndexPage

// import React from 'react'
//
// const IndexPage = () => (
//   <div>
//     <h1>Homes</h1>
//   </div>
// )
//
// export default IndexPage