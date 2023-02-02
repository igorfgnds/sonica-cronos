import styles from './styles.module.css';

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>): JSX.Element => {
  return <input {...props} className={styles.input + ' ' + props.className} />;
};

export default Input;
