# Architecture Document: Digital PM Portfolio

## 1. Overview
A responsive, single-page digital Product Management portfolio built using **Next.js (App Router)** and **Tailwind CSS**. The application will feature a minimalist, highly scannable design inspired by Notion's aesthetic, serving to transition a 6-year interior design background into a compelling PM narrative.

## 2. Technology Stack
*   **Framework:** Next.js (App Router)
*   **Styling:** Tailwind CSS (utility-first styling for layout and typography)
*   **Icons:** Lucide-React (clean, minimalist SVG icons)
*   **Typography:** Google Fonts (e.g., *Inter* or *Geist* to match Notion's clean typography)
*   **Deployment:** Vercel (recommended for Next.js)

## 3. Project Structure
The project will follow a modular, component-driven architecture using Next.js `src/` directory.

```text
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Global layout, fonts, and metadata
│   │   ├── page.tsx           # Main single-page assembly
│   │   └── globals.css        # Tailwind directives and base styles
│   ├── components/
│   │   ├── ui/                # Base reusable components (Buttons, Badges)
│   │   ├── layout/            # Layout components (Navbar, Footer, Container)
│   │   └── sections/          # Page sections
│   │       ├── Hero.tsx       # PM Value Proposition
│   │       ├── Experience.tsx # Translated Interior -> PM timeline
│   │       └── Projects.tsx   # Featured Projects case studies
│   └── data/
│       └── portfolioData.ts   # Centralized data file (resume content, project details)
├── public/                    # Static assets (Resume PDF, images)
├── tailwind.config.ts         # Tailwind theme configuration
└── package.json
```

## 4. Component Breakdown

### 4.1. Navigation (`Navbar.tsx`)
*   **Placement:** Sticky at the top.
*   **Content:** Name/Logo on the left, primary navigation links (Experience, Projects) in the center, and a prominent **"Download Resume" CTA button** on the right.

### 4.2. Hero Section (`Hero.tsx`)
*   **Content:** Strong PM value proposition emphasizing the transition, 6 years of end-to-end lifecycle management experience, and cross-functional leadership.
*   **Visuals:** Clean typography, lots of whitespace, possibly a professional headshot or minimalist abstract element.

### 4.3. Featured Projects (`Projects.tsx`)
*   **Layout:** CSS Grid layout containing project cards.
*   **Content:** Two specific case study cards:
    1.  *Myntra AI Review Synthesizer*
    2.  *ScopeSync B2B2C Platform*
*   **Interactivity:** Hover effects on cards (slight lift or shadow) to indicate clickability.

### 4.4. Experience Timeline (`Experience.tsx`)
*   **Content:** Chronological rendering of the translated resume from `context.md` (Homworks, Homelane, Av Designers & Interiors, etc.).
*   **Style:** Minimalist timeline or structured list highlighting roles, dates, and bullet points focusing on PM skills (stakeholder management, scoping, execution).

### 4.5. Footer (`Footer.tsx`)
*   **Content:** Contact information (Phone, Email, LinkedIn) and copyright.

## 5. Design System (Tailwind Configuration)
To achieve the "Notion aesthetic":
*   **Colors:** 
    *   Background: Pure White (`#ffffff`) or Off-White (`#fbfbfa`)
    *   Text: Dark Gray (`#37352f` - Notion's text color) for primary, medium gray for secondary.
    *   Accents: Very subtle grays for borders and hover states (`#ebeced`).
*   **Typography:** Sans-serif (Inter) for clean readability.
*   **Spacing:** Generous padding and margins to ensure scannability.
*   **Borders:** Thin, subtle borders with very slight rounding (`rounded-md`).
*   **Shadows:** Minimal shadows, used primarily for interactive elements or floating navbars.

## 6. Data Management
All textual content (experience, project descriptions, skills) will be abstracted into `src/data/portfolioData.ts`. This ensures the UI components remain clean and the portfolio content is easily updatable in the future without touching the layout code.
