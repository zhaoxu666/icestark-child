import { renderNotFound, isInIcestark } from '@ice/stark-app';
import BasicLayout from '@/layouts/BasicLayout';
import StarkBasicLayout from '@/layouts/StarkBasicLayout';
import Home from '@/pages/Home';
import List from '@/pages/List';
import Detail from '@/pages/Detail';
export const constantRoutes = [
  {
    path: '/',
    component: isInIcestark() ? StarkBasicLayout: BasicLayout,
    children: [
      { 
        path: '/', 
        component: Home,
        exact: true 
      },
      { 
        path: '/list',
        component: List
      },
      { 
        path: '/detail',
        component: Detail
      },
      {
        path: '*',
        component: () => renderNotFound(),
      },
    ],
  },
];

export const asyncRoutes = []