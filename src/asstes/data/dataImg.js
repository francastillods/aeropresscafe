
const webImg = [
        
        {
            id: 1,
            pathJpg: '/aeropress-preparar-cafe.jpg',
            pathWebp: '/img/aeropress-preparar-cafe.webp',
            alt: 'Preparación café con Aeropress'

        }
    ];

export const getImgById = (id) => webImg.find( (img) => img.id === id);