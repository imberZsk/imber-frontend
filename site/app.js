/** 在用户选择作品分类时切换对应内容面板，并同步无障碍选中状态。 */
const tabButtons = Array.from(document.querySelectorAll('[data-tab]'))
const tabPanels = Array.from(document.querySelectorAll('[data-panel]'))

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // selectedTab 存储本次选择的作品分类标识。
    const selectedTab = button.dataset.tab

    tabButtons.forEach((tabButton) => {
      tabButton.setAttribute('aria-selected', String(tabButton.dataset.tab === selectedTab))
    })

    tabPanels.forEach((panel) => {
      panel.hidden = panel.dataset.panel !== selectedTab
    })
  })
})
