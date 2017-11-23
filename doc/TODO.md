# 请增加一个index.js文件

# 在这个文件中import所有你做好的组件,并保持这个文件位置不变

# 如 

index.js

```js

import componetA from 'pathA'
import componetB from 'pathB'

export default {
  componetA,
  componetB
}

```

# 目的:方便大家互相引用组件而不用考虑组件文件位置,未来发布npm包这个文件也是必备的