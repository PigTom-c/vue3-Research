export interface TreeAddLevelReturnInterface {
    label: string
    level: number
    index: number
    show: boolean
}

export interface TreeDataInterface {
    label: string
    children?: TreeDataInterface[]
    level?: number
    index?: number
    show?: boolean
}

/**
 * 扁平化树形结构
 * @param data
 * @returns
 */
export const treeToFlat = (data: TreeDataInterface[]): TreeAddLevelReturnInterface[] => {
    const result: TreeAddLevelReturnInterface[] = []

    data.forEach((item: TreeDataInterface): void => {
        const obj = {
            label: item.label,
            level: item.level,
            index: item.index,
            show: item.show
        } as TreeAddLevelReturnInterface

        result.push(obj)

        if (item.children) {
            result.push(...treeToFlat(item.children))
        }
    })

    return result
}

/**
 * 给 tree 添加 level 层级标注
 * @param tree
 * @returns
 */
export const treeAddLevel = (tree: TreeDataInterface[]): TreeDataInterface[] => {
    if (!Array.isArray(tree)) {
        return []
    }

    const recursive = (array: TreeDataInterface[], level = 0): TreeDataInterface[] => {
        level++

        return array.map((item: TreeDataInterface, index): TreeDataInterface => {
            item.level = level
            item.index = index
            // item.show = level === 1 ? true : false
            item.show = false

            const child: TreeDataInterface[] = item.children as TreeDataInterface[]

            if (child && child.length) {
                recursive(child, level)
            }

            return item
        })
    }

    return recursive(tree)
}
