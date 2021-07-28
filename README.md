# iView Table组件空数据时可用slot模板

> ETable 全称为 Extend-Table

## 使用方法

1. 复制 `ETable` 文件夹及内容到自己项目中。

2. 在要使用的页面上引入组件（路径根据自己情况修改）：
```js
import ETable from "@/components/ETable";
```

3. 在 页面的 `components` 中注册组件：
```jd
... 
components: {
    ...
    ETable
},
... 
```

4. 在 `slot="noDataTem"` 插槽中添加自己的模板，其他方法和 `Table` 组件相同，并且兼容原有的 `no-data-text` 属性，只是优先级比插槽低：
```html
<ETable :columns="columns" :data="data">
    <template slot="noDataTem">
        <div style="margin:60px">
            <div><Icon type="ios-filing-outline" size="50"/></div>
            <p>暂无数据<a href="#">点击添加</a> </p>
        </div>
    </template>
</ETable>
```

5. 效果图：
![Image text](https://raw.githubusercontent.com/zeronexxx/ETable/master/images/example.jpg)

## 闭坑
旧版本iView需要修改 `ETable/index.js` 文件：
```js
import { Table } from 'view-design';
// 改为
import { Table } from 'iview';
```
