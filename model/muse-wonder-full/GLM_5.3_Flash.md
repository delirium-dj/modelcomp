# Muse Wonder Full — findings by GLM 5.3 Flash

- Source: Meta (`muse-wonder-full-1.0`)
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** Meta Superintelligence Labs' most advanced frontier model (codename "Watermelon"), built for long-running personal/professional agents, frontier coding and computer use. Launched together with the API-available Muse Wonder; the Full variant is the stronger of the pair but is gated behind Muse Code subscriptions. Not a tier of Muse Spark — a distinct, separate model family.
- **Provider / access:** Meta first-party only. NOT on the Meta Model API — Muse Code subscription only (Power Usage $50/month, Maximum Usage $200/month), per dev.meta.ai. The sibling `muse-wonder-1.0` is the one developers can call via the Meta Model API (Responses, Chat Completions, and Messages endpoints). Muse Code CLI runs on macOS/Linux/Windows.
- **Release / knowledge:** 2026-10-12 release (Meta newsroom + research blog); knowledge cutoff not disclosed.
- **IDs:** `meta/muse-wonder-full-1.0` (no Free ID exists on Zen; no public per-token API of any kind at launch — AA explicitly flags "no publicly available API")
- **Context window:** 1,048,576 tokens (1M) total (dev.meta.ai Model API docs; Meta model page lists "Context 1M" for the series). Max output not published for Full.
- **Modalities:** text, image, video, audio, and PDF input; text output (dev.meta.ai docs). Advanced/computer-use vision (screenshots, charts, documents, video). Reasoning: configurable `minimal`→`max` effort on the API sibling; Full evaluated at max ("xhigh" on SWE-Marathon). Parallel tool calls, sub-agent delegation, search-grounding tool. JSON mode: not verified.
- **Pricing (as of 2026-10-29):** no per-token price — subscription-only. Muse Code Power Usage **$50/month**, Maximum Usage **$200/month** (dev.meta.ai). CNBC separately reports the consumer Muse personal-agent app at $20 or $100/month — a different product surface. Sibling `muse-wonder-1.0` API pricing: $4.00/Mtok in, $0.20/Mtok cached in, $20.00/Mtok out. No free tier; no data-usage caveat published for Full (closed subscription product).
- **Architecture:** proprietary, closed weights; parameter count and training details not disclosed (WIRED: Meta "did not disclose details of how new Muse Wonder models were built or trained"). Trained at Meta's gigawatt-scale Prometheus data center. Ships "Active Memory" (context carried across conversations) and "Active Focus" (persistent goal pursuit / error recovery).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0-AA: **57.1%** (Meta model card, max effort; AA's own TB 4.0 run: 33% → 57% vs Muse Spark 1.3, +24)
- GDPval-AA v2.1: **1857 Elo** (Artificial Analysis; +176 vs Spark 1.3's 1681 — top agentic knowledge-work signal)
- AA-Briefcase v1.1: **1729 Elo** (Artificial Analysis; +148 vs Spark 1.3's 1581)
- Harvey LAB-AA (legal agent): **13.1** (Meta model card — top of table; ~3.1× Claude Opus 5.5's 4.2, 1.5× Wonder's 10.0)
- Vals Finance Agent V2: **59.1** (Meta model card — top of table)
- AutomationBench-AA (business workflows): **45.4%** (Meta model card — top vs Opus 5.5 41.2, Astra 41.6)
- JobBench (professional tool use): **75.3** (Meta model card; Opus 75.4 — statistical tie)
- OSWorld V2.1 (computer use): **78.4 partial / 39.4 binary** (Meta model card; binary trails Fable 5.1's 43.1 and Opus's –/81.8 partial)
- MemoryBench (Meta internal): **85.5** (Wonder at 85.6 edges it)
- Personal Superintelligence Index (Meta internal composite): **59.1** (vs Opus 5.5 55.2, Astra 54.5, Fable 5.1 49.9)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- HLE: **53.6%** (AA-HLE lane via BenchLM, #8; core-lane HLE runs report sibling muse-wonder-1.0 at 50.1% [Wikipedia/lastexam.ai] and 37.3% [Scale Labs no-tools run] — harness conflict, labeled per lane; no core-lane Full number found)
- GPQA Diamond: no verified public score found for Full specifically
- Artificial Analysis Intelligence Index v4.3: **56** at max effort (AA; #4–5 overall — behind Opus 5.5 58, tied Sonnet 5.5 56, ahead of Fable 5.1/Astra/Argon at 53; +8 over Spark 1.3's 48 in six weeks). Meta's own card row reads 56 — consistent. (dev.to's claimed "Meta card 59.0 AA row" is a misparse: 59.0 is the ProgramBench row.)
- Personal Superintelligence Index: 59.1 (Meta-only composite — see tool-use section; counted here as internal, not independent)
- AA-LCR / MLCR: no individual public value found (component of the AA Index composite only)
- CritPt: no individual public value found (component of AA Index only)
- AA-Omniscience Accuracy / Hallucination Rate: no individual public value found

Coding:

- DeepSWE 1.1 (long-horizon): **79.0%** (Meta model card, independently run by Data Curve across Wonder/Wonder Full/Opus in the same harness; Opus 5.5 74.2, Astra 74.1 — SOTA of the launch table)
- SWE-Marathon (ultra-long-horizon): **57.5%** at xhigh (Meta card, Abundant AI harness, pass@1; #1 on llm-stats SWE-Marathon leaderboard of 10 models; +11.2 over Opus 5.5's 46.3)
- Terminal-Bench 4.0-AA: **57.1%** (below Opus 5.5's 59.6)
- ProgramBench (from-scratch programming): **59.0** (weakest row — Opus 5.5 70.5; biggest deficit in the table)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no individual public value found (AA Index component only)
- Vibe Code Bench: no verified public score found
- Efficiency: ~54k output tokens per Intelligence Index task, −10% vs Spark 1.3 (60k); 16% fewer input tokens (AA)

Long context:

- 1M window confirmed; no MRCR/RULER/GraphWalks retrieval number published for Wonder Full — no long-context retrieval reported (AA-LCR contributes to the composite but no per-benchmark value surfaced)

### Normalized scores (1–100)

- **Tool use: 91/100.** Top-of-table on GDPval-AA v2.1 (1857), AA-Briefcase (1729), Harvey LAB (13.1, ~3× Opus), Vals Finance (59.1) and AutomationBench (45.4), with TB4.0-AA 57.1 and JobBench 75.3 at parity with Opus — the strongest professional-agent profile measured this cycle. Capped by OSWorld binary (39.4, below Fable 5.1) and partial computer-use edge to Opus.
- **Reasoning: 86/100.** AA Intelligence Index 56 (#4–5, tied Sonnet 5.5, −2 vs Opus 5.5) plus AA-HLE 53.6% (#8); methodology maps Index 56 to the high-80s band. Capped by missing GPQA/LCR/CritPt singles and a composite that sits 2 points under the Anthropic flagship.
- **Context window: 95/100.** Verified 1,048,576-token window (≥1M tier = 95–100); no published ≥98% retrieval figure at 512K+ keeps it off 100.
- **Multimodal: 92/100.** Text + image + video + audio + PDF input (documented on dev.meta.ai) covers the top input tier; text-only output and no image/audio generation keep it under 95.
- **Coding: 91/100.** SOTA independent DeepSWE 1.1 at 79.0% and #1 SWE-Marathon 57.5% (+11 over Opus) clear the frontier reference (DeepSWE 74%+ → 90–100); capped by ProgramBench 59.0 (−11.5 vs Opus) and TB4.0-AA 57.1 (−2.5 vs Opus) — a long-horizon specialist, not an across-the-board coding leader.
- **Cost efficiency: 20/100.** No API and no per-token pricing at all: access starts at a $50/month Muse Code subscription (Maximum $200/month), with sibling API pricing ($4/$20 per Mtok) already in Opus-tier cost territory. Scored on the subscription-only reality per the inverse-pricing scale ($10/$50 ≈ 30 → subscription-gated no-API lands below it).
- **Overall Score: 91/100.** Mean of the five quality dims (91+86+95+92+91)/5 = 91.0. Best fit: ultra-long-horizon engineering and professional agent workloads (legal/finance/business automation) where its DeepSWE/SWE-Marathon/Harvey leads pay off — poor fit for cost-sensitive API products (subscription-only) or from-scratch program synthesis (ProgramBench).

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-29
- Method: public internet research — official Meta model card/newsroom/research blog and dev.meta.ai docs cross-checked against Artificial Analysis, BenchLM, VentureBeat, MindStudio, MarkTechPost and independent analyses; conflicting harness lanes (AA-HLE vs Scale-Labs HLE, Meta card vs aggregator misreads) cited per source. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
