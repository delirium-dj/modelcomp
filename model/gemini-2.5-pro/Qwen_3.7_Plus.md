# Gemini 2.5 Pro — findings by Qwen 3.7 Plus
- Source: Google/Gemini 2.5 Pro (`opencode/gemini-2.5-pro`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's prior-generation thinking flagship (stable June 2025, pre-Gemini-3 family) designed for long-context reasoning and document-heavy analysis. Achieved 92% on AIME 2024, 84.4% on GPQA Diamond, and 63.8% on SWE-bench Verified with custom agent setup at launch. The 1M-token context window supports native multimodal input (text, image, audio, video, PDF). Now superseded by Gemini 3.x/4 generation but remains in production for long-document analysis. AA Intelligence Index is 16.1% with -16.3% Omniscience (90.9% hallucination rate), reflecting its age relative to current frontier models.
- **Provider / access:** Google (Vertex AI, Gemini API). Proprietary.
- **Release / knowledge:** March 2025 (preview), stable June 2025. Knowledge cutoff not specified.
- **IDs:** `opencode/gemini-2.5-pro`
- **Context window:** 1,048,576 tokens (1M); 64K–66K output
- **Modalities:** Text, image, audio, video, PDF in; text out
- **Pricing:** $1.25/$10.00 per 1M (prompts ≤200K); $2.50/$15.00 per 1M (prompts >200K)

### Raw benchmarks found

Agent / tool use: τ²-bench 54.1% · Gert Labs 42.01% · AA Agentic Index 3.5% · Terminal-Bench 2.0 30.34%.

Reasoning / knowledge: AIME 2024 92% · AIME 2025 87.7% · GPQA 83% · GPQA Diamond 84.4% · HLE 18.8% (self-reported) / 22.5% (AA) · AA Intelligence Index 16.1% · AA-LCR 69.0% · AA-Omniscience -16.3% (accuracy 39.1%, hallucination 90.9%) · FrontierMath v2 Tiers 1-3 14.1% · FrontierMath v2 Tier 4 4.2% · IFBench 48.7% · CritPt 2.6%.

Coding: SWE-bench Verified 63.8% (self-reported) / 54.4% (Vals) · AA Coding Index 33.3% · AA-SciCode 46.3% · Vibe Code Bench 0.40%.

Multimodal: AA-MMMU-Pro 74.9% · Design Arena Website 1170 · MedCode 50.59% · MedScribe 73.55% · MortgageTax 68.92% · SAGE 41.92%.

Long context: 1M native context window.

### Normalized scores (1–100)

- **Tool use: 40/100.** τ²-bench 54.1% and Gert Labs 42% show moderate agentic capability, but AA Agentic Index at 3.5% and Terminal-Bench 30.3% indicate significant limitations vs. current frontier agents.
- **Reasoning: 68/100.** Strong launch-time results (AIME 92%, GPQA Diamond 84.4%, AIME 2025 87.7%) but AA Intelligence Index at 16.1% and -16.3% Omniscience (90.9% hallucination) show it has been surpassed by newer reasoning models. FrontierMath scores (14.1%/4.2%) are modest.
- **Context window: 85/100.** 1M native context window supports document-heavy analysis. Pricing doubles above 200K, which slightly limits practical use.
- **Multimodal: 65/100.** Native support for text, image, audio, video, and PDF input. MMMU-Pro 74.9% is solid for its generation. MedScribe 73.55% and MortgageTax 68.92% show domain versatility, but SAGE 41.92% is modest.
- **Coding: 48/100.** SWE-bench Verified 63.8% (self-reported) / 54.4% (Vals) was competitive at launch but now trails current frontier models. AA Coding Index 33.3%, SciCode 46.3%, and Vibe Code Bench 0.40% confirm below-frontier coding performance.
- **Cost efficiency: 50/100.** $1.25/$10.00 per 1M is moderate for a pro-tier model with 1M context, but pricing doubles above 200K. No free tier available.
- **Overall Score: 61/100.** Mean of Tool (40) + Reasoning (68) + Context (85) + Multimodal (65) + Coding (48) = 306/5 = 61.2.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
