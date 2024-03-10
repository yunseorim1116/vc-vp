import configLocal from "./config.local";
import configProduction from "./config.production";

// 클라이언트에서는 이 함수를 사용하여 config 값을 참조합니다.
const Config = () => {
  switch (process.env.NEXT_PUBLIC_RUN_MODE) {
    case "local":
      return configLocal;
    case "production":
      return configProduction;
    default:
      return configLocal;
  }
};

export default Config;
