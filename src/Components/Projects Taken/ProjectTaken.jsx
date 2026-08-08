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
                                CLIENT : FEDERAL MINISTER OF WORK
                            </p>
                        </div>

                        <p className='project-des-p'>
                            CONSTRUCTION OF ROAD
                        </p>

                        <p className='project-des-loc'>
                            Location: kaduna, Dungu
                        </p>

                    </div>
                </div>

                <div className='projectT-img-divv'>
                    

                    <div className='projectT-des-div'>

                        <div  className='hero-line-div'>
                            <hr className='hero-line'/>
                            <p className='hero-line-p'>
                                CLIENT : FEDERAL MINISTER OF WORK
                            </p>
                        </div>

                        <p className='project-des-p'>
                            CONSTRUCTION OF ROAD
                        </p>

                        <p className='project-des-loc'>
                            Location: kaduna, Dungu
                        </p>

                    </div>

                    <img className='project-img' src={assets.Project_2} />


                </div>

            </div>

            

        </div>
    )
}
