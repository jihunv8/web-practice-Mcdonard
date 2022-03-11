import img1 from './1.png';
import img2 from './2.jpg';
import img3 from './3.png';
import img4 from './4.jpg';
import img5 from './5.png';
import img6 from './6.png';
import img7 from './7.png';
import img8 from './8.png';

export const data = [
  {
    img: img1,
    subTitle: '우리가 엄격해질수록\n버거는 더 맛있어지니까!',
  },
  {
    img: img2,
    subTitle: '케이준 치즈 맥치킨 출시!\n점심을 제대로, 굿런치 맥런치!',
  },
  {
    img: img3,
    subTitle:
      '아무것도 넣지 않은 100% 순 쇠고기로 완성한 NEW 더블 빅맥 & 빅맥 BLT',
  },
  {
    img: img4,
    subTitle: '바삭함 속에 기분 좋은 매콤함\n스파이시 맥너겟 출시!',
  },
  {
    img: img5,
    subTitle: '인기 스낵을 하루 종일 할인된 가격으로!',
  },
  {
    img: img6,
    subTitle: '딸기의 상큼함을 한 잔에!\n딸기 칠러가 돌아왔다!',
  },
  {
    img: img7,
    subTitle:
      '빅맥 스페셜 세트 &\n상하이 버거 스페셜 세트로\n부담 없이 즐겨보세요!',
  },
  {
    img: img8,
    subTitle: '갓 구워내 따뜻하고 신선한\n베이컨 토마토 에그 머핀!',
  },
];

export const getLiveData = (start, total) => {
  return {
    numOfAllContents: data.length,
    liveList: data.slice(start, start + total),
  };
};
