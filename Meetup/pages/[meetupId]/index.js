import MeetupItemDetails from "../../components/meetups/MeetupItemDetail";

const MeetupDetails = (props) => {
  return (
    <MeetupItemDetails
      image={props.image}
      address={props.address}
      heading={props.heading}
      description={props.description}
    />
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { meetupId: "m1" } },
      { params: { meetupId: "m2" } },
      { params: { meetupId: "m3" } },
  
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // const res = await fetch(`https://localhost:3000/${params.meetupId}`);
  // const post = await res.json();

  return {
    props: {
      image:
        "https://strawpoll.com/images/rankings/1024/ajnEGpb9ZWV-ajnEqz6xnWV-c.png",
      address: "FDFdsfdsfsd",
      heading: "some Radnom heading",
      description: "Some description",
    },
  };
}

export default MeetupDetails;
