# Spider-Man: Brand New Day Quiz Registration

Production-ready registration and UPI payment-proof flow for Framedrop Interactive. The quiz itself is deliberately not part of this website.

## Local setup

1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env.local` and replace every event/contact/UPI placeholder.
3. Start the app: `npm run dev`
4. Run `npm run build` before deploying.

## Google Sheets + Apps Script

1. Create a Google Sheet and name it anything you like.
2. Open **Extensions → Apps Script**.
3. Replace the editor contents with `google-apps-script/Code.gs` from this project.
4. Click **Deploy → New deployment → Web app**.
5. Set **Execute as** to yourself and **Who has access** to Anyone.
6. In Apps Script **Project Settings → Script Properties**, add `ADMIN_SECRET` with a long random value.
7. Authorize Sheets and Drive access, deploy, and copy the `/exec` URL.
8. Add it as `NEXT_PUBLIC_APPS_SCRIPT_URL`. Set `APPS_SCRIPT_ADMIN_SECRET` to the same Script Property value and choose a separate `ADMIN_PASSWORD`.

The script creates the `Registrations` tab and header row automatically. It stores uploaded screenshots in a Drive folder named `Brand New Day Payment Proofs`, warns on duplicate team names, and defaults every payment status to `Pending`.

## Sheet columns

Timestamp, Team Name, College, Member 1 Name, Member 1 Phone, Member 1 Email, Member 1 Department, Member 1 Year, Member 2 Name, Member 2 Phone, Member 2 Email, Member 2 Department, Member 2 Year, Transaction ID, Payment Screenshot URL, Payment Status, Entry Status, Remarks.

## Organizer admin

Visit `/admin` and sign in with `ADMIN_PASSWORD`. Organizers can approve payments, mark venue entry, add remarks, search registrations, view payment proofs, and export all registrations as CSV.

## Deploy to Vercel

Import the repository in Vercel, add the variables from `.env.example`, and deploy with the standard Next.js preset. Update the UPI ID and event/registration dates before publishing.
