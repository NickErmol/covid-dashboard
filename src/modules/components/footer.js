import Element from './helpers/element';
import RSLogo from '../../assets/rs_school_js.png';

export default class Header extends Element {
  constructor(elem, id) {
    super(elem, id);
    this.init();
  }

  init() {
    this.element.classList.add('container-fluid', 'mt-2');
    this.element.innerHTML = `
      <div class="row mt-2">
        <div class="col-4 d-flex align-items-center">
          <a class="footer__logo" href="https://rs.school/js/" _target="_blank"><img class="footer__image" src=${RSLogo} alt="RS School Logo" class="img-fluid"></a>
        </div>
        <div class="col-4 d-flex align-items-center justify-content-center">
          <span class="footer__year fs-4">2020</span>
        </div>
         <div class="ref-container col-4 d-flex align-items-center justify-content-end">
            <a class="footer__author link-success me-1" href="https://github.com/NickErmol" target = '_blank'>@NIck_ermol</a>
         </div>
      </div>
    `;
  }
}
