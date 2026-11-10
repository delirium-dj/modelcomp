# Grok 4.7 — findings by Fledge Alpha

- Source: xAI (`grok-4.7`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** xAI/SpaceXAI's Sept 2026 frontier model for coding and knowledge work, larger base + longer RL run than Grok 4.6, same price.
- **Provider / access:** Grok API (`grok-4.7`), Cursor, Grok Build; Responses-compatible routers.
- **Release / knowledge:** 2026-09-21; knowledge cutoff ~May–Jun 2026 (sources differ).
- **IDs:** `x-ai/grok-4.7`
- **Context window:** 500,000 tokens; prompts ≥200K billed at 2x rates.
- **Modalities:** text + image in; text out; reasoning effort low→xhigh.
- **Pricing (as of 2026-10-02):** $2/M input, $0.50/M cached, $6/M output (<200K tokens); $4/$12 at ≥200K; Fast variant 2x.
- **Architecture:** proprietary, undisclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **37.6%** at xhigh (xAI, vs 20.3% for 4.6)
- Terminal-Bench 2.1: **73.4%** (vals.ai, xhigh)
- AA-Briefcase v1.1: **1657 Elo** (Artificial Analysis)
- HealthBench Professional: **56.7%**; Harvey Legal Agent: **19.6%**
- τ³-Banking: **33%** (#1 of 28) — noted in third-party listing, treated cautiously

Reasoning / knowledge:

- AA Intelligence Index: **46** at xhigh (vs 44 for 4.6)
- Humanity's Last Exam: **43.1%** at xhigh (Artificial Analysis)
- LiveBench: **77.4**
- GDPval-AA v2: **1695 Elo**

Coding:

- CursorBench 4.0: **46.3%** (xAI)
- DeepSWE v1.1: **71.0%** at high effort (xAI; vendor-run)
- AA Coding Agent Index: **56** with Grok Build (vs 47 for 4.6)
- SWE-Atlas-QnA: **63%**

Long context:

- 500K window, unchanged from 4.6; no public MRCR/needle result.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 4.0 nearly doubling to 37.6% and AA-Briefcase 1657 Elo show strong agent gains; HLE-with-tools not published.
- **Reasoning: 78/100.** HLE 43.1% and LiveBench 77.4 are top-4-lab tier; Intelligence Index 46 is solid but trails leaders.
- **Context window: 82/100.** 500K window is mid-pack versus 1M-class rivals, with a 200K price cliff.
- **Multimodal: 65/100.** Text and image input; text-only output.
- **Coding: 80/100.** DeepSWE 71.0% and CursorBench 46.3% at the frontier of price-performance; Terminal-Bench 4.0 37.6% still mid-field.
- **Cost efficiency: 82/100.** $2/$6 with 90% cache discount is aggressive; high token usage at xhigh (~81k out/task) erodes it.
- **Overall Score: 77/100.** Mean of the five quality dims; best fit for cost-sensitive coding agents that tolerate 500K context.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (xAI launch post, Artificial Analysis, vals.ai, independent trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
