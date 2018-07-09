# 💎Project Name💎
    延陵荟互助系统


# 💎Get Started💎
1)💄 npm install (安装依赖包)

2)💄npm run start (一键启动, npm i concurretly -g   ) 
  

# 🧠使用TypeScript开发🧠
1) 👶🏻npm install typescript -g 
2) 👶🏻npm link typescript
3) 👶🏻(自动编译ts文件到  YangLingHui/scr/js ) 参考reg.ts & reg.html
4) 👶🏻Typescript自动打包,新页面需要在 ./ts/server/devOption.js & devOption.ts & 里配置


# 💎Notice💎
😀直接导入样式,无需在HTML页面中导入 😀
```typescript
@Component({styleUrls:["./css/reg.css","./css/bula bula...css"]})
class Reg extends Template  implements Page {
    htmlTitle: string;
    title: string;
    constructor() {}
}
new Reg;
```


# Authors                 Roles                   Accomplishment                     Email 
@🍍Noberk         Frond-end web     已完成页面数量5💛️      noberkli@gmail.com <Br/>
@🥇产百海           Frond-end web     已完成页面数量7💚                                            <Br/>
@🏅Michelle       Frond-end web     已完成页面数量0❤️
                                                                    
# 💎设计稿目录💎
docs/YanLingHui/UX design





#首页
1  求学 就医 就业 相亲    根据热度来排序
2 首页轮播10位老专家
3 找名医 求帮助.删除, 改为 发布任务入口.

# 发布任务页面 
任务行业:    求学 就医 就业 相亲 其他 追加
3 任务长期未完成, 如何显示?   

# 任务大厅 
 +行业分类  筛选条件

# 提示框
 http://cf.ningl.cn/XM13.htm?gzid=w4#buy 