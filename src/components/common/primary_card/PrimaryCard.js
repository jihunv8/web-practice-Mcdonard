import './PrimaryCard.scss';

const PrimaryCard = ({ image = null, alt = '', title = '', url = '' }) => {
  return (
    <div className="PrimaryCard">
      <a href={url}>
        <img className="card-image" src={image} alt={alt} />
        <p className="card-title">{title}</p>
      </a>
    </div>
  );
};

export default PrimaryCard;
