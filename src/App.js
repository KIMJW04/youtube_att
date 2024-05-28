import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import VideoPage from './pages/VideoPage'
import ChannelPage from './pages/ChannelPage'

import Main from './components/section/Main'

const App = () => {
  return (
    <BrowserRouter>
      <Main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/video' element={<VideoPage />} />
          <Route path='/channel' element={<ChannelPage />} />
        </Routes>
      </Main>
    </BrowserRouter>
  )
}

export default App