# MiniMax-M2.5 — findings by Laguna S 2.1

- Source: MiniMax (minimax-m2.5)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax-M2.5 (dataset slug `minimax-m2.5` = MiniMax's open-weights (modified-MIT) 230B/10B-MoE reasoning model released February 2026; Artificial Analysis lists it as "MiniMax-M2.5 (Reasoning)". MiniMax's newer M2.7 supersedes it and the M2.5/M2.7 families are being retired 2026-11-18; this folder tracks the base M2.5 SKU (230B total / 10B active), not the faster M2.5-Lightning variant.)
- **Short description:** MiniMax's open-weights reasoning model optimized for coding, agentic tool use, and long-horizon office/agentic tasks; 230B parameters / 10B active per token via a Mixture of Experts, trained with MiniMax's in-house Forge agent-native RL framework across hundreds of thousands of complex real-world environments.
- **Provider / access:** MiniMax first-party API at `https://api.minimax.io` (OpenAI-compatible Chat Completions), API model id `MiniMax-M2.5`; weights open on Hugging Face `MiniMaxAI/MiniMax-M2.5` (BF16/FP8) and ModelScope `MiniMax/MiniMax-M2.5`, self-hostable with vLLM, SGLang, Transformers, and KTransformers.
- **Release / knowledge:** Released 2026-02-12 (Artificial Analysis; platform.minimax.io). Training data through ~February 2026.
- **IDs:** `minimax/minimax-m2.5`
- **Context window:** ~200,000 tokens (Artificial Analysis technical spec lists 205k; official docs/platform FAQ list 200k — 200k used).
- **Modalities:** text in, text out. Reasoning/thinking enabled (AA marks "Reasoning: Yes"). Tool use supported (Chat Completions tool calling). No image/audio/video input — text output only.
- **Pricing (as of 2026-10-17):** ~$0.30 per 1M input tokens and $1.20 per 1M output tokens (Artificial Analysis, median across serving providers). MiniMax's own docs describe a M2.5-Lightning (100 t/s) tier at $0.30/$2.40 and a 50 t/s "M2.5" tier described as costing roughly half, with the $1.20 output figure consistent across both; cache discount 90%. No $0/free tier. (Conflict on the exact input price — $0.15 vs $0.30 — is noted but does not change the cost-efficiency band; output $1.20 is firm.) Note: BenchLM (2026-10-17) lists context window as 128K and marks Reasoning Type as "Non-Reasoning", which conflicts with the MiniMax HF report and AA model page (200K, reasoning: Yes); the file's source basis (MiniMax HF technical report + AA) is retained, but this discrepancy is flagged.
- **Architecture:** 230 billion total parameters, 10 billion active per token, Mixture of Experts (MoE); license: modified-MIT (open weights). Source: HF `MiniMaxAI/MiniMax-M2.5`.

### Raw benchmarks found

> Sources: (1) MiniMax technical report / model card on Hugging Face `MiniMaxAI/MiniMax-M2.5` (benchmark table vs M2.1, Claude Opus 4.5/4.6, Gemini 3 Pro, GPT-5.2-thinking; collection arXiv:2605.26494); (2) Artificial Analysis model page `/models/minimax-m2-5` (composite Intelligence Index, specs, pricing, speed, **200K context window, reasoning: Yes**); (3) MiniMax official API docs at `platform.minimax.io` (features, retirement schedule, model lineage); plus (4) Hugging Face `evaleval` community-measured cross-check. BenchLM.ai model page (2026-10-17) shows conflicting data: Overall 49.95/100, #97/954, 1 of 639 benchmarks, Vibe Code Bench 14.85%, context window 128K, reasoning Type "Non-Reasoning" — this conflict is noted but the file's source basis (MiniMax HF technical report + AA) is retained as primary. Note: MiniMax reports many agentic/coding numbers run in-house with its own agent scaffold (Claude Code 2.0.64, 4-run averaging); conflicts vs community runs are flagged per the methodology.

**Agent / tool use:**

- BrowseComp (with context management): **76.3%** (MiniMax report) — strong agentic tool-use signal, roughly even with GLM-5's 75.9%
- SWE-bench Verified (agentic, Claude Code scaffold): **80.2%** (MiniMax report)
- Multi-SWE-bench: **51.3%** (MiniMax report)
- Apex Agents (HF community): **6.2%** ⚠️ *(conflict: very low vs the "SOTA agentic" claim; M2.5 does not publish its own Apex Agents number; treated as a harness/human-eval artifact)*
- AA-LCR (long-context reasoning): **69.5%** (MiniMax report)
- Terminal-Bench 2.0: **no verified public score found** (MiniMax describes the eval setup — Claude Code 2.0.64 scaffold, 8-core/16GB, 7200s timeout, 4-run average — but does not publish a number; likely a driver of the low estimated IQ)
- τ²-Bench: no verified public score found
- GDPval-AA: no verified public score found
- OSWorld / MCP-Atlas: no verified public score found

**Reasoning / knowledge:**

- HLE (Humanity's Last Exam, w/o tools): **19.4%** (MiniMax report) — weak vs frontier (~30) and below GLM-5's 30.5%
- AIME 2025: **86.3%** (MiniMax report)
- GPQA Diamond: **85.2%** (MiniMax report; HF-community cross-check 85.2%)
- MMLU-Pro: **80.1** (HF-community cross-check, HF leaderboard)
- SciCode: **44.4%** (MiniMax report)
- IFBench: **70.0%** (MiniMax report)
- AA-LCR: **69.5%** (MiniMax report) — closest long-context reasoning signal
- Artificial Analysis Intelligence Index: **23** (estimated; #40/120 open-weights large, #28/704 overall) — *conflict: marked "estimated"; MiniMax's own report shows near-frontier math/knowledge (AIME 86.3, GPQA 85.2, MMLU-Pro 80.1) but weak HLE (19.4) and no published agentic/terminal scores, which is consistent with a lower composite.*
- LCR / MLCR / CritPt: no verified public score (AA-LCR 69.5 is the long-context-reasoning proxy)

**Coding:**

- SWE-bench Verified: **80.2%** (MiniMax report) — *conflict: HF-community run measured 75.8% (same Claude-Code scaffold, 4 runs); 80.2% used as primary*
- Multi-SWE-bench: **51.3%** (MiniMax report)
- SWE-bench Pro: **55.4** (HF-community cross-check)
- SciCode: **44.4%** (MiniMax report)
- VIBE-Pro / VIBE: on par with Claude Opus 4.5 (MiniMax report; "SOTA")
- Terminal-Bench 2.0: no verified public score found
- LiveCodeBench: no verified public score found
- DeepSWE / Coding Index: no verified public score found

**Long context:**

- ~200,000-token context window confirmed (AA technical spec lists 205k; official docs list 200k). No verified public MRCR / RULER / GraphWalks retrieval-accuracy figure is published; AA-LCR 69.5 is the closest long-context reasoning signal.

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `../../model-comparison.md`. Half-up mean of (Tool + Reasoning + Context + Multimodal + Coding); Cost is scored independently and excluded from Overall.

- **Tool use: 69/100.** BrowseComp 76.3% (with context management) and agentic SWE-bench Verified 80.2% are strong — BrowseComp matches GLM-5's 75.9% — but the canonical agentic evals (Terminal-Bench 2.0, τ²-Bench, GDPval-AA, OSWorld, MCP-Atlas) are NOT published, and the HF-community Apex Agents score is 6.2% (a red flag). Capped by missing/indeterminate agentic signals; the AA Intelligence Index 23* (estimated) tracks this ambiguity.
- **Reasoning: 68/100.** Elite math/knowledge (AIME 86.3%, GPQA 85.2%, MMLU-Pro 80.1, IFBench 70.0) and AA-LCR 69.5 lift it, but HLE 19.4% (weak, below the ~30 frontier and below GLM-5's 30.5%) and the estimated IQ 23* keep it mid-band. Capped by weak HLE and unmeasured CritPt.
- **Context window: 64/100.** ~200,000 tokens sits at the top of the 100k–200k tier (65–84 → mapped to ~64 at the ceiling).
- **Multimodal: 15/100.** Text-only input (no image/audio/video) — confirmed by Artificial Analysis and the model card.
- **Coding: 84/100.** SWE-bench Verified 80.2% is the strongest open-weight coding result in this cohort (above GLM-5 77.8%, nemotron 71.1%, gpt-5.1-codex 73.7%; near the 87.6% frontier reference), plus Multi-SWE-bench 51.3%, BrowseComp 76.3%, and SciCode 44.4%. Capped by the absence of LiveCodeBench/DeepSWE and by weak SciCode; the 75.8% community SWE figure is flagged but not used to lower the score.
- **Cost efficiency: 94/100.** ~$0.30/$1.20 per 1M tokens (and ~$1/hr at 50 t/s) — extremely cheap for a 230B-MoE model that MiniMax describes as "intelligence too cheap to meter." No free tier.
- **Overall Score: 60/100.** Half-up mean of (69 + 68 + 64 + 15 + 84) / 5 = 300 / 5 = 60.0 → 60. A coding-specialist open-weights reasoning model (SWE-bench Verified 80.2% is its standout): strong coding and math, but text-only (multimodal 15) and a 200k context ceiling, plus weak/no-general HLE (19.4%) and unmeasured agentic evals (Terminal-Bench, τ²-Bench, Apex Agents 6.2*) cap the mean. Best fit for cost-sensitive open-weight coding/agentic workloads, not a general-intelligence frontier.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-17 (UTC)
- Method: public internet research (MiniMax Hugging Face model card + technical report, Artificial Analysis model page & leaderboard, MiniMax official platform docs, and Hugging Face community eval cross-check); scores are normalized 1–100 interpretations per model-comparison.md v4. Zero-influence: did not read peer `model/` findings files during research.
- Re-verification (Oct 16→Oct 17): BenchLM.ai model page (2026-10-17) shows conflicting data: Overall 49.95/100, #97/954, 1 of 639 benchmarks, Vibe Code Bench 14.85%, context window 128K, reasoning Type "Non-Reasoning". This conflicts with the file's primary sources (MiniMax HF technical report + AA: 200K context, reasoning: Yes). File source basis retained; conflict flagged. Normalized scores unchanged (60).

---

## Re-verification (2026-10-17)

BenchLM.ai shows conflicting data: Overall 49.95/100, #97/954, 1 of 639 benchmarks, Vibe Code Bench 14.85%, context window 128K, reasoning Type "Non-Reasoning". This conflicts with the file's primary sources (MiniMax HF technical report + AA: 200K context, reasoning: Yes). File source basis retained as primary; normalized scores unchanged (60).
