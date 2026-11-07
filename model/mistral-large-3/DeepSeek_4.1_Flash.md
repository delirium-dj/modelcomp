# Mistral Large 3 — findings by DeepSeek 4.1 Flash

- Source: Mistral AI/Mistral Large 3
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 3
- **Short description:** Mistral AI's December 2025 open-weight flagship — a sparse MoE (41B active / 675B total) general-purpose multimodal model, strong on chat and multilingual work, mid-tier on agentic/coding, now deprecated in favour of Mistral Large 4.
- **Provider / access:** Mistral API `mistral-large-2512`; open weights on Hugging Face (`mistralai/Mistral-Large-3-675B-Instruct-2512`, plus the `-Base-2512` checkpoint); Apache 2.0, self-hostable. Earlier project notes list an `opencode/mistral-large-3` Zen route, but it is not in the live Zen catalog checked 2026-11-06 (only `mistral-large-4` is). Chat Completions-style API.
- **Release / knowledge:** 2025-12-02 (Mistral 3 family launch); deprecated with deprecation date 10/31/2026, replacement Mistral Large 4. Knowledge cutoff not stated.
- **IDs:** `mistral-large-2512` (Mistral API, docs card v25.12) / `mistralai/Mistral-Large-3-675B-Instruct-2512` and `mistralai/Mistral-Large-3-675B-Base-2512` (Hugging Face).
- **Context window:** 256k tokens (Mistral docs model card; The AI Rankings).
- **Modalities:** text + image in, text out; strong multilingual (best-in-class non-English/Chinese per vendor); no reasoning mode (not a reasoning model); tool calls.
- **Pricing (as of 2026-11-06):** $0.50/M in, $1.50/M out (Mistral API; The AI Rankings / BenchmarkList metadata). No free tier.
- **Architecture:** sparse Mixture-of-Experts — 41B active / 675B total parameters, trained from scratch on 3000 NVIDIA H200s; Apache 2.0 license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **12.0%** (rank 151/196); Terminal-Bench 2.0: **8.99%**; Terminal-Bench Hard: **15.9%**
- Tau3-Banking: **5.8%** (rank 138/183); Tau2-Bench Telecom: **24.6%** (rank 230/337)
- GDPval-AA: **644 Elo** (rank 210/358)
- PinchBench: **72.16%** (rank 60/76); AA-Briefcase: **229 Elo** (rank 128/160); AutoBench: **2.62** (rank 30/32)
- Claw-Eval / Toolathon / MCP-Atlas / SWE Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **68.4%** (rank 82/117; second harness row 68%, rank 235/478)
- HLE: **4.2%** (rank 425/491)
- AA-LCR: **36.0%** (rank 250/423)
- Artificial Analysis Intelligence Index: **15.93** (rank 188/324)
- MMLU-Pro: **80.7%**; AIME 2025: **38%** (rank 138/226); MMMU-Pro: **66.2%**
- CritPt: no verified public score found

Coding:

- SWE-bench Verified: **41.4%** (rank 70/72); LiveCodeBench: **55.3%** (rank 95/123)
- SciCode: **36.6** (rank 161/311); Terminal-Bench 2.1: **12.0%**; IOI: **4%** (rank 48/58)
- SAGE software-engineering knowledge: **24.6%** (rank 62/63); DeepSWE / Vibe Code Bench: no verified public score found

Long context:

- AA-LCR 36.0% at up to 1M-token evaluation depth (rank 250/423); MRCR/RULER at window length: no separate report found
- Chat quality context: LMArena ~**1418 Elo** at launch, #2 among open-source non-reasoning models per vendor announcement

### Normalized scores (1–100)

- **Tool use: 44/100.** TB2.1 12% and Tau3-Banking 5.8% are far below the methodology's mid band (45–60% / 10–25%), and GDPval 644 is under the 900 floor; only Tau2 Telecom (24.6%) and PinchBench (72.2%) show mid-field agentic behavior.
- **Reasoning: 56/100.** GPQA 68.4% sits mid-band, but AA Intelligence Index 15.93, HLE 4.2%, and AA-LCR 36% place it in the lower half of the mid band (55–65).
- **Context window: 72/100.** 256k maps into the 200K–500K tier (200K = 70), adjusted slightly up for size; measured retrieval (36% LCR) keeps it below tier top.
- **Multimodal: 60/100.** Native image-in/text-out multimodality with strong multilingual coverage; MMMU-Pro 66.2% mid-field; no video/audio scoring found.
- **Coding: 50/100.** SWE-bench Verified 41.4% (near field bottom, rank 70/72) and SciCode 36.6 cap it despite a mid-field LiveCodeBench 55.3%; not a coding-agent model.
- **Cost efficiency: 92/100.** $0.50/$1.50 per 1M is above the $0.10/$0.20 top band but below the ~$0.60/$2.20 ≈ 92 reference (blended cheaper than that anchor).
- **Overall Score: 56/100.** Half-up mean of the five quality dims (44+56+72+60+50)/5 = 56.4 → 56. Best fit: cheap self-hosted generalist chat / multilingual / document work; not for long-horizon agents or hard coding. Superseded by Mistral Large 4.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-06
- Method: public internet research (Mistral launch post and docs model card, BenchmarkList, The AI Rankings, BenchLM, LLM Stats, Hugging Face); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Mistral 3 — Mistral AI](https://mistral.ai/news/mistral-3/)
  - [Mistral Large 3 model card — Mistral Docs](https://docs.mistral.ai/models/model-cards/mistral-large-3-25-12)
  - [Mistral: Mistral Large 3 2512 — BenchmarkList](https://benchmarklist.com/models/mistralai-mistral-large-2512/)
  - [Mistral Large 3: Benchmarks, Pricing & Review — The AI Rankings](https://theairankings.com/mistral/mistral-large-3/)
  - [mistralai/Mistral-Large-3-675B-Instruct-2512 — Hugging Face](https://huggingface.co/mistralai/Mistral-Large-3-675B-Instruct-2512)
  - [Best Mistral Models — BenchLM](https://benchlm.ai/best/mistral-models)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
