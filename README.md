## install

npm i vue-ui-box

## use

```html
<ui-box title="Box DEMO" :toggle="true" id="test">
  box content
</ui-box>
```

example app

```js
import UIBox from 'vue-ui-box'
Vue.use(UIBox)
```

## screenshot
![box screen](demo/screenshot/ui-box.png)

### ui-box properties
| Name   | Type  | Required | Default | Description |
| ------ |:-----:| :---------:| --------|:---------|
| title | String | false  |        | box title |
| id | String | false  |       | id, need if toggle box enabled|
| toggle | Boolean| false  | false      | toggle box enabled |

### ui-box events
| Name   | params | Description |
| ------ |:-----:|:---------|
| open |   |  when opening the box|
| close |   |  when closing the box|
