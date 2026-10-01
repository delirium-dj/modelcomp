# Nemotron 3.5 Lightning Free — findings by Big Pickle

- Source: Big Pickle (`opencode/big-pickle`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** NVIDIA Nemotron 3.5 Lightning (Free tier on Zen)
- **Short description:** Compact open 30B MoE (3B active) built as the **execution layer for always-on agents** (tool calls, result validation, subagent delegation); routes plans up to frontier planners (e.g., Nemotron 3 Ultra) via NeMo Switchyard. Not a frontier reasoner.
- **Provider / access:** OpenCode Zen free (`opencode/nemotron-3.5-lightning-free`); NVIDIA NIM (`nvidia/nemotron-3.5-lightning-30b-a3b`); Ollama (`nemotron-3.5-lightning:30b-a3b-*`); OpenRouter `:free`; many partners. Weights BF16 + NVFP4 on HF.
- **Release / knowledge:** 2026-08-11 (GA); dev Dec 2025–May 2026; pretrain cutoff Sep 2025; post-train cutoff May 2026.
- **IDs:** `opencode/nemotron-3.5-lightning-free`; NIM `nvidia/nemotron-3.5-lightning-30b-a3b`
- **Context window:** native up to **1M** per NVIDIA card; **Zen/NIM served at 262,144** (models.dev); OpenAI router 1M in / 65,536 out.
- **Modalities:** text-only. Reasoning toggleable (`enable_thinking`); tool calling via `qwen3_coder` parser.
- **Pricing (as of 2026-09-17):** Zen Free $0/$0; NIM free endpoint; OpenRouter `:free` $0. Paid refs: Fireworks $0.05/$0.20, Nebius $0.06/$0.24.
- **Architecture:** 30B total / 3B active; hybrid Mamba-2 + MoE + select Attention (LatentMoE); MTP; DSpark + DFlash drafters; NVFP4 recipe; OpenMDW-1.1. Runs single-GPU (DGX Spark / 1x H100).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **24.58 / 23.46** (NVIDIA card); Tau3-Banking **9.28 / 9.48**; GDPval-AA v2 Elo **832 / 865**
- PinchBench **85.37 / 83.43**; BrowseComp **36.97 / 36.81**
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- MMLU Pro **81.94 / 81.62**; GPQA (no tools) **75.44 / 75.57**; HLE **11.72 / 10.47**; SciCode **32.6 / 31.38**; IFBench **71.88 / 72.88**; AA-LCR **52.0 / 49.19**
- AA Intelligence Index: **24** in launch article (2026-08-11) → **13** current (2026-10-01, v4.3.2, #29/142); launch figure was v4.1. AA-Omniscience Index 17.5/16.63 (BenchLM: −17.7, Acc 14.4, Hallu 37.6)
- BenchLM overall **21.02/100, #220/486**; Agentic lane 31.9 (or 26.4 — conflicting leaderboard rows), Coding lane 36.2

Coding:

- SWE-bench Verified **51.56 / 52.80**; SWE Multilingual **39.33 / 36.47**

Long context:

- No dedicated long-context retrieval SOTA published; native 1M claim per NVIDIA, served 262K.

### Normalized scores (1–100)

- **Tool use: 45/100.** Pinch 85 is good for size but TB ~24% and Tau3 ~9% are clearly execution-tier.
- **Reasoning: 60/100.** GPQA 75/MLLU-Pro 82 strong for 3B-active; HLE 11.7 caps.
- **Context window: 72/100.** 1M native per NVIDIA card, but 262,144 as served on the evaluated Zen tier (models.dev/pi.dev `contextWindow` 262144; HF `max_position_embeddings` 262144). Re-confirmed 2026-10-01.
- **Multimodal: 15/100.** Text-only.
- **Coding: 52/100.** SWE ~52% solid for size, but not mid-frontier coding.
- **Cost efficiency: 100/100.** $0 free; fastest/cheapest execution by design.
- **Overall Score: 49/100.** (45 + 60 + 72 + 15 + 52) / 5 = 48.8. Use as routed executor + local single-GPU fallback, not as primary planner/coder. Re-derived 2026-10-01 after re-verification — unchanged, all five quality dimensions held.

## Re-verification — 2026-10-01 (14 days after original)

Original research date 2026-09-17. Re-run requested by the user to compare prior findings against current data. Original findings above are preserved; corrections are marked inline.

| Dimension | 2026-09-17 | 2026-10-01 | Change |
| --- | --- | --- | --- |
| Tool use | 45 | 45 | — (corroborated) |
| Reasoning | 60 | 60 | — (corroborated) |
| Context window | 72 | 72 | — (re-confirmed 262k served) |
| Multimodal | 15 | 15 | — (re-confirmed text-only) |
| Coding | 52 | 52 | — (corroborated) |
| Cost efficiency | 100 | 100 | — (Zen free tier confirmed live) |
| **Overall** | **49** | **49** | **—** |

**One correction: the AA Intelligence Index moved 14 → 13.** The original report recorded 14 for "current v4.3"; AA's live page now reads **13 at v4.3.2 (#29/142)** against a class median of 8. Worth flagging the version trail: the launch figure of 24 was measured on v4.1, and the model still ranks in the top quartile of its size class, so this is index-composition drift rather than capability loss. This is now the fourth model in this batch where a high cached AA figure proved to be stale.

**The thesis of the report is now measured and confirmed.** This model exists to be the fast execution tier, and AA's independent numbers are the strongest possible support for that framing: **298.1 output tok/s, #1 of 142**, with TTFT **0.57s** against a 2.18s class median. That is roughly 3.4x the class median speed and the fastest model AA tracks. NVIDIA's "4x higher throughput and 30% lower task completion time" marketing claim is consistent with what AA measures. Cost per Intelligence Index task is **$0.09 (#14/142)**, the cheapest in its class bar none. For agent loops where wall-clock dominates, this is the model the report said it was.

**Everything else held.** AA re-confirms **text-only** ("Is Nemotron 3.5 Lightning multimodal? No. It only supports text input"), **1M** native context, **OpenMDW-1.1** commercial-licensed, 5 API providers. BenchLM's independent score is now **21.33/100** (Sept 4 snapshot) against the 21.02 originally recorded — flat. NVIDIA's card numbers are unchanged and still the best source for capability: SWE-bench Verified 51.56/52.80, Terminal-Bench 2.1 24.58/23.46, GPQA 75.44/75.57, τ³-Banking 9.28/9.48.

**Context window clarified, score unchanged at 72.** The evaluated Zen tier serves **262,144** (confirmed via models.dev/pi.dev `contextWindow` and the HF config's `max_position_embeddings` of 262144), even though the native ceiling is 1M and OpenRouter advertises 1M with 65,536 max output. Since the rubric scores the evaluated tier, 262k stands. Note there are now three different figures in circulation for this model — 1M native, 1M on OpenRouter, 262k on Zen — so treat the provider you actually use as authoritative.

**Zen free tier still live**, with the docs' trial caveat intact: "Nemotron 3.5 Lightning Free (NVIDIA free endpoints): Trial use only — do not submit personal or confidential data." Cost efficiency stays at 100.

**Lifecycle: current, and not deprecated.** No deprecation banner, actively benchmarked, and the distribution story has improved rather than deteriorated. TNG Technology repacked it as a bit-exact GGUF (Sept 11) where the **full 1M context fits on a single 24 GB GPU** — a materially better local story than the 25.3 GB default quant that initially made it look desktop-only. Ollama now carries an MXFP4 build alongside Q4_K_M, at 145K+ downloads.

**Unchanged gap:** Claw-Eval / ClawProBench still returns **no verified public score found**. Tool use therefore still rests on PinchBench 85.37, Terminal-Bench 2.1 24.58, τ³-Banking 9.28 and GDPval-AA Elo 832.

**Net assessment:** the report's positioning was right and is now better supported than when written. Every score held, the single index dip is composition drift, and the one prediction embedded in the framing — fastest execution tier by design — is independently confirmed at #1 of 142 on speed with the lowest cost per task in class. Recommendation unchanged: routed executor and single-GPU fallback, not planner.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-17
- Method: public web research (NVIDIA blog + model cards, Ollama library, Artificial Analysis, BenchLM, models.dev); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.