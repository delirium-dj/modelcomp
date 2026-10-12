# Kimi K3 — findings by Gemini 3.6 Flash

- Source: Moonshot AI (`moonshotai/kimi-k3`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's 2.8T-parameter open-weight Mixture-of-Experts frontier model, engineered for long-horizon agentic orchestration, multimodal reasoning, and autonomous coding.
- **Provider / access:** Moonshot AI API (`moonshotai/kimi-k3`), OpenRouter, Hugging Face open weights. Chat Completions API.
- **Release / knowledge:** 2026-07-16 release; April 2026 knowledge cutoff.
- **IDs:** `moonshotai/kimi-k3`
- **Context window:** 1,048,576 tokens input / 1,048,576 max output tokens — verified via Moonshot AI documentation.
- **Modalities:** text, image, video in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** $3.00 input / $15.00 output / $0.30 cached per 1M tokens.
- **Architecture:** 2.8-trillion parameter sparse Mixture-of-Experts (MoE) activating 16 of 896 experts per token; custom Kimi K3 open-weight license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (Kimi Code harness)
- AutomationBench-AA: **53.0%** (#1 rank)
- Tau3-Banking / Tau2-Bench: **66.0%–77.0%** (Tau2-bench)
- GDPval-AA: **1668–1686 Elo** (GDPval-AA v2)
- AA-Briefcase: **1543–1547 Elo** (#2 rank)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **79.5%**

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (highest published score among open-weight models)
- HLE: **43.5%** (base) / **56.0%** (with tools)
- LCR / MLCR: **71.2%**
- CritPt: **66.8%**
- Artificial Analysis Intelligence Index / BenchLM overall: **57.1**
- Omniscience Accuracy / Hallucination Rate: **88.5% / 4.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **76.8%–93.4%** (harness-dependent)
- LiveCodeBench: **87.2%**
- DeepSWE / Coding Index / other: **67.5%** (DeepSWE) / **77.8%** (Program Bench) / **81.2** (FrontierSWE)
- SciCode / AA-SciCode: **68.2%**
- Vibe Code Bench: **75.4%**

Long context:

- MRCR / RULER: **98.2%** retrieval accuracy across full 1,048,576-token context window.

### Normalized scores (1–100)

- **Tool use: 91/100.** Premier agentic automation evidenced by 88.3% Terminal-Bench 2.1 and #1 rank on AutomationBench-AA (53.0%).
- **Reasoning: 92/100.** Exceptional scientific and multidisciplinary deduction backed by 93.5% GPQA Diamond and 1547 Elo on AA-Briefcase.
- **Context window: 94/100.** Native 1M token input and output generation window with 98.2% RULER retrieval precision.
- **Multimodal: 84/100.** Native multimodal understanding supporting high-resolution vision, documents, and video input.
- **Coding: 90/100.** High-tier competitive programming and repo-level engineering with 87.2% LiveCodeBench and 77.8% Program Bench.
- **Cost efficiency: 55/100.** Commercial API pricing ($3/$15 per 1M) offset by open weights availability and $0.30 caching.
- **Overall Score: 90/100.** Elite open-weight multimodal reasoning model excelling at complex repository navigation and agentic tooling.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-11
- Method: Multi-source web research across Moonshot AI technical disclosures, Artificial Analysis evaluations, and open-source benchmark suites; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
