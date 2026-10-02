# GPT-5.5 — findings by Gemini 3.8 Flash
- Source: OpenAI/gpt-5.5 (`openai/gpt-5.5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
## Model card
- **Name:** GPT-5.5 (codename "Spud", commercial paid API tier; free ChatGPT tier served via GPT-5.5 Instant)
- **Short description:** GPT-5.5 is OpenAI's flagship frontier foundation model designed for agentic coding, computer use, knowledge work, and scientific research. Known by internal codename "Spud", it features a unified omnimodal architecture and multi-tier extended reasoning.
- **Provider / access:** OpenAI API (direct via Chat Completions API and Responses API), OpenRouter (`openai/gpt-5.5`).
- **Release / knowledge:** 2026-04-23 release; knowledge cutoff early 2026.
- **IDs:** `openai/gpt-5.5`, `openrouter/openai/gpt-5.5` (no Free ID exists on Zen; standard API is paid)
- **Context window:** 1,000,000 tokens total (verified 922,000 input / 128,000 maximum output tokens via OpenAI documentation and OpenRouter API specifications).
- **Modalities:** Text, image, audio, video, PDF in; text out; reasoning supported (configurable effort: low, medium, high, xhigh); function/tool calling; JSON schema mode.
- **Pricing (as of 2026-10-02):** $5.00 / 1M input tokens, $30.00 / 1M output tokens ($0.50 / 1M cached input); long-context tier (>200K tokens) $10.00 / 1M in, $45.00 / 1M out; batch/flex discount $2.50 / $15.00; paid API with standard commercial data privacy terms.
- **Architecture:** Proprietary mixture-of-experts (MoE) transformer architecture, closed-weights.
### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: **76.40%** (vals.ai leaderboard, 2026-09-23; 82.7% on Terminal-Bench 2.0 via Artificial Analysis / OpenAI)
- Tau3-Banking / Tau2-Bench: **44.6%** (Tau3-Banking knowledge retrieval, taubench.com) / **98.0%** (Tau2-Bench Telecom, Sierra zero-shot harness)
- GDPval-AA: **84.9%** (Artificial Analysis GDPval-AA v2.1 win-or-tie rate across 44 occupations / Rank #1)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **55.6%** (Toolathon leaderboard, 32 applications / 604 APIs, 2026-09-22)
Reasoning / knowledge:
- GPQA Diamond: **93.6%** (Artificial Analysis / Vellum, xhigh reasoning)
- HLE: **41.4%** (Humanity's Last Exam without tools, Artificial Analysis; 57% on GPT-5.5 Pro with tools)
- LCR / MLCR: **84.3%** (Artificial Analysis AA-LCR long-context reasoning)
- CritPt: **31%** (GPT-5.5 Pro / CritPt physics research benchmark, CtrlAltDebrief)
- Artificial Analysis Intelligence Index / BenchLM overall: **60.2 / #1** (Artificial Analysis Intelligence Index, xhigh tier at release)
- Omniscience Accuracy / Hallucination Rate: **57% / 86%** (Artificial Analysis AA-Omniscience benchmark, xhigh effort)
Coding:
- SWE-bench Verified / SWE-Pro: **82.6%** (SWE-bench Verified, vals.ai / Rank #1) / **58.6%** (SWE-bench Pro, OpenAI / benchlm.ai)
- LiveCodeBench: **85.3%** (Vals AI run)
- SciCode / AA-SciCode: **55.8%** (Artificial Analysis SciCode scientific research coding)
- Vibe Code Bench: **69.8%** (vals.ai / Rank #2)
- DeepSWE / Coding Index / other: **70%** (DeepSWE benchmark, VentureBeat / Rank #1; OpenAI internal Expert-SWE: 73.1%)
Long context:
- **MRCR v2 (Multi-Round Co-reference Resolution)** verified over 1,000,000 tokens window length with high multi-needle disambiguation retention; AA-LCR achieved 84.3% across extended token contexts.
### Normalized scores (1-100)
- **Tool use: 84/100.** Strong agentic performance on GDPval-AA (84.9%, #1) and Tau2-Telecom (98.0%), capped by 76.40% on Terminal-Bench 2.1 and 44.6% on Tau3-Banking versus frontier ~88%/50% thresholds.
- **Reasoning: 92/100.** Frontier tier performance meeting targets with GPQA Diamond at 93.6% (>90%), HLE at 41.4% (>40%), and AA Intelligence Index at 60.2 (>60); tempered by high hallucination rate (86%) on AA-Omniscience and 31% on CritPt.
- **Context window: 96/100.** Verified 1M total token window (922K input / 128K output) falling into the >=1M tier (95-100) with MRCR v2 long-context retention and 84.3% AA-LCR.
- **Multimodal: 92/100.** Native omnimodal inputs encompassing text, high-resolution images, video, PDFs, and audio with text/code output, placing in the 90-100 multimodal tier.
- **Coding: 88/100.** Exceptional scores on SWE-bench Verified (82.6%), LiveCodeBench (85.3%), and SciCode (55.8% > 55% frontier mark), capped below 90 by DeepSWE at 70% (frontier threshold 74%+) and Terminal-Bench 2.1 at 76.40% (frontier threshold 85%+).
- **Cost efficiency: 50/100.** Evaluated at $5.00 / 1M input and $30.00 / 1M output, placing between the $3/$15 (~60) and $10/$50 (~30) baseline anchors.
- **Overall Score: 90.4/100.** Mean of non-cost dims (84 + 92 + 96 + 92 + 88) / 5 = 90.4; best suited for mission-critical complex engineering, scientific problem solving, and long-horizon tool-assisted agent pipelines.
---
## Signature
- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-02
- Method: Live multi-source public web research cross-verifying official model announcements, Artificial Analysis, vals.ai, BenchLM, and independent benchmark leaderboards; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.