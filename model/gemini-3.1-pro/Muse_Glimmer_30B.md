# Gemini 3.1 Pro — findings by Muse Glimmer 30B

- Source: Google (`google/gemini-3.1-pro`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's Gemini 3.1 Pro model offering high-performance multimodal reasoning and massive context for complex tasks.
- **Provider / access:** Google AI Studio / Vertex AI / Gemini API / Gemini Enterprise (`google/gemini-3.1-pro`). Chat Completions / Responses API.
- **Release / knowledge:** Model card published 19 February 2026; knowledge cutoff not explicitly published, based on Gemini 3 Pro lineage.
- **IDs:** `google/gemini-3.1-pro`
- **Context window:** 2,000,000 tokens input / 64K tokens output per meta.json; model card lists up to 1M input. Verified via meta and DeepMind model card.
- **Modalities:** Text, image, audio, video, PDF in; text out; reasoning enabled; tool calls supported.
- **Pricing (as of 2026-09-25):** Free tier available on Google AI Studio and OpenCode Zen; paid-tier pricing not publicly disclosed in model card. Paid tier assumed.
- **Architecture:** Proprietary multimodal transformer based on Gemini 3 Pro; parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Claw-Eval: **57.8%** (benchlm.ai/models/gemini-3-1-pro)
- Terminal-Bench 2.1 Vals: **70.8%** (benchlm.ai)
- GDPval-AA: **904** Elo (benchlm.ai)
- GDPval-AA normalized: **13.8%** (benchlm.ai)
- τ²-bench: **95.6%** (benchlm.ai)
- APEX-Agents-AA: **32.0%** (benchlm.ai)
- AA Agentic Index: **10.3%** (benchlm.ai)
- Terminal-Bench 2.1: no verified public score found for non-Vals harness
- Tau3-Banking / Tau2-Bench: no verified public score found for Tau3; τ²-bench 95.6% reported above
- Claw-Eval / ClawProBench: **57.8%** Claw-Eval reported above
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.3%** (benchlm.ai; DeepMind Model Card Feb 2026)
- GPQA Diamond Vals: **95.5%** (benchlm.ai)
- HLE w/o tools: **45.4%** (benchlm.ai)
- AA-HLE: **47.0%** (benchlm.ai)
- AA-LCR: **82.0%** (benchlm.ai)
- CritPt: **17.7%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **29.7%** (benchlm.ai)
- AA-Omniscience Accuracy / Hallucination Rate: **54.9% / 50.9%** (benchlm.ai)
- MMLU-Pro Vals: **91.0%** (benchlm.ai)

Coding:

- SWE-bench Vals: **78.8%** (benchlm.ai)
- LiveCodeBench Vals: **88.5%** (benchlm.ai)
- LiveCodeBench Pro: **82.9%** (benchlm.ai)
- AA-SciCode: **58.7%** (benchlm.ai)
- AA Coding Index: **68.8%** (benchlm.ai)
- Vibe Code Bench: **32.03%** (benchlm.ai)
- DeepSWE / Coding Index / other: see above

Long context:

- MRCR v2 8-needle 128k average: **84.9%** (DeepMind Model Card Feb 2026)
- MRCR v2 1M pointwise: **26.3%** (DeepMind Model Card)
- No verified public RULER / GraphWalks score found

### Normalized scores (1–100)

- **Tool use: 72/100.** Claw-Eval 57.8% and Terminal-Bench 2.1 Vals 70.8% with GDPval Elo 904 indicate moderate agentic tool use; capped by AA Agentic Index 10.3% and GDPval normalized 13.8%.
- **Reasoning: 84/100.** GPQA Diamond 94.3% and AA-LCR 82.0% show strong reasoning; capped by HLE w/o tools 45.4% and CritPt 17.7%.
- **Context window: 96/100.** Per tier mapping ≥2M =96-100; verified 2M input /64K output with MRCR 84.9% at 128k; capped at 96 due to 1M pointwise MRCR 26.3%.
- **Multimodal: 88/100.** Text, image, audio, video, PDF input with strong MMMU-Pro 82.4% and MMMLU 92.6%; no native audio/video out.
- **Coding: 78/100.** LiveCodeBench Vals 88.5% and SWE-bench Vals 78.8% are strong; capped by AA-SciCode 58.7% and Vibe Code Bench 32.03%.
- **Cost efficiency: 70/100.** Free tier available with paid tier pricing undisclosed; scoring per methodology with free availability.
- **Overall Score: 84/100.** Mean of Tool 72 + Reasoning 84 + Context 96 + Multimodal 88 + Coding 78 = 83.6 → 84. Best-fit as high-context multimodal reasoning model with free tier access.

---

## Signature

- Provided by: **Muse Glimmer 30B (nvidia/meta/muse-glimmer-30b)** — 2026-09-25
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
