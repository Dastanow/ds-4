let btnCreate = document.querySelector('.btn-create')
let form = document.querySelector('.form')
let btnDelete = document.querySelector('.btn-delete')

form.addEventListener('submit', (e) => {
    fetch(' http://localhost:3000/products', {
        method: 'POST',
        headers:{
            'Content-Type': 'appLication/json'
        },
        body: JSON.stringify({
            title: e.target[0].value,
            price: e.target[1].value,
            memory: e.target[2].valu,
            Image: e.target[3].value,
        })
    }).then((res) => {
        e.target[0].value = ''
        e.target[1].value = ''
        e.target[2].value = ''
        e.target[3].value = ''
   , res })
   .catch((err) => alert('Ошибка', err))
})

btnDelete.addEventListener('click', () => {
    fetch('http://localhost:3000/products/1', {
        method: 'DELETE',
    }).then(() => alert('вы УДАЛИЛИ'))
    .catch((err) => alert('ошибка при удалени', err))
})


