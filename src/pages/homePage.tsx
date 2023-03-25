import { useState } from 'react';
import InputBox from '../components/inputBox/inputBox';
import RecordList from '../components/recordList/recordList';
import styles from '../styles/homePage.module.scss';
import { Irecords } from '../utils/interfaces';
import { openaiAPICall } from '../utils/openai';

const HomePage = () => {

  const [isLoading, setIsLoading] = useState(false);

  const [records, setRecords] = useState<Irecords[]>([]);

  const handleOnClick = (query: string) => {
		if(query.trim().length === 0){
			return
		}

    setIsLoading(true);

    openaiAPICall(query)
      .then((res) => {
        setRecords([{ question: query, result: res as string },...records]);
      })
      .catch((e) => {
        console.log('API Error=====>', e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className={styles.container}>
      <InputBox onClick={handleOnClick} isLoading={isLoading} />
			<RecordList records={records}/>
    </div>
  );
};

export default HomePage;
