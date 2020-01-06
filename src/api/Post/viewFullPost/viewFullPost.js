import { prisma } from "../../../../generated/prisma-client";
import { COMMENT_FRAGMENT, FULL_POST_FRAGMENT } from "../../../fragments";

export default {
    Query: {
        viewFullPost: async (_, args) => {
            const { id } = args;
//            const post = await prisma.post({ id });
//            const comments = await prisma
//                .post({ id })
//                .comments()
//                .$fragment(COMMENT_FRAGMENT);
//            const likeCount = await prisma
//                .likesConnection({
//                    where: { post: { id } }
//                })
//                .aggregate()
//                .count();
//            const files = await prisma.post({ id }).files();
//            const user = await prisma.post({ id }).user();
//            return {
//                post,
//                comments,
//                likeCount,
//                files,
//                user
//            };
// [user FULL_POST_FRAGMENT]
//            return prisma.post({ id }).$fragment(FULL_POST_FRAGMENT);
            return prisma.post({ id });
        }
    }
}