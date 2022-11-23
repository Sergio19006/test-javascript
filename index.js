export const getCategoryPath = (categories, categoryName, path = '') => {

    const caterogy = categories.find(category => category.name === categoryName)

    if (caterogy) return `${path}/${caterogy.name}`

    //Search in subcatergories
    for (const { subcategories, name } of categories) {
        if (subcategories.length > 0) {
            return getCategoryPath(subcategories, categoryName, `${path}/${name}`)
        }
    }
}

