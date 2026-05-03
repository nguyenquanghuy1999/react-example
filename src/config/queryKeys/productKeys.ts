export const productKeys = {
    all: ['products'],

    lists: () => [...productKeys.all, 'list'],

    list: (filters: string) => [...productKeys.lists(), { filters }],

    details: () => [...productKeys.all, 'detail'],

    detail: (id: number) => [...productKeys.details(), id],
}