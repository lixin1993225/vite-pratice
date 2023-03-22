import { defineConfig, loadEnv } from 'vite'
import viteBaseConfig from './vite.base.config'
import viteProdConfig from './vite.prod.config'
import viteDevConfig from './vite.dev.config'

//策略模式
const envResolve = {
    "serve": () => {
        return { ...viteBaseConfig, ...viteDevConfig }
    },
    "build": () => ({ ...viteBaseConfig, ...viteProdConfig })
}

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), "")
    console.log('++++++++++++++++', process.cwd())
    // console.log('------------', command)
    // console.log('************', mode)
    return envResolve[command]()
})
