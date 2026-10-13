# Gemini 3.1 Flash — findings by Qwen 3.7 Plus
- Source: Google/Gemini 3.1 Flash (`google/gemini-3.1-flash`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash
- **Short description:** Google's efficient 3.1 Flash model balancing speed, capability, and cost. Part of the Gemini 3 generation alongside 3.1 Pro and 3.1 Flash-Lite. 1M token context window with full multimodal input (text, images, audio, video, PDF). SWE-bench Verified ~78% (outperforms 3.1 Pro). Positioned between Flash-Lite and Pro in the Gemini 3 tier hierarchy. Free tier available on Google AI Studio. 65K max output tokens.
- **Provider / access:** Google (AI Studio, Vertex AI). Free tier available with standard rate limits.
- **Release / knowledge:** Part of the Gemini 3.1 generation (early 2026). Knowledge cutoff not specified.
- **IDs:** `google/gemini-3.1-flash`
- **Context window:** 1,048,576 tokens (1M), ~65K max output
- **Modalities:** Text, image, audio, PDF in; text out (full multimodal input)
- **Pricing:** Free tier available; paid-tier pricing (between Flash-Lite and Pro)

### Raw benchmarks found

Agent / tool use: Limited independent benchmark coverage available. Part of the Gemini 3 family with strong agentic capabilities.

Reasoning / knowledge: Positioned between Flash-Lite (GPQA Diamond 86.9%, HLE 8.5) and Pro. SWE-bench Verified ~78% (outperforms Pro at 76.2%).

Coding: SWE-bench Verified ~78% (outperforms Gemini 3.1 Pro at 76.2%). Strong coding performance for an efficient-tier model.

Multimodal: Full multimodal input (text, images, audio, video, PDF). Shares Gemini 3 family multimodal architecture. MMMU Pro likely ~77-80% range (between Flash-Lite 76.8% and Pro).

Long context: 1M native context window. Shared Gemini 3 long-context capability.

### Normalized scores (1–100)

- **Tool use: 58/100.** Part of the Gemini 3 family with strong tool-use infrastructure. Limited independent benchmark coverage for this specific variant.
- **Reasoning: 58/100.** Positioned between Flash-Lite and Pro. SWE-bench ~78% outperforms Pro. GPQA Diamond likely ~87-89% range. Limited independent verification.
- **Context window: 90/100.** 1M context window is frontier-class. Shared Gemini 3 long-context architecture.
- **Multimodal: 72/100.** Full multimodal input (text, images, audio, video, PDF). Comprehensive input modality support. Shares Gemini 3 family multimodal architecture.
- **Coding: 65/100.** SWE-bench Verified ~78% outperforms Gemini 3.1 Pro. Strong coding for an efficient-tier model.
- **Cost efficiency: 90/100.** Free tier available. Paid pricing between Flash-Lite and Pro. Excellent cost-performance ratio.
- **Overall Score: 68.6/100.** Mean of Tool (58) + Reasoning (58) + Context (90) + Multimodal (72) + Coding (65) = 343/5 = 68.6. Adjusted to 66 given limited independent benchmark coverage for this specific variant.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
