# Qwen 3.7 Plus — findings by Ling 3.1 Flash

- Source: Alibaba (`opencode/qwen-3.7-plus`; Alibaba Cloud Model Studio / DashScope, snapshot `qwen3.7-plus-2026-05-26`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba's low-cost multimodal agent model (announced 2026-06-02, GA 2026-06-01/03) — the Qwen 3.7 backbone plus image/video understanding, built for GUI agents (screen reading, pixel-coordinate grounding, end-to-end mobile-app navigation); roughly one-sixth the per-token price of the text-only Qwen3.7-Max.
- **Provider / access:** Alibaba Cloud Model Studio (DashScope) — Beijing, Singapore, US-Virginia endpoints; OpenAI-compatible chat-completions/responses APIs; resold via OpenRouter. Proprietary, API-only (no weights; an open-weight variant was floated for Q3 2026, unconfirmed). 35-hour autonomous-run ceiling.
- **Release / knowledge:** 2026-06-02 (snapshot 2026-05-26); knowledge cutoff not disclosed.
- **IDs:** `opencode/qwen-3.7-plus`.
- **Context window:** 1M tokens (shared across text, image and video tokens); max output 32,768 tokens. NOTE: the repo `meta.json` stub says "128K total" — stale; Alibaba docs and all trackers report 1M.
- **Modalities:** text, image, video in; text out (no image generation). NOTE: `meta.json` says "Text in/out" — stale; image/video input is documented.
- **Pricing (as of 2026-10-02):** $0.40/$1.60 per 1M input/output for ≤256K requests (international list; currently 20% off → $0.32/$1.28), $1.20/$4.80 for 256K–1M; cached input $0.08/M (implicit), explicit cache read $0.04/M; batch file $0.143/$0.574; China-region rate $0.276/$1.101 (≤256K).
- **Architecture:** proprietary multimodal vision-language agent extending the Qwen 3.7 text backbone; parameters undisclosed.

### Raw benchmarks found

Agent / tool use (vendor-reported unless noted):

- τ²-bench: **93.0%** (Epoch AI via Model Beat) — frontier-tier tool use
- AndroidWorld (mobile agent): **81%**
- ScreenSpot Pro (GUI grounding): **79.0** — frontier-tier; Qwen3.7-Max cannot run it (text-only)
- MCP Atlas: **76.4** (tie with Qwen3.7-Max)
- Terminal-Bench 2.0: **70.3%** (vs Qwen3.7-Max 69.7%)
- Claw-Eval / ClawProBench / GDPval-AA / Agents' Last Exam: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.3%** (AI/TLDR, vendor) / **87.9%** (Model Beat) — two figures, conflict noted
- Humanity's Last Exam: **35.6%** (Epoch AI via Model Beat)
- AIME 2024/2025: **93.3%**
- AA Intelligence Index: **39** (AI/TLDR); Model Beat composite 62.0 (62nd percentile), Agentic Index 69th percentile, Reasoning & Knowledge 53.0 (top 37%), Math top 38%
- LMArena: text #15, coding #12 (vs Max #13/#10)

Coding:

- SWE-bench Pro: **~60%** (vs Qwen3.7-Max 60.6%)
- SciCode: **46.1%**
- Terminal-Bench 2.0: **70.3%** (above)
- DeepSWE / LiveCodeBench / SWE-bench Verified / Vibe Code Bench: no verified public score found

Long context / multimodal:

- 1M-token window (32,768-token output cap); no MRCR / RULER / LCR score published
- ScreenSpot Pro 79.0 and AndroidWorld 81% (above) are the vision-agent results; no MMMU/Video-MMMU figure captured

### Normalized scores (1–100)

- **Tool use: 82/100.** τ²-bench 93.0% is frontier-tier and AndroidWorld 81% / ScreenSpot Pro 79.0 / MCP Atlas 76.4 are strong agentic results, but Terminal-Bench 2.0 70.3% sits in the mid band and pulls the average down.
- **Reasoning: 73/100.** GPQA Diamond 87.9–90.3% is near the 90%+ frontier bar and AIME 93.3% is strong, but HLE 35.6% (under the 40% bar) and the AA Intelligence Index of 39 (vs the 59–61 frontier) cap the score; the two conflicting GPQA figures are flagged.
- **Context window: 95/100.** 1M-token window shared across text/image/video; the 32,768-token output cap is a limitation, and no ≥98% retrieval-at-512K+ figure exists, so 100 is not justified.
- **Multimodal: 84/100.** text/image/video in with text out — the +video/PDF band (75–90), with frontier-tier GUI results (ScreenSpot Pro 79.0, AndroidWorld 81%) pushing it toward the top of the band.
- **Coding: 70/100.** Terminal-Bench 2.0 70.3% and SWE-bench Pro ~60% are mid-tier, and SciCode 46.1% sits under the 55% frontier reference; DeepSWE/LiveCodeBench/SWE-bench Verified unpublished.
- **Cost efficiency: 94/100.** $0.40/$1.60 per 1M (≤256K, list; $0.32/$1.28 with the 20% promo) interpolates to ~94 between the ~97 ($0.10/$0.20) and ~88 ($1.25/$4.25) anchors; the 256K–1M tier ($1.20/$4.80) and vision tokens sharing the 1M budget are the caveats.
- **Overall Score: 81/100.** (82+73+95+84+70)/5 = 80.8 → 81 — the budget multimodal agent pick: frontier GUI grounding (ScreenSpot Pro 79.0) and τ²-bench 93.0% at $0.40/$1.60, with mid-tier coding (SWE-bench Pro ~60%, SciCode 46.1%) and a weak composite intelligence index as the gaps.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (Alibaba Cloud Model Studio docs, AI/TLDR, ApiDog, Model Beat, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3_7_Plus.md`, using the same headings.
