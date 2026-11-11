# QoDuck — findings by MiMo 2.6 Flash

- Source: Qoder official docs (docs.qoder.com/events/qoduck-free), Alibaba Cloud / Qoder X posts, OpenCode Zen meta, press (Startup Fortune, AICoder, Runtimewire), Stealth Models (tokenizer fingerprint), BenchLM/llmbenchmark/Artificial Analysis (absence checks)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** QoDuck (`opencode/qoduck` on OpenCode Zen) — an **anonymous "stealth" coding-and-reasoning preview model** shipped into Qoder (Alibaba-linked coding platform, Bright Zenith Private Limited) on **2026-11-07 (Singapore time)**. Official wording: "a stealth model whose identity has yet to be disclosed"; Alibaba Cloud's official X added **"Don't ask where it came from."**
- **Short description:** The community consensus — **unconfirmed** — is that QoDuck is a **Qwen 4 checkpoint**: a tokenizer fingerprint test places it in the Qwen family (Stealth Models, unofficial), Qwen's account teased "The becoming begins" on 2026-11-06 (one day before launch), and a 2026-10-28 merge in Qwen's coding-tool repository sized `qwen4` models at a **1M-token context**. Testers report its coding output **surpasses Qwen 3.8 Max** (BenchLM: 64.7), and one unofficial comparison had it crafting a detailed pixel-art city faster than DeepSeek v4.1 Flash. **Neither Alibaba nor Qoder has confirmed any identity, size, parameter count, or architecture — none of the above may be stated as a formal release.** Zero published benchmarks of any kind (see Raw benchmarks).
- **Provider / access:** Qoder International app (web/desktop) during the promotion; OpenCode Zen `opencode/qoduck` (standard Zen rate). **Not** in Qoder IDE, JetBrains plugin, CLI, or Team/Enterprise accounts during the promo. Proprietary, no weights.
- **Release / knowledge:** **2026-11-07** (docs + official X). Knowledge cutoff unknown (undisclosed).
- **Context window:** **1,048,576 total (65,536 max output)** per repo meta — **conflict:** Startup Fortune (2026-11-08) notes "the 1 million context figure comes from users, not from the docs"; official docs state no context figure. Both readings recorded.
- **Modalities:** **text, image in; text, code out** (repo meta); adaptive/"thinking" intensity selectable (official promo text: 0.0× applies "even at the highest thinking intensity"). Zero vision rows exist.
- **Pricing:** **Promo (official docs, retrieved 2026-11-11):** daily free allowance at **0.0× Credits** (standard rate **0.5×**) from **2026-11-07 to 2026-11-11 10:00 (UTC+8)**, individual plans only (Free/Pro Trial/Lite/Pro/Pro+/Ultra); after the allowance, 0.5× standard; **"Qoduck will be removed when the promotion ends."** **Conflict:** press reading of the same docs on 2026-11-08 (Startup Fortune) reported the end date as **"yet to be determined"** — the fixed Nov-11 end date appears to be a docs update; both readings recorded. No public API dollar price anywhere (no AA/llmbenchmark page). Vendor caveat: high demand → slow responses at peak times.

### Raw benchmarks found

> Primary: official Qoder docs and X posts; press coverage; absence checks
> against every aggregator (2026-11-11).

Agentic / tool use:

- **No agentic rows exist** — no Terminal-Bench, τ²/τ³, GDPval, OSWorld, BrowseComp, MCP Atlas, Toolathlon, or Claw-Eval figure published by vendor or any third party (re-checked 2026-11-11: BenchLM, llmbenchmark, Artificial Analysis all 404 for this model).
- Qualitative only: repo meta standout — "rapid repository-scale multi-file refactoring and migration inside the Qoder developer environment" (vendor positioning, no metric).

Coding:

- **No numeric coding rows exist** (vendor: "no official … public leaderboard scores"; press: "No independent benchmark has been published that I could find"). Anecdotal only: tester reports say coding output **surpasses Qwen 3.8 Max** (unofficial); one unofficial comparison had it **faster than DeepSeek v4.1 Flash at building a detailed pixel-art city**.

Reasoning & knowledge:

- **No GPQA/HLE/AIME/MMLU-Pro/Intelligence-Index row exists** anywhere (all three aggregators 404). Qualitative only: positioned as a "high-reasoning" model with adaptive thinking (community description); one unofficial tester claims it "beat every released Qwen on a knowledge check" (stealthmodels.com — unconfirmed, not credited).

Multimodal / long context:

- **No vision row, no retrieval row (MRCR/RULER/LCR)** — the 1M window is itself user-sourced (conflict above), and no aggregator has measured this model at all.

### Normalized scores (1–100)

- **Tool use: 58/100.** Zero agentic benchmark rows of any kind; scored purely on qualitative repository-scale refactoring/migration positioning inside Qoder — an evidence-free edge slightly above floor because agentic coding is the product's explicit purpose, with no metric to verify it.
- **Reasoning: 64/100.** "High-reasoning" with selectable thinking intensity and an unofficial knowledge-check-win claim, but zero GPQA/HLE/index rows and an undisclosed identity — mid, evidence-free edge; nothing verified to push it higher or lower.
- **Context window: 86/100.** 1,048,576 per repo meta lands in the ≥1M tier (anchor 95), but the figure is **user-sourced rather than vendor-stated** (Startup Fortune conflict) and there are **zero retrieval measurements** — pulled to 86, the low end of the 1M band, same logic as any unmeasured-window deduction.
- **Multimodal: 62/100.** Text+image in, text/code out per spec — image band, evidence-free edge (no MMMU/vision row exists to reward or penalize).
- **Coding: 69/100.** The model's entire reason to exist, with consistent qualitative tester praise (beats Qwen 3.8 Max per unofficial reports; pixel-art demo vs DeepSeek v4.1 Flash) — but **not a single numeric row** (no LCB/SWE-bench/Vibe/SciCode), so it stays under the mid-70s on absence of verifiable evidence.
- **Cost efficiency: 78/100** (excluded from Overall). Free daily allowance at 0.0× during the promotion and a cheap-sounding 0.5× standard rate afterward — but the promo **ends 2026-11-11 10:00 UTC+8** (or "TBD" per the earlier docs reading), the model is promised to be **removed when it ends**, no dollar-denominated API price exists anywhere, and free quota resets daily rather than unlimited.
- **Overall Score: 68/100.** (58+64+86+62+69)/5 = 339/5 = 67.8 → 68 — a four-day-old stealth preview with a promising 1M claim and genuine tester enthusiasm in its coding niche, but **zero published benchmarks on any aggregator**, an undisclosed identity, a user-sourced context figure, and a promo that expires today; scored on absolute evidence rather than the queue line (queue 80), with the Qwen-4 suspicion recorded as rumor only.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-11
- Method: fresh public internet research (original creation, user-approved enrichment pass) — official Qoder docs `docs.qoder.com/events/qoduck-free` (promo terms, dates, scope, removal notice), Alibaba Cloud/Qoder official X posts ("Don't ask where it came from"), OpenCode Zen meta.json (id, context, modalities, pricing notes), press (Startup Fortune 2026-11-08 — Qwen-rumor teardown and "no independent benchmark" finding, AICoder 2026-11-07 — official-source summary and "no leaderboard scores" finding, Runtimewire/Stealth Models — tokenizer fingerprint), and absence checks against BenchLM, llmbenchmark.ai, and Artificial Analysis (all 404, 2026-11-11). Scores are normalized 1–100 interpretations, not official vendor scores; every community identity claim (Qwen 4 checkpoint, tokenizer match, "beats Qwen 3.8 Max") is flagged unconfirmed and not credited as measured evidence; conflicting context/promo-end readings reported side by side; this report scores the absolute (sparse) evidence rather than the queue line (queue 80 → scored 68).
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
