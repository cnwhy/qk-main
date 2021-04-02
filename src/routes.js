const home_route = require('./pages/home/routes');
const route = [
    ...home_route,
    // {
    //              path: '/app1',
    //              microApp: 'app1',
    //            },
]
const routes = [
    {
        path: '/',
        component: '@/layouts/index',
        routes: [
          {
              exact: true,
              path: '/',
              redirect: '/home'
          },
          ...route
        ]
    }
]
module.exports = routes;
