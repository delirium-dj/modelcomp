# Kimi K3 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's July 2026 open-weight 2.8T-parameter MoE model with 1M context, positioned as a frontier open-weights option for agentic coding and long-horizon work.
- **Provider / access:** Moonshot AI via Moonshot/Kimi API; Open weights on HuggingFace and 17+ hosted providers. OpenAI-compatible chat API.
- **Release / knowledge:** Released 2026-07-16; knowledge cutoff unverified.
- **IDs:** `moonshotai/kimi-k3` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1.0M–1.05M tokens verified; max output not publicly documented.
- **Modalities:** Text and image in; text out; reasoning support; tool calling enabled.
- **Pricing (as of 2026-10-01):** $2.85–$3.00 per 1M input, $14.25–$15.00 per 1M output via hosted providers; 90% cache discount available.
- **Architecture:** 2.8T total parameters, MoE with 16 active of 896 experts; open weights released July 27, 2026.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (BenchLM; Vals 80.9%)
- Tau3-Banking: **46.0%** (BenchLM)
- GDPval-AA: **1524 Elo** (51.2% normalized) (BenchLM)
- MCP Atlas: **84.2%**; Toolathlon Verified: **73.2%** (BenchLM)
- BrowseComp: **91.2%**; DeepSearchQA: **95.0%** (BenchLM)
- AA Briefcase: **1510**; AA Agentic Index: **50.6%** (BenchLM)
- Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (BenchLM; Vals 92.9%)
- HLE: **56.0%** (w/ tools); 43.5% (no tools) (BenchLM)
- AA-LCR: **88.7%** (BenchLM; top long-context reasoning among peers)
- MLCR-AA: **38.3%**; CritPt: **23.4%** (BenchLM)
- ARC-AGI-1: **94.5%**; ARC-AGI-2: **60.4%** (BenchLM)
- Artificial Analysis Intelligence Index: **43.6**; BenchLM overall **71.87/100, #11 of 507**
- OMNISENSE Accuracy / Hallucination: **47.6% / 53.2%** (BenchLM)
- MMLU-Pro: **88.0%** (BenchLM)

Coding:

- SWE-bench (Vals): **93.4%** (BenchLM)
- LiveCodeBench: **87.2%** (BenchLM)
- AA-SciCode: **59.5%**; AA Coding Index: **76.2** (BenchLM)
- DeepSWE: **67.5%** (BenchLM)
- FrontierSWE: **81.2%** (BenchLM)

Long context:

- AA-LCR 88.7% at the 1M window (BenchLM); no separate MRCR/RULER public score found.

### Normalized scores (1-100)

Derived from the benchmarks above using methodology in `model-comparison.md`:

- **Tool use: 86/100.** Strong Terminal-Bench 88.3%, BrowseComp 91.2%, DeepSearchQA 95.0%, plus MCP Atlas 84.2% and Toolathlon 73.2% show excellent agentic breadth; capped by ApprenticeBench 18%, GDP.pdf 22%, and missing Claw-Eval.
- **Reasoning: 84/100.** GPQA 93.5% plus HLE 56% w/tools and LCR 88.7% (best among peers) place at high-end; capped by ARC-AGI-2 60.4% trailing top models, middling Omniscience accuracy.
- **Context window: 92/100.** Full 1M window with 88.7% LCR among highest measured; capped by missing MRCR/RULER confirmation.
- **Multimodal: 83/100.** Strong vision/document: MathVision 97.8%, CharXiv 91.3%, OmniDocBench 91.1% with Python; text-only output caps it.
- **Coding: 84/100.** SWE 93.4%, LiveCode 87.2%, DeepSWE 67.5%, Coding Index 76.2 show strong coding; capped by FrontierSWE v2 25.9% showing difficulty gaps.
- **Cost efficiency: 58/100.** ~$2.85/$14.25 per 1M is reasonable value for a 2.8T open model; not free tier.
- **Overall Score: 86/100.** Mean of (86 + 84 + 92 + 83 + 84) / 5 = 85.8 → 86. Best fit: open-weight frontier deployment needing 1M context and strong agentic/coding performance.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: public-internet research (BenchLM, llm-stats.com, theairankings.com, st-hakky.com, ai-tldr.dev, kingy.ai, HF hub metadata); scores normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.