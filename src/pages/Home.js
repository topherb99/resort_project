import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'
import Button from "../components/StyledHero"

export default function Home() {
  return (
  <>
    <Hero>
      <Banner title="Amazing rooms" subtitle="Chips and gravy delivered to your bed">
        <Link to="/rooms" className="btn-primary">
          our rooms
        </Link>
      </Banner>
    </Hero>
    <Services/>
    <FeaturedRooms/>
    <Button>HELLO</Button>
  </>
)}
