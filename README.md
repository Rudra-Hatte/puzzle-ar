# Puzzle AR Platform

This project helps students learn chemistry experiments using puzzle-based AR playback.

## What is implemented now

- Interactive puzzle-image scanner powered by MindAR runtime events
- Puzzle-only tracking flow with target compile from puzzle image
- Dynamic video source playback per puzzle (MP4/HLS preferred, YouTube fallback)
- Admin authentication with single-admin seed account
- Admin puzzle CRUD with active/inactive status
- Media upload endpoints for puzzle image/video
- Optional default puzzle seeding with image + MP4 + YouTube fallback

## Local setup

1. Copy `.env.example` to `.env`.
2. Update secrets and MongoDB URI in `.env`.
3. Install dependencies:
	- `npm install`
4. Run frontend + backend together:
	- `npm run dev`
5. Open scanner:
	- `http://localhost:3000`
6. Open admin:
	- `http://localhost:3000/admin/login`

## iPhone Brave verification (HTTPS)

iPhone browsers require HTTPS for camera access. Use temporary HTTPS tunnels when testing from your phone.

1. Start backend in terminal A:
	- `npm run server`
2. Start backend tunnel in terminal B and keep it running:
	- `npx localtunnel --port 5000`
3. Copy backend tunnel URL from terminal B.
4. In `.env`, set:
	- `REACT_APP_API_BASE_URL=<BACKEND_TUNNEL_URL>/api`
	- `CORS_ORIGINS=*`
5. Restart backend (terminal A) so CORS env is reloaded.
6. Start frontend in terminal C:
	- `npm run client`
7. Start frontend tunnel in terminal D and keep it running:
	- `npx localtunnel --port 3000`
8. Open frontend tunnel URL on iPhone Brave.
9. Allow camera permission when prompted.
10. Point camera at the convex-lens puzzle image and keep full puzzle in frame.

Expected result:
- Status moves to scanner live, then puzzle locked.
- AR video appears anchored on the puzzle image.
- If you move away, target lost appears; moving back restores AR overlay.

## Default admin (development)

- Username: `admin`
- Password: `admin123`

These values are controlled by `.env` and should be changed for production.

## Default puzzle seed (development)

By default, the backend seeds one active puzzle using:

- Image: `/images/convex-lens.jpeg`
- Direct video: `/videos/convex-lens.mp4`
- YouTube fallback: `SEED_DEFAULT_PUZZLE_YOUTUBE_URL`

You can disable this by setting `SEED_DEFAULT_PUZZLE=false` in `.env`.

## API overview

- `POST /api/auth/login`
- `GET /api/auth/me`
- `GET /api/public/puzzles/active`
- `GET /api/public/puzzles/resolve?markerId=...` (optional utility)
- `GET /api/public/puzzles/resolve?puzzleId=...` (optional utility)
- `GET /api/admin/puzzles` (admin)
- `POST /api/admin/puzzles` (admin)
- `PUT /api/admin/puzzles/:id` (admin)
- `DELETE /api/admin/puzzles/:id` (admin)
- `POST /api/admin/puzzles/upload` (admin)

## Production deploy (Netlify + API)

Important: this app needs both frontend and backend. Netlify hosts the frontend only.

1. Deploy backend API (recommended: Render web service using `server/index.js`).
2. Set backend env vars:
	- `MONGODB_URI`
	- `JWT_SECRET`
	- `JWT_EXPIRES_IN=12h`
	- `SEED_DEFAULT_ADMIN=true`
	- `ADMIN_USERNAME=admin`
	- `ADMIN_PASSWORD=admin123`
	- `SEED_DEFAULT_PUZZLE=true`
	- `SEED_DEFAULT_PUZZLE_IMAGE_URL=/images/convex-lens.jpeg`
	- `SEED_DEFAULT_PUZZLE_VIDEO_URL=/videos/convex-lens.mp4`
	- `CORS_ORIGINS=https://<your-netlify-site>.netlify.app`
3. Deploy frontend to Netlify.
4. In Netlify environment variables set:
	- `REACT_APP_API_BASE_URL=https://<your-backend-domain>/api`
5. Trigger a Netlify rebuild after setting env vars.

## iPhone Brave final test checklist

Use your live Netlify URL and the physical puzzle image.

1. Open scanner page from your Netlify URL on iPhone Brave.
2. Allow camera permission.
3. Ensure your printed puzzle image is fully visible and well lit.
4. Wait for status to change to scanner live, then puzzle locked.
5. Confirm AR video plays anchored on the puzzle.
6. Move phone away until target lost appears.
7. Move back to the puzzle and confirm video resumes.
8. Open admin at `/admin/login`, login, and verify at least one active puzzle exists.

If lock does not happen:
- Check browser console/network for `/api/public/puzzles/active` failure.
- Confirm backend CORS includes your exact Netlify origin.
- Confirm default puzzle is active and includes puzzle image/video URLs.
