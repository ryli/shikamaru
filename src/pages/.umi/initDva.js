import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});
app.use(require('/Users/x/context/react/shikamaru/node_modules/_dva-immer@0.2.4@dva-immer/lib/index.js').default());
app.model({ namespace: 'example', ...(require('/Users/x/context/react/shikamaru/src/models/example.js').default) });
app.model({ namespace: 'users', ...(require('/Users/x/context/react/shikamaru/src/pages/users/models/users.ts').default) });
