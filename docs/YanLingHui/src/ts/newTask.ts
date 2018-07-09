
import { Template, ROUTER } from "./template";
import { Header } from "./utils/decorators";

@Header("新建任务")
class NewTask extends Template   {
    constructor() {
        super();
        this.render(this.headerWithUrl({ title: NewTask.title, url: ROUTER.ROOT }));
        
    }
    
}
new NewTask;
// 图片上传预览图
var anyTypeWindow: any = window;
let input = document.getElementById("upload_image");
console.log(input);
let img:any = document.getElementById("preview_img");
input.onchange = function () {
    let _this:any = this;
    let ifles = _this.files[0];;
    let src = getObjectURL(ifles);
    img.src = src;
    img.onload = function () {
        this.style.display = "inline-block";
    }
}


function getObjectURL(file) {
    var url = null;
    if (anyTypeWindow.createObjectURL != undefined) {
        // basic 
        url = anyTypeWindow.createObjectURL(file);
    } else if (window.URL != undefined) {
        // mozilla(firefox) 
        url = window.URL.createObjectURL(file);
    } else if (anyTypeWindow.webkitURL != undefined) {
        // webkit or chrome 
        url = anyTypeWindow.webkitURL.createObjectURL(file);
    }
    return url;
}