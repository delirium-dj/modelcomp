# Gemini 3.7 Flash — findings by Muse Glimmer 30B

- Source: Google (`google/gemini-3.7-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's next iteration in the Gemini 3 family with algorithmic improvements to core reasoning and agentic video understanding. Supports customizable thinking configurations to control quality, cost and latency.
- **Provider / access:** Google AI Studio / Vertex AI / Gemini API / Gemini Enterprise Agent Platform (`google/gemini-3.7-flash`). Chat Completions / Responses API.
- **Release / knowledge:** Model card published 13 August 2026; knowledge cutoff March 2026 with some domains limited to January 2025 per Gemini 3 Model Family.
- **IDs:** `google/gemini-3.7-flash`
- **Context window:** 1,000,000 tokens input; 64K tokens output. Verified in model card.
- **Modalities:** Text, image, audio, video in; text out; reasoning, tool calling, structured outputs.
- **Pricing (as of 2026-09-24):** $0.75 per 1M input tokens, $3.75 per 1M output tokens introductory; introductory price expires 31 December 2026, then $1.50/$7.50 per 1M. Paid tier.
- **Architecture:** Proprietary multimodal transformer based on Gemini 3.6 Flash.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.8%** (Google DeepMind Model Card, Aug 2026)
- Terminal-Bench 3.0: **14.9%** (Google DeepMind Model Card, Aug 2026)
- GDPval-AA v2 Knowledge work: **1525 Elo** (Google DeepMind Model Card, Aug 2026)
- AutomationBench Enterprise workflow automation: **30.4%** private set (Google DeepMind Model Card, Aug 2026)
- OSWorld-2.0 Agentic computer use: **47.9%** (Google DeepMind Model Card, Aug 2026)
- Harvey LAB-AA Complex legal workflows: **90.7%** (Google DeepMind Model Card, Aug 2026)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- HLE-Verified Multidisciplinary expert reasoning: **53.6%** (Google DeepMind Model Card, Aug 2026)
- Artificial Analysis Intelligence Index Composite model intelligence: **56** (Google DeepMind Model Card, Aug 2026)
- CharXiv Reasoning Information synthesis from complex charts No tools: **84.5%** (Google DeepMind Model Card, Aug 2026)
- CharXiv With tools: **88.7%** (Google DeepMind Model Card, Aug 2026)
- GPQA Diamond: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- DeepSWE v1.1 Long-horizon software engineering: **65.3%** (Google DeepMind Model Card, Aug 2026)
- FrontierCode 1.1 Main Production code quality: **43.6%** (Google DeepMind Model Card, Aug 2026)
- Code Arena Web development: **1588 Elo** (Google DeepMind Model Card, Aug 2026)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- GDM-MRCR v2 8-needle 128k average: **97.0%** (Google DeepMind Model Card, Aug 2026)
- LVBench Long video understanding: **85.4%** (Google DeepMind Model Card, Aug 2026)
- MRCR / RULER / GraphWalks at 1M: no verified public score found

### Normalized scores (1–100)

- **Tool use: 87/100.** Terminal-Bench 2.1 85.8% and GDPVal-AA 1525 Elo indicate strong agentic tool use; capped by Terminal-Bench 3.0 14.9% and lack of public Claw-Eval.
- **Reasoning: 85/100.** HLE-Verified 53.6% and Artificial Analysis Index 56 show solid multidisciplinary reasoning; capped by missing GPQA Diamond and LCR data.
- **Context window: 95/100.** 1M input / 64K output with GDM-MRCR 97.0% at 128k; tier ≥1M with high retrieval.
- **Multimodal: 93/100.** Text/image/audio/video in with text out and agentic video understanding; no native audio/video out.
- **Coding: 80/100.** DeepSWE 65.3% and FrontierCode 43.6% demonstrate capable long-horizon coding; capped by absence of SWE-bench Verified and LiveCodeBench numbers.
- **Cost efficiency: 88/100.** $0.75/$3.75 per 1M introductory pricing is competitive for frontier-class throughput.
- **Overall Score: 88/100.** Mean of Tool 87 + Reasoning 85 + Context 95 + Multimodal 93 + Coding 80 = 88.0; best-fit recommendation for cost-effective agentic coding and multimodal workflows.

---

## Signature

- Provided by: **Muse Glimmer 30B (nvidia/meta/muse-glimmer-30b)** — 2026-09-24
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g., `GPT_5.md`, using the same headings.
