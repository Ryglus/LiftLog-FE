import React from 'react';
import './AvatarPop.css'

import ManFrontSVGComponent from "./bodys/ManFrontSVGComponent";
import ManBackSVGComponent from "./bodys/ManBackSVGComponent";
import WomanFrontSVGComponent from "./bodys/WomanFrontSVGComponent";
import WomanBackSVGComponent from "./bodys/WomanBackSVGComponent";
import {Col, Row} from "react-bootstrap";


const AvatarPop = ({backgroundColor, defaultColor = 'gray', gender = 'male'}) => {

    // eslint-disable-next-line no-unused-vars
    const rankColors = ['#FF0000', '#FFA500', '#FFFF00', '#90EE90', '#00FF00', '#006400', '#0000FF']
    const muscles = {
        chest: {
            pectoralisMajor: {
                name: "Pectoralis Major",
                color: "#1a6dbd" // Use appropriate hex color
            },
            pectoralisMinor: {
                name: "Pectoralis Major",
                color: "#1a6dbd" // Use appropriate hex color
            }
        },
        arms: {
            forearmInner: {
                color: "#1143b1" // Use appropriate hex color
            },
            forearmOuter: {
                color: "#1143b1" // Use appropriate hex color
            },
            forearmBack: {
                color: "#1143b1"
            },
            bicepsBrachii: {
                name: "Biceps Brachii",
                color: "#1143b1" // Use appropriate hex color
            },
            tricepsBrachii: {
                name: "Triceps Brachii",
                color: "#1143b1" // Use appropriate hex color
            },
            brachialis: {
                name: "Brachialis",
                color: "#1143b1" // Use appropriate hex color
            }
        },
        shoulders: {
            deltoids: {
                name: "Deltoids",
                color: "#DAA520" // Use appropriate hex color
            },
            platysma: {
                name: "Rotator Cuff",
                color: "#DAA520" // Use appropriate hex color
            },
            rotatorCuff: {
                name: "Rotator Cuff",
                color: "#DAA520" // Use appropriate hex color
            }
        },
        back: {
            trapezius: {
                name: "Trapezius",
                color: "#8A2BE2" // Use appropriate hex color
            },
            latissimusDorsi: {
                name: "Latissimus Dorsi",
                color: "#8A2BE2" // Use appropriate hex color
            },
            rhomboids: {
                name: "Rhomboids",
                color: "#8A2BE2" // Use appropriate hex color
            }
        },
        core: {
            rectusAbdominis: {
                name: "Rectus Abdominis",
                color: "#32CD32" // Use appropriate hex color
            },
            obliques: {
                name: "Obliques",
                color: "#32CD32" // Use appropriate hex color
            },
            transversusAbdominis: {
                name: "Transversus Abdominis",
                color: "#32CD32" // Use appropriate hex color
            }
        },
        legs: {
            gluteusMedius: {
                name: "Semitendinosus",
                color: "#FFD700"
            },
            gluteusMaximus: {
                name: "Semitendinosus",
                color: "#FFD700"
            },
            semitendinosus: {
                name: "Semitendinosus",
                color: "#FFD700"
            },
            tibialis: {
                name: "Tibialis",
                color: "#FFD700"
            },
            abductors: {
                name: "Abductors",
                color: "#FFD700"
            },
            quadriceps: {
                name: "Quadriceps",
                color: "#FFD700" // Use appropriate hex color
            },
            lateralis: {
                name: "Hamstrings",
                color: "#FFD700" // Use appropriate hex color
            },
            calves: {
                name: "Calves",
                color: "#FFD700" // Use appropriate hex color
            }
        }
    };

    return (
        <div>
            {gender === 'male' ? (
                <Row>
                    <Col xs={6} className="bodytest-image-container">
                        <ManFrontSVGComponent backgroundColor={backgroundColor} muscles={muscles}
                                              globalColor={defaultColor}/>
                    </Col>
                    <Col xs={6} className="bodytest-image-container">
                        <ManBackSVGComponent backgroundColor={backgroundColor} muscles={muscles}
                                             globalColor={defaultColor}/>
                    </Col>

                </Row>
            ) : (
                <Row>
                    <Col xs={6} className="bodytest-image-container px-4">
                        <WomanFrontSVGComponent backgroundColor={backgroundColor} muscles={muscles}
                                                globalColor={defaultColor}/>
                    </Col>
                    <Col xs={6} className="bodytest-image-container px-4">
                        <WomanBackSVGComponent backgroundColor={backgroundColor} muscles={muscles}
                                               globalColor={defaultColor}/>
                    </Col>
                </Row>
            )}
        </div>
    );
};

export default AvatarPop;
