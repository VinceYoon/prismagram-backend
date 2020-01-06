import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        createAccount: async (_, args) => {
            const { username, email, firstName = "", lastName = "", bio = "" } = args;
            const validation = await prisma.$exists.user({
                OR: [
                    {
                        username
                    },
                    {
                        email
                    }
                ]
            });
            if (validation){
                throw Error("This username / email is already exist");
            }
            await prisma.createUser({
                username,
                email,
                firstName,
                lastName,
                bio
            });
            return true;
        }
    }
};