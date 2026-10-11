# Qwen3.8-27B — findings by Qwen 3.7 Plus

- Source: Alibaba/Qwen3.8-27B (`Qwen/Qwen3.8-27B`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** Alibaba's open-weight dense 27B vision-language reasoning model with image/video understanding plus strong agentic coding and long-horizon tasks. Apache 2.0 license — free self-hosting. AA Intelligence Index ~43 (estimated from components; BenchLM reports 33.7%). Exceptional computer use: OSWorld-Verified 84.3%, AndroidWorld 81.9%. Exceptional live coding: LiveCodeBench v6 90.3%, SWE-bench (Vals) 86.0%. Strong multimodal: MathVision 90% (94.6% w/ Python), OmniDocBench 91.1%, CharXiv 90.2%. Terminal-Bench 2.1 73% (Qwen) / 79.8% (AA) / 58.4% (Vals). GPQA Diamond 89.2% (Qwen) / 90.5% (AA). SWE-bench Pro 61.7% is strong for a 27B model. AA-Omniscience Index -10% is negative (more wrong than right). 262K native context (extensible to 1M with YaRN). Thinking on by default.
- **Provider / access:** Hugging Face (`Qwen/Qwen3.8-27B`), OpenRouter, various API providers. Open weights under Apache 2.0 — free self-hosting.
- **Release / knowledge:** Released 2026 (exact date not documented); knowledge cutoff not precisely documented.
- **IDs:** `Qwen/Qwen3.8-27B` (Hugging Face); available via OpenRouter and multiple API providers.
- **Context window:** 262,144 tokens (262K) native; extensible to 1M with YaRN rope scaling. AA-LCR 82% confirms effective long-context reasoning.
- **Modalities:** Text, image, video in; text out. Thinking enabled by default. Dense 27B parameters (not MoE).
- **Pricing (as of 2026-10-10):** Open weights (Apache 2.0) — free self-hosting. API provider pricing varies. Among the most cost-effective models available.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **84.3%** (Qwen — excellent computer use)
- AndroidWorld: **81.9%** (Qwen — excellent mobile use)
- Terminal-Bench 2.1 (AA): **79.8%** (AA — strong)
- Terminal-Bench 2.1 (Qwen): **73.0%** (Qwen)
- CoWorkBench: **70.7%** (Qwen — strong collaborative work)
- WebArena-Verified: **64.8%** (Qwen — moderate web browsing)
- AA Agentic Index: **46.5%** (AA — moderate)
- τ³-Banking: **48.0%** (AA — moderate)
- AA AutomationBench: **48.2%** (AA — moderate)
- AA EnterpriseOps-Gym: **44.2%** (AA — moderate)
- Agents' Last Exam: **42.9%** (Qwen — moderate)
- GDPval-AA: **1423 Elo** (AA; normalized: 46.2%)
- AA Briefcase: **1397 Elo** (AA — modest)
- Terminal-Bench 2.1 (Vals): **58.4%** (Vals AI — moderate)
- JobBench: **33.4%** (Qwen — low)
- GDP.pdf: **16.6%** (AA — low)
- Terminal-Bench 4.0: **5.6%** (AA — very low)

Coding:

- LiveCodeBench v6: **90.3%** (Qwen — excellent)
- SWE-bench (Vals): **86.0%** (Vals AI — excellent)
- VulcanBench v3: **82.6%** (VulcanBench — strong)
- LiveCodeBench (Vals): **84.0%** (Vals AI — strong)
- SWE-bench Pro: **61.7%** (Qwen — strong for 27B)
- AA Coding Index: **68.1** (AA — strong)
- Terminal-Bench 2.1: **73.0%** (Qwen; AA: 79.8%)
- NL2Repo: **42.3%** (Qwen — moderate)
- AA-SciCode: **46.6%** (AA — moderate)
- DeepSWE: **42.2%** (Qwen — moderate-low)
- Bug Hunt Bench: **15.0 fixes** (Bug Hunt Bench — moderate)

Multimodal:

- MathVision w/ Python: **94.6%** (Qwen — exceptional)
- OmniDocBench 1.5: **91.1%** (Qwen — excellent document understanding)
- CharXiv: **90.2%** (Qwen — excellent chart understanding)
- MathVision: **90.0%** (Qwen — excellent math vision)
- RealWorldQA: **85.9%** (Qwen — strong real-world visual QA)
- BabyVision w/ Python: **85.6%** (Qwen — strong)
- CharXiv w/o tools: **83.7%** (Qwen — strong)
- AA-MMMU-Pro: **76.3%** (AA — strong)
- BabyVision: **65.7%** (Qwen — moderate)
- ERQA: **65.5%** (Qwen — moderate)
- Vision2Web: **62.9%** (Qwen — moderate)

Reasoning / knowledge:

- AA-LCR: **82.0%** (AA — strong long-context reasoning)
- IFBench: **79.5%** (Qwen — strong instruction following)
- GPQA Diamond (AA): **90.5%** (AA — strong)
- GPQA Diamond (Qwen): **89.2%** (Qwen — strong)
- MMLU-Pro (Vals): **84.3%** (Vals AI — strong)
- HLE: **30.8%** (Qwen — low)
- AA-HLE: **33.9%** (AA — low)
- CritPt: **5.4%** (AA — low)
- MLCR-AA: **21.7%** (AA — low)
- AA-Omniscience Index: **-10.0%** (AA — NEGATIVE; more wrong than right)
- AA-Omniscience Accuracy: **15.6%** (AA — very low)
- AA-Omniscience Hallucination Rate: **30.3%** (AA — moderate)

### Normalized scores (1–100)

- **Tool use: 68/100.** OSWorld-Verified 84.3% is excellent (computer use). AndroidWorld 81.9% is excellent (mobile use). Terminal-Bench 2.1 79.8% (AA) is strong. CoWorkBench 70.7% is strong. WebArena-Verified 64.8% is moderate. AA Agentic Index 46.5% is moderate. τ³-Banking 48% is moderate. GDPval-AA 1423 Elo is modest. JobBench 33.4% is low. Terminal-Bench 4.0 5.6% is very low. The model excels at computer/mobile use but struggles on some standardized agentic tasks.
- **Reasoning: 48/100.** GPQA Diamond 89.2–90.5% is strong. MMLU-Pro 84.3% is strong. AA-LCR 82% is strong. IFBench 79.5% is strong. However, HLE 30.8% is low. CritPt 5.4% is low. MLCR-AA 21.7% is low. AA-Omniscience Index -10% is negative (more wrong than right). AA-Omniscience Accuracy 15.6% is very low. The reasoning profile is strong on structured knowledge but weak on open-ended tasks and knowledge reliability.
- **Context window: 65/100.** 262K native (extensible to 1M with YaRN). AA-LCR 82% confirms effective long-context reasoning. The native 262K is smaller than many peers, but YaRN extensibility adds flexibility. Adequate for most tasks.
- **Multimodal: 83/100.** MathVision 90% (94.6% w/ Python) is exceptional. OmniDocBench 91.1% is excellent. CharXiv 90.2% is excellent. RealWorldQA 85.9% is strong. AA-MMMU-Pro 76.3% is strong. Text + image + video input supported. The multimodal profile is exceptional for a 27B dense model, especially in mathematical and document understanding.
- **Coding: 67/100.** LiveCodeBench v6 90.3% is excellent. SWE-bench (Vals) 86% is excellent. VulcanBench v3 82.6% is strong. SWE-bench Pro 61.7% is strong for 27B. AA Coding Index 68.1 is strong. However, DeepSWE 42.2% is moderate-low. NL2Repo 42.3% is moderate. AA-SciCode 46.6% is moderate. Terminal-Bench 4.0 5.6% is very low. The coding profile is excellent for live coding and SWE-bench, moderate for autonomous SWE.
- **Cost efficiency: 98/100.** Apache 2.0 open weights — completely free self-hosting. Only 27B dense parameters — runnable on consumer hardware (e.g., 2× RTX 3090/4090 or single A100). API pricing from providers is among the cheapest available. The combination of Apache 2.0, 27B dense size, strong coding (LiveCodeBench 90.3%), excellent computer use (OSWorld 84.3%), and multimodal (MathVision 90%) makes this arguably the best value model available.
- **Overall Score: 66.2/100.** Mean of five quality dims: (68 + 48 + 65 + 83 + 67) / 5 = 66.2. Qwen3.8-27B is Alibaba's open-weight 27B dense vision-language model. Key strengths: OSWorld-Verified 84.3% (excellent computer use), AndroidWorld 81.9% (excellent mobile use), LiveCodeBench v6 90.3% (excellent), SWE-bench (Vals) 86% (excellent), MathVision 90% / 94.6% w/ Python (exceptional), OmniDocBench 91.1% (excellent), CharXiv 90.2% (excellent), GPQA Diamond 89.2–90.5% (strong), Terminal-Bench 2.1 73–79.8% (strong), AA-LCR 82% (strong long-context), SWE-bench Pro 61.7% (strong for 27B), Apache 2.0 open weights (free self-hosting), only 27B dense params (consumer hardware). Key weaknesses: AA-Omniscience Index -10% (negative — more wrong than right), AA-Omniscience Accuracy 15.6% (very low), HLE 30.8% (low), CritPt 5.4% (low), DeepSWE 42.2% (moderate-low), Terminal-Bench 4.0 5.6% (very low), 262K native context (smaller than many peers), JobBench 33.4% (low), NL2Repo 42.3% (moderate). Best fit for: computer-use agents (OSWorld 84.3%, AndroidWorld 81.9%), live coding assistance (LiveCodeBench 90.3%), mathematical visual reasoning (MathVision 90%), document understanding (OmniDocBench 91.1%), teams wanting Apache 2.0 open weights for self-hosting, cost-sensitive deployments (27B dense, consumer hardware), multimodal applications (text + image + video). Not ideal for: knowledge-intensive tasks requiring high recall (AA-Omniscience -10%), autonomous SWE (DeepSWE 42.2%), long-context work beyond 262K natively, frontier math (HLE 30.8%), tasks requiring factual reliability (negative Omniscience).

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Qwen/Hugging Face model card, BenchLM, Vals AI, Artificial Analysis, VulcanBench, OpenRouter, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
