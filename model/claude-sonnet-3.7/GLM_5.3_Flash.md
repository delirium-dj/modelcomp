# Claude Sonnet 3.7 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-3-7-sonnet-20250219`)
- Date: 2026-10-16 (UTC)
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

> CORRECTION 2026-10-16: the 2026-10-11 pass recorded "BenchLM 404 on both slug
> variants"; the BenchLM 2026-10-17 refresh now carries 18 sourced rows that fill
> the GPQA/MMMU/Tau2 gaps the prior passes marked chart-only.

Agent / tool use:

- Tau2-Bench: **50%** (AA — added 2026-10-16, fills the chart-only gap; mid)
- TAU-bench (original): state-of-the-art claim at release with a planning-tool prompt addendum and 100-step budget (Anthropic appendix) — chart value not readable, no verified text number
- Terminal-Bench / GDPval-AA / Claw-Eval: no verified public score found
- Vendor/partner evaluations: Cursor "best-in-class for real-world coding tasks... advanced tool use"; Vercel "exceptional precision for complex agent workflows" (qualitative, Anthropic announcement)

Reasoning / knowledge:

- GPQA Diamond: **68%** (Anthropic announcement, now BenchLM-corroborated) / **65.6%** (AA-GPQA Diamond — added 2026-10-16, fills the chart-only gap; above the assumed level)
- HLE: **4.2%** (AA-HLE — added 2026-10-16, very weak); AA-LCR: **51.7%**; CritPt: **0.0%**
- Artificial Analysis Intelligence Index: **15.3** (AA current board — corroborates the 15 estimate, #32 of 61 non-reasoning models, exactly at the class median)
- MATH-500: **82.2%**; AIME 2024: **23.3%**; MMMLU: **83.2%**; IFEval: **90.8%** / AA-IFBench: **44.0%** (all added 2026-10-16)
- AA-Omniscience: accuracy **28.2%**, hallucination rate **52.8%**

Coding:

- SWE-bench Verified: **62.3%** vanilla scaffold (chart value, widely reported; now BenchLM-corroborated) / **63.7%** no-scaffold on the n=489 solvable subset (Anthropic appendix text) / **70.3%** high-compute scaffold with parallel attempts + rejection sampling + scoring-model ranking on n=489 (Anthropic appendix text) — state-of-the-art at release
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- AA-LCR **51.7%** measured (added 2026-10-16 — mid-weak); 200K window; no MRCR/RULER numbers published at release

Multimodal:

- MMMU: **71.8%** (announcement, now corroborated); AA-MMMU-Pro: **60.1%** (AA — added 2026-10-16, fills the chart-only gap)

### Normalized scores (1–100)

> Recalibrated 2026-10-16 on the newly surfaced 18-row BenchLM profile.

- **Tool use: 56/100.** CHANGED from 58 — the newly measured Tau2 50.0% is mid-weak; the release-era TAU-bench SOTA claim remains chart-only; Terminal-Bench/GDPval still missing.
- **Reasoning: 54/100.** CHANGED from 52 — the newly measured GPQA 65.6–68% (two sources) is above the assumed level, but HLE 4.2%, CritPt 0.0%, AA Index 15.3 (at the non-reasoning median) and the Oct/Nov 2024 cutoff keep it low-mid.
- **Context window: 70/100.** 200K tokens maps directly to the methodology tier (200K–500K = 65–84, 200K = 70); AA-LCR 51.7% measured (mid-weak); AA concurs.
- **Multimodal: 65/100.** Text + image input, text output only; the newly measured MMMU 71.8% / AA-MMMU-Pro 60.1% corroborate the +image-in band (60–70).
- **Coding: 65/100.** SWE-bench Verified 70.3% (high-compute, n=489) / 62.3% vanilla (now BenchLM-corroborated) — state-of-the-art at release and still strong; no LiveCodeBench/SciCode/Vibe numbers and an older harness keep it out of the 90–100 frontier band.
- **Cost efficiency: 60/100.** $3.00/$15.00 per 1M tokens matches the methodology reference ($3/$15 = ~60); AA's blended $2.31 confirms the pricing.
- **Overall Score: 62/100.** Mean of the five quality dims per `RULES.md` (Cost excluded): (56 + 54 + 70 + 65 + 65) / 5 = 310/5 = 62.0 — unchanged overall: the GPQA lift and Tau2 dock net out. Best fit: a strong 2025-generation hybrid reasoner/coder, now deprecated — use for legacy reproducibility; for frontier work step up to Sonnet 4.6/5.x-class models.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (≥3 sources: freshly fetched artificialanalysis.ai Claude 3.7 Sonnet page (non-reasoning variant), BenchLM 404 confirmations on both slug variants, the prior 2026-10-01 pass on the official Anthropic announcement + appendix; 2026-10-16 CORRECTION: the BenchLM 2026-10-17 refresh now carries 18 rows (prior pass said 404) — GPQA 65.6-68%, Tau2 50%, MMMU 71.8% filled — Reasoning 52→54, Tool 58→56, Overall 62 holds); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_3.md`, using the same headings.
