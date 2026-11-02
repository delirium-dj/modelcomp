# Gemini 3.8 Flash Cyber — findings by GPT 5.6 Luna

- Source: Google DeepMind/Gemini 3.8 Flash Cyber
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google's cybersecurity-specialized Gemini Flash deployment for vulnerability discovery, validation, and automated patching.
- **Provider / access:** Restricted access through Google's Fairwind Program for trusted government, critical-infrastructure, and software-maintainer users; no general self-serve API route is published.
- **Release / knowledge:** Announced September 2, 2026; knowledge cutoff and training details are not published for the Cyber deployment.
- **IDs:** Gemini 3.8 Flash Cyber; provider endpoint details are access-controlled.
- **Context window:** The Cyber deployment's context limit is not publicly disclosed. The standard Gemini 3.8 Flash sibling advertises 1M, but that limit is not silently transferred here.
- **Modalities:** Cybersecurity text/code agent; the public Cyber materials do not enumerate a complete audio, image, or video modality matrix.
- **Pricing (as of 2026-11-02):** No public per-token Cyber rate card. Google describes Flash-level speed and cost, but access is reviewed rather than an open paid API tier.
- **Architecture:** Proprietary post-trained Gemini 3.8 Flash family deployment; parameter count is undisclosed.

## Raw benchmarks found

- CyberGym pass@1: **86.2%** (Google; current BenchLM/LLM Stats aggregation).
- CWE-Bench pass@1: **47.2%** (Google evaluation material).
- Internal cross-language vulnerability benchmark: **about 71%** across 20 programming languages (Google launch material).
- Gray Swan IPI attack success: **6.0%** in the current BenchLM source display; this is a narrow safety/attack metric, not a general capability score.
- Wiz reports **7.5–9.7 percentage-point** higher recall than leading models in its internal penetration-testing benchmark and **2.3–5.2× lower cost**, but those results are partner-specific.
- BenchLM assigns no overall score: only three source-displayable rows are available and the model remains unranked.

## Normalized scores (1–100)

- **Tool use: 91/100.** CyberGym 86.2% and the autonomous discovery/patching workflow establish unusually strong specialist agent evidence.
- **Reasoning: 83/100.** The internal multi-language result and vulnerability-analysis specialization are strong, but general reasoning suites are not published.
- **Context window: 75/100.** The Cyber route does not publish a context limit or retrieval curve; the standard sibling's 1M claim is not used as exact-model evidence.
- **Multimodal: 43/100.** Text/code security work is documented, while a complete native image/audio/video matrix is not public.
- **Coding: 94/100.** Vulnerability discovery, proof-of-concept generation, validation, and patching are the model's explicit purpose; CWE-Bench provides direct code-security evidence.
- **Cost efficiency: 80/100.** Google and Wiz report favorable relative economics, but no auditable token price is available and access is restricted.
- **Overall Score: 77.2/100.** Mean of the five quality dimensions `(91 + 83 + 75 + 43 + 94) / 5 = 77.2`; this is a specialist cybersecurity score, not a general-purpose model ranking.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: Google's launch material and Fairwind access description, BenchLM's October 29 profile, LLM Stats, and partner-reported Wiz evidence; specialist and general-purpose claims were kept separate, and scores are normalized interpretations rather than official vendor scores.
- Reference URLs:
  - [Google Gemini 3.8 Flash Cyber announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/)
  - [Google Fairwind Program](https://deepmind.google/fairwind-program/)
  - [BenchLM Gemini 3.8 Flash Cyber profile](https://benchlm.ai/models/gemini-3-8-flash-cyber)
  - [Google Gemini Cyber page](https://deepmind.google/models/gemini/cyber/)
