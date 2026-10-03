# Mercury 2.5 — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Mercury 2.5
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5
- **Short description:** Inception's fastest reasoning model and its latest diffusion LLM (dLLM) — produces and refines multiple tokens in parallel instead of sequentially, reaching 1,107 tokens/sec on commonly available NVIDIA GPUs; positioned as "the most capable diffusion LLM on the market" with quality comparable to cost-optimized frontier models (GPT-5.6 Luna Low, Gemini 3.5 Flash-Lite, Claude Haiku 4.5).
- **Provider / access:** Inception (Inception Labs) — OpenRouter `inception/mercury-2.5` (Inception provider: 0.83s latency, 26 tok/s, 99.47% uptime).
- **Release / knowledge:** 2026-09-08 (BenchLM). Knowledge cutoff not captured.
- **IDs:** `mercury-2.5`; folder `mercury-2.5`.
- **Context window:** 260,000 tokens.
- **Modalities:** Text in, text out.
- **Pricing (as of 2026-10):** $0.20 / $0.75 per 1M input/output list (AA lists $0.25 / $0.75 — minor input-price conflict); launch 80% off: **$0.04 / $0.15**, cache read $0.004; blended ≈$0.14/M at AA's 7:2:1 mix.
- **Architecture:** Diffusion language model (dLLM) — parallel multi-token production/refinement; largest diffusion language model trained to date per the vendor.

### Raw benchmarks found

**Vendor-reported (Inception launch chart; BenchLM transcription):**
- GPQA Diamond **79.0%**; AA-LCR **68.0%**; SciCode **38%**; IFBench **77%**; τ³-bench **96.0%**; DeepSearchQA **34.0%**; Terminal-Bench 2.1 (Vals) **34.1%**; AA-Omniscience accuracy 22.0%, hallucination rate 67.0%.
- Positioning claims: ~40% intelligence increase over Mercury 2; comparable quality to GPT-5.6 Luna (Low), Gemini 3.5 Flash-Lite, Claude Haiku 4.5.

**Artificial Analysis (independent):** Intelligence Index **12.3** (median 12 — below average); HLE **11.8%**; AA-LCR **71.7%**; GDPval-AA **0.0%**; CritPt **0.0%**; SciCode **38.5%**; AA-Omniscience accuracy **22.7%** / non-hallucination **19.7%** (≈80% hallucination — a major weakness; AA-Omniscience Index −39.5%); 35M tokens generated per Index task vs 92M median ("notably fast and highly concise"); $0.12 per Index task.

**BenchLM:** overall **35.18/100**, #148 of 783 (partial coverage, conservative). **ModelCap:** preliminary Index **55.8**, #90 of 280, measured on only 1 public benchmark (range 36.6–75.0).

## Scores

- **Tool use: 61/100.** Native parallel tool calls and schema-aligned JSON output; τ³-bench 96.0% and DeepSearchQA 34.0% are vendor-reported (the τ³-bench figure is striking and unreplicated); Terminal-Bench 2.1 (Vals) 34.1% is the more conservative agentic anchor.
- **Reasoning: 56/100.** GPQA Diamond 79.0% (vendor) is strong, but AA's independent rows tell a harder story: HLE 11.8%, Intelligence Index 12.3, CritPt 0.0%, and ~80% hallucination on AA-Omniscience — the composite lands mid-pack, not frontier.
- **Context window: 73/100.** 260K with AA-LCR 71.7% (AA) / 68.0% (vendor) — measured long-context retrieval at a sub-1M window.
- **Multimodal: 15/100.** Text-only per captured sources.
- **Coding: 51/100.** SciCode 38.5% (AA) / 38% (vendor) and Terminal-Bench 2.1 34.1% (Vals) — mid-tier; positioned for coding subagents but no SWE-bench row captured.
- **Cost efficiency: 89/100.** $0.04/$0.15 launch pricing (80% off list $0.20/$0.75), blended ≈$0.14/M, 1,107 tok/s on standard GPUs — the cost-speed story is the model's core claim; docked one notch for the promotional window and the AA $0.25 input-price listing.
- **Overall Score: 51.2/100.** Mean of Tool use 61, Reasoning 56, Context window 73, Multimodal 15, Coding 51 = 51.2.

> **Gap vs folder average (51.5): −0.3.** Effectively on the peer set. The spread is driven by two unreconciled pictures: vendor rows (GPQA 79.0%, τ³-bench 96.0%) would score far higher, while AA's independent rows (Index 12.3, HLE 11.8%, ~80% hallucination) pull the composite down. The 1,107 tok/s diffusion architecture and launch pricing are the genuine differentiators; hallucination and the missing standard-agent rows are the risks.

## Notes

- Verification trail: Inception "Introducing Mercury 2.5" launch (architecture; 1,107 tok/s; capability set; launch chart with τ³-bench/DeepSearchQA/IFBench/SciCode/GPQA/AA-LCR/TB-Vals rows; quality-parity claims; pricing), OpenRouter page (pricing tiers, provider stats, 260K context), Artificial Analysis model page (independent rows, token-efficiency and cost-per-task figures, hallucination rate), BenchLM (release date 2026-09-08; overall score/rank), ModelCap (preliminary index).
- Known conflicts: list input price $0.20 (Inception) vs $0.25 (AA); vendor GPQA 79.0% vs no independent GPQA row; vendor τ³-bench 96.0% unreplicated; vendor AA-LCR 68.0% vs AA 71.7%.
- Open questions: knowledge cutoff; independent GPQA/τ³-bench replication; end date of the 80% launch discount; hallucination mitigation.

Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03

Future sources: independent replications, discount end date, hallucination mitigations.
