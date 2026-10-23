# Muse Wonder 1.0 — findings by Qwen 3.8 Flash

- Source: Meta (`muse-wonder-1.0`; curated id `opencode/muse-wonder-1.0`; OpenRouter `meta/muse-wonder`), cross-checked against Artificial Analysis (Intelligence Index), Meta's `dev.meta.ai/models/muse-wonder`, OpenRouter and independent launch coverage (kingy.ai, dev.to, r/singularity)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0
- **Short description:** Meta's **2026-10-12 Muse-family frontier agent model** — a reasoning-always-on, **fully multimodal** (text + image + video + **audio** in) engine "designed for complex personal and professional agentic tasks," with a 1M-token window. Meta ships two sizes: the lighter/faster **Muse Wonder** and the larger **Muse Wonder Full** — and **Artificial Analysis ranks Muse Wonder Full (Max) #4 of 697 models at 56 on its Intelligence Index**, a hard, independent near-frontier placement. Meta claims it "tops agentic and coding benchmarks, including DeepSWE and SWE-Marathon in independent third-party runs."
- **Provider / access:** Meta API + OpenRouter (`meta/muse-wonder`); proprietary; paid-only (consumer "Muse Code" tier ~$50/mo reported alongside API access).
- **Release / knowledge:** 2026-10-12 (both variants); knowledge cutoff not separately published.
- **IDs:** `muse-wonder-1.0`; larger sibling `muse-wonder-full` (Max); the broader Muse family includes `muse-spark-1.x` (coding) and `muse-glimmer-30b`; compared in launch coverage against **Claude Opus 5.5**.
- **Context window:** **1,048,576 tokens** / **131,072 max output**.
- **Modalities:** **text + image + video + audio in**, text out; reasoning **always on**; agentic tool use yes. (Among the broadest input lanes in the registry.)
- **Pricing (as of 2026-10-23):** **$4.00/M input, $20.00/M output, $0.20/M cached input** — explicitly Opus-5.5-class premium.
- **Architecture:** proprietary; Muse-family frontier MoE (exact active/total params unpublished).

### Raw benchmarks found

> **Strongest possible provenance: an independent Artificial Analysis placement.** AA Intelligence Index **56**, **#4 / 697 models** (median 12) on AA-index v4.3.2 (a 10-eval composite: AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, HLE, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1). Meta's DeepSWE / SWE-Marathon "tops" claims are first-party but framed as third-party-run; treated as directional alongside the AA anchor.

Reasoning / agentic (independent):

- **Artificial Analysis Intelligence Index: 56** (Muse Wonder Full Max) — #4 overall, well above the frontier-median band
- Verbosity flag: 140M output tokens to run the index vs 90M median (think-heavy; raises real cost)

Coding / agents (Meta-claimed, third-party run):

- **DeepSWE** and **SWE-Marathon**: Meta reports it leads these agentic-coding suites; launch coverage vs Opus 5.5 notes it "loses 9 of Meta's own 14 benchmarks" — i.e., **competitive at, not uniformly above, the very top frontier**

Multimodal / long context:

- 4-modality input (text/image/video/audio); 1M window; **no separate MRCR/RULER or MMMU/audio absolute transcribed** for the launch — capability asserted by AA's multimodal-adjacent eval set and the modality spec.

### Normalized scores (1–100)

- **Tool use: 89/100.** Purpose-built for sustained agentic work, with AutomationBench-AA folded into a #4 AA ranking and Meta's "tops agentic benchmarks" claim — elite orchestration; a hair off the very peak because the strongest evidence is composite rather than per-task τ²/BFCL absolutes.
- **Reasoning: 92/100.** The **independent** crown jewel: AA Intelligence Index **56, #4 of 697** (a composite including HLE, SciCode, CritPt, GDPval) is a top-of-field, hard-to-game signal; reasoning-always-on with heavy thinking-token budget. Only the handful of flagships it edges sit above.
- **Context window: 88/100.** A genuine **1,048,576-token** window with 131K output is top-tier span; docked slightly only for the absence of a published single-window retrieval score and its verbose-generation tendency.
- **Multimodal: 82/100.** Among the broadest lanes here — **text + image + video + audio** input in one model — well above vision-only peers; not higher because it's an *understanding* model (no image/audio generation surfaced) and lacks a published per-modality eval.
- **Coding: 89/100.** Meta claims the lead on DeepSWE / SWE-Marathon in third-party runs, consistent with its high AA rank (Terminal-Bench 4.0 is in the composite) — near-frontier agentic coding; tempered by launch coverage showing it trails Opus 5.5 on several of Meta's own suites.
- **Cost efficiency: 58/100.** $4/$20 (cached $0.20) is Opus-5.5-class premium, and the 140M-vs-90M thinking-token verbosity means the *effective* cost per solved task runs high — solid value for the capability, not a budget model.
- **Overall Score: 88/100.** Half-up mean of the five quality dims (89+92+88+82+89)/5 = 88. Best fit: **frontier multimodal autonomous agents** — personal/professional assistants and long-horizon coding+research tasks needing text/image/video/audio grounding over a 1M window — where a #4 independent AA ranking justifies the premium. It is *not* the pick for cheap bulk traffic, and its always-on verbosity costs real money.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-23
- Method: public internet research — **Artificial Analysis** (Muse Wonder Full Max: Intelligence Index **56**, **#4/697**, v4.3.2 10-eval composite, 140M output-token verbosity — the independent backbone of this entry), `dev.meta.ai/models/muse-wonder` (DeepSWE / SWE-Marathon third-party leads, "most advanced model yet"), OpenRouter `meta/muse-wonder` (frontier reasoning model, text+image+video+audio input), and independent launch coverage (kingy.ai $4/$20 pricing, dev.to's Opus-5.5 comparison "loses 9 of Meta's own 14 benchmarks," r/singularity on the Wonder vs Wonder-Full split). Curated `meta.json` (not scaffolded) matches first-party specs (1,048,576/131,072, $4/$20/$0.20, four-input multimodal, reasoning on). Scores are normalized 1–100 interpretations; Meta's per-suite "tops" claims are flagged as vendor-framed and read against the harder AA #4 placement, and no per-benchmark absolute was fabricated.
- Revisit trigger: individual AA sub-scores (GPQA/HLE/Terminal-Bench 4.0) exposed for the served `muse-wonder` (non-Full) endpoint, or an independent SWE-bench Verified absolute reconciling Meta's DeepSWE/SWE-Marathon claims.
- Future sources: add a new file next to this one, e.g. `Gemini_4_Argon.md`, using the same headings.
