import React, { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import useStorage from '../hooks/useStorage';

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  const { url, progress } = useStorage(file);

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };

  const copyUrl = (url) => {
    if (url) {
      navigator.clipboard.writeText(url);
      setIsClicked(true);

      setTimeout(() => {
        setIsClicked(false);
      }, 3000);
    }
  };

  return (
    <main className='container main-content'>
      <h1>Upload Image and Copy URL</h1>
      <div className='underline'></div>

      <section className='form-container'>
        <form>
          <input
            type='file'
            style={{ display: 'none' }}
            id='upload'
            onChange={handleChange}
          />
          <label htmlFor='upload'>
            <FaCloudUploadAlt /> Upload Image
          </label>
        </form>

        <div className='output'>
          {error && <h1>{error}</h1>}
          {progress > 0 && (
            <h4>Upload status &mdash; {progress.toFixed(2) + '%'}</h4>
          )}
          {url && (
            <button onClick={() => copyUrl(url)}>
              Click me to copy image URL
            </button>
          )}

          {isClicked && <h5>URL copied! Ready to paste.</h5>}
        </div>
      </section>
    </main>
  );
};

export default UploadImage;
