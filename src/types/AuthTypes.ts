export interface authState {
  atoken?: string
  utoken?: string
  authStatus?: 'pending' | 'error' | 'idle'
}
