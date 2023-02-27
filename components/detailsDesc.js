import { View, Text } from "react-native";
import React, { useState } from "react";

import { EthPrice, NftTitle } from "./subInfo";
import { COLORS, SIZES, FONTS } from "../constants";

function DetailsDesc({ data }) {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);

  const handleReadMore = () => {
    if (!readMore) {
      setText(data.description);
      setReadMore(true);
    } else {
      setText(data.description.slice(0, 100));
      setReadMore(false);
    }
  };

  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NftTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
        <EthPrice price={data.price} />
      </View>
      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View style={{ marginTop: SIZES.base }}>
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              color: COLORS.secondary,
              lineHeight: SIZES.large,
            }}
          >
            {text}
            {!readMore && "..."}
            <Text
              onPress={handleReadMore}
              style={{
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
                color: COLORS.primary,
              }}
            >
              {readMore ? "Show Less" : "Read More"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
}

export default DetailsDesc;