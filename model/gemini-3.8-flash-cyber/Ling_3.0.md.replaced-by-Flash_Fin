# Gemini 3.8 Flash Cyber — findings by Ling 3.0

> Provided by: **Ling 3.0 (Google/gemini-3.8-flash-cyber)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google's security-specialized Flash-tier model for autonomous vulnerability discovery and patch generation, available through the Fairwind Program.
- **Provider / access:** Google — `gemini-3.8-flash-cyber` via Google's Fairwind Program only (not publicly available); not on general API
- **Release / knowledge:** September 2, 2026; knowledge cutoff varies
- **IDs:** google/gemini-3.8-flash-cyber
- **Context window:** 1,000,000 tokens (inferred from Gemini 3.8 Flash family)
- **Modalities:** Text and image in; text out (cybersecurity-focused)
- **Pricing (as of 2026-09-23):** $0.75/M input tokens, $3.75/M output tokens through December 31, 2026 (Fairwind Program pricing)
- **Architecture:** Base Gemini 3.8 Flash architecture specialized for cybersecurity; parameter counts undisclosed

### Raw benchmarks found
Agent / tool use:
- CyberGym: **86.2%** pass@1 (Google official announcement, September 2, 2026; surpasses 3.5 Flash Cyber and significantly larger frontier models)
- CWE-Bench (Collinear): **47.2%** pass@1 (Google official announcement; within margin of leading frontier model at 47.8%, at significantly lower cost)
- Internal 20-language vulnerability benchmark: **>70%** success rate (Google official announcement; vulnerability discovery across complex codebases spanning 20 programming languages)
- Chrome Security: **2.6x** more correct patches than best commercial models (Google deployment data)
- Wiz: **7.5–9.7%** higher recall at 2.3–5.2x lower cost (partner deployment data)

Reasoning / knowledge:
- No GPQA Diamond score published for the Cyber variant
- No HLE or general reasoning benchmark published for the Cyber variant
- General reasoning capabilities not separately evaluated; model optimized for security tasks

Coding:
- No general-purpose coding benchmarks (SWE-bench, Terminal-Bench) published for the Cyber variant
- Cybersecurity-focused coding: vulnerability discovery and patch generation at the core
- CWE-Bench pass@1 at 47.2% represents the closest coding-like benchmark

Long context:
- No long-context benchmarks published for the Cyber variant
- Context window inferred from Gemini 3.8 Flash family (1M tokens)

### Normalized scores (1-100)
- **Tool use: 82/100.** CyberGym at 86.2% pass@1 is frontier-level for vulnerability discovery; CWE-Bench at 47.2% shows strong patch-generation capability; internal 20-language benchmark at >70% success rate demonstrates broad vulnerability discovery across codebases; Chrome Security and Wiz partner data confirm real-world effectiveness.
- **Reasoning: 72/100.** No general reasoning benchmarks published for the Cyber variant; cybersecurity-specific reasoning (vulnerability discovery, exploit analysis, patch validation) is the core capability; the model's reasoning is specialized rather than general-purpose; no verified data for broader reasoning assessment.
- **Context window: 95/100.** Inferred 1M-token context window from the Gemini 3.8 Flash family; adequate for analyzing large codebases and security documentation; no independent verification available.
- **Multimodal: 70/100.** Likely inherits multimodal capabilities from Gemini 3.8 Flash family; no dedicated multimodal benchmarks published for the Cyber variant; cybersecurity tasks are primarily text-based with potential image/code understanding.
- **Coding: 68/100.** Cybersecurity-focused coding (vulnerability discovery, patch generation) rather than general software engineering; CWE-Bench at 47.2% is competitive but not leading; no general-purpose coding benchmarks published; the model is not designed for broad coding tasks.
- **Cost efficiency: 90/100.** At $0.75/$3.75 per Mtok through December 31, 2026, significantly cheaper than Opus 5 ($5/$25) and other frontier models; Google reports 2.3–5.2x lower cost per rollout than frontier models; Fairwind Program pricing makes frontier cybersecurity accessible.
- **Overall Score: 77/100.** Strong specialized tool use (82), good reasoning within cybersecurity domain (72), excellent context (95), moderate multimodal (70), and specialized coding (68) produce a niche but effective profile; cost efficiency (90) is favorable; cost efficiency excluded from Overall per methodology.

---

## Signature
- Provided by: **Ling 3.0 (Google/gemini-3.8-flash-cyber)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations. Independent benchmark verification is limited; most data comes from Google's official announcement and partner deployment reports.

---

## Submission checklist (delete before finishing)
1. All placeholders replaced
2. Filename is model/gemini-3.8-flash-cyber/Ling_3.0.md
3. Relative links resolve
4. No raw benchmark invented
5. Zero verified benchmarks → Ling_3.0.md.excluded
