/* eslint-disable @typescript-eslint/no-unused-vars */
"use server"

import { ActionResult } from "@/types";
import { redirect } from "next/navigation";
import { schemaSignIn, schemaSignUp } from "./schema";
import prisma from "../../lib/prisma";
import bcrypt from 'bcrypt'
import { getUser, lucia } from "./auth";
import { cookies } from "next/headers";

export async function signIn(_: unknown, formData: FormData): Promise<ActionResult> {

  const validate = schemaSignIn.safeParse({
    email: formData.get('email') as string,
    password: formData.get('password') as string
  })

  if (!validate.success) {
    console.log(validate)
    return { error: validate.error.errors[0].message }
  }

  const existingUser = await prisma.user.findFirst({
    where: {
      email: validate.data.email,
      role: 'superadmin'
    }
  })

  if (!existingUser) {
    return { error: "Invalid email or password" }
  }

  const comparePassword = await bcrypt.compareSync(validate.data.password, existingUser.password)
  if (!comparePassword) {
    return { error: "Invalid email or password" }
  }

  const session = await lucia.createSession(existingUser.id, {})
  const sessionCookie = lucia.createSessionCookie(session.id); (await cookies()).set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  )

  return redirect('/dashboard');
}

export async function logout(
  _: unknown,
  formData: FormData,
): Promise<ActionResult> {
  console.log('logout')

  const { session } = await getUser();

  if (!session) {
    return {
      error: "Unauthorized"
    }
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();

  (await cookies()).set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  return redirect('/dashboard/sign-in');
}
export async function signInCustomer(_: unknown, formData: FormData): Promise<ActionResult> {

  const validate = schemaSignIn.safeParse({
    email: formData.get('email') as string,
    password: formData.get('password') as string
  })

  if (!validate.success) {
    console.log(validate)
    return { error: validate.error.errors[0].message }
  }

  const existingUser = await prisma.user.findFirst({
    where: {
      email: validate.data.email,
      role: 'customer'
    }
  })

  if (!existingUser) {
    return { error: "Invalid email or password" }
  }

  const comparePassword = await bcrypt.compareSync(validate.data.password, existingUser.password)
  if (!comparePassword) {
    return { error: "Invalid email or password" }
  }

  const session = await lucia.createSession(existingUser.id, {})
  const sessionCookie = lucia.createSessionCookie(session.id); (await cookies()).set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  )

  return redirect('/');
}

export async function logoutCustomer(
  _: unknown,
  formData: FormData,
): Promise<ActionResult> {
  console.log('logout')

  const { session } = await getUser();

  if (!session) {
    return {
      error: "Unauthorized"
    }
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();

  (await cookies()).set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  return redirect('/sign-in');
}

export async function signUp(
  _: unknown,
  formData: FormData
): Promise<ActionResult> {

  const parse = schemaSignUp.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!parse.success) {
    return {
      error: parse.error.errors[0].message
    }
  }

  const hashPassword = bcrypt.hashSync(parse.data.password, 12)

  try {
    await prisma.user.create({
      data: {
        email: parse.data.email,
        name: parse.data.name,
        password: hashPassword,
        role: 'customer'
      }
    })
  } catch (error) {
    console.log(error);
    return {
      error: 'Failed to sign up'
    }
  }

  return redirect('/sign-in')

}