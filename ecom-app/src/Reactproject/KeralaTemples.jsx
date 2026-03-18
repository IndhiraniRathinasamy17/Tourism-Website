import React from 'react';
import { Link } from 'react-router-dom';

export default function KeralaTemples() {
  return (
    <div >
      <div className="image-container">
        <div>
          <h3>Sri Padmanabhaswamy Temple</h3>
          <Link to="/padmanabaswamytemple">
          <div className="img">
          <img src="https://static.toiimg.com/photo/94357235.cms" alt="Sree Padmanabhaswamy Temple" width="250px" height="250px"/>
          </div>
          </Link>
        </div>
        
        <div>
          <h3>Guruvayur Temple</h3>
          <Link to="/guruvayur">
          <div className="img">
          <img src="https://cdn.abhibus.com/2024/06/Guruvayur-Temple-History-Location-How-to-Reach-696x392.jpg" alt="Guruvayur Temple" width="250px" height="250px"/>
          </div>
          </Link>
        </div>
        <div>
          <h3>Sabarimala Temple</h3>
          <Link to="/sabarimala">
          <div className="img">
          <img src="https://files.prokerala.com/news/photos/imgs/1200/covid-takes-a-toll-on-makaravilakku-festival-at-1133681.jpg" alt="Sabarimala Sri Dharmasastha Temple" width="250px" height="250px"/>
          </div>
          </Link>
        </div>
        <div>
          <h3>Chottanikara Devi Temple</h3>
          <Link to="/chottanikara">
          <div className="img">
          <img src="https://indiano.travel/wp-content/uploads/2024/11/Chottanikkara-Bhagavathy-Temple.jpg" alt="Chottanikara Devi Temple" width="250px" height="250px"/>
          </div>
          </Link>
        </div>
        <div>
          <h3>Azhimala shiva Temple</h3>
          <Link to="/azhimalashiva">
          <div className="img">
          <img src="https://aazhimalasivatemple.in/wp-content/uploads/2024/11/1.jpg" alt="Azhimala shiva Temple" width="250px" height="250px"/>
          </div>
          </Link>
        </div>
        <div>
          <h3>Santa Cruz Basilica</h3>
          <Link to="/santacruz">
          <div className="img">
          <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/12/shutterstock_146780609.jpg" alt="Santa Cruz Basilica" width="250px" height="250px"/>
          </div>
          </Link>
        </div>
        <div>
          <h3>Arthunkal Church</h3>
          <Link to="/arthunkal">
          <div className="img">
          <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/12/St-Andrews-Basilica-or-Arthunkal-Church.jpg" alt="Arthunkal Church" width="250px" height="250px"/>
          </div>
          </Link>
        </div>
      </div>
      </div>
  );
}
