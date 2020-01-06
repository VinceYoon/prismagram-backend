import { prisma } from "../../../../generated/prisma-client";
import { ROOM_FRAGMENT } from "../../../fragments";

export default {
    Query: {
        viewRoom: async(_, args, { request, isAuthenticated }) => {
            isAuthenticated(request);
            const { id } = args;
            const { user } = request;
            const validation = await prisma.$exists.room({
                participants_some: {
                    id: user.id
                }
            });

            if (validation) {
// [use ROOM_FRAGMENT]
//                return prisma.room({ id }).$fragment(ROOM_FRAGMENT);
                return prisma.room({ id });
            } else {
                throw Error ("You don't have permission to verify this");
            }
        }
    }
};