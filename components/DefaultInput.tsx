import React from 'react';
import { Control, FieldPath } from 'react-hook-form';
import {
    FormControl,
    FormField,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { authFormSchema } from '@/lib/utils';

const formSchema = authFormSchema('sign-up');

interface DefaultInput {
    control: Control<z.infer<typeof formSchema>>;
    name: FieldPath<z.infer<typeof formSchema>>;
    label: string;
    placeholder: string;
}

const DefaultInput = ({ control, name, label, placeholder }: DefaultInput) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className="form-item">
                    <FormLabel className="form-label">{label}</FormLabel>

                    <div className="flex flex-col w-full">
                        <FormControl>
                            <Input
                                placeholder={placeholder}
                                id={name}
                                className="input-class"
                                type={name === 'password' ? 'password' : 'text'}
                                {...field}
                            />
                        </FormControl>

                        <FormMessage className="form-message mt-2" />
                    </div>
                </div>
            )}
        />
    );
};

export default DefaultInput;
