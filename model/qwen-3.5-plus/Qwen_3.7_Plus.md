# Qwen 3.5 Plus — findings by Qwen 3.7 Plus

- Source: Alibaba/Qwen3.5-Plus (`opencode/qwen-3.5-plus`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Plus
- **Short description:** Alibaba's hosted accuracy-tuned value tier of the Qwen3.5 generation (397B total / 17B active MoE) with 1M context. The cheapest 1M multimodal agent backbone for high-volume coding and RAG. AIME 2026 93.3%. HMMT Feb 2025 94.8%. SWE-bench Verified 76.2%. LiveCodeBench v6 83.6%. Strong multimodal: CountBench 97.2%, V* 95.8%, OmniDocBench 90.8%, AI2D_TEST 93.9%, MathVision 88.6%, Video-MME 87.5%. GPQA 88.4%. MMLU-Pro 87.8%. τ²-bench 83.9%. BrowseComp 69%. AA-Omniscience Index -37.9% (very negative — severely unreliable knowledge). 82.7% hallucination rate. 1M context window. Very cheap: ~$0.26-0.40/$1.56-2.40 per 1M.
- **Provider / access:** Alibaba Model Studio (`opencode/qwen-3.5-plus`); OpenRouter; multiple providers. Hosted proprietary model (based on open-weights Qwen3.5-397B-A17B).
- **Release / knowledge:** Released ~February 2026 (Qwen3.5 family launch). Knowledge cutoff not precisely documented.
- **IDs:** `opencode/qwen-3.5-plus` (OpenCode); `qwen3.5-plus` (Alibaba Model Studio); based on `Qwen/Qwen3.5-397B-A17B` (Hugging Face open weights).
- **Context window:** 1,000,000 tokens (1M); 65,536 output tokens (65K out). Among the largest context windows available. AA-LCR 64.3% confirms moderate long-context reasoning.
- **Modalities:** Text, image, video in; text out. Full multimodal support with extensive visual understanding capabilities.
- **Pricing (as of 2026-10-11):** ~$0.26-0.40 per 1M input; ~$1.56-2.40 per 1M output; $0.04 cache. China region pricing even cheaper (~$0.115/$0.688). Among the cheapest 1M-context multimodal models available.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **83.9%** (AA — strong agentic)
- MCP-Tasks: **74.2%** (Qwen — strong MCP tool use)
- WideResearch: **74.0%** (Qwen — strong research)
- BrowseComp: **69.0%** (Qwen — moderate-strong web browsing)
- τ³-bench: **68.4%** (Qwen — moderate-strong)
- OSWorld-Verified: **62.2%** (Qwen — moderate computer use)
- Claw-Eval: **56.8%** (Claw-Eval — moderate)
- QwenClawBench: **51.8%** (Qwen — moderate)
- MCP Atlas: **46.1%** (Qwen — moderate)
- VITA-Bench: **43.7%** (Qwen — moderate)
- DeepPlanning: **37.6%** (Qwen — moderate-low)
- Toolathlon: **36.3%** (Qwen — moderate-low)
- Terminal-Bench 2.0: **52.5%** (Qwen — moderate)
- Gert Labs: **46.76%** (Gert Labs — moderate)
- JobBench: **18.5%** (JobBench paper — very low)
- ResearchClawBench: **14.2%** (ResearchClawBench — very low)

Coding:

- LiveCodeBench v6: **83.6%** (Qwen — excellent)
- SWE-bench Verified: **76.2%** (Qwen — strong)
- SWE Multilingual: **69.3%** (Qwen — strong)
- SWE-bench Pro: **50.9%** (Qwen — moderate)
- Terminal-Bench 2.0: **52.5%** (Qwen — moderate)
- NL2Repo: **32.2%** (Qwen — low)

Multimodal:

- CountBench: **97.2%** (Qwen — exceptional counting)
- V*: **95.8%** (Qwen — exceptional spatial reasoning)
- OmniDocBench 1.5: **90.8%** (Qwen — excellent document understanding)
- AI2D_TEST: **93.9%** (Qwen — excellent diagram understanding)
- RefCCO (avg): **92.3%** (Qwen — excellent referring)
- MathVision: **88.6%** (Qwen — excellent math vision)
- We-Math: **87.9%** (Qwen — excellent math reasoning)
- DynaMath: **86.3%** (Qwen — strong dynamic math)
- MLVU (M-Avg): **86.7%** (Qwen — strong long-video)
- Video-MME (with sub): **87.5%** (Qwen — strong video)
- Video-MME (w/o sub): **83.7%** (Qwen — strong video)
- RealWorldQA: **83.9%** (Qwen — strong real-world QA)
- CC-OCR: **82.0%** (Qwen — strong OCR)
- CharXiv: **80.8%** (Qwen — strong chart)
- MMMU: **85.0%** (Qwen — strong multimodal)
- VideoMMMU: **84.7%** (Qwen — strong video)
- MMMU-Pro: **79.0%** (Qwen — strong professional multimodal)
- MMAnswerBench: **80.9%** (Qwen — strong)
- SimpleVQA: **67.1%** (Qwen — moderate)
- ERQA: **67.5%** (Qwen — moderate embodied)
- ScreenSpot Pro: **65.6%** (Qwen — moderate GUI grounding)
- MMLongBench-Doc: **61.5%** (Qwen — moderate long-doc)
- ODINW13: **47.0%** (Qwen — moderate-low object detection)

Reasoning / knowledge:

- MMLU-Redux: **94.9%** (Qwen — exceptional)
- C-Eval: **93.0%** (Qwen — exceptional Chinese knowledge)
- AIME 2026: **93.3%** (Qwen — exceptional math)
- HMMT Feb 2025: **94.8%** (Qwen — exceptional)
- HMMT Nov 2025: **92.7%** (Qwen — exceptional)
- HMMT Feb 2026: **87.9%** (Qwen — strong)
- IFEval: **92.6%** (Qwen — exceptional instruction following)
- GPQA: **88.4%** (Qwen — strong)
- MMLU-Pro: **87.8%** (Qwen — strong)
- IFBench: **76.5%** (Qwen — strong)
- SuperGPQA: **70.4%** (Qwen — moderate-strong)
- PolyMath: **73.3%** (Qwen — strong multilingual math)
- LongBench v2: **63.2%** (Qwen — moderate long-context)
- AA-LCR: **64.3%** (AA — moderate long-context)
- AI-Needle: **68.7%** (Qwen — moderate needle-in-haystack)
- AA-GPQA Diamond: **86.1%** (AA — strong)
- HLE: **28.7%** (Qwen — low)
- AA-HLE: **19.8%** (AA — very low)
- AA-Omniscience Index: **-37.9%** (AA — VERY NEGATIVE; severely unreliable)
- AA-Omniscience Accuracy: **24.5%** (AA — very low)
- AA-Omniscience Hallucination Rate: **82.7%** (AA — very high)
- AA Intelligence Index: **21.4%** (AA — low)
- CritPt: **0.9%** (AA — extremely low)
- AA-IFBench: **51.6%** (AA — moderate)

### Normalized scores (1–100)

- **Tool use: 58/100.** τ²-bench 83.9% is strong. MCP-Tasks 74.2% is strong. WideResearch 74% is strong. BrowseComp 69% is moderate-strong. OSWorld-Verified 62.2% is moderate. Terminal-Bench 2.0 52.5% is moderate. However, JobBench 18.5% is very low. ResearchClawBench 14.2% is very low. Toolathlon 36.3% is moderate-low. The model is strong on conversational agentic tasks and MCP tool use but weak on job-specific and research-claw tasks.
- **Reasoning: 55/100.** AIME 2026 93.3% is exceptional. HMMT Feb 2025 94.8% is exceptional. MMLU-Redux 94.9% is exceptional. GPQA 88.4% is strong. MMLU-Pro 87.8% is strong. IFEval 92.6% is exceptional. However, AA-Omniscience Index -37.9% is very negative (severely unreliable knowledge). AA-HLE 19.8% is very low. CritPt 0.9% is extremely low. AA Intelligence Index 21.4% is low. The reasoning profile is exceptional for math competition problems and structured knowledge but catastrophically poor on knowledge reliability (very negative Omniscience).
- **Context window: 92/100.** 1M context (1,000,000 tokens) with 65K output. Among the largest context windows available. AA-LCR 64.3% is moderate (not as strong as some peers for long-context reasoning). The 1M context is class-leading but the moderate AA-LCR suggests the model doesn't fully leverage the large window for reasoning.
- **Multimodal: 78/100.** CountBench 97.2% is exceptional. V* 95.8% is exceptional. OmniDocBench 90.8% is excellent. AI2D_TEST 93.9% is excellent. MathVision 88.6% is excellent. Video-MME 87.5% is strong. RealWorldQA 83.9% is strong. MMMU 85% is strong. Text + image + video input supported. The multimodal profile is exceptional for counting, spatial reasoning, and document understanding, strong for video and math vision.
- **Coding: 65/100.** LiveCodeBench v6 83.6% is excellent. SWE-bench Verified 76.2% is strong. SWE Multilingual 69.3% is strong. However, SWE-bench Pro 50.9% is moderate. NL2Repo 32.2% is low. Terminal-Bench 2.0 52.5% is moderate. The coding profile is excellent for live coding, strong for SWE-bench, but moderate for autonomous SWE and low for repo generation.
- **Cost efficiency: 85/100.** ~$0.26-0.40/$1.56-2.40 per 1M. $0.04 cache. Among the cheapest 1M-context multimodal models available. China region pricing even cheaper. The combination of 1M context + multimodal + strong coding at sub-$0.50/$2.50 pricing is outstanding value for high-volume deployments.
- **Overall Score: 69.6/100.** Mean of five quality dims: (58 + 55 + 92 + 78 + 65) / 5 = 69.6. Qwen 3.5 Plus is Alibaba's hosted value-tier 397B/17B MoE model. Key strengths: 1M context window (class-leading), AIME 2026 93.3% (exceptional), HMMT Feb 2025 94.8% (exceptional), MMLU-Redux 94.9% (exceptional), CountBench 97.2% (exceptional), V* 95.8% (exceptional), OmniDocBench 90.8% (excellent), AI2D_TEST 93.9% (excellent), LiveCodeBench v6 83.6% (excellent), IFEval 92.6% (exceptional), τ²-bench 83.9% (strong), GPQA 88.4% (strong), MMLU-Pro 87.8% (strong), MathVision 88.6% (excellent), Video-MME 87.5% (strong), SWE-bench Verified 76.2% (strong), very cheap (~$0.26-0.40/$1.56-2.40 per 1M). Key weaknesses: AA-Omniscience Index -37.9% (VERY NEGATIVE — severely unreliable knowledge), AA-Omniscience Accuracy 24.5% (very low), AA-Omniscience Hallucination Rate 82.7% (very high), AA-HLE 19.8% (very low), CritPt 0.9% (extremely low), AA Intelligence Index 21.4% (low), JobBench 18.5% (very low), ResearchClawBench 14.2% (very low), NL2Repo 32.2% (low), SWE-bench Pro 50.9% (moderate), AA-LCR 64.3% (moderate long-context reasoning despite 1M window), Toolathlon 36.3% (moderate-low). Best fit for: high-volume agentic workloads at low cost, math competition-level reasoning (AIME 93.3%, HMMT 94.8%), live coding assistance (LiveCodeBench 83.6%), document understanding (OmniDocBench 90.8%), video understanding (Video-MME 87.5%), long-context RAG (1M window), cost-sensitive deployments (~$0.26-0.40/1M input), multilingual tasks (PolyMath 73.3%, MAXIFE 88.2%). Not ideal for: knowledge-intensive tasks requiring factual reliability (AA-Omniscience -37.9% — among worst observed), autonomous SWE (SWE-bench Pro 50.9%, NL2Repo 32.2%), frontier math (HLE 19.8%), physics reasoning (CritPt 0.9%), tasks requiring low hallucination (82.7% rate).

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-11
- Method: public internet research across BenchLM (Qwen3.5 Plus + Qwen3.5-397B-A17B), Artificial Analysis, Qwen/Hugging Face model card, MorphLLM, Epoch AI, Vals AI, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores. Qwen3.5 Plus is the hosted variant of the open-weights Qwen3.5-397B-A17B; benchmarks from the open-weights model card are used where Plus-specific data is unavailable.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
