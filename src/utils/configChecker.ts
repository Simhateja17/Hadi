// utils/configChecker.ts
export const checkConfiguration = () => {
    const requiredEnvVars = [
        'NEXT_PUBLIC_EMAILJS_SERVICE_ID',
        'NEXT_PUBLIC_EMAILJS_TEMPLATE_ID', 
        'NEXT_PUBLIC_EMAILJS_PUBLIC_KEY',
        'NEXT_PUBLIC_ADMIN_EMAIL',
        'NEXT_PUBLIC_API_URL'
    ];

    const missingVars: string[] = [];
    const configStatus: { [key: string]: string } = {};

    requiredEnvVars.forEach(varName => {
        const value = process.env[varName];
        if (!value) {
            missingVars.push(varName);
            configStatus[varName] = 'MISSING';
        } else {
            configStatus[varName] = varName.includes('KEY') ? 'SET (HIDDEN)' : value;
        }
    });

    return {
        isValid: missingVars.length === 0,
        missingVars,
        configStatus,
        getAllConfig: () => configStatus
    };
};

export const logConfiguration = () => {
    const config = checkConfiguration();
    
    console.log('🔧 CONFIGURATION CHECK:');
    console.log('========================');
    
    Object.entries(config.configStatus).forEach(([key, value]) => {
        const status = value === 'MISSING' ? '❌' : '✅';
        console.log(`${status} ${key}: ${value}`);
    });
    
    if (!config.isValid) {
        console.log('\n⚠️  MISSING ENVIRONMENT VARIABLES:');
        config.missingVars.forEach(varName => {
            console.log(`   - ${varName}`);
        });
    } else {
        console.log('\n✅ All required environment variables are set!');
    }
    
    return config;
};
