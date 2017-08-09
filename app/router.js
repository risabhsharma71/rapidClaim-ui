import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('home');
  //this.route('application');
  this.route('register');
  this.route('dashboard1');
  this.route('steps');
  this.route('dashboard2');
  this.route('insurerdashboard');
  this.route('examinerdashbord');
  this.route('claimadjdashboard');
  this.route('insurerdashboard2');
  this.route('examinerdashbord2');
  this.route('claimadjdashboard2');
  this.route('pubadjdashboard');
  this.route('pubadjdashboard2');
  this.route('faqs');
  this.route('about');
  this.route('contact');
});

export default Router;
