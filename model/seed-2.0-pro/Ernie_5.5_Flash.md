# Seed 2.0 Pro — findings by Ernie 5.5 Flash

- Source: ByteDance/Seed 2.0 Pro (`seed-2.0-pro`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Seed 2.0 Pro
- **Short description:** ByteDance's flagship general-purpose agent model (released 2026-02-14) from the Seed 2.0 series, built for long-chain reasoning and complex multimodal workflows with a 256K context.
- **Provider / access:** ByteDance Volcano Engine / Doubao (`doubao-seed-2.0-pro`), DeepInfra (`ByteDance/Seed-2.0-pro`), Requesty, Empirio Labs, Merge Gateway, OFox, plus ~6 routes.
- **Release / knowledge:** 2026-02-14; knowledge cutoff not published.
- **IDs:** `seed-2.0-pro`, `bytedance/seed-2.0-pro`, `dola-seed-2.0-pro`, `doubao-seed-2.0-pro`.
- **Context window:** 229,096 (models.dev) / 256,000 (DeepInfra and most gateways); max output 128,000.
- **Modalities:** text, image and video in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $0.50–$0.63 / $3.00–$3.79 per 1M input/output; cached input $0.10–$0.63.
- **Architecture:** proprietary (ByteDance does not publish sizes for the Pro tier).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench / Toolathlon / OSWorld / MCP-Atlas: no verified public rows published for Seed 2.0 Pro
- Claw-Eval / ClawProBench: no verified public score found
- BenchLeader Index: **58.4** (composite, 593 ranked configurations; best in coding 65, weakest in multimodal 61)

Reasoning / knowledge:

- AIME 2025: **98.3** (opper.ai aggregator, vendor-derived)
- HMMT: **97.3** (opper.ai aggregator, vendor-derived)
- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published

Coding:

- SWE-bench Verified / SWE-bench Pro / DeepSWE / LiveCodeBench: no verified public rows published
- rankllms reports "SWE-bench N/A" for this model
- BenchLeader coding sub-score: **65** (composite)

Long context:

- 229K–256K context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 70/100.** No public terminal/OSWorld/Toolathlon row exists for Seed 2.0 Pro; the score is derived from ByteDance's "agent model" positioning and the BenchLeader composite — low confidence.
- **Reasoning: 92/100.** AIME 2025 98.3 and HMMT 97.3 are the strongest verified competition-math figures in this dataset; the absence of GPQA/HLE/FrontierMath rows is the only thing keeping it lower.
- **Context window: 80/100.** 229,096–256,000 tokens — the smallest window among the 2026 flagships in this dataset.
- **Multimodal: 75/100.** Text, image and video in, but BenchLeader scores multimodal as its weakest axis (61) and no public video-understanding row exists.
- **Coding: 72/100.** No SWE-bench row was published ("N/A" per rankllms); the score rests on BenchLeader's coding sub-score of 65 — low confidence.
- **Cost efficiency: 90/100.** $0.50–$0.63 / $3.00–$3.79 per 1M with $0.10 cached input.
- **Overall Score: 77.8/100.** Best fit for competition-level math and long-chain reasoning on ByteDance's platform; verify agentic and coding behaviour yourself, since no public rows exist.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (ByteDance Seed 2.0 official site, opper.ai and BenchLeader aggregator entries, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [ByteDance Seed 2.0 — official site](https://seed.bytedance.com/en/seed2)
  - [Seed 2.0 Pro pricing & benchmarks — opper.ai](https://opper.ai/bytedance/seed-2.0-pro)
  - [Dola Seed 2.0 Pro — BenchLeader](https://www.benchleader.com/models/dola-seed-2-0-pro)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Seed_2.0_Pro_v2.md`, using the same headings.