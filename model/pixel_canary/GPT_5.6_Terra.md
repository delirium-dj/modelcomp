# Pixel Canary — findings by GPT 5.6 Terra
- Source: Pixel Canary/pixel_canary
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md
## Model card
- **Name:** Pixel Canary
- **Short description:** Anonymous stealth coding model distributed free through Cline.
- **Provider / access:** free Cline route; publisher and API ID not independently confirmed.
- **Release / knowledge:** stealth preview; date and cutoff undisclosed.
- **IDs:** `pixel_canary` (folder identifier; canonical vendor ID unverified).
- **Context window:** 262,000 tokens (Cline announcement).
- **Modalities:** coding-oriented; other modalities not verified.
- **Pricing (as of 2026-09-29):** free during stealth distribution.
- **Architecture:** undisclosed.
### Raw benchmarks found
Coding:
- Next.js Agent Evals: **90%**, passing **28/31** web/mobile development tasks ([Cline announcement](https://www.reddit.com/r/CLine/comments/1wqkucr/pixel_canary_new_stealth_model_is_now_free_in/)); third-party announcement, not independently audited.
Long context:
- **262,000 tokens** advertised; no retrieval metric found.
### Normalized scores (1–100)
- **Tool use: 75/100.** Agent-eval pass rate is encouraging, but benchmark details are limited.
- **Reasoning: 70/100.** No standard general-reasoning result found.
- **Context window: 85/100.** Advertised 262k context without retrieval validation.
- **Multimodal: 15/100.** No verified multimodal support.
- **Coding: 85/100.** 90% on 31 practical Next.js tasks is strong but small and unaudited.
- **Cost efficiency: 100/100.** Free stealth access.
- **Overall Score: 66/100.** Half-up quality mean; promising coding preview, but provenance and evaluation breadth are limited.
## Signature
- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-09-29
- Method: public internet research; normalized interpretations, not vendor scores.
