import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Button, CheckBox, Input, Img, Text } from "../../components";

export default function DesktopOnePage() {
  return (
    <>
      <Helmet>
        <title>SmartWalk</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-start w-full py-[38px] bg-gray-300">
        <div className="flex flex-row justify-start items-start w-full mt-[143px] mx-auto max-w-[1342px]">
          <Img src="images/img_screenshot_2.png" alt="screenshottwo" className="w-[54%] z-[1] object-cover" />
          <div className="flex flex-col items-center justify-around w-[49%] mt-3 ml-[-34px] gap-x-2.5 p-[19px] border-blue_gray-100 border-2 border-solid bg-white-A700 rounded-[25px]">
            <Heading size="md" as="h1">
              Welcome to SmartWalk
            </Heading>
            <Text as="p">Please Enter Your Details</Text>
            <div className="flex flex-col items-center justify-start w-[83%] mt-[99px] mb-[5px]">
              <Input type="text" name="userName" placeholder="UserName" className="w-full" />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                suffix={<Img src="images/img_eye.png" alt="Eye" className="w-8 h-8" />}
                className="w-full mt-[75px] gap-[35px]"
              />
              <CheckBox
                name="rememberme"
                label="Remember Me"
                className="flex-row items-end mt-[30px] gap-[7px] mr-[480px] text-left font-bold static"
              />
              <Button className="w-full mt-[85px]">Login</Button>
              <Heading as="h2" className="flex mt-[50px] mr-5">
                <span className="text-black-900 font-medium">New Here?</span>
                <span className="text-black-900"></span>
                <a href="#" className="text-black-900 underline">
                  Create an Account
                </a>
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
