import { prisma } from "../../../../generated/prisma-client";
import { ROOM_FRAGMENT } from "../../../fragments";

export default {
    Query: {
        viewRooms: (_, __, { request, isAuthenticated }) => {
            isAuthenticated(request);
            const { user } = request;
            return prisma.rooms({
                where: {
                    participants_some: {
                        id: user.id
                    }
                }
            });
// [use ROOM_FRAGMENT]
//            .$fragment(ROOM_FRAGMENT);
        }
    }
};