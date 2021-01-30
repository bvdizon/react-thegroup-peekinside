import { useState, useEffect } from 'react';
// these were from 'config.js' file, which hosts the firebase configuration
import { projectStorage } from '../firebase/config';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = file && projectStorage.ref(file.name);

    file &&
      storageRef.put(file).on(
        'state_changed',
        (snap) => {
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          setProgress(percentage);
        },
        (err) => {
          setError(err);
        },
        async () => {
          const url = await storageRef.getDownloadURL();
          setUrl(url);
        }
      );
  }, [file]);

  // here are the values exported when this hook is called
  return { progress, url, error };
};

export default useStorage;
