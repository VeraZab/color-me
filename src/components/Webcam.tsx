import Webcam from "react-webcam";
import { RefObject, CSSProperties } from 'react';


interface WebcamCaptureProps {
    webcamRef: RefObject<Webcam>;
    setImgSrc: (imgSrc: string | null) => void;
    style: CSSProperties
}

const WebcamCapture: React.FC<WebcamCaptureProps> = ({ webcamRef, setImgSrc, style }) => {
    return (
        <>
            <Webcam
                style={style}
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
            />

        </>
    );
};

export default WebcamCapture;
