import { useEffect, useState } from "react";
import Header from "./Components/Header";
import MainBody from "./Components/MainBody/MainBody";
import Footer from "./Components/Footer";

function App() {
  const [properties, setProperties] = useState([]);
  // const [propertyId, setPropertyId] = useState("1");

  useEffect(() => {
    fetch("https://tnc-resida-josn-server-vercel.vercel.app/properties")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setProperties(data))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  // function handleSelectedProperty(propertyId) {
  //   setPropertyId(propertyId);
  // }

  const filteredProperty = properties.filter(
    (property) => property.id === 1
  );

  return (
    <div className="App">
      <Header/>
      <MainBody property={filteredProperty}/>
      <Footer/>
    </div>
  );
}

export default App;
