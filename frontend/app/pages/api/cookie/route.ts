import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose'; // To decode and verify JWT tokens

export async function GET(req: NextRequest) {
    try {
        // Retrieve the JWT token from the cookies
        const tokenCookie = req.cookies.get('azouaou');

        if (!tokenCookie) {
            return NextResponse.json({ message: 'No token found in cookies' }, { status: 401 });
        }

        const token = tokenCookie.value;

        try {
            // Decode and verify the JWT token using the secret key from the environment variables
            const secret = new TextEncoder().encode(process.env.JWT_SECRET as string);
            const { payload } = await jwtVerify(token, secret);

            // Return the user information from the payload
            return NextResponse.json({ user: payload }, { status: 200 });
        } catch (error) {
            console.error('Token verification failed:', error);
            return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
        }
    } catch (error) {
        console.error('Error fetching user:', error);
        return NextResponse.json({ message: 'Failed to retrieve user' }, { status: 500 });
    }
}
