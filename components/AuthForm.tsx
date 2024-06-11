'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';

import { authFormSchema } from '@/lib/utils';
import DefaultInput from './DefaultInput';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { signUp, signIn } from '@/lib/actions/user.actions';

const AuthForm = ({ type }: { type: string }) => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const formSchema = authFormSchema(type);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setIsLoading(true);

        try {
            if (type === 'sign-up') {
                const newUser = await signUp(data);
                setUser(newUser);
            }

            if (type === 'sign-in') {
                const response = await signIn({
                    email: data.email,
                    password: data.password,
                });

                response && router.push('/');
            }
        } catch (error) {
            console.error('Error: ', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="auth-form">
            <header className="flex flex-col gap-4 md:gap-8">
                <Link
                    href="/"
                    className="flex items-center gap-2 cursor-pointer"
                >
                    <Image
                        src="/icons/logo.svg"
                        width={40}
                        height={40}
                        alt="Horizon Logo"
                    />

                    <h1 className="text-black-1 font-ibm-plex-serif text-24 font-bold">
                        Horizon
                    </h1>
                </Link>

                <div className="flex flex-col gap-2 md:gap-4">
                    <h1 className="text-gray-900 text-24 lg:text-36 font-semibold">
                        {user
                            ? 'Link Account'
                            : type === 'sign-in'
                            ? 'Sign In'
                            : 'Sign Up'}
                    </h1>

                    <p className="text-gray-600 text-16 font-normal">
                        {user
                            ? 'Link your account to get started'
                            : 'Please enter your details'}
                    </p>
                </div>
            </header>

            {user ? (
                <div className="flex flex-col gap-4">PlaidLink</div>
            ) : (
                <>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-8"
                        >
                            {type === 'sign-up' && (
                                <>
                                    <div className="flex gap-4">
                                        <DefaultInput
                                            control={form.control}
                                            name="firstName"
                                            label="First Name"
                                            placeholder="Enter your first name"
                                        />

                                        <DefaultInput
                                            control={form.control}
                                            name="lastName"
                                            label="Last Name"
                                            placeholder="Enter your last name"
                                        />
                                    </div>

                                    <div className="flex gap-4">
                                        <DefaultInput
                                            control={form.control}
                                            name="address1"
                                            label="Address"
                                            placeholder="Enter your address"
                                        />

                                        <DefaultInput
                                            control={form.control}
                                            name="city"
                                            label="City"
                                            placeholder="Enter your city"
                                        />
                                    </div>

                                    <div className="flex gap-4">
                                        <DefaultInput
                                            control={form.control}
                                            name="state"
                                            label="State"
                                            placeholder="ex: NY"
                                        />

                                        <DefaultInput
                                            control={form.control}
                                            name="postalCode"
                                            label="Postel Code"
                                            placeholder="ex: 11101"
                                        />
                                    </div>

                                    <div className="flex gap-4">
                                        <DefaultInput
                                            control={form.control}
                                            name="dateOfBirth"
                                            label="Date of Birth"
                                            placeholder="YYYY-MM-DD"
                                        />

                                        <DefaultInput
                                            control={form.control}
                                            name="ssn"
                                            label="SSN"
                                            placeholder="ex: 1234"
                                        />
                                    </div>
                                </>
                            )}

                            <DefaultInput
                                control={form.control}
                                name="email"
                                label="Email"
                                placeholder="Enter your email"
                            />

                            <DefaultInput
                                control={form.control}
                                name="password"
                                label="Password"
                                placeholder="Enter your password"
                            />

                            <div className="flex flex-col gap-4">
                                <Button
                                    type="submit"
                                    className="form-btn"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2
                                                size={20}
                                                className="animate-spin"
                                            />
                                            &nbsp; Loading...
                                        </>
                                    ) : type === 'sign-in' ? (
                                        'Sign In'
                                    ) : (
                                        'Sign Up'
                                    )}
                                </Button>
                            </div>
                        </form>
                    </Form>

                    <footer className="flex justify-center gap-2">
                        <p className="text-gray-600 text-14 font-normal">
                            {type === 'sign-in'
                                ? "Don't have an account?"
                                : 'Already have an account?'}
                        </p>

                        <Link
                            href={type === 'sign-in' ? '/sign-up' : '/sign-in'}
                            className="form-link"
                        >
                            {type === 'sign-in' ? 'Sign Up' : 'Sign In'}
                        </Link>
                    </footer>
                </>
            )}
        </section>
    );
};

export default AuthForm;
