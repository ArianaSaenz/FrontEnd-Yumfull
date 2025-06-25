import './App.css';
import img2 from './images/images/salmon.jpg'
function App() {
  return (
    <div className="container">
      <header className="header">
        <nav className="navbar">
          <h1>YumFull</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Stores</li>
            <li>Girl's Spot</li>
            <li>Pregnancy</li>
            <li>Progress</li>
          </ul>
        </nav>
        <div className="hero">
          <h2>What to eat and not to eat during your period?</h2>
          <p>
           Though we can’t know how strong our period is going to be every month, we’re sure we can control how we are going to feel depending on our eating habits.  Believe it or not, the food we eat can help reduce cramps, bloating, and mood swings.
          </p>
        </div>
      </header>

      <section className="section green-light">
        <h3>Food to eat throughout menstruation days</h3>
        <p>Here you can find a list of dishes you can consume during your menstruation  </p>
        <div className="sidebar-card">
          <h4>On this section</h4>
          <ul>
            <p>Food to eat throughout menstruation days</p>
            <p>What cannot I consume?</p>
            <p>Frequently asked</p>
          </ul>
        </div>
      </section>

      <section className="food-section">
        <h3>What to eat during menstruation?</h3>
        <div className="cards">
          <div className="card"><img src={img2} alt="Salmon" /><p>Salmon</p><p>Salmon soothes cramps naturally

</p></div>
          <div className="card"><img src="banana.png" alt="Banana" /><p>Banana</p><p>Bananas ease digestion and cramps</p></div>
          <div className="card"><img src="broccoli.png" alt="Broccoli" /><p>Broccoli</p><p>Broccoli boosts energy and relieves PMS</p></div>
        </div>
      </section>

      <section className="warning-section">
        <h3>Avoid eating this during menstruation days</h3>
        <h4>What is not recommendable to eat?</h4>
        <div className="cards">
          <div className="card"><img src="candies.png" alt="Candies" /><p>Sweets and Snacks</p><p>Fruit beats candy, it's nutritious and satisfying</p></div>
          <div className="card"><img src="soda.png" alt="Soda" /><p>Alcohol</p><p>Alcohol worsens period symptoms—avoid it!

</p></div>
          <div className="card"><img src="spicy.png" alt="Spicy" /><p>Spicy food</p><p>Spicy food balances benefits and discomfort


</p></div>
        </div>
      </section>

      <section className="faq">
        <h3>Frequently asked questions</h3>
        <div className="faq-box">
          <p><strong>Why do I crave chocolate during my period? Does it help me in any way?</strong></p>
          <p>Chocolate introduces endorphins and serotonins into your body, which are responsible for regulating your mood and help you feel more relaxed and happy. Of course, monitor your mood swings. As your body gets used to having a positive reaction to chocolate, you crave it. Cravings become stronger when you're losing more blood and nutrients, as well as being with hormone imbalance.</p>

          <p><strong>Does lemon cut period?</strong></p>
          <p>No. Lemon lowers the flow of your period, which is good if you have a heavy flow.</p>

          <p><strong>Is it bad to eat oranges during period?</strong></p>
          <p>Oranges are a great choice during your period, providing vitamins, hydration, and fiber. Eating them whole helps regulate blood sugar, while excessive juicing strips fiber and concentrates sugar. Enjoy them in moderation for the best health benefits!</p>

                    <p><strong>What happens if you eat spicy food when you're on your period?</strong></p>
          <p>Spicy foods can have mixed effects during your period. While some people find relief, others experience nausea or bloating. Since science hasn’t confirmed a clear impact, it's best to listen to your body; avoid them if they make you feel worse.</p>

                    <p><strong>Should I eat eggs during my period?</strong></p>
          <p>Eggs are among the best foods to eat during pregnancy. Like chocolate, bananas, and citrus fruits, eggs are beneficial for overall health and for reducing period symptoms.</p>

                    <p><strong>Do bananas help with cramps?</strong></p>
          <p>Bananas help ease cramps and balance mood during your period. You can opt for fresh fruits and vegetables, avoiding fried and high-fat foods to reduce bloating. Cooking at medium heat preserves nutrients, and staying hydrated while eating regularly minimizes discomfort.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
