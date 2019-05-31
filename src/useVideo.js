import React, { useEffect, useState } from 'react';
import * as faceapi from 'face-api.js';

const useVideo = () => {
  const [element, setElement] = useState(null);
  const [detections, setDetections] = useState(null);

  const loadModels = async () => {
    const MODEL_URL = process.env.PUBLIC_URL + '/models';
    await faceapi.nets.ssdMobilenetv1.loadFromUri('/models');
    await faceapi.loadTinyFaceDetectorModel(MODEL_URL);
    await faceapi.loadFaceLandmarkTinyModel(MODEL_URL);
    await faceapi.loadFaceRecognitionModel(MODEL_URL);
    await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
    await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
    await faceapi.nets.ageGenderNet.loadFromUri('/models');
  };

  useEffect(() => {
    const predicElement = async () => {
      await loadModels();

      // let description = await faceapi
      // .detectAllFaces(element)
      // .withFaceLandmarks(true)
      // .withFaceDescriptors();

      const detections = await faceapi
        .detectSingleFace(element)
        .withFaceLandmarks()
        .withFaceExpressions()
        .withAgeAndGender()
        .withFaceDescriptor();

      setDetections(detections);
      // const displaySize = { width: element.width, height: element.height }
      // faceapi.matchDimensions(canvas, displaySize)
      // // resize the detected boxes in case your displayed image has a different size than the original
      // const resizedDetections = faceapi.resizeResults(detenctions, displaySize)
      // setCanvas(faceapi.draw.drawDetections(canvas, resizedDetections))
    };

    if (element) {
      predicElement();
    }
  }, [element]);

  return [setElement, detections];
};

export default useVideo;
