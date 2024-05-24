import { LayoutProps } from './layout.props'
import styles from './layout.module.scss'
import Header from '../../../src/components/Header/Header.tsx'

export function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <Header />
        <div className={styles.mainBlock}>{children}</div>
      </div>
    </div>
  )
}
