import Mock from 'mockjs'
import homeApi from './mockServerData/home'

// Mock.mock('/api/home/getData', 'get', function () {
//     // 拦截后的请求处理逻辑
//     console.log('拦截到了');
// })

Mock.mock('/api/home/getData', homeApi.getStatisticalData)