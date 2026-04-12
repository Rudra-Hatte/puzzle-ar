# Puzzle AR Platform

This project helps students learn chemistry experiments using puzzle-based AR playback.

## What is implemented now

- Interactive scanner with API-driven puzzle resolution
- QR scanning with marker-mode fallback architecture
- Dynamic video source playback per puzzle (MP4/HLS preferred, YouTube fallback)
- Admin authentication with single-admin seed account
- Admin puzzle CRUD with active/inactive status
- Media upload endpoints for puzzle image/video
- Auto-generated QR payload and preview per puzzle

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

## Default admin (development)

- Username: `admin`
- Password: `admin123`

These values are controlled by `.env` and should be changed for production.

## API overview

- `POST /api/auth/login`
- `GET /api/auth/me`
- `GET /api/public/puzzles/active`
- `GET /api/public/puzzles/resolve?code=...`
- `GET /api/public/qr/:scanCode`
- `GET /api/admin/puzzles` (admin)
- `POST /api/admin/puzzles` (admin)
- `PUT /api/admin/puzzles/:id` (admin)
- `DELETE /api/admin/puzzles/:id` (admin)
- `POST /api/admin/puzzles/upload` (admin)

## Marker roadmap

Marker mode is structured in the scanner UI and detection adapter flow. The next step is plugging in MindAR target events to replace the marker placeholder detector while keeping QR fallback for reliability.
