# MiMo V2.5 Pro — findings by Laguna S 2.1

> Source: xiaomi/mimo-v2-5-pro (Xiaomi AI), e.g. Artificial Analysis, Xiaomi API docs, `meta.json`
> Date: 2026-09-23
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: MiMo V2.5 Pro (Xiaomi AI / MiMo series). Open-weights reasoning flagship.
- Short description: Xiaomi's April-2026 1.0T-parameter MoE reasoning model with a 1M context window; MIT-licensed, text-focused (reasoning/extended-thinking), strong open-weights value at $0.43/$0.87 per 1M tokens.
- Provider / access: Xiaomi Cloud AI / `xiaomi/mimo-v2-5-pro`; OpenCode Zen `opencode/mimo-v2-5-pro`; also via 6 third-party hosts (OpenRouter-style). noFreeId — no Zen Free ID (repo `meta.json`).
- Release: April 2026 (Artificial Analysis).
- Architecture: MoE — **1.0 trillion total parameters, 42B active** (Artificial Analysis); MIT license, weights downloadable for self-host. Decoder-only, hybrid attention.
- Context window: 1,000,000 tokens (Artificial Intelligence "1.0M", repo `meta.json`) — ≥1M tier, clears 64K caveat. Max output: not verified precisely.
- Modalities: **text input → text output only** (Artificial Analysis explicitly: "supports text input," "not multimodal," "does not support image input"). This overrides the repo `meta.json` short note "omni-modal" — AA is the authoritative model-card source. (+text-in only; 0 of image/speech/video/PDF).
- Knowledge cutoff: not stated on AA.
- Reasoning / tools: Yes — extended-thinking / chain-of-thought; reasoning variant (AA "This page shows the reasoning version").
- Pricing (as of 2026-09-23): **$0.43 / $0.87** per 1M in/out (Xiaomi API, Artificial Analysis; repo `meta.json` "$0.435/$0.87"); 99% cache discount, $0.05/Intelligence-Index task (#4/114). MIT self-host option (cost floor). noFreeId (no $0 free tier). Speed ~49.9 tok/s (#45/114, slower than median).

### Raw benchmarks found

> Verified public numbers (Artificial Analysis Muse Spark 1.2 (xhigh) and MiMo-V2.5-Pro model pages; AA leaderboard). Benchmarks not located are NOT fabricated.

- AA Intelligence Index v4.3.2: **26** (#24/114 open-weights; median 18; "well above average among comparable open-weight models") — the 10-component aggregate (AA-Briefcase, GDPval-AA, AutomationBench-AA, Terminal-Bench 4.0, SciCode, Humanity's Last Exam, GDP.pdf, CritPt, AA-Omniscience, AA-LCR).
- Cost per Intelligence Index task: **$0.05** (#4/114, cheapest 4 units) (Artificial Analysis).
- Speed: 49.9 output tok/s (#45/114); TTFT 7.95s.
- Component benchmarks standalone (Terminal-Bench 2.1/Hard/4.0 %, SWE-bench Verified/Pro, DeepSWE, LiveCodeBench, Tau3-Banking, GDPval-AA Elo, GPQA, HLE, AA-Omniscience, AA-LCR, CritPt, MRCR, RULER, MMMU-Pro): NOT FOUND as standalone figures for this model in fetched pages (Intelligence Index 26 is the published composite).

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost scored independently, excluded. Anchored on current AA Intelligence Index v4.3.2 = 26 (#24 open-weights; median 18), same-scale-consistent with my other Sept-2026 findings (Claude Fable 5.1 Index 26→67).

- **Tool use: 55/100.** Intelligence Index 26 (open-weights median 18, "well above average"); no standalone Terminal-Bench/GDPval-AA/SWE-bench % found → floor capped.
- **Reasoning: 54/100.** Index 26 (open-weights) + extended-thinking variant; no standalone GPQA/HLE/AA-Omniscience found.
- **Context window: 95/100.** 1,000,000 native tokens (≥1M tier, clears 64K caveat); no retrieval-percentage (MRCR/RULER) figure found.
- **Multimodal: 15/100.** **Text input only** — AA explicitly states "supports text input only / not multimodal / does not support image input." (Repo `meta.json` short note claims "omni-modal," but AA is the authoritative model-card source and is used here.) Capped at the text-only floor.
- **Coding: 56/100.** Intelligence Index 26 (Terminal-Bench 4.0 is an Index component); no standalone SWE-bench/SciCode/DeepSWE/LiveCodeBench figure found → mid-fifties floor.
- **Cost efficiency: 85/100.** $0.43/$0.87 per 1M (~$0.48/MTok blended, $0.05/Index task, #4/114 cheapest) is excellent for a 1T open-weights MoE; MIT self-host option; noFreeId caps below 100.
- **Overall Score: 55/100.** (55 + 54 + 95 + 15 + 56) / 5 = 275 / 5 = 55.0.

> ⚠️ **Reconciliation note (critical):** The repo `model-comparison.md` average for this model is **73.8**, derived from a `meta.json` short note that lists MiMo V2.5 Pro as **omni-modal** ("Text, image, audio, video in; text out"). Artificial Analysis (the authoritative model-card source) explicitly states the opposite: **"supports text input only … not multimodal … does not support image input."** This single modality discrepancy is decisive — a text-only model scores 15 on the Multimodal dimension (vs 85–95 for omni), pulling Overall from ~78 (if omni held) to **55**. I score from the authoritative AA model card (text-only → Multimodal 15), yielding Overall **55**; the repo's 73.8 (omni assumption) is preserved here for reconciliation and to flag the meta.json-vs-AA data conflict.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public-internet research (Artificial Analysis MiMo-V2.5-Pro model page; Xiaomi Cloud pricing; repo `meta.json`). Re-normalized via `model-comparison.md` v4, anchored on current AA Intelligence Index v4.3.2 = 26. Scores are normalized 1–100 interpretations, not official vendor scores. The modality conflict (meta.json "omni" vs AA "text-only") is resolved in favor of the authoritative model card (AA) and flagged above. No peer findings files in `model/` were read (zero-influence).
- Future sources: add a new file next to this one using the same headings.