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
import { Divider, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function Footer(props) {
  const { overrides, ...rest } = props;
  const poweredByAWSOnClick = useNavigateAction({
    type: "url",
    url: "https://aws.amazon.com/what-is-cloud-computing",
  });
  return (
    <Flex
      gap="0"
      direction="column"
      width="704px"
      height="222px"
      justifyContent="space-between"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="30px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Footer")}
      {...rest}
    >
      <Flex
        gap="30px"
        direction="row"
        width="unset"
        height="96px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Top")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="1131px"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "Content")}
        >
          <Text
            fontFamily="Roboto"
            fontSize="28px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.13px"
            width="197px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="My Retail Store"
            {...getOverrideProps(overrides, "RetailDemoStore")}
          ></Text>
          <Divider
            height="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            orientation="vertical"
            {...getOverrideProps(overrides, "Divider")}
          ></Divider>
          <Image
            width="200px"
            height="72px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src="https://d0.awsstatic.com/logos/powered-by-aws.png"
            className="clickable"
            onClick={() => {
              poweredByAWSOnClick();
            }}
            {...getOverrideProps(overrides, "PoweredByAWS")}
          ></Image>
        </Flex>
      </Flex>
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="96px"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Bottom")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="&#xA;The Retail Demo Store is a demo application. All content displayed in the Retail Demo Store is fictitious and for demonstration purposes only.&#xA;"
          {...getOverrideProps(overrides, "Photo")}
        ></Text>
        <Text
          fontFamily="Roboto"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="All images shown are from Unsplash. "
          {...getOverrideProps(overrides, "Reserved")}
        ></Text>
      </Flex>
    </Flex>
  );
}
