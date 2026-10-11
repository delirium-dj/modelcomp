# GPT-5.2 — findings by Qwen 3.7 Plus

- Source: OpenAI/GPT-5.2 (`opencode/gpt-5.2`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2
- **Short description:** OpenAI's December-2025 Thinking-tier flagship family (Instant/Thinking/Pro) for professional knowledge work and multi-language code fixing. AA Intelligence Index ~30.4% (estimated). AIME 2025 100% (first model to achieve perfect score). ARC-AGI-2 52.9% (first model above 90% on ARC-AGI changes inference per Introl). SWE-bench Verified 80% (strong). GPQA Diamond 90.3–92.4%. ORCFLO quality score 91.89 (#7 of 32), #1 output consistency 99.6. AA-Omniscience Index -0.9% (slightly negative — more wrong than right). 81.2% hallucination rate is very high. 400K context. Deprecated by OpenAI in favor of GPT-5.4.
- **Provider / access:** OpenAI API (`opencode/gpt-5.2`). Proprietary model. Deprecated — OpenAI recommends GPT-5.4 instead.
- **Release / knowledge:** Released December 11, 2025. Knowledge cutoff August 31, 2025.
- **IDs:** `opencode/gpt-5.2` (OpenAI API); also available via OpenRouter and other providers.
- **Context window:** 400,000 tokens (400K); 128K output tokens. AA-LCR 82.7% confirms strong long-context reasoning.
- **Modalities:** Text, image in; text out. Thinking (extended chain-of-thought) enabled by default in XHigh mode.
- **Pricing (as of 2026-10-10):** $1.75 per 1M input tokens; $14.00 per 1M output tokens; $0.175 cached (90% cache discount). Pro tier: $21.00/$168.00 per 1M. Moderately priced input but expensive output compared to peers.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **84.8%** (AA — strong agentic performance)
- BrowseComp: **65.8%** (OpenAI — moderate web browsing)
- OSWorld-Verified: **47.3%** (OpenAI — moderate-low computer use)
- Gert Labs: **46.54%** (Gert Labs — moderate)
- JobBench: **34.3%** (JobBench paper — low)

Coding:

- SWE-bench Verified: **80%** (OpenAI — strong)
- SWE-bench Pro: **55.6%** (OpenAI — moderate)
- Vibe Code Bench (Vals): **53.5%** (Vals AI — moderate)

Multimodal:

- AI2D_TEST: **92.2%** (Qwen comparison table — excellent diagram understanding)
- CountBench: **91.9%** (Qwen comparison table — excellent counting)
- DynaMath: **86.8%** (Qwen comparison table — strong dynamic math)
- Video-MME (with subtitle): **86.0%** (Qwen comparison table — strong video)
- VideoMMMU: **85.9%** (Qwen comparison table — strong video)
- Video-MME (w/o subtitle): **85.8%** (Qwen comparison table — strong video)
- MLVU (M-Avg): **85.6%** (Qwen comparison table — strong long video)
- OmniDocBench 1.5: **85.7%** (Qwen comparison table — strong document)
- MMMU: **86.7%** (Qwen comparison table — strong)
- MMMU-Pro: **79.5%** (OpenAI — strong)
- We-Math: **79.0%** (Qwen comparison table — strong math reasoning)
- RealWorldQA: **83.3%** (Qwen comparison table — strong)
- MathVision: **83.0%** (Qwen — strong math vision)
- CharXiv: **82.1%** (Qwen — strong chart understanding)
- V*: **75.9%** (Qwen — moderate spatial reasoning)
- CC-OCR: **70.3%** (Qwen — moderate OCR)
- ERQA: **59.8%** (Qwen — moderate-low)
- SimpleVQA: **55.8%** (Qwen — moderate-low)
- Design Arena Website: **1201** (OpenRouter — modest)

Reasoning / knowledge:

- AIME 2025: **100%** (OpenAI — PERFECT; first model to achieve this)
- AA AIME 2025: **99.0%** (AA — near-perfect)
- ARC-AGI-1: **86.17%** (ARC Prize XHigh — strong abstract reasoning)
- GPQA: **92.4%** (Qwen comparison — strong)
- AA-GPQA Diamond: **90.3%** (AA — strong)
- AA-LCR: **82.7%** (AA — strong long-context reasoning)
- IFBench: **75.4%** (AA — strong instruction following)
- FrontierMath v2 (Tiers 1-3): **40.7%** (Epoch AI — moderate)
- AA-HLE: **37.7%** (AA — low)
- FrontierMath v2 (Tier 4): **18.8%** (Epoch AI — low)
- CritPt: **11.6%** (AA — low)
- AA-Omniscience Index: **-0.9%** (AA — slightly negative; more wrong than right)
- AA-Omniscience Accuracy: **44.3%** (AA — moderate-low)
- AA-Omniscience Hallucination Rate: **81.2%** (AA — VERY HIGH)
- AA Intelligence Index: **30.4%** (AA — estimated, below average for tier)

ORCFLO Index (May 10, 2026; 32 models, text-only business tasks):

- Output Consistency: **99.6** (#1 of 32 — best-in-cohort)
- Instruction Following: **93.5** (#6 — Leader)
- Analysis: **92.5** (#6 — Leader)
- Hallucination: **92.4** (#13 — Strong)
- Refusal Calibration: **92.2** (#5 — Leader)
- Writing: **91.5** (#8 — Leader)
- Summarization: **90.8** (#15 — Strong)
- Extraction: **82.5** (#21 — Contender; weak spot)
- Overall Quality: **91.89** (#7 of 32)

### Normalized scores (1–100)

- **Tool use: 58/100.** τ²-bench 84.8% is strong. BrowseComp 65.8% is moderate. OSWorld-Verified 47.3% is moderate-low (computer use). Gert Labs 46.5% is moderate. JobBench 34.3% is low. The model performs well on conversational agentic tasks (τ²-bench) but struggles with computer use (OSWorld) and job-specific tasks.
- **Reasoning: 65/100.** AIME 2025 100% is perfect (first model). ARC-AGI-1 86.17% is strong. GPQA Diamond 90.3–92.4% is strong. AA-LCR 82.7% is strong. IFBench 75.4% is strong. However, FrontierMath v2 Tier 4 18.8% is low. AA-HLE 37.7% is low. CritPt 11.6% is low. AA-Omniscience Index -0.9% is slightly negative (more wrong than right). AA-Omniscience Hallucination Rate 81.2% is very high. The model excels at structured math/reasoning but struggles with open-ended frontier problems and knowledge reliability.
- **Context window: 78/100.** 400K context with 128K output. AA-LCR 82.7% confirms effective long-context reasoning. The 400K window is large and competitive with frontier peers. 128K output is generous.
- **Multimodal: 78/100.** AI2D_TEST 92.2% is excellent. CountBench 91.9% is excellent. DynaMath 86.8% is strong. Video-MME 85.8–86% is strong. OmniDocBench 85.7% is strong. MMMU 86.7% is strong. MathVision 83% is strong. RealWorldQA 83.3% is strong. Text + image input supported (no video input natively). The multimodal profile is consistently strong across diverse visual tasks.
- **Coding: 63/100.** SWE-bench Verified 80% is strong. However, SWE-bench Pro 55.6% is moderate. Vibe Code Bench 53.5% is moderate. The coding profile is anchored by strong SWE-bench Verified but moderate performance on harder coding benchmarks. AIME 100% suggests strong algorithmic reasoning.
- **Cost efficiency: 40/100.** $1.75/$14.00 per 1M ($0.175 cached). Input price is moderate (median $2.00) but output is expensive (median $10.00). ORCFLO cost rank #23 of 32 — more expensive than GPT-5.1 (#5, $0.0100/case) and Gemini 2.5 Pro (#6, $0.0083/case), both of which score higher on quality. Deprecated by OpenAI in favor of GPT-5.4. Pro tier ($21/$168) is extremely expensive.
- **Overall Score: 68.4/100.** Mean of five quality dims: (58 + 65 + 78 + 78 + 63) / 5 = 68.4. GPT-5.2 is OpenAI's December-2025 Thinking-tier flagship. Key strengths: AIME 2025 100% (perfect — first model), ARC-AGI-1 86.17% (strong), GPQA Diamond 90.3–92.4% (strong), τ²-bench 84.8% (strong agentic), SWE-bench Verified 80% (strong), ORCFLO Output Consistency 99.6 (#1 of 32 — best-in-cohort), ORCFLO Analysis 92.5 (#6), ORCFLO Instruction Following 93.5 (#6), ORCFLO Writing 91.5 (#8), AA-LCR 82.7% (strong long-context), 400K context window, DynaMath 86.8% (strong), Video-MME 85.8–86% (strong), OmniDocBench 85.7% (strong). Key weaknesses: AA-Omniscience Index -0.9% (slightly negative — more wrong than right), AA-Omniscience Hallucination Rate 81.2% (very high), OSWorld-Verified 47.3% (moderate-low computer use), AA-HLE 37.7% (low), CritPt 11.6% (low), FrontierMath v2 Tier 4 18.8% (low), SWE-bench Pro 55.6% (moderate), Vibe Code Bench 53.5% (moderate), cost rank #23 of 32 (expensive), deprecated by OpenAI (use GPT-5.4 instead), AA Intelligence Index 30.4% (estimated, below average for tier). Best fit for: mathematical reasoning (AIME 100%), structured analysis tasks (ORCFLO Analysis 92.5), long-form writing (ORCFLO Writing 91.5), repeatable workflows (ORCFLO Consistency 99.6), long-context reasoning (AA-LCR 82.7%), instruction-following deployments (ORCFLO IF 93.5). Not ideal for: knowledge-intensive tasks requiring factual reliability (negative Omniscience, 81.2% hallucination), computer-use agents (OSWorld 47.3%), cost-sensitive deployments (expensive, deprecated), frontier math research (HLE 37.7%, FrontierMath Tier 4 18.8%), autonomous SWE (SWE-bench Pro 55.6%).

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across OpenAI blog, BenchLM, Artificial Analysis, ORCFLO Index, Qwen comparison tables, ARC Prize, Epoch AI, Vals AI, OpenRouter, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
