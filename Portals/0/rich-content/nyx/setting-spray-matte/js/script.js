(() => {
    new Swiper('#es-rc #es-nyx .es-swiper', {
        loop: true,
        autoHeight: true,
        pagination: {
            el: '#es-rc .es-swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#es-rc .es-swiper-button-next',
            prevEl: '#es-rc .es-swiper-button-prev',
            lockClass: 'es-swiper-button-no-lock-class'
        }
    })
})()
