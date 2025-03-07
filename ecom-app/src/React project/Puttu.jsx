import React, { useState, useEffect } from "react";
import "./Recipeslides.css";
const slides = [
  { 
    src: "https://www.vegrecipesofindia.com/wp-content/uploads/2017/11/kerala-puttu-recipe03.jpg",
    text:"Step 1"
  },
  { 
    src: "https://www.vegrecipesofindia.com/wp-content/uploads/2017/11/kerala-puttu-recipe04.jpg", 
    text:"Step 2"
  },
  { 
    src: "https://www.vegrecipesofindia.com/wp-content/uploads/2017/11/kerala-puttu-recipe05.jpg", 
    text:"Step 3"
  },
  { 
    src: "https://www.vegrecipesofindia.com/wp-content/uploads/2017/11/kerala-puttu-recipe06.jpg", 
    text:"Step 4"
  },
  { 
    src: "https://www.vegrecipesofindia.com/wp-content/uploads/2017/11/kerala-puttu-recipe07.jpg", 
    text:"Step 5"
  },
  { 
    src: "https://www.vegrecipesofindia.com/wp-content/uploads/2017/11/kerala-puttu-recipe10.jpg", 
    text:"Step 6" 
  },
  { 
    src: "https://www.vegrecipesofindia.com/wp-content/uploads/2017/11/kerala-puttu-recipe13.jpg", 
    text:"Step 7" 
  },
  { 
    src: "https://www.vegrecipesofindia.com/wp-content/uploads/2017/11/kerala-puttu-recipe14.jpg", 
    text:"Step 8" 
  },
  { 
    src: "https://www.vegrecipesofindia.com/wp-content/uploads/2017/11/kerala-puttu-recipe17.jpg", 
    text:"Step 9" 
  },
  { 
    src: "https://www.vegrecipesofindia.com/wp-content/uploads/2017/11/kerala-puttu-recipe18.jpg", 
    text:"Step 10"
  },
  { 
    src: "https://www.vegrecipesofindia.com/wp-content/uploads/2017/11/kerala-puttu-recipe19.jpg", 
    text:"Step 11"
  },
  { 
    src: "https://www.vegrecipesofindia.com/wp-content/uploads/2017/11/kerala-puttu-recipe21.jpg", 
    text:"Step 12"
  },
  { 
    src: "https://c.ndtvimg.com/2022-12/rq79vpv_puttu_625x300_28_December_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350", 
    text:"Step 13" 
  },

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
        <img src={slides[currentIndex].src} alt={`Slide ${currentIndex}`}/> 
        <div className="text1">{slides[currentIndex].text}</div>
      </div>
    </div>
  );
}

const slides1 = [
  { 
    src: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/01/kadala-curry-recipe1.jpg",
    text:"Step 1" 
  },
  { 
    src: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/01/kadala-curry-recipe2.jpg", 
    text:"Step 2" 
  },
  { 
    src: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/01/kadala-curry-recipe6.jpg", 
    text:"Step 3"
  },
  { 
    src: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/01/kadala-curry-recipe4.jpg", 
    text:"Step 4"
  },
  { 
    src: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/01/kadala-curry-recipe5.jpg", 
    text:"Step 5" 
  },
  { 
    src: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/01/kadala-curry-recipe7.jpg", 
    text:"Step 6"
  },
  { 
    src: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/01/kadala-curry-recipe8.jpg", 
    text:"Step 7" 
  },
  { 
    src: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/01/kadala-curry-recipe10.jpg", 
    text:"Step 8" 
  },
  { 
    src: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/01/kadala-curry-recipe11.jpg", 
    text:"Step 9"
  },  
  { 
    src: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/01/kadala-curry-recipe12.jpg", 
    text:"Step 10"
  },  
  { 
    src: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/01/kadala-curry-recipe13.jpg", 
    text:"Step 11" 
  },  
  { 
    src: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/01/kadala-curry-recipe15.jpg", 
    text:"Step 12"
  },  
  { 
    src: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/01/kadala-curry-recipe17.jpg", 
    text:"Step 13" 
  },  
  { 
    src: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/01/kadala-curry-recipe19.jpg", 
    text:"Step 14"
  },  
  { 
    src: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/01/kadala-curry-recipe21.jpg", 
    text:"Step 15" 
  },  
  { 
    src: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/01/kadala-curry-recipe23.jpg", 
    text:"Step 16" 
  },
];

function Slideshow1() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === slides1.length - 1 ? 0 : prevIndex + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="slideshow-container1">
      <div className="slide1">
        <img src={slides1[currentIndex].src} alt={`Slide ${currentIndex}`} />
        <div className="text1">{slides1[currentIndex].text}</div>
      </div>
    </div>
  );
}

export default function Puttu() {
  return (
    <div>
    <h1>Puttu And Kadala Curry</h1>
    <h2>Popular In</h2>
    <p>Puttu and Kadala Curry is famous throughout Kerala, but it is especially popular in <strong>Malabar (northern Kerala)</strong>, including districts like <strong>Kozhikode, Malappuram, Kannur, and Kasaragod</strong>. It is a staple breakfast dish enjoyed across the state, but the Malabar region is particularly known for its delicious variations, often pairing it with <strong>banana</strong> or even <strong>ghee</strong> for extra flavor.</p><br/>
    <p>Visit any Malayali household across the world and chances are that you'll see delicious Puttu and Kadala Curry being served for breakfast. It is the go-to dish for most Keralites with its rich flavour and easy to follow recipe. The aroma itself is mesmerising and by the time the first mouthful of soft puttu and spicy kadala (Black Chickpea) curry melts in your mouth, you will be transported to another dimension altogether. Below is the recipe for one of the finest delicacies made in God’s Own Country.<br/><br/>
<h3>Ingredients for Puttu</h3><br/>
Coarse Rice Flour - 1 cup<br/>
Grated Coconut - 1/2 cup<br/>
Water - As Required<br/>
Salt - To Taste<br/><br/>
<h3>Method of Preparation</h3><br/><br/>
<Slideshow/>
<br/><br/>
<b>Step 1:</b>Take 1 cup puttu flour in a mixing bowl or a pan.<br/><b>Step 2:</b>Add ⅓ teaspoon salt or as required.<br/><b>Step 3:</b>Mix very well.<br/><b>Step 4:</b>Sprinkle ⅓ cup water all over. The amount of water required will depend on the quality of rice flour. So, you can add accordingly.<br/><b>Step 5:</b>Begin to mix the rice flour with the water with your fingertips.<br/><b>Step 6:</b>Break all the tiny lumps in the flour with your fingertips.<br/>
<b>Step 7:</b>First place the perforated disc inside the cylindrical vessel. Then, add 2 to 3 tablespoons fresh grated coconut in the cylindrical vessel of the puttu kudam and spread evenly.<br/><b>Step 8:</b>Then, gently add the puttu flour mixture till it reaches half of the cylindrical vessel.<br/><b>Step 9:</b>Cover the top portion with 2 to 3 tablespoons grated coconut and spread evenly. Cover the top with the lid.<br/>
<b>Step 10:</b>Place the cylindrical portion on top of the base vessel in which the water must have come to a boil.<br/><b>Step 11:</b>Steam the Puttu on medium heat till you see steam releasing from the top vent of the cylindrical vessel. Then, turn off the heat.It took me about 9 minutes as I have used a large Puttu maker. If using a medium size or regular one, the time will be about 5 to 6 minutes.<br/>
<b>Step 12:</b>Then, using a wooden skewer or stick that accompanies the kudam, remove the steamed puttu.<br/><b>Step 13:</b> Serve Kerala Puttu hot or warm with Kadala Kari, Vegetable Stew or Potato Stew. It will also go well with South Indian Chickpea Curry. Also, serve some bananas and papadums by the side.<br/><br/>
<h3>Ingredients for Kadala Curry</h3><br/>
Black Chickpea - 1 kg<br/>
Coconut Oil - 100 ml<br/>
Grated Coconut - 3  <br/> 
Garlic - 10 g<br/>
Shallots - 150 g<br/>
Mustard Seeds - 10 g<br/>
Red Chilli - 50 g<br/>
Sliced Onion - 500 g<br/>
Whole Coriander - 50 g<br/>
Turmeric Powder - 1 tsp.<br/>
Red Chilli Powder - 1/2 tsp.<br/>
Curry Leaves - 2 sprigs<br/>
Garam Masala Powder - 2 tsp.<br/>
Salt - To Taste<br/><br/>
<h3>Method of Preparation</h3><br/><br/>
<Slideshow1/>
<b>Step 1:</b>You will first need to rinse and then soak 1 cup black chickpeas in 2 cups of water for 8 to 9 hours (or overnight).<br/><b>Step 2:</b>Add the soaked black chickpeas to a 3 litre stovetop pressure cooker with ½ teaspoon salt.<br/><b>Step 3:</b>Add 2.5 cups fresh water. then pressure cook the chickpeas for approximately 9 to 10 whistles, until they are tender and cooked through.<br/>
<b>Step 4:</b>Add ½ cup tightly packed grated coconut in a grinder or blender jar.<br/><b>Step 5:</b>Add ¼ to ⅓ cup water and grind or blend to a smooth paste.Keep the ground coconut paste aside.<br/><b>Step 6:</b>In a small pan, dry roast ½ teaspoon fennel seeds,2 to 3 single strands of mace,1 inch cinnamon stick,3 whole cloves,3 pinches of grated nutmeg or nutmeg powder<br/>
<b>Step 7:</b>Grind or pound these five spices to a semi fine or fine powder. Keep aside.<br/><b>Step 8:</b>Heat 2 tablespoons of coconut oil in a pan.Add ½ teaspoon of mustard seeds and let them crackle.<br/><b>Step 9:</b>Add ⅓ cup chopped pearl onions or shallots. Stir and sauté for a minute.<br/>
<b>Step 10:</b>Add 1 teaspoon chopped ginger, 1 teaspoon chopped green chilies, and 10 to 12 curry leaves. Sauté till the shallots turn translucent or light golden.<br/><b>Step 11:</b>Add 1 teaspoon red chili powder, 1 teaspoon coriander powder, ¼ teaspoon black pepper powder and the entirety of the ground Kerala garam masala.<br/>
<b>Step 12:</b>Add the ground coconut paste.<br/><b>Step 13:</b> Sauté stirring often for about 4 to 5 minutes on low heat.<br/><b>Step 14:</b>Add the cooked black chana,Stir and mix very well.<br/><b>Step 15:</b>Add 1 to 1.25 cups water,Season with salt and stir the curry again.<br/><b>Step 16:</b>Let the curry come to a boil on medium heat.Serve Kadala Curry hot or warm with puttu or appams or Idiyappam or steamed rice or Malabar Parotta or Poori.<br/>
</p>
</div>
  )
}
