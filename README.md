# cookie.js
Cookie 读写插件

使用方法：
var cookie = Cookies.createCookie(name, value);  //创建新的 cookie ，参数可省略；

cookie.getName();
cookie.setName(name);

cookie.setExpires(date);  //参数 date 为 Date 对象；

可设置参数：name, value, expires, domain, path, secure;

Cookies.getCookie(name);  //返回 cookie;

Cookies.setCookie(cookie);  //设置 cookie, 若存在，则修改，若不存在，则创建新的 cookie;
