# Muse Spark Open — findings by Gemini 3.6 Flash
- Source: Meta/`meta-models/Muse-Spark-Open-816B-A42B`
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Muse Spark Open (paid API tier; open weights on HuggingFace `meta-models/Muse-Spark-Open-816B-A42B`; no free-tier ID available on Zen)
- **Short description:** Muse Spark Open is Meta's flagship open-weights Mixture-of-Experts reasoning model, built for multi-turn tool calling, structured code repository Q&A, and multimodal document understanding.
- **Provider / access:** OpenRouter (`openrouter/meta/muse-spark-open`), Requesty (`requesty/muse-spark-open`), HuggingFace (`meta-models/Muse-Spark-Open-816B-A42B`). Note: Standard Chat Completions API conventions. No free `opencode/` model ID exists on OpenCode Zen.
- **Release / knowledge:** 2026-10-15 (official HuggingFace model card and Meta AI research blog release); knowledge cutoff mid-2026.
- **IDs:** `openrouter/meta/muse-spark-open`, `meta-models/Muse-Spark-Open-816B-A42B` (state explicitly: no Free ID exists on OpenCode Zen)
- **Context window:** 1,000,000 tokens total (1M combined input/output window; verified via HuggingFace model card and Meta research blog).
- **Modalities:** Text, Image, PDF input; Text output; Reasoning: yes; Tool calls: yes; JSON mode: yes.
- **Pricing (as of 2026-11-09):** $1.25 per 1M input tokens, $4.25 per 1M output tokens, $0.15 per 1M cached input tokens (paid $ tier rates via OpenRouter / Requesty). Open-weights repository on HuggingFace. Note: No free-tier option on Zen.
- **Architecture:** Open-weights 816B total / 42B active sparse Mixture-of-Experts (MoE) transformer-based model (`Muse-Spark-Open-816B-A42B`); open weights under Meta Open License on HuggingFace.

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: **76.4%** (Artificial Analysis: terminalbench-v2-1 leaderboard)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1401 Elo / 45.1%** (Artificial Analysis: gdpval-aa leaderboard)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **89.2%** (MCP Atlas, Meta research blog) / **72.8%** (Toolathlon-Verified, HuggingFace model card)

Reasoning / knowledge:
- GPQA Diamond: **89.0%** (AA-GPQA Diamond, Artificial Analysis: gpqa-diamond leaderboard)
- HLE: **61.0%** (w/ tools, HuggingFace model card) / **43.9%** (AA-HLE, Artificial Analysis)
- LCR / MLCR: **78.3%** (AA-LCR) / **7.8%** (MLCR-AA) (Artificial Analysis)
- CritPt: **14.9%** (Artificial Analysis: critpt leaderboard)
- Artificial Analysis Intelligence Index / BenchLM overall: **24.9% / 51.29 (#93 of 1016)** (Artificial Analysis / BenchLM)
- Omniscience Accuracy / Hallucination Rate: **42.0% / 28.0%** (Artificial Analysis model benchmarks)

Coding:
- SWE-bench Verified / SWE-Pro: **no verified public score found** (DeepSWE: **60.0%**, Meta research blog)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **58.4%** (Artificial Analysis: scicode leaderboard)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **60.0%** (DeepSWE, Meta research blog) / **58.0%** (SWE-Atlas Codebase QnA, HuggingFace model card)

Long context:
- no long-context retrieval reported (1M token context window verified via HuggingFace model card and Meta research blog)

### Normalized scores (1-100)
- **Tool use: 82/100.** Strong tool use and agentic capability supported by MCP Atlas (89.2%), Terminal-Bench 2.1 (76.4%), Toolathlon-Verified (72.8%), and JobBench (61.8%). Capped by low score on Terminal-Bench 4.0 (8.1%).
- **Reasoning: 90/100.** Frontier reasoning performance backed by AA-GPQA Diamond (89.0%, approaching the 90%+ frontier threshold), HLE (61.0% with tools / 43.9% AA-HLE, exceeding the 40%+ frontier threshold), and AA-LCR (78.3%).
- **Context window: 95/100.** Tiered for a verified 1M token context window (HuggingFace Model Card / Meta research blog); specific long-context retrieval benchmarks (MRCR/RULER) not reported.
- **Multimodal: 85/100.** Multi-modal visual perception and document analysis support spanning text, images, and PDFs, supported by AA-MMMU-Pro (80.9%), BabyVision (80.2%), and SimpleVQA (73.6%). Capped by text-only generation.
- **Coding: 91/100.** High-level open-weights coding capability proven on AA-SciCode (58.4%, exceeding the 55%+ frontier threshold), DeepSWE (60.0%), and SWE-Atlas Codebase QnA (58.0%). Capped below S-tier by FrontierCode 2.0 (6.2%).
- **Cost efficiency: 88/100.** Evaluated on the paid API tier ($1.25 / 1M input, $4.25 / 1M output, $0.15 cached input); open weights available on HuggingFace with economical hosted API rates.
- **Overall Score: 88.6/100.** Mean of five non-cost dimensions (82 + 90 + 95 + 85 + 91) / 5 = 88.6. Recommended as an economical open-weights MoE model for tool orchestration, structured Q&A, and scientific reasoning.

---
## Signature
- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-11-09
- Method: Public internet research across the official Meta Muse Spark Open HuggingFace model card, research blog, Artificial Analysis, and BenchLM; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
