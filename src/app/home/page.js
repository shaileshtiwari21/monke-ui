"use client";
import { useState } from "react";

// import Navbar from "../layouts/Navbar";

import Monke from "../assets/Monke.png";
import Tweet from "../assets/tweet.png";
import Mask from "../assets/mask.png";
import Discord from "../assets/discord.png";
import FilterMonk from "../assets/filterMonk.png";
import MonkeLogo from "../assets/monkLogo.png";
import BgMonk from "../assets/bgmonk.png";
import Union from "../assets/Union.png";
import footerImage from "../assets/image 20.png";
import footerImage1 from "../assets/image 14.png";
import footerImage2 from "../assets/image 24.png";
import footerImage3 from "../assets/image 47.png";
import footerImage4 from "../assets/image 48.png";
import footerImage5 from "../assets/image 49.png";
import footerImage6 from "../assets/image 50.png";
import footerImage7 from "../assets/image 51.png";
import FooterBackgroundImage from "../assets/footerbg.png";
import leftBottom from "../assets/overlay/left-bottom.png";
import middle from "../assets/overlay/middle.png";
import rightBottom from "../assets/overlay/right-bottom.png";
import Mobiledevice from "../assets/Mobiledevice.png";
import Mobiledevice1 from "../assets/Mobiledevice1.png";
import Line from "../assets/line.png";
import Image from "next/image";

const Home = () => {
  const [selectedIndex, setselectedIndex] = useState(0);
  const footerImages = [
    footerImage,
    footerImage1,
    footerImage2,
    footerImage3,
    footerImage4,
    footerImage5,
    footerImage6,
    footerImage7,
  ];
  const divData = [
    {
      text1: "Gen 2",
      text2: "SMB #1741",
      ImageSrc: Monke,
      background: "#F3E9AF",
    },
    {
      text1: "Gen 2",
      text2: "SMB #1741",
      ImageSrc: Monke,
      background: "#F6C298",
    },
    {
      text1: "Gen 2",
      text2: "SMB #1741",
      ImageSrc: Monke,
      background: "#C9B2DE",
    },
    {
      text1: "Gen 2",
      text2: "SMB #1741",
      ImageSrc: Monke,
      background: "#E3E7FD",
    },
    {
      text1: "Gen 2",
      text2: "SMB #1741",
      ImageSrc: Monke,
      background: "#FFF7CE",
    },
    {
      text1: "Gen 2",
      text2: "SMB #1741",
      ImageSrc: Monke,
      background: "#E2D8FE",
    },
    {
      text1: "Gen 2",
      text2: "SMB #1741",
      ImageSrc: Monke,
      background: "#FFF7CE",
    },
  ];

  const divDatamobile = [
    {
      text1: "Gen 1",
      text2: "SMB #1741",
      ImageSrc: footerImage,
      ImageMonke: Monke,

      background: "#F3E9AF",
    },
    {
      text1: "Gen 2",
      text2: "SMB #1742",
      ImageSrc: footerImage1,
      ImageMonke: Monke,

      background: "#F6C298",
    },
    {
      text1: "Gen 3",
      text2: "SMB #1743",
      ImageSrc: footerImage2,
      ImageMonke: Monke,

      background: "#C7B1DE",
    },
    {
      text1: "Gen 4",
      text2: "SMB #1744",
      ImageSrc: footerImage3,
      ImageMonke: Monke,

      background: "#E3E7FD",
    },
    {
      text1: "Gen 5",
      text2: "SMB #1745",
      ImageSrc: footerImage4,
      ImageMonke: Monke,

      background: "#FFF7CE",
    },
    {
      text1: "Gen 6",
      text2: "SMB #1746",
      ImageSrc: footerImage5,
      ImageMonke: Monke,

      background: "#E2D8FE",
    },
    {
      text1: "Gen 7",
      text2: "SMB #1747",
      ImageSrc: footerImage6,
      ImageMonke: Monke,

      background: "#FFF7CE",
    },
    {
      text1: "Gen 8",
      text2: "SMB #1748",
      ImageSrc: footerImage7,
      ImageMonke: Monke,

      background: "#D7EAFF",
    },
  ];
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setSelectedImageIndex(index);

    console.log(index);
  };
  function move(index) {
    let d = footerImage[index];
    console.log(d);
  }
  return (
    <div className="bg-[#FDFBEE]  relative overflow-hidden overflow-y-scroll">
      <Image className="absolute bottom-0" src={leftBottom} />
      <Image className="absolute bottom-0 right-0" src={rightBottom} />
      {/* <Navbar /> */}
      {/* <Ex /> */}
      {/* Mobile Layout */}

      <div className="sm:hidden">
        <div className="flex mt-14 mb-8 px-4 md:px-0">
          <div className="flex-1 font-black text-[#184623]">
            <Image
              src={FilterMonk}
              alt=""
              className="inline-block align-middle mr-1 "
            />{" "}
            MY SMB
          </div>
          <div className="font-black text-[#184623]">Points: 5,000</div>
        </div>

        <div className="flex overflow-x-scroll w-screen ">
          {divDatamobile.map((item, index) => (
            <>
              <Image
                className="ml-2 h-28 w-28"
                src={item.ImageSrc}
                alt="alt"
                onClick={() => {
                  handleImageClick(item.ImageSrc), setselectedIndex(index);
                }}
              />
              {selectedIndex == index && (
                <div
                  style={{ backgroundColor: item.background }}
                  className={`flex-shrink-0 w-32  justify-center flex flex-col  bg-cover bg-no-repeat bg-center pl-4 `}>
                  <p className="text-[#8D95C8]  font-medium">{item.text1}</p>
                  <p className="text-[#8D95C8] text-base font-black">
                    SMB #1741
                  </p>
                </div>
              )}
            </>
          ))}
          {/* <Image
            src={Mobiledevice}
            alt="alt"
            onClick={() => handleImageClick(Mobiledevice)}
          /> */}
        </div>
        <div className="flex justify-center pt-8">
          <Image src={Line} alt="" />
        </div>
      </div>
      {/* end  */}

      <div className=" relative  ">
        <Image
          src={Union}
          alt="Watermark"
          className="absolute w-full top-[140px] right-4"
        />
        <div className="flex flex-col max-w-[1030px] mx-auto   mt-20">
          <div className=" md:flex  opacity-95 ">
            {/* Image */}
            <div className="flex justify-center">
              <Image
                src={selectedImage ? selectedImage : footerImage3}
                alt="Sample Image"
                className={
                  " h-[340px] w-[340px] md:w-full md:h-[450px] rounded-lg flex"
                }
              />
            </div>

            {/* Text */}
            <div>
              <div className=" p-4 bg-white relative h-full">
                <Image
                  style={{
                    position: "absolute",
                    right:-30,
                    bottom: -26,
                  }}
                  className=""
                  src={middle}
                />

                <div className="">
                  <Image src={BgMonk} alt="" className="absolute bottom-0 " />
                </div>

                <div className="flex">
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-[#184623]  ">
                      Gen 3
                    </h2>
                    <h2 className="text-xl  mb-1 text-[#184623] font-black ">
                      SMB #1741
                    </h2>

                    <h2 className="text-sm  mb-2 text-[#184623] font-medium ">
                      Multiplier: 1x
                    </h2>
                  </div>
                  <div className="">
                    <Image src={Monke} alt="" className="h-14 w-14" />
                  </div>
                </div>
                <hr style={{ borderColor: "#F5F5F5" }} />
                <div className="flex gap-4 p-3">
                  <p className="font-semibold text-[#184623] cursor-pointer">
                    All Task (5)
                  </p>
                  <p className="font-normal text-[#AAAAAA] cursor-pointer">
                    Completed
                  </p>
                </div>
                <hr style={{ borderColor: "#F5F5F5" }} />
                {/* inner content  */}
                <div className="flex">
                  <div className="flex-1 p-4">
                    <p className="font-medium text-[#184623]">
                      <Image
                        src={Tweet}
                        alt="logo"
                        className="inline-block align-middle mr-1"
                      />{" "}
                      Twitter PFP
                    </p>
                    <p className="font-normal text-[#AAAAAA]">
                      User is awarded for using NFT as Twitter
                    </p>
                  </div>
                  <div className="p-4 font-bold text-[#184623] flex items-center">
                    <Image
                      src={MonkeLogo}
                      alt="Image"
                      className="inline-block align-middle mr-2"
                    />
                    200 Points
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-1 p-4">
                    <p className="font-medium text-[#184623]">
                      <Image
                        src={Discord}
                        alt="logo"
                        className="inline-block align-middle mr-1"
                      />{" "}
                      Discord Reaction
                    </p>
                    <p className="font-normal text-[#AAAAAA]">
                      User is awarded for Reacting to the latest annoucement
                    </p>
                  </div>
                  <div className="p-4 font-bold text-[#68846E] flex items-center">
                    <Image
                      src={FilterMonk}
                      alt=""
                      className="inline-block align-middle mr-2 "
                    />
                    200 Points
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-1 p-4">
                    <p className="font-medium text-[#184623] ">
                      <Image
                        src={Tweet}
                        alt="logo"
                        className="inline-block align-middle mr-1"
                      />{" "}
                      Twitter PFP
                    </p>
                    <p className="font-normal text-[#AAAAAA]">
                      User is awarded for using NFT as Twitter
                    </p>
                  </div>
                  <div className="p-4 font-bold text-[#68846E] flex items-center">
                    <Image
                      src={FilterMonk}
                      alt=""
                      className="inline-block align-middle mr-2"
                    />
                    200 Points
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* footer images */}

          <div className="hidden sm:block">
            <div className="flex mt-14 mb-8 px-4 md:px-0">
              <div className="flex-1 font-black text-[#184623]">
                <Image
                  src={FilterMonk}
                  alt=""
                  className="inline-block align-middle mr-1 "
                />{" "}
                MY SMB
              </div>
              <div className="font-black text-[#184623]">Points: 5,000</div>
            </div>

            {/* <div className="flex">
              {divData.map((item, index) => (
                <>
              
                </>
              ))}
            </div> */}

            <div className="flex justify-center mx-8">
              {divDatamobile.map((item, index) => (
                <>
                  <div className="flex flex-col">
                    <div
                      key={index}
                      className={`footer  ${
                        selectedImageIndex !== index && "opacity-0 "
                      } px-2 py-2 flex `}
                      style={{
                        // backgroundImage: `url(${FooterBackgroundImage})`,
                        background: item.background,
                      }}>
                      <div>
                        <p className="font-medium text-[#8D95C8]">
                          {item.text1}
                        </p>
                        <p className="font-black text-sm text-[#8D95C8]">
                          {item.text2}
                        </p>
                      </div>
                      <div>
                        <Image
                          src={item.ImageMonke}
                          alt=""
                          className="h-6 w-6"
                        />
                      </div>
                    </div>
                    <Image
                      src={item.ImageSrc}
                      alt="alt"
                      key={index}
                      onClick={() => handleImageClick(item.ImageSrc, index)}
                      style={{
                        backgroundImage: `url(${FooterBackgroundImage})`,
                      }}
                      className={`  md:w-[130px] `}
                    />
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
