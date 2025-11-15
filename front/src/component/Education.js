import React from 'react';
// Assuming you link Font Awesome via your index.html or another global method
import '../styles/Education.css' 

const Education = () => {
    return (
        <div className="education-section">
            <h2 className="education-heading">Education</h2>
            <div className="timeline">
                
                {/* Education Entry 1: High School */}
                <div className="timeline-item">
                    <div className="timeline-bullet">
                        {/* ICON for the entry type */}
                        
                    </div>
                    <p className="timeline-duration">2020-2022</p>
                    <div className="timeline-content">
                        <p className="timeline-description">
                            Science Stream (PCMB) <br />
                            
                            <span className="timeline-info">
                                {/* Inline Location Icon */}
                                <i className="fa-solid fa-map-marker-alt inline-icon"></i>
                                <span className="timeline-university">Siliguri Girl's High School (WBCHSE)</span>
                            </span>
                            
                            <span className="timeline-marks">
                                {/* Inline Marks Icon */}
                                <div><i className="fa-solid fa-chart-line inline-icon"></i> Percentage: 92%</div>
                            </span>
                        </p>
                    </div>
                </div>

                {/* Education Entry 2: B.Tech */}
                <div className="timeline-item">
                    <div className="timeline-bullet">
                        {/* ICON for the entry type */}
                    </div>
                    <p className="timeline-duration">2022-Present</p>
                    <div className="timeline-content">
                         <p className="timeline-description">
                            B.Tech in CSE <br />
                            
                            <span className="timeline-info">
                              <i className="fa-solid fa-map-marker-alt inline-icon"></i>  <span className="timeline-university">KIIT University</span>
                            </span>
                            
                            <span className="timeline-marks">
                                {/* Inline CGPA Icon */}
                                <div><i className="fa-solid fa-star inline-icon"></i> CGPA: 9.19</div>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;