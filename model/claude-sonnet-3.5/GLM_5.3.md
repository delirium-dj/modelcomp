# Claude Sonnet 3.5 — findings by GLM 5.3

- Source: Anthropic (`anthropic/claude-3-5-sonnet`, snapshots `claude-3-5-sonnet-20240620` / `claude-3-5-sonnet-20241022`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.5 (Claude 3.5 Sonnet)
- **Short description:** Anthropic's mid-2024 workhorse Sonnet generation — balanced text/image reasoning and coding for its era; the October 2024 snapshot introduced computer use. Retired from the Anthropic API on 2025-10-28. Top use case (historical): legacy-workload reference point; replaced by `claude-sonnet-4-6`.
- **Provider / access:** formerly Anthropic API / Bedrock / Vertex (Messages API); both snapshots retired October 28, 2025 (Anthropic deprecations page) — no first-party access remains.
- **Release / knowledge:** snapshots dated 2024-06-20 (v1) and 2024-10-22 (upgraded, computer use); knowledge cutoff April 2024 (vendor-documented era)
- **IDs:** `claude-3-5-sonnet-20240620`, `claude-3-5-sonnet-20241022` (both retired; no Zen Free ID ever existed — `noFreeId`)
- **Context window:** 200K total; 64K max output (folder meta.json, matching Anthropic's documented specs)
- **Modalities:** text + image in; text out; non-reasoning (no thinking mode — predates extended thinking); tool use / function calling; computer use beta (Oct 2024 snapshot); JSON mode
- **Pricing (historical, as of 2026-10-01):** paid $3 / 1M input, $15 / 1M output — the exact "$3/$15 ≈ 60" reference point in the v1 cost methodology; no longer purchasable first-party since retirement.
- **Architecture:** proprietary; parameters undisclosed

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (predates the benchmark)
- Tau3-Banking / Tau2-Bench: **no verified public score found** (era Tau-bench numbers not located on tracked aggregators in this pass)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / OSWorld: **no verified public score found** in this pass (computer-use-era OSWorld numbers not re-verified)

Reasoning / knowledge:

- GPQA Diamond: **59.4%** (BenchLM)
- HLE: **no verified public score found** (predates benchmark)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: BenchLM overall **29.6 / #175 of 637** (non-reasoning class; only 4 benchmarks covered — conservative)
- FrontierMath v2: **2.07%** (Tiers 1–3) / **0.0%** (Tier 4) (BenchLM)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **49%** (BenchLM; matches the widely reported October 2024 snapshot figure — half of its era's leaderboard, mid-tier today)
- LiveCodeBench: **no verified public score found**
- SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- no long-context retrieval score found (200K window documented; no MRCR/RULER/GraphWalks value for this ID on tracked aggregators)

Multimodal:

- no verified public vision benchmark found in this pass (image input documented; no MMMU / MMMU-Pro row located)

### Normalized scores (1–100)

- **Tool use: 50/100.** Zero verified agentic/terminal scores located on current aggregators (the model predates TB/GDPval); tool calling and the first computer-use beta are documented capabilities — provisional mid-low score for an era when agentic harnesses were far weaker.
- **Reasoning: 55/100.** GPQA Diamond 59.4% sits right at the bottom edge of the v1 mid band (GPQA 60–80% → 55–65), and FrontierMath v2 is near zero (2.07%/0%); a non-reasoning model with no thinking mode caps here.
- **Context window: 70/100.** 200K total — the explicit "200K = 70" tier anchor; 64K max output noted as caveat.
- **Multimodal: 65/100.** Text + image input with strong-for-era Claude vision (documented capability); image-in tier score, capped by no verified current-aggregator vision number and text-only output.
- **Coding: 62/100.** SWE-bench Verified 49% was best-in-class in October 2024 but is mid-tier on today's curve (peer median ~77%); no LiveCodeBench/SciCode rows found to lift it.
- **Cost efficiency: 60/100.** $3/$15 per 1M is the literal "$3/$15 = ~60" reference in the v1 methodology; retirement means no batch/caching discounts remain available first-party.
- **Overall Score: 60/100.** (50 + 55 + 70 + 65 + 62) / 5 = 60.4 → 60. Best fit: historical reference point for 2024-era agentic coding and vision; every active model in this dataset now outperforms it — use `claude-sonnet-4-6` (Anthropic's recommended replacement) for any real workload.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-01 UTC
- Method: public internet research (BenchLM, Anthropic model-deprecations docs, folder meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
