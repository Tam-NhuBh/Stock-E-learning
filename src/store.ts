import { configureStore } from '@reduxjs/toolkit';
import chatbotReducer from './slice/chatbotClient.slice';

const store = configureStore({
    reducer: {
      chatbotClient: chatbotReducer,
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  
  export default store;