import { ref, onMounted, onBeforeUnmount } from 'vue'

type KeyboardEventListener = (this: Document, e: KeyboardEvent) => any

export function useKey(key: string, action: Function) {
  const handler = ref<KeyboardEventListener | null>(null)

  onMounted(() => {
    handler.value = (e: KeyboardEvent) => {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action()
      }
    }

    document.addEventListener('keydown', handler.value)
  })

  onBeforeUnmount(() => document.removeEventListener('keydown', handler.value!))
}
