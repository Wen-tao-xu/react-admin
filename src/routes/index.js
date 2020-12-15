import loadable from '@/utils/loadable'

const Index = loadable(() => import(/* webpackChunkName: 'index' */ '@/views/Index/Index.jsx'))

const routes = [
  {
    path: '/index',
    extact: true,
    name: 'Index',
    component: Index,
    auth: [1]
  }
]

export default routes;