export default function Main() {
    return (
          <main id="index">
            <div>
                <h1>Rey Martinez</h1>
                <h2>Contractor</h2>
                <a href=""><button className="button-5" role="button">Book Online</button></a>
            </div>
            <section className="about-me">
                <div className="headshot">
                    <img src="images/grader-me.jpg" id="head-shot"></img>
                </div>
                <div id="i-rey">
                    <h1>How I got here:</h1>
                    <p>When i joined the military i was put to operate. Ever since i hopped on a rough terrain forklift, i loved moving such a big piece around, constantly challenging myself i wanted to experience every piece we had. Trying to excel and perfect it.</p>
                        <div>
                            <a href="./about"><button className="button-5" role="button">Read More</button></a>
                        </div>
                </div>
            </section>
            <section id="specialties">
                <h1>Specialize in:</h1>
                    <ul>
                        <li>Drainage, structure Excavation</li>
                        <li>Land Clearing</li>
                        <li>Milling/Paving</li>
                        <li>Landscrape Grading & Resloping</li>
                        <li>Loading and Unloading Forklift Services</li>
                        <li>Excavation for ponds and Pools</li>
                    </ul>
            </section>
            <section id="image-equipment">
                <img className="image-equipment" src="images/clearing-1.jpeg" ></img>
                <img className="image-equipment"src="images/drainage-1.jpg" ></img>
                <img className="image-equipment" src="images/IMG_4501.JPG"></img>
                <img className="image-equipment" src="images/roller-1.JPG"></img>
            </section>


                        </main>
       
    )
}