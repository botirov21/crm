import React, { useState } from "react";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import uploadIcon from "../../../assets/uploadImage-icon.svg";
import {
  AddButton,
  CreateBtn,
  InputWrapper,
  ModalComponent,
  ModalInput,
  ModalLabel,
  ModalTextarea,
  RadioContent,
  RadioInput,
  RadioLabel,
  RadioWrapper,
  UploadButton,
} from "./ceoStyle";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: "93%",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 2.5,
};

const StaffModal = () => {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleOpen = () => setOpen(true);

  const handlePhoneChange = (value) => {
    setPhone(value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  const handleUploadButtonClick = () => {
    const fileInput = document.getElementById("file-upload");
    fileInput.click();
  };

  const handleClose = () => {
    setPhone("");
    setUsername("");
    setPassword("");
    setRole("");
    setSelectedFile(null);
    setPreviewUrl("");
    setOpen(false)
  };

  return (
    <div>
      <AddButton onClick={handleOpen}>
        <AddIcon />
        Add new employee
      </AddButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalComponent>
            <h1>Create new employee</h1>
            <InputWrapper>
              <ModalLabel>Description</ModalLabel>
              <ModalTextarea
                placeholder="Enter text"
                name="Text1"
                cols="20"
                rows="2"
              />
            </InputWrapper>
            <InputWrapper>
              <ModalLabel>Phone number</ModalLabel>
              <PhoneInput
                country={"us"}
                value={phone}
                onChange={handlePhoneChange}
                inputStyle={{
                  width: "100%",
                  backgroundColor: "var(--100, #EFEEF8)",
                  height: "40px",
                }}
                buttonStyle={{
                  height: "40px",
                  borderRadius: "8px 0 0 8px",
                  background: "#EFEEF8",
                }}
              />
            </InputWrapper>
            <InputWrapper>
              <ModalLabel>Telegram username</ModalLabel>
              <ModalInput
                placeholder="Enter username"
                type="text"
                value={username}
                onChange={handleUsernameChange}
              />
            </InputWrapper>
            <InputWrapper>
              <ModalLabel>Password</ModalLabel>
              <div style={{ position: "relative" }}>
                <ModalInput
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={handlePasswordChange}
                  style={{
                    width: "94%",
                    backgroundColor: "var(--100, #EFEEF8)",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    padding: "0px  12px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                >
                  {showPassword ? (
                    <FaEye
                      style={{
                        transform: "scale(1.5)",
                        color: "var(--500, #6053B9)",
                      }}
                      onClick={togglePasswordVisibility}
                    />
                  ) : (
                    <FaEyeSlash
                      style={{
                        transform: "scale(1.5)",
                        color: "var(--500, #6053B9)",
                      }}
                      onClick={togglePasswordVisibility}
                    />
                  )}
                </div>
              </div>
            </InputWrapper>
            <InputWrapper>
              <ModalLabel>Upload Image</ModalLabel>
              <UploadButton onClick={handleUploadButtonClick}>
                <img src={uploadIcon} alt="Upload Icon" />
                Upload Image
              </UploadButton>
              <input
                id="file-upload"
                type="file"
                style={{ display: "none" }}
                onChange={handleFileChange}
                accept="image/*"
              />
              {previewUrl && (
                <img
                  src={previewUrl}
                  alt="Preview"
                  style={{ maxWidth: "5%", marginTop: "10px" }}
                />
              )}
            </InputWrapper>
            <InputWrapper>
              <ModalLabel>Roles</ModalLabel>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                <RadioContent>
                  <RadioWrapper>
                    <RadioInput
                      type="radio"
                      id="ceo"
                      name="paymentMethod"
                      value="ceo"
                      onChange={handleRoleChange}
                    />
                    <RadioLabel htmlFor="ceo">CEO</RadioLabel>
                  </RadioWrapper>
                  <RadioWrapper>
                    <RadioInput
                      type="radio"
                      id="administrator"
                      name="paymentMethod"
                      value="administrator"
                      onChange={handleRoleChange}
                    />
                    <RadioLabel htmlFor="administrator">
                      Administrator
                    </RadioLabel>
                  </RadioWrapper>
                  <RadioWrapper>
                    <RadioInput
                      type="radio"
                      id="demo"
                      name="paymentMethod"
                      value="demo"
                      onChange={handleRoleChange}
                    />
                    <RadioLabel htmlFor="demo">Demo</RadioLabel>
                  </RadioWrapper>
                </RadioContent>
                <RadioContent>
                  <RadioWrapper>
                    <RadioInput
                      type="radio"
                      id="demo2"
                      name="paymentMethod"
                      value="demo2"
                      onChange={handleRoleChange}
                    />
                    <RadioLabel htmlFor="demo2">Demo 2</RadioLabel>
                  </RadioWrapper>
                  <RadioWrapper>
                    <RadioInput
                      type="radio"
                      id="demo3"
                      name="paymentMethod"
                      value="demo3"
                      onChange={handleRoleChange}
                    />
                    <RadioLabel htmlFor="demo3">Demo 3</RadioLabel>
                  </RadioWrapper>
                  <RadioWrapper>
                    <RadioInput
                      type="radio"
                      id="demo4"
                      name="paymentMethod"
                      value="demo4"
                      onChange={handleRoleChange}
                    />
                    <RadioLabel htmlFor="demo4">Demo 4</RadioLabel>
                  </RadioWrapper>
                </RadioContent>
              </Box>
            </InputWrapper>
            <InputWrapper>
              <CreateBtn onClick={handleClose}>Create employee</CreateBtn>
            </InputWrapper>
          </ModalComponent>
        </Box>
      </Modal>
    </div>
  );
};

export default StaffModal;
