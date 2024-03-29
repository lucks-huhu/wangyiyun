import request from "@/utils/request";
import qs from "qs";

// 获取二维码的key
export const getQcKeyApi = (params) => {
  return request({
    url: "/login/qr/key",
    method: "get",
    params,
  });
};

// 通过二维码的key获取二维码
export const getQcApi = (params) => {
  return request({
    url: "/login/qr/create?" + qs.stringify(params),
    method: "get",
  });
};

// 二维码扫码的状态转换信息
export const getQcStateApi = (params) => {
  return request({
    url: "/login/qr/check?" + qs.stringify(params),
    method: "get",
  });
};

// 通过二维码的传递过来的cookie获取用户的信息
export const getUserInfoApi = (params) => {
  return request({
    url: "user/account?" + qs.stringify(params),
    method: "get",
  });
};

// 通过手机号密码登录
export const loginByNumApi = (params) => {
  return request({
    url: "/login/cellphone?" + qs.stringify(params),
    method: "get",
  });
};

// 退出登录
export const outLoginApi = (params) => {
  return request({
    url: "/logout?" + qs.stringify(params),
    method: "get",
  });
};
