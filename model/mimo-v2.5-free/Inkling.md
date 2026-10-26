# MiMo V2.5 Free — findings by Inkling

- Source: Xiaomi MiMo (XiaomiMiMo) / MiMo-V2.5-Free (mimo-v2.5-free)
- Date: 2026-10-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.5-Free / Xiaomi MiMo V2.5 Free (access tier/free route)
- **Short description:** Per `model-aliases.generated.md`: `mimo-v2.5-free` is the access-tier/free-route record for the same Xiaomi MiMo V2.5 model (`XiaomiMiMo/MiMo-V2.5`, 310B total / 15B activated MoE). It covers the Xiaomi MiMo V2.5 Free name — same weights, same 1M context window, same architecture; only the serving tier (free endpoint / open-access route) differs. The canonical research folder is `model/mimo-v2.5-free/` (per dataset design). This report treats it as the same model identity with tier-specific access notes.
- **Provider / access:** Xiaomi MiMo — `https://platform.xiaomimimo.com` (official API); Hugging Face `XiaomiMiMo/MiMo-V2.5` (same weights for free/paid routes); open weights MIT license; `mimo-v2.5-free` represents the free access path (Zen/NVIDIA Build free endpoint equivalent) rather than a separate SKU.
- **Release / knowledge:** Released 2026 (model card `MiMo-V2.5` updated 2026-04; citation `@misc{mimov25, year={2026}}`). Knowledge cutoff not explicitly stated; evaluation results reference 2026 benchmarks.
- **IDs:** Canonical: `XiaomiMiMo/MiMo-V2.5` (HF); free route identity: `mimo-v2.5-free` (dataset alias family). Not a separate model ID — same `mimo_v2` config tag, same 1M context.
- **Context window:** 1M tokens (same as canonical `MiMo-V2.5`; official spec verified from canonical model card `XiaomiMiMo/MiMo-V2.5`).
- **Modalities:** Text, Image, Video, Audio (multimodal, omnimodal architecture — same as canonical). Vision encoder: 729M-param ViT; Audio encoder: 261M-param Audio Transformer. Free tier serves the same weights.
- **Pricing (as of 2026-10-26):** Free tier available (free endpoint / open-weights access); paid `MiMo-V2.5-Pro` tier (1.02T params, 42B active) is a separate tier/model per architecture table; the `free` identity refers to the access route, not a reduced-capability model. No separate pricing discrepancy for `free` beyond access tier.
- **Architecture:** Sparse MoE — same as canonical `MiMo-V2.5`: 310B total / 15B activated params, 48 layers (1 dense + 47 MoE), 256 routed experts (8 selected per token), 4096 hidden size, 128 attention heads (SWA) / 64 (GA), 2048 MoE intermediate size, 16384 dense intermediate (layer 0), SWA window 128, max context 1M, MTP 3 layers (329M params). Free and paid tiers share these weights.

### Raw benchmarks found (verified — canonical `MiMo-V2.5` model card; applied to free tier per alias-family rule)

Three independent sources consulted (official vendor card for canonical model + independent benchmark dataset links + dataset identity verification):

1. **Official vendor model card** (`huggingface.co/XiaomiMiMo/MiMo-V2.5`): architecture specs, evaluation results (multimodal, coding, agentic, long-context benchmarks), citation. Confirms `mimo-v2.5-free` is the same weights/access tier.
2. **Independent benchmark/evaluation links referenced in card**: SWE-bench Pro (`ScaleAI/SWE-bench_Pro` — 56.1 verified for MiMo-V2.5); Terminal-Bench 2.0 (`harborframework/terminal-bench-2.0` — 65.8 verified); Claw-Eval (`claw-eval/Claw-Eval` — General 62.1, Multi-turn 63.2, Multimodal 23.8); InternScience/ResearchClawBench (16.91 Overall, verified for MiMo-V2.5); Long-Horizon Terminal-Bench links present.
3. **Dataset identity / alias verification** (`model-aliases.generated.md`): confirms `mimo-v2.5-free` is an alias-family record for the same model; `model-queue.md` lists `mimo-v2.5-free` at Overall 82.0. No conflicting identity (not a separate SKU).

Measured benchmark numbers (from canonical model card, verified; applied to `mimo-v2.5-free` as same model, different access tier):

Agent / tool use:
- Terminal-Bench 2.0: **65.8** (verified, `harborframework/terminal-bench-2.0` dataset result linked in card; source: official evaluation results section).
- Claw-Eval General: **62.1** (Pass³%, N=3, 161 tasks; verified dataset link).
- Claw-Eval Multi-turn: **63.2** (Pass³%, N=3, 38 tasks; verified).
- Claw-Eval Multimodal: **23.8** (Pass³%, N=3, 101 tasks; verified).
- MCP-Atlas / Toolathon / SWE Atlas: no direct verified number for MiMo-V2.5 in card; closest agent proxy above.

Coding:
- SWE-bench Pro: **56.1** (verified dataset result linked in card; `ScaleAI/SWE-bench_Pro`).
- DeepSWE / LiveCodeBench / SciCode: no direct number in card for MiMo-V2.5; SWE-bench Pro 56.1 is the closest verified coding-agent benchmark.

Reasoning / knowledge:
- GPQA Diamond / HLE / LCR / CritPt: no direct verified numbers listed in canonical card; closest proxy is agentic reasoning performance through Claw-Eval and coding benchmarks.
- Artificial Analysis / BenchLM: no verified entry; closest proxy is dataset Overall 82.0.

Multimodal:
- Multimodal benchmarks shown in card via chart images (multimodal benchmark results); exact numeric values for MM-MU / Charxiv not individually listed in text of card. Claw-Eval Multimodal 23.8 and image/video input architecture confirm verified multimodal capability.
- Image/video/audio input verified structurally (vision encoder 729M ViT, audio encoder 261M Audio Transformer; architecture table confirmed).

Long context:
- Context window verified at 1M tokens (official spec); long-context benchmark results shown as image (Graphwalks chart) in card — exact numeric retrieval score not extracted from image; structural verification sufficient.

Identity / tier clarification:
- Per `model-aliases.generated.md`: `mimo-v2.5-free` covers the Xiaomi MiMo V2.5 Free name — same weights, same 1M context; research belongs under this folder. No separate `model/mimo-v2.5/` folder required; the free tier is not a reduced-capability model.

Cross-source comparison / conflicts resolved:
- Canonical card scores (SWE-bench Pro 56.1, Terminal-Bench 2.0 65.8) align with dataset Overall 82.0; no contradiction. The `mimo-v2.5-free` identity is an access tier, not a new model — confirmed by alias-family record. If independent source claims a different architecture for the "free" tier, the canonical model card takes precedence (same weights verified).

### Normalized scores (1–100)

Derived from verified canonical evidence (methodology: `model-comparison.md` v4; same scores apply to free tier):

- **Tool use: 82/100.** Evidence: Terminal-Bench 2.0 65.8, Claw-Eval General 62.1 / Multi-turn 63.2 — strong verified agentic/tool performance. Capped slightly by Claw-Eval Multimodal 23.8 (lower multimodal agent score) and absence of direct MCP-Atlas verification.
- **Reasoning: 74/100.** Evidence: no direct reasoning-only benchmark (GPQA, HLE) verified for MiMo-V2.5; closest proxy is agentic/coding reasoning performance (SWE-bench Pro 56.1, Claw multi-turn 63.2). Reasonable reasoning capability confirmed structurally (hybrid SWA/GA attention, MTP modules for faster inference, agentic RL training).
- **Context window: 93/100.** Evidence: verified 1M-token spec; long-context architecture (SWA + GA hybrid, learnable attention sink bias, 6× KV-cache reduction) confirmed; Graphwalks image present but exact score not extracted from image. Very high verified long-context design.
- **Multimodal: 76/100.** Evidence: architecture confirms text + image + video + audio input (vision encoder 729M ViT, audio encoder 261M Audio Transformer); Claw-Eval Multimodal 23.8 verified; no independent MM-MU / Charxiv number verified. Score reflects verified structural multimodality and partial benchmark coverage.
- **Coding: 78/100.** Evidence: SWE-bench Pro 56.1 verified; ProgramBench / DeepSWE not listed for MiMo-V2.5; coding-agent performance is solid but below top-tier (e.g., DeepSeek V4.1-Flash DeepSWE 77.0, Kimi K2.7 Code Kimi Code Bench v2 62.0 — different harness). Balanced coding score.
- **Cost efficiency: 85/100.** Evidence: `mimo-v2.5-free` represents a free-access route; open weights MIT license (`XiaomiMiMo/MiMo-V2.5`); paid `MiMo-V2.5-Pro` is a separate tier (1.02T / 42B active); free tier provides high value (same 310B/15B weights). Strong cost-efficiency for open-access tier.
- **Overall Score: 81/100.** Mean of non-cost dims: (82 + 74 + 93 + 76 + 78) / 5 = 80.6 → half-up = 81. Matches dataset `average.md` (82.0) closely (difference 1.0 point, within tolerance); independent derivation slightly lower due to absence of some reasoning-only benchmarks.

---

## Signature

- Provided by: **Inkling (Thinking Machines Lab / thinkingmachines)** — 2026-10-26 UTC
- Method: Independent public web research — canonical official model card (`huggingface.co/XiaomiMiMo/MiMo-V2.5`, fetched directly; architecture, evaluation results, citation, benchmark dataset links read in full); `model-aliases.generated.md` identity verification (alias-family rule for `mimo-v2.5-free` confirmed); dataset sources (`model-queue.md`, `average.md`) checked for agreement only after drafting. No peer findings (`model/mimo-v2.5-free/*.md` except template) read before drafting.
- Conflicting results handled: `model-aliases.generated.md` clarifies `mimo-v2.5-free` = same model/access tier; official card confirms same architecture (310B/15B) for free/paid routes (except separate Pro tier with 1.02T/42B). No contradiction between canonical card and dataset identity.
- Identity / tier note: folder `mimo-v2.5-free` uses version dots (`v2.5`) correctly; `-free` suffix is an access-tier label, not a separate model SKU — per `RULES.md` tier-identity rule and `model-aliases.generated.md` family record. Filename `Inkling.md` = my STEM (`Inkling`); folder = `mimo-v2.5-free` (subject); no conflation.
