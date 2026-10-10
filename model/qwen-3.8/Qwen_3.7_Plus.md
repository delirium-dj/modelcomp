# Qwen 3.8 — findings by Qwen 3.7 Plus

- Source: Alibaba/Qwen3.8-27B (`opencode/qwen-3.8`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8
- **Short description:** Alibaba's Apache-2.0 open-weight dense 27B model for self-hosted agentic work with near-flagship results on a single 24 GB GPU. AA Agentic Index 51 trails only Kimi K2 (2.8T params, ~100x larger) — a striking result for a 27B dense model. OSWorld 84.3% and AndroidWorld 81.9% are excellent for computer use. LiveCodeBench v6 90.3% and SWE-bench (Vals) 86.0% are strong coding results. Multimodal capability is exceptional: MathVision w/ Python 94.6%, CharXiv 90.2%, OmniDocBench 91.1%. Intelligence level tracks close to Claude Opus 4.8 at max settings per independent testing. AA Intelligence Index 34 is modest. Runs at 15-20 t/s single-thread on DGX Spark, scaling to 60-70 t/s concurrent. Adjustable reasoning effort (off/low/medium/extra high). Open weights under Apache 2.0 — $0 self-hosted.
- **Provider / access:** OpenCode Zen; Hugging Face (`Qwen/Qwen3.8-27B`). Apache 2.0 open weights for self-hosting. API available at ~$0.42/$3.00 per 1M.
- **Release / knowledge:** Released ~August 2026; knowledge cutoff not precisely documented.
- **IDs:** `opencode/qwen-3.8` (OpenCode Zen); `Qwen/Qwen3.8-27B` (Hugging Face).
- **Context window:** 262,144 tokens (262K) native; up to 1M via YaRN extrapolation. 33K output cap.
- **Modalities:** Text, image, video in; text out.
- **Pricing (as of 2026-10-10):** API ~$0.42/$3.00 per 1M in/out. Self-hosted: $0 (Apache 2.0 open weights). Among the most cost-effective options for self-hosting.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **84.3%** (Qwen model card — excellent computer use)
- AndroidWorld: **81.9%** (Qwen model card)
- Terminal-Bench 2.1: **73.0%** (Qwen) / **79.8%** (AA) / **58.4%** (Vals AI)
- CoWorkBench: **70.7%** (Qwen)
- WebArena-Verified: **64.8%** (Qwen)
- AA Agentic Index: **46.5%** (AA) / **51** (MindStudio — trails only Kimi K2)
- GDPval-AA: **46.2%** normalized / Elo **1423** (AA)
- AA Briefcase Elo: **1397** (AA)
- AA AutomationBench: **48.2%** (AA)
- AA EnterpriseOps-Gym: **44.2%** (AA)
- AA Tau3 Banking: **48.0%** (AA)
- AA Terminal-Bench 4.0: **5.6%** (AA — very low, latest version)
- Agents' Last Exam: **42.9%** (Qwen)
- JobBench: **33.4%** (Qwen)
- GDP.pdf: **16.6%** (AA)

Coding:

- LiveCodeBench v6: **90.3%** (Qwen — excellent)
- SWE-bench (Vals): **86.0%** (Vals AI)
- SWE-bench Pro: **61.7%** (Qwen)
- VulcanBench v3: **82.6%** (VulcanBench)
- LiveCodeBench (Vals): **84.0%** (Vals AI)
- AA Coding Index: **68.1%** (AA)
- DeepSWE: **42.2%** (Qwen — modest)
- NL2Repo: **42.3%** (Qwen)
- AA-SciCode: **46.6%** (AA)
- Bug Hunt Bench: **15.0 fixes** (Bug Hunt Bench)

Multimodal:

- MathVision w/ Python: **94.6%** (Qwen — exceptional)
- CharXiv (with tools): **90.2%** (Qwen)
- OmniDocBench 1.5: **91.1%** (Qwen)
- MathVision: **90.0%** (Qwen)
- RealWorldQA: **85.9%** (Qwen)
- BabyVision w/ Python: **85.6%** (Qwen)
- CharXiv (without tools): **83.7%** (Qwen)
- AA-MMMU-Pro: **76.3%** (AA)
- BabyVision: **65.7%** (Qwen)
- ERQA: **65.5%** (Qwen)
- Vision2Web: **62.9%** (Qwen)

Reasoning / knowledge:

- AA-LCR (Long Context Reasoning): **82.0%** (AA)
- GPQA Diamond: **90.5%** (AA) / **89.2%** (Qwen) / **88.9%** (Vals AI)
- MMLU-Pro: **84.3%** (Vals AI)
- AA Intelligence Index: **34** (AA) / **33.7%** (BenchLM)
- AA-HLE: **33.9%** (AA)
- HLE: **30.8%** (Qwen)
- MLCR-AA: **21.7%** (AA — low)
- AA-Omniscience Index: **-10.0%** (AA — negative, very poor)
- AA-Omniscience Accuracy: **15.6%** (AA)
- CritPt (Physics): **5.4%** (AA — very low)
- IFBench (Instruction Following): **79.5%** (Qwen)

### Normalized scores (1–100)

- **Tool use: 73/100.** OSWorld 84.3% is excellent for computer use. AndroidWorld 81.9% is strong for mobile automation. Terminal-Bench 2.1 73.0-79.8% is competitive. CoWorkBench 70.7% is solid. WebArena 64.8% is moderate. AA Agentic Index 46.5-51 is moderate (trails only Kimi K2 among open-weight models). However, AA Terminal-Bench 4.0 5.6% is very low (latest version shows weakness), GDP.pdf 16.6% is low, and JobBench 33.4% is modest. The tool use profile is exceptional for a 27B dense model — competing with models 100x its parameter count — but shows weakness on the latest terminal and document-based agentic benchmarks.
- **Reasoning: 45/100.** AA-LCR 82.0% is solid for long-context reasoning. GPQA Diamond 90.5% is excellent. MMLU-Pro 84.3% is strong. IFBench 79.5% is good for instruction following. However, AA Intelligence Index 34 is modest. AA-HLE 33.9% is low. MLCR 21.7% is weak. CritPt 5.4% is very low. AA-Omniscience Index -10.0% is the worst in the dataset (negative score). Independent testing notes intelligence level tracks close to Claude Opus 4.8 at max settings, which is impressive for a 27B model. The reasoning profile is split: strong on knowledge benchmarks (GPQA, MMLU-Pro) but very weak on composite intelligence measures and knowledge calibration.
- **Context window: 68/100.** 262K tokens native with 1M via YaRN extrapolation. 33K output cap. AA-LCR 82.0% is solid for long-context reasoning at the native 262K size. The 1M YaRN extension may degrade quality. The 33K output cap is moderate. For a self-hosted 27B model, 262K native context is impressive — most models this size have 32-128K context.
- **Multimodal: 84/100.** MathVision w/ Python 94.6% is exceptional. CharXiv 90.2% is excellent. OmniDocBench 91.1% is outstanding for document understanding. RealWorldQA 85.9% is strong. BabyVision w/ Python 85.6% is solid. Vision2Web 62.9% demonstrates ability to convert visual input to web actions. The model can count objects by dividing images into patches and draw bounding boxes by generating pixel coordinates — capabilities rarely seen in open-weight models this size. Multimodal is a major strength.
- **Coding: 67/100.** LiveCodeBench v6 90.3% is excellent. SWE-bench (Vals) 86.0% is strong. VulcanBench v3 82.6% is solid. SWE-bench Pro 61.7% is moderate. AA Coding Index 68.1% is solid. However, DeepSWE 42.2% is modest (behind frontier models at 63-75%). NL2Repo 42.3% is moderate. AA-SciCode 46.6% is modest. The coding profile is strong on LiveCodeBench and SWE-bench but weaker on DeepSWE and scientific coding. For a 27B dense model, these results are exceptional.
- **Cost efficiency: 95/100.** Apache 2.0 open weights — $0 for self-hosting. API at ~$0.42/$3.00 per 1M is extremely affordable. Runs on a single 24 GB GPU. 15-20 t/s single-thread on DGX Spark, scaling to 60-70 t/s concurrent. For self-hosting deployments, this is among the best value propositions in the dataset: near-flagship agentic and multimodal performance at zero marginal cost. The Apache 2.0 license has no commercial restrictions.
- **Overall Score: 67.4/100.** Mean of five quality dims: (73 + 45 + 68 + 84 + 67) / 5 = 67.4. Alibaba's open-weight dense 27B model. Key strengths: AA Agentic Index 51 (trails only 2.8T Kimi K2), OSWorld 84.3% (excellent computer use), LiveCodeBench 90.3% (excellent), MathVision w/ Python 94.6% (exceptional), OmniDocBench 91.1% (outstanding), GPQA Diamond 90.5% (excellent), Apache 2.0 open weights ($0 self-hosted), runs on single 24 GB GPU. Key weaknesses: AA-Omniscience Index -10.0% (worst in dataset), AA Intelligence Index 34 (modest), CritPt 5.4% (very low), AA Terminal-Bench 4.0 5.6% (very low), DeepSWE 42.2% (modest), 262K native context (moderate). Best fit for: self-hosted agentic workflows on consumer hardware, teams needing open weights under Apache 2.0, multimodal applications requiring strong vision capabilities, cost-sensitive deployments where $0 marginal cost is critical, and researchers experimenting with agentic coding harnesses. Not ideal for: knowledge-intensive tasks requiring high Omniscience scores, frontier-difficulty coding (DeepSWE), or physics reasoning (CritPt).

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Qwen model card (Hugging Face), BenchLM, Artificial Analysis, Vals AI, MindStudio, VulcanBench, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
