## How to run with docker

To run the application using Docker, follow these steps:

1. Pull the Docker image from the Docker Hub repository:

   ```bash
   docker pull grgo/vsc_profiles:latest
   ```

2. Run the Docker container with the following command:

   ```bash
   docker run -it -p 8080:80 --name vsc_profiles grgo/vsc_profiles
   ```

3. Access the application via the following URL:

   ```
   localhost:8080
   ```

## Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

### Recommended Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

- Use [vue-tsc](https://github.com/vuejs/language-tools/tree/master/packages/tsc) for performing the same type checking from the command line, or for generating d.ts files for SFCs.
