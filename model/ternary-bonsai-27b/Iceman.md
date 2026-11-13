# Ternary Bonsai 27B — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `ternary-bonsai-27b` (Ternary Bonsai 27B, OpenCode listing) — folder: `model/ternary-bonsai-27b`

## Overall
- **Overall Score: 52.2/100.** Described in repo metadata as a 27B ternary-quantized text model optimized for efficient inference, but I could not retrieve verifiable primary public documentation, benchmarks, or detailed specs in this pass, so this assessment is low-confidence.

## Scores
- **Tool use: 55/100.** No verifiable primary documentation was found confirming native tool-calling/function-calling capabilities; any tool use would depend on the serving/runtime integration rather than confirmed model-native features.
- **Reasoning: 58/100.** A 27B-class model may handle general reasoning tasks, but without published evaluations or model cards I cannot substantiate reasoning quality for this specific variant.
- **Context window: 70/100.** Repo metadata states 128,000 total context; this was not independently verified from a fetched primary source in this run.
- **Multimodal: 20/100.** Repo metadata indicates text in/out only, with no evidence of image/audio/video support.
- **Coding: 58/100.** Possibly suitable for lightweight coding assistance depending on implementation, but no coding benchmarks or detailed capability reports were verified.
- **Cost efficiency: 75/100.** Ternary quantization is positioned for efficient inference and repo metadata notes open-weights/self-host potential ($0 self-host) or hosted API pricing, which could be cost-effective if available; details are unverified.
- **Overall Score: 62/100.** Potentially efficient text-only model by metadata claims, but limited verifiable public information means this should be treated as provisional pending primary sources.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://opencode.ai
  - https://opencode.ai/docs/zen/

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/ternary-bonsai-27b/meta.json
field: statusNote
proposed: Limited verifiable primary public documentation/specs/benchmarks found for this model as of 2026-11-13; confirm architecture, context, licensing, and capabilities from authoritative sources.
source: https://opencode.ai, https://opencode.ai/docs/zen/ (no specific model page found)
```
