import buggerBackground from '../../../images/menu/bg_visual_menu01.jpg';
import mcLunchBackground from '../../../images/menu/bg_visual_menu02.jpg';
import mcMorningBackground from '../../../images/menu/bg_visual_menu03.jpg';
import happySnackBackground from '../../../images/menu/bg_visual_menu04.jpg';
import dessertBackground from '../../../images/menu/bg_visual_menu05.jpg';
import drinkBackground from '../../../images/menu/bg_visual_menu06.jpg';
import happyMealBackground from '../../../images/menu/bg_visual_menu07.jpg';

const categoryList = {
  bugger: {
    title: '버거',
    description:
      '빅맥®에서 맥스파이시® 상하이 버거 까지, \n 주문 즉시 바로 조리해 더욱 맛있는, 맥도날드의 다양한 버거를 소개합니다.',
    image: buggerBackground,
  },
  'mc-lunch': {
    title: '맥런치',
    description:
      '오전 10시 30분부터 오후 2시까지\n점심만의 특별한 할인으로 맥런치 세트를 즐겨보세요!',
    image: mcLunchBackground,
  },
  'mc-morning': {
    title: '맥모닝',
    description:
      '새벽 4시부터 오전 10시 30분까지\n갓 구워내 신선한 맥모닝으로 따뜻한 아침 식사를 챙겨 드세요!',
    image: mcMorningBackground,
  },
  'happy-snack': {
    title: '해피 스낵',
    description: '시즌 별 인기 스낵을 하루종일\n할인 가격으로 만나보세요!',
    image: happySnackBackground,
  },
  dessert: {
    title: '사이드  & 디저트',
    description:
      '가볍게 즐겨도, 버거와 함께 푸짐하게 즐겨도,\n언제나 맛있는 사이드와 디저트 메뉴!',
    image: dessertBackground,
  },
  drink: {
    title: '맥카페 & 음료',
    description: '언제나 즐겁게, 맥카페와 다양한 음료를 부담없이 즐기세요!',
    image: drinkBackground,
  },
  'happy-meal': {
    title: '해피밀',
    description: '맛과 즐거움 모두 해피밀을 통해 느껴보세요!',
    image: happyMealBackground,
  },
};

export const getCategory = (category) => {
  return categoryList[category];
};
