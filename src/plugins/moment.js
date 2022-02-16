const moment = require('moment');
import Vue from 'vue'
import VueMoment from 'vue-moment';

Vue.prototype.$moment = function () {
    return moment;
}

window.moment = moment;

Date.prototype.addHours = function(h) {
this.setTime(this.getTime() + (h*60*60*1000));
return this;
}

Vue.use(VueMoment, {moment})