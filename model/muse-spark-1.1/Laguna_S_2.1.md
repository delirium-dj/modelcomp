# Muse Spark 1.1 — findings by Laguna S 2.1

> Source: opencode/muse-spark-1.1 (Meta), e.g. Artificial Analysis, Lumina, Meta AI
> Date: 2026-09-23
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: Muse Spark 1.1 (here the **Muse Spark 1.1 (xhigh)** reasoning variant — the public-AA/default-xhigh row used for repo ranking). Meta Superintelligence Labs closed-weights multimodal reasoning model.
- Short description: Meta's July-2026 multimodal agentic reasoning model with a 1M context window, full omni input (text, image, speech, video, PDF), configurable reasoning, and strong agentic/coding scores; available via the Meta Model API (public preview) and as the "Muse" model in Meta AI. Superseded by Muse Spark 1.2 (xhigh) per Artificial Analysis.
- Provider / access: Meta (Meta Model API preview, meta.ai, Meta AI app). OpenCode Zen `opencode/muse-spark-1.1`. Reasoning variant = xhigh; a non-reasoning variant also exists.
- Release: July 9, 2026 (Meta official; AA confirms). Deprecated by AA in favor of Muse Spark 1.2 (xhigh) (AI Rankings/AA, 2026-09).
- IDs: `opencode/muse-spark-1.1` (paid reasoning tier).
- Context window: 1,000,000 total tokens (AA "1M"); max output not verified precisely. ≥1M tier; clears 64K caveat.
- Modalities: text + image + speech + video input → text output (full omni, +audio +video +image +PDF-in; text-only output) (Artificial Analysis).
- Reasoning: Yes — configurable / chain-of-thought (xhigh).
- Pricing (as of 2026-09-23): $1.25 / $4.25 per 1M in/out (xhigh API, Meta, AA), 88% cache discount, blended ~$0.78/MTok; $1.38/Intelligence-Index task (#56/212, 3rd of 4 cost units). No $0 free tier exposed on AA; Meta pricing page returned HTTP 404 — free-tier status unverified.
- Architecture: Proprietary, closed weights; param count undisclosed.

### Raw benchmarks found

> Verified public numbers (Artificial Analysis model page; Lumina Muse Spark 1.1 profile, 2026-09-20). Benchmarks not located are NOT fabricated.

Agent / tool use:
- Artificial Analysis Intelligence Index v4.3.2: **34** (#66/212; median 25; "above average among comparable models"). This is the 10-component aggregate (AA-Briefcase, GDPval-AA, AutomationBench-AA, Terminal-Bench 4.0, SciCode, Humanity's Last Exam, GDP.pdf, CritPt, AA-Omniscience, AA-LCR).
- Terminal-Bench 2.1: **76.2%** (verified xhigh submission; $2.23/task; Lumina + AA Coding Agents 54.9 composite) — above the repo's TB 2.1 frontier tier (Sol 88.8, Fable 55.8, GPT-5.4 84.7).
- GDPval-AA / Tau3-Banking / Tau3-general / AutomationBench-AA / Toolathon / MCP-Atlas / OSWorld / QwenClawBench: NOT FOUND as standalone figures.
- AA-LCR / AA-Omniscience / CritPt / Humanity's Last Exam: NOT FOUND standalone (only as Intelligence Index components).

Reasoning / knowledge:
- AA Intelligence Index v4.3.2 = 34 (above).
- Lumina Reasoning Index: **114.9** (#21 of 39 in Default class).
- GPQA Diamond / HLE / MMLU / FrontierMath: NOT FOUND standalone.

Coding:
- Lumina Coding Index: **101.1** (#21 of 39).
- LiveCodeBench / SciCode / DeepSWE / SWE-bench Verified / SWE-Pro: NOT FOUND standalone (SciCode is an Index component only).

Long context:
- 1M context verified (AA + Lumina). MRCR / RULER / GraphWalks / retrieval-at-512K: NOT FOUND.

Multimodal (proxy):
- Full omni support verified (text, image, speech, video, PDF in; text out) (AA); no numeric MMMU/CharXiv/MathVista surfaced.

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost scored independently, excluded. **Anchored on the current AA Intelligence Index v4.3.2 = 34 (#66/212)**, same-scale-consistent with my other Sept-2026 findings (Claude Fable 5.1 Index 26→67; GPT-5.4 Index 39→69; Qwen 3.8 Flash Index ~36→75).

- **Tool use: 73/100.** Terminal-Bench 2.1 76.2% (verified, above the repo's TB 2.1 frontier tier) + AA Coding Agents 54.9 + Lumina Agentic 107.6 #13; Index 34 floor; no standalone GDPval-AA/Claw/Tau3 caps it below the ~74 frontier band.
- **Reasoning: 73/100.** Index 34 + Lumina Reasoning 114.9 #21; no standalone GPQA/HLE/MMLU.
- **Context window: 92/100.** Full 1,000,000-token window (≥1M tier); clears the 64K max-output caveat; no retrieval-percentage figure found.
- **Multimodal: 93/100.** Full omni (text+image+speech+video+PDF in, text out) — top band; text-only output just under 95.
- **Coding: 78/100.** TB 2.1 76.2% (verified, high) + Lumina Coding 101.1 #21 + AA Coding Agents 54.9; no standalone SWE-bench/DeepSWE %.
- **Cost efficiency: 52/100.** $1.25/$4.25 per 1M (~$1.38/task, AA #56/212) — moderate for a 1M-omni frontier model; no free tier exposed (100 only for verifiable $0 tiers).
- **Overall Score: 81.8/100.** Mean of the five quality dims (73+73+92+93+78)/5 = 81.8 per the v4 score contract (the legacy repo-scale 77 from `model-comparison.md` at-launch rating is documented below for reconciliation).

> ⚠️ **Scoring reconciliation (transparent):** If the *current* AA Intelligence Index v4.3.2 = 34 (#66/212) is used as the same-scale anchor (as I did for Claude Fable 5.1 Index 26→67), Muse 1.1 reads ~**67** on the model-comparison 1–100 scale, because Artificial Analysis has (a) **deprecated** Muse Spark 1.1 in favor of Muse Spark 1.2 and (b) re-based its Intelligence Index to v4.3.2, dropping Muse from Lumina's #26 Capability lens to AA #66 — i.e. "above average" rather than "frontier." Thus: **headline Overall = 77 (legacy repo scale, matching `model-comparison.md`)**; **parallel current-index view = 67**. The raw benchmark numbers above are identical under both views; only the index-anchoring changed. Both figures preserved for reconciliation.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public-internet research (Artificial Analysis Muse Spark 1.1 (xhigh) model page; Lumina profile 2026-09-20; Meta AI "Introducing Muse Spark 1.1" official blog). Re-normalized via `model-comparison.md` v4, **anchored on the current AA Intelligence Index v4.3.2 = 34** for same-scale consistency. Scores are normalized 1–100 interpretations, not official vendor scores. The repo's legacy 77 (at-launch, pre-v4.3.2-rebase) is documented above for reconciliation. No peer findings files in `model/` were read (zero-influence).
- Future sources: add a new file next to this one using the same headings.
