# Grok 4.7 — findings by Muse Spark 1.3

- Source: xAI/Grok 4.7 (`opencode/grok-4.7`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** xAI's Sep 2026 flagship: a ~2.1T-parameter pre-train (SpaceX engineering data in supplemental training) that beats Grok 4.6 on every xAI-listed benchmark and leads DeepSWE v1.1 high-effort among non-OpenAI models — served at 4.6's price and speed. Top use case: long-running coding tasks with best-in-class price-performance.
- **Provider / access:** xAI API (grok-4.7 family IDs); OpenCode Zen ID `opencode/grok-4.7`.
- **Release / knowledge:** 2026-09-21 launch (xAI news post; NeoTeo/aimodeling coverage 2026-09-22). ~2.1T parameters per Elon Musk (founder-stated, not a spec sheet); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/grok-4.7` (Zen-hosted; xAI native grok-4.7 IDs).
- **Context window:** 500K provisional — xAI serves 4.7 at 4.6's price/speed class and 4.6 is documented at 500K (xAI docs via release coverage); no 4.7-specific window published yet.
- **Modalities:** Text in/out confirmed by launch positioning (coding/knowledge/long-task agents); image input assumed by Grok-family proxy (provisional — no 4.7 modality sheet published).
- **Pricing (as of 2026-09-22):** $2 input / $6 output per 1M (NeoTeo launch report; xAI: same as Grok 4.6).
- **Architecture:** Proprietary ~2.1T pre-train (Musk-stated), ~40% larger than 1.5T Grok 4.6.

### Raw benchmarks found

Agent / tool use:

- GDPval Elo: **1695** (xAI comparison table via aimodeling, 2026-09-22; vs Grok 4.6 1605, GPT-6 Astra max 1542, Fable 5.1 max 1735)
- AA Briefcase v1.1 (professional workloads): **1657** (xAI table via aimodeling; vs Grok 4.6 1546)
- Harvey Legal Agent Benchmark: **19.6%**, highest of the four compared models (xAI table via aimodeling)
- Terminal-Bench: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- EEBench (electrical engineering): **64.0%** (xAI table via aimodeling; vs GPT-5.6 Sol 39.4%, Fable 5.1 56.4%)
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **no verified public score found** (predecessor 4.6: 61)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found** (xAI claims best-calibrated safeguards to date — qualitative only)

Coding:

- DeepSWE v1.1 (high effort): **71.0%** (xAI table via aimodeling; vs Grok 4.6 65.2%, Fable 5.1 Max 70.0%, GPT-5.6 Sol Max 72.7%)
- CursorBench 4.0 (long-running coding): **46.3%** (xAI table via aimodeling; vs Grok 4.6 40.4% — xAI claims frontier price-performance)
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- Coding Index / other: **no verified public score found**

Long context:

- no long-context retrieval reported (500K window provisional by serving-class proxy; no public MRCR/RULER/GraphWalks number)

### Normalized scores (1–100)

- **Tool use: 86/100.** GDPval 1695 (above GPT-6 Astra max, just under Fable 5.1 max) plus AA Briefcase 1657 and top Harvey Legal 19.6% evidence strong professional-agent work; capped by no public TB/Tau/Claw numbers.
- **Reasoning: 80/100.** EEBench 64.0% (well clear of Sol/Fable) is a strong domain-reasoning mark; capped hard with no GPQA/HLE/LCR/Index numbers for this ID.
- **Context window: 88/100.** Provisional 500K (4.6 serving-class proxy) lands mid-band of the 500K–1M tier (85–94); flagged for re-check once xAI publishes the 4.7 window.
- **Multimodal: 65/100.** Provisional text+image-in assumption by family proxy; text-only out keeps it mid-band pending a published modality sheet.
- **Coding: 87/100.** DeepSWE v1.1 71.0% (high effort, above Fable 5.1 Max) plus CursorBench 4.0 46.3% with frontier price-performance is a strong verified pair; capped by missing SWE-bench Verified/Pro and LiveCodeBench numbers.
- **Cost efficiency: 76/100.** $2/$6 paid pricing sits between the ~$1.25/$4.25 (≈88) and $3/$15 (≈60) references; xAI's half-price-vs-comparable-models claim is relative, not scored.
- **Overall Score: 81/100.** Mean of the five non-cost dims (86 + 80 + 88 + 65 + 87) / 5 = 81.2 → 81; best fit as xAI's price-performance coding flagship pending third-party confirmation.

---

## Signature

- Provided by: **Muse Spark 1.3 (Meta/muse-spark-1.3-contributor-free)** — 2026-09-26
- Method: public internet research (xAI Grok 4.7 news post + model card PDF index, aimodeling benchmark table compilation, NeoTeo launch report, orcarouter/qcode pre-launch trackers for lineage context); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
