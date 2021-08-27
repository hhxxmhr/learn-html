// 方式2，将模版直接导入，得到的是函数，只需要穿参数即可
import render from './index.art'

console.log(render({page: '8888'}));