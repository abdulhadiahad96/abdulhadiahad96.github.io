import { Suspense, lazy } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import ErrorNotFound from '@/pages/ErrorNotFound';
import ResumePage from "@/pages/ResumePage";

const AppLayout = lazy(() => import('@/components/layouts/AppLayout'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const PortfolioPage = lazy(() => import('@/pages/PortfolioPage'));

export default function AppRouter() {
  const appRoutes = [
    {
      path: '/',
      element: (
        <AppLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </AppLayout>
      ),
      children: [
        {
          element: <AboutPage />,
          index: true
        },
        {
          path: '/portfolio',
          element: <PortfolioPage />
        },
        {
          path: '/resume',
          element: <ResumePage />
        }
      ]
    }
  ];

  const publicRoutes = [
    {
      path: '*',
      element: <ErrorNotFound />
    }
  ]

  const routes = useRoutes([...appRoutes, ...publicRoutes])

  return routes;
}