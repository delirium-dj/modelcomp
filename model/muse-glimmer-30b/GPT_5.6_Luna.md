# Muse Glimmer 30B — findings by GPT 5.6 Luna

- Source: Meta Superintelligence Lab/Muse Glimmer 30B
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Muse Glimmer 30B
- **Short description:** Meta's open-weight approximately 30B multimodal causal language model with a perception encoder, reasoning output, tool calling, and local agentic deployment goals.
- **Provider / access:** Hugging Face `meta-models/Muse-Glimmer-30B`, local Transformers/vLLM deployment, and NVIDIA NIM `meta/muse-glimmer-30b`; the NIM route is hosted access to the same named model, not a separate dataset identity.
- **Release / knowledge:** 2026-08; knowledge cutoff 2026-01-04 according to the model card.
- **IDs:** `meta-models/Muse-Glimmer-30B`; NVIDIA route `meta/muse-glimmer-30b`.
- **Context window:** NVIDIA documents combined input/output context of 131,072+ tokens; community 512K claims are not treated as native-card evidence.
- **Modalities:** Text and image input, text output, dedicated reasoning output, and native schema/tool calling.
- **Pricing (as of 2026-11-02):** Open Apache-2.0 weights have no per-token price; hosted NIM trial/provider pricing varies and was not used as a canonical paid price.
- **Architecture:** Approximately 29.6B/30B dense causal model with a dedicated perception encoder; Apache-2.0 license.

### Raw benchmarks found

- General agentic: MCP Atlas **75.5**, DeepSearch QA **74.6**, τ3-Banking **23.5**, WildClawBench **47.6**, GDPVal-AA v2 **953 Elo**, Gaia2 **43.3**, SkillsBench with skills **44.3**, and OSWorld-Verified **65.9** (Meta model card).
- Coding: SWE-Bench Pro **51.2%**, SWE-Bench Verified **76.0%**, TerminalBench 2.1 with Terminus-2 **51.7%**, and SciCode **43.6%** (Meta model card; benchmark harnesses are retained by the card).
- Multimodal: CharXiv Reasoning **78.8**, ScreenSpot Pro **75.4**, OmniDocBench v1.5 **75.8**, and MMMU-Pro **74** (Meta model card).
- Reasoning/knowledge: GPQA Diamond **83.5%**, HLE **22.0%**, and AIME 2026 **94.7%** (model-card evaluation records).
- No native 512K/1M retrieval score was found; local extensions are not transferred into the context score.

### Normalized scores (1–100)
- **Tool use: 82/100.** MCP Atlas 75.5, DeepSearch QA 74.6, and OSWorld 65.9 show strong agentic utility, capped by lower τ3-Banking and SkillsBench results.
- **Reasoning: 77/100.** GPQA 83.5% and AIME 94.7% are strong, while HLE 22.0% and mixed agentic reasoning results limit the score.
- **Context window: 70/100.** The verified native 131K+ context is useful but below the 200K tier; community extensions are excluded.
- **Multimodal: 72/100.** Image input plus CharXiv 78.8, ScreenSpot 75.4, and MMMU-Pro 74 are solid, with no audio/video input evidence.
- **Coding: 73/100.** SWE-bench Verified 76.0% and TerminalBench 51.7% are strong, while SWE-Pro 51.2% and SciCode 43.6% show task sensitivity.
- **Cost efficiency: 100/100.** Apache-2.0 open weights enable local deployment; hardware and optional hosted costs are separate.
- **Overall Score: 75/100.** `(82 + 77 + 70 + 72 + 73) / 5 = 74.8`, half-up to **75**; best fit is local multimodal coding and tool-driven agents on suitable hardware.

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: Fresh official model-card, Hugging Face evaluation, and NVIDIA specification research; hosted routes, local extensions, and exact Muse Glimmer identity were kept distinct. Scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Meta Muse Glimmer 30B model card](https://huggingface.co/meta-models/Muse-Glimmer-30B)
  - [NVIDIA NIM Muse Glimmer specification](https://build.nvidia.com/meta/muse-glimmer-30b)
