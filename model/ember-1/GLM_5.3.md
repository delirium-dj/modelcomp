# Ember 1 — findings by GLM 5.3

- Source: Fireworks AI (`fireworks/ember-1`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-10-02 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember 1 (Ember-1)
- **Short description:** The first specialized model from Fireworks Research — built on Kimi K3 and trained (50+ experiments, 200+ evaluations) to reason efficiently: "Kimi K3's quality with 40% fewer tokens". Flag: a distilled/retrained variant of Kimi K3, not an independent architecture; Research Preview on Fireworks Serverless. Second-pass status: still a Research Preview (no graduation announcement found); weights not released, self-hosting not possible (syncai). Second-pass independent corroboration: the vendor's core claim now has three independent confirmations (below).
- **Provider / access:** Fireworks Serverless API, model path `accounts/fireworks/models/ember-1` (OpenAI-compatible); OpenRouter `fireworks/ember-1` (Fireworks sole provider, ~57-70 tok/s). Not on OpenCode Zen.
- **Release / knowledge:** released 2026-09-22/23/24 (model card / blog / OpenRouter listing dates); knowledge cutoff not published.
- **IDs:** `accounts/fireworks/models/ember-1`; `fireworks/ember-1` (OpenRouter). No Zen ID.
- **Context window:** 1,040K tokens (official model card; OpenRouter/BenchLM list 1.0-1.04M).
- **Modalities:** text and image input, text output; reasoning always in the loop (shorter traces by design); function calling supported; fine-tuning not supported.
- **Pricing (as of 2026-10-12):** $3.00 / $15.00 per MTok in/out ($0.30 cached input) — unchanged; measured serving: **49-69 tok/s (52 median), 0.65 s TTFT, 33.7 s P50 end-to-end, 98.95% availability** (saascity); ~40% fewer tokens per task at comparable quality (vendor), independently confirmed at **23% fewer reasoning tokens and 3.4x faster wall-clock** (daily.dev hands-on) and **$4.63 per 1,000 executed tasks, 9/9 pass, 4.1 s mean** (DataLLM Lab, priced 2026-10-02).
- **Architecture:** proprietary serving of a post-trained Kimi K3 base (2.78T-class MoE inherited); new reasoning-shortening algorithms across math, coding, instruction following, conversation, search, tool use, and software engineering; token reduction measured at 15.5-51.9% across benchmarks (braindetox analysis).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.0%** (official, N=89 — beats K3-max's 80.9% at -51.9% tokens / -$23.1 per task)
- **NEW independent rows (Vals, via BenchLeader 2026-10-12):** Tax Agent Bench **68.0% #12**, Legal Research Bench **44.7% #15**, Harvey HLAB 9.2% #17, Finance Agent v2 51.9% #31, Terminal-Bench 4.0 **19.7% #19** — a solid mid-field professional-agent cluster, the first independent agentic measurements for this ID
- τ²-bench Airline: **66%** (official, N=50; beats K3's 64%)
- GDPval / OSWorld / MCP Atlas / Claw-Eval: no verified public score found (unchanged)

Reasoning / knowledge:

- **Vals Index: 50.81%** (Vals AI, 16 benchmarks — the first independent composite; mid-tier, consistent with the vendor's K3-parity claim)
- GPQA Diamond / HLE / AIME: still no direct public rows for Ember-1 (unchanged); the quality-parity-with-K3-max claim now independently corroborated: **14/15 perfect runs vs K3's 15/15 on logic/scheduling/probability sets** at 23% fewer reasoning tokens (daily.dev/thenewstack hands-on, 5 runs each)
- Excel Modeling Benchmark: **63.4% #26** (Vals — the first independent knowledge row)
- Specialized Intelligence Index (Doximity Bedside Bench, 500 physician-validated cases): Pareto frontier on cost/task incl. GPT-5.6 Sol, GPT-6 Astra, Claude Opus 5 (official; unchanged)
- BenchLM composite: still not computed (unranked)

Coding:

- SWE-bench Verified: **92.2%** (official, N=500; K3-max 93.2% — parity within 1 point at -15.5% tokens / -$68.1 per task)
- DeepSWE 1.1: **75.2%** (official, N=113 — beats K3-max's 66.4% by 8.8 points at -23.7% tokens / -$126.9 per task)
- SWE-Interact: **20.0%** (official, N=75; K3-max 21.3%)
- Live A/B (two customers' production traffic): score 0.753 vs K3's 0.751, steps 21.4 vs 23.8, output tokens 29.9K vs 49.3K (official)
- **NEW independent: executed-Python benchmark 9/9 at $4.63 per 1,000 tasks, 4.1 s mean** (DataLLM Lab)

Long context:

- MRCR / RULER / GraphWalks: no verified public score found (1,040K window, official spec; unchanged).

### Normalized scores (1–100)

- **Tool use: 85/100.** Held: the vendor's TB2.1 82.0% (beating its own K3-max parent) and τ² Airline 66% are now joined by an independent professional-agent cluster — Tax #12, Legal Research #15, TB4 19.7% #19, HLAB #17, Finance #31 — solidly mid-field-plus, exactly where 2026-10-02 placed it; GDPval/OSWorld/MCP rows still missing.
- **Reasoning: 72/100.** Held: the first independent composite (Vals Index 50.81%) and the daily.dev 14/15 parity test confirm K3-class quality without moving it — no direct GPQA/HLE rows exist, and the evidence basis shifts from vendor-only to vendor+independent at the same mid-high level.
- **Context window: 92/100.** Held: 1,040K official spec (≥1M tier); no retrieval-quality rows.
- **Multimodal: 65/100.** Held: image input officially supported; no measured vision scores, no video/audio.
- **Coding: 92/100.** Held and reinforced: SWE-bench V 92.2%, DeepSWE 75.2% (+8.8 over K3-max), production A/B parity at -39% tokens, plus the independent DataLLM 9/9 executed-Python pass — still capped by Research-Preview status and no long-horizon rows beyond SWE-Interact 20.0%.
- **Cost efficiency: 78/100.** Held: $3/$15 list with the efficiency claim now triple-confirmed independently (23% fewer reasoning tokens, 3.4x faster, $4.63/1,000 executed tasks) — the per-task value case is the strongest in this batch at K3-parity quality; the cap remains the research-preview status and single-provider lock-in.
- **Overall Score: 81/100.** Half-up mean of the five quality dims: (85 + 72 + 92 + 65 + 92) / 5 = 81.2 → 81 — unchanged from 2026-10-02: the second pass replaced vendor-only evidence with independent confirmation (Vals Index, professional-agent rows, two hands-on efficiency tests) at the same levels. A token-efficient Kimi K3: near-frontier agentic coding at roughly half the per-task cost — the go-to for volume coding workloads, pending research-preview graduation.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-10-02 report (Fireworks' official launch post and model card re-verified, Vals AI model page — first independent composite and professional-agent rows, BenchLeader data as of 2026-10-12, plus independent hands-ons: daily.dev/thenewstack K3-parity test, DataLLM Lab executed-Python benchmark, saascity serving measurements, braindetox token-reduction analysis, explainx, digitalapplied, spiritt, llmreference, syncai, openmodels, gradually, oflight, lavx, aioga, artificialwatch; three successful web searches); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
