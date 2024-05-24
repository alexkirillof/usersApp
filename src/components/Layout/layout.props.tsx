import React, { ReactNode } from 'react'

export interface LayoutProps extends React.HTMLAttributes<HTMLElement> {
  children?: ReactNode
}