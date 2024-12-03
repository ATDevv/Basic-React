import { useEffect, useState } from "react";

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

const MyProfile = () => {
    return (
        <div style={{
            padding: 5,
            // height: '100vh',
            // width: '100vw',
            // backgroundColor: '#4158D0',
            // backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
            // fontFamily: 'Arial, sans-serif',
            // color: '#fff'
        }}>
            <h1>
                <Typewriter text="Hi there, I'm Atdevv" delay={100} />
            </h1>
        </div>
    )
}

export default MyProfile