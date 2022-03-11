import './PrimaryCard.scss';

//홈, 프로모션 페이지 등 에서 사용되는 카드 컴포넌트
const PrimaryCard = ({ image = null, alt = '', subTitle = '', url = '' }) => {
  return (
    <div className="PrimaryCard">
      <a href={url}>
        <img className="card-image" src={image} alt={alt} />
        <p className="card-title">{subTitle}</p>
      </a>
    </div>
  );
};

export default PrimaryCard;
