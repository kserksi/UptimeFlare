import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "kserks.org Status",
  links: [
    { link: 'https://www.kserks.org', label: 'Blog' },
    { link: 'https://image.kserks.org', label: 'Image' },
    { link: 'https://cloud.kserks.org', label: 'Cloud' },
  ],
}
  
const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'www',
      name: 'Halo Blog',
      method: 'GET',
      target: 'https://www.kserks.org',
      expectedCodes: [200, 301, 302, 404],
      timeout: 10000,
    },
    {
      id: 'image_health',
      name: 'Image API Health',
      method: 'GET',
      target: 'https://image.kserks.org/health',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'image_stats',
      name: 'Image Stats API',
      method: 'GET',
      target: 'https://image.kserks.org/api/v1/public/stats',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'cloud',
      name: 'ZFile Cloud',
      method: 'GET',
      target: 'https://cloud.kserks.org',
      expectedCodes: [200, 301, 302],
      timeout: 10000,
    },
    {
      id: 'pan',
      name: 'Cloudreve Pan',
      method: 'GET',
      target: 'https://pan.kserks.org',
      expectedCodes: [200, 301, 302],
      timeout: 10000,
    },
    {
      id: 'font',
      name: 'WebFont',
      method: 'GET',
      target: 'https://font.kserks.org',
      expectedCodes: [200, 301, 302],
      timeout: 10000,
    },
  ],
  notification: {
    webhook: {
      url: 'https://oapi.dingtalk.com/robot/send?access_token=7c685787fdf155b754bc6941f7c69dffec0e7076f436178c81af9bc0ba88b433',
      method: 'POST',
      payloadType: 'json',
      payload: {
        msgtype: 'text',
        text: { content: '$MSG' },
      },
      timeout: 10000,
    },
    timeZone: 'Asia/Shanghai',
    gracePeriod: 3,
  },
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "kserks.org Status",
  links: [
    { link: 'https://www.kserks.org', label: 'Blog' },
    { link: 'https://image.kserks.org', label: 'Image' },
    { link: 'https://cloud.kserks.org', label: 'Cloud' },
  ],
}

const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'www',
      name: 'Halo Blog',
      method: 'GET',
      target: 'https://www.kserks.org',
      expectedCodes: [200, 301, 302, 404],
      timeout: 10000,
    },
    {
      id: 'image_health',
      name: 'Image API Health',
      method: 'GET',
      target: 'https://image.kserks.org/health',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'image_stats',
      name: 'Image Stats API',
      method: 'GET',
      target: 'https://image.kserks.org/api/v1/public/stats',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'cloud',
      name: 'ZFile Cloud',
      method: 'GET',
      target: 'https://cloud.kserks.org',
      expectedCodes: [200, 301, 302],
      timeout: 10000,
    },
    {
      id: 'pan',
      name: 'Cloudreve Pan',
      method: 'GET',
      target: 'https://pan.kserks.org',
      expectedCodes: [200, 301, 302],
      timeout: 10000,
    },
    {
      id: 'font',
      name: 'WebFont',
      method: 'GET',
      target: 'https://font.kserks.org',
      expectedCodes: [200, 301, 302],
      timeout: 10000,
    },
  ],
  notification: {
    webhook: {
      url: 'https://oapi.dingtalk.com/robot/send?access_token=7c685787fdf155b754bc6941f7c69dffec0e7076f436178c81af9bc0ba88b433',
      method: 'POST',
      payloadType: 'json',
      payload: {
        msgtype: 'text',
        text: { content: '$MSG' },
      },
      timeout: 10000,
    },
    timeZone: 'Asia/Shanghai',
    gracePeriod: 3,
  },
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }
