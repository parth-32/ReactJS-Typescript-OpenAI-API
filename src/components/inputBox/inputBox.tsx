import { useState } from 'react';
import styles from './inputBox.module.scss';

const InputBox = (props: any) => {
  const [text, setText] = useState('');

  const onBtnClick = () => {
    props.onClick(text);
  };

  const onChangeHandle = (event: any) => {
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
      <button className={styles['input-button']} disabled={props.isLoading} onClick={onBtnClick}>
        {props.isLoading ? 'Loading...' : 'Submit'}
      </button>
    </div>
  );
};

export default InputBox;
