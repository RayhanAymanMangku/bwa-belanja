import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pfoffzpwdzvqpochxjtn.supabase.co'
      }
    ]
  },
  serverActions: {
    bodySizeLimit: '10mb', // Atur batas ukuran body sesuai kebutuhan Anda
  },
};

export default nextConfig;
