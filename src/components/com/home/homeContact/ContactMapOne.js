import React, { useEffect } from "react";
import PhoneImage from "./../../../images/phone.png";
import PrinterImage from "./../../../images/printer.png";

const ContactMapOne = () => {
  //스크립트 파일 읽어오기
  const new_script = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.addEventListener("load", () => {
        resolve();
      });
      script.addEventListener("error", (e) => {
        reject(e);
      });
      document.head.appendChild(script);
    });
  };

  useEffect(() => {
    //카카오맵 스크립트 읽어오기
    const my_script = new_script(
      "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=2953b181765c8f12a7b4981b07b95797"
    );

    //스크립트 읽기 완료 후 카카오맵 설정
    my_script.then(() => {
      console.log("script loaded!!!");
      const kakao = window["kakao"];
      kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(37.4395083, 127.173853), //좌표설정
          level: 3,
        };
        const map = new kakao.maps.Map(mapContainer, options); //맵생성
        //마커설정
        const markerPosition = new kakao.maps.LatLng(37.4395083, 127.173853);
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    });
  }, []);

  return (
    <div className="contactMap-main">
      <div className="contact-title">
        <div className="contact-stick"></div>
        <h2>엔투소프트(본사)</h2>
        <div className="contact-text">
          <p>경기 성남시 중원구 갈마치로 288번길</p>
          <p>14 (SKV1 타워 ) A동 730호</p>
        </div>
        <div className="contact-img">
          <p>
            <img src={PhoneImage} alt="phone" className="phoneImg" />
            1877-1977
          </p>
          <p>
            <img src={PrinterImage} alt="printer" className="printerImg" />
            070-8677-4240
          </p>
        </div>
      </div>
      <div id="map" className="map" />
    </div>
  );
};

export default ContactMapOne;
