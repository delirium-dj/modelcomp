# In short, we would like to have a page on our website that will list acttive promotions:

/promotions/ - We need a webpage on which we will follow active promotions or put our referral links as promotions if new users will get discousnt or some benefits. In return we will get rewards.

## Active Promotions

- we need list of active promotions for AI models with short description what that promotion offers and how to participate.
- We need some kind of task, like tasks in E:\qwik\modelcomp\tasks in .md file that we can give our AI research models to investigate and search on internet and update the li st on/promotions page in .md format. This page will be updated time to time and model will be given task to update it time to time.goal is to get website visitors to use some AI model using our referral link to get some rewards and benefits. goal is to get our page as a source where people can come and check for active promotions for AI models and can use our referral links to get some rewards and benefits.

### Referral Promotions

- we need list of active referral promotions for AI models with short description what that promotion offers and how to participate.

### AI resarcher task

- Given AI research models will research the internet to find promotions on other websithat are relevant to our websitevisitors and will bring back discoveries for a revi- Once discoveries are reviewed and approved, AI researcher model will update the list on /promotions page in .md format. As promotions might include user interraction for creating refferal links, model should prompt ufor login or sign up using our referral links.

---

2026-11-12 — STEM: Gemini 3.8 Flash

## Honest Analysis & Strategic Critique

> [!IMPORTANT]
> **Affiliate & Referral Engineering Rules:**
> A dedicated standard operating procedure has been created at [202611affiliaterules.md](file:///e:/qwik/modelcomp/202611affiliaterules.md). Every junior developer and AI agent must read and apply those rules before modifying provider metadata or building promotion components.

The desire to monetize visitors and save them money via active promotions/referrals is completely natural. However, doing it wrong will **destroy the site's single greatest asset: its research independence and trust score with both humans and AI answer engines (SearchGPT, Perplexity, Gemini)**.

Here is the candid evaluation of the notes above, followed by architectural suggestions and a viable execution model.

---

### 1. The Core Tension: Brand Integrity vs. Affiliate Spam (Deep Dive)

#### A. How Google Search & GEO Engines (Gemini, Perplexity, ChatGPT Search) Actually Evaluate This
1. **Google Search Essentials & Commercial Link Policy:**
   - Google does not ban affiliate links, but it strictly requires **link qualification**.
   - Outbound commercial links without `rel="sponsored"` or `rel="nofollow"` are classified as manipulative unnatural links. Leaving bare `rel="noopener noreferrer"` on affiliate links risks algorithmic domain penalties.
2. **The GEO "Commercial Bias" Penalty:**
   - Generative answer engines cite sources based on **unbiased consensus**.
   - If an AI crawler detects that a site's benchmark comparisons or model profile pages point visitors to affiliate funnels, the AI's neutrality filters flag the domain as commercially compromised and remove it from LLM search citations.
3. **The Solution — The Air Gap:**
   - Keep benchmark models, `average.md`, and `/compare/` **100% affiliate-free**.
   - Quarantine affiliate links to the `/promotions/` directory with explicit `rel="noopener noreferrer nofollow sponsored"` markup and an FTC disclosure banner.
   - For complete guidelines on how to structure `meta.json` without poisoning evidence trails, see [202611affiliaterules.md](file:///e:/qwik/modelcomp/202611affiliaterules.md).

#### B. Audit of Current `routes/providers` Referral Links (e.g. AgentRouter, Gonka)
- **The Issue:** `providers/agentrouter/meta.json` currently uses `https://agentrouter.org/register?aff=a4U6` as both its `officialUrl` and its `evidenceUrl`.
- **The Risk:** 
  1. An affiliate URL in `evidenceUrl` damages trust when an AI crawler verifies facts.
  2. `src/routes/providers/index.tsx` renders links with bare `rel="noopener noreferrer"`.
- **The Action Plan:**
  - Update `meta.json`: Keep `officialUrl` and `evidenceUrl` pure (e.g., `https://agentrouter.org` and `https://agentrouter.org/docs/faq`), and move the affiliate URL to a dedicated `referralUrl` field.
  - In `src/routes/providers/index.tsx`: Dynamically inject `rel="noopener noreferrer nofollow sponsored"` whenever `provider.referralUrl` is rendered. Full details in [202611affiliaterules.md](file:///e:/qwik/modelcomp/202611affiliaterules.md).

---

### 2. Critique of the Proposed Workflow

The notes suggest:

> _"AI research models will research the internet... and update the list on /promotions page in .md format. As promotions might include user interaction for creating referral links, model should prompt user for login or sign up..."_

#### What Works:

- **Periodic Agent Sweeps:** Having AI research agents perform discovery sweeps for developer deals is brilliant. We already have the exact pattern in `tasks/provider-audit.md` (which already scans providers for active promos and free credits).
- **Human-in-the-Loop Review:** Discoveries must be reviewed and approved before being published—promotions expire rapidly or change terms.

#### What Needs Correction:

- **No Direct Markdown Editing of Site Routes:** In our Qwik static site architecture (`pnpm build:direct`), pages should not be raw unvalidated markdown dumped directly into routes.
- **Structured Data Pipeline (`promotions.json`):** Instead of an agent editing `.tsx` or raw `.md` files directly, the agent should output clean, structured entries into `promotions/deals.json` (or a dedicated `promotions/*.json` / frontmatter format).
- **Interactive Prompts vs. Headless Execution:** AI subagents run headlessly in batch/background turns. They cannot "wait" for you to click sign-up mid-sweep. The clean pattern:
  - Agent discovers: _"Provider X offers a $50 referral bonus program at URL Y."_
  - Agent logs: _"ACTION REQUIRED: Operator must generate referral link at URL Y."_
  - Operator inserts their personal referral code into a local config.
  - The build script attaches the operator's referral link automatically.

---

### 3. Data Architecture: How to Structure a Promotion

A promotion is only valuable if it doesn't rot. Every promotion entry should have this exact schema:

```json
{
  "id": "openrouter-free-zen",
  "provider": "openrouter",
  "providerName": "OpenRouter",
  "type": "bonus_credits", // "bonus_credits" | "free_tier" | "discount" | "referral_reward"
  "title": "$10 Free Inference Credits for New Developers",
  "description": "Receive $10 credit towards frontier models upon account verification.",
  "dealUrl": "https://openrouter.ai/register",
  "referralUrl": "https://openrouter.ai/register?ref=MODELCOMP",
  "promoCode": "DEV2026", // optional
  "discountValue": "$10 Credits",
  "requiresCard": false,
  "requiresAuth": true,
  "verifiedDate": "2026-11-12",
  "expiresDate": "2026-12-31", // or null if ongoing
  "status": "active" // "active" | "expired" | "unverified"
}
```

---

### 4. Designing the Researcher Task (`tasks/promotions-audit.md`)

To implement the automated research task, we should model it directly on `tasks/provider-audit-brief.md`:

1. **Target List:** Iterate through all existing 150+ providers in `providers/*/meta.json`.
2. **Search Queries:**
   - `"<provider>" free credits | developer grant | signup promo 2026`
   - `"<provider>" referral program | invite friends earn compute`
   - `"<provider>" discount code | API price drop`
3. **Validation Criteria:**
   - Must be verified against an official host (`officialUrl` or official docs). No third-party scam coupon aggregators.
   - Must record: Expiration date, payment method requirement (card needed? ; GitHub or Google account needed?), and whether the visitor benefits.
4. **Output Format:**
   - Appends verified deals to a staging file: `temp/promotions-staging.json`.
   - Flags referral registration opportunities for the operator in the run summary.

---

### 5. UI & Presentation for `/promotions/`

- **URL:** `/promotions/` (clean, correctly spelled slug).
- **Layout:** Reuses the existing `src/components/v2/` canvas (`V2Header`, `V2Footer`, `VendorIcon`, `usePageTheme`).
- **Cards & Filtering:**
  - Filter chips: `All`, `Free Credits ($0)`, `Discounts`, `Referral Perks`.
  - Clean cards showing: Provider icon, Benefit badge (e.g. `+$25 Free Credits`), requirements tag (`No Card Needed`), and as-of verification date.
  - Primary button: `Claim Offer →` (points to `referralUrl` if set, otherwise canonical `dealUrl`).
  - Secondary button: `View Model Benchmarks →` (links internally to models hosted by that provider). This generates high-value internal backlinks!

---

### 6. Actionable Roadmap

1. **Step 1: Data Contract**
   - Create `promotions/promotions.json` with initial verified deals harvested from existing `providers/*/meta.json` (such as Cerebras $5 credit, AgentRouter daily credits, Kie.ai welcome grant).
2. **Step 2: Research Task Definition**
   - Create `tasks/promotions-audit.md` defining the search routine, noise rules, and verification criteria for AI research models.
3. **Step 3: Route Implementation or Sister Domain Spin-off**
   - Build `src/routes/promotions/index.tsx` using `V2Header`/`V2Footer`, with clear affiliate disclosures and semantic cards.
   - Alternatively (and recommended), deploy this UI to a dedicated sister domain (e.g., `aideals.fyi` or `aideals.link`), and link it to `modelcomp` solely as a `rel="sponsored"` entry in `RESEARCH_BACKERS` in `V2Footer.tsx`.
4. **Step 4: Sync Integration**
   - Add a lightweight validator in `scripts/sync-data.mjs` that checks for expired deals during `pnpm sync` and warns if an active promo has passed its `expiresDate`.

---

### 7. The Dedicated Sister Domain Strategy (The Ultimate Air Gap)

If deploying promotions to a separate domain:
- **Zero Risk to `modelcomp`:** All affiliate tracking parameters (`?aff=`, `?ref=`) are housed off-domain. `modelcomp` remains 100% academic and unmonetized, retaining maximum citation authority across Gemini, ChatGPT Search, and Perplexity.
- **Footer Backer Placement:** The sister site is added to `RESEARCH_BACKERS` in [`src/components/v2/V2Footer.tsx`](file:///e:/qwik/modelcomp/src/components/v2/V2Footer.tsx#L122) with `rel="sponsored noopener noreferrer"`. Google explicitly recognizes this as compliant sponsored attribution.
- **Mutual Synergy:** The sister domain gains instant authority by embedding `modelcomp` verified benchmarks (*"Deals paired with objective benchmark metrics from ModelComp.com"*). Full rules in [202611affiliaterules.md](file:///e:/qwik/modelcomp/202611affiliaterules.md).
