const fs = require("fs");

module.exports = class extends think.Controller {
  async indexAction() {
    this.header("Access-Control-Allow-Origin", "*");
    let file = this.file("img");
    console.log(file)
    let savepath = think.ROOT_PATH + "/www/static/uploadImg/";
    let filepath = file.path; //文件路径
    let filename = file.name; //文件名
    let suffix = filename.substr(filename.lastIndexOf(".") + 1); //文件后缀
    let newfilename = Math.random().toString(36).substr(2) + "." + suffix;
    //读文件
    let datas = fs.readFileSync(filepath);
    //写文件
    fs.writeFileSync(savepath + newfilename, datas);
    let newpath = "/static/uploadimg/" + newfilename;

    this.success(newpath, "上传成功！")
  }
}