# Muse Glimmer 30B — findings by Space Bunny Alpha

- Source: Meta Superintelligence Labs / Muse Glimmer 30B
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B (high reasoning)
- **Short description:** Meta's dense open-weight multimodal model for autonomous agents, coding, tool use, and local deployment on consumer hardware.
- **Provider / access:** Hugging Face `meta-models/Muse-Glimmer-30B`; OpenRouter `meta/muse-glimmer-30b`; local Transformers/vLLM-style deployment.
- **Release / knowledge:** Released August 2026 (OpenRouter: 2026-08-09); knowledge cutoff 2026-01-04.
- **IDs:** `meta-models/Muse-Glimmer-30B`; OpenRouter `meta/muse-glimmer-30b`.
- **Context window:** At least 131,072 tokens; the official model card and OpenRouter use 131K/131,072.
- **Modalities:** Interleaved text and image input, text output; configurable reasoning effort, native tool/function calls, and structured output via supported runtimes. No native audio.
- **Pricing (as of 2026-09-25):** OpenRouter lists roughly $0.30 input / $0.04 cached input / $1.10–$1.50 output per 1M depending on provider. Quantized open weights support local use.
- **Architecture:** Apache-2.0 dense causal transformer with a dedicated vision encoder, about 29.6B total parameters; 4-bit variants target 24/32 GB hardware and a full BF16 version targets 64 GB VRAM.

### Raw benchmarks found

> Meta's official model-card table reports Muse Glimmer at high reasoning and compares it with Gemma4-31B and Qwen3.6-27B thinking modes.

Agent / tool use:

- MCP-Atlas Public: **75.5**; DeepSearch QA: **74.6**; WildClawBench: **47.6**; Gaia2: **43.3** (Meta model card).
- OSWorld-Verified: **65.9**; SkillsBench with skills: **44.3**; Tau3-Banking: **23.5**; GDPval-AA v2: **953 Elo** (Meta model card).
- IFBench: **77.0** (Meta model card).

Reasoning / knowledge:

- AIME 2026: **94.7%**; GPQA Diamond: **83.5%**; HLE Text: **22.0%**; Global-MMLU: **81.3%** (Meta model card).
- AA-LCR: **80.0%** (Meta model card).

Coding:

- SWE-bench Verified: **76.0%**; SWE-bench Pro: **51.2%** (Meta model card).
- Terminal-Bench 2.1 with Terminus2: **51.7%**; SciCode: **43.6%** (Meta model card).

Long context:

- AA-LCR: **80.0%**; Beam128K: **65.1%** (Meta model card).
- The verified 131K window is supported by these long-context results; no 1M result was found.

Multimodal:

- Charxiv Reasoning: **78.8**; ScreenSpot Pro: **75.4**; OmniDocBench v1.5: **75.8**; MMMU Pro: **74** (Meta model card).

### Normalized scores (1–100)

- **Tool use: 86/100.** MCP-Atlas at 75.5, DeepSearch QA at 74.6, and OSWorld-Verified at 65.9 demonstrate strong end-to-end tool use; lower Tau3-Banking and GDPval-AA relative to larger frontier agents cap the score.
- **Reasoning: 82/100.** AIME 2026 at 94.7%, GPQA at 83.5%, and IFBench at 77.0% are strong; HLE at 22.0% limits the top-end rating.
- **Context window: 65/100.** The verified 131K window and 80.0% AA-LCR/65.1% Beam128K are useful, but it is below the 1M tier and no larger-window result was found.
- **Multimodal: 78/100.** Image input is supported and the four visual/document benchmarks are consistently strong, though outputs remain text-only.
- **Coding: 88/100.** SWE-bench Verified at 76.0%, SWE-bench Pro at 51.2%, Terminal-Bench at 51.7%, and SciCode at 43.6% show excellent coding-agent capability for a 30B local model.
- **Cost efficiency: 88/100.** Hosted prices are moderate and 4-bit local deployment is practical on 24/32 GB hardware; full precision requires substantially more memory.
- **Overall Score: 80/100.** A compelling local multimodal agent/coding model with broad tool support and excellent 131K results; best for privacy-sensitive agents and consumer-hardware deployments rather than maximum frontier reasoning.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-25
- Method: Meta's official Hugging Face model card and OpenRouter model metadata; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Glimmer.md`, using the same headings.
