import React from "react";
import "./Card.css";
import worls from "../../../images/img/worls.png";

function Card() {
  return (
    <div className="doira">
      <div className="doira_right"></div>
      <div className="container cards">
        <div className="row">
          <div className="col-12 cards">
            <div className="col-4 ">
              <div className="card">
                <div className="card_img slateblue">
                  <svg
                    width="49"
                    height="49"
                    viewBox="0 0 49 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M38.2273 15.1716C38.1588 15.1716 38.1132 15.1716 38.0447 15.1716H37.9306C33.6171 15.0349 30.3992 11.709 30.3992 7.6086C30.3992 3.41706 33.8225 0.0228246 37.9991 0.0228246C42.1756 0.0228246 45.599 3.43984 45.599 7.6086C45.5761 11.7318 42.3581 15.0577 38.2501 15.1944C38.2501 15.1716 38.2501 15.1716 38.2273 15.1716ZM37.9991 3.41707C35.694 3.41707 33.8225 5.28505 33.8225 7.58584C33.8225 9.84107 35.5799 11.6635 37.8393 11.7546C37.8621 11.7318 38.0447 11.7318 38.2501 11.7546C40.4639 11.6407 42.1756 9.81829 42.1984 7.58584C42.1984 5.28505 40.327 3.41707 37.9991 3.41707Z"
                      fill="white"
                    />
                    <path
                      d="M38.2506 31.9606C37.3605 31.9606 36.4704 31.8923 35.5804 31.7328C34.6446 31.5734 34.0284 30.685 34.1882 29.751C34.348 28.817 35.238 28.2019 36.1737 28.3614C38.9809 28.8398 41.9478 28.3158 43.9334 26.9946C45.0061 26.2884 45.5766 25.4 45.5766 24.5115C45.5766 23.6231 44.9832 22.7575 43.9334 22.0513C41.9478 20.73 38.9353 20.2061 36.1053 20.7073C35.1696 20.8895 34.2795 20.2517 34.1197 19.3177C33.96 18.3837 34.5762 17.4953 35.5119 17.3358C39.232 16.6752 43.089 17.3814 45.8277 19.2038C47.8361 20.5478 49 22.4613 49 24.5115C49 26.539 47.8589 28.4753 45.8277 29.8421C43.7508 31.2089 41.0578 31.9606 38.2506 31.9606Z"
                      fill="white"
                    />
                    <path
                      d="M10.7723 15.1716C10.7494 15.1716 10.7266 15.1716 10.7266 15.1716C6.61857 15.0349 3.4006 11.709 3.37777 7.60855C3.37777 3.41701 6.80115 0 10.9777 0C15.1542 0 18.5776 3.41702 18.5776 7.58578C18.5776 11.709 15.0768 15.0349 10.9688 15.1716C10.9231 15.1716 10.8179 15.1716 10.7723 15.1716ZM11.0104 11.7773C11.1474 11.7773 11.2458 11.7773 11.3885 11.7773C13.4197 11.6862 15.1998 9.86378 15.1998 7.60855C15.1998 5.30776 13.3284 3.43978 11.0233 3.43978C8.71824 3.43978 6.84679 5.30776 6.84679 7.60855C6.84679 9.841 8.5813 11.6406 10.7951 11.7773C10.8179 11.7545 10.9191 11.7773 11.0104 11.7773Z"
                      fill="white"
                    />
                    <path
                      d="M10.7494 31.9606C7.94223 31.9606 5.24917 31.2089 3.17233 29.8421C1.16395 28.4981 0 26.5618 0 24.5115C0 22.4841 1.16395 20.5478 3.17233 19.2038C5.91103 17.3814 9.76803 16.6752 13.4881 17.3358C14.4238 17.4953 15.04 18.3837 14.8803 19.3177C14.7205 20.2517 13.8304 20.8895 12.8947 20.7073C10.0647 20.2061 7.07498 20.73 5.0666 22.0513C3.99394 22.7575 3.42337 23.6231 3.42337 24.5115C3.42337 25.4 4.01676 26.2884 5.0666 26.9946C7.05215 28.3158 10.0191 28.8398 12.8262 28.3614C13.762 28.2019 14.652 28.8398 14.8118 29.751C14.9716 30.685 14.3554 31.5734 13.4196 31.7328C12.5296 31.8923 11.6395 31.9606 10.7494 31.9606Z"
                      fill="white"
                    />
                    <path
                      d="M24.5338 32.1883C24.4653 32.1883 24.4197 32.1883 24.3512 32.1883H24.2371C19.9236 32.0517 16.7057 28.7258 16.7057 24.6253C16.7057 20.4338 20.129 17.0396 24.3056 17.0396C28.4821 17.0396 31.9054 20.4566 31.9054 24.6253C31.8826 28.7485 28.6647 32.0744 24.5566 32.2111C24.5566 32.1883 24.5566 32.1883 24.5338 32.1883ZM24.3056 20.4338C22.0005 20.4338 20.129 22.3018 20.129 24.6026C20.129 26.8578 21.8864 28.6802 24.1458 28.7713C24.1686 28.7486 24.3512 28.7486 24.5566 28.7713C26.7704 28.6574 28.4821 26.835 28.5049 24.6026C28.5049 22.3246 26.6335 20.4338 24.3056 20.4338Z"
                      fill="white"
                    />
                    <path
                      d="M24.5338 49C21.7951 49 19.0564 48.2938 16.9339 46.8587C14.9255 45.5147 13.7616 43.6011 13.7616 41.5509C13.7616 39.5235 14.9027 37.5644 16.9339 36.2204C21.2017 33.3956 27.8887 33.3956 32.1337 36.2204C34.1421 37.5644 35.306 39.4779 35.306 41.5281C35.306 43.5556 34.1649 45.5147 32.1337 46.8587C30.0112 48.2711 27.2725 49 24.5338 49ZM18.8282 39.0907C17.7555 39.7969 17.1849 40.6853 17.1849 41.5737C17.1849 42.4621 17.7783 43.3278 18.8282 44.034C21.9092 46.1069 27.1356 46.1069 30.2166 44.034C31.2892 43.3278 31.8598 42.4394 31.8598 41.5509C31.8598 40.6625 31.2664 39.7969 30.2166 39.0907C27.1584 37.0177 21.932 37.0405 18.8282 39.0907Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h4>
                  Metodik <br /> birlashmalar
                </h4>
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </span>
                <button className="birlashma slateblue">Batafsil</button>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <div className="card_img orange">
                  <svg
                    width="51"
                    height="46"
                    viewBox="0 0 51 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M45.0319 22.3579H5.96806C3.88465 22.3579 2.17019 20.66 2.17019 18.5967V11.461C2.17019 9.99949 3.19013 8.51649 4.55737 7.97917L24.0893 0.241795C24.914 -0.0805983 26.086 -0.0805983 26.9107 0.241795L46.4426 7.97917C47.8098 8.51649 48.8298 10.021 48.8298 11.461V18.5967C48.8298 20.66 47.1153 22.3579 45.0319 22.3579ZM25.5 3.20782C25.4132 3.20782 25.3264 3.20771 25.283 3.2292L5.77268 10.9667C5.64247 11.0312 5.42551 11.3106 5.42551 11.461V18.5967C5.42551 18.8976 5.66423 19.134 5.96806 19.134H45.0319C45.3357 19.134 45.5744 18.8976 45.5744 18.5967V11.461C45.5744 11.3106 45.3792 11.0312 45.2273 10.9667L25.6953 3.2292C25.6519 3.20771 25.5868 3.20782 25.5 3.20782Z"
                      fill="white"
                    />
                    <path
                      d="M47.2021 46H3.79785C2.90806 46 2.17019 45.2692 2.17019 44.388V37.9402C2.17019 35.8769 3.88465 34.1789 5.96806 34.1789H45.0319C47.1153 34.1789 48.8298 35.8769 48.8298 37.9402V44.388C48.8298 45.2692 48.0919 46 47.2021 46ZM5.42551 42.7761H45.5744V37.9402C45.5744 37.6393 45.3357 37.4029 45.0319 37.4029H5.96806C5.66423 37.4029 5.42551 37.6393 5.42551 37.9402V42.7761Z"
                      fill="white"
                    />
                    <path
                      d="M8.1383 37.4029C7.24851 37.4029 6.51064 36.6721 6.51064 35.7909V20.7459C6.51064 19.8647 7.24851 19.1339 8.1383 19.1339C9.02808 19.1339 9.76596 19.8647 9.76596 20.7459V35.7909C9.76596 36.6721 9.02808 37.4029 8.1383 37.4029Z"
                      fill="white"
                    />
                    <path
                      d="M16.8191 37.4029C15.9293 37.4029 15.1915 36.6721 15.1915 35.7909V20.7459C15.1915 19.8647 15.9293 19.1339 16.8191 19.1339C17.7089 19.1339 18.4468 19.8647 18.4468 20.7459V35.7909C18.4468 36.6721 17.7089 37.4029 16.8191 37.4029Z"
                      fill="white"
                    />
                    <path
                      d="M25.5 37.4029C24.6102 37.4029 23.8723 36.6721 23.8723 35.7909V20.7459C23.8723 19.8647 24.6102 19.1339 25.5 19.1339C26.3898 19.1339 27.1276 19.8647 27.1276 20.7459V35.7909C27.1276 36.6721 26.3898 37.4029 25.5 37.4029Z"
                      fill="white"
                    />
                    <path
                      d="M34.1808 37.4029C33.2911 37.4029 32.5532 36.6721 32.5532 35.7909V20.7459C32.5532 19.8647 33.2911 19.1339 34.1808 19.1339C35.0706 19.1339 35.8085 19.8647 35.8085 20.7459V35.7909C35.8085 36.6721 35.0706 37.4029 34.1808 37.4029Z"
                      fill="white"
                    />
                    <path
                      d="M42.8617 37.4029C41.9719 37.4029 41.234 36.6721 41.234 35.7909V20.7459C41.234 19.8647 41.9719 19.1339 42.8617 19.1339C43.7515 19.1339 44.4893 19.8647 44.4893 20.7459V35.7909C44.4893 36.6721 43.7515 37.4029 42.8617 37.4029Z"
                      fill="white"
                    />
                    <path
                      d="M49.3723 46H1.62766C0.737872 46 0 45.2692 0 44.388C0 43.5068 0.737872 42.776 1.62766 42.776H49.3723C50.2621 42.776 51 43.5068 51 44.388C51 45.2692 50.2621 46 49.3723 46Z"
                      fill="white"
                    />
                    <path
                      d="M25.5 16.9846C22.8089 16.9846 20.617 14.8138 20.617 12.1487C20.617 9.4836 22.8089 7.31282 25.5 7.31282C28.191 7.31282 30.383 9.4836 30.383 12.1487C30.383 14.8138 28.191 16.9846 25.5 16.9846ZM25.5 10.5367C24.6102 10.5367 23.8723 11.2675 23.8723 12.1487C23.8723 13.0299 24.6102 13.7607 25.5 13.7607C26.3898 13.7607 27.1276 13.0299 27.1276 12.1487C27.1276 11.2675 26.3898 10.5367 25.5 10.5367Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h4>
                  Professional ta’lim <br /> muassasalari
                </h4>
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </span>
                <button className="birlashma orange">Batafsil</button>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <div className="card_img deepskyblue">
                  <svg
                    width="43"
                    height="45"
                    viewBox="0 0 43 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.5317 32.9658C19.7356 32.9658 17.9184 32.5053 16.5027 31.6054L3.78231 23.3803C1.41572 21.8525 0 19.2782 0 16.4737C0 13.6693 1.41572 11.095 3.78231 9.56717L16.5238 1.36301C19.3553 -0.45781 23.7715 -0.45781 26.5818 1.38394L39.2388 9.60903C41.5843 11.1368 43 13.7111 43 16.4947C43 19.2782 41.5843 21.8525 39.2388 23.3803L26.5818 31.6054C25.1661 32.5263 23.3489 32.9658 21.5317 32.9658ZM21.5317 3.14197C20.3273 3.14197 19.1229 3.41405 18.2565 4.00006L5.53612 12.2042C4.057 13.167 3.19066 14.7157 3.19066 16.4737C3.19066 18.2318 4.03587 19.7805 5.53612 20.7432L18.2565 28.9683C20.0103 30.0985 23.0953 30.0985 24.8491 28.9683L37.5061 20.7432C38.9853 19.7805 39.8305 18.2318 39.8305 16.4737C39.8305 14.7157 38.9853 13.167 37.5061 12.2042L24.8491 3.97913C23.9617 3.43498 22.7572 3.14197 21.5317 3.14197Z"
                      fill="white"
                    />
                    <path
                      d="M21.5106 45C20.5809 45 19.63 44.8744 18.8693 44.6233L12.1288 42.4048C8.93811 41.3584 6.42361 37.9051 6.44474 34.5774L6.46587 24.7617C6.46587 23.9036 7.1843 23.192 8.05064 23.192C8.91698 23.192 9.6354 23.9036 9.6354 24.7617L9.61427 34.5774C9.61427 36.5447 11.2624 38.805 13.143 39.4329L19.8836 41.6514C20.7288 41.9234 22.2924 41.9234 23.1376 41.6514L29.8782 39.4329C31.7587 38.805 33.4069 36.5447 33.4069 34.5983V24.8872C33.4069 24.0292 34.1253 23.3176 34.9917 23.3176C35.858 23.3176 36.5764 24.0292 36.5764 24.8872V34.5983C36.5764 37.926 34.0831 41.3584 30.8924 42.4257L24.1519 44.6442C23.3912 44.8744 22.4403 45 21.5106 45Z"
                      fill="white"
                    />
                    <path
                      d="M41.373 30.3497C40.5066 30.3497 39.7882 29.6381 39.7882 28.78V16.2226C39.7882 15.3645 40.5066 14.6529 41.373 14.6529C42.2393 14.6529 42.9577 15.3645 42.9577 16.2226V28.78C42.9577 29.6381 42.2393 30.3497 41.373 30.3497Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h4>
                  Ta’lim standartlari <br /> va fanlar
                </h4>
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </span>
                <button className="birlashma deepskyblue">Batafsil</button>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <div className="card_img pink">
                  <svg
                    width="49"
                    height="49"
                    viewBox="0 0 49 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M38.2273 15.1716C38.1588 15.1716 38.1132 15.1716 38.0447 15.1716H37.9306C33.6171 15.0349 30.3992 11.709 30.3992 7.6086C30.3992 3.41706 33.8225 0.0228246 37.9991 0.0228246C42.1756 0.0228246 45.599 3.43984 45.599 7.6086C45.5761 11.7318 42.3581 15.0577 38.2501 15.1944C38.2501 15.1716 38.2501 15.1716 38.2273 15.1716ZM37.9991 3.41707C35.694 3.41707 33.8225 5.28505 33.8225 7.58584C33.8225 9.84107 35.5799 11.6635 37.8393 11.7546C37.8621 11.7318 38.0447 11.7318 38.2501 11.7546C40.4639 11.6407 42.1756 9.81829 42.1984 7.58584C42.1984 5.28505 40.327 3.41707 37.9991 3.41707Z"
                      fill="white"
                    />
                    <path
                      d="M38.2506 31.9606C37.3605 31.9606 36.4704 31.8923 35.5804 31.7328C34.6446 31.5734 34.0284 30.685 34.1882 29.751C34.348 28.817 35.238 28.2019 36.1737 28.3614C38.9809 28.8398 41.9478 28.3158 43.9334 26.9946C45.0061 26.2884 45.5766 25.4 45.5766 24.5115C45.5766 23.6231 44.9832 22.7575 43.9334 22.0513C41.9478 20.73 38.9353 20.2061 36.1053 20.7073C35.1696 20.8895 34.2795 20.2517 34.1197 19.3177C33.96 18.3837 34.5762 17.4953 35.5119 17.3358C39.232 16.6752 43.089 17.3814 45.8277 19.2038C47.8361 20.5478 49 22.4613 49 24.5115C49 26.539 47.8589 28.4753 45.8277 29.8421C43.7508 31.2089 41.0578 31.9606 38.2506 31.9606Z"
                      fill="white"
                    />
                    <path
                      d="M10.7723 15.1716C10.7494 15.1716 10.7266 15.1716 10.7266 15.1716C6.61857 15.0349 3.4006 11.709 3.37777 7.60855C3.37777 3.41701 6.80115 0 10.9777 0C15.1542 0 18.5776 3.41702 18.5776 7.58578C18.5776 11.709 15.0768 15.0349 10.9688 15.1716C10.9231 15.1716 10.8179 15.1716 10.7723 15.1716ZM11.0104 11.7773C11.1474 11.7773 11.2458 11.7773 11.3885 11.7773C13.4197 11.6862 15.1998 9.86378 15.1998 7.60855C15.1998 5.30776 13.3284 3.43978 11.0233 3.43978C8.71824 3.43978 6.84679 5.30776 6.84679 7.60855C6.84679 9.841 8.5813 11.6406 10.7951 11.7773C10.8179 11.7545 10.9191 11.7773 11.0104 11.7773Z"
                      fill="white"
                    />
                    <path
                      d="M10.7494 31.9606C7.94223 31.9606 5.24917 31.2089 3.17233 29.8421C1.16395 28.4981 0 26.5618 0 24.5115C0 22.4841 1.16395 20.5478 3.17233 19.2038C5.91103 17.3814 9.76803 16.6752 13.4881 17.3358C14.4238 17.4953 15.04 18.3837 14.8803 19.3177C14.7205 20.2517 13.8304 20.8895 12.8947 20.7073C10.0647 20.2061 7.07498 20.73 5.0666 22.0513C3.99394 22.7575 3.42337 23.6231 3.42337 24.5115C3.42337 25.4 4.01676 26.2884 5.0666 26.9946C7.05215 28.3158 10.0191 28.8398 12.8262 28.3614C13.762 28.2019 14.652 28.8398 14.8118 29.751C14.9716 30.685 14.3554 31.5734 13.4196 31.7328C12.5296 31.8923 11.6395 31.9606 10.7494 31.9606Z"
                      fill="white"
                    />
                    <path
                      d="M24.5338 32.1883C24.4653 32.1883 24.4197 32.1883 24.3512 32.1883H24.2371C19.9236 32.0517 16.7057 28.7258 16.7057 24.6253C16.7057 20.4338 20.129 17.0396 24.3056 17.0396C28.4821 17.0396 31.9054 20.4566 31.9054 24.6253C31.8826 28.7485 28.6647 32.0744 24.5566 32.2111C24.5566 32.1883 24.5566 32.1883 24.5338 32.1883ZM24.3056 20.4338C22.0005 20.4338 20.129 22.3018 20.129 24.6026C20.129 26.8578 21.8864 28.6802 24.1458 28.7713C24.1686 28.7486 24.3512 28.7486 24.5566 28.7713C26.7704 28.6574 28.4821 26.835 28.5049 24.6026C28.5049 22.3246 26.6335 20.4338 24.3056 20.4338Z"
                      fill="white"
                    />
                    <path
                      d="M24.5338 49C21.7951 49 19.0564 48.2938 16.9339 46.8587C14.9255 45.5147 13.7616 43.6011 13.7616 41.5509C13.7616 39.5235 14.9027 37.5644 16.9339 36.2204C21.2017 33.3956 27.8887 33.3956 32.1337 36.2204C34.1421 37.5644 35.306 39.4779 35.306 41.5281C35.306 43.5556 34.1649 45.5147 32.1337 46.8587C30.0112 48.2711 27.2725 49 24.5338 49ZM18.8282 39.0907C17.7555 39.7969 17.1849 40.6853 17.1849 41.5737C17.1849 42.4621 17.7783 43.3278 18.8282 44.034C21.9092 46.1069 27.1356 46.1069 30.2166 44.034C31.2892 43.3278 31.8598 42.4394 31.8598 41.5509C31.8598 40.6625 31.2664 39.7969 30.2166 39.0907C27.1584 37.0177 21.932 37.0405 18.8282 39.0907Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h4>Dual ta’lim</h4>
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </span>
                <button className="birlashma pink">Batafsil</button>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <div className="card_img yellow">
                  <img src={worls} alt="rasm" />
                </div>
                <h4>WorlsSkills</h4>
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </span>
                <button className="birlashma yellow">Batafsil</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;