# GPT-6 Astra — findings by Kimi K3

- Source: OpenAI / GPT-6 Astra (`gpt-6-astra`)
- Date: 2026-10-09 (UTC) — deep second pass (first pass 2026-09-24)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's frontier GPT-6 flagship; announced 2026-09-03, API-released 2026-09-04 as `gpt-6-astra`. Marketed for the hardest end-to-end work (reasoning, coding, computer use, research); carries OpenAI's "Critical" cyber capability designation under its Preparedness Framework ("Path to Astra"), with advanced defender access constrained via Trusted Access / Daybreak Blue. Siblings: GPT-6 Sol, GPT-6 Luna, GPT-6.1 Sol.
- **Provider / access:** OpenAI API, model id `gpt-6-astra`; both Chat Completions and Responses APIs supported (streaming, function calling, structured outputs; Batch yes; fine-tuning no). Responses API tools: web search, file search, image generation, code interpreter, hosted shell, apply patch, skills, computer use, MCP, tool search. Free API tier not supported; also surfaced in ChatGPT/Codex.
- **Release / knowledge:** Announced 2026-09-03 (openai.com/index/gpt-6-astra), API release 2026-09-04; knowledge cutoff April 30, 2026 (llm-stats.com launch deep-dive, developers.openai.com docs).
- **IDs:** `openai/gpt-6-astra` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1,050,000 tokens total / 128,000 max output (developers.openai.com/api/docs/models/gpt-6-astra; llm-stats.com). Requests above 272K input tokens bill at long-context rates (2x input/cache, 1.5x output, full request).
- **Modalities:** text + image in; text out; reasoning yes (`reasoning.effort`: low / medium / high / xhigh / max — gateway default is low; xhigh/max are new ceiling rungs, must be set explicitly); tool calls; JSON/structured outputs.
- **Pricing (as of 2026-10-09):** Standard $10/M input, $1/M cached input (0.1x), $12.50/M cache writes (1.25x uncached), $50/M output; Batch/Flex 50% of Standard; Fast mode 2x (llm-stats.com, developers.openai.com). 2.5x GPT-5.6 Sol's $4/$20 list.
- **Architecture:** proprietary (OpenAI); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **57.7%** OpenAI self-report (llm-stats: "57.7", benchlm lists "57.9%"; independently, Artificial Analysis measured **59.1%**). Terminal-Bench 2.1: **87.3%** (Vals AI leaderboard) / **88.4%** (Artificial Analysis).
- Terminal-Bench-Science 0.1: **64.6%** (OpenAI table; official comparison pair vs Claude Fable 5.1 at 52.6%, +12.0).
- Tau3-Banking (AA): **41.4%** (benchlm.ai / artificialanalysis.ai).
- GDPval-AA: **1542 Elo** (52.1% normalized) (artificialanalysis.ai via benchlm.ai).
- BrowseComp: **91.5%**; OSWorld 2.0: **72.6%** (offline partial caveat); Agents' Last Exam: **59.3%**; AutomationBench: **41.4%** open / AA variant **68.5%** (benchlm.ai, llm-stats.com).
- HLE w/ tools: **57.2%**; AA Briefcase: **1569 Elo**; AA Agentic Index: **51.5%**; ExploitGym: **42.4%** (benchlm.ai).
- ApprenticeBench (GUI agent, NeoCognition): **68%** (neocognition.io).
- CWE-bench v1: **68.0%**; SEC-Bench Pro: **85.4%**; ExploitBench: **100%** (cyber, known-vuln exploit dev — cyber eval, not coding headline) (cwe-bench.com via benchlm; llm-stats.com).
- Gray Swan IPI (15 attempts, jailbreak/injection resilience): **8.5%** (Google Gemini 4 Argon comparison chart — lower is better).
- Claw-Eval / ClawProBench: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (OpenAI; AA 96.1%) — saturated, ceiling row.
- HLE: **54.7%** (AA-HLE); HLE w/ tools 57.2% (benchlm.ai, artificialanalysis.ai).
- AA-LCR: **80.7%**; MLCR-AA: **35.0%**; CritPt: **31.7%** (artificialanalysis.ai via benchlm.ai).
- ARC-AGI-1: **98.5%**; ARC-AGI-2: **95.0%**; ARC-AGI-3: **62.7%** (ARC Prize verified, arcprize.org) — CONFLICT: OpenAI's table cites ARC-AGI-3 99.9 via a Responses-API harness footnote (llm-stats.com flags the harness note); the ARC-Prize-verified 62.7% is used here.
- Artificial Analysis Intelligence Index: **52.7**; BenchLM overall **84.94/100, #2 of 889** (benchlm.ai, updated 2026-10-09; first-pass snapshot was 88.69 #1 of 507 — rank/score drifted as coverage widened).
- AA-Omniscience Accuracy / Hallucination Rate: **62.6% / 51.3%** (artificialanalysis.ai).
- FrontierMath v2 Tier 4: **97.6%**; HealthBench Hard: **36.6%**; HealthBench Professional (len-adj): **63.4–64.7%**; GeneBench Pro: **37.8%**; LifeSciBench: **60.3%** (OpenAI system card, deploymentsafety.openai.com, via benchlm/llm-stats).

Coding:

- DeepSWE v1.1: **74.1%** (OpenAI; small hop over GPT-5.6 Sol 72.7 on the same page).
- FrontierCode 1.1: Main **53.3%**, Extended **64.5%** (benchlm.ai).
- FrontierSWE v2: **65.5%** (proximal frontierswe.com via benchlm.ai).
- AA-SciCode: **56.5%**; AA Coding Index: **76.9** (artificialanalysis.ai).
- PostTrainBench v1.1: **44.3%** (Google Gemini 4 Argon launch chart).
- Bug Hunt Bench: **45.0 fixes** (bughunt.productcompass.pm).
- SWE-bench Verified / LiveCodeBench: no verified public score found (Terminal-Bench 2.1 87.3/88.4% as closest agentic-coding proxy).

Long context:

- MRCR v2 256K–512K: **100.0%**; MRCR v2 512K–1M: **96.3%** (OpenAI table via benchlm.ai); GraphWalks BFS 256K–1M: **71.8%** (Google Gemini 4 Argon comparison chart).

Multimodal:

- ScreenSpot Pro: **92.7%** (no tools); AA-MMMU-Pro: **86.9%**; BenchCAD Vision2Code (tools): **0.959** (benchlm.ai). Text+image in / text out only per official docs.

### Normalized scores (1–100)

- **Tool use: 93/100.** Deepest agentic suite found: TB2.1 87.3–88.4% independently reproduced (Vals/AA), BrowseComp 91.5%, OSWorld 72.6%, AA Agentic Index 51.5%; capped by middling Tau3-Banking (41.4%) and self-reported core table.
- **Reasoning: 94/100.** GPQA 96%, HLE 54.7–57.2%, ARC-AGI-2 95%, ARC-AGI-3 62.7% ARC-verified, FrontierMath T4 97.6%; barely capped by MLCR 35% and CritPt 31.7%.
- **Context window: 96/100.** 1.05M window with MRCR v2 100% ≤512K / 96.3% 512K–1M; GraphWalks 71.8% at the far end is the only soft spot.
- **Multimodal: 88/100.** Strong vision grounding (ScreenSpot Pro 92.7%, MMMU-Pro 86.9%, BenchCAD 0.959); capped by text-only output and no verified audio/video input.
- **Coding: 89/100.** AA Coding Index 76.9, DeepSWE 74.1%, FrontierSWE v2 65.5%, FrontierCode Ext 64.5%; capped by absent SWE-bench Verified / LiveCodeBench rows.
- **Cost efficiency: 35/100.** $10/$50 per 1M is 2.5x GPT-5.6 Sol; >272K prompts double input rates; $1 cached input helps. Frontier price for frontier quality.
- **Overall Score: 92/100.** Mean of the five quality dims (93+94+96+88+89)/5 = 92.0. Best fit: the current flagship default for autonomous agents, computer use, and hardest-tier reasoning/coding when budget is secondary.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-09
- Method: deep second-pass public web research, 3+ independent sources (OpenAI announcement + API docs via search, llm-stats.com launch deep-dive, benchlm.ai 69-benchmark scorecard aggregating Vals AI / Artificial Analysis / ARC Prize / NeoCognition / CWE-bench / Bug Hunt Bench); conflicts (ARC-AGI-3 self-reported 99.9 vs ARC-Prize-verified 62.7%; TB4 57.7 vs 57.9 vs AA 59.1%) reconciled in favor of verified third-party numbers. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
