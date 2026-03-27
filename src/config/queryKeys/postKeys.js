export const postKeys = {
    // tất cả post queries
    all: ['posts'],

    // danh sách posts
    lists: () => [...postKeys.all, 'list'],

    // danh sách posts có filter
    list: (filters) => [...postKeys.lists(), { filters }],

    // tất cả detail queries
    details: () => [...postKeys.all, 'detail'],

    // detail của 1 post
    detail: (id) => [...postKeys.details(), id],
}