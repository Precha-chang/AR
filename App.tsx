import {
  Viro360Image,
  ViroARScene,
  ViroARSceneNavigator,
  ViroSkyBox,
  ViroText,
  ViroTrackingReason,
  ViroTrackingStateConstants,
  ViroMaterials,
  Viro3DObject,
  ViroAmbientLight,
  ViroDirectionalLight,
} from "@reactvision/react-viro";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

// ViroMaterials.createMaterials({
//   redMaterial: {
//   diffuseColor: '#FF0000', // กํา หนดสีพื้สี พื้นฐาน พื้ (สีแดง สี )
//   },
//   });

const HelloWorldSceneAR = () => {
  const [text, setText] = useState("Initializing AR...");

  function onInitialized(state: any, reason: ViroTrackingReason) {
    console.log("onInitialized", state, reason);
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setText("Hello World!");
    } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
      // Handle loss of tracking
    }
  }

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      {/* <ViroSkybox 
        source={{
          px: require('./res/sky.jpg'),
          nx: require('./res/skybox_nx.jpg'),
          py: require('./res/skybox_py.jpg'),
          ny: require('./res/skybox_ny.jpg'),
          pz: require('./res/skybox_pz.jpg'),
          nz: require('./res/skybox_nz.jpg'),
        }}
      /> */}
        <Viro360Image source={require("./res/sky360.jpg")} />
      <ViroText 
          text="Precha Chainara" 
          position={[0, 0, -3]} 
          style={styles.helloWorldTextStyle}
        />
        <ViroText 
          text="Praewpan Sukkasem" 
          position={[3, 0, -3]} 
          style={styles.helloWorldTextStyle}
        />


      {/* <Viro3DObject
        source={require('./res/abcd.obj')}
        position={[0, 0, -1]}
        scale={[0.1, 0.1, 0.1]}
        materials={['redMaterial']}
        type="OBJ"
        /> */}
        {/* <Viro3DObject
  source={require('./res/abcd.obj')} // โมเดล 3 มิติมิ ติ
  resources={[require('./res/Gorillatext.png'),
  require('./res/Gorilla.mtl')]} // ไฟล์พื้ล์ พื้นพื้ ผิวและไฟ ผิ ล์ MTL ล์
  position={[0, 0, -1]} // ตํา แหน่งใน AR Scene
  scale={[0.1, 0.1, 0.1]} // ขนาดของโมเดล
  type="OBJ" // ประเภทของโมเดล (OBJ หรือรื GLTF)
  /> */}
    {/* <ViroAmbientLight color="#FFFFFF" intensity={500} />
    <ViroDirectionalLight
  color="#FFFFFF"
  direction={[0, -1, -0.5]} // แสงจากด้านบน
  castsShadow={true}
/>
    <Viro3DObject
  source={require('./res/dragon.glb')}
  position={[-3, -2, -8]} // Dragon อยู่ทางซ้ายและลึกกว่า
  scale={[0.15, 0.15, 0.15]} // ขนาดใหญ่กว่าเล็กน้อย
  rotation={[0, 30, 0]} // หมุนเล็กน้อยเพื่อให้ดูสมจริง
  transformBehaviors={["billboard"]}
  type="GLB"
/>      

<Viro3DObject
  source={require('./res/cat.glb')}
  position={[3, -3, -12]} // Cat อยู่ทางขวาและลึกกว่า Dragon
  scale={[0.1, 0.1, 0.1]} // ขนาดเล็กกว่า Dragon
  rotation={[0, -30, 0]} // หมุนเล็กน้อยในทิศตรงข้าม
  transformBehaviors={["billboard"]}
  type="GLB"
/> */}

 
    </ViroARScene>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: { flex: 1 },
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
  },
});
