

var initialState = [
    {
        id: 1,
        name: 'Iphone 6',
        image: 'https://th.bing.com/th/id/OIP.yn_cP-nBVeclwGnvvpybbgHaHa?pid=ImgDet&rs=1',
        description: 'Sản phẩm do hãng Apple sản xuất',
        price: 500,
        inventory: 10,
        rating: 5
    },
    {
        id: 2,
        name: 'Samsung Galaxy A31',
        image: 'https://th.bing.com/th/id/OIP.TCzKTnzH6eMMPa5y7QVpBgHaHa?pid=ImgDet&rs=1',
        description: 'Sản phẩm do hãng Samsung sản xuất',
        price: 400,
        inventory: 15,
        rating: 4
    },
    {
        id: 3,
        name: 'Oppo F1S',
        image: 'https://3.bp.blogspot.com/-IKEC6WhT_Hg/WLjrT5vjwmI/AAAAAAAAAyc/fEdNcpqV_RMkcAwh7AJDnjR35awxOjfYACLcB/s1600/Oppo%2BF1s.jpg',
        description: 'Sản phẩm do hãng Oppo sản xuất',
        price: 300,
        inventory: 5,
        rating: 3
    },
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state] 
    }
}

export default products;

