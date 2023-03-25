import { Irecords } from '../../utils/interfaces';
import styles from './recordList.module.scss';

const RecordList = (props: { records: Irecords[] }) => {
  const { records } = props;

  return (
    <div className={styles['record-container']}>
      {records.map((item, i) => {
        return (
          <div className={styles['record-item']} key={`{item-item-${i}}`}>
            <span
              className={styles['record-item-question']}
              key={`{item-que-${i}}`}
            >
              {item.question}
            </span>
            <pre
              className={styles['record-item-result']}
              key={`{item-res-${i}}`}
            >
              {item.result}
            </pre>
          </div>
        );
      })}
    </div>
  );
};

export default RecordList;
