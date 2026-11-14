- Source: Google DeepMind/Gemini 3.5 Flash-Lite
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite
- **Short description:** Google DeepMind's 2026-07-21 speed/cost-optimised Gemini 3.5-family model for high-throughput, low-latency batch work (agent search, document processing, large-scale extraction, translation, summarisation). A distinct model; Gemini 3.5 Flash, 3.6 Flash and 3.1 Flash-Lite are separate.
- **Provider / access:** Gemini API / Google AI Studio and the Gemini 3.5 family of surfaces; released alongside Gemini 3.6 Flash and 3.5 Flash Cyber while the 3.5 Pro flagship was again absent.
- **Release / knowledge:** 2026-07-21; knowledge cutoff: no verified public score found.
- **IDs:** `gemini-3.5-flash-lite` family ID as cited. No free Zen ID verified.
- **Context window:** **1,000,000 tokens**, with **64,000 tokens** maximum output.
- **Modalities:** **text, image, audio and video in; text out**; built-in Computer Use and other tool calling; adjustable "thinking level" to trade latency/cost against quality. No verified non-text output.
- **Pricing (as of 2026-11-14):** **$0.30 / 1M input, $2.50 / 1M output** — a third-party Model Field Guide page whose heading names Gemini 3.5 Flash but whose body describes Flash-Lite; labelled third-party with that caveat, not a vendor rate card.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. **350 tokens/s** output speed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **54%**, up from Gemini 3.1 Flash-Lite's **31%**
- GDPval-AA v2: **1140**, up from **642**
- Built-in Computer Use and tool calling for agent search, document processing, extraction, translation and summarisation (qualitative)
- Tau3-Banking / Tau2-Bench / OSWorld / AutomationBench / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Improved over Gemini 3.1 Flash-Lite on multiple benchmarks (directional beyond the numbers below)
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- Terminal-Bench 2.1 **54%** as above
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- GDM-MRCR v2: **72.2%**, up from **60.1%** (a named long-context retrieval benchmark)
- 1M-token window with 64K output; no independent MRCR / RULER / GraphWalks figure beyond the above

### Normalized scores (1–100)

- **Tool use: 86/100.** 54% Terminal-Bench 2.1 (1.7x its predecessor), GDPval-AA v2 1140 (1.8x), built-in Computer Use and 350 tok/s throughput; capped by no τ-bench/OSWorld/AutomationBench figure.
- **Reasoning: 83/100.** Large generational gains across multiple benchmarks with adjustable thinking levels; capped by no published numeric general reasoning benchmark for this exact ID.
- **Context window: 92/100.** A verified 1M-token window with 64K output and a measured **72.2% GDM-MRCR v2** long-context retrieval result; capped by no independent third-party retrieval replication.
- **Multimodal: 91/100.** Text, image, audio and video input with Computer Use; capped by text-only output and no published multimodal benchmark score.
- **Coding: 83/100.** 54% Terminal-Bench 2.1; capped by no SWE-bench / LiveCodeBench figure and by being a speed tier rather than a coding flagship.
- **Cost efficiency: 95/100.** $0.30/$2.50 per 1M (third-party), 350 tok/s, a 1M window and adjustable thinking levels for batch workloads — exceptional value. Excluded from Overall.
- **Overall Score: 87/100.** Half-up mean of 86, 83, 92, 91, 83 = 87.0 → 87. Best fit: massive-scale, low-latency multimodal batch processing (extraction, translation, summarisation, agent search) where throughput and cost dominate.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Gemini3.5Flash-Lite article retrieved via public web search excerpt (release, 350 tok/s, 1M/64K context, four input modalities, Terminal-Bench 2.1 31%→54%, GDM-MRCR v2 60.1%→72.2%, GDPval-AA v2 642→1140, Computer Use, use cases), plus a third-party Model Field Guide for pricing — explicitly labelled third-party, with the note that its page heading says "3.5 Flash" while the body describes Flash-Lite. Figures for Gemini 3.1 Flash-Lite are predecessor comparison rows, never merged. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Gemini3.5Flash-Lite — 百度百科 (retrieved via search excerpt; full spec and benchmark deltas)](https://baike.baidu.com/item/Gemini3.5Flash-Lite/68332921)
  - [Gemini 3.5 Flash / Flash-Lite — Model Field Guide (third-party pricing)](https://www.airedirector.com/model/gemini-3.5-flash)
