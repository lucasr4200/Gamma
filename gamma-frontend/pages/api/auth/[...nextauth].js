import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";
import GithubProvider from "next-auth/providers/github";
import {getServerSession} from "next-auth";

import DiscordProvider from "next-auth/providers/discord";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),

        // ...add more providers here
    ],
};

export default NextAuth(authOptions);


