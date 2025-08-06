// pages/admin/login.tsx
import { useState, FormEvent, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';
import { logConfiguration } from '../../utils/configChecker';

const AdminLoginPage = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [showOtpInput, setShowOtpInput] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const router = useRouter();

    // Set the admin email on component mount
    useEffect(() => {
        setEmail(process.env.NEXT_PUBLIC_ADMIN_EMAIL || '');
        
        // Log configuration for debugging
        logConfiguration();
        
        // Check if user is already logged in
        const token = localStorage.getItem('admin_token');
        if (token) {
            router.push('/admin/dashboard');
        }
    }, [router]);

    const handleRequestOtp = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        setSuccessMessage('');

        try {
            // Step 1: Call your backend to generate and get the OTP
            console.log('🔄 Requesting OTP for email:', email);
            console.log('🌐 API URL:', process.env.NEXT_PUBLIC_API_URL);
            
            const res = await fetch('/api/auth/generate-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();
            console.log('📝 Backend response:', data);
            
            if (!res.ok) {
                console.error('❌ Backend error:', data);
                throw new Error(data.error || 'Failed to generate OTP');
            }

            const generatedOtp = data.otp;
            console.log('🔢 Generated OTP:', generatedOtp);

            // Step 2: Use EmailJS to send the OTP to the admin email
            console.log('📧 Attempting to send email with EmailJS...');
            console.log('📧 EmailJS Config:', {
                serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ? 'SET' : 'NOT SET',
                toEmail: email
            });
            
            const templateParams = {
                to_email: email, // This will always be the admin email
                passcode: generatedOtp, // Match this key to the variable in your EmailJS template
            };

            const emailResult = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );
            
            console.log('✅ EmailJS Success:', emailResult);

            setShowOtpInput(true); // Show the OTP input field on success
            setSuccessMessage('OTP has been sent to your email address!');

        } catch (err) {
            console.error('❌ Full error details:', err);
            console.error('❌ Error message:', err instanceof Error ? err.message : 'Unknown error');
            console.error('❌ Error stack:', err instanceof Error ? err.stack : 'No stack trace');
            
            // Provide more specific error messages
            let errorMessage = 'An error occurred';
            if (err instanceof Error) {
                if (err.message.includes('fetch')) {
                    errorMessage = 'Network error: Could not connect to server. Please check your internet connection.';
                } else if (err.message.includes('generate-otp')) {
                    errorMessage = 'Failed to generate OTP. Please try again.';
                } else if (err.message.includes('EmailJS') || err.message.includes('email')) {
                    errorMessage = 'Failed to send email. Please check your email configuration or try again later.';
                } else {
                    errorMessage = err.message;
                }
            }
            
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleVerifyOtp = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        setSuccessMessage('');

        try {
            const res = await fetch('/api/auth/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, otp }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to verify OTP');

            // On successful login, save the token and redirect
            localStorage.setItem('admin_token', data.token);
            setSuccessMessage('Login successful! Redirecting...');
            
            // Small delay to show success message
            setTimeout(() => {
                router.push('/admin/dashboard');
            }, 1000);

        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    const handleBackToSendOtp = () => {
        setShowOtpInput(false);
        setOtp('');
        setError('');
        setSuccessMessage('');
    };

    return (
        <div style={{ 
            maxWidth: '400px', 
            margin: '100px auto', 
            padding: '20px', 
            border: '1px solid #ddd', 
            borderRadius: '8px',
            backgroundColor: '#f9f9f9'
        }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Admin Login</h1>
            <p style={{ textAlign: 'center', marginBottom: '30px', color: '#666' }}>
                Access restricted to admin user only
            </p>
            
            {!showOtpInput ? (
                <form onSubmit={handleRequestOtp}>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                            Admin Email:
                        </label>
                        <input
                            type="email"
                            value={email}
                            placeholder="Admin Email"
                            readOnly
                            style={{ 
                                width: '100%', 
                                padding: '10px', 
                                backgroundColor: '#f5f5f5',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                fontSize: '16px'
                            }}
                        />
                    </div>
                    <button 
                        type="submit" 
                        disabled={isLoading}
                        style={{
                            width: '100%',
                            padding: '12px',
                            backgroundColor: isLoading ? '#ccc' : '#007bff',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            cursor: isLoading ? 'not-allowed' : 'pointer'
                        }}
                    >
                        {isLoading ? 'Sending OTP...' : 'Send OTP to Admin Email'}
                    </button>
                </form>
            ) : (
                <form onSubmit={handleVerifyOtp}>
                    <div style={{ marginBottom: '20px' }}>
                        <p style={{ marginBottom: '15px', color: '#28a745' }}>
                            An OTP has been sent to {email}.
                        </p>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                            Enter OTP:
                        </label>
                        <input
                            type="text"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder="Enter 6-digit OTP"
                            required
                            maxLength={6}
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                fontSize: '16px',
                                textAlign: 'center',
                                letterSpacing: '2px'
                            }}
                        />
                    </div>
                    <button 
                        type="submit" 
                        disabled={isLoading || otp.length !== 6}
                        style={{
                            width: '100%',
                            padding: '12px',
                            backgroundColor: (isLoading || otp.length !== 6) ? '#ccc' : '#28a745',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            cursor: (isLoading || otp.length !== 6) ? 'not-allowed' : 'pointer',
                            marginBottom: '10px'
                        }}
                    >
                        {isLoading ? 'Verifying...' : 'Login'}
                    </button>
                    <button 
                        type="button"
                        onClick={handleBackToSendOtp}
                        style={{
                            width: '100%',
                            padding: '10px',
                            backgroundColor: '#6c757d',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            fontSize: '14px',
                            cursor: 'pointer'
                        }}
                    >
                        Back to Send OTP
                    </button>
                </form>
            )}
            
            {error && (
                <div style={{ 
                    marginTop: '15px', 
                    padding: '10px', 
                    backgroundColor: '#f8d7da',
                    color: '#721c24',
                    border: '1px solid #f5c6cb',
                    borderRadius: '4px'
                }}>
                    {error}
                </div>
            )}
            
            {successMessage && (
                <div style={{ 
                    marginTop: '15px', 
                    padding: '10px', 
                    backgroundColor: '#d4edda',
                    color: '#155724',
                    border: '1px solid #c3e6cb',
                    borderRadius: '4px'
                }}>
                    {successMessage}
                </div>
            )}
        </div>
    );
};

export default AdminLoginPage;
