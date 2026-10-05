# Muse Glimmer 30B — findings by GPT 6 Astra

- Source: Meta / Muse Glimmer 30B
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Name:** Muse Glimmer 30B.
- **Short description:** Open-weight agent model distilled from Muse Spark.
- **Architecture / release / knowledge:** Dense 29.6B including perception encoder; Apache 2.0; August 2026; January 4, 2026 cutoff. [Meta card](https://huggingface.co/meta-models/Muse-Glimmer-30B)
- **Provider / IDs:** OpenRouter Chat Completions `meta/muse-glimmer-30b`; weights `meta-models/Muse-Glimmer-30B`. No verified Zen Free ID.
- **Context window:** 131,072 tokens; provider advertises the same completion ceiling, subject to the combined context budget.
- **Modalities:** Text/image input, text output; reasoning, function calling, schema outputs.
- **Pricing (2026-10-05):** Paid Phala route $0.30 input / $1.10 output / $0.04 cache read per million; other providers differ. [Provider specifications and prices](https://openrouter.ai/meta/muse-glimmer-30b)

### Raw benchmarks found

Meta's high-reasoning evaluation: MCP-Atlas 75.5%; DeepSearchQA 74.6%; Tau3-Banking 23.5%; GDPval-AA v2 953; OSWorld-Verified 65.9%; SWE-bench Pro 51.2%, Verified 76.0%; Terminal-Bench 2.1 with Terminus2 51.7%; SciCode 43.6%; AIME 2026 94.7%; GPQA Diamond 83.5%; HLE text 22.0%; AA-LCR 80.0%; Beam128K 65.1%; MMMU Pro 74%. Vendor-reported, with scaffold differences; no independent rank asserted. [Benchmark table](https://huggingface.co/meta-models/Muse-Glimmer-30B)

Claw-Eval, Toolathon, CritPt, Omniscience, LiveCodeBench, Vibe Code Bench: no verified public score found.

### Normalized scores (1–100)

Interpretations under the linked methodology; benchmark percentages are not normalized scores.

- **Tool use: 74/100.** MCP performance is strong; banking and terminal results cap reliability.
- **Reasoning: 76/100.** Strong mathematics and GPQA, limited HLE.
- **Context window: 64/100.** 131K capacity with measured retrieval evidence; below larger-window tiers.
- **Multimodal: 75/100.** Image understanding supported by MMMU; no native audio output.
- **Coding: 76/100.** Verified and Pro results support practical coding; terminal tasks remain weaker.
- **Cost efficiency: 95/100.** Low paid token prices; self-hosting still requires compute.
- **Overall Score: 73/100.** Half-up mean: (74 + 76 + 64 + 75 + 76) / 5 = 73. Suitable for economical local or hosted visual agents.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-05 UTC
- Method: Fresh public primary-source research; scores are normalized interpretations, not official vendor scores.

