# Claude Haiku 3.5 — findings by Ling 3.1 Flash

- Source: Anthropic (`claude-3-5-haiku-20241022`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 3.5 (Claude 3.5 Haiku)
- **Short description:** Anthropic's October 2024 fast small-tier model — the smallest Claude 3.5-class model, priced for speed with improved tool use and agentic self-correction over Claude 3 Haiku. Text-only. Superseded by Claude Haiku 4 / 4.5 for new deployments.
- **Provider / access:** Anthropic API (`claude-3-5-haiku-20241022`, Messages API); third-party routes via DigitalOcean (`anthropic-claude-3.5-haiku`) and ZenMux (`anthropic/claude-3.5-haiku`).
- **Release / knowledge:** Released 2024-10-22; knowledge cutoff July 2024 (per Benchgen).
- **IDs:** `claude-3-5-haiku-20241022` (Anthropic); `anthropic/claude-3.5-haiku` (ZenMux). No OpenCode Zen Free ID found.
- **Context window:** 200,000 tokens — verified on llmboard, Benchgen, and provider listings.
- **Modalities:** text in; text out (no vision); tool calls yes (function calling, agentic loops per the model card addendum); JSON mode via Anthropic API.
- **Pricing (as of 2026-10-10):** $1.00 / 1M input, $5.00 / 1M output (Anthropic API list, prompt caching available); third-party from $0.80 / $4.00 per 1M (DigitalOcean, ZenMux).
- **Architecture:** proprietary dense Transformer (Anthropic does not disclose parameter counts for this model).

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **40.6%** (Anthropic model card addendum, 2024-10-22 — better than the original Claude 3.5 Sonnet's 33.4%; pass@1, all tests)
- AssetOpsBench: **57.6%** (official leaderboard, 2025-11-29, per theresanaiforthat)
- Terminal-Bench 2.1 / τ³-Banking / GDPval-AA / MCP-Atlas / Toolathon / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **41.6%** (Anthropic model card addendum, 0-shot CoT; vs Claude 3.5 Sonnet New 65.0%)
- MMLU (5-shot CoT): **80.9%** (Anthropic model card addendum)
- MMLU-Pro (0-shot CoT): **65.0%** (Anthropic model card addendum)
- MATH: **69.2%** (self-reported, 2024-10-22; Benchgen lists 69.4%)
- AIME 2024: **5.3%** (self-reported — very weak competition math)
- HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found

Coding:

- HumanEval: **88.1%** (self-reported, 2024-10-22 — strong function-level completion)
- BigCodeBench: **30.1%** (Benchgen, 2024-10 — below frontier coding models)
- SWE-bench Verified: **40.6%** (see tool use)
- LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench: no verified public score found

Long context:

- No long-context retrieval reported (200K window; no MRCR / RULER / GraphWalks number) — no verified public score found.

### Normalized scores (1–100)

- **Tool use: 48/100.** The only agentic evidence is SWE-bench Verified 40.6% and AssetOpsBench 57.6%; no Terminal-Bench 2.1, τ³-Banking, GDPval-AA, or MCP-Atlas numbers exist for this 2024 model, and the available agentic scores sit below the mid band.
- **Reasoning: 55/100.** MMLU 80.9% and MMLU-Pro 65.0% are mid-band and MATH 69.2% is decent, but GPQA Diamond 41.6% is below the mid-band floor and AIME 2024 5.3% is very weak; no HLE or Intelligence Index number exists.
- **Context window: 70/100.** 200K tokens — the 200K anchor of the 200K–500K band; no retrieval-at-length measurement published.
- **Multimodal: 15/100.** Text-only model (text in, text out) — the text-only floor band.
- **Coding: 60/100.** HumanEval 88.1% is strong function-level completion, but SWE-bench Verified 40.6% and BigCodeBench 30.1% are weak repository/class-benchmark results; no LiveCodeBench or DeepSWE numbers exist.
- **Cost efficiency: 62/100.** $1.00/$5.00 per 1M (Anthropic list) — far above the $0.15/$0.60 small-model class of 2026; third-party routes start at $0.80/$4.00.
- **Overall Score: 50/100.** Mean of Tool 48, Reasoning 55, Context 70, Multimodal 15, Coding 60 = 49.6 → 50. Best-fit: legacy fast small-tier model for simple function-calling and extraction at moderate cost; superseded by Claude Haiku 4.5 for new work.

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-10
- Method: public internet research (Anthropic model card addendum 2024-10-22, llmboard, Benchgen, theresanaiforthat benchmark profiles); scores are normalized 1–100 interpretations, not official vendor scores. Note: some aggregators swap the GPQA (41.6%) and MMLU-Pro (65.0%) values — the Anthropic card addendum is the primary source and is used here.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
