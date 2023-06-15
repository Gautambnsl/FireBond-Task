"use client"
import React from 'react'
import Header from '../components/Header'
import Initializer from '../components/Initializer'
import CreateMatch from '@/components/CreateMatch'
import UpdateResultButton from '@/components/UpdateResultButton'
import MatchData from '@/components/MatchData'



const page = () => {
  return (
    <>
    <Header/>
    <Initializer/>
    <CreateMatch/>
    <UpdateResultButton/>
    <MatchData/>
    </>
  )
}

export default page