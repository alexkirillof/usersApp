import style from './switcher.module.scss'

const SWITCH_WIDTH_PX = 72
const HANDLE_DIAMETER_PX = 30
const SWITCH_OFFSET_PX = 2

interface SwitcherProps {
  containerCheckedColor?: string
  containerUncheckedColor?: string
  handleCheckedColor?: string
  handleUncheckedColor?: string
  value: boolean
  onClick: () => void
  label?: string
}

const Switcher: React.FC<SwitcherProps> = ({
  containerCheckedColor = '#fff',
  containerUncheckedColor = '#ddd',
  handleCheckedColor = '#ddd',
  handleUncheckedColor = '#fff',
  label,
  value,
  onClick
}) => {
  return (
    <div className={style.switchWrapper}>
      <div
        style={{
          width: SWITCH_WIDTH_PX,
          height: HANDLE_DIAMETER_PX + 2 * SWITCH_OFFSET_PX,
          borderRadius: HANDLE_DIAMETER_PX,
          border: '1px #ddd solid',
          position: 'relative',
          transition: '.5s',
          cursor: 'pointer',
          background: value ? containerCheckedColor : containerUncheckedColor
        }}
        onClick={onClick}
      >
        <div
          style={{
            background: value ? handleCheckedColor : handleUncheckedColor,
            borderRadius: '100%',
            height: HANDLE_DIAMETER_PX,
            width: HANDLE_DIAMETER_PX,
            position: 'absolute',
            top: SWITCH_OFFSET_PX - 1,
            left: value
              ? SWITCH_WIDTH_PX - HANDLE_DIAMETER_PX - SWITCH_OFFSET_PX - 2
              : SWITCH_OFFSET_PX,
            transition: '0.5s'
          }}
        ></div>
        <input type='checkbox' onChange={onClick} style={{ display: 'none' }} />
      </div>

      {label && <p>{label}</p>}
    </div>
  )
}
export default Switcher
