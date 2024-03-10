export declare namespace ICommonConfig {
  export type Mode = "local" | "production";

  export interface Params {
    baseUrl: string;
    mode: Mode;
  }
}

// local, development, production 과 관계없이 동일한 값으로 반환되는 부분은 해당 함수의 return 되는 부분만 수정하면 됩니다. (달라져야 하는 값이 아닌, 같은 값에 대해서는 local, development, production 파일을 모두 수정할 필요가 없어지게 됩니다.)
export default function getConfigs(params: ICommonConfig.Params) {
  // local, development, production 마다 달라지는 값
  const { baseUrl, mode } = params;

  // 공통으로 반환되는 구조
  return {
    baseUrl,
    mode,

    api: {
      // ...
    },
  };
}
