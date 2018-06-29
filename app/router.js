import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('viewdash');
  this.route('viewcards');
  this.route('editdash',{path:'/editdash/:dashbd_id'});
  this.route('editcard',{path:'/editcard/:card_id'});
  this.route('cards');
  this.route('dashboard');
  this.route('relations');
  this.route('select');
});

export default Router;
