import React from 'react';
import './DescriptionBox.css';


const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
                
            </div>
            {/* <div className="descriptionbox-nav-box fade">
                Additional Information
            </div> */}
            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>
           
        </div>
        <div className="descriptionbox-description">
            <p>
               A portfolio website is a digital platform that allows individuals to present their skills, achievements, and work samples to a broader audience. It functions as a personal showcase where professionals, freelancers, and creatives highlight their expertise, share project experiences, and provide contact information. 
                Portfolio websites eliminate geographical barriers and offer a centralized space to build a professional identity. 
                <br/>They have become essential tools in today’s competitive landscape due to their accessibility, visual appeal, and potential to attract global opportunities.
            </p>
                
            </div>
    </div>
  );
}

export default DescriptionBox;
