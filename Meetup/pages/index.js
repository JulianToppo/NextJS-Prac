import MeetUpList from "../components/meetups/MeetupList"
const Home = (props) => {
  return <MeetUpList meetups={props.meetups} />;
};

export async function getStaticProps() {
  const DummyValues = [
    {
      id: "m1",
      title: "First Meetup",
      image: "https://strawpoll.com/images/rankings/1024/ajnEGpb9ZWV-ajnEqz6xnWV-c.png",
      address: "Something random",
      description: "This is the first meetup",
    },
    {
      id: "m2",
      title: "Second Meetup",
      image: "https://strawpoll.com/images/rankings/1024/ajnEGpb9ZWV-ajnEqz6xnWV-c.png",
      address: "Something random",
      description: "This is the second meetup",
    },
  ]

  return {
    props: {
      meetups: DummyValues,
    },
  };
}

export default Home;
