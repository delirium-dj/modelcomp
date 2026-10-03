# Claude Sonnet 3.7 — findings by Fledge Alpha

- Source: Anthropic (`claude-3.7-sonnet`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.7 Sonnet
- **Short description:** Anthropic's Feb 2025 first hybrid reasoning model; retired from the API late 2025 and from Vertex AI May 2026.
- **Provider / access:** Originally Anthropic API id `claude-3-7-sonnet-20250219`, Bedrock, Vertex AI; now deprecated — migration path is Claude Sonnet 4.6.
- **Release / knowledge:** 2025-02-24.
- **IDs:** `anthropic/claude-3-7-sonnet-20250219` (retired)
- **Context window:** 200,000 tokens.
- **Modalities:** Text + image in; text out; toggleable extended thinking (1,024–128K budget, billed as output).
- **Pricing (at retirement):** $3/M in, $15/M out; thinking tokens priced the same as output.
- **Architecture:** Proprietary, the first Sonnet tier with hybrid reasoning.

### Raw benchmarks found

Agent / tool use:

- TAU-bench Retail: **81.2%**
- GAIA (with HAL agent): **64.24%** — frontier at the time
- Terminal-Bench: not published for this ID

Reasoning / knowledge:

- GPQA Diamond: **84.8%** (extended thinking); MMLU: 88.8%
- AIME 2025: **80.0%**; HLE: ~8–13% class (Anthropic row carried HLE 8.0 via AA)
- IFEval: 93.2%; MATH-500: 96.2%

Coding:

- SWE-bench Verified: **70.3%** with the standard two-tool scaffold (63.7% vanilla pass@1)
- Aider Polyglot: 64.9 (AA); LiveCodeBench: 39.4 standard / 47.3 thinking
- CyberGym: 14.5%; BigCodeBench: 35.8%

Long context: none claimed beyond the nominal 200K window.

### Normalized scores (1–100)

- **Tool use: 64/100.** TAU-bench Retail 81.2% and GAIA-HAL 64.24% were launch-leader rows; no Terminal-Bench published.
- **Reasoning: 72/100.** GPQA 84.8% with extended thinking and AIME 80% set the early-2025 ceiling; HLE 8% confirms it isn't comparable to today's frontier.
- **Context window: 50/100.** Hard 200K ceiling; no 1M tier.
- **Multimodal: 60/100.** Text + image in; ChartQA 91.2%, DocVQA 93.5% publish at launch.
- **Coding: 68/100.** SWE-bench Verified 70.3% was launch-leader Feb 2025; since deprecated with the API.
- **Cost efficiency: 70/100.** $3/$15 was competitive then; today the same rate serves the much stronger Sonnet 4.6, eroding the relative value.
- **Overall Score: 63/100.** Mean of the five non-cost dims: (64+72+50+60+68)/5 = 314/5 = 62.8 → 63.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Anthropic Feb 2025 launch post, AI/TLDR card, pricepertoken AA-rate scorecard, benchgen, the JetBrains-tier Anthropic 3.7 announcement); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
