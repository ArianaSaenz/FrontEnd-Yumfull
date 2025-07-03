import React from 'react';
import './Pregnancy.css';

function Pregnancy() {
  return (
    <div className="wrapper">
      <h1 className="main-title">What to eat and not to eat during your pregnancy?</h1>

      {/* Intro Section */}
      <div className="content-container">
        <div className="text-content">
          <p className="nutrition-text">
            During pregnancy, a balanced diet helps manage physical and emotional changes.
            It can ease symptoms like bloating and mood swings, while supporting the baby's
            development and helping the mother feel better overall.
          </p>
          <p className="nutrition-text">
            A healthy pregnancy diet should include: plenty of fruits and vegetables,
            whole grains, and dairy products. Stay hydrated by drinking
            plenty of water throughout the day.
          </p>
       </div>
<div className="image-container">
  <div className="nutrition-image">
   <img src="Pregnancy/image/1woman.png" alt="Pregnant Woman" />

  </div>
</div>
</div>

      {/* Content Section */}
      <div className="section-content">
        <div className="card">
          <div className="card-image"> <img src="Pregnancy/image/2woman.png" alt="Pregnant Woman" /></div>
          <h2 className="card-title">Frequently Asked</h2>
          <div className="card-question">Can I eat fish during pregnancy? Could it be harmful?</div>
          <div className="card-question">What vitamins are most important during pregnancy?</div>
        </div>
        <div className="section-food">
          <h2 className="section-title">Food to Eat Throughout</h2>
          <p className="section-paragraph">
            During pregnancy, it's important to eat foods rich in protein like lean meats,
             fish, eggs, and legumes, which support the baby's development. Dairy products,
              broccoli, and nuts help strengthen bones, while fruits and vegetables,
               especially those high in vitamin C and folic acid, boost the immune system.
                It's also recommended to consume whole grains to maintain energy and support digestion,
                 along with staying well-hydrated.
          </p>
        </div>
      </div>

      {/* Recommended Foods */}
<h2 className="section-title center">Recommended Foods During Pregnancy</h2>
<div className="foods-container recommended">
  <div className="food-card">
    <div className="food-image-container avocado">
     <img src="Pregnancy/image/avocado.png" alt="Avocado" />
 </div>
    <h3 className="food-name">Avocado</h3>
    <p className="food-description">
      Rich in healthy fats and folic acid. Contains potassium to help relieve leg cramps.
    </p>
  </div>

      <div className="food-card">
  <div className="food-image-container almonds">
    <img src="Pregnancy/image/almonds.png" alt="Almonds" />
  </div>
  <h3 className="food-name">Almonds</h3>
  <p className="food-description">
    Great source of vitamin E, magnesium and protein. Supports brain development and energy.
  </p>
</div>

<div className="food-card">
  <div className="food-image-container eggs">
    <img src="Pregnancy/image/eggs.png" alt="Eggs" />
  </div>
  <h3 className="food-name">Eggs</h3>
  <p className="food-description">
    Protein and choline-rich. Essential for baby's brain and tissue development.
  </p>
</div>
</div>

    {/* Foods to Avoid */}
<h2 className="section-title center">Foods to Avoid During Pregnancy</h2>
<div className="foods-container avoid">
  <div className="food-card">
    <div className="food-image-container mortadella">
      <img src="Pregnancy/image/mortadella.png" alt="Mortadella" />
    </div>
    <h3 className="food-name">Mortadella</h3>
    <p className="food-description">
      May contain Listeria. Avoid unless thoroughly cooked.
    </p>
  </div>

  <div className="food-card">
    <div className="food-image-container tuna">
      <img src="Pregnancy/image/bluefin tuna.png" alt="Bluefin Tuna" />
    </div>
    <h3 className="food-name">Bluefin Tuna</h3>
    <p className="food-description">
      High in mercury. Prefer low-mercury options.
    </p>
  </div>

  <div className="food-card">
    <div className="food-image-container alcohol">
      <img src="Pregnancy/image/alcohol.png" alt="Alcohol" />
    </div>
    <h3 className="food-name">Alcohol</h3>
    <p className="food-description">
      Not safe at any stage. Can cause developmental disorders.
    </p>
  </div>
</div>


      {/* FAQ Section */}
      <div className="faq-section">
        <h1 className="faq-title">Frequently Asked Questions</h1>

        <div className="faq-q">
          <span className="faq-q-bold">What are the most important nutrients?</span>
          <span className="faq-a">
         During pregnancy, your body needs extra nutrients, and folic acid is especially important in the early stages to help prevent neural tube defects in the baby. It's naturally found in foods like leafy greens (spinach, kale), lentils, asparagus, and broccoli. Fortified cereals and enriched grains like bread, pasta, and rice also provide folic acid. Combining these foods with a quality prenatal supplement helps ensure you get enough for a healthy pregnancy.
          </span>
        </div>

        <div className="faq-q">
          <span className="faq-q-bold">Is it safe to eat fish during pregnancy?</span>
          <span className="faq-a">
            Yes,Eating fish during pregnancy is very beneficial because it provides protein and DHA, essential for your baby’s brain and eye development. However, it's important to choose wisely: fish like salmon, sardines, trout, and tilapia are low in mercury and safe to eat 2–3 times a week. On the other hand, fish with high mercury levels—like shark, swordfish, king mackerel, and tile fish—should be avoided completely. Canned light tuna is okay in moderation, while albacore tuna should be limited to once a week.
          </span>
        </div>

        <div className="faq-q">
          <span className="faq-q-bold">What foods should I avoid during pregnancy?</span>
          <span className="faq-a">
Avoid foods that can carry harmful bacteria or toxins during pregnancy. This includes unpasteurized dairy and soft cheeses, deli meats and hot dogs (unless heated), raw or under cooked eggs and meats, high-mercury fish, raw fish and shellfish. Limit caffeine to under 200 mg per day (about one 12 oz coffee), and avoid alcohol entirely to prevent risks to the baby’s development.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Pregnancy;