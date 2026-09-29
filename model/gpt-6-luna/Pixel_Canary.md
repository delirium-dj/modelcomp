# GPT-6 Luna — findings by Pixel Canary

- Source: OpenAI (`openai/gpt-6-luna`, reseller ID `openai/gpt-6-luna` / `gpt-6-luna-pro`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna — the low-cost volume tier of the GPT-6 family (no OpenCode Zen Free ID).
- **Short description:** OpenAI's September 2026 budget tier, marketed as delivering near-frontier agentic repository work (DeepSWE) at a fraction of flagship cost, with a 1.05M-token window and ARC-AGI-1 performance that exceeds most frontier models.
- **Provider / access:** OpenAI first-party; nano-gpt resells `openai/gpt-6-luna` and `gpt-6-luna-pro`; OpenAI-compatible Responses/Chat Completions with tool calling and structured output.
- **Release / knowledge:** 2026-09-22 (models.dev `release_date`) — one week old at the time of writing; BenchLM coverage is therefore only 27 of 486 benchmarks. Knowledge cutoff not published.
- **IDs:** `openai/gpt-6-luna`; successor naming continues the Luna line from GPT-5.6 Luna.
- **Context window:** 1,050,000 input / 128,000 max output (models.dev; BenchLM lists 1.05M).
- **Modalities:** Text + image in; text out. Reasoning model (effort tiers exposed by hosts).
- **Pricing (as of 2026-09-29):** $0.10 / 1M input, $0.50 / 1M output, $0.01 cached reads, $0.125 cache writes — the cheapest 1M-class OpenAI tier currently listed.
- **Architecture:** Proprietary; undisclosed parameters. Related earlier model: GPT-5.6 Luna.

### Raw benchmarks found

BenchLM profile `gpt-6-luna` (updated 2026-09-28; coverage-flagged composite **66.45/100, rank #25 / 512**):

- Agentic / tool use: AA AutomationBench **53.2%**; AA Terminal-Bench 4.0 **12.6%**; GDPval-AA **Elo 1367 / 43.4%**; AA Briefcase **1299**; ExploitGym **11.6%**; GDP.pdf **20.4%**
- Coding: DeepSWE **66.6%**; AA-SciCode **54.6%** — no SWE-bench Verified/Pro, Terminal-Bench 2.1 or LiveCodeBench row yet published for this exact ID
- Reasoning: ARC-AGI-1 **86.7%**; ARC-AGI-2 **59.3%**; ARC-AGI-3 **0.1%**; CritPt **19.4%**; AA Intelligence Index **37.3**; AA-HLE **38.5%**
- Long context: AA-LCR **83.3%**; MLCR-AA **16.1%**
- Factuality: AA-Omniscience accuracy **43.8%** with hallucination rate **76.7%** (index 0.7)
- Multimodal: AA-MMMU-Pro **75.5%**
- MRCRv2 / RULER / GraphWalks, video suites, IFEval, Terminal-Bench 2.x/3.0: no verified public score found for this exact ID

### Normalized scores (1–100)

- **Tool use: 58/100.** AA AutomationBench 53.2% and GDPval Elo 1367 are respectable for a week-old budget tier, but AA Terminal-Bench 4.0 12.6% and ExploitGym 11.6% show it is not yet an autonomous agent; capped by how little agentic evidence exists.
- **Reasoning: 56/100.** ARC-AGI-1 86.7% is exceptional, but AA Intelligence Index 37.3, AA-HLE 38.5%, CritPt 19.4% and a 76.7% hallucination rate against 43.8% accuracy put its raw reasoning and honesty in the middle of the field.
- **Context window: 82/100.** 1.05M input / 128K output with AA-LCR 83.3% is strong; capped by MLCR-AA 16.1% (memory/persistence under multi-turn load) and no published retrieval-depth curve.
- **Multimodal: 56/100.** Text + image in, text out only; AA-MMMU-Pro 75.5% mid-pack and GDP.pdf 20.4% weak; no video, audio or generation path.
- **Coding: 66/100.** DeepSWE 66.6% is the headline (OpenAI claims near-frontier repository work at this price) and AA-SciCode 54.6% is acceptable, but the flagship suites have no published row for this ID yet, so the score rests on thin evidence.
- **Cost efficiency: 92/100.** $0.10/$0.50 per 1M with $0.01 cached reads is among the cheapest 1M-context tiers available; capped only because there is no OpenCode Zen Free ID (a $0 tier would score 100).
- **Overall Score: 63.6/100.** (58 + 56 + 82 + 56 + 66) / 5 = 63.6 — a very cheap 1M-context volume tier whose benchmark record is still forming; buy it for unit economics, revisit once Terminal-Bench and SWE rows land.

---

## Signature

- Provided by: **Pixel Canary (pixel-canary, early access via Vercel AI Gateway — underlying model not yet announced)** — 2026-09-29
- Method: Public internet research (BenchLM profile `gpt-6-luna` refreshed 2026-09-28, models.dev provider/pricing index); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
