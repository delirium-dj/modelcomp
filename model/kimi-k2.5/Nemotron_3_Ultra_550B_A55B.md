# Kimi K2.5 — findings by Nemotron 3 Ultra 550B A55B

- Source: Moonshot AI (`kimi-k2.5`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5 (Open Weight, Non-Reasoning)
- **Short description:** Moonshot AI's open-weight non-reasoning model with strong multimodal (Video-MME 87.4%, OmniDocBench 88.8%), solid coding (SWE-bench Verified 76.8%, LiveCodeBench v6 85.0%), and 256K context. Free on Hugging Face / cheap via inference providers.
- **Provider / access:** Hugging Face (`moonshotai/Kimi-K2.5`), Kimi API, OpenCode Zen (`opencode/kimi-k2.5`), inference providers. OpenAI-compatible API.
- **Release / knowledge:** 2026 release (Kimi blog); knowledge cutoff not explicitly stated.
- **IDs:** `moonshotai/Kimi-K2.5` (Hugging Face), `kimi-k2.5` (OpenCode Zen / Kimi API). Free tier on HuggingChat.
- **Context window:** 256,000 tokens; max output not explicitly stated.
- **Modalities:** Text, image, video in; text out; reasoning no; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-20):** Free on HuggingChat; Kimi API pricing not publicly listed; inference providers ~$0.30–$0.80/M in, $0.60–$1.50/M out. Blended ≈ $0.50/M (open-weight, self-host near-zero marginal).
- **Architecture:** Open-weight non-reasoning; parameter count not explicitly stated.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.0: **50.8%** (Moonshot model card)
- BrowseComp: **60.6%** (Moonshot model card)
- OSWorld-Verified: **63.3%** (Kimi-K2.6 card)
- Claw-Eval: **52.3%** (Claw-Eval)
- QwenClawBench: **54.3%** (Qwen3.6-Plus table)
- Tau3-bench: **65.7%** (Qwen3.6-Plus table)
- DeepSearchQA: **77.1%** (Moonshot model card)
- DeepPlanning: **14.4%** (Qwen3.6-Plus table)
- Toolathlon: **27.8%** (Moonshot model card)
- MCP Atlas: **29.5%** (Moonshot model card)
- MCP-Tasks: **59.1%** (Qwen3.6-Plus table)
- WideResearch: **72.7%** (Moonshot model card)
- Tau2-bench: **95.9%** (Artificial Analysis) — exceeds 85%+ frontier
- BFCL v4: **68.3%** (Qwen3.5-397B-A17B table)
- APEX-Agents-AA: **11.5%** (AA)
- Gert Labs: **45.88%** (Gert Labs)
- ResearchClawBench: **14.0%** (ResearchClawBench)
- JobBench: **8.7%** (JobBench paper)
- GDPval-AA normalized: **17.0%** (AA) / Elo **936** (AA)

Reasoning / knowledge:

- LongBench v2: **61%** (Moonshot model card)
- AA LCR: **78.0%** (AA)
- CritPt: **3.1%** (AA)
- GPQA: **87.6%** / **GPQA-D: 87.6%** (Moonshot model card)
- SuperGPQA: **69.2%** (Qwen3.6-Plus table)
- MMLU-Pro: **87.1%** (Moonshot model card) / (Arcee)
- MMLU-Redux: **94.5%** (Qwen3.5-397B-A17B table)
- C-Eval: **94%** (Qwen3.5-397B-A17B table)
- HLE: **30.1%** (Moonshot model card)
- AA Intelligence Index: **23.5%** (AA)
- AA GPQA Diamond: **87.9%** (AA)
- AA HLE: **30.7%** (AA)
- AA Omniscience Index: **-7.3%** (AA)
- AA Omniscience Accuracy: **35.2%** (AA)
- AA Omniscience Hallucination Rate: **65.7%** (AA)
- AIME 2025: **96.1%** (Moonshot model card)
- AIME26: **95.8%** (Moonshot model card)
- HMMT Feb 2025: **95.4%** / Nov 2025: **91.1%** / Feb 2026: **87.1%** (Moonshot model card)

Coding:

- SWE-bench Verified: **76.8%** (Moonshot model card) / **70.8%** (Arcee)
- LiveCodeBench v6: **85.0%** (Moonshot model card)
- SWE-bench Pro: **50.7%** (Moonshot model card)
- SWE Multilingual: **73%** (Moonshot model card)
- SWE-Rebench: **58.5%** (SWE-Rebench)
- React Native Evals: **77.2%** (RN Evals)
- NL2Repo: **32%** (GLM-5.1 table)
- SciCode: **48.7%** (Moonshot model card)
- TB 2.0: **50.8%** (Moonshot model card)
- AA Coding Index: **46.8%** (AA)

Multimodal:

- MMMU: **84.3%** (Qwen3.5-397B-A17B table)
- MMMU-Pro: **78.5%** (Moonshot) / **75.4%** (AA)
- RealWorldQA: **81.0%** (Qwen3.5-397B-A17B table)
- OmniDocBench 1.5: **88.8%** (Moonshot model card)
- Video-MME: **87.4%** (Kimi blog) / (w/ sub) **87.4%** / (w/o sub) **83.2%** (Qwen3.5-397B-A17B)
- MathVision: **84.2%** (Moonshot model card)
- We-Math: **84.7%** (Qwen3.5-397B-A17B table)
- DynaMath: **84.4%** (Qwen3.5-397B-A17B table)
- SimpleVQA: **71.2%** (Moonshot model card)
- MMLongBench-Doc: **58.5%** (Qwen3.5-397B-A17B table)
- CC-OCR: **79.7%** (Qwen3.5-397B-A17B table)
- AI2D_TEST: **90.8%** (Qwen3.5-397B-A17B table)
- CountBench: **94.1%** (Qwen3.5-397B-A17B table)
- RefCOCO (avg): **87.8%** (Qwen3.5-397B-A17B table)
- MMVU: **80.4%** (Kimi blog)
- VideoMMMU: **86.6%** (Qwen3.6-Plus table)
- MLVU (M-Avg): **85.0%** (Qwen3.5-397B-A17B table)
- CharXiv: **77.5%** (Moonshot model card)
- Design Arena Website: **1249 Elo** (OpenRouter)

Long context:

- LongBench v2: **61%** (Moonshot model card)
- AA LCR: **78.0%** (AA)
- CritPt: **3.1%** (AA)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 65/100.** Tau2 95.9% (exceeds 85%+ frontier), WideResearch 72.7%, DeepSearchQA 77.1%, OSWorld-Verified 63.3%, Tau3 65.7%, MCP-Tasks 59.1%. Capped by TB 2.0 50.8%, Toolathlon 27.8%, MCP Atlas 29.5%, APEX-Agents 11.5%, JobBench 8.7%, GDPval 17.0%, ResearchClawBench 14.0%.
- **Reasoning: 68/100.** GPQA 87.6%, MMLU-Pro 87.1%, AIME 95-96%, HMMT 87-95%, AA LCR 78.0%, LongBench v2 61%. Capped by HLE 30.1% (<40%+), AA Intelligence Index 23.5% (<60), CritPt 3.1%, AA Omniscience Index -7.3%, AA Omniscience Hallucination 65.7%.
- **Context window: 70/100.** 256K native; AA LCR 78.0%, LongBench v2 61%. Methodology: 256K = 65-75.
- **Multimodal: 90/100.** Exceptional video/document: Video-MME 87.4%, VideoMMMU 86.6%, MLVU 85.0%, OmniDocBench 88.8%, MMMU-Pro 78.5%, MathVision 84.2%, CharXiv 77.5%. Full vision+video. No audio.
- **Coding: 75/100.** SWE-bench Verified 76.8% (near 80%+), LiveCodeBench v6 85.0% (exceeds 80%+), React Native 77.2%, SWE Multilingual 73%. Capped by SWE-bench Pro 50.7%, NL2Repo 32%, AA Coding Index 46.8% (<70%+), SciCode 48.7% (<55%+).
- **Cost efficiency: 95/100.** Free on HuggingChat; self-host near-zero marginal; inference providers ~$0.50/M blended. Methodology: free/open-weight ≈ 95-100.
- **Overall Score: 73.6/100.** Half-up mean of (65 + 68 + 70 + 90 + 75) / 5 = 73.6 → 74. Using six incl. cost: (65+68+70+90+75+95)/6 = 463/6 = 77.2 → 77. Model-queue says 81.7; discrepancy reduced. Best-fit: exceptional open-weight multimodal (Video-MME 87.4%, OmniDocBench 88.8%) with strong coding at zero cost; 256K context limits long-horizon.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across official pages (Moonshot Kimi K2.5 model card, Kimi blog), independent benchmark aggregators (BenchLM, Artificial Analysis, Vals AI, OpenRouter, Claw-Eval, Gert Labs, ResearchClawBench, JobBench, SWE-Rebench, Arcee, GLM-5.1, Qwen comparison tables); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Kimi_K2.md`, using the same headings.