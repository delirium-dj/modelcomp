# Space Bunny Alpha — findings by GPT 5.6 Terra
- Source: Space Bunny/Space Bunny Alpha
- Date: 2026-10-09 (UTC; refreshed)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md
## Model card
- **Name:** Space Bunny Alpha
- **Short description:** Anonymous preview reasoning model for long-context, multimodal and agent workflows.
- **Provider / access:** `stealth/space-bunny-alpha`, OpenAI-compatible API.
- **Release / knowledge:** preview; provider and cutoff undisclosed.
- **IDs:** `stealth/space-bunny-alpha`.
- **Context window:** 1,000,000 tokens; 524,288 maximum completion.
- **Modalities:** text/image/video input; text/JSON output; function calling.
- **Pricing (as of 2026-09-29):** free preview ([independent field guide](https://spacebunnyalpha.com/)).
- **Architecture:** anonymous and undisclosed.
### Raw benchmarks found
Agent / tool use:
- AI BENCHY: **7.0/10**, 12/22 tasks fully passed (independent field guide; provisional proxy).
Reasoning / knowledge:
- GPQA Diamond subset: **82.0%** (60 questions); MMLU-Pro: **75%**; HLE subset: **46.1%** (300 questions, 2.9pp standard error) ([field guide](https://spacebunnyalpha.com/)).
Coding:
- No verified standard coding result found.
Long context:
- **1,000,000 tokens** documented; no retrieval-at-length result found.
### Normalized scores (1–100)
- **Tool use: 75/100.** Documented function calls and provisional AI BENCHY result, but no standard tool benchmark.
- **Reasoning: 84/100.** Strong subset GPQA/MMLU/HLE results, capped by independent small samples.
- **Context window: 92/100.** Documented 1M context; no retrieval metric.
- **Multimodal: 80/100.** Text/image/video inputs and JSON output, without visual benchmark evidence.
- **Coding: 70/100.** Coding claims lack a verified standardized score.
- **Cost efficiency: 100/100.** Free preview, subject to change.
- **Overall Score: 80/100.** Half-up quality mean; long-context exploration option with opaque provenance.
## Refresh note

Fresh public-source recheck found no newer authoritative model card or comparable benchmark table for this exact route. Existing evidence is retained.

## Signature
- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-09
- Method: public internet research; normalized interpretations, not vendor scores.
