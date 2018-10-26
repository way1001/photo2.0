import http from '../http'

// 获取加密key
export const getKey = (params) => {
  let config = {
    url: "/api/admin/login/getAesKey",
    method: "POST",
    data: params
  }
  return http(config).then(res => {
    return res.data;
  }).catch(err => {
    return err;
  })
}

// 登录
export const login = (params) => {
  let config = {
    url: "/api/admin/login",
    method: "POST",
    data: params
  }
  return http(config).then(res => {
    return res.data;
  }).catch(err => {
    return err;
  })
}

// 获取文章列表
export const getArticleList = (params) => {
  let config = {
    url: "/api/admin/index/getArticleList",
    method: "POST",
    data: params
  }
  return http(config).then(res => {
    return res.data;
  }).catch(err => {
    return err;
  })
}

// 获取文章详情
export const getArticle = (params) => {
  let config = {
    url: "/api/admin/index/getArticle",
    method: "POST",
    data: params
  }
  return http(config).then(res => {
    return res.data;
  }).catch(err => {
    return err;
  })
}

// 更新文章
export const updateArticle = (params) => {
  let config = {
    url: "/api/admin/index/updateArticle",
    method: "POST",
    data: params
  }
  return http(config).then(res => {
    return res.data;
  }).catch(err => {
    return err;
  })
}


// 删除文章
export const delArticle = (params) => {
  let config = {
    url: "/api/admin/index/delArticle",
    method: "POST",
    data: params
  }
  return http(config).then(res => {
    return res.data;
  }).catch(err => {
    return err;
  })
}

// 获取文章分类列表
export const getKindList = (params) => {
  let config = {
    url: "/api/admin/index/getKindList",
    method: "POST",
    data: params
  }
  return http(config).then(res => {
    return res.data;
  }).catch(err => {
    return err;
  })
}

export const uploadImgUrl = "http://localhost:8360/common/uploadImg/index";

// 添加文章
export const addArticle = (params) => {
  let config = {
    url: "/api/admin/index/addArticle",
    method: "POST",
    data: params
  }
  return http(config).then(res => {
    return res.data;
  }).catch(err => {
    return err;
  })
}