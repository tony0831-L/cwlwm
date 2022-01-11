# 偉倫外賣前端:

## 相關連結:

### 生產環境連結:https://dev.d2435hd77aobnh.amplifyapp.com/

### 設計圖:https://www.figma.com/file/zI0ueZiLzHLhBFmUb4LHof/Untitled?node-id=18%3A116



## 項目概覽:

### a.頁面(views):

​    1.首頁Home.vue(v)

​    2.點進餐廳頁choose.vue (v)

​    3.購物車頁cart.vue (v)

​    4.登入頁login.vue (v)

​    5.個人設定頁 setting.vue (v)

​    6.歷史訂單頁 history.vue (v)

​    7.餐廳管理頁 myRes.vue ( v)

### b.組件(compoents):

​    1.頂部導航欄 navTop.vue

​    2.搜索行 search.vue

​    3.單個餐廳 restarun.vue

​    4.單個餐點 dish.vue

​	5.單個訂單 order.vue

​	6.footer.vue

​	7.單個餐廳 myRes.vue

### c.工具(utils):

​    1.全局事件總線 bus.ts

​    2.取得資料 getInfo.js

​    3.登入/註冊 sign.js

4. 傳送資料 postData.js
5. 刪除資料 del.js

### d.路由表(router):

```javascript
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/login.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import( '../views/cart.vue')
  },
  {
    path:'/rest',
    name: 'rest',
    component: () => import( '../views/choose.vue')
  },
  {
    path:'/regi',
    name: 'regi',
    component: () => import( '../views/regi.vue')
  },
  {
    path:'/setting',
    name: 'setting',
    component: () => import( '../views/setting.vue')
  },
  {
    path:'/myRes',
    name: 'myRes',
    component: () => import( '../views/myRestarun.vue')
  },
  {
    path:'/addRes',
    name: 'addRes',
    component: () => import( '../views/addRes.vue')
  },
  {
    path:'/editRes',
    name: 'editRes',
    component: () => import( '../views/editRes.vue')
  },
  {
    path:'/history',
    name: 'history',
    component: () => import( '../views/history.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

```



## 安裝依賴包
```
npm install
```

### 編譯並執行
```
npm run serve
```

### 編譯並打包
```
npm run build
```
