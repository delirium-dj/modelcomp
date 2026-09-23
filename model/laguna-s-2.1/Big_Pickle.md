# Laguna S 2.1 — findings by Big Pickle

- Source: Poolside (`poolside/Laguna-S-2.1`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1
- **Short description:** Poolside's 118B-total/8B-active open-weights MoE built for agentic coding and long-horizon work, advertised as the West's most capable open-weight model on release; one of the Laguna family XS/S/M siblings.
- **Provider / access:** Poolside API + open weights on Hugging Face (`poolside/Laguna-S-2.1`, OpenMDW-1.1); served by OpenRouter, Vercel AI Gateway, Baseten, Ollama. OpenAI-compatible Chat API. No Zen Free ID found.
- **Release / knowledge:** Released 2026-07-21; trained end-to-end in <4 weeks (9 calendar weeks from start), 30T tokens; knowledge cutoff not documented.
- **IDs:** `poolside/laguna-s-2.1` (state explicitly: no Free ID exists on Zen).
- **Context window:** 1,048,576 (1M) tokens; max output 32,768 (131,072 on OpenRouter). Ollama local builds default to 256K. Verified via Poolside card, ModelBench, haimaker.
- **Modalities:** Text in/out only. Interleaved thinking mode (on/off per request), native tool calling; structured output not listed by ModelBench.
- **Pricing (as of 2026-09-23):** ~$0.10 in / $0.20 out per 1M (OpenRouter ~$0.09/$0.18, cache read $0.009; haimaker $0.09/$0.18). Paid — no free tier found on Zen. Open weights = no per-token bill if self-hosted (BF16 ~236 GB needs multiple GPUs; NVFP4 fits a DGX Spark).
- **Architecture:** 118B total / 8B active MoE, 48 layers, mixed attention (12 global / 36 sliding-window at 512), 256 routed experts (top-10) + 1 shared expert, GQA (8 KV heads), 100K vocab. OpenMDW-1.1 permissive license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **70.2%** (Poolside official, `pool` harness, thinking enabled, pass@1 avg 4 attempts; 2026-07-21 — https://www.poolside.ai / GlobeNewswire release)
- SWE Atlas (Codebase QnA): **46.2%** (Scale AI official leaderboard as cited on `unsloth/Laguna-S-2.1` card)
- Toolathon Verified: **49.7%** (official Toolathlon leaderboard as cited on `unsloth/Laguna-S-2.1` card)
- GDPval-AA: no verified public score found
- Tau3-Banking: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found (not on AA's Index; Poolside published only coding/agentic evals)
- AA-Omniscience Accuracy / Hallucination Rate: no verified public score found
- Independent CrucibleMark (Sep 2026): Total **69.1** (rank #69), Logical Reasoning **67.93** (vs fleet best 79.6), ToolUse **62.62** (best 81.1), Code Quality **67.24** (best 84.9) — https://www.cruciblemark.com/reports/laguna-s-2-1-nvfp4 (independent, weighted suite, not same-harness as frontier refs)

Coding:

- SWE-bench Multilingual: **78.5%** (Poolside official, top of their published table)
- SWE-bench Pro (Public Dataset): **59.4%** (Poolside official; vs Hy3 57.9%, Claude Sonnet 5 63.2%, MiniMax M3 59.0%)
- DeepSWE v1.1: **40.4%** (Poolside official; DexSWE frontier ~67%+ for GPT-5.6 Luna Max)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found

Long context:

- No long-context retrieval (MRCR / RULER / GraphWalks) published by Poolside as of 2026-09-23 — aiweekly notes the 1M window is a marquee spec not backed by published long-context evals. Local Ollama builds cap at 256K.

### Normalized scores (1–100)

- **Tool use: 73/100.** TB2.1 70.2% is above the 45–60% mid band and roughly on par with Hy3 (71.7%), but the absence of any GDPval/Tau3 tool-use numbers and mid-level Toolathon (49.7%) / SWE Atlas (46.2%) cap it below frontier.
- **Reasoning: 55/100.** No verified GPQA/HLE/LCR/Index figures published; independent CrucibleMark logical reasoning (67.9) is mid-strength. Sparse evidence forces a conservative mid score.
- **Context window: 90/100.** 1M token spec is documented across providers; falls in the ≥1M tier but no verified ≥98% retrieval at 512K+ is published, so it sits above 500K–1M (85–94) rather than at the top.
- **Multimodal: 15/100.** Text in/out only per model card (also OOM in earlier picks).
- **Coding: 73/100.** SWE-bench Pro 59.4% and SWE-Multilingual 78.5% are strong-mid, but DeepSWE 40.4% is well below the ~74%+ frontier ref and no SciCode/LiveCodeBench exists to lift it.
- **Cost efficiency: 98/100.** ~$0.10/$0.20 per 1M is among the cheapest serving prices; open weights allow self-hosting at marginal cost ($0 = 100, so this sits in the ~97–99 band).
- **Overall Score: 61/100.** (73 + 55 + 90 + 15 + 73) / 5 = 61.2 → 61. Best-fit: affordable open-weights agentic coder for long-horizon terminal/SWE work; pair with any omni model for multimodal input.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-23
- Method: public internet research (Poolside release + model card + independent trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model → file saved as `<Source_Name>.md.excluded`, not `.md` (see SELF-EXCLUSION above).