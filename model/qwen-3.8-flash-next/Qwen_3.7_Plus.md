# Qwen 3.8 Flash Next — findings by Qwen 3.7 Plus

- Source: Alibaba/Qwen3.8-Flash-Next (`opencode/qwen-3.8-flash-next`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash Next
- **Short description:** Alibaba's open-weight experimental checkpoint (125B language params, 6B active MoE) distinct from managed Qwen3.8-Flash. Qwen Community license. Exceptional live coding: LiveCodeBench v6 91.9%. Excellent math vision: MathVision 90.6% (95.7% w/ Python). Strong knowledge: GPQA Diamond 91.7–92.3%. Excellent mobile use: AndroidWorld 84.5%. Strong tool use: Toolathlon-Verified 73.5%, CoWorkBench 73.9%. Strong SWE: SWE-bench Pro 62.5%, SWE Multilingual 81%. Strong instruction following: IFBench 81.3%. AA-Omniscience Index -9.7% (negative — more wrong than right). 262K native context (extensible to 1M with YaRN). Very cheap: $0.12/$0.40 per 1M on Vercel.
- **Provider / access:** Vercel AI Gateway (`opencode/qwen-3.8-flash-next`); Hugging Face (`Qwen/Qwen3.8-Flash-Next`). Open weights under Qwen Community license — self-hosting possible.
- **Release / knowledge:** Released 2026 (exact date not documented; experimental "Next" variant). Knowledge cutoff not precisely documented.
- **IDs:** `opencode/qwen-3.8-flash-next` (Vercel/OpenCode); `Qwen/Qwen3.8-Flash-Next` (Hugging Face).
- **Context window:** 262,144 tokens (262K) native; extensible to 1M with YaRN rope scaling. AA-LCR 79.7% confirms strong long-context reasoning.
- **Modalities:** Text, image, video in; text out. Tool use supported. Vision-language model with strong visual understanding.
- **Pricing (as of 2026-10-10):** Vercel AI Gateway: $0.12 per 1M input; $0.40 per 1M output. Among the cheapest models available. Self-hosting possible under Qwen Community license.

### Raw benchmarks found

Agent / tool use:

- AndroidWorld: **84.5%** (Qwen — excellent mobile use)
- Toolathlon-Verified: **73.5%** (Qwen — strong tool use)
- CoWorkBench: **73.9%** (Qwen — strong collaborative work)
- JobBench: **55.7%** (Qwen — moderate)
- GDPval-AA (normalized): **56.6%** (AA — moderate)
- GDPval-AA: **1648 Elo** (AA)
- Agents' Last Exam: **51.2%** (Qwen — moderate)
- OSWorld 2.0: **19.4%** (Qwen — low computer use)

Coding:

- LiveCodeBench v6: **91.9%** (Qwen — excellent)
- SWE Multilingual: **81.0%** (Qwen — excellent multilingual coding)
- SWE-bench Pro: **62.5%** (Qwen — strong)
- DeepSWE: **58.7%** (Qwen — moderate-strong)
- AA Coding Index: **73.0%** (AA — strong)
- NL2Repo: **48.1%** (Qwen — moderate)
- AA-SciCode: **50.6%** (AA — moderate)

Multimodal:

- MathVision w/ Python: **95.7%** (Qwen — exceptional)
- MathVision: **90.6%** (Qwen — excellent math vision)
- CharXiv: **90.6%** (Qwen — excellent chart understanding)
- RealWorldQA: **88.5%** (Qwen — excellent real-world visual QA)
- CharXiv w/o tools: **84.6%** (Qwen — strong)
- AA-MMMU-Pro: **79.8%** (AA — strong)
- LVBench: **76.6%** (Qwen — strong long-video)
- ERQA: **72.3%** (Qwen — moderate embodied reasoning)
- Vision2Web: **64.0%** (Qwen — moderate)

Reasoning / knowledge:

- AA-GPQA Diamond: **92.3%** (AA — strong)
- GPQA Diamond: **91.7%** (Qwen — strong)
- IFBench: **81.3%** (Qwen — strong instruction following)
- AA-LCR: **79.7%** (AA — strong long-context reasoning)
- AA-HLE: **38.0%** (AA — low)
- HLE: **35.9%** (Qwen — low)
- AA Intelligence Index: **39.8%** (AA — moderate)
- CritPt: **11.1%** (AA — low)
- AA-Omniscience Index: **-9.7%** (AA — NEGATIVE; more wrong than right)
- AA-Omniscience Accuracy: **24.5%** (AA — very low)
- AA-Omniscience Hallucination Rate: **45.3%** (AA — moderate)

### Normalized scores (1–100)

- **Tool use: 71/100.** AndroidWorld 84.5% is excellent (mobile use). CoWorkBench 73.9% is strong. Toolathlon-Verified 73.5% is strong. JobBench 55.7% is moderate. GDPval-AA 56.6% is moderate. Agents' Last Exam 51.2% is moderate. OSWorld 2.0 19.4% is low (computer use). The model excels at mobile use and tool use but struggles with computer use (OSWorld 2.0).
- **Reasoning: 55/100.** GPQA Diamond 91.7–92.3% is strong. IFBench 81.3% is strong. AA-LCR 79.7% is strong. However, AA-HLE 38% is low. HLE 35.9% is low. CritPt 11.1% is low. AA-Omniscience Index -9.7% is negative (more wrong than right). AA-Omniscience Accuracy 24.5% is very low. The reasoning profile is strong on structured knowledge but weak on open-ended tasks and knowledge reliability.
- **Context window: 65/100.** 262K native (extensible to 1M with YaRN). AA-LCR 79.7% confirms strong long-context reasoning. The native 262K is moderate by frontier standards, but YaRN extensibility adds flexibility.
- **Multimodal: 83/100.** MathVision 90.6% (95.7% w/ Python) is exceptional. CharXiv 90.6% is excellent. RealWorldQA 88.5% is excellent. AA-MMMU-Pro 79.8% is strong. LVBench 76.6% is strong. ERQA 72.3% is moderate. Vision2Web 64% is moderate. Text + image + video input supported. The multimodal profile is exceptional for mathematical and chart understanding, strong for real-world visual QA and long-video.
- **Coding: 75/100.** LiveCodeBench v6 91.9% is excellent. SWE Multilingual 81% is excellent. SWE-bench Pro 62.5% is strong. AA Coding Index 73% is strong. DeepSWE 58.7% is moderate-strong. NL2Repo 48.1% is moderate. AA-SciCode 50.6% is moderate. The coding profile is excellent for live coding and multilingual SWE, strong overall.
- **Cost efficiency: 95/100.** $0.12/$0.40 per 1M on Vercel. Among the cheapest models available. Open weights under Qwen Community license allow self-hosting. The combination of very low pricing + excellent coding (LiveCodeBench 91.9%) + strong multimodal (MathVision 90.6%) + strong knowledge (GPQA Diamond 92.3%) is outstanding value.
- **Overall Score: 69.8/100.** Mean of five quality dims: (71 + 55 + 65 + 83 + 75) / 5 = 69.8. Qwen 3.8 Flash Next is Alibaba's experimental open-weight checkpoint (125B/6B active MoE). Key strengths: LiveCodeBench v6 91.9% (excellent), MathVision 90.6% / 95.7% w/ Python (exceptional), CharXiv 90.6% (excellent), RealWorldQA 88.5% (excellent), GPQA Diamond 91.7–92.3% (strong), AndroidWorld 84.5% (excellent mobile use), SWE Multilingual 81% (excellent), IFBench 81.3% (strong instruction following), AA-LCR 79.7% (strong long-context), SWE-bench Pro 62.5% (strong), AA Coding Index 73% (strong), Toolathlon-Verified 73.5% (strong), CoWorkBench 73.9% (strong), AA-MMMU-Pro 79.8% (strong), LVBench 76.6% (strong), very cheap ($0.12/$0.40 per 1M), open weights (Qwen Community license). Key weaknesses: AA-Omniscience Index -9.7% (negative — more wrong than right), AA-Omniscience Accuracy 24.5% (very low), AA-Omniscience Hallucination Rate 45.3% (moderate), OSWorld 2.0 19.4% (low computer use), AA-HLE 38% (low), CritPt 11.1% (low), HLE 35.9% (low), 262K native context (moderate), experimental "Next" variant (may be less stable). Best fit for: live coding assistance (LiveCodeBench 91.9%), mathematical visual reasoning (MathVision 90.6%), multilingual SWE (SWE Multilingual 81%), mobile-use agents (AndroidWorld 84.5%), cost-sensitive deployments ($0.12/$0.40 per 1M), chart understanding (CharXiv 90.6%), tool-use workflows (Toolathlon 73.5%), instruction-following tasks (IFBench 81.3%). Not ideal for: knowledge-intensive tasks requiring factual reliability (negative Omniscience), computer-use agents (OSWorld 2.0 19.4%), frontier math (HLE 35.9%), tasks requiring deep open-ended reasoning (CritPt 11.1%).

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across BenchLM, Artificial Analysis, Qwen/Hugging Face model card, Vercel, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
