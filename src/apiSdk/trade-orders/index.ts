import axios from 'axios';
import queryString from 'query-string';
import { TradeOrderInterface, TradeOrderGetQueryInterface } from 'interfaces/trade-order';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTradeOrders = async (
  query?: TradeOrderGetQueryInterface,
): Promise<PaginatedInterface<TradeOrderInterface>> => {
  const response = await axios.get('/api/trade-orders', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createTradeOrder = async (tradeOrder: TradeOrderInterface) => {
  const response = await axios.post('/api/trade-orders', tradeOrder);
  return response.data;
};

export const updateTradeOrderById = async (id: string, tradeOrder: TradeOrderInterface) => {
  const response = await axios.put(`/api/trade-orders/${id}`, tradeOrder);
  return response.data;
};

export const getTradeOrderById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/trade-orders/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteTradeOrderById = async (id: string) => {
  const response = await axios.delete(`/api/trade-orders/${id}`);
  return response.data;
};
