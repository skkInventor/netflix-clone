import React from 'react';
import Row from './Row'
import requests from './Requests'
import './App.css'
import Banner from './Banner'
import Nav from './Nav'

function App() {
  return(
    <div className = "App">
      <Nav />
      <Banner />
      <Row isLargeRow title = "Netflix Originals" fetchUrl = {requests.fetchNetflixoriginals}/>
      <Row title = "Trending Now" fetchUrl = {requests.fetchTrending}/>
      <Row title = "Top Rated" fetchUrl = {requests.fetchTopRated}/>
      <Row title = "Comedy Movies" fetchUrl = {requests.fetchComedyMovies}/>
      <Row title = "Horror Movies" fetchUrl = {requests.fetchHorrorMovies}/>
      <Row title = "Romance Movies" fetchUrl = {requests.fetchRomanceMovies}/>
      <Row title = "Documentaries" fetchUrl = {requests.fetchDocumentaries}/>
    </div>
  )
}

export default App
// 015d4d61a781e9ae779f3a8e23a7615a
