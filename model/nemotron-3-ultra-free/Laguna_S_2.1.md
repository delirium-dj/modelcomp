# Nemotron 3 Ultra — findings by Laguna S 2.1

> Source: nvidia/nemotron-3-ultra-550b-a55b (NVIDIA), e.g. Artificial Analysis, NVIDIA Research
> Date: 2026-09-23
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: Nemotron 3 Ultra 550B-A55B (Reasoning). NVIDIA's most capable / final model of the Nemotron 3 family.
- Short description: NVIDIA's June-2026 550B open-weights MoE flagship using a hybrid Mamba-Attention architecture (LatentMoE + MTP native speculative decoding); strong RULER-at-1M retrieval and 146 tok/s throughput. Free to self-host.
- Provider / access: NVIDIA (open-weights self-host via Hugging Face + NVIDIA Developer repo); 8 paid API provider routes. OpenCode Zen `opencode/nemotron-3-ultra-free`.
- Release: June 4, 2026 (NVIDIA Research; AA "Released June 2026").
- Architecture: MoE — **550B total / 55B active** (NVIDIA Research + Artificial Analysis); Mamba-Attention hybrid, LatentMoE, MTP speculative-decoding layers; NVFP4/BF16 checkpoints + datasets released open-source. License: OpenMDW (commercial use).
  - ⚠️ Repo `meta.json` lists "253B"; NVIDIA + AA report **550B/55B**. This file uses 550B/55B (authoritative).
- Context window: **up to 1,000,000 tokens** native (NVIDIA: "up to 1M … outperforming SOTA open LLMs on RULER at 1M"); default-served 262K (repo `meta.json` "1M (262K default serve)" + AA measures 262k). ≥1M tier; clears 64K caveat. Max output: not precisely verified.
- Modalities: **text input → text output only** (AA explicitly: "supports text input only … not multimodal … does not support image input"). Repo `meta.json` hedges "beyond text unverified," but AA is authoritative → text-only.
- Knowledge cutoff: training data through September 30, 2025 (NVIDIA pretraining code data) — recency proxy, not a stated cutoff.
- Reasoning: Yes — (Reasoning) variant with inference-time reasoning-budget control (NVIDIA).
- Pricing: **Open weights — free to self-host** (HF + NVIDIA checkpoints/datasets; OpenMDW, commercial-allowed). Paid API $0.60/$2.50 (AA) via 8 providers. Repo `meta.json` freeTierNote "Free OpenCode Zen + NVIDIA trial" → Cost scored on the $0 self-host route (basis for the `-free` slug).
- Speed: ~145.8 tok/s (#9/114 open-weights — Mamba inference advantage) (AA).

### Raw benchmarks found

> Verified (NVIDIA Research page; Artificial Analysis). Benchmarks not located are NOT fabricated.

- AA Intelligence Index v4.3.2: **23** (#34/114 open-weights; median 18; "above average among comparable models") — 10-component aggregate.
- Long-context retrieval: NVIDIA states "outperforms SOTA open LLMs on RULER at 1M context length" — measured claim, no % published.
- Component benchmarks standalone (Terminal-Bench 2.1/Hard/4.0, SWE-bench Verified/Pro, DeepSWE, LiveCodeBench, Tau3, GDPval-AA Elo, GPQA, HLE, AA-Omniscience, AA-LCR, CritPt, SciCode, MRCR): NOT FOUND (Intel Index 23 is the published composite; NVIDIA: "on-par vs SOTA open LLMs across diverse benchmarks," no numbers).

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost scored independently, excluded. Anchored on current AA Intelligence Index v4.3.2 = 23 (#34/114 open-weights; median 18), same-scale-consistent with my other Sept-2026 findings (Fable 5.1 Index 26→67; MiMo V2.5 Pro Index 26→58).

- **Tool use: 55/100.** AA Intelligence Index 23 (open-weights, just above median 18); no standalone Terminal-Bench/GDPval-AA/SWE-bench % → mid-fifties floor.
- **Reasoning: 52/100.** Index 23 + inference-time reasoning-budget control; no standalone GPQA/HLE/AA-Omniscience found.
- **Context window: 95/100.** Native 1,000,000-token context (NVIDIA "up to 1M") + measured RULER-at-1M outperformance vs SOTA open LLMs; clears 64K caveat.
- **Multimodal: 15/100.** Text input only (AA: "not multimodal"). Repo `meta.json` hedge "beyond text unverified" overridden by authoritative AA.
- **Coding: 53/100.** Intelligence Index 23 (TB4.0 component); NVIDIA "on-par vs SOTA open" qualitatively; no standalone SWE-bench/DeepSWE/LiveCodeBench figure → mid-fifties floor.
- **Cost efficiency: 100/100.** Open weights, free to self-host (HF + NVIDIA checkpoints/datasets; OpenMDW commercial-allowed) — basis for `nemotron-3-ultra-free`; AA paid API $0.60/$2.50 not the scored route.
- **Overall Score: 54/100.** (55 + 52 + 95 + 15 + 53) / 5 = 270 / 5 = 54.0 → 54.

> ⚠️ **Reconciliation notes:** (1) **Modality**: repo `meta.json` hedges "beyond text unverified" and repo score 72.7 appears to assume a higher multimodal band; AA (authoritative) says text-only → I score Multimodal **15** (largest downward delta vs repo). (2) **Parameters**: repo `meta.json` "253B" vs NVIDIA+AA **550B/55B** — I use 550B/55B. (3) **Scoring basis**: repo 72.7 reflects at-launch/legacy weighting assuming omni-modal input and pre-v4.3.2-rebase; my 54 anchors on current AA Intelligence Index 23 (#34/114 open-weights) + authoritative text-only modality. Both preserved.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public-internet research (NVIDIA Research "Nemotron 3 Ultra" page; Artificial Analysis model page). Re-normalized via `model-comparison.md` v4, anchored on current AA Intelligence Index v4.3.2 = 23. Scores are normalized 1–100 interpretations, not official vendor scores. Parameter (253B vs 550B/55B) and modality (omni vs text-only) conflicts resolved in favor of authoritative sources (NVIDIA + AA) and flagged above. No peer findings files in `model/` were read (zero-influence).
- Future sources: add a new file next to this one using the same headings.
