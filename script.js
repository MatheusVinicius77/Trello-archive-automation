const archive_items = document.querySelectorAll('.archived-list-card')
archive_items.forEach((card)=>{
    const delete_card = card.querySelector('.js-delete')
    delete_card.click()
    const js_confirm = document.querySelector('.js-confirm')
    js_confirm.click()
})
