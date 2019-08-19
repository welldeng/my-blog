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


export {getRoutes}