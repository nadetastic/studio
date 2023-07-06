/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Badge, Flex, Image } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function NavBar(props) {
  const { overrides, ...rest } = props;
  const logoOnClick = useNavigateAction({ type: "url", url: "/" });
  return (
    <Flex
      gap="0"
      direction="column"
      width="1131px"
      height="143px"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NavBar")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="143px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Row")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Left")}
        >
          <Image
            width="134px"
            height="132px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src="https://d1.awsstatic.com/products/AWS-mobile/Mobile-v2/amplify-logo-circle.3c79537237d8ac81726fc61fe5e0c03f288e64ae.png"
            className="clickable"
            onClick={() => {
              logoOnClick();
            }}
            {...getOverrideProps(overrides, "Logo")}
          ></Image>
          <Flex
            gap="20px"
            direction="row"
            width="106px"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Menu")}
          ></Flex>
        </Flex>
        <Flex
          gap="20px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-end"
          alignItems="center"
          overflow="hidden"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="30px 0px 30px 0px"
          {...getOverrideProps(overrides, "Right")}
        >
          <Flex
            gap="10px"
            direction="column"
            width="64px"
            height="100px"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="25px 15px 25px 15px"
            {...getOverrideProps(overrides, "Cart")}
          >
            <Badge
              width="unset"
              height="unset"
              shrink="0"
              size="default"
              variation="default"
              {...getOverrideProps(overrides, "Badge")}
            ></Badge>
            <MyIcon
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              type="shopping_cart"
              {...getOverrideProps(overrides, "ShoppingCart")}
            ></MyIcon>
          </Flex>
          <Flex
            gap="0"
            direction="row"
            width="64px"
            height="64px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Avatar")}
          ></Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
