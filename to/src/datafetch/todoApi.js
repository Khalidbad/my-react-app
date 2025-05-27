import axiosInstance from './axios';
export default {
    getAll :async () => {
        const data = await axiosInstance.get('/todos');
        return data.data;
    },
    Create : async (todo) => {
        const data = await axiosInstance.post('/todos', todo);
        return data.data;
    }
}