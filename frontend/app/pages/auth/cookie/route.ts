// app/api/auth/setTokens/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { accessToken, refreshToken } = await req.json();

        if (!accessToken || !refreshToken) {
            return NextResponse.json({ message: 'Access token and refresh token are required' }, { status: 400 });
        }

        // Create a response object
        const response = NextResponse.json({ message: 'Tokens set in cookies' });

        // Set cookies directly on the response
        response.cookies.set('accessToken', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/',
        });

        response.cookies.set('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/',
        });

        return response;
    } catch (error) {
        console.error('Error setting tokens:', error);
        return NextResponse.json({ message: 'Failed to set tokens' }, { status: 500 });
    }
}
