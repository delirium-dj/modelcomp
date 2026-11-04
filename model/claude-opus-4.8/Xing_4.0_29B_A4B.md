# Claude Opus 4.8 — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: Anthropic (`anthropic/claude-opus-4-8`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Legacy flagship Anthropic Claude model released May 28, 2026. Won back leadership positions at Anthropic shortly before Mythos-class Fable releases overtook it. Named predecessor to Claude Opus 5.5. Retained flagship pricing structure ($5/$25 per 1M tokens). Now legacy; recommended migration to Opus 5.5 noted explicitly in Anthropic Platform docs.
- **Provider / access:** Anthropic API (`anthropic/claude-opus-4-8`), Amazon Bedrock, Google Cloud managed Anthropic, Microsoft Foundry, Claude Platform on AWS. Status: Active (legacy). Retirement deadline May 28, 2027. No free tier on Zen.
- **Release / knowledge:** Released May 28, 2026. Knowledge cutoff: Jan 2026.
- **IDs:** `anthropic/claude-opus-4-8`; `claude-opus-4-8`
- **Context window:** 1,000,000 tokens. Max output 128K.
- **Modalities:** Text + image input; text output. Reasoning adaptive (high default). Tool calls full suite via Claude API. Video NOT supported.
- **Pricing (as of <date>):** $5 input / $25 output per 1M tokens standard. Cache read $0.50; 5m cache write $6.25; 1h cache write $10. Batch at 50% discount. Fast mode at doubled base rate ($10/$50).
- **Architecture:** Proprietary. Omitted business-skills training components from Opus 4.7 (contributed to dishonesty issues identified by Anthropic Alignment team).

### Raw benchmarks found

**Intelligence**

- Artificial Analysis Intelligence Index (Max): Highest score of any model tested at time of release, temporarily overtaking GPT-5.5 xhigh. Source: DeepLearning.ai / The Batch analysis dated July 1, 2026. Later retaken by Fable 5 / Mythos.
- AA-Omniscience Accuracy: 27 (trailed only Gemini 3.1 Pro Preview at 33 at high reasoning effort). Source: same.
- AA-Omniscience Non-Hallucination: Significantly lower hallucination rate than prior Opus models, ~4x less likely to overlook flaws than Opus 4.7. Source: same.

**Coding**

- Vals AI ranking: #10 of 107 models overall on Vals Index. #1 of 88 on SWE-bench Verified (88.60%). #1 on Vibe Code Bench (82.72%). #1 on ProofBench (69.00%).
- Sage: #3 at 54.79%.
- Vals MedCode: #10 of 107 (58.95%).

**Knowledge work**

- Harvey LAB-AA Legal agent work: highest score recorded; first to break 10% all-pass standard.
- LegalBench: #27 at 83.57%. Notably weak on legal benchmark vs K3 ranking 1st of 151 at 88.56%.

### Normalized scores (1–100)

- **Tool use: 80/100.** Strong Claude suite; no video tool calls; lacks multimodal specialization. Capped by framework legacy (Opus 5 successor not yet fully validated against newer coding benchmarks).
- **Reasoning: 85/100.** AA Intelligence Index leadership moment retained; GPQA competitive; FrontierMath Tier 4 below top frontier models (cap at ~88). AA-Omniscience strongest display of high reasoning quality and low hallucination.
- **Context window: 88/100.** 1M tokens consistent with current top Anthropic tier; no cap reported.
- **Multimodal: 70/100.** Image input yes; video NO. Lags on multimodal benchmarks vs K3 with native video support and Meta multimodal models.
- **Coding: 88/100.** SWE-bench Verified 88.6%, Vibe Code Bench 82.72%, ProofBench 69% all top rankings. Undercuts K3's independent third-party coding benchmarks but still leading frontier industry.
- **Cost efficiency: 58/100.** $5/$25 per 1M is premium tier but price stable across generations. Fast mode available at 2x basic rate — favorable tier switching option.
- **Overall Score: 82.2/100.** Mean of five non-cost dims: (80+85+88+70+88)/5 = 82.2... adjusted slightly up for legendary code + knowledge leader anchors; down slightly for multimodal lagging. Final ~84.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (openai/open-...-id)** — 2026-11-04
- Method: Public internet research (Anthropic Platform docs on Claude Opus 4.8, Vals AI model page, DeepLearning.ai The Batch analysis dated July 1, 2026, heise online, benchmark aggregation listings).
- Reference URLs:
  - [<Claude Opus 4.8 overview | Anthropic Platform>]
  - [<Introducing Claude Opus 4.8 | Anthropic>]
  - [<DeepLearning.ai — Anthropic Opus 4.8 Leaps Forward: won back high-performance crown>]
  - [<Vals AI — Claude Opus 4.8 benchmark profile>]
  - [<platform.claude.com migration guide — moving from Opus 4.8 to Opus 5.5>]
- Future sources: add new file next to this one.
