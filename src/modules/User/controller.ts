import UserModel from 'modules/User/model';

const Controller = {
    create: async (data: any) => {
        const result = await UserModel.create(data);
        const response = result
            ? "User created successfully"
            : "User create failed";
        return response;
    },

    login: async (data: any) => {
        const result = await UserModel.findById(
            data,
            {
                id: true,
                displayName: true,
                address: true,
                phoneNumber: true
            }
        );
        return result;
    },
    refreshToken: async (data: any) => {
        const result = await UserModel.createToken(data.id);
        return result;
    },

    update: async (data: any) => {
        const { id, ...updateData } = data;
        const result = await UserModel.update(id, updateData);
        return result;
    }
};

export default Controller;