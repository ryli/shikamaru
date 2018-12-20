import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import RendererWrapper0 from '/Users/x/context/react/shikamaru/src/pages/.umi/LocaleWrapper.jsx'

let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: "layouts__index" */'../../layouts/index.js'), loading: require('/Users/x/context/react/shikamaru/src/components/Loading.js').default }),
    "routes": [
      {
        "path": "/404",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: "p__404" */'../404.js'), loading: require('/Users/x/context/react/shikamaru/src/components/Loading.js').default }),
        "_title": "default title",
        "_title_default": "default title"
      },
      {
        "path": "/",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: "p__index" */'../index.js'), loading: require('/Users/x/context/react/shikamaru/src/components/Loading.js').default }),
        "_title": "default title",
        "_title_default": "default title"
      },
      {
        "path": "/posts/:id",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: "p__posts__$id" */'../posts/$id.js'), loading: require('/Users/x/context/react/shikamaru/src/components/Loading.js').default }),
        "_title": "default title",
        "_title_default": "default title"
      },
      {
        "path": "/users/constants",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: "p__users__constants" */'../users/constants.js'), loading: require('/Users/x/context/react/shikamaru/src/components/Loading.js').default }),
        "_title": "default title",
        "_title_default": "default title"
      },
      {
        "path": "/users",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: "p__users__index" */'../users/index.js'), loading: require('/Users/x/context/react/shikamaru/src/components/Loading.js').default }),
        "_title": "default title",
        "_title_default": "default title"
      },
      {
        "component": () => React.createElement(require('/Users/x/context/react/shikamaru/node_modules/_umi-build-dev@1.2.7@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false }),
        "_title": "default title",
        "_title_default": "default title"
      }
    ],
    "_title": "default title",
    "_title_default": "default title"
  },
  {
    "component": () => React.createElement(require('/Users/x/context/react/shikamaru/node_modules/_umi-build-dev@1.2.7@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false }),
    "_title": "default title",
    "_title_default": "default title"
  }
];
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

export default function() {
  return (
<RendererWrapper0>
          <Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
        </RendererWrapper0>
  );
}
