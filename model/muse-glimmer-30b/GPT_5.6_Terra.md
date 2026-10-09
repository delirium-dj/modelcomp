# Muse Glimmer 30B — findings by GPT 5.6 Terra
- Source: Meta/Muse Glimmer 30B
- Date: 2026-10-09 (UTC; refreshed)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md
## Model card
- **Name:** Muse Glimmer 30B
- **Short description:** Meta's 29.6B dense local multimodal agent model, distilled from Muse Spark.
- **Provider / access:** `meta-models/Muse-Glimmer-30B` on [Hugging Face](https://huggingface.co/meta-models/Muse-Glimmer-30B) and NVIDIA NIM.
- **Release / knowledge:** 2026-08-10; cutoff unpublished.
- **IDs:** `meta-models/Muse-Glimmer-30B`.
- **Context window:** 131,072+ tokens; Beam128K published.
- **Modalities:** interleaved text/image in; text out.
- **Pricing (as of 2026-09-29):** open model; no first-party hosted token price found.
- **Architecture:** dense causal Transformer + ViT-G/14; 29.6B parameters.
### Raw benchmarks found
Agent / tool use:
- MCP Atlas: **75.5**; DeepSearch QA: **74.6**; OSWorld: **65.9** ([Meta card](https://huggingface.co/meta-models/Muse-Glimmer-30B)).
Reasoning / knowledge:
- AIME 2026: **94.7**; GPQA: **83.5**; HLE: **22.0**; AA-LCR: **80.0** (Meta card).
Coding:
- SWE-bench Verified: **76.0%**; SWE-bench Pro: **51.2%**; TerminalBench: **51.7**; SciCode: **43.6** (Meta card).
Long context:
- Beam128K: **65.1** (Meta card).
### Normalized scores (1–100)
- **Tool use: 82/100.** MCP/DeepSearch strong, capped by OSWorld.
- **Reasoning: 84/100.** AIME/GPQA high, HLE low.
- **Context window: 83/100.** 131k+ and Beam128K evidence.
- **Multimodal: 82/100.** Text/image plus MMMU-Pro 74.0 and ScreenSpot 75.4.
- **Coding: 84/100.** SWE Verified 76.0; Pro/TerminalBench cap.
- **Cost efficiency: 90/100.** Open local model.
- **Overall Score: 83/100.** Half-up quality mean; compelling local multimodal agent.
## Refresh note

Fresh public-source recheck found no newer authoritative model card or comparable benchmark table for this exact route. Existing evidence is retained without importing claims from other Muse models.

## Signature
- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-09
- Method: public internet research; normalized interpretations, not vendor scores.
