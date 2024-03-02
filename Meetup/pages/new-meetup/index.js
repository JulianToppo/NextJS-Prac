import React from 'react'
import NewMeetupFrom from '../../components/meetups/NewMeetupForm'
const NewMeetup = () => {
    function addMeetupHandler(enteredMeetUpData){
        console.log(enteredMeetUpData)
    }
  return (
    <NewMeetupFrom onAddMeetup={addMeetupHandler} />
  )
}

export default NewMeetup