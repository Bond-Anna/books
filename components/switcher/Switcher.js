import classnames from 'classnames';
import List from '../shared/icons/list';
import Grid from '../shared/icons/navMenu/grid';
import st from './switcher.module.scss';
import { useRouter } from 'next/router';

const Switcher = ({ flagSwitcher, setFlagSwitcher }) => {
  const router = useRouter();

  const handleClick = value => {
    router.push({ query: { ...router.query, ['showType']: value } }, null, {
      scroll: false,
    });
    setFlagSwitcher(value === 'list' ? true : false);
  };

  return (
    <div className={st.field}>
      <span
        className={classnames({ [st.ball]: flagSwitcher })}
        onClick={() => handleClick('list')}
      >
        <List className={classnames(st.iconList)} />
      </span>
      <span
        className={classnames({ [st.ball]: !flagSwitcher })}
        onClick={() => handleClick('block')}
      >
        <Grid className={classnames(st.iconGrid)} />
      </span>
    </div>
  );
};

export default Switcher;
