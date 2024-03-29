import MeetupItemDetails from "../../components/meetups/MeetupItemDetail";
import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";

const MeetupDetails = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta content={props.meetupData.description} name="page details"></meta>
      </Head>{" "}
      <MeetupItemDetails
        image={props.meetupData.image}
        address={props.meetupData.address}
        heading={props.meetupData.title}
        description={props.meetupData.description}
      />
    </Fragment>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://juliantoppo95:juliantoppo95@cluster0.fpxf1yz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = await client.db();
  const collection = db.collection("meetups");
  const meetups = await collection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const meetUpId = context.params.meetupId;
  console.log("meeeet", meetUpId, typeof meetUpId);
  const client = await MongoClient.connect(
    "mongodb+srv://juliantoppo95:juliantoppo95@cluster0.fpxf1yz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = await client.db();
  const collection = db.collection("meetups");
  const selectedMeetups = await collection.findOne({
    _id: new ObjectId(meetUpId),
  });
  console.log("selected", selectedMeetups);
  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetups._id.toString(),
        image: selectedMeetups.image,
        title: selectedMeetups.title,
        description: selectedMeetups.description,
        address: selectedMeetups.address,
      },
    },
  };
}

export default MeetupDetails;
