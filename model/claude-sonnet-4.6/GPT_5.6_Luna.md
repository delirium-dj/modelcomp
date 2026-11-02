# Claude Sonnet 4.6 — findings by GPT 5.6 Luna

- Source: Anthropic/Claude Sonnet 4.6
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's efficient Sonnet-generation model for coding, computer use, and production agents; newer Sonnet releases now occupy the current tier.
- **Provider / access:** Claude API, Amazon Bedrock, Google Cloud, Microsoft Foundry, and Claude applications; API ID `claude-sonnet-4-6`.
- **Release / knowledge:** Released February 17, 2026; the current public benchmark profile does not publish a single universal knowledge cutoff.
- **IDs:** `claude-sonnet-4-6`; cloud providers add platform-specific prefixes.
- **Context window:** BenchLM's current model profile lists **200K** tokens. Context limits can vary by provider route; no 1M claim is transferred from a different Anthropic generation.
- **Modalities:** Text and image input, text output, adaptive thinking, tools, and computer-use workflows.
- **Pricing (as of 2026-11-02):** $3 input / $15 output per 1M tokens on current Anthropic platform pricing; caching and batch discounts may apply.
- **Architecture:** Proprietary; parameter count and internal architecture are undisclosed.

## Raw benchmarks found

- BenchLM current profile: **55.29/100, #73 of 1,004**, with 40 benchmark rows covered.
- Terminal-Bench 2.0: **59.1%** (Anthropic system card); Vals Terminal-Bench 2.1: **57.3%**; JobBench: **36.9%**.
- SWE-bench Verified: **79.6%**; SWE-Rebench: **60.7%**.
- OSWorld-Verified: **72.1%**; ARC-AGI-2: **58.3%**; AA-LCR: **68.3%**.
- CharXiv: **77.4%** in current comparison coverage; the model's visual input is evaluated separately from general agent performance.
- Current independent results show substantial spread by harness and effort setting; the profile classifies the base route as non-reasoning even though Anthropic supports adaptive thinking.

## Normalized scores (1–100)

- **Tool use: 75/100.** OSWorld 72.1%, Terminal-Bench 59.1%, and native computer-use tools are useful, but current agentic placement is mid-pack.
- **Reasoning: 78/100.** ARC-AGI-2 58.3% and AA-LCR 68.3% support capable reasoning, below newer Sonnet/Opus generations.
- **Context window: 88/100.** The current independent profile lists 200K; no verified full-window retrieval result supports a higher tier.
- **Multimodal: 80/100.** Text/image input and CharXiv 77.4% are useful, while output remains text and broad modality coverage is limited.
- **Coding: 82/100.** SWE-bench Verified 79.6% and Terminal-Bench evidence support strong coding, with SWE-Rebench and Vals variance limiting confidence.
- **Cost efficiency: 75/100.** $3/$15 is reasonable for a capable coding model but no longer a low-cost frontier rate.
- **Overall Score: 80.6/100.** Mean of the five quality dimensions `(75 + 78 + 88 + 80 + 82) / 5 = 80.6`; best fit is established coding and computer-use workflows where the older Sonnet route remains available.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current Anthropic platform information, the Sonnet 4.6 system card, BenchLM's October 29 profile, Vals, and Artificial Analysis; provider-route and effort differences were retained, and scores are normalized interpretations rather than official vendor scores.
- Reference URLs:
  - [Claude Sonnet 4.6 platform documentation](https://platform.claude.com/docs/en/models/sonnet-4-6/overview)
  - [Claude Sonnet 4.6 system card](https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf)
  - [BenchLM Claude Sonnet 4.6 profile](https://benchlm.ai/models/claude-sonnet-4-6)
