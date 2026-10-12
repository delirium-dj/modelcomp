# Claude Sonnet 3.7 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-3-7-sonnet-20250219`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.7 (vendor style at release: Claude 3.7 Sonnet)
- **Short description:** Anthropic's "most intelligent model to date" at release (Feb 2025) and the first hybrid reasoning model on the market — one model that answers instantly or thinks step-by-step with a visible, budget-controlled thinking mode. Also launched alongside Claude Code, Anthropic's first agentic coding CLI. AA now marks it deprecated (superseded by Claude 4 Sonnet).
- **Provider / access:** Claude API `claude-3-7-sonnet-20250219` (Anthropic Messages API); Amazon Bedrock; Google Cloud Vertex AI. Not in the current OpenCode Zen endpoint list — no Zen Free ID (registry retains `opencode/claude-sonnet-3.7` for reporting).
- **Release / knowledge:** Released 2025-02-24 (Anthropic announcement; AA confirms); knowledge cutoff Nov 2024 vendor-documented at release (AA lists Oct 1, 2024 for the non-reasoning variant).
- **IDs:** `claude-3-7-sonnet-20250219` / `claude-3-7-sonnet-latest` (no Zen ID currently listed)
- **Context window:** 200K tokens total (AA concurs), max output 64K (128K with extended thinking, per vendor documentation at release).
- **Modalities:** Text and image in, text out; hybrid reasoning (standard + extended thinking with budget_tokens, visible thinking; BenchLM/AA track the non-reasoning base variant with "a reasoning variant may also exist"); tool use; JSON mode.
- **Pricing (as of 2026-10-11):** Paid — $3.00 / 1M input, $15.00 / 1M output (AA confirms; blended $2.31/1M at 7:2:1, 90% cache discount).
- **Architecture:** Proprietary (Anthropic); parameter count not disclosed. Later superseded by Sonnet 4/4.5/4.6/5.x; still a legacy tracked entry.

### Raw benchmarks found

> Second-pass note (2026-10-11): the freshly fetched Artificial Analysis page for Claude 3.7 Sonnet (non-reasoning variant) now publishes an estimated Intelligence Index — the first independent composite for this model. BenchLM has no page (404 on both slug variants).

Agent / tool use:

- TAU-bench: state-of-the-art claim at release with a planning-tool prompt addendum and 100-step budget (Anthropic appendix) — chart value not readable, no verified text number
- Terminal-Bench / GDPval-AA / Claw-Eval: no verified public score found
- Vendor/partner evaluations: Cursor "best-in-class for real-world coding tasks... advanced tool use"; Vercel "exceptional precision for complex agent workflows" (qualitative, Anthropic announcement)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **15 (estimated), #32 of 61 non-reasoning models — exactly at the class median (15)** (AA model page, 2026-10-11; "independent evaluation forthcoming") — fills the "no verified index" gap
- GPQA Diamond: reported in announcement benchmark chart only — value not readable, no verified text number
- AIME: reported in announcement benchmark chart only — no verified text number
- HLE / LCR / MLCR: no verified public score found
- Instruction-following, general reasoning, multimodal: chart-only values (announcement table)

Coding:

- SWE-bench Verified: **62.3%** vanilla scaffold (chart value, widely reported; official-leaderboard parity, n=500) / **63.7%** no-scaffold on the n=489 solvable subset (Anthropic appendix text) / **70.3%** high-compute scaffold with parallel attempts + rejection sampling + scoring-model ranking on n=489 (Anthropic appendix text) — state-of-the-art at release
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- No long-context retrieval reported (200K window; no MRCR/RULER numbers published at release)

### Normalized scores (1–100)

- **Tool use: 58/100.** TAU-bench state-of-the-art at release (Feb 2025) with a documented planning-tool scaffold and 100-step budget; partner evaluations confirm strong agentic tool use — but the TAU-bench value is chart-only and no Terminal-Bench 2.1/GDPval numbers exist, so the score stays in the upper-mid band.
- **Reasoning: 52/100.** (Was 55 on the prior pass.) The AA Index of 15 (estimated, at the non-reasoning class median) is now a measured composite — it replaces the pure positioning-based score with a below-average independent reading, docked a band for the Oct/Nov 2024 cutoff and the estimate's own caveat.
- **Context window: 70/100.** 200K tokens maps directly to the methodology tier (200K–500K = 65–84, 200K = 70); AA concurs.
- **Multimodal: 65/100.** Text + image input, text output only → 60–70 band; no video/PDF/audio input.
- **Coding: 65/100.** SWE-bench Verified 70.3% (high-compute, n=489) / 62.3% vanilla — state-of-the-art at release and still strong; no LiveCodeBench/SciCode/Vibe numbers and an older harness keep it out of the 90–100 frontier band.
- **Cost efficiency: 60/100.** $3.00/$15.00 per 1M tokens matches the methodology reference ($3/$15 = ~60); AA's blended $2.31 confirms the pricing.
- **Overall Score: 62.0/100.** (Was 63 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (58 + 52 + 70 + 65 + 65) / 5 = 310/5 = 62.0 — lowered a point on the 2026-10-11 second pass as the first independent AA composite replaces the positioning-based reasoning score. Best fit: a strong 2025-generation hybrid reasoner/coder, now deprecated — use for legacy reproducibility; for frontier work step up to Sonnet 4.6/5.x-class models.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-11
- Method: public internet research, second pass 2026-10-11 (≥3 sources: freshly fetched artificialanalysis.ai Claude 3.7 Sonnet page (non-reasoning variant), BenchLM 404 confirmations on both slug variants, the prior 2026-10-01 pass on the official Anthropic announcement + appendix); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_3.md`, using the same headings.
