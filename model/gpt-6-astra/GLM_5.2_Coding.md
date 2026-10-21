# GPT-6 Astra — findings by GLM 5.2 Coding

- Source: OpenAI (`gpt-6-astra`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's flagship, released 2026-09-03 — "the world's most intelligent and aligned model," largest training run in OpenAI history (100,000+ GPUs at Stargate, Texas), first release where earlier OpenAI models supervised training. First model to hit the Critical cybersecurity threshold under OpenAI's Preparedness Framework, which drove a staged rollout (Trusted Access Program → paid ChatGPT plans + API + AWS Bedrock). ARC-AGI-3 99.9%, FrontierMath T4 97.6%, ExploitBench 100%.
- **Provider / access:** OpenAI API, ChatGPT Plus/Pro/Business/Enterprise (+ Astra Pro tier), Microsoft Azure, AWS Bedrock (`gpt-6-astra`), Zero Data Retention for eligible API customers; advanced cyber capabilities gated behind the Daybreak program. BenchLM ranks it #3 of 227 (84.03/100); #1 Reasoning, #7 Agentic.
- **Release / knowledge:** 2026-09-03. Knowledge cutoff not stated in sources reviewed.
- **IDs:** `openai/gpt-6-astra`; no Zen Free ID — paid flagship.
- **Context window:** 1.05M tokens (BenchLM, Vellum). Long-context retrieval: MRCR v2 8-needle 100% (256–512K), 96.3% (512K–1M).
- **Modalities:** text + image input; text out; explicit reasoning mode (max effort for launch scores); computer use (desktop/CRM/forms, KiCad/Blender/Excel/Power BI demos); tool calls; Codex cross-window persistent notes.
- **Pricing (as of 2026-10-09):** $10 / $50 per 1M in/out — matches Fable 5.1, 2.5x GPT-5.6 Sol's promo $4/$20, ~8x Muse Spark 1.3 and Gemini 3.8 Flash. Fast mode 2.5x speed at 2x price; separate cache rates (per family pattern: cached input ~10% of input = $1.00).
- **Architecture:** proprietary, closed weights; parameters undisclosed; supervised-by-model training; strengthened cyber safeguards + misalignment monitoring (Preparedness: Critical).

### Raw benchmarks found

> Primary: OpenAI 2026-09-03 launch table + system card (via Vellum category-by-category article + BenchLM snapshot). Vendor-run unless noted; Epoch AI notes OpenAI funded part of FrontierMath and has exclusive access to a portion; The New Stack flagged harness caveats on several rows.

Agent / tool use:

- Agents' Last Exam: **59.3** vs Sol's 53.6 (OpenAI).
- OSWorld 2.0: **72.6%** vs Sol's 65.7%, in ~40 min/task vs 75 (−47% time/task); Mind2Web 1.9x faster with Codex harness.
- ScreenSpot-Pro (pixel-level UI): **92.7%** vs Sol's 76.9%.
- AutomationBench: **41.4%** vs Fable 5.1's 31.4%, Opus 5's 26.9%, Sol's 18.1% — biggest professional-work gap in the announcement.
- BrowseComp: **91.5%** vs Sol's 90.4%.
- BenchCAD: **95.9%** vs Fable 5.1's 84.3% (modified eval settings noted), Sol's 83.3%.
- Artificial Analysis Intelligence Index v4.1.1 (independent): **61.2** — behind Fable 5.1's 65.7, Opus 5's 63.1, Fable 5's 62.1. AA Coding Agent Index: Astra 67.0 vs Fable 5's 68.1, Fable 5.1's 67.2 — three-way tie.

Reasoning / knowledge:

- ARC-AGI-3: **99.9%** (announcement table; The New Stack cites 98.6% — likely different harness) vs Opus 5's 30.2%, Sol's 7.8%.
- FrontierMath v2 Tier 4: **97.6%** vs Fable 5.1/5's 87.8%, Opus 5's 73.2% (Epoch funding caveat applies).
- GPQA Diamond: **96.0%** — highest published at the time.
- Terminal-Bench Science 0.1: **64.6%** vs Fable 5.1's 52.6% (Opus 5.5 later posted 63.3% via OpenAI's Sol 6.1 table — different harness).
- HLE with tools: **57.2%** — the one academic loss: trails Fable 5.1's 65.0%, Fable 5's 63.8%, Opus 5's 63.6%.
- Math: two further prime-gap proofs post-launch (10 formal results from internal version in August, ~$2,000 token cost).

Coding:

- DeepSWE v1.1: **74.1%** vs Sol's 72.7% (OpenAI run) — but Muse Spark 1.3 max-effort **75.4%** (Meta) tops it; public leaderboard had Gemini 3.8 Flash & Opus 5 ≈74% with overlapping uncertainty.
- Terminal-Bench 4.0: **57.7%** vs Fable 5.1's 55.8%, Opus 5's 52.3%, Sol's 37.3%.
- FrontierCode 1.1 Main: **53.3%** — trails Fable 5's 53.5% and Opus 5's 53.4%; Extended: **64.5%** vs Fable 5's 64.9%.
- Internal Database Migration: **63.9%** vs Sol's 42.7%.
- SWE-Bench Pro / Terminal-Bench 2.x: not published by OpenAI for Astra (BenchLM notes sparse backbone coverage).

Science / health / cyber (secondary):

- GeneBench Pro **37.8%** (vs Sol 28.7%); LifeSciBench 60.3%; HealthBench Professional 63.4%; MedChemBench 49.3% (internal).
- ExploitBench **100%** (Sol 78.5, Fable 5.1 70.0, no safeguards); ExploitGym 42.4% (six-hour limit removed); contamination-controlled V8 port: 39.0% ACE vs Sol's 5.5%; two zero-days found during eval (disclosed to maintainers). SRE-Bench 88.0% single-attempt / 99.2% pass@4.
- Alignment: ExploitGym honeypot cheating 0.0% vs Sol's 48.2%; cyber jailbreak refusal 91.5% vs 59%; internal hallucination 4.2% vs 12.2%. Disclosed regression: written reasoning harder to monitor than Sol on evasion-eliciting evals; scaling withheld until monitorability regained.

Long context:

- MRCR v2 8-needle: **100%** at 256–512K, **96.3%** at 512K–1M (Sol: 91.5% / 73.8%).

### Normalized scores (1–100)

> Derivation per `../../model-comparison.md` v4. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 97/100.** Agents' Last Exam 59.3, OSWorld 72.6% at −47% time/task, ScreenSpot-Pro 92.7%, AutomationBench 41.4% (largest gap published), BenchCAD 95.9 — best-in-table on nearly every agent row; capped by the independent AA Index where it trails all three Claudes (61.2 vs 65.7) and the AA Coding Agent Index tie.
- **Reasoning: 98/100.** ARC-AGI-3 99.9% (saturation), FrontierMath T4 97.6%, GPQA 96.0% (highest published), BenchLM #1 Reasoning — the intelligence headline; docked 2 pts for the HLE-with-tools loss (57.2% vs 65.0%) and Epoch/harness funding caveats on the marquee rows.
- **Context window: 100/100.** 1.05M tokens with MRCR 100%/96.3% across the full window — retrieval holds at 1M; plus Codex cross-window persistent notes (a workflow multiplier). Full marks.
- **Multimodal: 70/100.** Text + image input, text out; ScreenSpot-Pro 92.7% shows elite screen/GUI understanding and BenchCAD 95.9% implies rendered-view understanding, but no native audio/video input verified — computer use is agentic, not sensory breadth. Above the +image band for GUI/screen specialization.
- **Coding: 94/100.** TB 4.0 57.7% best-in-table, DeepSWE 74.1% ties the frontier cluster (Muse 75.4, 3.8 Flash 74.0, Opus 5 74.0), DB migration 63.9% huge over Sol; capped because FrontierCode Main/Extended both go to Claudes and "best SWE model" is contested on independent aggregates.
- **Cost efficiency: 25/100.** $10/$50 flagship pricing — the most expensive mainstream tier alongside Fable 5.1; OpenAI's price-per-task defense (fewer tokens on several evals) is unproven per The New Stack; Fast mode doubles price. Only AutomationBench-style delegation at scale justifies it.
- **Overall Score: 92/100.** (97 + 98 + 100 + 70 + 94) / 5 = 91.8 → 92. Best-fit: the peak-intelligence delegator for computer use, math/science research, and cyber defense (Daybreak) where cost is secondary; Sonnet 5.5/Gemini 3.8 Flash/GPT-6.1 Sol cover 90%+ of its capability at 20–25% of the price for routine work.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/glm-5.2-coding)** — 2026-10-09
- Method: independent public internet research (OpenAI launch table + system card via Vellum category-by-category article, BenchLM snapshot, The New Stack caveats, ARC Prize verified rows); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.