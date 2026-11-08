# Muse Wonder — findings by Beam

- Source: Meta / Muse Wonder (`muse-wonder-1.0`, Meta Model API)
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-11-01)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder (Meta Muse Wonder series; standard tier; distinct from Muse Wonder Full)
- **Short description:** Meta's frontier model for personal and professional agentic tasks, combining Active Memory and Active Focus to carry important context across conversations and work diligently toward user goals. Released 2026-10-12 alongside Muse Wonder Full, a material jump over Muse Spark 1.3.
- **Provider / access:** Meta Model API (OpenAI-compatible) and Muse Code; Muse Wonder Full is Muse Code subscription-only.
- **Release / knowledge:** Released 2026-10-12. Knowledge cutoff not stated.
- **IDs:** `muse-wonder-1.0` (Meta Model API). No Zen Free ID confirmed.
- **Context window:** 1,000,000 tokens total (1M), unchanged from Muse Spark 1.3.
- **Modalities:** Input text, image, video, audio; output text. Reasoning effort scaling (max) supported; tool calls.
- **Pricing (as of 2026-11-08):** $4.00 / 1M input, $0.20 / 1M cached input, $20.00 / 1M output. Muse Wonder Full not priced per token.
- **Architecture:** Proprietary; trained at Meta Prometheus data center; larger/stronger base than Muse Spark 1.3. Params not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 4.0 (AA): **52.0%** (Muse Wonder max) vs Muse Spark 1.3 max 33% (+19 pts).
- AutomationBench-AA: **68%** vs Spark 1.3 58%.
- OSWorld V2.1: **39.1%** partial / 34.3% binary.
- JobBench: **70.5%**.
- MemoryBench: **34.3%** binary.
- Claw-Eval / Toolathlon / MCP-Atlas: no verified public score found.
- BenchLM aggregator (2026-11-07): no dedicated page found (404); no new verified rows beyond existing sources.

Reasoning / knowledge:

- AA Intelligence Index v4.3: **52** (max) vs Spark 1.3 max 48; Full 56.
- AA-Omniscience: **25** accuracy, hallucination **27%** (third-lowest among high scorers).
- GPQA Diamond / HLE: no verified public score found.
- CritPt / SciCode: only Full published (33% / 63%).

Coding:

- DeepSWE 1.1: **78.8%**.
- SWE-Marathon: **53.1%**.
- ProgramBench: **50.0%**.
- AA Coding Agents Index: **63** vs Spark 1.3 54; Full 68.
- SWE-bench Verified / LiveCodeBench: no verified public score found.

Long context:

- No dedicated MRCR/RULER/GraphWalks value; 1M window supported.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 92/100.** Agentic gains (Terminal-Bench 33%→52%, AutomationBench 58%→68%, JobBench 70.5%, Coding Agents 63); capped by incomplete GDPval/OSWorld and no Toolathon/MCP-Atlas. Enrichment (2026-11-08): BenchLM aggregator had no dedicated page (404); no new verified rows. No change.
- **Reasoning: 92/100.** AA Intelligence Index 52 (up from 48) and low hallucination (27%); capped by unpublished GPQA/HLE and knowledge a relative weakness (Omniscience 25).
- **Context window: 100/100.** 1M-token window; top tier.
- **Multimodal: 88/100.** Text/image/video/audio input, text output; capped by text-only output and limited vision evals.
- **Coding: 92/100.** DeepSWE 78.8%, SWE-Marathon 53.1%, Coding Agents 63; capped by no SWE-bench Verified/LiveCodeBench.
- **Cost efficiency: 60/100.** Paid $4/$20 per 1M, $4.52 per AA task (2.8x Spark 1.3's $1.60) due to high input token use (7.69M/task).
- **Overall Score: 93/100.** (92 + 92 + 100 + 88 + 92) / 5 = 92.8 → 93. Best-fit for long-horizon agentic work and computer use; escalate to Muse Wonder Full for max coding. Enrichment (2026-11-08): BenchLM aggregator had no dedicated page (404); no new verified rows. Overall unchanged at 93.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-11-01 preserved; BenchLM aggregator checked (no dedicated page found, 404); no new verified rows; no dimension score changed.
- Reference URLs:
  - [Muse Wonder — Meta AI Research blog](https://research.meta.ai/blog/muse-wonder)
  - [Muse Wonder — Meta Developer docs](https://dev.meta.ai/models/muse-wonder)
  - [Muse Wonder & Muse Wonder Full — Artificial Analysis](https://artificialanalysis.ai/articles/muse-wonder)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).