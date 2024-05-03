import React from 'react'
import ashwagandhaImg from "../assets/triphala.png";
import turmericImg from "../assets/turmeric.jpg";
import brahmiImg from "../assets/bramhi.jpg";
import cuminImg from "../assets/cumin.jpg";
const Practise = () => {
    const cardsData = [
        {
          title: "Ashwagandha",
          description: "Ashwagandha is an ancient medicinal herb known for its adaptogenic properties. It helps reduce stress and anxiety, improve brain function, and boost immunity.",
          image: ashwagandhaImg
        },
        {
          title: "Turmeric",
          description: "Turmeric is a spice commonly used in Indian cuisine and traditional medicine. It contains curcumin, a compound with powerful anti-inflammatory and antioxidant properties.",
          image: turmericImg
        },
        {
          title: "Brahmi",
          description: "Brahmi is a herb used in Ayurvedic medicine to improve cognitive function, memory, and reduce anxiety. It is also known for its neuroprotective effects.",
          image: brahmiImg
        },
        {
          title: "Cumin",
          description: "Cumin is a spice with a warm, earthy flavor. It is rich in antioxidants and may aid digestion, improve blood sugar control, and promote weight loss.",
          image: cuminImg
        }
      ];
    
      return (
        <div className='cont' style={{ backgroundColor: 'lightgreen', padding: '20px' }}>
          <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
            {cardsData.map((card, index) => (
              <div key={index} className='col'>
                <div className='card' style={{backgroundColor:"#FEFDED"}}>
                  <img src={card.image} className='card-img-top' alt={card.title} />
                  <div className='card-body'>
                    <h5 className='card-title'>{card.title}</h5>
                    <p className='card-text'>{card.description}</p>
                    <a href='#' className='btn btn-primary'>
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };
export default Practise
