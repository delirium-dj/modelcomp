# gpt-oss-120b — findings by Muse Glimmer 30B

- Source: OpenAI / gpt-oss-120b
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** gpt-oss-120b
- **Short description:** OpenAI open-weight MoE reasoning model for general-purpose agentic workflows, tool use and variable-effort reasoning. Released Aug 5 2025 under Apache 2.0.
- **Provider / access:** Open weights Hugging Face `openai/gpt-oss-120b`; available via third-party inference providers. Native Harmony chat format, Responses-style API via providers.
- **Release / knowledge:** 2025-08-05; knowledge cutoff June 2024 per model card, May 31 2024 per Artificial Analysis – conflict noted.
- **IDs:** `openai/gpt-oss-120b`
- **Context window:** 128k tokens native via RoPE/YaRN per OpenAI blog/model card; Artificial Analysis reports 130-131k tokens measured – conflict noted.
- **Modalities:** Input text; Output text. Reasoning yes, tool calls yes – web browsing, Python execution, developer function calling; Structured Outputs supported. No image/audio/video.
- **Pricing (as of 2026-10-25):** Open weights free to self-host under Apache 2.0. Median provider pricing per Artificial Analysis: $0.15 /1M input, $0.60 /1M output, $0.11 cost per Intelligence Index task. No free tier caveats for self-host.
- **Architecture:** MoE transformer, 116.8B total parameters, 5.13B active per token. 36 layers, 128 experts total, 4 active per token. MXFP4 quantized MoE weights. Text-only pre-training with STEM/coding focus.

### Raw benchmarks found

> Sources: OpenAI model card arXiv 2508.10925 2025-08-08, OpenAI blog Introducing gpt-oss 2025-08-05, Hugging Face openai/gpt-oss-120b eval results, Artificial Analysis gpt-oss-120b High page.

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- Tau-Bench Retail: **67.8%** high, **54.8%** medium, **49.4%** low – OpenAI model card
- Tau-Bench Airline: **49.2%** high – OpenAI model card
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **80.1%** high no tools, **80.9%** high with tools – OpenAI model card; **80.81*** on Hugging Face eval
- HLE: **14.9%** high no tools, **19.0%** high with tools – OpenAI model card
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **12** Artificial Analysis Intelligence Index v4.3.2 – Artificial Analysis
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **62.4%** high – OpenAI model card; SWE-Bench Pro **16.2** on Hugging Face eval
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: Codeforces Elo **2463** no tools high, **2622** with tools high – OpenAI model card; Aider Polyglot **44.4%** high

Long context:

- <MRCR / RULER / GraphWalks value at window length, or "no long-context retrieval reported">: no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 76/100.** Tau-Bench Retail 67.8% high and Airline 49.2% high show strong agentic function calling, capped by lack of public Terminal-Bench 2.1 / Claw-Eval numbers.
- **Reasoning: 83/100.** GPQA Diamond 80.1-80.9% high, AIME 2024 95.8% high no tools /96.6% with tools, MMLU 90.0% high; HLE 14.9% no tools caps score.
- **Context window: 73/100.** 128k native / 130-131k reported measured, tier mapping for 100-200k; no public RULER/GraphWalks score.
- **Multimodal: 15/100.** Text-only in/out, no image/video/audio support.
- **Coding: 77/100.** SWE-bench Verified 62.4% high, Codeforces Elo 2463/2622 high, Aider Polyglot 44.4% high; no public LiveCodeBench/SciCode numbers caps score.
- **Cost efficiency: 95/100.** Open weights Apache 2.0 free to self-host; median provider $0.15/$0.60 per 1M is competitive for open-weight class.
- **Overall Score: 64.8/100.** Mean of five quality dims (76+83+73+15+77)/5 = 64.8 → best-fit: strong open-weight reasoning/agentic model with solid coding, limited by text-only modality and mid-range context.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g., `GPT_5.md`, using the same headings.

---
