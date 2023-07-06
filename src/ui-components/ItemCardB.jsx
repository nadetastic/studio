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
import { Flex, Image, Rating, Text } from "@aws-amplify/ui-react";
export default function ItemCardB(props) {
  const { product, overrides, ...rest } = props;
  const imageOnClick = useNavigateAction({
    type: "url",
    url: `${"/product/"}${product?.id}`,
  });
  const titleOnClick = useNavigateAction({
    type: "url",
    url: `${"/product/"}${product?.id}`,
  });
  return (
    <Flex
      gap="0"
      direction="column"
      width="250px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ItemCardB")}
      {...rest}
    >
      <Image
        width="250px"
        height="150px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={product?.image}
        className="clickable"
        onClick={() => {
          imageOnClick();
        }}
        {...getOverrideProps(overrides, "Image")}
      ></Image>
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="15px 15px 15px 5px"
        {...getOverrideProps(overrides, "Details")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="235px"
          height="49px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          className="clickable"
          children={product?.name}
          onClick={() => {
            titleOnClick();
          }}
          {...getOverrideProps(overrides, "Title")}
        ></Text>
        <Rating
          width="unset"
          height="unset"
          shrink="0"
          size="small"
          value={product?.rating}
          maxValue={5}
          {...getOverrideProps(overrides, "Rating")}
        ></Rating>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"$"}${product?.price}`}
          {...getOverrideProps(overrides, "Price")}
        ></Text>
      </Flex>
    </Flex>
  );
}
