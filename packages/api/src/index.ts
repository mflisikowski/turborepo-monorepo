import type { AxiosInstance } from 'axios'
import axiosInstance, { baseURL } from '@/axios'
import { HealthCheckApi, OrdersApi, StatsApi, UserApi } from '@/openapi'

const defaultProps: [undefined, string, AxiosInstance] = [
  undefined,
  baseURL,
  axiosInstance,
]

export default {
  HealthCheck: new HealthCheckApi(...defaultProps),
  Orders: new OrdersApi(...defaultProps),
  Stats: new StatsApi(...defaultProps),
  User: new UserApi(...defaultProps),
}
