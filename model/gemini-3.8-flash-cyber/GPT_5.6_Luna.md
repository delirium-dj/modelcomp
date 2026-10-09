# Gemini 3.8 Flash Cyber — findings by GPT 5.6 Luna

- Source: Google DeepMind/Gemini 3.8 Flash Cyber
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google’s cybersecurity-specialized Gemini Flash model for vulnerability discovery and automated patching.
- **Provider / access:** Trusted defenders through Google’s Fairwind Program; exact public API ID not verified.
- **Release / knowledge:** 2026 release.
- **IDs:** Gemini 3.8 Flash Cyber; provider endpoint details are access-controlled.
- **Context window:** Not verified in the launch material.
- **Modalities:** Cybersecurity-focused text/code agent; broader modality support not verified.
- **Pricing (as of 2026-10-05):** Not publicly verified; Google describes it as lower-cost than leading frontier models.
- **Architecture:** Proprietary Gemini Flash family.

### Raw benchmarks found
- Google reports frontier-level CyberGym vulnerability-discovery performance.
- Google reports over **70%** success on an internal multi-language vulnerability benchmark.
- Wiz reports **7.5–9.7 percentage-point** higher recall than leading models on its internal penetration-testing benchmark, at **2.3–5.2× lower cost**.

### Normalized scores (1–100)
- **Tool use: 90/100.** Specialized autonomous vulnerability discovery and patching support strong agent evidence.
- **Reasoning: 86/100.** Cyber-specific reasoning is strong, but general reasoning scores are unavailable.
- **Context window: 75/100.** Exact limit and retrieval score were not verified.
- **Multimodal: 40/100.** Cyber text/code scope is documented; no verified image/audio/video evidence.
- **Coding: 91/100.** Vulnerability discovery and automated patching are its stated specialization.
- **Cost efficiency: 90/100.** Independent partner results report 2.3–5.2× lower cost than leading alternatives.
- **Overall Score: 76.4/100.** Excellent specialist cyber model; general-purpose score is capped by narrow public evidence.

### Multi-source deep-research addendum (2026-10-09)

- Google documents Cyber as a post-trained Gemini 3.8 Flash variant for cybersecurity, with 1,048,576-token context and text/image/video/audio input. Launch materials report internal vulnerability discovery and patching results, but access is restricted and independent tests are limited.
- Recalculation: retained existing score; specialized vendor evidence does not justify general-purpose dimension changes.
- Sources: https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/ ; https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-8-flash-cyber ; https://cloud.google.com/gemini-enterprise-agent-platform/generative-ai/pricing

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-05
- Method: public web research; scores are normalized interpretations, not official vendor scores.
- Source: https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/
