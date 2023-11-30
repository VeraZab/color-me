import './App.css';
import { useRef, useState, useCallback } from 'react';
import WebcamComponent from './components/Webcam';
import Webcam from 'react-webcam';
import { Box, Button } from '@mui/material'

function App() {
  const webcamRef = useRef<Webcam>(null);
  const [webcamEnabled, setWebcamEnabled] = useState(false);
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const capture = useCallback(() => {
    if (webcamRef?.current) {
      const imageSrc = webcamRef?.current?.getScreenshot();
      setImgSrc(imageSrc);
      setWebcamEnabled(false);
    }

  }, [webcamRef, setImgSrc]);

  return (
    <Box className="rootContainer" sx={{ display: 'flex', flexDirection: 'row', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ display: 'flex', width: '90%', height: '500px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'grey', width: '50%', height: '100%' }}>
          {webcamEnabled && !imgSrc && (
            <WebcamComponent webcamRef={webcamRef} setImgSrc={setImgSrc} style={{
              width: '100%',
              height: '100%',
              objectFit: "contain",
              margin: 'auto'
            }} />
          )}
          {imgSrc && !webcamEnabled && (
            <img src={imgSrc} alt="Captured from webcam" />
          )}

        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50%', height: '100%' }}>
          {webcamEnabled && <Button onClick={capture} >Capture Photo</Button>}
          {!webcamEnabled && (
            <Button onClick={
              () => {
                if (imgSrc) {
                  setImgSrc(null)
                }
                setWebcamEnabled(true)
              }
            } >
              {!imgSrc ? 'Enable Camera' : 'Retake Picture'}
            </Button>
          )}
        </Box>
      </Box>

    </Box>
  );
}

export default App;
