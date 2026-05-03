export const customerKeys = {
    all: ['customers'],

    lists: () => [...customerKeys.all, 'list'],

    list: (filters: string) => [...customerKeys.lists(), { filters }],

    details: () => [...customerKeys.all, 'detail'],

    detail: (id: number) => [...customerKeys.details(), id],
}   