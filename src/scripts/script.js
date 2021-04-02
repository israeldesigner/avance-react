/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable no-shadow */
import $ from 'jquery';

(function ($) {
  $(document).ready(() => {
    const loadPage = () => {
      $('#loader-wrapper').fadeOut();
    };
    loadPage();
    console.log('testando');
    const $body = $('body');
    $(document).on('click', '.side-panel-trigger', () => {
      $body.toggleClass('side-panel-open');
      if ($body.hasClass('device-touch')) {
        $body.toggleClass('ohidden');
      }
      return false;
    });

    $(document).on('click', ' .body-overlay', () => {
      $body.toggleClass('side-panel-open');
      return false;
    });

    $('.has-side-panel .body-overlay').click(() => {
      $body.toggleClass('side-panel-open');
      return false;
    });
  });
}($));
