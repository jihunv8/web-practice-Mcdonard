const Menu = function (menuName = '', href = '', submenu = []) {
  this.menuName = menuName;
  this.href = href;
  if (submenu.length > 0) {
    this.submenu = submenu;
  }
};

const headerMenu = [
  new Menu('Menu', '/menu/bugger', [
    new Menu('버거', '/menu/bugger'),
    new Menu('맥런치', '/menu/mc-lunch'),
    new Menu('맥모닝', '/menu/mc-morning'),
    new Menu('해피 스낵', '/menu/happy-snack'),
    new Menu('사이드 & 디저트', '/menu/dessert'),
    new Menu('맥카페 & 음료', '/menu/drink'),
    new Menu('해피밀', '/menu/happy-meal'),
  ]),
  new Menu('Store', '/unimplemented', [
    new Menu('매장찾기', '/unimplemented'),
    new Menu('맥딜리버리', '/unimplemented'),
    new Menu('맥드라이브', '/unimplemented'),
    new Menu('임차문의', '/unimplemented'),
  ]),
  new Menu("What's New", '/unimplemented', [
    new Menu('프로모션', '/unimplemented'),
    new Menu('새로운 소식', '/unimplemented'),
    new Menu('이달의 해피밀', '/unimplemented'),
  ]),
  new Menu('Story', '/unimplemented', [
    new Menu('브랜드 소개', '/unimplemented'),
    new Menu('사회적 책임과 지원', '/unimplemented'),
    new Menu('맥도날드 품질 이야기', '/unimplemented'),
    new Menu('맥도날드 사람들', '/unimplemented'),
  ]),
];

export default headerMenu;
