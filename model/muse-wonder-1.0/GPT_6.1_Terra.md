# Muse Wonder 1.0 — findings by GPT-6.1 Terra

- Source: Meta `muse-wonder-1.0`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0
- **Short description:** Meta's proprietary Wonder model for coding and long-running agents, distinct from Wonder Full. The separately tracked `muse-wonder` entry identifies the same Meta API ID; this is a suspected duplicate, not evidence of another checkpoint.
- **Provider / access:** Meta Model API lists `muse-wonder-1.0`; Muse Code also provides access. The exact OpenCode route and API endpoint are not independently verified.
- **Release / knowledge:** Introduced 2026-10-12; knowledge cutoff not verified.
- **IDs:** Meta `muse-wonder-1.0`; no Zen Free ID verified.
- **Context window:** Meta advertises 1M tokens; Vals reports 131k maximum output. An exact total-token accounting limit is not established here.
- **Modalities:** Vals reports multimodal evaluation and Meta describes computer use; exact supported input modalities and output beyond text are not established by the cited model page. Tool use is supported.
- **Pricing (2026-11-01):** Meta lists $4 input, $0.20 cached input and $20 output per million tokens; paid API. Wonder Full is subscription-only and has different access terms.
- **Architecture:** Proprietary; parameter counts not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **49.49% ± 2.20**, Vals independent evaluation; not comparable as the same benchmark version or harness to Terminal-Bench 2.1.
- Meta reports Terminal-Bench 4.0-AA **52.0%**, OSWorld 2.1 **72.6% partial / 34.3% binary**, and JobBench **70.5%**, all on Wonder max; these are vendor-reported settings.
- Tau3-Banking, GDPval-AA, Claw-Eval and Toolathon: no verified public score found.

Reasoning / knowledge:

- Vals Index **64.88% ± 1.07** and ProofBench v1.1 **84.00% ± 3.69** (Vals); not direct GPQA or HLE equivalents.
- Meta reports Artificial Analysis Intelligence Index **52** for Wonder max. GPQA Diamond, HLE, CritPt and long-context retrieval: no verified public score found.

Coding:

- Vals Vibe Code Bench v1.1 **83.09% ± 2.49** and Code Migration v1.1 **72.36% ± 3.19**.
- Meta reports DeepSWE 1.1 **78.8%** and SWE-Marathon **53.1%** for Wonder max. SWE-bench Verified and LiveCodeBench: no verified public score found.

Long context:

- Advertised 1M context; no verified long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 4.0 and OSWorld results support strong agent ability, capped by harness differences and unverified Tau results.
- **Reasoning: 86/100.** Index 52 and Vals ProofBench support strong reasoning; provisional without directly verified GPQA or HLE scores.
- **Context window: 96/100.** Meta advertises 1M; no verified 512K-plus retrieval result supports the maximum.
- **Multimodal: 65/100.** Computer-use evidence supports visual capability; provisional because the complete modality list is not verified here.
- **Coding: 91/100.** DeepSWE 1.1 and independent Vals coding results support high coding capability; vendor settings and benchmark versions limit direct comparison.
- **Cost efficiency: 55/100.** Paid $4/$20 per million is expensive, though cached inputs are discounted.
- **Overall Score: 85/100.** Half-up mean of the five quality scores; suited to complex agentic coding where cost is acceptable.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Public vendor and independent evaluation research; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [Meta Wonder model and pricing](https://dev.meta.ai/models/muse-wonder/)
  - [Meta Wonder announcement](https://research.meta.ai/blog/introducing-muse-wonder/)
  - [Vals Wonder evaluation](https://www.vals.ai/models/meta_muse-wonder)
- Future sources: add a separate signed findings file alongside this one.
