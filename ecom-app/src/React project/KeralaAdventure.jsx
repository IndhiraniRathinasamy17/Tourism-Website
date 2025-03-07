import React from 'react'
import { Link } from 'react-router-dom'
export default function KeralaAdventure() {
  return (
    <div >
    <div className="image-container">
      <div>
        <h3>Athirapally Falls</h3>
        <Link to="/athirapally">
        <div style={{cursor:"pointer"}} className="img">
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/4b/a2/1c/athirapally-falls-in.jpg" alt="Athirapally Falls" width="250px" height="250px"/>
        </div>
        </Link>
      </div>
      <div>
        <h3>Edakkal Cave</h3>
        <div className="img">
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/89/f3/67/entrance-path.jpg" alt="Edakkal Cave" width="250px" height="250px"/>
        </div>
      </div>
      <div>
        <h3>Parambikulam Tiger Reserve</h3>
        <div className="img">
        <img src="https://www.dtpcpalakkad.com/uploads/picture_gallery/gallery_images/parambikulam-2-20230206182132647794.webp" alt="Parambikulam Tiger Reserve" width="250px" height="250px"/>
        </div>
      </div>
      <div>
        <h3>Vagamon</h3>
        <div className="img">
        <img src="https://www.intermiles.com/iwov-resources/images/blog/top-15-places-to-visit-in-vagamon/Vagamon%20Meadows_250x250.jpg" alt="Vagamon" width="250px" height="250px"/>
        </div>
      </div>
      <div>
        <h3>Wayanad Wildlife Sancturies</h3>
        <div className="img">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGNJzSAVQf0X9SUth1CHrP6FMh49UW88MxPQ&s" alt="Wayanad Wildlife Sancturies" width="250px" height="250px"/>
        </div>
      </div>
      <div>
        <h3>Alappuzha</h3>
        <div className="img">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnXR9ivEYtfww5RafK5o60PH5M3Mbsbr-8ng&s" alt="Alappuzha" width="250px" height="250px"/>
        </div>
      </div>
      <div>
        <h3>Munnar</h3>
        <div className="img">
        <img src="https://www.vivantahotels.com/content/dam/seleqtions/en/in/our-hotels/scenic-munnar/munnar-new.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg" alt="Munnar" width="250px" height="250px"/>
        </div>
      </div>
      <div>
        <h3>Soochipaara Falls</h3>
        <div className="img">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTdiQRdCCpwuGLdFetiDrzMav2JLQiJu8_Xw&s" alt="Soochipaara Falls" width="250px" height="250px"/>
        </div>
      </div>
      <div>
        <h3>Malarikkal Tourism</h3>
        <div className="img">
        <img src="https://janamtv.com/wp-content/uploads/2023/08/untitled-1-copy-93.jpg" alt="Malarikkal Tourism" width="250px" height="250px"/>
        </div>
      </div>
    </div>
    </div>
  )
}
