# Gemini 3.1 Pro — findings by GLM 5.3 Flash

- Source: Google (`gemini-3.1-pro-preview`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro (official status: Public preview)
- **Short description:** Google DeepMind's Pro-tier flagship multimodal reasoning model of the Gemini 3 series ("based on Gemini 3 Pro" per the model card), aimed at complex problem-solving, agentic coding and long-context understanding. Still in public preview as of 2026-11-01; at the top of Google's lineup it has been overtaken by Gemini 4 Argon (announced 2026-09-30), while newer 3.5/3.8 Flash models beat it on several agentic benchmarks at lower cost.
- **Provider / access:** Gemini API (GenerateContent) model ID `gemini-3.1-pro-preview` plus a custom-tools-optimized endpoint `gemini-3.1-pro-preview-customtools` (same price); also on Vertex AI / Gemini Enterprise Agent Platform (which additionally supports the Chat Completions API and the preview Interactions API), Google AI Studio, Gemini CLI, Google Antigravity, Android Studio, Gemini app and NotebookLM; third-party via OpenRouter `google/gemini-3.1-pro-preview`. No free API tier — the pricing page lists the Free Tier as "Not available" (AI Studio testing only).
- **Release / knowledge:** Released 2026-02-19 (preview; `customtools` variant 2026-02-23). Knowledge cutoff January 2025 — the 3.1 Pro model card states no explicit date and defers to Gemini 3 Pro, whose card states January 2025; corroborated by Box and AI/TLDR model listings.
- **IDs:** `gemini-3.1-pro-preview`, `gemini-3.1-pro-preview-customtools` (both public preview; no stable/GA ID published and no Free ID exists — paid tier only).
- **Context window:** 1,048,576 input tokens / 65,536 max output tokens — verified against the Gemini API model page, the Vertex/Gemini Enterprise docs and the DeepMind model card (all state 1M in, 64K/65,536 out).
- **Modalities:** text, image (≤3,000/prompt), video (~1 h), audio (~8.4 h) and PDF input; text output only. Thinking/reasoning: yes (Google's docs list Thinking as supported; OpenRouter lists low/medium/high levels incl. a new "medium"). Function calling, structured outputs/JSON mode, code execution, Google Search grounding, URL context and implicit+explicit context caching supported; image/audio generation, Live API, computer use and tuning not supported.
- **Pricing (as of 2026-10-29, ai.google.dev):** Standard $2.00 in / $12.00 out per 1M for prompts ≤200k, $4.00/$18.00 above 200k; context caching $0.20 (≤200k) / $0.40 (>200k) per 1M + $4.50/1M/hour storage; Batch $1.00/$6.00 (≤200k); Grounding with Google Search 5,000 free requests/month then $14 per 1,000. No free API tier; AA blended price $4.50/1M (3:1) or $1.74/1M (7:2:1 cache-heavy).
- **Architecture:** proprietary, closed weights, parameters undisclosed; the model card states only that it "is based on Gemini 3 Pro". AA-measured speed 134.1 tok/s, TTFT ~21.8 s (first token) on Google's API.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 (Terminus-2 harness, vendor, Thinking High): **68.5%** — best in Google's own comparison table (Opus 4.6 65.4%, GPT-5.3-Codex 64.7%; Codex self-reports 77.3% on its own Codex harness)
- Terminal-Bench Hard (AA harness): **~54%** (AA launch article: highest score at launch; third-party AA snapshot reads 53.8%)
- Terminal-Bench 2.1 (AA data): **73.8%** (graysoft.dev snapshot of AA evaluations)
- Terminal-Bench 4.0 (AA Intelligence Index v5): **4.0%** (AA data via standardcompute snapshot, Oct 2026) — near-bottom on the newest harness
- τ2-bench (vendor, Thinking High): Retail **90.8%** / Telecom **99.3%** (telecom ties Opus 4.6 and GPT-5.2 for best in Google's table)
- τ³-Banking Pass^1: **26.0%** (official taubench.com leaderboard, Thinking High; **21.4%** on AA's harness) — far behind late-2026 leaders at ~45–55%
- GDPval-AA: **1317 Elo** (vendor model card; AA independently measured 1316) — behind Sonnet 4.6 (1633), Opus 4.6 (1606) and GPT-5.2 xhigh (1462) in Google's own table
- MCP-Atlas: **69.2%** (vendor; best in its table vs Sonnet 4.6 61.3%, Opus 4.6 59.5%)
- BrowseComp (Search + Python + Browse): **85.9%** (vendor; best in its table)
- APEX-Agents (long-horizon professional tasks): **33.5%** (vendor; best in its table)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP tool-selection suites beyond MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (vendor, no tools): **94.3%** — best in Google's table; AA independently measured **94.1%**
- HLE (vendor, full set text+MM, no tools): **44.4%**; with Search (blocklist) + Code: **51.4%** — record at launch per Ars Technica; AA's own HLE run reads **47.0%**
- ARC-AGI-2 (ARC Prize Verified, vendor): **77.1%** — more than double Gemini 3 Pro's 31.1% and best in Google's table (Opus 4.6 68.8%)
- CritPt (AA, research-level physics): **18%** — best at launch by >5 pp per AA; the current AA page's CritPt v2 (Hard Subset) value is not published
- LCR (AA long-context reasoning): **82.0%** (graysoft AA snapshot); MLCR: no verified public score found
- Artificial Analysis Intelligence Index: **#1 at launch, ~4 pts ahead of Claude Opus 4.6** (AA launch article); later third-party AA snapshots read **46.5 (#28 of 566)** (easy-benchmarks) and **47.7** (temperature2, Aug 2026); AA's current v5.0 page displays N/A for this model
- AA-Omniscience (knowledge & hallucination): **#1 at launch** per AA (numeric value not published in sources found — no verified number)
- MMMLU (vendor): **92.6%**

Coding:

- SWE-bench Verified (vendor, single attempt): **80.6%** — statistically tied with Opus 4.6 (80.8%) in Google's table; aggregator citing swebench.com also lists 80.6% (4th of 67)
- SWE-bench Pro Public (vendor, single attempt): **54.2%** — below GPT-5.3-Codex (56.8%)
- LiveCodeBench Pro (vendor): **2887 Elo** — best in Google's table (Gemini 3 Pro 2439, GPT-5.2 2393)
- LiveCodeBench: **75.0%** (serenitiesai aggregate citing livecodebench.github.io — third-party, provisional)
- SciCode (vendor): **59%** (AA independently 58.7%) — #1 at launch per AA
- Artificial Analysis Coding Index: **68.8** (AA; AA called it the coding leader at launch)
- Vibe Code Bench: no verified public score found

Long context:

- MRCR v2 (8-needle, vendor): **84.9% @128k average** (ties Sonnet 4.6 for best in Google's table) but **26.3% @1M pointwise** — no better than Gemini 3 Pro at the full window
- RULER: no verified public score found; GraphWalks: no verified public score found

### Normalized scores (1–100)

- **Tool use: 92/100.** τ2 Telecom 99.3% / Retail 90.8%, MCP-Atlas 69.2% and BrowseComp 85.9% were all best-in-table at launch and TB-Hard ~54% led AA's board; capped by GDPval-AA 1317 Elo (~300 behind the Claude leaders in Google's own table) and a weak 26.0% Pass^1 on the newer τ³-Banking leaderboard vs ~45–55% for late-2026 models.
- **Reasoning: 96/100.** SOTA-at-launch across GPQA Diamond 94.3%, HLE 44.4%, ARC-AGI-2 77.1% (ARC Prize Verified) and CritPt 18%, with AA ranking it #1 overall (≈4 pts over Opus 4.6); capped by HLE staying under 52% even with tools and later AA index snapshots of ~46.5–47.7 as the 2026 frontier moved past.
- **Context window: 90/100.** A top-tier 1,048,576-token input / 65,536 output window with excellent 128k retrieval (MRCR v2 8-needle 84.9%); capped by weak full-window recall — 26.3% MRCR pointwise at 1M, no better than Gemini 3 Pro — and no verified RULER/GraphWalks numbers.
- **Multimodal: 88/100.** Native text/image/video/audio/PDF input (≤3,000 images, ~1 h video, ~8.4 h audio per prompt) with launch-best MMMU-Pro 80.5% (AA: "#1 on MMMU-Pro"); capped by text-only output (no image/audio generation) and a marginal MMMU-Pro dip vs Gemini 3 Pro (81.0%).
- **Coding: 94/100.** SWE-bench Verified 80.6%, SWE-bench Pro 54.2%, LiveCodeBench Pro 2887 Elo, SciCode 59% and AA Coding Index 68.8 — launch-leading or within ~2.6 pp of the best on every row; capped by GPT-5.3-Codex's self-reported 77.3% Terminal-Bench (vs Google's 68.5% on Terminus-2) and a near-bottom 4.0% on AA's Terminal-Bench 4.0.
- **Cost efficiency: 86/100.** $2/$12 per 1M (≤200k; $4/$18 above) undercuts Opus 4.6 ($5/$25) and beats GPT-5.2 on output while AA measured the full Intelligence Index run at $892 — less than half of Opus 4.6 (max)/GPT-5.2 (xhigh) though ~2× open-weights GLM-5; no free API tier and long-context repricing at 200k cap it.
- **Overall Score: 92/100.** (92+96+90+88+94)/5 = 460/5 = 92.0 → 92; best fit: frontier-grade reasoning, agentic coding and multimodal document/code analysis at a sub-Opus price — avoid for 1M-token needle-retrieval workloads and the newest τ³/Terminal-Bench-4-style tool environments.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-01 (re-research pass; prior 2026-10-16)
- Method: public internet research (approved re-research pass); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 3.1 Pro: A smarter model for your most complex tasks — Google blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/)
  - [Gemini 3.1 Pro Model Card — Google DeepMind](https://deepmind.google/models/model-cards/gemini-3-1-pro/)
  - [Gemini 3.1 Pro preview — Gemini API docs](https://ai.google.dev/gemini-api/docs/models/gemini-3.1-pro-preview)
  - [Gemini Developer API pricing — ai.google.dev](https://ai.google.dev/gemini-api/docs/pricing)
  - [Gemini 3.1 Pro Preview: The new leader in AI — Artificial Analysis](https://artificialanalysis.ai/articles/gemini-3-1-pro-preview-new-leader-in-ai)
  - [τ³-Banking Leaderboard — taubench.com](http://taubench.com/leaderboard/)
