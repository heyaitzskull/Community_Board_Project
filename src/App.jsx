import chicagoLogo from './assets/chicago-skyline.png'
import './App.css'

function App() {

  const Cards = (props) => {
    return (
      <div className="card">
        <img src={props.image} alt={props.imgname} className="card-img" />
        <h2>{props.imgname}</h2>
        <p>{props.description}</p>
        <a href={props.link} target="_blank" className='link'>Learn more</a>
      </div>
    )
  }

  const cardData = [
    {
      image: "https://cdn.pixabay.com/photo/2013/02/11/10/14/baltimore-80460_1280.jpg",
      name: "Garfield Park Conservatory",
      description: "Visit the beautiful Garfield Park Conservatory, one of the largest and most stunning conservatories in the nation.",
      link: "https://garfieldconservatory.org/"
    },
    {
      image: "https://cdn.pixabay.com/photo/2016/08/03/16/07/john-hancock-center-1567069_1280.jpg",
      name: "360 Observation Deck",
      description: "Get a 360-degree view of Chicago from the John Hancock Building.",
      link: "https://360chicago.com/"
    },
    {
      image: "https://cdn.pixabay.com/photo/2017/09/02/20/58/chicago-2708526_1280.jpg",
      name: "Chicago Riverwalk",
      description: "Stroll along the Chicago Riverwalk, enjoying the scenic views and embrace the Chicago vibes(especially at night).",
      link: "https://www.chicago.gov/city/en/sites/chicagoriverwalk/home.html.html"
    },
    {
      image: "https://images.pexels.com/photos/1563259/pexels-photo-1563259.jpeg",
      name: "Art Institute of Chicago",
      description: "Visit the Art Institute of Chicago, one of the oldest and largest art museums in the U.S.",
      link: "https://www.artic.edu/"
    },
    {
      image: "https://cdn.pixabay.com/photo/2021/12/31/11/51/penguin-6905568_1280.jpg",
      name: "Shedd Aquarium",
      description: "Explore the Shedd Aquarium, visiting over 32,000 animals!",
      link: "https://www.sheddaquarium.org/"
    },
    {
      image: "https://cdn.pixabay.com/photo/2014/07/26/20/35/chicago-bean-402556_1280.jpg",
      name: "Millennium Park",
      description: "Visit Millennium Park to see the Bean and enjoy free concerts and events in the summer.",
      link: "https://www.chicago.gov/city/en/depts/dca/supp_info/millennium_park.html"
    },
      {
      image: "https://images.pexels.com/photos/29175972/pexels-photo-29175972.jpeg",
      name: "Beach Day",
      description: "Spend the day at any of Chicago's many beautiful beaches along Lake Michigan.",
      link: "https://www.chicagoparkdistrict.com/facilities/beaches"
    },
    {
      image: "https://images.pexels.com/photos/7527100/pexels-photo-7527100.jpeg",
      name: "Take the Trains",
      description: "Experience the Chicago transit system to get around the city, especially the loop.",
      link: "https://www.transitchicago.com/"
    },
    {
      image: "https://www.traverse-blog.com/wp-content/uploads/2018/10/Logan-Square-Community-Mural.jpg",
      name: "Visit Logan Square",
      description: "Explore neighborhoods like Logan Square for unique shops, cafes, and street art.",
      link: "https://www.choosechicago.com/neighborhoods/wicker-park-bucktown/"
    },
    {
      image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/b3/0c/c0.jpg",
      name: "The Escape Game Chicago",
      description: "Try an escape room at The Escape Game Chicago for a fun and challenging experience.",
      link: "https://theescapegame.com/chicago/"
    },
    {
      image: "https://cdn.pixabay.com/photo/2017/09/11/19/19/ferris-wheel-2740117_1280.jpg",
      name: "Navy Pier",
      description: "Visit Navy Pier for amazing views, food, rides, and maybe even fireworks!",
      link: "https://navypier.org/"
    }



  ]

  return (

    <>
      
      <img src={chicagoLogo} className="logo" alt="Chicago Logo" />
      

      <h1>Chicago MUST-DOs</h1>

      <div className='cards-container'>
        {cardData.map((card, index) => (
          <Cards
            key={index}
            image={card.image}
            imgname={card.name}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
      <br/>
      <br/>


      
    </>
  )
}

export default App
