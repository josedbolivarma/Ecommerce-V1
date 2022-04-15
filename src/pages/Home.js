import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import CommentsContainer from '../containers/CommentsContainer'
import DetailsContainer from '../containers/DetailsContainer'
import GalleryContainer from '../containers/GalleryContainer'

const Home = () => {
  return (
    <div>
      <DetailsContainer />
      <GalleryContainer />
      <CommentsContainer />
    </div>
  )
}

export default Home;