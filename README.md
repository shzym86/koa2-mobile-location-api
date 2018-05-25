## Koa2制作手机号码归属地查询API

> 独立的api接口，通过GET方式发起请求，可以直接嵌入任意Koa2项目中。

#### 启动服务

```bash
cd koa2-mobile-location-api
npm install
npm start
```

#### 接口测试

```bash
curl http://localhost:3000/api/mobile?q=13488888888
```

#### API返回值

| 字段名称 | 类型 | 说明 |
|---------|-----|------|
| prefix | string | 手机号码号段 |
| mobile | string | 查询的手机号码 |
| province | string | 归属地省份 |
| city | string | 归属地城市 |
| isp | string | 运营商 |
| code | string | 行政区号 |
| zipcode | string | 邮政编码 |
| types | string | 运营商描述 |

#### 调用示例 - axios

```javascript
axios.get('/api/mobile?q=13488888888')
     .then( res => {
       if(res.data !== 'ERROR'){
         let { mobile, province } = res.data;
         console.log(`手机号${mobile}的归属地为${province}`)
       } else {
         console.log(`手机号输入有误!`)
       }
     })
```

> 数据来源：[https://github.com/openyun/cn-mobile-location](https://github.com/openyun/cn-mobile-location)

