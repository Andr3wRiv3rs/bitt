export const template = (html: string) => {
  const template = document.createElement('template')

  template.innerHTML = html

  return [[...template.content.children]]
}
