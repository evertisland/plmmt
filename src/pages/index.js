import React from 'react'
import styled from 'styled-components'
import ui from '../layouts/theme'
import backgroundImage from './dogs.jpg'

// const Container = styled.div`
//   height: 100%;
//   width: 100%;
//   flex: 1;
//   display: flex;
//   background-image: url(${backgroundImage});
//   background-size: cover;
//   background-position: center;
//   padding: ${ui.size.s};
//   h1 {
//     color: ${ui.color.background};
//   }
// `

const IndexPage = ({ className }) => (
  <div className={className}>
    <h1>Homes</h1>
  </div>
)
export default styled(IndexPage)`
  height: 100%;
  width: 100%;
  flex: 1;
  display: flex;
  background-size: cover;
  background-position: center;
  background-image: url(${backgroundImage});
  padding: ${ui.size.s};
  h1 {
    color: ${ui.color.background};
  }
`