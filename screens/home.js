import { useState } from "react";
import { View, SafeAreaView, FlatList } from "react-native";

import { COLORS, NFTData } from "../constants";
import { NftCard, HomeHeader, FocusedStatusBar } from "../components";

function Home() {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value) => {
    if (!value.length) return setNftData(NFTData);

    const filteredNftData = nftData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredNftData.length) {
      setNftData(filteredNftData);
    } else {
      setNftData(NFTData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroud={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            style={{ zIndex: 0 }}
            data={nftData}
            renderItem={({ item }) => <NftCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <View style={{ height: 300, backgroundColor: COLORS.primary }}></View>
        <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
