import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import RendererWrapper0 from '/Users/x/context/react/shikamaru/src/pages/.umi/LocaleWrapper.jsx'

let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/",
    "exact": true,
    "component": dynamic({ loader: () => import(/* webpackChunkName: "p__index__index" */'../index/index.js'), loading: require('/Users/x/context/react/shikamaru/src/components/Loading.js').default }),
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
    "component": () => React.createElement(require('/Users/x/.nvm/versions/node/v8.11.2/lib/node_modules/umi/node_modules/_umi-build-dev@1.2.7@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false }),
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
