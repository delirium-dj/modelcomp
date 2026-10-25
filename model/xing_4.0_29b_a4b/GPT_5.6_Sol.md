# Xing4.0-29B-A4B — findings by GPT-5.6 Sol

- Source: XingChen AGI/Xing4.0-29B-A4B
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xing4.0-29B-A4B
- **Short description:** China Telecom AI's Apache-2.0 29B-total, 4B-active text MoE optimized for coding agents, tool use, long context, and efficient local serving.
- **Provider / access:** Weights at `XingChen-AGI/Xing4.0-29B-A4B`; OpenRouter `xingchen-agi/xing4.0-29b-a4b:free`; OpenAI-compatible self-hosting.
- **Release / knowledge:** Open-sourced 2026-09-17; no public knowledge cutoff found.
- **IDs:** `XingChen-AGI/Xing4.0-29B-A4B`; `xingchen-agi/xing4.0-29b-a4b:free`.
- **Context window:** 262,144 tokens native, extensible to 512K; official agent evaluations used 210K-256K.
- **Modalities:** Text input and output; thinking, tool calling, and reasoning parsers.
- **Pricing (as of 2026-10-25):** OpenRouter free route; paid catalog route about $0.22 input / $0.90 output per 1M tokens.
- **Architecture:** Apache-2.0, 29B total / 4B active MoE, 40 layers, 64 routed experts with four active plus one shared expert.

### Raw benchmarks found

Agent / tool use:

- Tau3-Bench: **64.63**; Claw-Eval: **76.55**; Terminal-Bench 2.1: **57.50** averaged over three 24-hour runs; DeepresearchBII: **60.80**.

Reasoning / knowledge:

- AIME 2026: **90.00** averaged over five runs; IFBench: **69.67**.

Coding:

- SWE-bench Verified: **75.00** using SWE-agent at 210K context; SWE-bench Multilingual: **66.00**.

Long context:

- AA-LCR: **61.00** over three runs; native 256K context. No independent exact MRCR/RULER figure found.

### Normalized scores (1–100)

- **Tool use: 77/100.** Claw-Eval 76.55 and Tau3 64.63 are strong, while Terminal-Bench 57.5 keeps it below frontier agents.
- **Reasoning: 75/100.** AIME 90.0 and IFBench 69.67 show strong reasoning and instruction following, with limited broad knowledge evidence.
- **Context window: 73/100.** The native 256K window is substantial and AA-LCR 61 demonstrates useful retrieval, not frontier retention.
- **Multimodal: 15/100.** The exact model is text-only.
- **Coding: 82/100.** SWE-bench Verified 75 and multilingual 66 establish strong coding for a 4B-active model.
- **Cost efficiency: 100/100.** Apache-2.0 weights and a verified free route maximize access efficiency.
- **Overall Score: 64/100.** Half-up mean `(77 + 75 + 73 + 15 + 82) / 5 = 64.4`; a highly efficient text coding agent whose overall is reduced by no multimodality.

### Sources

- Official model card: https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B
- Official repository and evaluation details: https://github.com/XingChen-AGI/Xing4.0-29B-A4B
- OpenRouter route: https://openrouter.ai/xingchen-agi/xing4.0-29b-a4b:free
- Provider catalog cross-check: https://models.dev/api.json

---

## Signature

- Provided by: **GPT-5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-25
- Method: fresh second-pass research using seven exact-name searches, official model card/repository, provider metadata, and harness notes; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
