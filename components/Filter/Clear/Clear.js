import Close from '../../../public/close.svg'
import css from './clear.module.css'
const ClearAll = () => {
    return <>
        <button className={css.clearAll}>
            Очистить все<Close className={css.clearIcon} />
        </button>
        
    </>
}
export default ClearAll;