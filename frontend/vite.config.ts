import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	publicDir: "../django_vitevue_example/static/frontend",
	build: {
		emptyOutDir: false,
		rollupOptions: {
			output: {
				dir: "../django_vitevue_example/static/frontend"
			}
		}
	}
})