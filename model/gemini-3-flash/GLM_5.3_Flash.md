# Gemini 3 Flash — findings by GLM 5.3 Flash

- Source: Google (`gemini-3-flash-preview`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash (Preview)
- **Short description:** Google's fast, cost-effective Gemini 3-family model offering Pro-grade reasoning at Flash-level latency; it became the default model in the Gemini app and AI Mode in Search. Released December 2025 as the third member of the Gemini 3 family (after Gemini 3 Pro and 3 Deep Think).
- **Provider / access:** Google Gemini API via Google AI Studio (`gemini-3-flash-preview`), Gemini CLI, Google Antigravity, Android Studio, Vertex AI, Gemini Enterprise; consumer access via the Gemini app and AI Mode in Search. Chat Completions-style Gemini API.
- **Release / knowledge:** Released 2025-12-17; knowledge cutoff January 2025 (verified via Artificial Analysis and llm-stats model pages).
- **IDs:** `gemini-3-flash-preview` (Google Gemini API / Vertex AI). No Free ID on OpenCode Zen.
- **Context window:** 1,000,000 total tokens; 1M input / 65,536 max output (verified via llm-stats provider table and Artificial Analysis context-window page).
- **Modalities:** text, image, speech/audio, video input; text output; reasoning model (thinking) — yes, with adjustable thinking levels; tool calls (function calling, search-as-a-tool); JSON mode supported via Gemini API response schemas.
- **Pricing (as of 2026-09-24):** $0.50 / $3.00 per 1M in/out; cached input $0.05 per 1M (90% cache discount; AA blended rate ~$0.43 per 1M); audio input $1 per 1M. Paid tier via Google API; free access exists inside the Gemini app / AI Mode as the consumer default model (not a developer API free tier).
- **Architecture:** Proprietary — parameter count not disclosed by Google.

### Raw benchmarks found

Agent / tool use:

- No verified public Terminal-Bench, Tau3-Banking/Tau2-Bench, GDPval-AA, Claw-Eval, Toolathon/MCP-Atlas or SWE Atlas score found for this exact model ID. Google's launch blog qualitatively cites "strong performance in reasoning, tool use and multimodal capabilities" and positions it for agentic coding workflows, but the accompanying benchmark table is published as an image without machine-readable per-bench numbers.
- Artificial Analysis: listed as "Gemini 3 Flash Preview (non-reasoning)" with an *estimated* Intelligence Index (not an agentic tool score); agentic-tool rows (AA-Briefcase, GDPval-AA, AutomationBench-AA, Terminal-Bench 4.0) show "estimate (independent evaluation forthcoming)" — treated here as unmeasured.

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (Google launch blog, 2025-12-17; frontier PhD-level science reasoning)
- HLE (Humanity's Last Exam, without tools): **33.7%** (Google launch blog)
- MMMU Pro: **81.2%** (Google launch blog; state-of-the-art claim, "comparable to Gemini 3 Pro")
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **18 (estimated) / #24 of 60** non-reasoning-class models (Artificial Analysis model page, Sep 2026; independent evaluation forthcoming)
- LMArena: on the quality-vs-cost Pareto frontier alongside Gemini 3 Pro and 3 Flash Lite (Google launch blog; Elo value in image, not machine-readable)
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- Efficiency: uses 30% fewer tokens on average than Gemini 2.5 Pro on typical traffic (Google launch blog); 3x faster than 2.5 Pro per Artificial Analysis benchmarking

Coding:

- SWE-bench Verified: **78%** (Google launch blog; outperforms both the 2.5 series and Gemini 3 Pro)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found (AA lists SciCode as an Intelligence Index component but the Gemini 3 Flash value is an unpublished estimate)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- No long-context retrieval reported (1M token window claimed; no MRCR/RULER/GraphWalks value verified for this exact model)

### Normalized scores (1–100)

- **Tool use: 68/100.** Google cites strong tool use and the model powers agentic workflows (Antigravity, Gemini CLI), but zero verified public agentic benchmark numbers (no Terminal-Bench, Tau3, GDPval) — score rests on qualitative positioning, capped in the mid band per methodology.
- **Reasoning: 86/100.** GPQA Diamond 90.4% hits the 90%+ frontier reference while HLE 33.7% (without tools) stays under the 40% frontier bar and the AA Index (18, estimated) is only mid-band for the non-reasoning class; docked for the HLE/estimated-Index gaps.
- **Context window: 95/100.** 1M total tokens with 65.5K max output maps to the ≥1M tier (95–100); no measured long-context retrieval at 512K+ keeps it off the maximum.
- **Multimodal: 90/100.** Text, image, speech/audio and video input with MMMU Pro 81.2% (SOTA claim) and text-only output; audio input pushes it into the 90–100 band.
- **Coding: 83/100.** SWE-bench Verified 78% — above Gemini 3 Pro and the whole 2.5 series — is a solid mid-frontier result; missing LiveCodeBench/SciCode/DeepSWE numbers prevent a 90+ score.
- **Cost efficiency: 93/100.** $0.50/$3.00 per 1M with a 90% cache discount (~$0.43 blended) sits near the ~$0.60/$2.20 = ~92 reference and improves on it; on the LMArena quality-vs-cost Pareto frontier.
- **Overall Score: 84/100.** Mean of the five quality dims (68 + 86 + 95 + 90 + 83) / 5 = 84.4 → 84. Best-fit: the default workhorse for high-volume multimodal and interactive applications where frontier reasoning at Flash speed and price matters more than peak agentic autonomy.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-24
- Method: public internet research (Google launch blog, Artificial Analysis model page, llm-stats model page, DuckDuckGo web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.md`, using the same headings.
