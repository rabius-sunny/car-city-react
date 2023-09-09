export interface authState {
  atoken?: string
  utoken?: string
  authLoading?: 'pending' | 'error' | 'idle'
}
