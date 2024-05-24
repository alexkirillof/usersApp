export const generateRole = (role: string) => {
  switch (role) {
    case 'Официант':
      return 'waiter'
    case 'Водитель':
      return 'driver'
    case 'Повар':
      return 'cook'
  }
}
