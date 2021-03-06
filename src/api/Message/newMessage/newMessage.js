import { prisma } from "../../../../generated/prisma-client";

export default {
    Subscription: {
        newMessage: {
            Subscription: (_, args ) => {
                const { roomId } = args;
                return prisma.$subscribe.message({
                    AND: [
                        { mutation_in: "CREATED"},
                        {
                            node: {
                                room: {
                                    id: roomId
                                }
                            }
                        }
                    ]
                })
                .node();
            },
            resolve: (payload, args, context) => {
                console.log(args, context);
                return payload;
            }
        }
    }
};