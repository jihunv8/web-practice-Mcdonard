import './McLiveList.scss';
import { useEffect, useState } from 'react';
import CardList from '../../common/card_list/CardList';
import PrimaryCard from '../../common/primary_card/PrimaryCard';

import { getLiveData } from './temp_data/mcLiveData';

const McLiveList = () => {
  const [liveData, setLiveData] = useState(getLiveData(0, 6));

  const getMoreContents = () => {
    const { liveList, numOfAllContents } = getLiveData(
      liveData.liveList.length,
      6
    );
    const newLiveData = {
      liveList: [...liveData.liveList, ...liveList],
      numOfAllContents,
    };
    setLiveData(newLiveData);
  };

  const cardCreator = (card) => (
    <PrimaryCard image={card.img} subTitle={card.subTitle} />
  );

  return (
    <div className="McLiveList">
      <h2>McDonald's LIVE</h2>
      <CardList
        cardList={liveData.liveList}
        cardCreator={cardCreator}
        cardListMax={liveData.numOfAllContents}
        getMoreContents={getMoreContents}
      />
    </div>
  );
};

export default McLiveList;
