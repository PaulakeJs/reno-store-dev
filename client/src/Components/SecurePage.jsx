import React, { useEffect, useState } from "react";
import { message } from "antd";
import { CurrentUser } from "../apis/usersApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoad } from "../redux/loadSlice";

function SecurePage({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch() 
  const [user, setUser] = useState(null);
  const validateToken = async () => {
    try {
      dispatch(setLoad(true))
      const response = await CurrentUser();
      if (response.success) {
        setUser(response.data);
      } else {
        message.error(response.message);
      }
    } catch (error) {

    dispatch(setLoad(false))
      message.error(error.message);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      validateToken();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    user && (
      <div>
        <div className="flex justify-between items-center bg-primary p-5">
          {/** header */}
          <h1 className="text-2xl text-white">RenoMp </h1>
          <div className="bg-white py-2 p-5">
              <i className="ri-shield-user-line gap-2 items-center"></i>
            <span className="rounded underline cursor-pointer uppercase">
              {user.name}
              
            </span>
            <i className="ri-logout-box-r-line ml-10"
              onClick={()=>{
                localStorage.removeItem("token")
                navigate('/login')
              }}
              ></i>
          </div>
        </div>
        <div className="p-5">{children}</div>
      </div>
    )
  );
}

export default SecurePage;
