export const Header = function (title: string) {
          return target => { target.title = title }
  }
  export const Component = function (inventory: { styleUrls: string[] }) {
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