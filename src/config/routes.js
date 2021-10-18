import { renderNotFound, isInIcestark } from '@ice/stark-app';
import BasicLayout from '@/layouts/BasicLayout';
import StarkBasicLayout from '@/layouts/StarkBasicLayout';

export const constantRoutes = [
  {
    path: '/',
    component: isInIcestark() ? StarkBasicLayout: BasicLayout,
    children: [
      { 
        path: '/', 
        component: () => import('@/pages/Home'),
        exact: true 
      },
      { 
        path: '/list',
        component: () => import('@/pages/List')
      },
      { 
        path: '/detail',
        component: () => import('@/pages/Detail')
      },
      {
        path: '*',
        component: () => renderNotFound(),
      },
    ],
  },
];

export const asyncRoutes = []