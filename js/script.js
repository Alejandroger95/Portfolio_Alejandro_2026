const menuIcon = document.querySelector('#menu-icon')
const navLinks = document.querySelector('.nav-links')

menuIcon.onclick = () => {
    navLinks.classList.toggle('active')
}

// Projects split panel interaction
const projectItems = document.querySelectorAll('.project-item')
const previewImg    = document.getElementById('preview-img')
const previewTitle  = document.getElementById('preview-title')
const previewDesc   = document.getElementById('preview-desc')
const previewTags   = document.getElementById('preview-tags')
const previewLink   = document.getElementById('preview-link')
const previewPanel  = document.querySelector('.projects-preview-panel')

function activateProject(item) {
    // Remove active from all
    projectItems.forEach(i => i.classList.remove('active'))
    item.classList.add('active')

    const img   = item.dataset.img
    const title = item.dataset.title
    const desc  = item.dataset.desc
    const tags  = item.dataset.tags.split(',')
    const link  = item.dataset.link

    // Fade out
    previewPanel.classList.add('fading')

    setTimeout(() => {
        previewImg.src    = img
        previewImg.alt    = title
        previewTitle.textContent = title
        previewDesc.textContent  = desc
        previewTags.innerHTML = tags.map(t => `<span>${t.trim()}</span>`).join('')
        previewLink.href  = link

        // Fade in
        previewPanel.classList.remove('fading')
    }, 200)
}

projectItems.forEach(item => {
    item.addEventListener('click', () => activateProject(item))
})