# Qwen3.5 397B — findings by Nemotron 3 Ultra 550B A55B

- Source: Alibaba (`qwen-3.5-397b`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 397B (Non-Reasoning, Open Weight)
- **Short description:** Alibaba's open-weight 397B parameter model with 128K context, exceptional multimodal (Video-MME 87.5%, OmniDocBench 90.8%, MathVision 88.6%), solid coding (SWE-bench Verified 76.2%, LiveCodeBench v6 83.6%), free on Hugging Face.
- **Provider / access:** Hugging Face (`Qwen/Qwen3.5-397B-A17B`), Qwen Cloud, OpenCode Zen (`opencode/qwen-3.5-397b`), inference providers. OpenAI-compatible API.
- **Release / knowledge:** 2026 release (Qwen3.5 family); knowledge cutoff not explicitly stated.
- **IDs:** `Qwen/Qwen3.5-397B-A17B` (Hugging Face), `qwen-3.5-397b` (OpenCode Zen). Free tier on HuggingChat.
- **Context window:** 128,000 tokens; max output not explicitly stated.
- **Modalities:** Text, image, video in; text out; reasoning no; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-20):** Free on HuggingChat; self-host near-zero marginal; inference providers ~$0.50-1.50/M in, $1.00-3.00/M out. Blended ≈ $1.00/M.
- **Architecture:** Open-weight dense (397B params); non-reasoning variant available.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.0: **52.5%** (Qwen3.6-Plus table)
- BrowseComp: **69%** (Qwen3.5-397B-A17B model card)
- OSWorld-Verified: **62.2%** (Qwen3.5-397B-A17B model card)
- Claw-Eval: **56.8%** (Claw-Eval)
- QwenClawBench: **51.8%** (Qwen3.6-Plus table)
- Tau3-bench: **68.4%** (Qwen3.6-Plus table)
- VITA-Bench: **43.7%** (Qwen3.6-Plus table)
- DeepPlanning: **37.6%** (Qwen3.6-Plus table)
- Toolathlon: **36.3%** (Qwen3.6-Plus table)
- MCP Atlas: **46.1%** (Qwen3.6-Plus table)
- MCP-Tasks: **74.2%** (Qwen3.6-Plus table)
- WideResearch: **74.0%** (Qwen3.6-Plus table)
- Tau2-bench: **83.9%** (Artificial Analysis)
- Gert Labs: **46.76%** (Gert Labs)
- ResearchClawBench: **14.2%** (ResearchClawBench)

Reasoning / knowledge:

- LongBench v2: **63.2%** (Qwen3.6-Plus table)
- AI-Needle: **68.7%** (Qwen3.6-Plus table)
- AA LCR: **64.3%** (Artificial Analysis)
- CritPt: **0.9%** (Artificial Analysis)
- GPQA: **88.4%** (Qwen3.6-Plus table) / **86.1%** (AA)
- SuperGPQA: **70.4%** (Qwen3.6-Plus table)
- MMLU-Pro: **87.8%** (Qwen3.6-Plus table) / **87.8%** (AA)
- MMLU-Redux: **94.9%** (Qwen3.6-Plus table)
- C-Eval: **93%** (Qwen3.6-Plus table)
- HLE: **28.7%** (Qwen3.6-Plus table)
- AA Intelligence Index: **21.4%** (AA)
- AA GPQA Diamond: **86.1%** (AA)
- AA HLE: **19.8%** (AA)
- AA Omniscience Index: **-37.9%** (AA)
- AA Omniscience Accuracy: **24.5%** (AA)
- AA Omniscience Hallucination Rate: **82.7%** (AA)
- IFEval: **92.6%** (Qwen3.6-Plus table)
- IFBench: **76.5%** (Qwen3.5-397B-A17B model card) / **51.6%** (AA)
- AIME26: **93.3%** (Qwen3.6-Plus table)
- HMMT Feb 2025: **94.8%** (Qwen3.6-Plus table)
- HMMT Nov 2025: **92.7%** (Qwen3.6-Plus table)
- HMMT Feb 2026: **87.9%** (Qwen3.6-Plus table)

Coding:

- SWE-bench Verified: **76.2%** (Qwen3.6-Plus table)
- LiveCodeBench v6: **83.6%** (Qwen3.6-Plus table)
- SWE-bench Pro: **50.9%** (Qwen3.6-Plus table)
- SWE Multilingual: **69.3%** (Qwen3.5-397B-A17B model card)
- NL2Repo: **32.2%** (Qwen3.6-27B model card)
- Terminal-Bench 2.0: **52.5%** (Qwen3.6-Plus table)

Multimodal:

- MMMU: **85.0%** (Qwen3.5-397B-A17B model card) / **52.7%** (AA)
- MMMU-Pro: **79%** (Qwen3.6-Plus table) / **52.7%** (AA)
- RealWorldQA: **83.9%** (Qwen3.5-397B-A17B model card)
- OmniDocBench 1.5: **90.8%** (Qwen3.5-397B-A17B model card)
- Video-MME (w/ sub): **87.5%** (Qwen3.5-397B-A17B model card)
- Video-MME (w/o sub): **83.7%** (Qwen3.5-397B-A17B model card)
- MathVision: **88.6%** (Qwen3.6-Plus table)
- We-Math: **87.9%** (Qwen3.5-397B-A17B model card)
- DynaMath: **86.3%** (Qwen3.5-397B-A17B model card)
- SimpleVQA: **67.1%** (Qwen3.5-397B-A17B model card)
- CharXiv: **80.8%** (Qwen3.6-Plus table)
- MMLongBench-Doc: **61.5%** (Qwen3.5-397B-A17B model card)
- CC-OCR: **82.0%** (Qwen3.5-397B-A17B model card)
- AI2D_TEST: **93.9%** (Qwen3.5-397B-A17B model card)
- CountBench: **97.2%** (Qwen3.5-397B-A17B model card)
- RefCOCO (avg): **92.3%** (Qwen3.5-397B-A17B model card)
- ODINW13: **47.0%** (Qwen3.5-397B-A17B model card)
- ERQA: **67.5%** (Qwen3.5-397B-A17B model card)
- VideoMMMU: **84.7%** (Qwen3.6-Plus table)
- MLVU (M-Avg): **86.7%** (Qwen3.5-397B-A17B model card)
- ScreenSpot Pro: **65.6%** (Qwen3.6-Plus table)
- V*: **95.8%** (Qwen3.6-Plus table)

Long context:

- LongBench v2: **63.2%** (Qwen3.6-Plus table)
- AI-Needle: **68.7%** (Qwen3.6-Plus table)
- AA LCR: **64.3%** (Artificial Analysis)
- CritPt: **0.9%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 68/100.** Tau2 83.9% (exceeds 80%+ frontier), WideResearch 74.0%, MCP-Tasks 74.2%, OSWorld 62.2%, BrowseComp 69%, MCP Atlas 46.1%. Capped by TB 2.0 52.5% (vs TB 2.1 frontier), Toolathlon 36.3%, ResearchClawBench 14.2%, AA Agentic Index not listed.
- **Reasoning: 65/100.** GPQA 88.4%, MMLU-Pro 87.8%, MMLU-Redux 94.9%, C-Eval 93%, IFEval 92.6%, LongBench v2 63.2%, AI-Needle 68.7%. Capped by HLE 28.7% (<40%+), AA Intelligence Index 21.4% (<60), CritPt 0.9%, AA Omniscience Index -37.9%, AA Omniscience Hallucination 82.7%.
- **Context window: 60/100.** 128K native context; AA LCR 64.3%. Methodology: 128K = 55-65.
- **Multimodal: 92/100.** Exceptional video/document: Video-MME 87.5%, OmniDocBench 90.8%, MathVision 88.6%, MLVU 86.7%, VideoMMMU 84.7%, V* 95.8%. Best-in-class for video understanding.
- **Coding: 78/100.** SWE-bench Verified 76.2% (near 80%+ frontier), LiveCodeBench v6 83.6% (exceeds 80%+), SWE Multilingual 69.3%, TB 2.0 52.5%. Capped by SWE-bench Pro 50.9%, NL2Repo 32.2%, AA Coding Index not listed.
- **Cost efficiency: 95/100.** Free on HuggingChat; self-host near-zero marginal. Methodology: free/open-weight ≈ 95-100.
- **Overall Score: 72.6/100.** Half-up mean of (68 + 65 + 60 + 92 + 78) / 5 = 72.6 → 73. Using six incl. cost: (68+65+60+92+78+95)/6 = 458/6 = 76.3 → 76. Model-queue says 83; discrepancy due to 128K context limit vs 1M+ frontier and AA Intelligence Index below frontier.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across official pages (Qwen3.5-397B-A17B Hugging Face model card, Qwen blog), independent benchmark aggregators (BenchLM, Artificial Analysis, Vals AI, Claw-Eval, Gert Labs, ResearchClawBench); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.md`, using the same headings.