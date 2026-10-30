# Muse Wonder 1.0 — findings by GLM 5.3 Flash

- Source: Meta (`muse-wonder-1.0`)
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder (model ID `muse-wonder-1.0`; the API-available member of the Muse Wonder pair — not "Muse Wonder Full", which is a separate subscription-only checkpoint)
- **Short description:** Meta Superintelligence Labs' frontier agent model for the Meta Model API: long-running personal/professional agents, frontier long-horizon coding, computer use, with Active Memory and Active Focus. The deployable half of the 2026-10-12 Wonder launch (codename "Watermelon") — the stronger Muse Wonder Full is Muse-Code-subscription-only.
- **Provider / access:** Meta Model API (base URL dev.meta.ai; OpenAI Responses, OpenAI Chat Completions, and Anthropic Messages formats), OpenRouter as `meta/muse-wonder`, and every Muse Code plan. Preview status per Meta docs.
- **Release / knowledge:** 2026-10-12 release (Meta newsroom/research blog); knowledge cutoff not disclosed.
- **IDs:** `meta/muse-wonder-1.0` (Meta Model API), `meta/muse-wonder` (OpenRouter) — no Free ID exists on Zen
- **Context window:** 1,048,576 tokens (1M) total, no long-context premium on the rate card (dev.meta.ai Model API docs; Handy AI). Max output not published.
- **Modalities:** text, image, video, audio, and PDF input; text output. Tool calling, structured output, search grounding, computer use. Reasoning effort levels `minimal` / `low` / `medium` / `high` / `xhigh` / `max` (dev.meta.ai docs; agent-one.dev spec sheet).
- **Pricing (as of 2026-10-29):** $4.00/Mtok input, $0.20/Mtok cached input, $20.00/Mtok output (dev.meta.ai model page) — identical rate card to Claude Opus 5.5. Also included in Muse Code plans. No free API tier.
- **Architecture:** proprietary, closed weights; parameters undisclosed; trained at Meta's gigawatt-scale Prometheus data center. 8-page model card on launch day; Meta states the unmitigated model could reach its high-risk threshold for chemical/biological misuse, so it ships with classifiers and safety training (Handy AI). Independent observers speculate a smaller pretraining base than Anthropic/OpenAI rivals based on the AA-Omniscience knowledge gap (the-decoder).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2.1: **1770 Elo / 63.5% normalized, #4 of 124** (Artificial Analysis v4.3.2, Oct 27; leader Opus 5.5 68.3%/1866 Elo; Wonder Full 1857)
- AA-Briefcase v1.1: **1659 Elo, #6 of 111** (AA v4.3.2; leader Sonnet 5.5 1812)
- AutomationBench-AA: **68.1%, #9 of 106** on AA's harness (AA v4.3.2; leader Gemini 4 Argon 77.5%) — Meta's own card prints 39.1% for the same row: different harness/scale, both cited
- Harvey LAB-AA (legal): **10.0** (Meta model card — 2.4× Opus 5.5's 4.2; Full leads at 13.1)
- Vals Finance Agent V2: **56.6** (Meta model card)
- JobBench: **70.5** (Meta model card; Opus 75.4)
- OSWorld V2.1 (computer use): **72.6 partial / 34.3 binary** (Meta model card; Fable 5.1 43.1 binary)
- MemoryBench (Meta internal): **85.6** — best of the five-model launch table, a hair above Wonder Full's 85.5
- Personal Superintelligence Index (Meta internal): **54.3** (Opus 5.5 55.2, Full 59.1)
- Terminal-Bench 4.0-AA: **52.0%** (Meta model card, max effort; AA run 33% → 52% vs Spark 1.3; Opus 59.6)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- HLE: **50.1%, #11 of 167** (AA lane via AI IQ/BenchLM; core-lane table on lastexam.ai/Wikipedia also prints 50.1%; Scale Labs' no-tools core run reports 37.3% — unassisted-config lane, cited separately)
- SciCode: **60.3%, #9 of 167** (AA v4.3.2; leader Opus 5.5 66.9%)
- CritPt: **28.3%, #12 of 159** (AA v4.3.2; leader Wonder Full 32.9%)
- Artificial Analysis Intelligence Index: **52 at max** (v4.3) / **52.4** (v4.3.2 per Handy AI) — #6-ish band: behind Opus 5.5 (57.6–58), Sonnet 5.5 (56), Full (55.8–56), Fable 5.1 (53.4), Astra (52.7); +4.3 over Spark 1.3 (48.1)
- AA-Omniscience Accuracy: **25** (AA; vs Opus 5.5 46, Astra 43, Argon 42, Full 30 — the series' documented weak spot)
- AA-Omniscience Hallucination Rate: **26.5%** (BenchLM #18; dev.to rounds to 27%; Full 23.0%, Argon 15%)
- GPQA Diamond / MMLU-Pro / MMMU-Pro: not yet reported for this ID (AI IQ, Oct 27) — no verified public score found
- AA-LCR / CritPt-lane composites: individual LCR value not published — component of the Index only

Coding:

- DeepSWE 1.1 (long-horizon): **78.8%** (Meta model card, Data Curve independent same-harness run; beats Opus 5.5 74.2 and Astra 74.1; second only to Full's 79.0)
- SWE-Marathon (ultra-long-horizon, Abundant AI harness, pass@1): **53.1%** (Meta card; #3 on llm-stats leaderboard of 10; beats Opus 46.3; Full 57.5)
- Terminal-Bench 4.0-AA: **52.0%** (−7.6 vs Opus 5.5)
- ProgramBench (from-scratch programming): **50.0** (−20.5 vs Opus 70.5 — the model's worst coding row)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / Vibe Code Bench: no verified public score found
- Efficiency: ~54k output tokens per Intelligence Index task at max (−10% vs Spark 1.3; Astra 27k, Argon 62k, Fable 78k)

Long context:

- 1M window with no long-context pricing premium; no MRCR/RULER retrieval number published — no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 87/100.** GDPval-AA #4 (1770 Elo), AA-Briefcase 1659, Harvey LAB 10.0 (2.4× Opus) and best-in-table MemoryBench 85.6 keep it in the frontier agent band; uniformly ~3 points behind Wonder Full on every agentic row, and OSWorld binary 34.3 + the Meta-vs-AA AutomationBench harness split (39.1 vs 68.1) cap it.
- **Reasoning: 82/100.** AA Index 52.4 plus HLE 50.1% (#11), SciCode 60.3%, CritPt 28.3% — solidly sub-flagship; AA-Omniscience accuracy 25 (vs Opus 46) is the documented weakness, partially offset by a 26.5% hallucination rate.
- **Context window: 95/100.** Verified 1,048,576-token window (≥1M tier); no published ≥98% retrieval figure at 512K+ keeps it off 100.
- **Multimodal: 92/100.** Text + image + video + audio + PDF input with computer use and structured output; text-only output.
- **Coding: 88/100.** Independent DeepSWE 1.1 78.8% (ahead of Opus 5.5) and #3 SWE-Marathon 53.1% make it elite on long-horizon engineering; Terminal-Bench 4.0 52.0% and ProgramBench 50.0 are well behind Opus — a marathon coder, not a sprint coder ("serviceable at coding" per hands-on review).
- **Cost efficiency: 58/100.** $4/$20 per Mtok matches the methodology's mid-premium band (~$3/$15 ≈ 60, $10/$50 ≈ 30) — but it prices identically to Opus 5.5 while scoring 5–6 Index points lower, so no value edge at its own price point.
- **Overall Score: 89/100.** Mean of the five quality dims (87+82+95+92+88)/5 = 88.8 → 89. Best fit: long-running agentic and long-horizon coding workloads where its DeepSWE/SWE-Marathon/Harvey numbers lead the API-accessible field; weak fit for knowledge-heavy QA (AA-Omniscience 25) and from-scratch program synthesis.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-29
- Method: public internet research — dev.meta.ai model page and Model API docs, Meta model card table, Artificial Analysis (Index post + v4.3.2 sub-scores via AI IQ), BenchLM, OpenRouter, plus independent reviews (Handy AI, dev.to, the-decoder, VentureBeat, agent-one.dev, How I AI hands-on); AutomationBench and HLE harness conflicts cited per source. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
