# Mistral Medium 3.5 — findings by GPT 6 Astra

- Source: Mistral AI / Mistral-Medium-3.5-128B
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [findings](../../model-findings.md)

## Model card

- **Name:** Mistral Medium 3.5.
- **Short description:** Unified instruction, reasoning and coding model with vision, used in Vibe and Le Chat. [Publisher card](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B)
- **Provider / access / IDs:** Mistral Chat Completions `mistral-medium-3-5`; weights `mistralai/Mistral-Medium-3.5-128B`. No verified Zen Free ID found. [API documentation](https://docs.mistral.ai/models/mistral-medium-3-5-26-04)
- **Release / knowledge:** Documentation dates v26.04 to April 28, 2026; the remote-agent announcement is dated May 22. These are distinct dated publisher records, not interchangeable launch dates. Knowledge cutoff not verified. [Documentation](https://docs.mistral.ai/models/mistral-medium-3-5-26-04), [announcement](https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5/)
- **Context window:** 256K; separate API output cap not verified. [Documentation](https://docs.mistral.ai/models/mistral-medium-3-5-26-04)
- **Modalities:** Text/image input, text output; none/high reasoning, function calling and JSON output. Document Q&A is supported; native audio/video not established. [Card](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B), [API features](https://docs.mistral.ai/models/mistral-medium-3-5-26-04)
- **Pricing (2026-10-05):** Standard paid API $1.50 input / $7.50 output / $0.15 cached input per million tokens. [Official tariff](https://docs.mistral.ai/inference/pricing)
- **Architecture:** Dense 128B with vision encoder; open weights under Modified MIT, with commercial exceptions rather than unrestricted standard MIT. Earlier incorrect Transformers configurations could degrade long-context performance; corrected configuration is necessary. [Card](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B)

### Raw benchmarks found

- **Agent / coding, publisher reported:** Tau3-**Telecom** 91.4%; SWE-bench Verified 77.6%. Telecom must not be relabeled Banking or Tau2. [Launch evaluation](https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5/)
- **Independent composite:** Artificial Analysis Intelligence Index **14**, current v4.3.2; displayed #6/65 is the model-size comparison class, not an overall global rank. [AA evaluation](https://artificialanalysis.ai/models/mistral-medium-3-5)

NVIDIA supplies a separate evaluation of the original **FP8 baseline**, using high reasoning, temperature 0.7, top-p 0.95. The following are that baseline column, not its NVFP4 derivative. [NVIDIA evaluation](https://huggingface.co/nvidia/Mistral-Medium-3.5-128B-NVFP4)

| Group | Benchmark | FP8 baseline |
|---|---|---:|
| Reasoning | GPQA Diamond | 76.88% |
| Reasoning | MMLU Pro | 82.31% |
| Reasoning | AIME 2025 | 88.85% |
| Instruction following | IFBench | 70.25% |
| Coding | SciCode | 42.50% |
| Long context | AA-LCR | 62.06% |
| Multimodal | MMMU Pro | 63.35% |

AA-LCR is not a full-window needle-retrieval percentage. Terminal-Bench 2.1, Tau3-Banking, GDPval-AA, Claw-Eval, Toolathlon, MCP-Atlas, HLE, CritPt, Omniscience, SWE-Pro, LiveCodeBench and Vibe Code Bench: no verified public score recovered from primary sources in this pass.

### Normalized scores (1–100)

- **Tool use: 74/100.** Strong telecom agents and repository work, capped by incomplete broader agent evidence.
- **Reasoning: 68/100.** Solid FP8 academic results; current independent composite and limited hard-reasoning coverage temper the score.
- **Context window: 75/100.** 256K support and useful long-context reasoning, without verified near-perfect retrieval.
- **Multimodal: 70/100.** Measured image reasoning; no established native audio/video capability.
- **Coding: 76/100.** Strong SWE-bench with moderate scientific coding results; no harder SWE-Pro verification found.
- **Cost efficiency: 80/100.** Useful coding quality, but paid output is costly relative to many open-weight alternatives.
- **Overall Score: 73/100.** Half-up mean: (74 + 68 + 75 + 70 + 76) / 5 = 72.6. Suitable for vision-assisted coding and structured agents.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-05 UTC
- Method: Fresh public web research; normalized scores are interpretations, not official vendor scores.
- Future sources: add a separate signed report alongside this file.
