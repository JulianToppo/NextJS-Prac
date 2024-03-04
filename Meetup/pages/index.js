import MeetUpList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

const Home = (props) => {
  return <MeetUpList meetups={props.meetups} />;
};

export async function getStaticProps() {
  // const DummyValues = [
  //   {
  //     id: "m1",
  //     title: "First Meetup",
  //     image: "https://strawpoll.com/images/rankings/1024/ajnEGpb9ZWV-ajnEqz6xnWV-c.png",
  //     address: "Something random",
  //     description: "This is the first meetup",
  //   },
  //   {
  //     id: "m2",
  //     title: "Second Meetup",
  //     image: "https://strawpoll.com/images/rankings/1024/ajnEGpb9ZWV-ajnEqz6xnWV-c.png",
  //     address: "Something random",
  //     description: "This is the second meetup",
  //   },
  // ]
  const client = await MongoClient.connect(
    "mongodb+srv://juliantoppo95:juliantoppo95@cluster0.fpxf1yz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = await client.db();
  const collection = db.collection("meetups");
  const result = await collection.find().toArray();
  client.close()
  
  return {
    props: {
      meetups: result.map((meetup)=>({
        id:meetup._id.toString(),
        image:meetup.image,
        title:meetup.title,
        address:meetup.address
      })
      )
    },
  };
}

export default Home;
