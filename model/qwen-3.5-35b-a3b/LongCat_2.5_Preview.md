# Qwen 3.5 35B A3B — findings by LongCat 2.5 Preview

- Source: Alibaba/Qwen3.5-35B-A3B
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 35B A3B
- **Short description:** Alibaba's open-weight (Apache 2.0) 35B total / 3B active native vision-language MoE (Feb 2026) — the cheap, single-GPU multimodal agent model of the Qwen 3.5 generation (the hosted `Qwen3.5-Flash` corresponds to it).
- **Provider / access:** Open weights on Hugging Face `Qwen/Qwen3.5-35B-A3B` (FP8/GGUF quantizations); hosted via OpenRouter `qwen/qwen3.5-35b-a3b`, Alibaba Model Studio, DeepInfra. OpenAI-compatible Chat Completions. No OpenCode Zen Free ID.
- **Release / knowledge:** Released 2026-02-24; knowledge cutoff not published.
- **IDs:** `qwen/qwen3.5-35b-a3b` (OpenRouter); `Qwen/Qwen3.5-35B-A3B` (Hugging Face).
- **Context window:** 262,144 native (extensible to ~1,010,000 via YaRN); 65,536 max output.
- **Modalities:** text, image, video in; text out. Thinking/reasoning mode, tool calls.
- **Pricing (as of 2026-10-21):** OpenRouter $0.14 in / $1.00 out per 1M; Alibaba Model Studio $0.25/$2.00; self-host $0 (Apache 2.0).
- **Architecture:** causal LM with vision encoder; 35B total / 3B active, 40 layers, 10 × (3 × Gated DeltaNet + 1 × Gated Attention) MoE layout, MTP, 248,320 vocab; Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **40.5%** (Qwen3.5 model card)
- Tau2-Bench: **81.2%** (model card); BFCL-V4: **67.3%** (model card)
- OSWorld-Verified: **54.5%**; BrowseComp: **61.0%**; BrowseComp-zh: **69.5%** (model card)
- VITA-Bench: **31.9%**; DeepPlanning: **22.8%**; Gert Labs: **28.96%** (BenchLM)
- GDPval-AA / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **84.2%** (model card)
- HLE: **22.4%** (w/ CoT) / **47.4%** (w/ tool)
- MMLU-Pro: **85.3%**; MMLU-Redux: **93.3%**; C-Eval: **90.2%**; SuperGPQA: **63.4%**
- HMMT Feb 25: **89.0%**; HMMT Nov 25: **89.2%**; AIME 2026: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: BenchLM **46.38/100** (point estimate; agentic public-lane #80/123); AA Index not published
- LongBench v2: **59.0%**

Coding:

- SWE-bench Verified: **69.2%** (model card)
- LiveCodeBench v6: **74.6%**; SWE-Rebench: **53.7%** (BenchLM)
- CodeForces: **2028**; OJBench: **36.0**; FullStackBench (en/zh): **58.1 / 55.0**
- DeepSWE / SciCode: no verified public score found

Multimodal:

- MMMU: **81.4%**; MMMU-Pro: **75.1%**; MMVU: **72.3%**; CharXiv: **77.5%**; MathVision: **83.9%**; V*: **92.7%**

Long context:

- AA-LCR: **58.5%** (series table); no RULER/MRCR figure at 262K reported

### Normalized scores (1–100)

- **Tool use: 65/100.** Terminal-Bench 2.0 40.5% is below the mid band (TB2.1 45–60), but Tau2 81.2%, BFCL-V4 67.3%, OSWorld 54.5% and BrowseComp 61% are respectable for a 3B-active MoE; capped by the missing GDPval-AA Elo and the low TB score.
- **Reasoning: 68/100.** GPQA 84.2% and MMLU-Pro 85.3% are solid for the size, but HLE 22.4% (47.4% with tools) is mid and no AA Intelligence Index is published; HMMT ~89% keeps it upper-mid.
- **Context window: 73/100.** 262,144 native sits in the 200K–500K band (200K = 70), nudged up for 1M YaRN extensibility; no measured retrieval figure at full window.
- **Multimodal: 77/100.** Text + image + video input with MMMU 81.4%, MMMU-Pro 75.1%, MathVision 83.9% and V* 92.7% — the lower half of the 75–90 image/video band; text-only output caps it.
- **Coding: 70/100.** SWE-bench Verified 69.2%, LiveCodeBench v6 74.6% and CodeForces 2028 are strong for 3B active, but SWE-Rebench 53.7% and Terminal-Bench 2.0 40.5% trail the frontier coding anchors.
- **Cost efficiency: 93/100.** Open Apache-2.0 weights (self-host $0) with hosted pricing at $0.14/$1.00 per 1M — cheaper than the methodology's ~$0.60/$2.20 (~92) anchor, below the ~$0.10/$0.20 (97–99) tier.
- **Overall Score: 71/100.** Half-up mean of Tool use (65), Reasoning (68), Context window (73), Multimodal (77), Coding (70) = 353/5 = 70.6 → 71. Best fit: an always-on cheap multimodal agent MoE for breadth tasks; not for frontier difficulty.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-21
- Method: public internet research (Hugging Face `Qwen/Qwen3.5-35B-A3B` model card + FP8 card, BenchLM model/comparison pages, regolo.ai model page, DeepInfra API benchmark blog, ggml-org GGUF card, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
