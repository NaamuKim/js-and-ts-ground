export const dispatchRemoveAllEvent = () => {
  window.dispatchEvent(new CustomEvent('removeAll'))
}
