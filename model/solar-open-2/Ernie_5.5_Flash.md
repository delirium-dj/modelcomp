# Solar Open 2 — findings by Ernie 5.5 Flash

- Source: Upstage/Solar Open 2 (`solar-open-2`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Open 2
- **Short description:** Upstage's open-weight Solar model (released 2026-07-22) for coding and general reasoning, with unusually strong competition-math results.
- **Provider / access:** Self-hosted (Hugging Face `upstage/solar-open-2`), plus hosted lanes. Open weights.
- **Release / knowledge:** 2026-07-22; knowledge cutoff not published.
- **IDs:** `solar-open-2`, `upstage/solar-open-2`.
- **Context window:** Not published in the sources reached for this model — treat as unverified (do not infer from the Solar family).
- **Modalities:** Not published for this checkpoint — unverified.
- **Pricing (as of 2026-11-11/12):** Not verified; open weights.
- **Architecture:** open-weight dense/MoE not published (Upstage Solar line).

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **58.2%**; terminalBenchHard: **28.3%**; APEX-Agents: **16.6%** (near-floor)
- Terminal-Bench / Toolathlon / OSWorld: no verified public rows published

Reasoning / knowledge:

- HMMT Feb 2026: **93.9%** (best-in-class competition math)
- GPQA Diamond: **86.3%**; MMLU-Pro: **86.2%**; IFBench: **80%**; HLE without tools: **28.8%**

Coding:

- LiveCodeBench v6: **92.4%** (best verified LCB row in this batch)
- SWE-bench Verified: **70.4%**
- SWE-bench Pro / DeepSWE: no verified public rows published

Long context:

- No context window or MRCR / RULER / GraphWalks row published for this checkpoint

### Normalized scores (1–100)

- **Tool use: 60/100.** MCP Atlas 58.2% is mid and APEX-Agents 16.6% / terminalBenchHard 28.3% are near-floor.
- **Reasoning: 80/100.** HMMT Feb 2026 93.9%, GPQA 86.3% and MMLU-Pro 86.2% are excellent, HLE 28.8% is the weak row.
- **Context window: 50/100.** No context window is published for this checkpoint — scored at the unverified midpoint.
- **Multimodal: 50/100.** No modality claim is published — scored at the unverified midpoint.
- **Coding: 80/100.** LiveCodeBench v6 92.4% is the best verified LCB figure here and SWE-bench Verified 70.4% is decent.
- **Cost efficiency: 85/100.** Open weights with no verified rate.
- **Overall Score: 64.0/100.** Best fit for competition math and code generation on self-hosted hardware; two dims are unverified, so treat as provisional.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (Upstage Solar model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Solar Open 2 — Upstage / Hugging Face](https://huggingface.co/upstage/solar-open-2)
  - [Solar Open 2 benchmarks & sources — BenchLM](https://benchlm.ai/models/solar-open-2)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Solar_Open_2_v2.md`, using the same headings.