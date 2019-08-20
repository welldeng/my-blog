// 收集路由
const getRoutes = (context, ignore) => {
    const children = []
    context.keys().forEach(key => {
        if (key !== ignore) {
            try {
                let arr = context(key).default
                if (arr && arr.length) {
                    children.push(...arr)
                }
            } catch (e) {
                // Message({ message: `请检查前端路由文件：${e.stack}`, type: 'error', duration: 5000 })
                // console.error(e)
            }
        }
    })
    return children
}

// 收集md文件
const getMarkDownList = (context) => {
    const children = []
    context.keys().forEach(key => {
        let content = context(key)
        children.push({
            name: key.substring(2, key.length - 3),
            content: content.default,
        })
    })
    return children
}


export {getRoutes, getMarkDownList}