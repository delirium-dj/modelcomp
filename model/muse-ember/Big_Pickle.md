# Muse Ember 1.0 — findings by Big Pickle

- Source: Meta/Muse Ember 1.0
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Ember 1.0 (formerly the stealth preview "Crouton Alpha")
- **Short description:** Meta's smallest, most efficiency-focused Muse reasoning model, revealed 2026-11-09 behind the Crouton Alpha stealth codename. It is the first model trained using Muse Wonder Full, and Meta positions it on intelligence-per-dollar rather than peak capability ($0.116–0.136 per Artificial Analysis task).
- **Provider / access:** Meta first-party API and OpenCode Zen (`opencode/muse-ember-1.0`, aliases `crouton-alpha`, `crouton-alpha-free`). Responses API on Zen.
- **Release / knowledge:** Released 2026-11-09; knowledge cutoff not published.
- **IDs:** `meta/muse-ember` (OpenCode `muse-ember-1.0`); no standing Free ID.
- **Context window:** 1,048,576 total / 524,288 max output (AA + vendor model card).
- **Modalities:** text + image in; text out; reasoning yes (`max` effort evaluated); tool calls yes. Vendor copy advertises audio and video input too, but AA's endpoint metadata for the tracked model exposes text and image only — treat audio/video as unverified.
- **Pricing (as of 2026-11-11):** $0.10 / $0.50 per 1M in/out; cached read $0.004; above 200K tokens $0.30 / $1.50.
- **Architecture:** proprietary; small model by design (Meta describes it as the efficiency tier of the Muse family).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **40.9%** (AA)
- AutomationBench: **68.1%** (AA harness)
- OSWorld 2.1: **69.5%** (vendor)
- ALE Linux: **61.6%** (vendor)
- PerceptionBench (with tools): **80.6%** (vendor)
- AA Briefcase: **1520.92 Elo** (AA)
- Terminal-Bench 2.1 / Tau2 / Tau3 / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- AA Intelligence Index: **36.02**
- HLE-Diamond: **25.1%** (AA)
- CritPt (agentic-hard): **39.0%** (AA)
- GDP-PDF all-pass: **22.8%** (AA)
- Terminal-Bench Science: **20.0%** (AA)
- AA-Omniscience: accuracy **21.1%**, hallucination rate **17.4%**
- MLCR: **18.3%** (AA)
- GPQA Diamond / HLE / LCR: no verified public score found for this ID.
- BenchLM overall: **56.36 / #64 of 214** (4 source-linked rows)
- StealthMark (pre-release Crouton Alpha build): **48.0/100**

Coding:

- FrontierCode 2.0: **27.2%** (AA) — below Claude Haiku 5.5's 34.9% on the same harness (Meta's own framing)
- SWE-bench Verified / SWE-Pro / DeepSWE / LiveCodeBench / SciCode: no verified public score found.

Long context:

- No MRCR / RULER / GraphWalks retrieval result published; the 1M window is unmeasured at length.
- AA cost per Intelligence Index task: **$0.136** (cheapest tier in its comparison set).

### Normalized scores (1–100)

- **Tool use: 66/100.** OSWorld 2.1 69.5%, AutomationBench 68.1%, ALE Linux 61.6% and PerceptionBench 80.6% are solid mid-tier agentic signals; TB 4.0 40.9% and the absence of Tau/GDPval rows cap it.
- **Reasoning: 60/100.** AA Index 36.02 is mid-pack, HLE-Diamond 25.1% and CritPt 39% show real but shallow reasoning, and GDP-PDF 22.8% / MLCR 18.3% are weak; no GPQA or HLE row exists.
- **Context window: 93/100.** 1M-token tier with an unusually large 524K output; capped below 95 because no retrieval-at-length measurement backs the window.
- **Multimodal: 70/100.** Image input is verified (text+image on the tracked endpoint); audio/video input is claimed in vendor copy but not exposed per AA metadata, so the score stays at the top of the image-only band.
- **Coding: 52/100.** Only FrontierCode 2.0 27.2% is published, and it trails Haiku 5.5 on the same harness — clearly a coding tier below the frontier.
- **Cost efficiency: 93/100.** $0.10/$0.50 per 1M with $0.004 cache reads is excellent for a 1M-context reasoning model; the $0.30/$1.50 long-context surcharge and $0.136/task AA cost keep it out of the 97–99 band.
- **Overall Score: 68/100.** (66 + 60 + 93 + 70 + 52) / 5 = 68.2 → 68. Best fit: high-volume, cost-sensitive agentic work and long-document processing where frontier coding accuracy is not required.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-11-11
- Method: public web research (Artificial Analysis model page/API data, BenchLM public ledger, Meta Muse Ember announcement, OpenCode Zen price table); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Muse Ember](https://artificialanalysis.ai/models/muse-ember)
  - [BenchLM — Muse Ember](https://benchlm.ai/models/muse-ember)
  - [Meta — Muse Ember announcement](https://research.meta.ai/blog/muse-ember)
  - [OpenCode Zen — model list and pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `Muse_Ember_1.0_Update.md`, using the same headings.
