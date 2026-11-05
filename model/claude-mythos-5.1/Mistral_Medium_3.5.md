# Claude Mythos 5.1 — findings by Mistral Medium 3.5

- Source: Anthropic/Claude Mythos 5.1
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's most capable frontier model for coding and knowledge work, with advanced cybersecurity and biology research capabilities. Identical underlying model to Claude Fable 5.1 but with looser cybersecurity and biology safeguards, available only through trusted access programs (Cyber Verification Program, Life Sciences Verification Program).
- **Provider / access:** `anthropic/claude-mythos-5-1` via Anthropic API (Messages API) — restricted access
- **Release / knowledge:** September 1, 2026
- **IDs:** `anthropic/claude-mythos-5-1`
- **Context window:** 1,000,000 tokens (1M) with 128,000 token max output; same as Fable 5.1
- **Modalities:** text + image input; text output; adaptive thinking; tool calls; JSON mode; same modality support as Fable 5.1
- **Pricing (as of 2026-11-05):** Same as Fable 5.1: $10.00 / $50.00 per 1M input/output tokens; cached input tokens at $0.25 per 1M (75% discount)
- **Architecture:** Proprietary Mythos-class; identical to Fable 5.1; no verified public parameter count

### Raw benchmarks found

> **Important note:** Claude Mythos 5.1 and Claude Fable 5.1 share the same underlying model. Benchmark gaps between them reflect tasks where Fable 5.1's safeguards intervene and route to less capable models (Opus 4.8 for cybersecurity, Opus 5 for biology). Mythos 5.1 shows the model's full capability without these safeguard interventions.

Agent / tool use:

- Terminal-Bench 4.0: **60.9%** (source: BenchmarkList; reflects fewer cyber-safeguard interventions vs. Fable 5.1's estimated ~55.8%)
- Terminal-Bench 2.1: **88.0%** (source: DataCamp; compares to Opus 4.8 at 82.7%)
- AutomationBench: **no verified public score found** (Fable 5.1 scored 31.4%; Mythos likely higher without safeguards)
- GDPval-AA: **no verified public score found**
- ExploitBench: **78.0%** (vs. 40.0% for Fable due to safeguard routing; source: DataCamp)
- CyberGym: **pass@1 not publicly verified** (substantially outperforms Opus 5 on internal cyber evaluations per system card)
- OSS-Fuzz, Firefox 147, ExploitGym: **strongest overall cyber capabilities** of any released model (per Anthropic system card)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found** (Fable 5.1: 60.9% without tools, 65.0% with tools)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no independent score / unranked** (same capability as Fable 5.1 but without safeguard drag)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **no verified public score found** (Fable 5.1 estimated 95%; Mythos likely similar)
- SWE-bench Pro: **80.3%** (source: DataCamp, Vellum; Mythos leads with unblocked cyber capability)
- LiveCodeBench: **no verified public score found** (Fable 5.1: 90.52%)
- DeepSWE: **no verified public score found**
- FrontierCode: **no verified public score found**

Long context:

- 1M token context verified; same as Fable 5.1

### Normalized scores (1–100)

- **Tool use: 96/100.** Exceptional agentic performance without safeguard drag: 60.9% Terminal-Bench 4.0, 88.0% Terminal-Bench 2.1, 78.0% ExploitBench, strongest cyber capabilities of any released model. Capped only by restricted access.
- **Reasoning: 96/100.** Identical underlying reasoning to Fable 5.1 (65.7 AA Index, 97.5% ARC-AGI-1) but without safeguard penalties on sensitive tasks. Capped by limited independent benchmarking due to restricted access.
- **Context window: 100/100.** 1M token context window identical to Fable 5.1. Maximum tier.
- **Multimodal: 90/100.** Same text + image multimodal capabilities as Fable 5.1. Capped by not covering audio/video.
- **Coding: 98/100.** Strongest coding capability when unblocked: 80.3% SWE-bench Pro (leads field), with unfiltered access to full model capability on cyber-related coding tasks. Capped only by restricted availability.
- **Cost efficiency: 85/100.** Same pricing as Fable 5.1 ($10/$50 per 1M tokens) but with more complete capability access. Competitive at frontier level.
- **Overall Score: 96/100.** Mythos-class capability represents the highest raw performance in the Claude family; restricted access and safeguard-free nature prevent broader deployment.

---

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/Mistral-Medium-3.5)** — 2026-11-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Mythos 5.1 — Anthropic](https://www.anthropic.com/claude/mythos)
  - [Introducing Claude Fable 5.1 and Claude Mythos 5.1 — Anthropic](https://www.anthropic.com/claude-fable-and-mythos-5-1)
  - [Claude Fable 5.1 & Mythos 5.1 System Card (PDF)](https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20&%20Claude%20Mythos%205.1%20System%20Card.pdf)
  - [Claude Mythos 5: Features, Benchmarks & Capabilities — DataCamp](https://www.datacamp.com/blog/claude-mythos-5)
  - [BenchmarkList — Claude Mythos 5.1](https://benchmarklist.com/models/anthropic-claude-mythos-5-1/)
  - [Claude Mythos Benchmarks — MindStudio](https://www.mindstudio.ai/blog/claude-mythos-benchmark-results-swe-bench)
  - [Claude Fable 5 & Mythos 5 Full Benchmark Breakdown — Vellum](https://www.vellum.ai/blog/claude-fable-5-and-mythos-5-benchmarks-explained)
  - [Claude Mythos 5.1 — Wikipedia](https://en.wikipedia.org/wiki/Claude_Mythos)
  - [Claude Mythos 5.1: what it is, who gets access — eesel AI](https://www.eesel.ai/blog/claude-mythos-5-1)
  - [Anthropic Transparency Hub](https://www.anthropic.com/transparency)
