import * as yup from 'yup';

export const tradeOrderValidationSchema = yup.object().shape({
  order_type: yup.string().required(),
  quantity: yup.number().integer().required(),
  price: yup.number().integer().required(),
  user_id: yup.string().nullable(),
  startup_id: yup.string().nullable(),
});
