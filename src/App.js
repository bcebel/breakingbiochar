import React from "react";
import "./App.scss";
import logo from "./bb.png";
function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>lo-co2</h1>
        <img src={logo} alt="Logo" />
      </header>
      <main className="main-content">
        <section className="section">
          <h3 className="mission">
            lo-co2 turns consumer waste into biochar, a carbon-rich material
            that sequesters carbon dioxide from the atmosphere. Our mission is
            to help combat climate change by providing an affordable and
            sustainable solution for carbon capture and storage.
          </h3>
          <p>
            Biochar has the potential to revolutionize the way we think about
            waste and carbon sequestration.
          </p>
          <div class="approach">
            <h2>Approach</h2>
            <p>
              Biochar is generated by heating organic matter in a low-oxygen
              environment, a process known as pyrolysis. Trees and plants have
              already done the "Carbon Capture" for us through photosynthesis.
              Biochar handles the "Storage" part of Carbon Capture and Storage.
              We just lock up that carbon for the rest of our lives instead of
              letting it emit CO2 in your local landfill.{" "}
            </p>
            <p>
              We source organic waste from local businesses, schools, towns and
              households. We also partner with local farmers to use biochar as a
              soil amendment. As we scale, we will invest in larger pyrolysis
              units that can process larger volumes of organic waste. Every town
              in the world should be doing this, we want to help.{" "}
            </p>
            <p>
              We help reduce landfill volume and help clean up the wastestream
              locally. We cross promote our progress as a community and online.
              Every household in America generates 5 pounds of trash a day and
              half of that is organic material that could become biochar. We
              want it.{" "}
            </p>
            <p>
              We sell our carbon credits on Puro.Earth and other carbon credit
              marketplaces. We also generate products from the biochar
              generated, from soil ammendments to green building materials and
              cat litter. Biochar production also has the incredible benefit of
              being able to generate green fuels packed with hydrogen. We can
              also generate green energy from the gasses produced during the
              pyrolysis process.{" "}
            </p>
          </div>
          <div class="benefits">
            <h2>Benefits</h2>
            <p>
              Biochar reduces landfill volume and their associated methane
              emissions. Combining biochar with soil and compost enhances soil
              health and boosts crop yields. The need for carbon sequestration
              is growing as the effects of climate change become more severe.
              Methane is 25 times more potent than CO2 as a greenhouse gas. By
              diverting waste from landfills we stop the methane from forming.
              We can also generate green fuels and green energy from the gasses
              produced during the pyrolysis process. Carbon also has thousands
              of industrial applications, including cement production, soil
              amendments, filtration, green building materials, carbon fiber,
              hydrogen production, and graphene.
            </p>
            <p>
              Because biochar is carbon negative, its production can be used to
              earn carbon credits. Biochar revolutionizes the carbon cycle by
              transforming waste into a valuable resource. Even when organic
              matter breaks down naturally, it still releases carbon dioxide
              (CO2) into the atmosphere. Its called the carbon cycle for a
              reason. Converting organic waste into biochar locks up carbon for
              hundreds of years, and prevents it from being released into the
              atmosphere.{" "}
            </p>
          </div>
          <div class="costs">
            <h2>Costs</h2>
            <p>
              The cost of producing Biochar is low compared to other carbon
              capture technologies. The main costs are associated with the
              collection and transportation of organic waste, the energy
              required to heat the waste, and the equipment needed to produce
              and store the Biochar. The initial investment in a small pyrolysis
              unit that can process 1 ton of organic waste per day is estimated
              to be $100,000. As we scale up, we will invest in larger pyrolysis
              units that can process larger volumes of organic waste. In
              addition, the sale of carbon credits and other products generated
              from Biochar can help offset the initial investment.
            </p>
          </div>
          <div class="competition">
            <h2>Competition</h2>
            <p>
              The other methods of carbon capture are expensive and require a
              lot of energy to operate. Over the past 20 years, promises have
              been made about reducing our carbon footprint, yet global
              emissions continue to rise. Clean Coal, Bioenergy with Carbon
              Capture and Storage, Direct Air Capture, and other technologies
              have been proposed as solutions to the climate crisis. However,
              these technologies are expensive, unproven, and have limited
              scalability. Biochar is a cost-effective, sustainable, and
              scalable solution for carbon capture and storage. It has the
              potential to revolutionize the way we think about waste and carbon
              sequestration.
            </p>
          </div>
          <h2>About Us</h2>
          <p>
            Brian Ebel is the founder of lo-co2. He is a Legacy LEED-AP from the
            US Green Building Council. He holds a BS in Environmental Science
            from Vermont State University and has over 10 years of experience in
            sustainability & remediation. He is passionate about finding
            innovative solutions to combat climate change and protect the
            environment. He has campaigned for the environment, cleaned up NASA
            & IBM sites, and been part of the green building movement since
            2008.
          </p>{" "}
          <p>
            Email us at: <a href="mailto:bcebel@gmail.com">bcebel@gmail.com</a>
            Call us at: <a href="tel:405-650-0063">405-650-0063</a>
          </p>
        </section>
        {/* Add more sections as needed */}
      </main>
      <footer className="footer">
        <p>&copy; 2024 lo-co2. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
