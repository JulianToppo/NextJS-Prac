import React from 'react'
import MeetUpList from '../components/meetups/MeetupList'

const Home = () => {

    const DummyValues=[
        {
            id:'m1',
            title:'First Meetup',
            image:'https://strawpoll.com/images/rankings/1024/ajnEGpb9ZWV-ajnEqz6xnWV-c.png',
            address:'Something random',
            description:'this is the first meetup'
        },
        {
            id:'m2',
            title:'Second Meetup',
            image:'https://strawpoll.com/images/rankings/1024/ajnEGpb9ZWV-ajnEqz6xnWV-c.png',
            address:'Something random',
            description:'this is the first meetup'
        },
        {
            id:'m3',
            title:'Thir Meetup',
            image:'https://strawpoll.com/images/rankings/1024/ajnEGpb9ZWV-ajnEqz6xnWV-c.png',
            address:'Something random',
            description:'this is the first meetup'
        }

    ]
  return (
    <MeetUpList meetups={DummyValues}/>
  )
}

export default Home