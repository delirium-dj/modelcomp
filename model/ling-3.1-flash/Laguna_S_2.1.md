# Ling 3.1 Flash — findings by Laguna S 2.1

- Source: Artificial Analysis (`https://artificialanalysis.ai/models/ling-3-1-flash`), BenchLM (`https://benchlm.ai/models/ling-3-1-flash`), Ant Ling Twitter launch (`https://x.com/AntLingAGI`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash (Ling 3.1 Flash)
- **Short description:** InclusionAI (Ant Group) hybrid-reasoning MoE (560B total, ~25B active) for coding and tool-using agents. Meta.json notes "all published numbers are vendor-reported." `meta.json` is `scaffolded: true` and tracks the served OpenCode Zen deployment (262K context, text-only).
- **Provider / access:** InclusionAI API; OpenCode Zen: `opencodec/ling-3.1-flash` (per `meta.json`); free trial: `opencodec/ling-3.1-flash-free` and OpenRouter/Vercel (through 2026-10-13)
- **Release / knowledge:** Released October 1, 2026 (per AA); knowledge cutoff not published
- **IDs:** `opencodec/ling-3.1-flash` (per `meta.json`, served deployment); `opencodec/ling-3.1-flash-free` (free trial tier)
- **Architecture:** Hybrid-reasoning sparse MoE; 560B total parameters, ~25B active; proprietary
- **Context window:** `meta.json` tracks "262,144 (256K) served; 32,768 max output (1M behind post-trial paid tier)." The model natively supports 1M tokens (per AA: "1.0M tokens"). **Score uses 262K served tier per tracked `meta.json` spec.** — Note: AA shows 1M context window and BenchLM shows 262K; discrepancy resolved by using meta.json's tracked 262K served tier.
- **Modalities:** Text in/out only (per `meta.json`, AA, and BenchLM — "not multimodal")
- **Pricing (as of 2026-10-08):** Free trial $0/$0 through 2026-10-13 (via `opencodec/ling-3.1-flash-free` and OpenRouter/Vercel); paid tier unannounced (AA reports $0.30/$0.90 per 1M as proxy); `noFreeId` not set (free ID available during trial)
- **Reasoning:** Yes (hybrid reasoning / chain-of-thought; per `meta.json` and AA)
- **Speed:** 211.4 tokens/s (AA, InclusionAI API, rank #15/182, "notably fast")
- **TTFT:** 1.80s (AA, better than average)
- **License:** Proprietary (per AA and BenchLM: "Proprietary model")
- **Status:** Current flagship (not deprecated)

### Raw benchmarks found

> Sources: Artificial Analysis (`https://artificialanalysis.ai/models/ling-3-1-flash`), BenchLM (`https://benchlm.ai/models/ling-3-1-flash`), Ant Ling Twitter launch screenshots (September 30, 2026). BenchLM covers 17 of 623 benchmarks. AA Intelligence Index = 41 (rank #5/182 reasoning models in similar price tier, median: 13). **Note: `meta.json` states "all published numbers are vendor-reported"** — vendor-reported benchmarks (from Ant Ling launch screenshots) are marked with ⚠️. Independently verified AA benchmarks are marked without flag. Confidence: high for AA benchmarks; moderate for vendor-reported benchmarks (no independent verification).

Agent / tool use:

- **GDPval-AA:** **56.1%** — (BenchLM citing AA; Elo ≈ 1622; strong, independently verified)
- **skillsBench:** **68.7%** — ⚠️ (Ant Ling launch screenshots; moderate, vendor-reported)
- **AutomationBench:** **52.5%** — ⚠️ (Ant Ling launch screenshots; moderate, vendor-reported)
- **CyberGym:** **87.9%** — ⚠️ (Ant Ling launch screenshots; strong, vendor-reported)
- **Finance Agent v2:** **57.9%** — ⚠️ (Ant Ling launch screenshots; moderate, vendor-reported)
- **DRACO:** **85.5%** — ⚠️ (Ant Ling launch screenshots; strong, vendor-reported)
- **terminalBench4:** **40.4%** — ⚠️ (Ant Ling launch screenshots; weak, vendor-reported)
- **Terminal-Bench 4.0:** not publicly available (part of Intelligence Index, not broken out by AA)
- **AA-Briefcase v1.1:** not publicly available (part of Intelligence Index, not broken out)
- **AA Agentic Index:** not separately reported
- **OSWorld-Verified:** no verified public score found
- **Claw-Eval:** no verified public score found
- **τ²-bench:** no verified public score found

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index:** **41** — (AA v4.3.2, rank #5/182 reasoning models in similar price tier, median: 13; per AA model page)
- **Artificial Analysis Intelligence Index (BenchLM):** **41.1%** — (BenchLM citing AA; consistent with AA)
- **AA-LCR:** **83.0%** — (BenchLM citing AA; independently verified; good)
- **CritPt:** **18.0%** — (BenchLM citing AA; independently verified; weak, but above 0)
- **AA-HLE:** **39.4%** — (BenchLM citing AA; independently verified; moderate)
- **AA-Omniscience Index:** **2.2%** — (BenchLM citing AA; independently verified; near zero)
- **AA-Omniscience Accuracy:** **29.1%** — (BenchLM citing AA; independently verified; moderate)
- **AA-Omniscience Hallucination Rate:** **37.9%** — (BenchLM citing AA; independently verified; moderate-high)
- **HealthBench Professional:** **65.3%** — ⚠️ (Ant Ling launch screenshots; moderate, vendor-reported)
- **AA-GPQA Diamond:** no verified public score found (not reported)
- **AA-IFBench:** no verified public score found (not reported separately)

Coding:

- **AA-SciCode:** **54.1%** — (BenchLM citing AA; independently verified; moderate)
- **SWE-Atlas Codebase QnA:** **55.9%** — ⚠️ (Ant Ling launch screenshots; moderate, vendor-reported)
- **terminalBench4:** **40.4%** — ⚠️ (Ant Ling launch screenshots; weak, vendor-reported)
- **LiveCodeBench v6:** no verified public score found (not reported)
- **SWE-bench Verified:** no verified public score found (not reported)
- **DeepSWE:** no verified public score found
- **AA Coding Index:** no verified public score found (not reported)

Multimodal & grounded:

- **Multimodal:** not supported (text input only per `meta.json`, AA, and BenchLM)
- **MMMU-Pro:** no verified public score found (not applicable — text-only)
- **VideoMME:** no verified public score found (not applicable — text-only)

Long context:

- **AA-LCR:** **83.0%** — (BenchLM citing AA; independently verified; good)
- **MRCR / RULER:** no verified public score found (not reported)
- **Native context:** 1,000,000 tokens per model (per AA); 262,144 served per `meta.json` (256K default, 1M behind paid tier)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded from Overall.
> Confidence: moderate — 17 public benchmarks found across 3 sources (AA, BenchLM, Ant Ling Twitter). `meta.json` flags "all published numbers are vendor-reported" — AA benchmarks are independently verified; vendor-reported benchmarks are marked ⚠️ and weighted less. `meta.json` is `scaffolded: true` — tracked specs (262K, text-only) may differ from the full model (1M context, per AA).
> **Important:** AA reports 1M context window and Intelligence Index 41; `meta.json` tracks 262K served tier. Scores use `meta.json` tracked specs.

- **Tool use: 60/100.** Independently verified GDPval-AA at 56.1% (Elo ≈ 1622) is strong — above the ~1200 Elo mid-tier and approaching frontier (~1700+). No Terminal-Bench 4.0 or 2.1 scores publicly available (not broken out from Intelligence Index). No AA-Briefcase, AA Agentic Index, OSWorld, or Claw-Eval. Vendor-reported ⚠️ agentic benchmarks: skillsBench 68.7%, CyberGym 87.9%, DRACO 85.5% (strong) but terminalBench4 40.4%, AutomationBench 52.5% (weak). The independently verified GDPval-AA 56.1% is the primary anchor; vendor benchmarks are mixed (some strong, some weak). Estimated at 60.

- **Reasoning: 71/100.** Intelligence Index 41 → base = 41 + 30 = 71 (per scoring methodology, rank #5/182 reasoning models in similar price tier, median: 13). AA-LCR at 83.0% is good (below ~95% frontier). AA-HLE at 39.4% is moderate (near ~37.5% frontier). CritPt at 18.0% is weak but above 0. AA-Omniscience Index at 2.2 is near zero (hallucination-prone: 37.9% rate, 29.1% accuracy). No GPQA, AA-GPQA, or IFBench separately reported. Despite the relatively high Intelligence Index (41), the poor Omniscience metrics drag down the score. Using II + 30 = 71 as the primary metric.

- **Context window: 72/100.** `meta.json` tracks 262,144 (256K) served; 32,768 max output. The underlying model supports 1M tokens per context (per AA). Scoring uses the `meta.json` tracked 262K served tier → 72. Note: if the paid tier (1M) is accessible, the score would be 95. AA-LCR at 83.0% confirms good long-context reasoning at the served tier.

- **Multimodal: 15/100.** Text in/out only (per `meta.json`, AA, and BenchLM — "not multimodal"). Per methodology: "Text in/out only → 15." No image, audio, or video input support tracked.

- **Coding: 49/100.** AA-SciCode at 54.1% is moderate (below ~55% frontier). ⚠️ terminalBench4 at 40.4% (weak, vendor-reported). ⚠️ SWE-Atlas Codebase QnA at 55.9% (moderate, vendor-reported). No independently verified SWE-bench or LiveCodeBench scores. With only one AA benchmark (SciCode 54.1%) and mixed vendor benchmarks, coding is estimated at 49.

- **Cost efficiency: 100/100.** Free trial $0/$0 through 2026-10-13 (via `opencodec/ling-3.1-flash-free` and OpenRouter/Vercel). `noFreeId` not set (free ID available during trial). Paid tier unannounced (AA reports $0.30/$0.90 as proxy). During the free trial period, the effective cost is $0 → 100. Note: trial expires 2026-10-13 (5 days from research date); paid pricing may be moderate ($0.30/$0.90 → 65 if paid tier becomes default).

- **Overall Score: 53.4/100.** Mean of five non-cost dimensions: (60 + 71 + 72 + 15 + 49) / 5 = 267 / 5 = 53.4 → **53**.

Correction: (60 + 71 + 72 + 15 + 49) / 5 = 267 / 5 = 53.4 → **53**.

**Corrected Overall Score: 53/100.** BenchLM overall 62.03/100 (#44/887, 17 of 623 benchmarks). Strong reasoning (Intelligence Index 41, II+30 → 71) and good agentic performance (GDPval-AA 56.1%, AA-LCR 83.0%). Severely limited by text-only modality (15) and moderate coding (AA-SciCode 54.1%). Currently free during trial ($0/$0 through Oct 13, Cost 100), but paid pricing unannounced ($0.30/$0.90 proxy). Vendor-reported benchmarks marked ⚠️ and weighted less per `meta.json` note.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-08
- Method: public internet research via Artificial Analysis, BenchLM, and Ant Ling Twitter; scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research (did not read Big_Pickle.md, Claude_Opus_5.md, etc. in this folder).
- Notes: `meta.json` flagged `scaffolded: true` and states "all published numbers are vendor-reported." AA benchmarks are independently verified; Ant Ling launch screenshot benchmarks are vendor-reported (⚠️) and weighted less. `meta.json` tracks 262K served (256K default, 1M behind paid tier); AA reports 1M native context — scored uses meta.json tracked spec. Free trial $0/$0 through 2026-10-13; paid tier unannounced (AA proxy: $0.30/$0.90). Proprietary model (not open weights).
- Future sources: add a new file `ling-3.1-flash/Laguna_S_2.1.md` (already this file) with updated data once the paid tier pricing is announced and trial expires.

---
