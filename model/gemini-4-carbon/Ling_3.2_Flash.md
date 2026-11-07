# Gemini 4 Carbon — findings by Ling 3.2 Flash

- Source: Google (`gemini-4-carbon`)
- Date: 2026-11-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon — restricted-access frontier model; no Free tier exists (launch gated to cyber defenders via Fairwind Program, no general/free access date)
- **Short description:** Google DeepMind's second Gemini 4 frontier model (element-name "Carbon"), announced 2026-10-28 two weeks after Gemini 4 Argon; built for long-horizon agentic engineering (multi-day runs on large codebases) and defensive cybersecurity (find→validate→patch). No separate alias/variant published; "Carbon" is the full name.
- **Provider / access:** Google Gemini platform/AI Studio/Vertex — **not yet generally available**: launch-week access only to a subset of cyber defenders, widening via Fairwind Program, then developers/businesses/consumers "as soon as possible" (blog.google). Evaluated under restricted access by Artificial Analysis, Vals AI, Zapier AutomationBench, Collinear CWE-bench. No Google API model ID published yet (BenchLM); OpenCode Zen does not list Carbon at all (Zen catalog shows Gemini 4 Argon $2/$10 but no Carbon row); no OpenRouter or HuggingFace row found. Gateways would expose Chat Completions/Responses adapters only once Google publishes a native ID (Google models use native endpoints).
- **Release / knowledge:** announced 2026-10-28 (blog.google post 17:00 UTC, Pichai repost 17:01 UTC per CellCog; AA's independent run confirmed 2026-10-28 17:23 UTC per 智源社区); BenchLM/Vals/catalog rows "Released Oct 28, 2026". Knowledge cutoff: no verified public cutoff — Google has published no Carbon model card/system card as of 2026-11-07 (NeuralTrust note; Argon's Safety & Security report is the nearest predecessor).
- **IDs:** `gemini-4-carbon` (BenchLM, Zapier, aireleasetracker, vendor shorthand); `google_gemini-4-carbon` (Vals AI); `google/gemini-4-carbon` (models.dev-style reference used here) — **no official Google Gemini API ID exists yet** (BenchLM: "Google has not yet published a Gemini API model ID"), and **no Free ID exists on Zen** because Carbon is absent from the entire OpenCode Zen catalog (free and paid).
- **Context window:** 1M tokens total (Vals AI spec row + Artificial Analysis spec row reported via NeuralTrust; AA launch-post specs per 智源社区 "100 万 token 上下文窗口"; GraphWalks run spans 256k–1M). **Not vendor-verified**: Google's launch post states no context figure and BenchLM flags "No exact-model context limit is sourced" (median fallback 256k). Max output 1,048,576 (Vals spec row); cache-read share on AutomationBench 86–90% (Zapier).
- **Modalities:** text/image/audio(speech)/video in → text out only (DataLearner "文本、图像、音频、视频→文本"; NeuralTrust "text, image, video and speech in; text out"; BenchLM multimodal rows pending). Reasoning yes (explicit mode; AA/Vals/Zapier runs at High effort; default level unverified). Tool calls yes (AutomationBench 47-app harness, Antigravity CLI, Mini-SWE-agent, Coding Agent Index). JSON mode/structured output: no verified public statement found.
- **Pricing (as of 2026-11-07):** paid $ only — intro $2.00/1M input, $10.00/1M output; cached input −95% = $0.10 (blog.gov + DataLearner + aireleasetracker + BenchLM); standard after intro period (undated): $4.00/$20.00, cached $0.20 (blog.gov; AA charts standard-rate only per 智源社区). AA cost/Index task $7.76 vs Opus 5.5(max) $10.04, Astra(max) $6.25; AA flags ~200M output tokens per full index run vs 64M median (very verbose). No free tier; free-tier privacy caveat N/A — but Fairwind terms demand phishing-resistant MFA, usage tracking, no resale; API data-use terms for Carbon not yet published.
- **Architecture:** proprietary closed weights; total/active params and MoE not disclosed (BenchLM/DataLearner); no open-weights license, no HF/GitHub release (DataLearner "不开源 / HF 暂无"); native multimodal, explicit reasoning mode.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (TB2.1 does not exist for this ID; only Terminal-Bench 4.0: 65.2% AA harness, vendor DeepMind table / 64% #2 AA launch post / 63.13% ±2.20 #4/59 Vals AI high effort)
- Tau3-Banking / Tau2-Bench: **no verified public score found** (no τ-family row on any catalog for this ID)
- GDPval-AA: **no verified public score found** (closest verified row: SemiAnalysis GDPx v1.0 10.87 #2/20 via DataLearner — different benchmark, not substituted)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**; verified adjacent rows: AutomationBench-AA #1 sub-row of AA Index v5.0 (number unpublished per 机器之心/智源) + Zapier AutomationBench 1.0.6 **53.9%** high effort 354/657, new benchmark high (medium 53.0% 348/657, low 31.5%, $2.12/task high; 2026-10-26/27 run), OSWorld-2.1 offline 81.5% (Opus 5.5 87.2% leads), Agents' Last Exam v1.1 77.4%, Vending-Bench 2 $16,484 balance (all vendor DeepMind table); Gray Swan IPI 0.0% attack success (BenchLM verified row)
  Reasoning / knowledge:
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found** (standalone number unpublished; AA post says Carbon(high) is #1 on the HLE-Diamond sub-row of Index v5.0 via 机器之心/智源)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found** (exists only as CritPt v2 Hard Subset inside AA Index v5.0.1's 9 evals; no standalone Carbon row)
- Artificial Analysis Intelligence Index / BenchLM overall: AA Index v5.0 **59 / #1** at launch (blog.google + AA's own confirmation post 2026-10-28 17:23 UTC; #1 over Opus 5.5 58, Astra 57; cohort reported 52 by NeuralTrust, 76 by DataLearner; AA live page now shows Carbon(high) leading **60** on v5.0.1 of 98 models) / BenchLM BenchAlign **88.7/100 #1 of 212** (data 2026-11-06, evidence status Estimated; prior 2026-10-29 snapshot 88.4/216)
- Omniscience Accuracy / Hallucination Rate: AA-Omniscience v1.1 net **54 / #1**; accuracy **58%** (+10pts vs Argon 48%); hallucination **11%** (vs Argon 4%; Opus 5.5/Astra rows not used here) — AA launch post via 智源社区; NeuralTrust corroborates 11%
  Coding:
- SWE-bench Verified / SWE-Pro: **no verified public score found** (absent from vendor table, BenchLM, Vals ledgers)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **89.06%** ±2.29, #8/123 v1.1 (Vals AI, high effort); WebDev Arena **1768 Elo #4**, +89 jump (blog.google; some media write 1769 — official 1768 used)
- DeepSWE / Coding Index / other: DeepSWE **no verified public score found** (Argon had 77.9%; Carbon row not published to date). AA Coding Agent Index **59 #2** with Antigravity CLI (Opus 5.5+Claude Code 62; 智源/NeuralTrust). FrontierSWE 2 61.2% (Astra 65.5% leads; vendor table; aireleasetracker tags it best-published on its board), SWE-sweep 9.6% (mini-swe-agent), FrontierCode v1.1 51% #2 (AA post), CWE-bench v1 71.0% #1/12 (Collinear official leaderboard; AA as independent evaluator, 120 tasks ×4 attempts, high, 1h limit, Antigravity), SEC-bench Pro 88.2% + ExploitGym 54.8% (10h; 6h=53.5%) vendor-only, run without guardrails; BenchLM coding category 81.3 #3/157 99th pct (2026-11-06)
  Long context:
- GraphWalks BFS F1 256K–1M: **96.2%** (vendor DeepMind table, #1 of listed rows; also BenchLM reasoning-ledger row). MRCR / RULER / needle-at-scale: **no verified public score found**

### Normalized scores (1-100)

- **Tool use: 70/100.** Top of the mid band: AutomationBench-AA #1 sub-row, Zapier AutomationBench 53.9% new benchmark high, OSWorld-2.1 81.5%, ALE v1.1 77.4%, Vending-Bench 2 leader, IPI 0.0% ASR. Capped by: no verified TB2.1/Tau3/GDPval rows at all, TB 4.0 65.2% below the TB2.1 ~88% frontier anchor, AA Coding Agent Index 59 trails Opus 5.5 62.
- **Reasoning: 67/100.** AA Index 59 → #1 (live page 60/98), 4 of 9 sub-rows #1, Omniscience accuracy 58%/hallucination 11%/net 54 #1, BenchLM 88.7 #1/212, Vals Index 70.36% #2/32, RiemannBench 80.0%, TB-Science 64.8%. Capped by: Index 59 just under the 60+ frontier marker, zero standalone GPQA/HLE/LCR/MLCR/CritPt rows, hallucination up 4%→11% vs Argon.
- **Context window: 96/100.** ≥1M tier (95–100 band) verified by AA + Vals spec rows and 256k–1M GraphWalks run; 100 withheld because no ≥98% retrieval at 512K+ (GraphWalks 96.2% F1; no MRCR/RULER). BenchLM flags "not published" since Google itself has no Carbon model card.
- **Multimodal: 92/100.** Text+image+audio(speech)+video input with text-only output → 90–100 band per mapping; Chartography 72.5%, Blueprint-Bench 2 58.6% (vendor). Capped by no audio/image/video/PDF generation evidence and BenchLM multimodal rows "score pending".
- **Coding: 73/100.** VCB 89.06% #8/123, WebDev Arena 1768 #4, AA Coding Agent Index 59 #2, FrontierSWE 2 61.2%, CWE-bench 71.0% #1 independently evaluated, BenchLM coding 81.3 #3/157. Capped by no SWE-bench Verified/Pro, LiveCodeBench, SciCode, DeepSWE rows at all; TB 4.0 65.2% below 85% frontier anchor; Astra leads FrontierSWE 2, Opus leads Coding Agent Index.
- **Cost efficiency: 75/100.** Current intro tier $2/$10 + $0.10 cached sits between mapping anchors ~$1.25/$4.25≈88 and ~$3/$15≈60; AA cost/Index task $7.76 (−23% vs Opus 5.5, +24% vs Astra); Zapier $2.12/task high effort. Drops to ≈50 at standard $4/$20 on the undated expiry; AA verbosity flag (≈200M output tokens per index run vs 64M median) is the drag.
- **Overall Score: 79.6/100.** (70+67+96+92+73)/5 = 79.6, half-up 1 decimal; cost efficiency excluded per v4 formula. Best fit: once access opens, the pick for 1M-token long-horizon cyber-defense + agentic-coding workflows at intro pricing; avoid today for terminal-benchmark-anchored coding or standard-price cost-sensitive loads — restricted rollout, vendor-only cyber numbers, and coding rows still trailing Opus 5.5/Astra.

---

## Signature

- Provided by: **Ling 3.2 Flash (ling-3.2-flash)** — 2026-11-07
- Method: fresh public web research only — blog.google launch post, Google DeepMind Gemini 4 performance table, Artificial Analysis launch post (via 智源社区/BAAI + artificialanalysis.ai models page), Vals AI spec/benchmark page, BenchLM, Zapier AutomationBench release report, NeuralTrust, DataLearner, aireleasetracker, IT之家/澎湃/新浪/腾讯云/安全内参/机器之心 mirroring AA/CWE-bench details; every raw number carries source + harness/effort where available; conflicts flagged (WebDev 1768 vs 1769; TB4.0 65.2% vendor vs 64% AA post; AA cohorts 52/76/98). Normalized 1–100 scores are my interpretations under the v4 formula, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
