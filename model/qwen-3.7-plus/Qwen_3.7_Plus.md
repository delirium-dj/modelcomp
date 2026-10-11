# Qwen 3.7 Plus — findings by Qwen 3.7 Plus

- Source: Alibaba/Qwen3.7-Plus (`opencode/qwen-3.7-plus`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba's mid-tier closed Qwen3.7 model between Flash and Max, positioned for cost-balanced agentic coding and tool-use productivity workflows. 1M context with 131K output. Exceptional multimodal breadth: MathVision 90.3%, MMMU-Pro 79%, ScreenSpot Pro 79%, OmniDocBench 91.4%, Video-MME 88%, HMMT 92.9%. Strong agentic tool use: τ²-bench 93%, MCP Atlas 73.2%, OSWorld 73.3%, AndroidWorld 81%, BFCL v4 72.9%. SWE-bench Verified 77.7% is solid. GPQA Diamond 90.3% is strong. MMLU-Pro 88.5% is solid. However, AA Intelligence Index 25.2 is low. AA-Omniscience Index 1.1% is very low. GDPval-AA Elo 886 is low. HLE 34.7% is modest. CritPt 9.1% is very low. BenchLM overall 55.52/100 (#61 of 889). Proprietary closed model. Priced affordably at $0.32–$0.40/$1.28–$1.60 per 1M.
- **Provider / access:** Alibaba Cloud API; OpenCode Zen; OpenRouter. No free tier (noFreeId: true).
- **Release / knowledge:** Released ~2026-05/06; knowledge cutoff not precisely documented.
- **IDs:** `opencode/qwen-3.7-plus` (OpenCode Zen); `qwen/qwen3.7-plus` (OpenRouter).
- **Context window:** 1,000,000 tokens (1M); 131K output.
- **Modalities:** Text, image in; text out.
- **Pricing (as of 2026-10-10):** $0.32–$0.40/$1.28–$1.60 per 1M in/out (≤256K). Premium pricing for 256K–1M context: $1.20/$4.80 per 1M. Via OpenRouter/OpenCode Go: $0.32/$1.28.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **93%** (AA — exceptional)
- MCP Atlas: **73.2%** (Alibaba — strong scaled tool orchestration)
- OSWorld-Verified: **73.3%** (Alibaba — strong computer use)
- AndroidWorld: **81.0%** (Alibaba — strong mobile automation)
- BFCL v4: **72.9%** (Alibaba — strong function calling)
- Terminal-Bench 2.0: **70.3%** (Alibaba)
- Terminal-Bench 2.1 (Vals): **52.8%** (Vals AI — moderate)
- DeepPlanning: **62.3%** (Alibaba)
- Claw-Eval: **62.7%** (Alibaba)
- QwenClawBench: **61.8%** (Alibaba)
- VITA-Bench: **45.6%** (Alibaba)
- APEX-Agents-AA: **22.4%** (AA — low)
- AA Agentic Index: **19.7%** (AA — very low)
- GDPval-AA Elo: **886** (AA — low)
- GDPval-AA normalized: **13.5%** (AA — very low)
- OSWorld 2.0: **2.8%** (OSWorld 2.0 paper — very low)
- QwenWebBench: **1536** (Alibaba)

Coding:

- SWE-bench Verified: **77.7%** (Alibaba — solid)
- SWE-bench Pro: **57.6%** (Alibaba)
- SWE Multilingual: **75.8%** (Alibaba — strong)
- Terminal-Bench 2.0: **70.3%** (Alibaba)
- NL2Repo: **41.1%** (Alibaba)
- SciCode: **51.3%** (Alibaba)
- AA-SciCode: **46.1%** (AA)
- AA Coding Index: **55.9%** (AA)
- LiveCodeBench v6: **89.6%** (Qwen3.8-27B model card — shared benchmark)

Multimodal:

- MMMU-Pro: **79%** (Alibaba) / **80.5%** (AA)
- MathVision: **90.3%** (Alibaba — excellent)
- CharXiv: **85.9%** (Alibaba — strong)
- ScreenSpot Pro: **79.0%** (Alibaba — strong GUI grounding)
- OmniDocBench 1.5: **91.4%** (Alibaba — excellent document understanding)
- Video-MME (with subtitle): **88.0%** (Alibaba — strong video)
- VideoMMMU: **85.4%** (Alibaba)
- MLVU (M-Avg): **87.4%** (Alibaba — strong video understanding)
- RealWorldQA: **86.9%** (Alibaba)
- SimpleVQA: **81.7%** (Alibaba)
- ERQA: **69.8%** (Alibaba)
- MedXpertQA (MM): **71.0%** (Alibaba)
- OCRBench V2: **70.7%** (Alibaba)
- MMSearch-Plus: **41.4%** (Alibaba)
- ODINW13: **51.1%** (Alibaba)
- Design Arena Website: **1276** (OpenRouter)

Reasoning / knowledge:

- GPQA Diamond: **90.3%** (Alibaba) / **90.0%** (AA)
- MMLU-Pro: **88.5%** (Alibaba — solid)
- MMLU-Redux: **94.5%** (Alibaba — excellent)
- SuperGPQA: **71.4%** (Alibaba)
- MMMLU: **89.0%** (Alibaba — strong multilingual)
- MRCR v2: **91.7%** (Alibaba — excellent long-context retrieval)
- AA-LCR: **73.0%** (AA — solid long-context reasoning)
- HLE: **34.7%** (Alibaba) / **35.6%** (AA — modest)
- CritPt: **9.1%** (Alibaba — very low)
- AA Intelligence Index: **25.2** (AA — low)
- AA-Omniscience Index: **1.1%** (AA — very low)
- AA-Omniscience Accuracy: **22.5%** (AA)
- AA-Omniscience Hallucination Rate: **27.7%** (AA — moderate)
- HMMT Feb 2026: **92.9%** (Alibaba — excellent math)
- IMO Answer Bench: **86.0%** (Alibaba — strong)
- Apex: **22.7%** (Alibaba — low)
- IFEval: **94.6%** (Alibaba — excellent instruction following)
- IFBench: **79.1%** (Alibaba)

### Normalized scores (1–100)

- **Tool use: 73/100.** τ²-bench 93% is exceptional. MCP Atlas 73.2% is strong for scaled tool orchestration. OSWorld 73.3% is strong for computer use. AndroidWorld 81% is strong for mobile automation. BFCL v4 72.9% is strong for function calling. Terminal-Bench 2.0 70.3% is solid. However, AA Agentic Index 19.7% is very low, GDPval-AA Elo 886 is low, APEX-Agents 22.4% is low, Terminal-Bench 2.1 (Vals) 52.8% is moderate, and OSWorld 2.0 2.8% is very low (latest version). The tool-use profile is strong on vendor benchmarks but the AA independent agentic composite is weak.
- **Reasoning: 55/100.** GPQA Diamond 90.3% is strong. MMLU-Pro 88.5% is solid. MRCR v2 91.7% is excellent for long-context retrieval. HMMT 92.9% is excellent for math. IFEval 94.6% is excellent for instruction following. However, AA Intelligence Index 25.2 is low. HLE 34.7% is modest. CritPt 9.1% is very low. AA-Omniscience Index 1.1% is very low. Apex 22.7% is low. The reasoning profile is uneven: excellent on math and instruction following but very weak on AA's composite evaluation and hardest reasoning challenges.
- **Context window: 82/100.** 1M tokens with 131K output. MRCR v2 91.7% is excellent for long-context retrieval. AA-LCR 73% is solid for long-context reasoning. The 1M context window is standard for frontier models. 131K output is generous. Premium pricing above 256K ($1.20/$4.80) is a cost concern for long-context workloads.
- **Multimodal: 82/100.** Exceptional breadth: MathVision 90.3% (excellent), MMMU-Pro 79–80.5% (solid), ScreenSpot Pro 79% (strong GUI grounding), OmniDocBench 91.4% (excellent document understanding), Video-MME 88% (strong video), VideoMMMU 85.4% (strong), MLVU 87.4% (strong), RealWorldQA 86.9% (strong), CharXiv 85.9% (strong), OCRBench 70.7% (solid). The multimodal profile is among the strongest in the dataset for breadth and depth — covering image, video, document, GUI, and chart understanding.
- **Coding: 68/100.** SWE-bench Verified 77.7% is solid. SWE Multilingual 75.8% is strong. Terminal-Bench 2.0 70.3% is solid. SWE-bench Pro 57.6% is moderate. NL2Repo 41.1% is moderate. AA Coding Index 55.9% is moderate. AA-SciCode 46.1% is modest. The coding profile is solid for a mid-tier model but trails frontier models on harder benchmarks.
- **Cost efficiency: 88/100.** $0.32–$0.40/$1.28–$1.60 per 1M is affordable for a mid-tier model with 1M context. OpenRouter/OpenCode Go pricing at $0.32/$1.28 is competitive. However, premium pricing above 256K ($1.20/$4.80) significantly increases long-context costs. No free tier. For cost-balanced agentic workflows, the standard pricing is competitive.
- **Overall Score: 72/100.** Mean of five quality dims: (73 + 55 + 82 + 82 + 68) / 5 = 72. Qwen 3.7 Plus is Alibaba's mid-tier closed model. Key strengths: τ²-bench 93% (exceptional tool orchestration), MathVision 90.3% (excellent), HMMT 92.9% (excellent math), MRCR v2 91.7% (excellent long-context retrieval), OmniDocBench 91.4% (excellent document understanding), IFEval 94.6% (excellent instruction following), GPQA Diamond 90.3% (strong), SWE-bench Verified 77.7% (solid), MCP Atlas 73.2% (strong), OSWorld 73.3% (strong computer use), AndroidWorld 81% (strong), Video-MME 88% (strong), 1M context with 131K output, affordable pricing. Key weaknesses: AA Intelligence Index 25.2 (low), AA-Omniscience Index 1.1% (very low), GDPval-AA Elo 886 (low), HLE 34.7% (modest), CritPt 9.1% (very low), AA Agentic Index 19.7% (very low), OSWorld 2.0 2.8% (very low), Apex 22.7% (low), proprietary closed model, premium pricing above 256K, BenchLM overall only 55.52/100. Best fit for: multimodal agentic workflows requiring strong vision/video/document understanding, teams needing affordable 1M context with good retrieval (MRCR 91.7%), math-heavy tasks (HMMT 92.9%, MathVision 90.3%), tool orchestration (τ²-bench 93%, MCP Atlas 73.2%), and cost-balanced productivity workflows. Not ideal for: tasks where AA Intelligence Index matters (25.2 is low), hardest reasoning challenges (CritPt 9.1%, HLE 34.7%), knowledge-intensive tasks requiring low hallucination (AA-Omniscience 1.1%), or long-context workloads exceeding 256K (premium pricing kicks in).

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Alibaba Cloud launch blog, BenchLM, Artificial Analysis, OpenRouter, Vals AI, Qwen official blog, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
