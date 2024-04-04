import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import InputSearch from '../components/InputSearch'
import UserInfo from '../components/UserInfo'
import NotFound from "../assets/404.gif"
import { Image, Row } from 'react-bootstrap'
import axios from 'axios'

const Home = () => {
  const [user, setUser] = useState({})
  const [userName, setUserName] = useState("")
  const [searched, setSearched] = useState(false)
  const BASE_URL = `https://api.github.com/users/${userName}`

  const getData = async () => {
    try {
      const { data } = await axios.get(BASE_URL)
      console.log(data);
      setUser(data)
      setSearched(true)
    } catch (error) {
      console.log(error);
      setUser("")
      setSearched(true)
    }

  }


  return (
    <Container>
      <InputSearch user={user} setUserName={setUserName} getData={getData} />

      {searched && user && (<UserInfo user={user} />)}
      {searched && !user && (<Row className="justify-content-center h-25 w-100"><Image src={NotFound} className="h-25 w-50" alt="User not found" /></Row>)}





    </Container>
  )
}

export default Home