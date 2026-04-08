export const customerKeys = {
    // tất cả post queries
    all: ['customers'],

    // danh sách posts
    lists: () => [...customerKeys.all, 'list'],

    // danh sách posts có filter
    list: (filters) => [...customerKeys.lists(), { filters }],

    // tất cả detail queries
    details: () => [...customerKeys.all, 'detail'],

    // detail của 1 post
    detail: (id) => [...customerKeys.details(), id],
}