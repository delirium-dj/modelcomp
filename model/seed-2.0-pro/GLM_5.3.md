# ByteDance Seed 2.0 Pro — findings by GLM 5.3

- Source: ByteDance (`ByteDance/Seed-2.0-pro`, hosted on DeepInfra)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-09-25 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ByteDance Seed 2.0 Pro (Doubao Seed 2.0 Pro)
- **Short description:** ByteDance's flagship all-purpose Agent-era model (Doubao Seed 2.0 family — Pro/Lite/Mini/Code variants, released 2026-02-14 via Volcano Engine): complex reasoning and long-chain task execution with multimodal (visual/video) understanding, structured generation, and tool-augmented execution. Second pass resolves the biggest first-pass gap: **the full vendor launch-table now exists** (evals.report tracks 6 verified-as-published scores), the release date and Volcano Engine access are confirmed, and the actual price is lower than DeepInfra's listing. Powers Doubao (155M weekly active users — China's #1 AI app). A newer **Seed 2.1** agent model shipped ~July 2026.
- **Provider / access:** **Volcano Engine native API confirmed** (OpenAI-compatible; aliases `doubao-seed-2-0-pro-260215` etc.); DeepInfra `ByteDance/Seed-2.0-pro` (OpenAI-compatible Chat Completions; JSON mode + function calling + multimodal flags). **Closed API only — no weights** (hardais: "you're renting access, not owning anything").
- **Release / knowledge:** **2026-02-14** (resolved — llm-stats/evals.report/LLMReference/tokenmix all agree); knowledge cutoff not stated publicly.
- **IDs:** `deepinfra/ByteDance/Seed-2.0-pro`; Volcano `doubao-seed-2-0-pro-*` (no OpenCode Zen Free ID — paid tier).
- **Context window:** 256,000 tokens (DeepInfra) / **272K** (airank.dev — minor conflict retained); max output ~65K per curated metadata.
- **Modalities:** text, image, and video in / text out (hour-long video understanding and streaming real-time analysis per vendor); reasoning yes; tool calls yes; JSON structured outputs yes.
- **Pricing (as of 2026-10-12):** **$0.47 in / $2.37 out per 1M** via Volcano Engine ($0.10 cached; family: Code $0.57, Lite $0.14, Mini $0.07 input) — cheaper than the first-pass DeepInfra read ($0.50/$3.00); "3-6× cheaper than comparable frontier models" (LLMReference); Volcano scale: 120T tokens/day.
- **Architecture:** proprietary, closed API; parameters undisclosed.

### Raw benchmarks found

> Second-pass status: the dossier is no longer empty — **all six tracked rows below are the vendor launch table (2026-02-14), verified-as-published by evals.report**. No independent harness coverage (AA/Epoch/Vals/LiveBench/LMArena) exists for this ID — BenchLeader has no page (404) and AA does not track it. The rankllms aggregate (39.5/100, "SWE-bench 21.5") contradicts the vendor table hard and is retained as a flagged conflict pending an independent rerun.

Agent / tool use:

- **Terminal-Bench 2.0: 55.8%** (vendor launch table — gap filled; no TB 2.1/4.0, τ³/τ², GDPval, Claw, Toolathlon, MCP-Atlas rows exist)
- PlanningBench: **All-pass 44.3%, Avg-pass 84.0%, rank 5, Type 1** (self-reported, arXiv 2605.20873 — retained)
- "86% agent score" (tokenmix family review — methodology unpublished, low weight)

Reasoning / knowledge:

- **GPQA Diamond: 88.9%** (vendor — gap filled; just below the 90% bar)
- **HLE: 32.4%** (vendor — gap filled; below the 40% reference)
- **AIME 2025: 98.3**; **MMLU-Pro: 87.0** (vendor launch table via LLMReference/tokenmix/digitalapplied)
- LCR/MLCR/CritPt/AA-Omniscience: still no verified public score; no AA Intelligence Index page exists for this ID

Coding:

- **SWE-bench Verified: 76.5%** (vendor — gap filled) — CONFLICT: rankllms lists "SWE-bench 21.5" for the same ID (different suite or normalization; unreconciled, both retained)
- **SWE-bench Pro: 46.9%** (vendor — gap filled); **LiveCodeBench v6: 87.8%**; **Codeforces rating: 3020** (vendor)
- aiapi-pro's independent test (May 2026, Tencent Cloud HK, 200 prompts × 5 runs) covers LeetCode/HumanEval/MMLU-Pro/GSM8K — numbers not captured this pass; DeepSWE/SciCode/Vibe Code: still unmeasured

Long context:

- 256K/272K window (conflict retained); no public MRCR/RULER/GraphWalks retrieval value — unchanged.

Multimodal:

- **MMMU-Pro: 78.2%** (vendor launch table — gap filled); BabyVision 60.6% (independent, unipat.ai — retained); hour-long video input is a vendor capability claim, unverified by any independent vision battery.

### Normalized scores (1–100)

- **Tool use: 64/100.** Raised from 60: TB 2.0 55.8% is a real mid-band data point (GPT-5.2-official-era territory), and PlanningBench rank-5 plus verified function-calling/JSON support back the platform story — but the modern agentic suites (TB 2.1/4.0, τ, GDPval) remain unmeasured.
- **Reasoning: 72/100.** Raised from 63: GPQA 88.9% just misses the frontier bar, HLE 32.4% misses the 40% reference, and AIME 98.3 + MMLU-Pro 87.0 are strong — a genuine dossier replacing the first pass's single self-reported row; still vendor-only evidence.
- **Context window: 72/100.** Held: 256K (or 272K — conflict retained) sits in the 200K-500K tier; no retrieval-quality data at length.
- **Multimodal: 78/100.** Raised from 76: MMMU-Pro 78.2% (vendor) fills the biggest vision gap alongside the independent BabyVision 60.6%; hour-long video in and text-only out.
- **Coding: 72/100.** Raised from 55: the first pass's provisional bottom-band score rested on zero evidence; SWE-V 76.5%, LCB v6 87.8%, Codeforces 3020 and SWE-Pro 46.9% form a solid mid-high vendor dossier — discounted for the unreconciled rankllms contradiction (21.5) and the absence of any independent coding harness.
- **Cost efficiency: 92/100.** Held: $0.47/$2.37 with $0.10 cached reads undercuts the ~$0.60/$2.20 ≈ 92 anchor on both ends; family tiering (Lite $0.14, Mini $0.07) and 120T tokens/day scale strengthen the value case.
- **Overall Score: 72/100.** Half-up mean of the five quality dims (64+72+72+78+72)/5 = 71.6 → 72, up from 65 — the first pass was explicitly provisional ("re-verify when ByteDance publishes"); the vendor launch table has now published. Best-fit: a cheap, closed-API multimodal agent platform with genuine mid-frontier numbers; treat every score as vendor-claimed until AA/Epoch/Vals pick it up, and note the Seed 2.1 successor for new deployments.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-09-25 report (evals.report verified-as-published launch table — GPQA/HLE/SWE-Pro/SWE-V/MMMU-Pro/TB 2.0; LLMReference/tokenmix/digitalapplied vendor rows — AIME/MMLU-Pro/LCB v6/Codeforces; llm-stats and airank.dev spec pages incl. the 272K conflict; rankllms aggregate flagged as a conflict; hardais license summary; evolink/apirank Volcano Engine coverage; aiapi-pro independent test setup; BenchLeader returned 404 — no page exists; two DDG-lite searches); scores are normalized 1-100 interpretations, not official vendor scores. All benchmark rows are vendor-sourced pending independent harness coverage.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
