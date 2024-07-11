import React, { useState, useEffect } from 'react';
import './Services.css';
import { TbChartBubbleFilled } from "react-icons/tb";
import { FaCode } from "react-icons/fa";
import { SiCodeblocks } from "react-icons/si";

function Services() {
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [activeModal]);

  const openModal = (service) => {
    setActiveModal(service);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <section className='services-container' id='services'>
      <h2>Services</h2>
      <h3 className='section-subtitle'>What I Offer</h3>

      <div className='services-content-container'>
        <div className="services-content">
          <i className="uil services-icons"><TbChartBubbleFilled /></i>
          <h3 className="services-title">Product <br />Designer</h3>
          <span className='btn btn-services' onClick={() => openModal('Product Designer')}>View More <i></i></span>
        </div>

        <div className="services-content">
          <i className="uil services-icons"><SiCodeblocks /></i>
          <h3 className="services-title">Ui/Ux <br />Designer</h3>
          <span className='btn btn-services' onClick={() => openModal('Ui/Ux Designer')}>View More <i></i></span>
        </div>

        <div className="services-content">
          <i className="uil services-icons"><FaCode /></i>
          <h3 className="services-title">Visual <br />Designer</h3>
          <span className='btn btn-services' onClick={() => openModal('Visual Designer')}>View More <i></i></span>
        </div>
      </div>

      {activeModal && (
        <div className='services-modal' onClick={closeModal}>
          <div className="services-modal-content" onClick={e => e.stopPropagation()}>
            <i onClick={closeModal}></i>
            <h3 className='services'>{activeModal}</h3>
            <p className="services-modal-description">
              Services with more than 10 years of experience.
              Providing quality work to Clients and Companies.
            </p>

            <ul className="services-modal-services grid">
              <li className="services-modal-services">
                <i></i>
                <p className='services-modal-info'>
                  I develop the user interface.
                </p>
              </li>
              <li className="services-modal-services">
                <i></i>
                <p className='services-modal-info'>
                  Web page development.
                </p>
              </li>
              <li className="services-modal-services">
                <i></i>
                <p className='services-modal-info'>
                  I create UX element interactions.
                </p>
              </li>
              <li className="services-modal-services">
                <i></i>
                <p className='services-modal-info'>
                  I position your company brand.
                </p>
              </li>
              <li className="services-modal-services">
                <i></i>
                <p className='services-modal-info'>
                  Design and mockups of products for companies.
                </p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}

export default Services;
