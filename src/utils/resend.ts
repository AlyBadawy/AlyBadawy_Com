import { Resend } from 'resend';

const ResendClient = new Resend(process.env.RESEND_API_KEY!);

export default ResendClient;
