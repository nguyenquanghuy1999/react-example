export const productKeys = {
    // tất cả post queries
    all: ['products'],

    // danh sách posts
    lists: () => [...productKeys.all, 'list'],

    // danh sách posts có filter
    list: (filters) => [...productKeys.lists(), { filters }],

    // tất cả detail queries
    details: () => [...productKeys.all, 'detail'],

    // detail của 1 post
    detail: (id) => [...productKeys.details(), id],
}