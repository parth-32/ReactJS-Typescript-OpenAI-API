import { useState } from 'react';
import { IinputBox } from '../../utils/interfaces';
import styles from './inputBox.module.scss';

const InputBox = (props: IinputBox) => {
  const [text, setText] = useState<string>('');

  const onBtnClick = () => {
    props.onClick(text);
  };

  const onChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div className={styles['input-container']}>
      <input
        className={styles['input-box']}
        type='text'
        onChange={onChangeHandle}
        placeholder='Enter text...'
      ></input>
      <button
        className={styles['input-button']}
        disabled={props.isLoading}
        onClick={onBtnClick}
      >
        {props.isLoading ? 'Loading...' : 'Submit'}
      </button>
    </div>
  );
};

export default InputBox;
