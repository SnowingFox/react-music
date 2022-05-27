import { useEffect } from 'react'
import type { EffectCallback } from 'react'

export function useMount(effect: EffectCallback) {
  useEffect(effect, [])
}
