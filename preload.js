/*
 * @Autor: 欧阳改
 * @Date: 2021-03-23 14:29:57
 * @LastEditors: 欧阳改
 * @LastEditTime: 2021-03-23 14:30:11
 * @Description: 唧唧复唧唧
 */
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})