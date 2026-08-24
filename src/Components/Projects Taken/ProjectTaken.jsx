import React from 'react'
import "./ProjectTaken.css"
import { assets } from '../../assets/assets'

export const ProjectTaken = () => {
    return (
        <div className='projectt-main'>

            <div className='projectt-head-div'>

                <h1 className='projectt-h1'>
                    Project Taken
                </h1>

                <div className='hero-line-div'>

                    {/* <hr  className='hero-line'/> */}

                    <p className='hero-line-p'>
                        MAJOR PROJECTS UNDERTAKEN
                    </p>
                </div>

            </div>

            <div>
                <div className='projectT-img-div'>
                    <img className='project-img' src={assets.Project_1} alt="" />

                    <div className='projectT-des-div'>

                        <div  className='hero-line-div'>
                            <hr className='hero-line'/>
                            <p className='hero-line-p'>
                                CLIENT : FEDERAL MINISTRY OF WORKS
                            </p>
                        </div>

                        <p className='project-des-p'>
                            CONSTRUCTION OF ROAD
                        </p>

                        <p className='project-des-loc'>
                            Location: Kaduna, Kaduna State
                        </p>

                    </div>
                </div>

                <div className='projectT-img-divv'>
                    

                    <div className='projectT-des-div'>

                        <div  className='hero-line-div'>
                            <hr className='hero-line'/>
                            <p className='hero-line-p'>
                                CLIENT : FEDERAL MINISTRY OF WATER RESOURCES
                            </p>
                        </div>

                        <p className='project-des-p'>
                            CONSTRUCTION OF CONCRETE TANKS
                        </p>

                        <p className='project-des-loc'>
                            Location: Jos, Plateau State
                        </p>

                    </div>

                    <img className='project-img' src={assets.Project_2} />


                </div>



                <div className='projectT-img-div'>
                    <img className='project-img' src={assets.Project_7} alt="" />

                    <div className='projectT-des-div'>

                        <div  className='hero-line-div'>
                            <hr className='hero-line'/>
                            <p className='hero-line-p'>
                                CLIENT : RURAL ELECTRIFICATION AGENCY {'(REA)'}
                            </p>
                        </div>

                        <p className='project-des-p'>
                            SOLAR INSTALLATION
                        </p>

                        <p className='project-des-loc'>
                            Location: Yola, Adamawa State
                        </p>

                    </div>
                </div>








                <div className='projectT-img-divv'>
                    

                    <div className='projectT-des-div'>

                        <div  className='hero-line-div'>
                            <hr className='hero-line'/>
                            <p className='hero-line-p'>
                                CLIENT : FEDERAL MINISTRY OF WATER RESOURCES
                            </p>
                        </div>

                        <p className='project-des-p'>
                            CONSTRUCTION OF WATER INFRASTRUCTURE
                        </p>

                        <p className='project-des-loc'>
                            Location: Lokoja, Kogi State
                        </p>

                    </div>

                    <img className='project-img' src={assets.Project_9} />


                </div>

            </div>












            <div className='projectT-img-div'>
                <img className='project-img' src={assets.Project_6} alt="" />

                <div className='projectT-des-div'>

                    <div  className='hero-line-div'>
                        <hr className='hero-line'/>
                        <p className='hero-line-p'>
                            CLIENT : FEDERAL MINISTRY OF WORKS
                        </p>
                    </div>

                    <p className='project-des-p'>
                        CONSTRUCTION OF BUILDINGS
                    </p>

                    <p className='project-des-loc'>
                        Location: Bauchi, Bauchi State
                    </p>

                </div>
            </div>

            <div className='projectT-img-divv'>
                

                <div className='projectT-des-div'>

                    <div  className='hero-line-div'>
                        <hr className='hero-line'/>
                        <p className='hero-line-p'>
                            CLIENT : KADUNA STATE MINISTRY OF WORKS & HOUSING
                        </p>
                    </div>

                    <p className='project-des-p'>
                        CONSTRUCTION OF STRUCTURAL CONCRETE
                    </p>

                    <p className='project-des-loc'>
                        Location: Kaduna, Dungu
                    </p>

                </div>

                <img className='project-img' src={assets.Project_8} />


            </div>








            <div className='projectT-img-div'>
                <img className='project-img' src={assets.Project_5} alt="" />

                <div className='projectT-des-div'>

                    <div  className='hero-line-div'>
                        <hr className='hero-line'/>
                        <p className='hero-line-p'>
                            CLIENT : FEDERAL CAPITAL TERRITORY ADMINISTRATION {'(FCTA)'}
                        </p>
                    </div>

                    <p className='project-des-p'>
                        CONSTRUCTION OF BUILDINGS
                    </p>

                    <p className='project-des-loc'>
                        Location: Abuja, FCT
                    </p>

                </div>
            </div>

            

        </div>
    )
}
