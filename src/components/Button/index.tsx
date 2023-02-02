import styles from './styles.module.css';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  type: 'primary' | 'secondary';
}

const Button = (props: ButtonProps): JSX.Element => {
  return (
    <a
      href="#"
      className={
        styles.btn + ' ' + (props.type === 'primary' ? styles.primary : styles.secondary) + ' ' + props.className
      }
    >
      {props.children}
    </a>
  );
};

export default Button;
