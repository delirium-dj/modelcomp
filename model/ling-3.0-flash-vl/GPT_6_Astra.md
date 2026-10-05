# Ling 3.0 Flash VL — findings by GPT 6 Astra

- Source: InclusionAI / Ling-3.0-flash-VL
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Name:** Ling 3.0 Flash VL; distinct visual extension of Flash.
- **Architecture:** MIT open weights; 124B total, 5.5B active MoE with visual encoder and hybrid attention.
- **IDs / access:** Weights `inclusionAI/Ling-3.0-flash-VL`; SGLang/vLLM Chat Completions. Thinking and tool parsers supplied. No verified Zen Free ID.
- **Context window:** 262,144 with documented YaRN configuration; original position limit 131,072. Do not assume default serving exposes the extended window.
- **Modalities:** Text/image/video in, text out; thinking and tool calls. [Publisher card](https://huggingface.co/inclusionAI/Ling-3.0-flash-VL)
- **Release / knowledge:** Available on Novita September 9, 2026; cutoff not verified.
- **Hosted access:** Novita `inclusionai/ling-3.0-flash-vl`, Chat Completions and Anthropic-compatible APIs, 262,144 context / 32,768 output. Its free promotion expired September 23. [Provider announcement](https://blogs.novita.ai/ling-3-0-flash-vl-on-novita-ai-launch-pricing/)
- **Pricing (2026-10-05):** AA lists $0.075 input / $0.22 output per million with 80% cache discount; not verified as Novita's current tariff. Cost assessment provisional on this evaluator-tracked price. [AA model page](https://artificialanalysis.ai/models/ling-3-0-flash-vl)

### Raw benchmarks found

- Publisher reports AA Intelligence Index v4.1.1 42. [Model card](https://huggingface.co/inclusionAI/Ling-3.0-flash-VL)
- Current AA index 25; index revisions prevent direct comparison with 42. [Evaluator](https://artificialanalysis.ai/models/ling-3-0-flash-vl)
- GDPval-AA v2 1225 Elo; AA-Briefcase 986; AutomationBench-AA 16%; Terminal-Bench v4.0 0%. These are evaluator-published VL comparison values, not the Fin model's scores. [AA evaluation](https://artificialanalysis.ai/articles/ant-group-releases-finance-focused-ling-3-0-flash-fin)
- GPQA, HLE, Tau3, Terminal-Bench 2.1, Claw-Eval, MCP-Atlas, CritPt, SWE-bench, LiveCodeBench, SciCode and Vibe Code Bench: no verified public score found in accessible primary text.
- Long context: no verified retrieval score found.

### Normalized scores (1–100)

- **Tool use: 60/100.** Professional task performance is useful; automation and difficult terminal results cap confidence.
- **Reasoning: 65/100.** Current index supports mid-tier reasoning; older index is not interchangeable.
- **Context window: 75/100.** Documented 262K deployment; no retrieval premium.
- **Multimodal: 85/100.** Native image/video input, text output.
- **Coding: 50/100.** Provisional: measured difficult terminal performance is weak, and repository benchmarks remain unverified.
- **Cost efficiency: 98/100.** Very low evaluator-tracked paid prices; expired promotion not scored as free.
- **Overall Score: 67/100.** Half-up mean: (60 + 65 + 75 + 85 + 50) / 5 = 67. Best supported for economical visual workflows.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-05 UTC
- Method: Fresh public primary-source research; scores are normalized interpretations, not official scores.

