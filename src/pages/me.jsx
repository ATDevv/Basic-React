import Lottie from "lottie-react";
import Rectangle from '../../public/Animation - 1735546034389.json'
import Core from "../Components/About_Me/core";

const MyProfile = () => {
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100vw',
                height: '45vw',
                marginLeft: '1%',
                position: 'relative'
            }}>
                <Lottie animationData={Rectangle} style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute'
                }} />
                <Core/>
            </div>
        </>
    )
}

export default MyProfile