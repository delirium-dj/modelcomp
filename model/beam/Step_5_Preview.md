# Beam 1.0 — findings by Step 5 Preview

- Source: Reflection/Beam 1.0 (`reflection/Beam-1.0-501B-A23B`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Beam 1.0 (501B-A23B)
- **Short description:** Reflection's first open-weight model (Oct 2026): a 501B-total/23B-active MoE built for token-efficient reasoning, software engineering and agentic tool use at 1M context; text-only.
- **Provider / access:** Self-host weights (Hugging Face `reflection/Beam-1.0-501B-A23B`, Apache 2.0, BF16/FP8/NVFP4; modified Harmony chat template); 4 API providers per Artificial Analysis (median $0.70/$2.10 per MTok). OpenCode Zen lists a $0 promotional route `opencode/beam-free` (verified 2026-10-19); no paid Zen ID was listed.
- **Release / knowledge:** Released 2026-10-16 (Artificial Analysis; HF card); knowledge cutoff June 30, 2026 (official model card).
- **IDs:** `reflection/Beam-1.0-501B-A23B` (HF BF16; FP8/NVFP4 siblings) · `opencode/beam-free` (Zen, free promo).
- **Context window:** 1,048,576 tokens (official model card); text-only in/out.
- **Modalities:** Text in → text out (official: "Supported Modalities: Text"); reasoning model; tool use / code / conversational; English-focused ("developed predominantly for English").
- **Pricing (as of 2026-10-19):** Provider median $0.70 / 1M input, $2.10 / 1M output (Artificial Analysis; blended $0.43 at 7:2:1, ~$0.57 per Intelligence-Index task, 84% cache discount); free ($0) on the Zen promotional route.
- **Architecture:** Open weights, Apache 2.0; sparse MoE — 501.3B total / 23.4B active, 52 layers (3 dense + 49 MoE), 256 experts, Gated GQA + Sliding Window Attention, 152k vocabulary.

### Raw benchmarks found

> Reflection publishes a full model-card table (BF16, temp=0.7/top_p=0.99); Artificial Analysis and BenchLM measure independently. Where vendor and AA disagree (HLE 36.0% vs AA 34.7%; AutomationBench 39.3% public split vs AA 48.5%), both are kept.

Agent / tool use:

- Terminal-Bench 2.1: **80.1%** (official model card, BF16) — near-frontier agentic terminal coding
- Terminal-Bench 4.0: **3.0%** (Artificial Analysis, via BenchLM) — near-floor on the newest terminal eval
- MCP Atlas: **80.8%** (official)
- Tau3-Banking: **36.1%** (official)
- AutomationBench (public split): **39.3%** (official) / **48.5%** (Artificial Analysis harness)
- BrowseComp: **76.8%**, DeepSearchQA: **80.5%** (official, with context management)
- GDPval-AA v2.1: **Elo 1177** (#125/298; Artificial Analysis) — top of the methodology's mid band
- AA-Briefcase: **Elo 976** (Artificial Analysis)
- GDP.pdf: **11.6%** (Artificial Analysis, via BenchLM)
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.6%** (official) — frontier-level
- HLE: **36.0%** no tools / **51.1%** with tools (official); AA-HLE: **34.7%** (Artificial Analysis, stricter harness)
- AIME 2026: **97.7%** (official)
- SciCode: **49.2%** (official) / AA-SciCode: **48.5%** (Artificial Analysis)
- CritPt: **16.3%** (official)
- AA-LCR: **78.2%** (official); LongBench v2: **67.5%** (official)
- Artificial Analysis Intelligence Index: **30** (AA; BenchLM records 30.3%) — well above its open-weight class median of 19, mid-pack globally
- AA-Omniscience: Index **1.5–10.8**, Accuracy **33.1%**, Hallucination Rate **47.2%** — weak knowledge reliability

Coding:

- SWE-bench Verified: **81.6%** (official; also published to the SWE-bench leaderboard eval-results)
- Terminal-Bench 2.1: **80.1%** (official; see agentic section)
- LiveCodeBench: **88.3%** (official)
- SWE-bench Pro: **66.1%** / Pro v2-Hard: **76.5%** (official); SWE-bench Multilingual: **78.3%** (official)
- DeepSWE v1.1: **43.3%** (official) — far below the 74%+ frontier reference
- SWE Atlas Codebase QnA: **31.8%** (official)
- Vibe Code Bench: no verified public score found

Long context:

- 1M window verified (official); AA-LCR 78.2% and LongBench v2 67.5% are the closest retrieval/reasoning-at-length figures; no MRCR/RULER/GraphWalks pass rate published.

Speed / cost (Artificial Analysis, median across 4 providers): 324.0 output tokens/s (#4/78 in class), TTFT 0.82 s; very concise — 79M output tokens on the Intelligence Index (median 140M; the card claims ~3× fewer reasoning tokens than leading open models).

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.1 80.1%, MCP Atlas 80.8%, BrowseComp 76.8% and DeepSearchQA 80.5% sit well above the mid band and near the frontier reference, with GDPval-AA Elo 1177 at the top of mid; capped by Tau3 36.1%, AutomationBench 39–48% and Terminal-Bench 4.0 at 3.0%.
- **Reasoning: 76/100.** GPQA Diamond 90.6%, AIME 2026 97.7% and HLE-with-tools 51.1% are frontier-adjacent, but the composite Intelligence Index of ~30 is mid-pack, CritPt 16.3% and SciCode ~48% are mid, and a 47.2% hallucination rate (AA-Omniscience index ~1.5–10.8) caps it.
- **Context window: 95/100.** 1M-token window verified on the official card; the 100 tier requires ≥98% retrieval at 512K+ and no MRCR/RULER/GraphWalks figure exists, so AA-LCR 78.2% supports 95.
- **Multimodal: 15/100.** Text-only input and output per the official model card ("Supported Modalities: Text") — squarely in the methodology's text-only 10–20 band.
- **Coding: 82/100.** SWE-bench Verified 81.6%, Terminal-Bench 2.1 80.1% and LiveCodeBench 88.3% are strong near-frontier results, but DeepSWE 43.3%, SciCode 49.2%, SWE Atlas QnA 31.8% and Terminal-Bench 4.0 3.0% keep it out of the 90+ frontier tier (DeepSWE 74%+/TB 85%+ references).
- **Cost efficiency: 91/100.** Open weights (Apache 2.0) served at a provider median $0.70/$2.10 per MTok — right at the methodology's ~$0.60/$2.20 anchor; a $0 Zen promotional route (`opencode/beam-free`) exists and would score 100 while active, but paid provider pricing is the durable figure.
- **Overall Score: 70/100.** Mean of 82/76/95/15/82 = 70.0 → 70. Best fit: a strong, cheap-to-run open-weight text model for coding agents, MCP tool workflows and token-efficient reasoning — pick it self-hosted or via cheap providers for agentic coding at 1M context; do not expect multimodal or frontier-tier hard-reasoning results.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-10-19
- Method: public internet research — official Reflection model card (Hugging Face, full BF16 eval table) cross-checked against Artificial Analysis (model page + leaderboards via BenchLM) and the OpenCode Zen model list; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Step_5_Preview_v2.md`, using the same headings.
