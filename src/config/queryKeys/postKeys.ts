export const postKeys = {
    all: ['posts'],

    lists: () => [...postKeys.all, 'list'],

    list: (filters: string) => [...postKeys.lists(), { filters }],

    details: () => [...postKeys.all, 'detail'],

    detail: (id: number) => [...postKeys.details(), id],
}