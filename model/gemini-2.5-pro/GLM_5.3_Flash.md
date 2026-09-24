# Gemini 2.5 Pro — findings by GLM 5.3 Flash

- Source: Google (`gemini-2.5-pro`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's June 2025 flagship "thinking" model with native multimodal input and a 1M-token context window; now deprecated/superseded by the Gemini 3 family, it was the best 2.5-series model before Gemini 3 Flash overtook it across multiple benchmarks. A sparse Mixture-of-Experts transformer trained on Google TPUv5p clusters.
- **Provider / access:** Google Gemini API (`gemini-2.5-pro`) via Google AI Studio, Vertex AI, Gemini Enterprise (Chat Completions-style Gemini API). Available through 2 API providers per Artificial Analysis.
- **Release / knowledge:** Released 2025-06-05 (initially Experimental 2025-03-25); knowledge cutoff January 2025 (verified via Artificial Analysis).
- **IDs:** `gemini-2.5-pro` (Google Gemini API / Vertex AI). No Free ID on OpenCode Zen.
- **Context window:** 1,000,000 total tokens (input; max output ~64K per Gemini API docs; Artificial Analysis confirms 1M combined).
- **Modalities:** text, image, speech/audio, video input; text output; reasoning yes (thinking model with budget control); tool calls (function calling, search-as-a-tool, code execution); JSON mode.
- **Pricing (as of 2026-09-24):** $1.25 / $10.00 per 1M in/out; 90% cache discount (AA blended ~$1.34 per 1M); requests over 200K input tokens billed at 2x the input rate. Paid tier; no developer API free tier.
- **Architecture:** Proprietary; sparse MoE transformer — parameter count not disclosed by Google.

### Raw benchmarks found

Agent / tool use:

- No verified public Terminal-Bench, Tau3-Banking/Tau2-Bench, GDPval-AA, Claw-Eval, Toolathon/MCP-Atlas or SWE Atlas score found for this exact model. Google's launch materials highlight "strong agentic coding capabilities" and built-in search/code-execution tools but publish no machine-readable agentic-tool numbers.
- Artificial Analysis: Intelligence Index 16 (bottom of the reasoning-model class) — its agentic-tool component rows are not broken out for this model.

Reasoning / knowledge:

- GPQA Diamond: **86.4%** (Google launch reporting, cited by datatunnel.io benchmark roundup)
- HLE (Humanity's Last Exam): **21.6%** (cited by LinkedIn/Dataclysm comparisons vs Gemini 3 Pro 37.5% and o3 20.3%; tool-free)
- AIME 2025: **88%** (datatunnel.io benchmark roundup)
- MMMU: **82%** (datatunnel.io benchmark roundup)
- Artificial Analysis Intelligence Index: **16 / #159 of 211** (Artificial Analysis model page, Sep 2026 — lower end among reasoning models, class median 26)
- LMArena: topped the leaderboard by close to 40 points at launch (rdworldonline.com; historical)
- LCR / MLCR, CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **63.8%** (Google launch reporting with a custom agent setup, harness details unspecified; outperformed GPT-4.5's 38.0% and neared Claude 3.7 Sonnet's 70.3%)
- LiveCodeBench: **74.2%** (datatunnel.io roundup; a v5 harness run of 70.4% cited by futureagi.substack.com)
- Aider Polyglot: **82.2%** (datatunnel.io; futureagi cites 74.0% on a different harness)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- No long-context retrieval value verified for this exact model (1M window claimed; AA lists an AA-LCR component but the Gemini 2.5 Pro value is not published)

### Normalized scores (1–100)

- **Tool use: 65/100.** Function calling, search-as-tool and code execution are built in and Google cites strong agentic coding, but zero verified public agentic benchmark numbers (no Terminal-Bench, Tau3, GDPval) and a bottom-of-class AA Index cap the score in the mid band.
- **Reasoning: 72/100.** GPQA Diamond 86.4% is high-mid (60–80% band) and AIME 2025 88% is strong, but HLE 21.6% sits well under the 40% frontier ref and the AA Index of 16 is the lower end of the reasoning class; those gaps cap it below 80.
- **Context window: 95/100.** 1M total tokens maps to the ≥1M tier (95–100); no measured ≥98% retrieval at 512K+ keeps it off the maximum; the 200K surcharge is a pricing caveat only.
- **Multimodal: 90/100.** Text, image, speech/audio and video input with MMMU 82% and text-only output; audio input pushes it into the 90–100 band.
- **Coding: 72/100.** LiveCodeBench 74.2%, Aider Polyglot 82.2% and SWE-bench Verified 63.8% (custom-agent harness caveat) are solid mid-band results; missing SciCode/DeepSWE numbers and the dated 63.8% SWE figure cap it in the 65–75 band.
- **Cost efficiency: 85/100.** $1.25/$10.00 per 1M with 90% cache discount and $0.23/task on the AA Intelligence Index; between the ~$1.25/$4.25 = ~88 methodology reference and the higher-output-price penalty, landed at 85.
- **Overall Score: 79/100.** Mean of the five quality dims (65 + 72 + 95 + 90 + 72) / 5 = 78.8 → 79. Best-fit: a still-capable multimodal workhorse for long-context document/video analysis, but superseded by Gemini 3 Flash at similar cost and better reasoning.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-24
- Method: public internet research (Artificial Analysis model page, datatunnel.io benchmark roundup, futureagi.substack.com, LinkedIn/Dataclysm HLE comparisons, DuckDuckGo web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_2.md`, using the same headings.
