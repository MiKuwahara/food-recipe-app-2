import React from 'react'

function RecipeDetails() {
  return (
    <main class="page">
      <div class="recipe-page">
        <section class="recipe-hero">
          <img
            src="https://via.placeholder.com/400"
            className="img recipe-hero-img"
          />
          <article class="recipe-info">
            <h2>Banana Pancakes</h2>
            <p>
              Shabby chic humblebrag banh mi bushwick, banjo kale chips
              meggings. Cred selfies sartorial, cloud bread disrupt blue bottle
              seitan. Dreamcatcher tousled bitters, health goth vegan venmo
              whatever street art lyft shabby chic pitchfork beard. Drinking
              vinegar poke tbh, iPhone coloring book polaroid truffaut tousled
              ramps pug trust fund letterpress. Portland four loko austin
              chicharrones bitters single-origin coffee. Leggings letterpress
              occupy pour-over.
            </p>
            <div class="recipe-icons">
              <article>
                <i class="fas fa-clock"></i>
                <h5>prep time</h5>
                <p>30 min.</p>
              </article>
              <article>
                <i class="far fa-clock"></i>
                <h5>cook time</h5>
                <p>15 min.</p>
              </article>
              <article>
                <i class="fas fa-user-friends"></i>
                <h5>serving</h5>
                <p>6 servings</p>
              </article>
            </div>
            <p class="recipe-tags">
              Tags : <a href="tag-template.html">beef</a>
              <a href="tag-template.html">breakfast</a>
              <a href="tag-template.html">pancakes</a>
              <a href="tag-template.html">food</a>
            </p>
          </article>
        </section>
        {/**<!-- content --> */}
        <section class="recipe-content">
          <article>
            <h4>instructions</h4>
            {/*<!-- single instruction -->*/ }
            <div class="single-instruction">
              <header>
                <p>step 1</p>
                <div></div>
              </header>
              <p>
                I'm baby mustache man braid fingerstache small batch venmo
                succulents shoreditch.
              </p>
            </div>
            {/* end of single instruction -->
            <!-- single instruction -->*/}
            <div class="single-instruction">
              <header>
                <p>step 2</p>
                <div></div>
              </header>
              <p>
                Pabst pitchfork you probably haven't heard of them, asymmetrical
                seitan tousled succulents wolf banh mi man bun bespoke selfies
                freegan ethical hexagon.
              </p>
            </div>
          {/**  <!-- end of single instruction -->
            <!-- single instruction --> */}
            <div class="single-instruction">
              <header>
                <p>step 3</p>
                <div></div>
              </header>
              <p>
                Polaroid iPhone bitters chambray. Cornhole swag kombucha
                live-edge.
              </p>
            </div>
            {/*<!-- end of single instruction -->*/ }
          </article>
          <article class="second-column">
            <div>
              <h4>ingredients</h4>
              <p class="single-ingredient">1 1/2 cups dry pancake mix</p>
              <p class="single-ingredient">1/2 cup flax seed meal</p>
              <p class="single-ingredient">1 cup skim milk</p>
            </div>
            <div>
              <h4>tools</h4>
              <p class="single-tool">Hand Blender</p>
              <p class="single-tool">Large Heavy Pot With Lid</p>
              <p class="single-tool">Measuring Spoons</p>
              <p class="single-tool">Measuring Cups</p>
            </div>
          </article>
        </section>
      </div>
    </main>
  )
}

export default RecipeDetails