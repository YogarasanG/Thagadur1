import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Home() {
 
 
  return (
    <div>
      <div className="Welcome home" >
        <h2 className="quote" >
          "At Thagadur, we don't just weld steel; we sculpt dreams, molding
          artistry into every creation – your journey starts with us!"
        </h2>
      </div>
      <div className="home Welding">
        <h2 className="question">What is Welding?</h2>
        <p className="answer">
          Welding is a fabrication process that involves joining materials,
          usually metals, by causing fusion. This is typically achieved by
          melting the workpieces and adding a filler material to form a molten
          pool, which, when cooled, solidifies and creates a strong joint.
          Welding is widely used in various industries for constructing and
          repairing structures,as well as in the fabrication of metal-based
          products,and <b>We are "Arc Welders"</b> .
        </p>
        <h2 className="question">Arc Welding?</h2>
        <img src="./images/img23.jpg" alt="Window" className="pho" />
        <p className="answer">
          Shielded Metal Arc Welding (SMAW): Also known as stick welding, it
          uses a flux-coated electrode. The electric arc forms between the
          electrode and the workpiece, melting both the electrode and the
          workpiece.
        </p>
        <h2 className="question">Why Thagadur?</h2>
        <img src="./images/img15.jpg" alt="Thagadur" className="pho" />
        <p className="answer">
          <b>
            Thagadur Welding Works stands out for several reasons, making it a
            preferred choice for those seeking excellence in metal fabrication:
          </b>
        </p>
        <h5 className="SubHeading">Innovative Design Expertise:</h5>
        <p className="answer">
          Thagadur Welding Works prides itself onits innovative design
          capabilities. The company is known for crafting unique and
          aesthetically pleasing designs that set them apart in the market.
        </p>
        <h5 className="SubHeading">Customized Solutions:</h5>
        <img src="./images/img17.jpg" alt="Window" className="pho" />
        <p className="answer">
          The company excels in providing tailored solutions to meet individual
          requirements. Whether it's a unique gate design, a personalized
          wedding backdrop, or specialized playground equipment, Thagadur
          Welding Works is known for its ability to bring custom visions to
          life.
        </p>
        <h5 className="SubHeading"> <Link to='Shutter' className="SubHeading">Rolling Shutter Expertise:</Link> </h5>
        <img src="./images/img80.png" alt="Thagadur" className="pho" />
        <p className="answer">
          Thagadur Welding Works has expertise in crafting rolling shutters.
          These products not only enhance security but also showcase the
          company's proficiency in manufacturing functional and durable
          solutions.
        </p>
        <h5 className="SubHeading"><Link to='Pipe' className="SubHeading">Pipe Bending Excellence:</Link></h5>
        <img src="./images/img55.jpg" alt="Window" className="pho" />
        <p className="answer">
          The company's proficiency in pipe bending is a testament to its
          capabilities in working with various materials. Precision in bending
          is crucial for creating structurally sound and visually appealing
          products.
        </p>
        <h5 className="SubHeading"><Link to='Playground' className="SubHeading">Playground Equipment Quality:</Link></h5>
        <img src="./images/img72.jpg" alt="Window" className="pho" />
        <p className="answer">
          Thagadur Welding Works extends its commitment to quality to playground
          equipment. The products designed for recreational spaces emphasize
          safety, durability, and engaging designs for children.
        </p>
        <h2 className="question">Why Welding?</h2>
        <p className="answer">
          Welding plays a crucial role in various industries and applications
          for several reasons:
        </p>
        <h5 className="SubHeading">Joining Materials:</h5>
        <img src="./images/img9.jpg" alt="Thagadur" className="pho" />
        <p className="answer">
         
          <b>
            Welding is primarily used to join two or more materials, typically
            metals, by melting and fusing them together. This creates a strong
            and durable bond.
          </b>
        </p>
        <h5 className="SubHeading">Repair and Maintenance:</h5>
        <img src="./images/img53.jpg" alt="Window" className="pho" />
        <p className="answer">
          Welding is often employed for repairing and maintaining various
          structures and equipment. It allows for the restoration of damaged
          parts, extending the lifespan of machinery and infrastructure.
        </p>
        <h5 className="SubHeading">Cost-Effective Manufacturing:</h5>
        <p className="answer">
          Cost-Effective Manufacturing: Welding is a cost-effective
          manufacturing process for large-scale production. It allows for the
          efficient assembly of components, reducing production time and costs.
        </p>
        <h5 className="SubHeading">Customization:</h5>
        <img src="./images/img37.jpg" alt="Window" className="pho" />
        <p className="answer">
          Welding enables the creation of customized designs and structures.
          This is particularly important in industries where specific shapes and
          sizes are required, such as in the fabrication of gates, windows, and
          other architectural elements.
        </p>
        
      </div>
    </div>
  );
}

export default Home;
