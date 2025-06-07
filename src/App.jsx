import Hero from "./components/hero/hero";
import Layout from "./components/layout";
import data from "./placeholder-data";
import Feed from "./components/feed/feed";
import { useEffect, useState } from "react";
const BASEURL =
  "https://clicks.aweber.com/y/ct/?l=KLtsKn&m=8kKiA5Xs4lyuOBlr&b=LN4zdPOCY2wffjE5vH.B0w";

//get the feed data from server and set the data

function App() {
  /*fetch listings from API
  use for live API fetching
  */
  const [listings, setListings] = useState(data);

  //activate on live API data
  // useEffect(() => {
  //   const data = fetch(BASEURL);
  //   setListings(data);
  // }, [null]);

  //check if the listings data is available
  if (!listings || listings === null) {
    return;
  }
  return (
    <Layout>
      <Hero />
      <Feed listings={listings} />
    </Layout>
  );
}

export default App;
