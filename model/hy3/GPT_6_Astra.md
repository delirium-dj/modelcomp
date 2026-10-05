# Tencent Hy3 — findings by GPT 6 Astra

- Source: Tencent / Hy3
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [findings](../../model-findings.md)

## Model card

- **Name:** Hy3, official release (not Hy3 Preview).
- **Short description:** Open-weight text model for reasoning, software engineering and agents.
- **Provider / access / IDs:** OpenRouter Chat Completions `tencent/hy3`; weights `tencent/Hy3`, locally served through compatible Chat Completions. No verified Zen Free ID found. [Hosted API](https://openrouter.ai/tencent/hy3), [weights](https://huggingface.co/tencent/Hy3)
- **Release / knowledge:** July 6, 2026; knowledge cutoff not verified. [Tencent announcement](https://www.tencent.com/tencent-hunyuan-officially-releases-hy3-advancing-agent-capabilities-and-deeper-product-integration/)
- **Context window:** 256K (262,144 tokens); separate maximum output not verified. [Model card](https://huggingface.co/tencent/Hy3)
- **Modalities:** Text input/output; no-think, low and high reasoning modes; tool calling. JSON/schema behavior depends on hosting configuration. [Model card](https://huggingface.co/tencent/Hy3)
- **Pricing (2026-10-05):** Paid OpenRouter Tencent Cloud route: $0.132 input / $0.528 output / $0.033 cache reads per million tokens. Open weights do not imply free hosted compute. [Provider prices](https://openrouter.ai/tencent/hy3)
- **Architecture:** Apache-2.0 MoE, 295B total / 21B active, plus 3.8B MTP parameters. [Model card](https://huggingface.co/tencent/Hy3)

### Raw benchmarks found

Model-card evaluation entries are community-transcribed publisher results, not independent reruns; the provenance explicitly says they were extracted from the card. [Results](https://huggingface.co/tencent/Hy3), [extraction provenance](https://huggingface.co/tencent/Hy3/discussions/8)

| Group | Benchmark | Result |
|---|---|---:|
| Reasoning | GPQA Diamond | 90.4% |
| Coding | SWE-bench Verified | 78.0% |
| Coding | SWE-bench Pro | 57.9% |
| Coding | DeepSWE | 28.0% |
| Agent | SkillsBench v1.1 | 55.3% |

- **Terminal-Bench 2.1:** 71.7%, separately submitted community evaluation; harness details were not recovered, so treated provisionally. [Evaluation submission](https://huggingface.co/tencent/Hy3/discussions/25), [displayed result](https://huggingface.co/tencent/Hy3)
- **Real-work evaluation:** Tencent reports 2.67/4 from 270 expert participants; internal evaluation, not a public standardized agent benchmark. [Model card](https://huggingface.co/tencent/Hy3)
- **Long context:** Qualitative MRCR improvement reported; no verified numeric retrieval result recovered.
- **Missing:** Tau3/Tau2, GDPval-AA, Claw-Eval, Toolathlon, MCP-Atlas, exact HLE result, CritPt, AA Intelligence Index, Omniscience, LiveCodeBench, SciCode and Vibe Code Bench: no verified public score found in this pass.

### Normalized scores (1–100)

- **Tool use: 70/100.** SkillsBench and provisional terminal evidence support capable agents; incomplete harness details cap confidence.
- **Reasoning: 78/100.** Strong GPQA, with insufficient independently verified breadth to justify a frontier score.
- **Context window: 75/100.** Documented 256K capacity; no quantified retrieval evidence supports an uplift.
- **Multimodal: 15/100.** Text-only model.
- **Coding: 78/100.** Strong repository repair results, tempered by the harder DeepSWE score and publisher-reported provenance.
- **Cost efficiency: 98/100.** Low paid token rates and open deployment options, with nonzero infrastructure expense.
- **Overall Score: 63/100.** Half-up mean: (70 + 78 + 75 + 15 + 78) / 5 = 63.2. Cost-effective text coding and agent workloads.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-05 UTC
- Method: Fresh public web research; normalized scores are interpretations, not official vendor scores.
- Future sources: add a separate signed report alongside this file.
