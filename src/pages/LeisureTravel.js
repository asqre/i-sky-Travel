import React from "react";
import Layout from "../layout/Layout";
import Gallery from "../components/Gallery";

const LeisureTravel = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center gap-[100px] my-[50px] w-full px-[30px]">
        <h4 className="max-w-[640px]">
          Embark on that road-trip you always dreamed of. Stay at the iconic
          hotel you read about in a magazine long ago. Show your kids an
          elephant in nature. Take in the view of a place you never imagined
          you'd see. Fly twelve hours to dine at that Michelin star restaurant.
          Visit a remote indigenous tribe and step back in time. Return to your
          favorite city. Watch an island sunset… or let I-sky inspire you.
          <br />
          <br />
          At I-sky we believe that travel is first and foremost about feelings
          and emotions. Our priority is to allow you to fully immerse in your
          travel experience from the moment you first dream of it until long
          after you've returned home. We will customize the journey specifically
          for you and will take care of all the small details, from start to
          finish.
          <br />
          <br />
          Let us create the trip and we'll let you create the memories.
          <br />
          <br />
          <br />
          <a href="mailto:mail@iskytravels.com">
            <h3 className="italic font-bold underline text-center">
              Feeling inspired? Drop us a line.
            </h3>
          </a>
        </h4>

        <Gallery />
      </div>
    </Layout>
  );
};

export default LeisureTravel;
