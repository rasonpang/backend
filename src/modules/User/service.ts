import UserModel from 'modules/User/model';

export default {
    createToken: async (userId: string) => {
        const result = await UserModel.createToken(Number(userId));
        return result;
    }
};