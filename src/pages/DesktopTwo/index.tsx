import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Button, Input, Text } from "../../components";

export default function DesktopTwoPage() {
  return (
    <>
      <Helmet>
        <title>SmartWalk</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="h-[1024px] w-full pr-[82px] py-[82px] bg-gray-300 relative">
        <div className="flex flex-col items-center justify-start w-[46%] bottom-[8%] right-[7%] p-[7px] m-auto border-blue_gray-100 border-2 border-solid bg-white-A700 absolute rounded-[25px]">
          <Heading size="md" as="h1">
            Welcome to SmartWalk
          </Heading>
          <Text as="p">Please Register Yourself</Text>
          <div className="flex flex-col items-start justify-start w-full mt-[60px] mb-[11px] max-w-[509px]">
            <Input type="text" name="userName" placeholder="UserName" className="w-full" />
            <Input type="email" name="email" placeholder="Email Address" className="w-full mt-[46px]" />
            <div className="flex flex-col items-start justify-start w-full mt-[46px]">
              <Heading size="s" as="h2" className="z-[1]">
                Mobile Number
              </Heading>
              <div className="h-[3px] w-full mt-[-3px] bg-black-900" />
            </div>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              suffix={<Img src="images/img_eye.png" alt="Eye" className="w-8 h-8" />}
              className="w-full mt-14 gap-[35px]"
            />
            <Button className="w-full mt-[84px]">Sign Up</Button>
            <Heading as="h3" className="mt-[27px] ml-[86px]">
              <span className="text-black-900 font-medium">Already Registered?</span>
              <span className="text-black-900"></span>
              <a href="#" className="text-black-900 underline">
                Sign In
              </a>
            </Heading>
          </div>
        </div>
        <Img
          src="images/img_screenshot_2_805x731.png"
          alt="screenshottwo"
          className="h-[805px] w-[51%] left-0 top-[9%] m-auto object-cover absolute"
        />
      </div>
    </>
  );
}
