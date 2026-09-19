# Claude Fable 5.1 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-fable-5-1`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1 (general availability; trusted-access twin sold as Claude Mythos 5.1)
- **Short description:** Anthropic's frontier model above Opus 5 for the most demanding reasoning and long-horizon agentic work — launched Sept 1–2, 2026 alongside Mythos 5.1 (same weights, safeguards lifted for vetted cyber/life-science users via Project Glasswing). AA Intelligence Index #1; strongest published coding/reasoning rows of its generation.
- **Provider / access:** Anthropic Messages API (`claude-fable-5-1`), Amazon Bedrock (`anthropic.claude-fable-5-1`), Google Cloud, Microsoft Foundry, claude.ai (Pro/Max/Team/Enterprise), Claude Code 2.1.250+. Not on OpenCode Zen (no Zen Free ID).
- **Release / knowledge:** Released September 1, 2026 (Mythos 5.1 Sept 1–2); retirement committed no sooner than Sept 1, 2027; knowledge cutoff June 2026 (freshest of any Claude model).
- **IDs:** `claude-fable-5-1` / Bedrock `anthropic.claude-fable-5-1`. Mythos twin: `claude-mythos-5-1`.
- **Context window:** 1,000,000 tokens (default and max, standard pricing across the window); 128,000 max output on the Messages API — verified on Anthropic platform docs.
- **Modalities:** Text, image, PDF in; text out. Thinking: adaptive, always on (cannot be disabled); effort low–max, default high. Tool use, structured outputs, computer use supported.
- **Pricing (as of 2026-09-19):** $10.00 in / $50.00 out per 1M (same as Fable 5); cache reads cut to $0.25 (0.025x input — every other Claude model is 0.1x); Batch $5/$25. AA measured $7.63 per Intelligence Index task (most expensive in class; 190M output tokens across the Index). No free API tier; 30-day data retention required.
- **Architecture:** Proprietary, closed weights; parameters undisclosed. Same tokenizer as Fable 5 (~30% more tokens per text than pre-4.7 models).

### Raw benchmarks found

Agent / tool use:

Agent / tool use:

- GDPval-AA: **1853** (BenchmarkList, rank 2/340; above frontier ~1750 ref)
- AA-Briefcase (agentic knowledge work): **1694 Elo** (rank 2/56)
- DRACO: **87.7%** at max effort (rank 1/13)
- Tau3-Banking: **47.2%** (rank 6/174)
- Toolathlon: **77.8% Pass@1** (81.5% Pass@3, 73.1% Pass^3; rank 6/37)
- Vending-Bench 2: **5421.56** (rank 21/54)
- AutomationBench: **31.4%** (61st percentile; vs Fable 5's 17.1% — a +14 pt jump but weak vs GPT-6 Astra's 69% on AA's AutomationBench)
- OSWorld 2.0 (Anthropic's own evaluation): **77.9% partial / 41.7% strict** (rank 1/3, small field — harness differs from OpenAI's, not directly comparable)
- Harvey Legal Agent Benchmark: **19.1%** all-pass (rank 2/13)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **65.7** on v4.2 (#1/418); **53** on v4.3.2 (Sept reading, #1/200 tie with GPT-6 Astra at max)
- HLE: **65.0%** (with tools; #1/466 on BenchmarkList; OpenAI's cross-table agrees)
- GPQA Diamond: **93.7%** (98th percentile)
- ARC-AGI-2: **90.0%** verified (rank 5/99); ARC-AGI-1: **97.5%**
- CritPt: **31.1%** (rank 2/31)
- AA-LCR: **80.0%** (98th percentile, rank 9/409)
- AA-Omniscience: **43.45** factuality (#1/28)
- FrontierMath Tier 4 (v2): **87.8%** per BenchmarkList (50th pct, rank 3/5) — conflicts with OpenAI's cross-table reading of **52.6%** vs Astra 64.6%; harness discrepancy flagged, not resolved
- Terminal-Bench-Science 0.1: **52.6%** (vs Fable 5's 24.7% — largest published jump of the release)

Coding:

- SWE-bench Pro: **81.2%** (#1/49; vs Fable 5 80.0, Qwen3.8-Max 67.7)
- SciCode: **62.0%** (#1/458)
- AA Coding Agent Index (Claude Code): **62** — tie #1 with GPT-6 Astra (Sept 2026); 78k output tokens per task
- Terminal-Bench 4.0: **55.8%** (rank 3/10; corroborated by OpenAI's table and explainx)
- DeepSWE 1.1: **67.4% Pass@1**
- CursorBench 3.2: **73.4%** (#1/17); Senior SWE-Bench: **34.7%** (#1/18)
- SWE-bench Multilingual: **89.1%** (#3/46); FrontierCode: **63.6%** (#3/29); SWE-bench Multimodal: **54.7%** (#3/15); BenchCAD: **84.3%** (#2/28)
- SWE-bench Verified: no verified public score found for 5.1 specifically

Long context:

- 1M window at standard pricing; AA-LCR **80.0%** (98th percentile); no MRCR v2 reading for 5.1 verified in reviewed sources (OpenAI's table omitted it)

### Normalized scores (1–100)

- **Tool use: 92/100.** GDPval-AA 1853 and AA-Briefcase 1694 Elo sit above the 1750/1694 frontier refs, with DRACO 87.7% #1 and strong Toolathlon; the weak 31.4% AutomationBench percentile and my-harness-only OSWorld figures keep it under 95.
- **Reasoning: 94/100.** HLE 65.0% (#1), GPQA 93.7%, AA-Omniscience #1, AA Index 65.7 (v4.2 #1) — the frontier refs (GPQA 90+, HLE 40+, Index 60+) are all exceeded; docked 5–6 for the ARC-AGI-2 rank-5 position and unresolved FrontierMath harness discrepancy.
- **Context window: 95/100.** Full 1M window at standard pricing with 80.0% AA-LCR (98th percentile); MRCR-at-512K+ retrieval unverified, so no 100.
- **Multimodal: 82/100.** Text/image/PDF in with top-ranked grounded-vision rows (Chartography 86.2% #1, BenchCAD Vision 0.843 #1, Design Arena 1418) — upper 75–90 band; no audio/video in, text-only out.
- **Coding: 93/100.** SWE-bench Pro 81.2% #1/49, SciCode 62.0% #1/458, AA Coding Agent Index 62 tie-#1, TB4.0 55.8%; no SWE-bench Verified corroboration for 5.1 and AA-tie (not outright win) vs Astra cap it below 95.
- **Cost efficiency: 30/100.** $10/$50 per 1M matches the rubric's ~30 anchor; cache reads at $0.25 (4x cheaper than Fable 5) help long-agent loops, but $7.63/task (AA, priciest measured) and 78k-token coding tasks offset it. No free tier; 30-day retention required.
- **Overall Score: 91.2/100.** (92+94+95+82+93)/5 = 91.2. Best fit: the ceiling for reasoning-heavy, long-horizon agentic/coding work when budget permits — pair with cheap cache-read-heavy harness patterns to blunt the $7.63/task cost.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai/glm-5.3-flash)** — 2026-09-19
- Method: public internet research (fresh web search: BenchmarkList dossier, explainx launch analysis, Apidog spec guide, Artificial Analysis model page, OpenAI cross-table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.


