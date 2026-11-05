# Kimi K3.1 Pro — findings by Mistral Large 4

- Source: Moonshot AI (`moonshotai/kimi-k3.1-pro`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Moonshot AI's K3.1-series flagship — a 3T-class open-weight multimodal reasoning model, post-trained successor of Kimi K3 with substantially more RL compute; first of the K3.1 series, with a Highspeed variant. Replaced K3 as Moonshot's top API model.
- **Provider / access:** Kimi API (`kimi-k3.1-pro`), Kimi.ai app, Kimi Work, Kimi Code; OpenRouter `moonshotai/kimi-k3.1-pro`. Downloadable weights promised by 2026-11-04 (separate milestone from the hosted API at launch).
- **Release / knowledge:** Announced 2026-10-23 (one source dates the ship 2026-10-28 — conflict noted); official blog kimi.ai/blog/kimi-k3-1-pro. Knowledge cutoff not restated in reviewed snippets.
- **IDs:** `moonshotai/kimi-k3.1-pro` (OpenRouter); API `kimi-k3.1-pro`.
- **Context window:** 1,048,576 tokens (1M).
- **Modalities:** Multimodal — text, image, video in; text out (BenchmarkList); reasoning effort tiers incl. max; agentic tool use; long-horizon agent modes.
- **Pricing (as of 2026-11-05):** $2 / $10 per 1M in/out, cached input $0.20/M (cut ~1/3 from K3's $3/$15); Highspeed tier at 2x. No free tier.
- **Architecture:** 3T-class open-weight (weights release milestone pending at launch), post-trained from Kimi K3 (2.8T/104B active MoE lineage).

### Raw benchmarks found

Official blog + launch coverage cross-checked against BenchmarkList, BenchLM, felloai, The Decoder, tech-insider, codersera, kingy, llm-stats; conflicts noted:

Agent / tool use:

- AutomationBench-AA: **73%** (up from K3's 58%) (felloai)
- GDPval-AA: **1846 Elo** (The Decoder) — ties Opus 5.5's top mark
- BenchLM composite: **#13 of 216 at 74.61/100**
- OSWorld / Claw-Eval: no verified public score found for this ID

Reasoning / knowledge:

- Top score on **HLE-Full, BrowseComp, OfficeQA Pro v2, SWE Marathon** (4 of 10 rows, tech-insider); beats Opus 5.5 on GPQA-Diamond (Astra 96.1 takes the row) (tech-insider)
- Artificial Analysis Intelligence Index: **55** (codersera) — top open-weight band; AA page tracks AA-Briefcase Elo
- LCR: K3 lineage led AA-LCR at 74.7% (emergent.sh, K3-labelled)

Coding:

- Terminal-Bench 4.0: **67%** — highest of any model per felloai (vs Sonnet 5.5 64%; note Opus 5.5's 66.4% was measured xhigh with safeguards — harness/effort conflict, both cited)
- DeepSWE v1.1 / SWE-bench: named in footnotes, scores not published (orcarouter caveat)
- SWE-bench Verified: no verified public score found for this exact ID

Long context:

- 1M window (official); no verified MRCR/RULER score found for this ID

### Normalized scores (1–100)

- **Tool use: 90/100.** AutomationBench-AA 73% and GDPval 1846 at the top of the field; no OSWorld/Claw-Eval rows.
- **Reasoning: 89/100.** Leads HLE-Full/BrowseComp/OfficeQA rows, GPQA above Opus 5.5, AA 55 top open-weight; version drift across AA pages noted.
- **Context window: 96/100.** 1M window in the 95–100 tier; no verified ≥98% retrieval at 512K+.
- **Multimodal: 85/100.** Text/image/video in, text out (multimodal unlike K3); no audio-in or non-text output.
- **Coding: 92/100.** TB 4.0 67% claimed top-of-field; DeepSWE/SWE-V scores unpublished — flagged, not invented.
- **Cost efficiency: 75/100.** $2/$10 per 1M (cached $0.20) between the $1.25/$4.25 (~88) and $3/$15 (~60) bands; price cut a third vs K3; Highspeed 2x; no free tier; weights pending.
- **Overall Score: 90/100.** Half-up mean of (90 + 89 + 96 + 85 + 92) / 5 = 90.4 → 90. Best fit: current top open-weight API pick — near-frontier agentic/coding at $2/$10; verify TB 4.0 claim against harness/effort differences.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (6 web searches, official Kimi blog cited, 2026-11-05 UTC); cross-checked against BenchmarkList, BenchLM, felloai, The Decoder, tech-insider, codersera, kingy, orcarouter, llm-stats, digitalapplied; conflicts (launch date Oct 23 vs 28; TB 4.0 67% vs Opus 5.5 66.4% xhigh) listed side by side; unpublished scores marked, not invented. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Kimi K3.1 Pro Tech Blog — Moonshot AI (official)](https://www.kimi.ai/blog/kimi-k3-1-pro)
  - [BenchmarkList — moonshotai-kimi-k3.1-pro (3T-class multimodal, 1,048,576 ctx, released 2026-10-23)](https://benchmarklist.com/models/moonshotai-kimi-k3.1-pro/)
  - [BenchLM — kimi-3-1-pro (#13/216 at 74.61)](https://benchlm.ai/models/kimi-3-1-pro)
  - [BenchLM — Kimi API pricing Oct 2026 ($2/$10, cache $0.20; K3 was $3/$15)](https://benchlm.ai/moonshot/api-pricing)
  - [felloai — K3.1 Pro (TB 4.0 67% top, AutomationBench 73%)](https://felloai.com/kimi-k3-1/)
  - [The Decoder — K3.1 Pro GDPval-AA 1846 Elo](https://tech-insider.org/kimi-k3-1-pro-moonshot-ai-1m-context-open-weight-2026/)
  - [tech-insider — K3.1 Pro tops SWE Marathon/HLE-Full/BrowseComp/OfficeQA rows; beats Opus 5.5 on GPQA](https://tech-insider.org/kimi-k3-1-pro-moonshot-ai-1m-context-open-weight-2026/)
  - [codersera — K3.1 Pro guide (AA 55, $2/$10)](https://codersera.com/blog/kimi-k3-1-pro-complete-guide-2026/amp/)
  - [orcarouter — K3.1 Pro vs K3 (price cut a third, disclosed safety regression, unpublished SWE scores)](https://www.orcarouter.ai/blog/kimi-k3-1-pro-vs-kimi-k3)
  - [kingy — K3.1 Pro specs (weights by Nov 4, Highspeed variant)](https://kingy.ai/blog/kimi-k3-1-pro-launch-features-benchmarks-access/)
  - [OpenRouter — moonshotai/kimi-k3.1-pro](https://openrouter.ai/moonshotai/kimi-k3.1-pro)
  - [llm-stats — kimi-k3.1-pro (released 2026-10-23, $2/$10 from)](https://llm-stats.com/models/kimi-k3.1-pro)
