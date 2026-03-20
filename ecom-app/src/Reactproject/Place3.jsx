import React, { useState, useEffect } from "react";
import { FiFacebook, FiInstagram, FiYoutube, FiTwitter, FiLinkedin } from "react-icons/fi";
import "./Slideshow.css";

const slides = [
  { 
    src: "https://cdn1.tripoto.com/media/filter/nl/img/2176903/Image/1738047894_k4.png" 
  },
  { 
    src: "https://we-dpms.com/treks-trails/wp-content/uploads/2023/03/kerala-hill-station.jpg", 
    text: "Hills" 
  },
  { 
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Kerala_boatrace.jpg", 
    text: "Boating" 
  },
  { 
    src: "https://www.thomascook.in/blog/wp-content/uploads/2019/08/onam-festival-1024x683-1.jpg", 
    text: "Kathakali" },
  { 
    src: "https://images.pexels.com/photos/6652178/pexels-photo-6652178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    text: "Beaches" 
  },
  { 
    src: "https://www.explorebees.com/uploads/Athirappilly%20Falls%20(4).jpg", 
    text: "Water Falls" 
  },
  { 
    src: "https://www.alightindia.com/cdn/uploads/postimages/ORIGINAL/Onam%20festivals--06654d.jpg", 
    text: "Onam" 
  }
];

function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container1">
      <div className="slide1">
        <img src={slides[currentIndex].src} alt={`Slide ${currentIndex}`} />
        <div className="text">{slides[currentIndex].text}</div>
      </div>

      <button className="prev" onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))}>
        ❮
      </button>
      <button className="next" onClick={() => setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))}>
        ❯
      </button>
    </div>
  );
}

const Footer = () => {
  return (
      <footer className="footer">
              <h2>Vacation Vibes</h2>
              <p>&copy; {new Date().getFullYear()} Vacation Vibes, Inc.</p>
              <div className="footer-links">
                  <button className="link-btn">Legal Stuff</button>
        <span>|</span>

        <button className="link-btn">Privacy Policy</button>
        <span>|</span>

        <button className="link-btn">Security</button>
        <span>|</span>

        <button className="link-btn">Website Accessibility</button>
        <span>|</span>

        <button className="link-btn">Manage Cookies</button>
        <span>|</span>

        <button className="link-btn">Your Privacy Choices</button>
              </div>
              <div className="social-icons">
                  <FiFacebook className="icon" />
                  <FiInstagram className="icon" />
                  <FiYoutube className="icon" />
                  <FiTwitter className="icon" />
                  <FiLinkedin className="icon" />
              </div>
      </footer>
  )
}

export default function Place3() {
  return (
    <div>
      <Slideshow />
      <h1 style={{paddingTop:"20px"}}>Explore the Beauty of Kerala</h1>
      <div className="content-section">
          <div className="content-text">
          <p>
            Kerala, often called <strong>"God’s Own Country"</strong>,is a picturesque state in southwestern India known for its lush greenery, serene backwaters, and rich cultural heritage. Bordered by the Arabian Sea on the west and the Western Ghats on the east, it boasts a diverse landscape of beaches, hill stations, and wildlife sanctuaries. The state is renowned for its<strong> high literacy rate</strong>, excellent healthcare system, and unique traditions, including classical dance forms like <strong>Kathakali</strong> and <strong>Mohiniyattam</strong>. Tourism, agriculture, and remittances from the Malayali diaspora play a crucial role in its economy. With its vibrant festivals, delicious cuisine, and a harmonious blend of tradition and modernity, Kerala stands as a remarkable destination that captivates both travelers and residents alike.
          </p>
        </div>
      <div className="content-image">
      <img 
        src="https://t3.ftcdn.net/jpg/04/02/08/38/360_F_402083813_4dLEweSrZCiooyhx4ihf5nLTNrRQuucp.jpg" alt="Kerala" />
      </div>

      <div className="content-section reverse">
        <div className="content-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsik5IbePSK11RwahYLbzjtjpUU1_70lnf_A&s" alt="Hills"/>
        </div>
        <div className="content-text">
          <p>
          Kerala is home to stunning hill stations nestled in the Western Ghats, offering breathtaking landscapes, cool climates, and lush greenery. Popular hill stations like <strong>Munnar, Wayanad, Vagamon, Ponmudi,</strong> and <strong>Thekkady </strong>are known for their tea plantations, mist-covered mountains, waterfalls, and rich biodiversity. These hills provide perfect destinations for <strong>trekking, wildlife spotting,</strong> and <strong>nature retreats</strong>. With scenic beauty and a serene atmosphere, Kerala’s hills attract nature lovers and adventure seekers.
          </p>
        </div>
      </div>

      <div className="content-section">
        <div className="content-text">
          <p>The <strong>Snake Boat Race</strong>, or <strong>Vallam Kali</strong>, is one of Kerala's most vibrant and historic water sports,held during the <strong>Onam festival</strong>. These long, narrow boats, known as <strong>Chundan Vallams</strong>, were originally used for naval warfare but have evolved into a symbol of unity and festivity. The race features teams of around <strong>100-150 rowers</strong> paddling in perfect synchronization to the rhythm of <strong>traditional songs (Vanchipattu)</strong> and <strong>drum beats</strong>, creating a mesmerizing spectacle. The most prestigious event, <strong>the Nehru Trophy Boat Race</strong>, is held annually on <strong>Punnamada Lake in Alappuzha</strong>, drawing thousands of spectators from around the world. These races are a grand display of Kerala’s rich culture, team spirit, and community bonding. Tourists flock to the backwaters to witness this breathtaking event, where the energy, rhythm, and sheer passion of the rowers make it an unforgettable experience.</p>
        </div>
        <div className="content-image">
          <img src="https://static.wanderon.in/wp-content/uploads/2023/10/gondola-ride-in-autumn-in-kashmir-95-min.png" alt="snake boat race"/>
        </div>
      </div>

      <div className="content-section reverse">
        <div className="content-image">
          <img src="https://superbcollections.com/wp-content/uploads/2023/10/Kathakali.jpg" alt="Kathakali"/>
        </div>
        <div className="content-text">
          <p><strong>Kathakali</strong> is a classical dance-drama from Kerala, known for its elaborate costumes, expressive facial movements, and intricate <strong>hand gestures (mudras)</strong>. Rooted in Hindu mythology, Kathakali performances narrate stories from epics like the <strong>Ramayana</strong> and <strong>Mahabharata</strong>. The dance is characterized by vibrant makeup, detailed facial expressions, and rhythmic footwork, accompanied by traditional music and powerful drumming. Artists undergo rigorous training to master the <strong>art of conveying emotions (Navarasas)</strong> through facial expressions alone. Traditionally performed in <strong>temples</strong> and <strong>cultural festivals</strong>, Kathakali is now a globally recognized art form, captivating audiences with its mesmerizing blend of storytelling, drama, and music.</p>
        </div>
      </div>

      <div className="content-section">
        <div className="content-text">
          <p><strong>Kalaripayattu</strong> is an ancient martial art form from Kerala, often considered one of the oldest fighting systems in the world. It combines <strong>strikes, kicks, grappling, weaponry,</strong> and <strong>healing techniques</strong>, making it a holistic discipline. Practiced in a <strong>kalari (training ground)</strong>, it emphasizes flexibility, agility, and strength through rigorous training and meditation. The art incorporates traditional weapons like swords, spears, and daggers, along with unarmed combat techniques. Rooted in Kerala’s culture, Kalaripayattu has influenced various dance forms and even modern martial arts. Today, it is not only a combat practice but also a symbol of heritage, fitness, and self-discipline, attracting practitioners worldwide.</p>
        </div>
        <div className="content-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEadnUCENQ43MiBqutLsYOjbAS5v_JdmxPOg&s" alt="Kalaripayattu"/>
        </div>
      </div>
      <div className="content-section reverse">
        <div className="content-image">
          <img src="https://broganabroad.com/wp-content/uploads/2018/05/Ayurvedic-Massage.jpg" alt="Ayurvedic"/>
        </div>
        <div className="content-text">
          <p>Kerala is often considered the birthplace and <strong>hub of Ayurveda</strong>, an ancient system of medicine that focuses on holistic healing through natural remedies, diet, and lifestyle practices. Rooted in <strong>5000-year-old traditions</strong>, Ayurveda in Kerala thrives due to its tropical climate, rich biodiversity, and abundance of medicinal herbs.
Traditional Ayurvedic treatments in Kerala include <strong>Panchakarma (detoxification therapy)</strong>, <strong>Abhyanga (oil massage)</strong>,<strong> Shirodhara (oil pouring on the forehead)</strong>, and <strong>Njavarakizhi (herbal poultice therapy)</strong>. These therapies help in <strong>stress relief</strong>,<strong> rejuvenation</strong>, <strong>pain management</strong>, and overall wellness.
</p>
        </div>
      </div>
      <div className="content-section">
        <div className="content-text">
          <p>The <strong>Gopuram of Sree Padmanabhaswamy Temple</strong> is an architectural and astronomical marvel, showcasing the <strong>Equinox Phenomenon</strong> that occurs <strong>twice a year (March 21 & September 23)</strong>. On these days, the setting <strong>sun aligns perfectly through the Gopuram’s seven tiers</strong>, creating a breathtaking spectacle that highlights the advanced astronomical knowledge of ancient temple builders. Standing <strong>100 feet tall</strong>, the Gopuram symbolizes the seven spiritual realms in Hindu cosmology and serves as a gateway to divinity. This rare celestial event, combined with its intricate Dravidian architecture, makes the temple a <strong>timeless wonder of science</strong>, spirituality, and tradition. </p>
        </div>
        <div className="content-image">
          <img src="https://media.licdn.com/dms/image/v2/D4D12AQH7Vfo_soTWXA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1696240313305?e=2147483647&v=beta&t=O8Wl7WCGavdYk_8fkOjKOs6xBdRBHXKybdWOhCmXvo0" alt="Sree padmanabhaswamy temple"/>
        </div>
      </div>
      <div className="content-section reverse">
        <div className="content-image">
          <img src="https://static.india.com/wp-content/uploads/2021/08/pjimage-64-1.jpg?impolicy=Medium_Resize&w=1200&h=800" alt="Onam"/>
        </div>
        <div className="content-text">
          <p><strong>Onam</strong> is Kerala’s grand <strong>harvest festival</strong>, celebrated in <strong>August-September</strong> to welcome the legendary King Mahabali. It is a <strong>ten-day festival</strong> filled with joy, marked by the <strong>Onam Sadya (a grand feast)</strong>, <strong>Pookalam (floral rangoli)</strong>, <strong>Vallam Kali (snake boat race)</strong>, and <strong>Pulikali (tiger dance)</strong>. Onam unites people across communities, reflecting Kerala’s <strong>rich culture, prosperity, and tradition</strong>, making it the most cherished festival of <strong>"God’s Own Country."</strong></p>
       </div>
       </div>
       <Footer/>
      </div>
    </div>
  )
}

