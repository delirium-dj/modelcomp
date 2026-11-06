# Claude Opus 5.5 — findings by Ling 3.2 Flash

- Source: Anthropic (`claude-opus-5-5`)
- Date: 2026-11-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5 — paid-tier model; not on the free Claude plan (Pro/Max/Team/Enterprise + API only)
- **Short description:** Anthropic's flagship general-release model of the Claude 5.5 family, built for long-running agentic coding and knowledge work; no variant alias (codename `claude-wafer-eap` per Chinese press).
- **Provider / access:** Anthropic Claude API native ID `claude-opus-5-5` (Anthropic Messages API; Chat-Completions-compatible via gateways). Also Amazon Bedrock `anthropic.claude-opus-5-5`, Google Cloud Vertex, Azure/Microsoft Foundry, AWS Claude Platform, OpenRouter `anthropic/claude-opus-5.5`, DeepInfra, LiteLLM proxy, OpenCode `opencode/claude-opus-5-5` (OpenAI-compatible `/chat/completions`).
- **Release / knowledge:** 2026-09-22 release; knowledge cutoff 2026-06 (Anthropic docs/kingy.ai/Opper)
- **IDs:** `anthropic/claude-opus-5-5` (models.dev); `opencode/claude-opus-5-5` on OpenCode Zen is a **paid** ID at $4/$20 — **no Free-tier ID exists on Zen** for this model (free rows carry `-free` suffixes)
- **Context window:** 1,000,000 tokens total; max output 128,000 (Anthropic platform docs; Azure Foundry catalog 1000k/128k; AA, Vals AI, BenchLM). No long-context surcharge.
- **Modalities:** text + image + PDF in (Anthropic docs feature list "vision, PDF support, Files API"; OpenRouter catalog), text out only (AA/Opper); reasoning yes (adaptive thinking always on, effort low/medium default/high/xhigh/max); tool calls yes (server-side + client-side tools, computer-use toolset `computer_toolset_20260801`, forced tool_use removed); structured output/JSON yes (`strict: true`); native web search tool.
- **Pricing (as of 2026-11-07):** paid $: input $4.00 / output $20.00 per 1M; cache read $0.20, cache write 5-min $5.00 / 1-hr $8.00; Batch $2/$10; Fast mode $8/$40; US-residency inference 1.1x (Anthropic platform docs; BenchLM price registry 2026-10-29). Free tier: none — not available on free Claude plan; pay-as-you-go offers zero data retention, Anthropic route keeps abuse-monitoring window (Opper); Bedrock default ZDR (AWS).
- **Architecture:** proprietary, closed weights; total/active params and MoE not disclosed (BenchLM spec sheet, DataLearner, kingy.ai)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.64%** (Vals AI harness, effort=high, temp 1.0, 267 tasks; 79.77% when 26 fallback-assisted refusals counted as failures)
- Tau3-Banking / Tau2-Bench: **no verified public score found** (τ²-Bench column blank for this ID on DataLearner agent board; closest τ-family: τ-bench airline 75.5%, OpenRouter's own harness, run 2026-10-17)
- GDPval-AA: **1846 Elo** (Anthropic launch table/system card, GDPval-AA v2.1, max effort; #1 vs Fable 5.1 1735, Opus 5 1708, GPT-6 Astra 1542)
- Claw-Eval / ClawProBench: **no verified public score found** (BenchLM Claw-Eval snapshot 2026-05-09 predates release; leader there is Opus 4.6 at 70.4% pass^3)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: Toolathlon-Verified **77.8%**, Pass@3 82.4%, Pass³ 72.2%, 26.9 avg turns (BenchLM mirror of Anthropic system card); MCP-Atlas: **no verified public score found**; SWE Atlas Codebase QnA: **no verified public score found**
  Reasoning / knowledge:
- GPQA Diamond: **90.4%** (OpenRouter's own 198-item eval via OpenRouter, run 2026-10-17; AA page does not publish a GPQA row for this model)
- HLE: **67.7%** (Anthropic official, with tools, max effort; AA independent run 61.4%, AA HLE-Diamond 67.9% max; BenchLM HLE w/o tools 64.4%; DataLearner 59.8% #13/247)
- LCR / MLCR: **84.3%** AA-LCR (medium effort, surfaced via OpenRouter's AA row); MLCR: **no verified public score found**
- CritPt: **68.0%** (AA CritPt v2 hard subset, max effort; Opper 63%). AA notes it remains behind the leader on CritPt
- Artificial Analysis Intelligence Index / BenchLM overall: **59 / #1 at launch** (AA model page 2026-11-07, max effort; AA launch article v4.3.2 = 58 #1; DataLearner v4.3 57.62 #1/211) / BenchLM **86.3 / #2 of 216 public, #1 of 77 verified**
- Omniscience Accuracy / Hallucination Rate: **48** AA-Omniscience v1.1 (max; Opper 48.1) / hallucination rate: **no verified public score found**
  Coding:
- SWE-bench Verified / SWE-Pro: SWE-bench Verified **no verified public score found** for this ID (BenchLM stats 2026-11-05: Verified leader is Claude Opus 5 at 96%; Anthropic launch table does not headline it) / SWE-bench Pro **89.9%** (#1 of 65, BenchLM; DataLearner mirrors)
- LiveCodeBench: **no verified public score found** (BenchLM stats 2026-11-05: LCB leader is Solar Pro 4 at 87.8%; no Opus 5.5 row on published LCB tables)
- SciCode / AA-SciCode: **66.9%** (AA launch run; #1/136 per DataLearner; Opper 67%)
- Vibe Code Bench: **90.29%** v1.1 (#5/123, Vals AI, effort=max, temp 1.0; 83.34% fallback-adjusted; Vals 1-100 lane 30.36% #2/26)
- DeepSWE / Coding Index / other: DeepSWE **74.2%** (#8/108, BenchLM/DataLearner); Terminal-Bench 4.0 66.4% (Anthropic xhigh; AA independent 59.6% max; DataLearner high 68.7%); FrontierCode v1.1 54.4% (medium 54.6%); CursorBench 4.0 57.8%; FrontierSWE v2 62.3%; SWE Multilingual 93.9% (#1/40); FrontierCode 2.0 45.5-46.4%; ProgramBench conflicts by harness (BenchLM 91.2% vs Vals 18.50%)
  Long context:
- GraphWalks BFS 256K–1M: **66.8%** (AA row via BenchLM; best verified 96.2% Gemini 4 Carbon); MRCR / RULER / needle-at-scale: **no verified public score found** for this model ID

### Normalized scores (1-100)

- **Tool use: 90/100.** Frontier band: TB2.1 87.64% (Vals high), GDPval-AA 1846 Elo #1, Toolathlon 77.8%, AutomationBench-AA 69.5% (AA max), OSWorld 2.1 81.8%. Capped by: no Tau3-Banking/τ²-Bench row, Zapier AutomationBench 40.0% (< Astra 41.4%), independent TB4.0 runs below vendor 66.4%.
- **Reasoning: 90/100.** Frontier band: GPQA Diamond 90.4% (OpenRouter harness), HLE 67.7% w/ tools, CritPt v2 hard 68.0%, AA-LCR 84.3%, FrontierMath v2 T1-3 91.228%, ARC-AGI-2 91.7%, AA Index #1. Capped by: AA Index 59 just under the 60+ marker and not #1 on CritPt/AA-LCR/GDP.pdf per AA.
- **Context window: 96/100.** >=1M verified tier (95-100) across Anthropic docs, AA, Vals, BenchLM, Azure (1,000k/128k); 100 withheld because no >=98% retrieval at 512K+ evidence (GraphWalks BFS 256K–1M 66.8%).
- **Multimodal: 75/100.** +image and +PDF input verified (Anthropic docs, OpenRouter catalog) per PDF tier floor; text-only output; no audio/video input verified.
- **Coding: 91/100.** Frontier band: DeepSWE 74.2% (>=74), TB2.1 87.64% (>=85), SciCode 66.9% (>=55), SWE-Pro 89.9% #1, SWE-Multilingual 93.9% #1, VCB 90.29%. Capped by: no SWE-bench Verified or LiveCodeBench row for this ID, ProgramBench harness conflict.
- **Cost efficiency: 55/100.** Paid tier $4/$20 (blended 3:1 ~$8) sits between mapping anchors $3/$15≈60 and $10/$50≈30; mitigants: batch $2/$10, cache read $0.20, ~40% lower typical task cost vs Opus 5 (vendor); capped by AA max-effort verbosity (~119K output tokens/task) and $10.04 cost per AA Index task.
- **Overall Score: 88.4/100.** Mean of the five non-cost dims (90+90+96+75+91)/5, half-up at 1 decimal; cost efficiency excluded per formula. Best fit: default frontier pick for long-running agentic coding + knowledge work at 1M context; budget-bound routine work better on Sonnet 5.5/Haiku 5.5 or same-price GPT-5.6 Sol.

---

## Signature

- Provided by: **Ling 3.2 Flash (ling-3.2-flash)** — 2026-11-07
- Method: fresh public web research only — Anthropic platform docs/launch table/system card as mirrored, Artificial Analysis model page + launch article, BenchLM, Vals AI, OpenRouter, DataLearner, Opper, kingy.ai, AWS/Azure Foundry catalogs, models.dev, Mastra/OpenCode docs; every raw number carries source + harness/effort where available; normalized 1-100 scores are my interpretations under the v4 formula, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
