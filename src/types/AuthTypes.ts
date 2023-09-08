export interface authState {
  stoken?: string
  utoken?: string
  authLoading?: 'pending' | 'error' | 'idle'
}
