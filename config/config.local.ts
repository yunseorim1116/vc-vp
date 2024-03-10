import getConfigs from "./config.common";

// 환경마다 달라져야 할 변수, 값들을 정의합니다. (여기는 local 환경에 맞는 값을 지정합니다.)
const baseUrl = "http://localhost:3000";
const mode = "local";

// 환경마다 달라져야 할 값들을 getConfig 함수에 전달합니다.
const configLocal = getConfigs({
  baseUrl,
  mode,
});

export default configLocal;
