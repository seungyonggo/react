import React, { useState } from "react";
import styled from "styled-components/macro";

const Modal = ({ onUpload, onClose, forwardedRef }) => {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonths, setSelectedMonths] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const years = [2023, 2022, 2021, 2020];
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const onYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const onMonthsChange = (e) => {
    setSelectedMonths(e.target.value);
  };

  const onFileUpload = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
      const modalData = {
        selectedYear,
        selectedMonths,
        uploadedImage,
      };
      onUpload(modalData);
      onClose();
    }
  };
  return (
    <Form ref={forwardedRef}>
      <Title>
        <Label>연도</Label>
        <CustomSelect value={selectedYear} onChange={onYearChange}>
          {years.map((year) => (
            <CustomOption key={year} value={year}>
              {year}
            </CustomOption>
          ))}
        </CustomSelect>
        <Label>월</Label>

        <CustomSelect value={selectedMonths} onChange={onMonthsChange}>
          {months.map((month) => (
            <CustomOption key={month} value={month}>
              {month}
            </CustomOption>
          ))}
        </CustomSelect>

        <Label>클래스</Label>
        <CustomSelect>
          <CustomOption>일반</CustomOption>
        </CustomSelect>

        <TitleButton onClick={onFileUpload}>UPLOAD</TitleButton>
      </Title>
      <Content>
        <input placeholder="제목" name="title" />
        <textarea placeholder="내용" name="content" />
        {uploadedImage && <PreviewImage src={uploadedImage} alt="Uploaded" />}
        <input type="file" onChange={onFileUpload} />
        <Button>확인</Button>
      </Content>
    </Form>
  );
};

export default Modal;
const Form = styled.form`
  width: 480px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(53, 53, 53);
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 32px;
`;
const TitleButton = styled.div`
  display: block;
  background-color: skyblue;
  width: 100px;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: #e9e9e9;
    color: black;
  }
`;

const Title = styled.div`
  font-size: 24px;
  display: flex;
  justify-content: space-between;

  & > button {
    border: none;
    cursor: pointer;

    :hover {
      transform: scale(1.2);
    }
  }
`;

const Label = styled.div`
  color: white;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;

  & > input {
    color: white;
    background-color: rgb(53, 53, 53);
    width: 100%;
    height: 40px;
    border: 1px solid white;
    outline: none;
    border-radius: 8px;
    padding: 0 16px;
    margin-bottom: 16px;
  }

  & > textarea {
    background-color: rgb(53, 53, 53);
    color: white;
    width: 100%;
    height: 40px;
    border: 1px solid white;
    outline: none;
    border-radius: 8px;
    padding: 16px;
  }
`;

const Button = styled.button`
  display: block;

  background-color: rgb(53, 53, 53);
  color: skyblue;

  margin: 10px auto 0px;
  cursor: pointer;

  :hover {
    background-color: #e9e9e9;
    color: black;
  }
`;
const FileInput = styled.input`
  display: black;
`;
const PreviewImage = styled.img`
  width: 100%;
  max-height: 200px;
  margin-bottom: 16px;
`;
const CustomSelect = styled.select`
  background-color: rgb(53, 53, 53);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 4px 8px;
  outline: none;
  cursor: pointer;
`;

const CustomOption = styled.option`
  background-color: rgb(53, 53, 53);
  color: white;
`;
