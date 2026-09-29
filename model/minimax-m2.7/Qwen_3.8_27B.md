# MiniMax M2.7 — findings by Qwen 3.8 27B

- Source: MiniMax (opencode/minimax-m2.7)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7
- **Short description:** MiniMax's 229B-parameter open-weights MoE LLM tuned for agentic coding, complex agent harnesses, multi-agent (Agent Teams) collaboration, and office productivity; vendor describes it as their first model to "deeply participate in its own evolution."
- **Provider / access:** OpenCode Zen `opencode/minimax-m2.7` via `https://opencode.ai/zen/v1/chat/completions` (Chat Completions, openai-compatible SDK; verified present in the live `https://opencode.ai/zen/v1/models` list); MiniMax platform `MiniMax-M2.7` plus faster `M2.7-highspeed` (identical results); Groq `minimaxai/minimax-m2.7` (Enterprise only, ~260 tps); NVIDIA NIM endpoint; Hugging Face inference.
- **Release / knowledge:** release date not stated on fetched pages; the HF "MiniMax-M2" collection points to arXiv 2605.26494 (May 2026) and the model was live on HF/Groq/Zen as of 2026-09-29; knowledge cutoff not stated.
- **IDs:** `opencode/minimax-m2.7` (Zen — paid only, no Free ID found); `minimaxai/minimax-m2.7` (Groq); `MiniMax-M2.7` (MiniMax API v2 chatcompletion_v2).
- **Context window:** 196,608 total with 131,072 max output (Groq docs, fetched this session); BenchLM lists 200K.
- **Modalities:** text in / text out only; tool use, JSON object mode, and interleaved reasoning supported (Groq docs; vendor recommends temperature=1.0, top_p=0.95, top_k=40).
- **Pricing (as of 2026-09-29):** Zen paid $0.30 input / $1.20 output / $0.06 cached read per 1M; no Free ID on Zen (scored on paid pricing).
- **Architecture:** 229B total parameters, ~10B active per token, MoE with 256 experts, 62-layer decoder-only transformer, grouped-query attention (48 query / 8 key-value heads), pre-trained on 29.2T tokens (Groq docs); open weights, custom license ("other" on Hugging Face), BF16/F32/F8_E4M3.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **57%** (BenchLM `minimax-m2-7`; vendor/Groq cite TB2 57.0%)
- Terminal-Bench 2.1: **48.7%** (Vals harness, BenchLM)
- Tau3-Banking / Tau2-Bench: τ²-bench **84.8%** (BenchLM); Tau3-Banking: no verified public score found
- GDPval-AA: **1087** Elo / 24.9% normalized (BenchLM); vendor claims ELO **1495** "highest among open-source models" (minimax.io + HF card) — cross-harness discrepancy noted
- Claw-Eval / ClawProBench: Claw-Eval **48.7%**; MM-ClawBench **62.7%** (BenchLM; MM Claw 62.7% also on Groq docs and vendor)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: Toolathon **46.3%** (BenchLM + Groq + vendor); APEX-Agents-AA **10.6%**; Gert Labs **40.40%**; AA Agentic Index **16.8%** (all BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **87.0%** (BenchLM; AA-GPQA 87.4%, Vals 86.6%)
- HLE: **29.6%** (AA-HLE, BenchLM)
- LCR / MLCR: AA-LCR **78.3%** (BenchLM)
- CritPt: **0.6%** (BenchLM)
- Artificial Analysis Intelligence Index / BenchLM overall: **22.8** / **48.04 / #92 of 514** (BenchLM)
- Omniscience Accuracy / Hallucination Rate: **26.8% / 35.6%** (AA via BenchLM); also MMLU-Pro **80.8%**, AIME25 **80.0%**, AA-IFBench **75.7%**

Coding:

- SWE-bench Verified / SWE-Pro: **75.4%** (Arcee, BenchLM; Vals Verified 73.8%) / **56.2%** (BenchLM; vendor/HF state 56.22%, "matching GPT-5.3-Codex")
- LiveCodeBench: **79.9%** (Vals, BenchLM)
- SciCode / AA-SciCode: **50.1%** (BenchLM)
- Vibe Code Bench: **27.04%** (BenchLM); VIBE-Pro **55.6%** (vendor/Groq/BenchLM)
- DeepSWE / Coding Index / other: AA Coding Index **52.6%**; SWE-Rebench **51.9%**; SWE Multilingual **76.5%**; Multi-SWE Bench **52.7%**; NL2Repo **39.8%**; React Native Evals **71.4%**; MLE-Bench Lite **66.6%** medal rate; WildClawBench overall **33.8** (HF eval results); Design Arena Website **1250**

Long context:

- no MRCR/RULER long-context retrieval benchmark found for M2.7; AA-LCR **78.3%** covers long-document reasoning; 196,608-token window per Groq

### Normalized scores (1–100)

- **Tool use: 65/100.** TB2.0 57% / TB2.1 48.7% and GDPval 1087 sit in the mid bands (45–60% and 900–1200 → 50–70), lifted by τ² 84.8%, MM-Claw 62.7%, and Claw-Eval 48.7%, but capped by APEX-Agents 10.6% and AA Agentic Index 16.8%.
- **Reasoning: 66/100.** GPQA 87.0–87.4% is near-frontier and AA-LCR 78.3% is solid, while AA Index 22.8 and HLE 29.6% keep it in the mid 55–65 band, scored just above the band top.
- **Context window: 70/100.** 196,608 tokens is effectively the 200K floor of the 200K–500K tier, where 200K = 70.
- **Multimodal: 15/100.** Text in / text out only on every host checked.
- **Coding: 80/100.** SWE-bench Verified 75.4%, SWE-Pro 56.2%, AA-SciCode 50.1%, VIBE-Pro 55.6%, and LiveCodeBench 79.9% make it a strong upper-mid coder, short of the frontier band (no DeepSWE 74+, TB 85+, or Coding Index 70+).
- **Cost efficiency: 94/100.** $0.30/$1.20 per 1M with $0.06 cache reads is cheaper than the ~$0.60/$2.20 ≈92 anchor, between the ~$0.10/$0.20 (97–99) and ~$0.60/$2.20 (92) references; paid-only tier, no Free ID.
- **Overall Score: 59.2/100.** Mean of the five quality dims (65+66+70+15+80)/5 = 59.2 — the best-value paid open-weights agentic coding pick on Zen.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen-3.8-27b)** — 2026-09-29
- Method: public internet research (minimax.io/models/text/m27, huggingface.co/MiniMaxAI/MiniMax-M2.7, console.groq.com model docs, benchlm.ai/models/minimax-m2-7, opencode.ai/docs/zen + /zen/v1/models; retrieved 2026-09-29); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
