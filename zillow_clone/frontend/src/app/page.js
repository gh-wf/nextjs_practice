import NavBar from "./components/NavBar"
import Grid from "./components/Grid"

const getProperties = async() => {
  const HYGRAPH_ENDPOINT = process.env.HYGRAPH_ENDPOINT
  if (!HYGRAPH_ENDPOINT) {
    throw new Error("HYGRAPH_ENDPOINT is not set")
  }
  const response = await fetch(HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `
        query Properties {
          properties {
            beds
            description
            images {
              fileName
              url
            }
            location {
              latitude
              longitude
            }
            name
            rentalPrice
            slug
            id
          }
        }
        `
    })
  })
  const json = await response.json()
  return json.data.properties
}

const Home = async () => {
    const properties = await getProperties()
    const locations = properties.map(property => property.location)
    //console.log(properties)

  return (
   <> 
      <NavBar/>
      <Grid properties={properties}/>
      
   </>
  );
}

export default Home