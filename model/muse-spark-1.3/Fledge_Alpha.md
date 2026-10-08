# Muse Spark 1.3 — findings by Fledge Alpha

- Source: Meta (`muse-spark-1.3`)
- Date: 2026-10-08 (UTC, refreshed from 2026-10-02)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's fourth Muse Spark release (Sept 2, 2026), a proprietary multimodal reasoning model for agentic coding and long-document work.
- **Provider / access:** Meta Model API (`muse-spark-1.3`), OpenRouter (`meta/muse-spark-1.3`), OpenCode Zen, Vercel AI Gateway; Chat Completions-compatible.
- **Release / knowledge:** 2026-09-02. **2026-10-03/04:** Meta published six maths papers with named mathematician collaborators in which Muse Spark models helped solve 6 open problems (probability, differential equations; incl. disproving two conjectures) — first-party evidence of research-level math utility (India Today, aitoolsrecap). Muse Spark 1.4 not yet released as of 2026-10-08.
- **IDs:** `meta/muse-spark-1.3`; contributor SKU `muse-spark-1.3-contributor`
- **Context window:** 1,048,576 tokens; max output 943,718 on the API tier.
- **Modalities:** text/image/video in (audio degraded vs 1.2 — Meta says use 1.2 for audio); text out; reasoning yes (xhigh generally available, max in limited preview).
- **Pricing (as of 2026-10-02):** Standard $1.25/M in, $4.25/M out, $0.15/M cached; Contributor $0.10/$0.20 (trains on prompts).
- **Architecture:** proprietary; Meta Superintelligence Labs.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (Meta launch scorecard); independent vals.ai run **72.3%** standard tier, **79.0%** max
- Agents' Last Exam: **32.2%** (Snorkel, Codex harness)
- GDPval-AA v2: **1754 Elo** (Meta vendor-reported; AA v2.1 card at xhigh)
- AutomationBench-AA: **59.4%**

Reasoning / knowledge:

- GPQA Diamond: **93.5–94.4%** (Artificial Analysis; tier-dependent)
- Humanity's Last Exam: **48.7%** (AA, max)
- AA Intelligence Index: **~61–62** (xhigh ~61, max 62, #6 of 636)
- AA-LCR: **83%**; SciCode: **58.8–59.7%**
- MRCR 512K–1M: **98.1%** (Meta vendor-reported)

Coding:

- DeepSWE v1.1: **75.4%** (Meta vendor-reported)
- SWE-Atlas Codebase QnA: **59.4%**
- CursorBench 4.0: **41.6%**
- AA Coding Index: **75.8%**

Long context:

- MRCR 256K: **98.5%**, MRCR 512K–1M: **98.1%** (Meta); no independent long-context retrieval run.

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.1 vendor 88.8% and GDPval 1754 Elo are frontier-class, but independent vals.ai run lands lower (72–79%) and Agents' Last Exam is 32.2%.
- **Reasoning: 85/100.** GPQA 94% and HLE 48.7% with AA Index ~62 put it near the top of September 2026 releases.
- **Context window: 95/100.** 1M window with vendor-reported 98.1% MRCR at 512K–1M — best-in-class long-context evidence available.
- **Multimodal: 82/100.** Text/image/video in with strong chart reasoning; audio support is degraded versus 1.2.
- **Coding: 78/100.** DeepSWE 75.4% and AA Coding Index 75.8% are strong; CursorBench 41.6% and no SWE-bench Verified row cap confidence.
- **Cost efficiency: 82/100.** $1.25/$4.25 is mid-tier; Contributor tier at $0.10/$0.20 is extremely cheap but trains on data.
- **Overall Score: 84/100.** Mean of the five quality dims; best fit for long-context agentic coding with strong retrieval at a reasonable price.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-08
- Method: public internet research (Meta launch materials, Artificial Analysis, vals.ai, independent trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
