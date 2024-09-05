import React, {useState} from 'react';


interface IFileUploadProps {
  handleFiles: (file: File) => void;
  file: File;
}

const FileUpload: React.FC<IFileUploadProps> = ({ handleFiles, file }) => {
  // drag state
  const [dragActive, setDragActive] = React.useState(false);
  // ref
  const inputRef = React.useRef(null);

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files[0]);
      const img = document.getElementById('test-img');

      const reader = new FileReader();
      reader.onload = function (e) {
        // @ts-ignore
        img.src = e.target.result;
      }

      reader.readAsDataURL(e.dataTransfer.files[0]);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files[0]);
      const img = document.getElementById('test-img');

      const reader = new FileReader();
      reader.onload = function (e) {
        // @ts-ignore
        img.src = e.target.result;
      }

      reader.readAsDataURL(e.target.files[0]);
    }
  };

// triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };


  return (
      <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
        <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange}/>
        <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : ""}>
          <div>
            <p>Перетащите файл сюда, или нажмите что-бы загрузить его</p>
            <button className="upload-button" onClick={onButtonClick}></button>
            <img id="test-img"/>
          </div>
        </label>
        {dragActive &&
            <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag}
                 onDrop={handleDrop}></div>}
      </form>
  );
};

export default FileUpload;