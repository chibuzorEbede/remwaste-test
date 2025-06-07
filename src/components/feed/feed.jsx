import React from "react";
import Card from "../card";

//display the listings on the feed
const Feed = ({ listings }) => {
  return (
    <section className="grid md:grid-cols-3 py-16 gap-8">
      {listings.map((item) => {
        return <Card skipItem={item} key={item.id} />;
      })}
    </section>
  );
};

export default Feed;
