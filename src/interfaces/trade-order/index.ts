import { UserInterface } from 'interfaces/user';
import { StartupInterface } from 'interfaces/startup';
import { GetQueryInterface } from 'interfaces';

export interface TradeOrderInterface {
  id?: string;
  order_type: string;
  quantity: number;
  price: number;
  user_id?: string;
  startup_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  startup?: StartupInterface;
  _count?: {};
}

export interface TradeOrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  order_type?: string;
  user_id?: string;
  startup_id?: string;
}
