'use server';

import { cookies } from 'next/headers';
import { ID } from 'node-appwrite';
import { createSessionClient, createAdminClient } from '../appwrite';
import { parseStringify } from '../utils';

export const signUp = async (userData: SignUpParams) => {
    const { email, password, firstName, lastName } = userData;

    try {
        const { account } = await createAdminClient();

        const newUser = await account.create(
            ID.unique(),
            email,
            password,
            `${firstName} ${lastName}`
        );

        const session = await account.createEmailPasswordSession(
            email,
            password
        );

        cookies().set('appwrite-session', session.secret, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            secure: true,
        });

        return parseStringify(newUser);
    } catch (error) {
        console.error('Error: ', error);
    }
};

export const signIn = async ({ email, password }: signInProps) => {
    try {
        const { account } = await createAdminClient();

        const response = await account.createEmailPasswordSession(
            email,
            password
        );

        return parseStringify(response);
    } catch (error) {
        console.error('Error: ', error);
    }
};

export const getLoggedInUser = async () => {
    try {
        const { account } = await createSessionClient();

        const loggedInUser = await account.get();

        return parseStringify(loggedInUser);
    } catch (error) {
        console.error('Error: ', error);
        return null;
    }
};
