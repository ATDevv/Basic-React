import { useEffect, useState } from "react";
import { CaretRightFilled, FacebookFilled, GithubFilled } from "@ant-design/icons";
import Lottie from "lottie-react";
import Skills from '../../../public/Animation - 1735544178527.json'
import { motion } from 'framer-motion';
import Arrow from '../../../public/Animation - 1735543071510.json'

const Typewriter = ({ text, delay }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

    return <span>{currentText}</span>;
}

const openFace = () => {
    window.open('https://www.facebook.com/dinh.tuananh2311', '_blank');
};

const openGithub = () => {
    window.open('https://github.com/ATDevv', '_blank');
}

const Core = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10%',
            marginTop: '20px',
            paddingBottom: '70px',
            zIndex: 2,
        }}>
            <div>
                <div style={{ padding: 5 }}>
                    <h1 style={{
                        fontFamily: 'sans-serif'
                    }}>
                        <Typewriter text="Hi, I'm D1a" delay={100} />
                    </h1>
                </div>

                <div>
                    <Lottie
                        animationData={Arrow}
                        style={{
                            width: '200px',
                            height: '200px'
                        }}
                    />
                </div>

                <div style={{
                    display: 'flex',
                    gap: '18px',
                    alignItems: 'center'
                }}>
                    <CaretRightFilled style={{
                        fontSize: '30px',
                        color: 'red'
                    }} />
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        <FacebookFilled
                            style={{
                                fontSize: '70px',
                                color: 'blue',
                            }}
                            onClick={openFace}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        <GithubFilled
                            style={{
                                fontSize: '70px',
                                color: 'black',
                                cursor: 'pointer',
                            }}
                            onClick={openGithub}
                        />
                    </motion.div>
                </div>
            </div>

            <div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <Lottie animationData={Skills} style={{
                        width: '500px',
                        height: '500px',
                    }} />
                </motion.div>
            </div>
        </div>
    )
}

export default Core