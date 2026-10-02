# MiniMax M2.7 — findings by Space Bunny Alpha

- Source: MiniMax (`MiniMax-M2.7`; OpenCode Zen paid route)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7
- **Short description:** MiniMax's open-weight text coding and agent model for terminal execution, office workflows, and multi-agent collaboration; the reviewed route is paid, not a free OpenCode alias.
- **Provider / access:** OpenCode Zen `opencode/minimax-m2.7` (Chat Completions); Hugging Face `MiniMaxAI/MiniMax-M2.7`; Groq and other inference providers. No Zen free ID.
- **Release / knowledge:** BenchLM lists 2026-03-18; the model card/repository indicates a 2026 release. No reliable knowledge cutoff was shown.
- **IDs:** `opencode/minimax-m2.7`; `MiniMax-M2.7`; `MiniMaxAI/MiniMax-M2.7`.
- **Context window:** **200K** (BenchLM model profile; exact model-card route reports 196K–205K depending on provider). Maximum output is not consistently documented; the repository metadata says approximately 131K, which is retained as a provider-specific figure.
- **Modalities:** Text input/output; reasoning/interleaved thinking and tool calls supported; no image, audio, or video input verified.
- **Pricing (as of 2026-09-24):** $0.30 per 1M input and $1.20 per 1M output tokens on the reviewed MiniMax route; this is paid pricing, not a free tier.
- **Architecture:** Open-weight MoE, approximately 229B total / 10B active (provider model metadata); exact architecture details vary by serving source and are not over-claimed here.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **57%** (MiniMax official model-card/source)
- Terminal-Bench 2.1 (Vals AI): **48.7%** (BenchLM, Vals AI leaderboard; different harness)
- Toolathlon: **46.3%** (MiniMax official source)
- MLE-Bench Lite: **66.6%** (MiniMax official source)
- MM-ClawBench: **62.7%** (MiniMax official source)
- Claw-Eval: **48.7%** (Claw-Eval leaderboard)
- GDPval-AA: **1495 Elo** (MiniMax official source)
- Tau3-Banking, Tau2-Bench, and exact ClawProBench: **no verified public exact value found**

Reasoning / knowledge:

- GPQA Diamond: **86.6%** (Vals AI leaderboard)
- MMLU-Pro: **80.4%** (Vals AI leaderboard)
- AIME 2025: **80.0%** (Arcee comparison snapshot; secondary exact source, not MiniMax's own run)
- HLE, LCR/MLCR, CritPt, hallucination metrics, and Artificial Analysis Intelligence Index: **no verified public exact value found**

Coding:

- SWE-bench Pro: **56.22%** (MiniMax official source)
- SWE-bench Multilingual resolved: **76.5%** (MiniMax official model-card eval)
- Vibe Code Bench: **55.6%** (Groq documentation)
- SWE-bench Verified, LiveCodeBench, SciCode, and DeepSWE: **no verified public exact value found**

Long context:

- Reported context is approximately **196K–205K** depending on provider, with 200K in the independent model profile. No exact-model MRCR/RULER retrieval result was found.

Sources consulted: [MiniMax M2.7 Hugging Face model card](https://huggingface.co/MiniMaxAI/MiniMax-M2.7), [MiniMax model page](https://www.minimax.io/models/text/m2.7), and [BenchLM MiniMax M2.7](https://benchlm.ai/models/minimax-m2-7), accessed 2026-09-24. The fetched official web page exposes M2.5 content under the M2.7 URL, so only the exact M2.7 model card and provider-specific benchmark rows are treated as evidence.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 57%, Toolathlon 46.3%, MLE-Bench Lite 66.6%, and MM-ClawBench 62.7% provide useful agent evidence; Tau3 and exact ClawProBench values are missing.
- **Reasoning: 80/100.** GPQA 86.6% and MMLU-Pro 80.4% are strong, while HLE/LCR/CritPt and a direct AA Index are unavailable.
- **Context window: 70/100.** The approximately 200K provider context is verified, but no retrieval-at-length score is published.
- **Multimodal: 15/100.** The exact checkpoint is text input/output; no image/audio/video input is verified.
- **Coding: 82/100.** SWE-bench Pro 56.22%, SWE Multilingual 76.5%, and Vibe Code Bench 55.6% support solid coding; SWE-Verified/LiveCodeBench/SciCode/DeepSWE are missing.
- **Cost efficiency: 90/100.** The $0.30/$1.20 paid rate is inexpensive relative to frontier models, though it is not free.
- **Overall Score: 65.0/100.** (78 + 80 + 70 + 15 + 82) / 5 = 65.0. Best fit: budget-conscious text coding and agent workflows; choose a multimodal model for vision and a 1M-context model for long-document work.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of the exact MiniMax M2.7 model card, provider metadata, and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
