import './styles.css';
import { Helmet } from 'react-helmet';

export default function Period() {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Period Food Guide</title>
      </Helmet>

      <div className="container">
        <header className="header">
          <div className="hero">
            <h2>What to eat and not to eat during your period?</h2>
            <p>
              Though we can’t know how strong our period is going to be every
              month, we’re sure we can control how we are going to feel
              depending on our eating habits. Believe it or not, the food we eat
              can help reduce cramps, bloating, and mood swings.
            </p>
          </div>
        </header>

        <section className="section light-section">
          <div className="section-content">
            <div className="left-side">
              <h3>Food to eat throughout menstruation days</h3>
              <p>
                Here you can find a list of dishes you can consume during your
                menstruation
              </p>
            </div>
            <div className="sidebar-card right-side highlighted-card">
              <h4>On this section:</h4>
              <ul>
                <ul>Food to eat throughout menstruation days</ul>
                <ul>What cannot I consume?</ul>
                <ul>Frequently asked</ul>
              </ul>
            </div>
          </div>
        </section>

        <section className="food-section">
          <h3>What to eat during menstruation?</h3>
          <div className="cards">
            <div className="card">
              <img src="fotosalmon.png" alt="Salmon" />
              <p>Salmon</p>
              <p>Salmon soothes cramps naturally</p>
            </div>
            <div className="card">
              <img src="fotobanana.png" alt="Banana" />
              <p>Banana</p>
              <p>Bananas ease digestion and cramps</p>
            </div>
            <div className="card">
              <img src="fotobroccoli.png" alt="Broccoli" />
              <p>Broccoli</p>
              <p>Broccoli boosts energy and relieves PMS</p>
            </div>
          </div>
        </section>

        <section className="warning-section">
          <h3>Avoid eating this during menstruation days</h3>
          <h4>What is not recommendable to eat?</h4>
          <div className="cards">
            <div className="card">
              <img src="fotosnacks.png" alt="Sweets and Snacks" />
              <p>Sweets and Snacks</p>
              <p>Fruit beats candy, it's nutritious and satisfying</p>
            </div>
            <div className="card">
              <img src="fotoalcohol.png" alt="Alcohol" />
              <p>Alcohol</p>
              <p>Alcohol worsens period symptoms, avoid it!</p>
            </div>
            <div className="card">
              <img src="fotospicyfood.png" alt="Spicy" />
              <p>Spicy food</p>
              <p>Spicy food balances benefits and discomfort</p>
            </div>
          </div>
        </section>

        <section className="faq">
          <h3>Frequently asked questions</h3>
          <div className="faq-box">
            <p>
              <strong>
                Why do I crave chocolate during my period? Does it help me in
                any way?
              </strong>
            </p>
            <p>
              Chocolate introduces endorphins and serotonins into your body,
              which help regulate your mood and make you feel more relaxed and
              happy. Cravings become stronger when you're losing more blood and
              nutrients, or when hormones are imbalanced.
            </p>

            <p>
              <strong>Does lemon cut period?</strong>
            </p>
            <p>
              No. Lemon lowers the flow of your period, which is helpful if
              your flow is heavy.
            </p>

            <p>
              <strong>Is it bad to eat oranges during period?</strong>
            </p>
            <p>
              Oranges are a great choice during your period, providing vitamins,
              hydration, and fiber. Eating them whole helps regulate blood
              sugar. Enjoy them in moderation.
            </p>

            <p>
              <strong>
                What happens if you eat spicy food when you're on your period?
              </strong>
            </p>
            <p>
              Spicy foods can have mixed effects. Some people feel relief,
              others nausea or bloating. Listen to your body!
            </p>

            <p>
              <strong>Should I eat eggs during my period?</strong>
            </p>
            <p>
              Yes! Eggs are great for overall health and reducing period
              symptoms.
            </p>

            <p>
              <strong>Do bananas help with cramps?</strong>
            </p>
            <p>
              Yes. Bananas ease cramps and balance mood. Eat fresh, avoid
              fried/high-fat food, and stay hydrated.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}


