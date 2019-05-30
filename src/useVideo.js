import React, { useEffect, useState } from "react";
import * as faceapi from "face-api.js";

const useVideo = () => {
  const [element, setElement] = useState(null);
  const [ready, setReay] = useState(false);

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

  const predic = async () => {
    await loadModels();
    let description = await faceapi
    .detectAllFaces(element)
    .withFaceLandmarks(true)
    .withFaceDescriptors();

    const detenctions = await faceapi.detectSingleFace(element).withFaceLandmarks().withAgeAndGender().withFaceDescriptor()
    console.log(detenctions)
  };

  useEffect(() => {
    if (element) {
      setReay(true);
      predic();
    }
  }, [element]);

  return [setElement, ready];
};

export default useVideo;
