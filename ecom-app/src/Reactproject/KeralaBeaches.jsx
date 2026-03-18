import React from 'react'
import { Link } from 'react-router-dom'
export default function KeralaBeaches() {
  return (
    <div >
    <div className="image-container">
      <div>
        <h3>Varkala Beach</h3>
        <Link to="/varkala">
        <div className="img" style={{cursor:"pointer"}}>
        <img src="https://www.keralatourism.org/images/newsbytes/large/varkala_papanasam_beach20240315082235_2211_1.jpg" alt="Varkala Beach" width="250px" height="250px"/>
        </div>
        </Link>
      </div>
      <div>
        <h3>Kovalam Beach</h3>
        <div className="img">
        <img src="https://viacation.com/wp-content/uploads/2025/01/7xm413228-1.jpg" alt="Kovalam Beach" width="250px" height="250px"/>
        </div>
      </div>
      <div>
        <h3>Alleppey Beach</h3>
        <div className="img">
        <img src="https://www.alappuzha.com/files/packages/6727280602.jpg" alt="Alleppey Beach" width="250px" height="250px"/>
        </div>
      </div>
      <div>
        <h3>Kozhikode Beach</h3>
        <div className="img">
        <img src="https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Ftablet%2Fkozhikode-beach-1727261318_cec7059de4d14aace512.webp&w=1920&q=75" alt="Kozhikode Beach" width="250px" height="250px"/>
        </div>
      </div>
      <div>
        <h3>Fort Kochi Beach</h3>
        <div className="img">
        <img src="https://www.kiomoi.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fkmadmin%2Fimage%2Fupload%2Fv1729600321%2Fkiomoi%2FFort_Kochi_Beach_4268.jpg&w=3840&q=75" alt="Fort Kochi Beach" width="250px" height="250px"/>
        </div>
      </div>
      <div>
        <h3>Azhimala Beach</h3>
        <div className="img">
        <img src="https://www.dtpcthiruvananthapuram.com/uploads/picture_gallery/gallery_images/azhimala-1920x1080-20230517122853266048.webp" alt="Azhimala Beach" width="250px" height="250px"/>
        </div>
      </div>
      <div>
        <h3>Snehatheeram Beach</h3>
        <div className="img">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgvt9a7qK-A4PjknG23uX8C8mV8oY-ZSVQHShWyRzhfGD36UHO3tpIk2SHga6BvxcuOemTviK7B8DNHPDdTpY92rFOW2tRbvJLOpLjmFNBt6h31DEZ5kHMIRT5pP6kbMhZtY134ufEUd1ka/s1600/105128157.jpg" alt="Snehatheeram Beach" width="250px" height="250px"/>
        </div>
      </div>
    </div>
    </div>
  )
}
