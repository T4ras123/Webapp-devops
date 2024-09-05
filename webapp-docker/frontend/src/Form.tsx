import React, {useMemo, useState} from 'react';
import {TextField} from "@material-ui/core";
import FileUpload from "./FileUpload";
import Button from "@material-ui/core/Button";

const Form: React.FC = () => {
  const [data, setData] = useState(null);

  const errors = useMemo(() => {
    return {
      name: !data?.name && 'Это поле обязательное',
      price: !data?.price && 'Это поле обязательное',
      file: !data?.file && 'Это поле обязательное',
    }
  }, [data]);

  const handleChangeData = (e) => {
    setData(prev => ({...prev, [e.target.name]: e.target.value}));
  }

  const handleFile = (file) => {
    setData(prev => ({...prev, file}));
  }

  const handleSubmit = async (e) => {
    if (Object.values(errors).some(item => item)) {
      return;
    }

    const formData = new FormData();
    formData.append('file', data.file);
    formData.append('name', data.name);
    formData.append('price', data.price);

    await fetch(`${process.env.REACT_APP_BACKEND_URL}/image`, {
      method: 'POST',
      body: formData,
    })

    setData(null);
    // @ts-ignore
    document.getElementById('test-img').src = '';
  }

  return (
      <div className="form">
        <TextField name="name" error={Boolean(errors.name)} helperText={errors.name} onChange={handleChangeData}
                   label="Имя продукта" variant="outlined" value={data?.name || ''}/>
        <TextField name="price" error={Boolean(errors.price)} helperText={errors.price} onChange={handleChangeData}
                   label="Цена продукта" variant="outlined" value={data?.price || ''}/>
        <div>
          <FileUpload handleFiles={handleFile} file={data?.file}/>
          <p style={{ color: 'red' }}>{errors.file}</p>
        </div>
        <Button onClick={handleSubmit} variant="contained" color="primary" size="large">Сохранить</Button>
      </div>
  )
};

export default Form;