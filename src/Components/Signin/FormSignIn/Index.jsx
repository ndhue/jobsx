import React, { useState, useEffect } from "react";
import {
  Container,
  Content,
  Head,
  Body,
  Foot,
  FootItem,
  Name,
  BodyItem,
  BodyGroupItem,
  BodyGroupItemButton,
} from "./styles";
import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();

  const [status, handleStatus] = useState(false);
  const [userRegister, handleUserRegister] = useState({
    email: "",
    password: "",
  });
  const [errorBlank, handleErrorBlank] = useState({
    email: false,
    password: false,
  });

  const [errorEmail, handleErrorEmail] = useState(false);

  const UpdateValueForm = (e) => {
    handleUserRegister({
      ...userRegister,
      [e.target.name]: e.target.value,
    });
  };

  const validation = () => {
    // Check blank input flied
    if (
      userRegister.email.trim() === "" &&
      userRegister.password.trim() === ""
    ) {
      handleErrorBlank({
        ...errorBlank,
        email: true,
        password: true,
      });
    }

    if (
      userRegister.email.trim() !== "" &&
      userRegister.password.trim() === ""
    ) {
      handleErrorBlank({
        ...errorBlank,
        email: false,
        password: true,
      });
    } else if (
      userRegister.email.trim() === "" &&
      userRegister.password.trim() !== ""
    ) {
      handleErrorBlank({
        ...errorBlank,
        email: true,
        password: false,
      });
    } else if (
      userRegister.email.trim() === "" &&
      userRegister.password.trim() !== ""
    ) {
      handleErrorBlank({
        ...errorBlank,
        email: true,
        password: false,
      });
    } else if (
      userRegister.email.trim() === "" &&
      userRegister.password.trim() === ""
    ) {
      handleErrorBlank({
        ...errorBlank,
        email: true,
        password: true,
      });
    }

    if (
      userRegister.email.trim() !== "" &&
      userRegister.password.trim() !== ""
    ) {
      handleErrorBlank({
        ...errorBlank,
        email: false,
        password: false,
      });
    } else if (
      userRegister.email.trim() === "" &&
      userRegister.password.trim() !== ""
    ) {
      handleErrorBlank({
        ...errorBlank,
        email: true,
        password: false,
      });
    } else if (
      userRegister.email.trim() !== "" &&
      userRegister.password.trim() === ""
    ) {
      handleErrorBlank({
        ...errorBlank,
        email: false,
        password: true,
      });
    }

    // validation regex email
    if (
      !userRegister.email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      handleErrorEmail(true);
    }
  };

  const handleReset = () => {
    handleErrorBlank({
      email: false,
      password: false,
    });

    handleErrorEmail(false);
  };

  const progressSignIn = () => {
    if (
      userRegister.email === "tdtu001@tonducthang.edu.vn" &&
      userRegister.password === "HoangSaTruongSalacuaVietNam"
    ) {
      localStorage.setItem("login", "success");
      alert("Login success!!! ");
      navigate("/");
    }
  };

  useEffect(() => {}, [status]);
  return (
    <Container>
      <Content>
        {/* Head Area */}
        <Head>
          <Name>Sign In</Name>
        </Head>
        {/* BODY area */}
        <Body>
          <BodyItem
            name="email"
            onChange={UpdateValueForm}
            value={userRegister.email}
            placeholder="Enter your email"
            onClick={() => {
              handleReset();
            }}
          ></BodyItem>
          {errorBlank.email ? (
            <h5 className="text-danger">This field mustn't be blank</h5>
          ) : (
            <></>
          )}
          {errorEmail ? (
            <h5 className="text-danger">This Field is not format Email</h5>
          ) : (
            <></>
          )}

          <BodyGroupItem>
            <BodyItem
              name="password"
              onChange={UpdateValueForm}
              value={userRegister.password}
              type={status ? "text" : "password"}
              placeholder="Enter your password"
              onClick={() => {
                handleReset();
              }}
            ></BodyItem>
            {errorBlank.password ? (
              <h5 className="text-danger">This field mustn't be blank</h5>
            ) : (
              <></>
            )}

            {/* V???n ????? l?? khi ch??ng th???c hi???n code v???i React th?? onClick n?? s??? t??? ?????ng chay, v?? v???y ch??ng ta ph???i truy???n v??o m???t arrow function  */}
            <BodyGroupItemButton
              onClick={() => {
                handleStatus(!status);
              }}
            >
              {status ? (
                <i
                  style={{ cursor: "pointer" }}
                  className="fas fa-eye-slash"
                ></i>
              ) : (
                <i style={{ cursor: "pointer" }} className="fas fa-eye"></i>
              )}
            </BodyGroupItemButton>
          </BodyGroupItem>
        </Body>
        {/* Foot Area */}
        <Foot>
          <FootItem
            onClick={() => {
              validation();
              progressSignIn();
            }}
          >
            Submit
          </FootItem>
        </Foot>
      </Content>
    </Container>
  );
}

export default Index;
