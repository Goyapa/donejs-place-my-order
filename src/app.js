import AppMap from "can-ssr/app-map";
import route from "can/route/";
import 'can/map/define/';
import 'can/route/pushstate/';
import Restaurant from './models/restaurant';

const AppViewModel = AppMap.extend({
  define: {
    title: {
      value: 'place-my-order',
      serialize: false
    }
  }
});

/*
* To test the connection you can temporarily add the following
* After reloading the homepage you should see the restaurant information logged in the console.
 */
//Restaurant.getList({}).then(restaurants => console.log(restaurants.attr()));

route(':page', { page: 'home'});
route(':page/:slug', { slug: null });
route(':page/:slug/:action', { slug: null, action: null });

export default AppViewModel;
