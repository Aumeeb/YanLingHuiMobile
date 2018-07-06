/**组件注入项目参数接口 */
interface Inventory {
          styleUrls: string[];
          selector?: string
}
/** 向一个类中注入一个新的title属性 */
export const Header = (title: string) => {
          return target => { target.title = title }
}
/** 一个可以扩展的注入列表项, 可注入样式,组件,函数等...*/
export const Component = (inventory: Inventory) => {
          return target => {
                    let head = document.getElementsByTagName('head')[0];

                    inventory.styleUrls.forEach(cssUrl => {
                              let link = document.createElement('link');
                              link.type = 'text/css';
                              link.rel = 'stylesheet';
                              link.href = cssUrl;
                              head.appendChild(link);
                    })
          }
}