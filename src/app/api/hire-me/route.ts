import ResendClient from '@/utils/resend';
import AnonSupabaseClient from '@/utils/supabase';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  const { name, email, message } = await req.json();

  await ResendClient.emails.send({
    to: process.env.RESEND_EMAIL_TO!,
    from: process.env.RESEND_EMAIL_FROM!,
    subject: 'New Hire Me Message',
    html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
      `,
  });

  const asc = AnonSupabaseClient();

  const sbres = await asc
    .from('hire_messages')
    .insert([{ name, email, message }]);

  console.log(sbres);

  return NextResponse.json(
    { message: sbres.statusText },
    { status: sbres.status }
  );
};
