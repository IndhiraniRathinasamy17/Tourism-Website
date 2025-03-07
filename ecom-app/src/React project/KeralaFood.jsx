import React from 'react'
import { Link } from 'react-router-dom'
export default function KeralaFood() {
  return (
    <div >
    <div className="image-container">
      <div>
        <h3>Puttu And Kadala Curry</h3>
        <Link to="/puttu">
        <div style={{cursor:"pointer"}} className="img">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0XSIdUGs4C7oqSdrnSMbJhAFXl9dMUPqZbw&s" alt="Sree Padmanabhaswamy Temple" width="250px" height="250px"/>
        </div>
        </Link>
      </div>
      <div>
        <h3>Appam with stew</h3>
        <div className="img">
        <img src="https://www.sailusfood.com/wp-content/uploads/2013/06/vegetable-stew-recipe.jpg" alt="Guruvayur Temple" width="250px" height="250px"/>
        </div>
      </div>
      <div>
        <h3>Idiyappam</h3>
        <div className="img">
        <img src="https://www.holidify.com/blog/wp-content/uploads/2015/11/2172142213_9178f0c480_z.jpg" alt="Sabarimala Sri Dharmasastha Temple" width="250px" height="250px"/>
        </div>
      </div>
      <div>
        <h3>Palada Pradhaman</h3>
        <div className="img">
        <img src="https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Flarge-desktop%2Fpalada-pradhaman-1721977001_ddde7931210a3b5d89fe.webp&w=1920&q=75" alt="Chottanikara Devi Temple" width="250px" height="250px"/>
        </div>
      </div>
      <div>
        <h3>Sadhya</h3>
        <div className="img">
        <img src="https://images.news18.com/webstories/2023/08/a260995638f3e959468bc331e9f05894.jpg" alt="Azhimala shiva Temple" width="250px" height="250px"/>
        </div>
      </div>
      <div>
        <h3>Kerala Prawn Curry</h3>
        <div className="img">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ2aaRFoJkCz_gXP8_boCNQAEN0rXj9Q4FBg&s" alt="Santa Cruz Basilica" width="250px" height="250px"/>
        </div>
      </div>
      <div>
        <h3>Thalassery Biryani</h3>
        <div className="img">
        <img src="https://www.holidify.com/blog/wp-content/uploads/2015/11/Thalassery_biryani.jpg" alt="Arthunkal Church" width="250px" height="250px"/>
        </div>
      </div>
    </div>
    </div>
  )
}
