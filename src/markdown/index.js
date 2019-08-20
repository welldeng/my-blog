import {getMarkDownList} from '../utils'

let markdowns = getMarkDownList(require.context('./', false, /\.md$/))

export default markdowns
