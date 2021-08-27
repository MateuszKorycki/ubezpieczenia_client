import React, { useState } from 'react';
import {motion} from 'framer-motion'
import img1 from '../../../img/1.PNG'
import Navbar from "../../layout/header/Navbar";
import './Home.css'
import Footer from "../../layout/footer/Footer";

const imageVariants = {
    hidden:{
        x: 50,
        opacity: 0
    },
    visible:{
        x: 0,
        opacity: 1,
        transition:{
            delay: 0.5, duration: 0.5
        }
    }
}


export const Home = () => {

    const [move, setMove] = useState(1);

    const backSlider = () => {
        if(move===1){
            setMove(6);
        }
        else{
            setMove(move-1);
        }
    }

    const nextSlider = () => {
        if(move===6){
            setMove(1);
        }
        else{
            setMove(move+1);
        }
    }

    setTimeout(nextSlider, 12000);
    return (
        <div>
            <Navbar/>
        <div className='container-pages container-pages-home'>

            <div className='row-home'>

                <i className="fas fa-arrow-left arrow-home" onClick={backSlider}></i>

                {move===1 &&
                <motion.div className='img-home' variants={imageVariants}
                                       initial="hidden" animate="visible">
                    <img className="home-image" src={img1} alt="img1"/>
                    <div className="home-text">
                        <h2>Ubezpieczenie na życie</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus eos,
                            molestiae magni voluptatem mollitia excepturi! Eveniet illo ab blanditiis
                            placeat illum fugiat aut architecto aspernatur officiis, error porro vitae
                            suscipit. ipsum dolor sit amet, consectetur adipisicing elit. Illum ipsam
                            dignissimos, tenetur quas itaque sapiente. Maiores tempora harum veniam odit
                            obcaecati mollitia, voluptas nemo fuga placeat odio optio maxime corporis!</p>
                    </div>

                </motion.div>}

                {move===2 &&
                <motion.div className='img-home' variants={imageVariants}
                                       initial="hidden" animate="visible">
                    <img className="home-image" src={img1} alt="img1"/>
                    <div className="home-text">
                        <h2>Ubezpieczenie zdrowotne</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus eos,
                            molestiae magni voluptatem mollitia excepturi! Eveniet illo ab blanditiis
                            placeat illum fugiat aut architecto aspernatur officiis, error porro vitae
                            suscipit. ipsum dolor sit amet, consectetur adipisicing elit. Illum ipsam
                            dignissimos, tenetur quas itaque sapiente. Maiores tempora harum veniam odit
                            obcaecati mollitia, voluptas nemo fuga placeat odio optio maxime corporis!</p>
                    </div>
                </motion.div>}

                {move===3 &&
                <motion.div className='img-home' variants={imageVariants}
                                       initial="hidden" animate="visible">
                    <img className="home-image" src={img1} alt="img1"/>
                    <div className="home-text">
                        <h2>Ubezpieczenie na podróż</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus eos,
                            molestiae magni voluptatem mollitia excepturi! Eveniet illo ab blanditiis
                            placeat illum fugiat aut architecto aspernatur officiis, error porro vitae
                            suscipit. ipsum dolor sit amet, consectetur adipisicing elit. Illum ipsam
                            dignissimos, tenetur quas itaque sapiente. Maiores tempora harum veniam odit
                            obcaecati mollitia, voluptas nemo fuga placeat odio optio maxime corporis!</p>
                    </div>
                </motion.div>}
                {move===4 &&
                <motion.div className='img-home' variants={imageVariants}
                            initial="hidden" animate="visible">
                    <img className="home-image" src={img1} alt="img1"/>
                    <div className="home-text">
                        <h2>Ubezpieczenie dla firm</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus eos,
                            molestiae magni voluptatem mollitia excepturi! Eveniet illo ab blanditiis
                            placeat illum fugiat aut architecto aspernatur officiis, error porro vitae
                            suscipit. ipsum dolor sit amet, consectetur adipisicing elit. Illum ipsam
                            dignissimos, tenetur quas itaque sapiente. Maiores tempora harum veniam odit
                            obcaecati mollitia, voluptas nemo fuga placeat odio optio maxime corporis!</p>
                    </div>
                </motion.div>}
                {move===5 &&
                <motion.div className='img-home' variants={imageVariants}
                            initial="hidden" animate="visible">
                    <img className="home-image" src={img1} alt="img1"/>
                    <div className="home-text">
                        <h2>Ubezpieczenie samochodu</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus eos,
                            molestiae magni voluptatem mollitia excepturi! Eveniet illo ab blanditiis
                            placeat illum fugiat aut architecto aspernatur officiis, error porro vitae
                            suscipit. ipsum dolor sit amet, consectetur adipisicing elit. Illum ipsam
                            dignissimos, tenetur quas itaque sapiente. Maiores tempora harum veniam odit
                            obcaecati mollitia, voluptas nemo fuga placeat odio optio maxime corporis!</p>
                    </div>
                </motion.div>}
                {move===6 &&
                <motion.div className='img-home' variants={imageVariants}
                            initial="hidden" animate="visible">
                    <img className="home-image" src={img1} alt="img1"/>
                    <div className="home-text">
                        <h2>Ubezpieczenie mieszkania/domu</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus eos,
                            molestiae magni voluptatem mollitia excepturi! Eveniet illo ab blanditiis
                            placeat illum fugiat aut architecto aspernatur officiis, error porro vitae
                            suscipit. ipsum dolor sit amet, consectetur adipisicing elit. Illum ipsam
                            dignissimos, tenetur quas itaque sapiente. Maiores tempora harum veniam odit
                            obcaecati mollitia, voluptas nemo fuga placeat odio optio maxime corporis!</p>
                    </div>

                </motion.div>}
                    <i className="fas fa-arrow-right arrow-home" onClick={nextSlider}></i>

            </div>



        </div>
            <Footer/>
        </div>
    )
}

export default Home
