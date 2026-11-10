# Union Alpha — findings by Fledge Alpha

- Source: Unbiased (`union-alpha`, now identified as Pareto 26.9)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha → `unbiased/pareto` (Pareto 26.9)
- **Short description:** Stealth-name listing on OpenRouter (Sep 16, 2026), unmasked as Pareto, a routed/bl
- **Provider / access:** OpenRouter (`unbiased/pareto`), Unbiased platform; stealth preview closed Sep 17, 2026.
- **Release / knowledge:** Stealth preview Sep 16, 2026; vendor reveal + paid listing Sep 17, 2026.
- **IDs:** `unbiased/pareto` (formerly `stealth/union-alpha`)
- **Context window:** 262,144 tokens; 131,072 max output; no reasoning control exposed.
- **Modalities:** Text + image in; text out; tools/tool_choice supported; FIM not supported.
- **Pricing (as of 2026-10-02):** $2.50/M in, $0.25/M cached, $7.50/M out — blended while-Aleph rate; no free stealth window since Sep 17.
- **Architecture:** Anonymous blended router — runs several frontier/open models and keeps the best answer; no named laboratory, no weights, no public parameter count.

### Raw benchmarks found

Agent / tool use:

- DeepSWE: **74** (vendor model card; ties GPT-6 Astra and DeepSeek 4.1 Flash on the same vendor chart)
- Terminal-Bench 4.0: **51**; Fable 5.1 56, Astra 58, DeepSeek 4.1 Flash 31
- AutomationBench: not published for the paid listing; agent-loop preset cost ~$2.03 vs Astra ~$9.70
- Agents' Last Exam row absent from the model card.

Reasoning / knowledge:

- HLE (no tools): **49** (Astra 54, Fable 55, DeepSeek 4.1 Flash 39)
- ArXivMath: **88** (Astra 91, DeepSeek 4.1 Flash 28, Fable 72) — strongest relative win

Coding:

- DeepSWE 74, SWE-Bench Verified: only third-party claim ("outperforms GPT-5.6 Sol…"), no row in the paid model card; MMMU-Pro 78; no SWE-bench Verified/Pro rows published.

Multimodal:

- MMMU-Pro **78** vs Fable 81, Astra 87, DeepSeek 4.1 Flash 77. Vendor-chart only.

### Normalized scores (1–100)

- **Tool use: 70/100.** DeepSWE 74 (vendor) ties Astra at launch but no Terminal except 4.0 (51) is published.
- **Reasoning: 70/100.** HLE 49 / ArXivMath 88 — blended-claim ceiling; AA Intelligence Index row unpublished.
- **Context window: 66/100.** 262K window is materially smaller than 1M peers.
- **Multimodal: 68/100.** Text + image input only; no audio/video.
- **Coding: 70/100.** DeepSWE 74 ties Astra on the vendor card, but only five vendor rows exist and no Pro/Verified rows yet.
- **Cost efficiency: 72/100.** $2.50/$7.50 with ~$0.25 cache cheaper than Astra's premium; cheaper than Fable 5.1 by a wide margin.
- **Overall Score: 69/100.** Mean of the five quality dims. Treat all scores as vendor-reported pending official AA/vals rows — no independent reproduction exists.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (OpenRouter reveal coverage, Unbiased Pareto 26.9 model card, CellCog/ SMF/capitalandcompute write-ups, Ox Alpha GPT blog); scores are normalized 1–100 interpretations, not official vendor scores. Anonymity window is closed — real vendor is Unbiased; routing semantics unverified.
- Future sources: add a new file next to this one using the same headings.
