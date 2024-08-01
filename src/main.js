import {
	createSSRApp
} from "vue";
import App from "./App.vue";
import uviewPlus, { setConfig } from '@/uni_modules/uview-plus'
setConfig({
	// 修改$u.config对象的属性
	config: {
		// 修改默认单位为rpx，相当于执行 uni.$u.config.unit = 'rpx'
		unit: 'px'
	},
	// 修改$u.props对象的属性
	props: {
		// 修改radio组件的size参数的默认值，相当于执行 uni.$u.props.radio.size = 30
		radio: {
			// size: 20 
		}
		// 其他组件属性配置
		// ......
	}
})
export function createApp() {
	const app = createSSRApp(App);
	app.use(uviewPlus)

	return {
		app,
	};
}