// pages/admin/login.tsx
import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';

const AdminLoginPage = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [showOtpInput, setShowOtpInput] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const router = useRouter();

    const handleRequestOtp = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            // Step 1: Call your backend to generate and get the OTP
            const res = await fetch('/api/auth/generate-otp', { // Use your actual backend URL
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to generate OTP');

            const generatedOtp = data.otp;

            // Step 2: Use EmailJS to send the OTP
            const templateParams = {
                to_email: email,
                otp_code: generatedOtp, // Match this key to the variable in your EmailJS template
            };

            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            setShowOtpInput(true); // Show the OTP input field on success

        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setIsLoading(false);
        }
    };
    const handleVerifyOtp = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const res = await fetch('/api/auth/verify', { // Use your actual backend URL
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, otp }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to verify OTP');

            // On successful login, save the token and redirect
            localStorage.setItem('admin_token', data.token);
            router.push('/admin/dashboard'); // Redirect to the admin dashboard

        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <h1>Admin Login</h1>
            {!showOtpInput ? (
                <form onSubmit={handleRequestOtp}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your admin email"
                        required
                    />
                    <button type="submit" disabled={isLoading}>
                        {isLoading ? 'Sending...' : 'Send OTP'}
                    </button>
                </form>
            ) : (
                <form onSubmit={handleVerifyOtp}>
                     <p>An OTP has been sent to {email}.</p>
                    <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Enter OTP"
                        required
                    />
                    <button type="submit" disabled={isLoading}>
                        {isLoading ? 'Verifying...' : 'Login'}
                    </button>
                </form>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default AdminLoginPage;
