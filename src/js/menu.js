/*!
 * Carousel Menu
 */
(function() {

  'use strict';

  function menuFlyout(element) {
    this.elem = element;
    this._init(element);
  }

  menuFlyout.prototype._init = function(element) {

    this.closeHandle = $(
      '<li class="menu-item mobile-nav-back"><a>Back</a></li>'
    );
    
    this.openHandle = this.elem.find('.nav-button');
    this.subMenuElem = element.querySelector('.menu');
    this.parentMenuElem = element.closet('.menu');

    // Arrow Function - Check Support
    this.openHandle
      .on('click', function(e) {
        e.preventDefault();
        this.elem.addClass('menu-item--open');
        this.elem
          .parents('.navigation')
          .addClass('navigation--open-flyout');
        this.subMenuHeight =
          'height: ' + this.subMenuElem[0].offsetHeight + 'px;';

        // set height
        this.parentMenuElem[0].setAttribute('style', this.subMenuHeight);
      })
      .bind(this);

    // Arrow Function - Check Support -> attach event before printing
    this.closeHandle
      .on('click', function(e) {
        e.preventDefault();
        this.elem.removeClass('menu-item--open');

        // remove height
        this.parentMenuElem[0].setAttribute('style', '');

        this.elem
          .parents('.navigation')
          .removeClass('navigation--open-flyout');
      })
      .bind(this);

    $(this.subMenuElem).prepend(this.closeHandle);
  };

  /**
   * Menu - Open / Close Button
   */

  const hamburger = document.querySelector('.open__menu');

  hamburger.addEventListener('click', function(event) {
    
    $('body').toggleClass('menu--is-open');
    
    event.target.toggleClass('is-active');

    event.preventDefault();
  });

  /**
   * Menu - Flyout Initialization
   */

  const target = document.getELementById('#mobile-nav')
  var flyout = new menuFlyout(target);

})();
