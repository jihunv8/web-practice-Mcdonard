import './CardList.scss';

// 프로퍼티
// cardList : 카드 리스트 배열
// cardListMax : DB에 저장된 모든 컨텐츠 수
// cardCreator : CardList의 요소가 될 Card 컴포넌트를 반환해주는 함수
/* 예시
  Bar 컴포넌트가 CardList에 랜더링 됨
  const foo = (card) => {
    return <Bar card={card} />
  }
*/
// getMoreContents : 컨텐츠를 더 가져와주는 함수

const CardList = ({
  cardList = [],
  cardListMax = 0,
  cardCreator = (f) => f,
  getMoreContents = (f) => f,
}) => {
  return (
    <div className="CardList">
      <ul className="list">
        {cardList.map((card, i, list) => (
          <li className="card" key={i}>
            {cardCreator(card, i, list)}
          </li>
        ))}
      </ul>
      {cardList.length < cardListMax && (
        <div className="more-btn-container">
          <button className="more-btn" onClick={getMoreContents}>
            더보기
          </button>
        </div>
      )}
    </div>
  );
};

export default CardList;
