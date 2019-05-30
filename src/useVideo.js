import React, { useEffect, useState } from "react";
import * as faceapi from "face-api.js";

const useVideo = () => {
  const [element, setElement] = useState(null);
  const [canvas, setCanvas] = useState(<canvas></canvas>);

  const loadModels = async () => {
    const MODEL_URL = process.env.PUBLIC_URL + "/models";
    console.log(MODEL_URL);
    await faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
    await faceapi.loadTinyFaceDetectorModel(MODEL_URL);
    await faceapi.loadFaceLandmarkTinyModel(MODEL_URL);
    await faceapi.loadFaceRecognitionModel(MODEL_URL);
    await faceapi.nets.faceLandmark68Net.loadFromUri('/models')
    await faceapi.nets.ageGenderNet.loadFromUri('/models')
  };


  useEffect(() => {
    const predicElement = async () => {
      await loadModels();
  
      // let description = await faceapi
      // .detectAllFaces(element)
      // .withFaceLandmarks(true)
      // .withFaceDescriptors();
  
      const detenctions = await faceapi.detectSingleFace(element).withFaceLandmarks().withAgeAndGender().withFaceDescriptor()

      // const displaySize = { width: element.width, height: element.height }
      // faceapi.matchDimensions(canvas, displaySize)
      // // resize the detected boxes in case your displayed image has a different size than the original
      // const resizedDetections = faceapi.resizeResults(detenctions, displaySize)
      // setCanvas(faceapi.draw.drawDetections(canvas, resizedDetections))

      console.log(detenctions)
    };

    if (element) {
      predicElement();
    }
  }, [element]);

  return [setElement, canvas];
};

export default useVideo;
