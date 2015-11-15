import AppMap from "can-ssr/app-map";
import route from "can/route/";
import 'can/map/define/';
import 'can/route/pushstate/';

const AppViewModel = AppMap.extend({
  define: {
    title: {
      value: 'place-my-order',
      serialize: false
    }
  }
});

route(':page', { page: 'home'});
route(':page/:slug', { slug: null });
route(':page/:slug/:action', { slug: null, action: null });

export default AppViewModel;
