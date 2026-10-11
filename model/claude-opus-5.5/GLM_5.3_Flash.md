# Claude Opus 5.5 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-opus-5-5`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's September 2026 flagship general-release model — near-Fable 5.1 performance at 60% less per token, #1 on the Artificial Analysis Intelligence Index (58, #1/227) and #1 of 889 on BenchLM (86.43), and the leader on agentic coding (Terminal-Bench 4.0, FrontierCode, CursorBench) and knowledge work (GDPval-AA). Smaller and cheaper than Fable 5.1; the first model of the Claude 5.5 family.
- **Provider / access:** Claude Platform API (`claude-opus-5-5`, Messages API; Bedrock `anthropic.claude-opus-5-5`, Vertex/Foundry/AWS `claude-opus-5-5`); Claude apps (Pro/Max/Team/Enterprise), Claude Code, Claude Cowork; 9 API providers on AA. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-09-22 (retirement commitment: not sooner than 2027-09-22); reliable knowledge cutoff June 2026, training data cutoff June 2026 (verified via platform.claude.com model page, re-checked 2026-10-11).
- **IDs:** `claude-opus-5-5` (Anthropic API / Bedrock / Vertex / Foundry / Claude Platform on AWS). No Free ID on Zen.
- **Context window:** 1,000,000 total tokens with no long-context surcharge; 128,000 max output synchronous (300K via the `output-300k-2026-03-24` beta header on the Message Batches API) — verified via platform.claude.com/docs/en/models/opus-5-5/overview.
- **Modalities:** text and image input (PDF support, Files API, vision); text output; adaptive thinking always on (cannot be disabled — legacy `thinking: disabled` returns 400), effort levels low/medium (default)/high/xhigh/max; tool calls (new `computer_toolset_20260801` computer-use toolset; forced `tool_choice` removed); JSON mode/structured outputs.
- **Pricing (as of 2026-10-11):** $4.00 / $20.00 per 1M in/out; cache reads $0.20 (5% of base input), cache writes $5 (5-min) / $8 (1-hr); Batch 50% off ($2/$10); Fast mode (research preview) $8/$40; US data residency 1.1x. Paid only — no free API tier.
- **Architecture:** Proprietary — parameter count not disclosed (smaller than Fable 5.1).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (Anthropic, xhigh; AA independent run 59.6% — level with GPT-6 Astra's top score)
- FrontierCode v1.1 Main: **54.4%** (Anthropic; leads GPT-6 Astra's 53.3%; medium effort 54.6%); FrontierCode 1.1 Extended: **63.6%** (system card via benchlm.ai)
- FrontierSWE v2: **62.3%** (Proximal leaderboard via benchlm.ai, 2026-10-10)
- CursorBench 4.0: **57.8%** (Anthropic; +6 over Fable 5.1)
- GDPval-AA v2.1: **1846 Elo** (Anthropic/AA; +304 over Astra — widest margin; AA-normalized 68.3%)
- AA-Briefcase v1.1: **1807 Elo** (AA leaderboard, updated — lower than the launch-day 1822 read)
- AutomationBench: **40.0%** (Zapier leaderboard, no fallbacks; GPT-6 Astra leads at 41.4%); AA AutomationBench-AA: **69.5%** (AA, independent)
- Toolathlon-Verified: **77.8%** (Pass@3 82.4%, avg 26.9 turns — Anthropic system card via benchlm.ai, 2026-10-10)
- AA Harvey LAB-AA v1.0: **91.2%** (AA, independent); Harvey held-out all-pass **8.3%** / criterion-pass **91.2%** (system card)
- AA ITBench-AA (K8s incident RCA): **38.2%** (AA — weak spot)
- OSWorld 2.0: **81.8%** partial credit (Anthropic launch table) vs **48.7%** (system card, full-completion scoring — conflicting framings, both vendor-reported)
- Terminal-Bench-Science 0.1: **58.7%** (Anthropic; ~2x Opus 5's 29.0%; Astra leads at 64.6%)
- Tau3-Banking, Claw-Eval: no verified public score found

Reasoning / knowledge:

- HLE (with tools): **67.7%** (Anthropic; AA independent run 61.4% — new AA high, prev best 59.1%); HLE w/o tools: **64.4%** (system card)
- ARC-AGI-1: **97.5%**; ARC-AGI-2: **91.7%** (ARC Prize verified results, arcprize.org/results/anthropic-claude-opus-5-5)
- SciCode: **66.9%** (Artificial Analysis, independent — new AA high)
- AA-Briefcase: **1807 Elo** (AA, independent — updated from launch-day 1822)
- Artificial Analysis Intelligence Index: **58 / #1 of 227** (AA v4.3.2, 2026-10-11; BenchLM normalized 57.6%)
- AA-LCR v1.1 (long-context reasoning): **84.7%** (AA — fills the gap the 2026-10-05 pass marked missing)
- MLCR-AA (medical long-context reasoning): **66.7%** (AA)
- CritPt (physics reasoning): **31.7%** (AA — modest; caps pure-physics claims)
- AA-Omniscience: **66.2% accuracy / 58.6% hallucination rate / 46.4 index** (AA — accuracy strong, hallucination rate high)
- GPQA Diamond: no verified public score found (Anthropic's table doesn't headline it; OpenAI reports GPT-6 Astra at 96.0%)
- ArXivMath Aug 2026: **91.2%** no tools / **96.9%** with tools (system card via benchlm.ai)
- GMMLU: **94.3%**; MILU: **93.1%** (system card, multilingual knowledge)

Coding:

- SWE-bench Pro: **89.9%** (Anthropic system card §8.2, 2026-09-22; corroborated by benchlm.ai updated 2026-10-10 and Sep–Oct 2026 SWE-bench Pro leaderboards — leads the field, ahead of Sonnet 5.5's 81.3% and Fable 5.1's 81.2%)
- SWE-bench Multilingual: **93.9%**; SWE-bench Multimodal: **61.4%** (same system card via benchlm.ai)
- DeepSWE v1.1: **74.2%** (system card; llm-stats.com, mini-swe-agent harness, Oct 2026)
- ProgramBench: **91.2%** (system card via benchlm.ai)
- PostTrainBench v1.1: **49.3%** (competitor-reported — Google's Gemini 4 Argon launch chart)
- Terminal-Bench 4.0: **66.4%** / **59.6%** independent (as above)
- SWE-bench Verified / LiveCodeBench: no verified public score found (Anthropic's launch table uses newer tests; no SWE-bench Verified headline)
- Efficiency: A 680K-line code migration finished in under a day; 200K-line codebase audit under 3 hours vs 20+ hours for Opus 5 (Anthropic customer reports)

Long context:

- AA-LCR v1.1: **84.7%** (AA independent, 2026-10-10 via benchlm.ai) — first measured long-context reasoning number for this model
- GraphWalks BFS 256K–1M: **66.8%** (competitor-reported — Google's Gemini 4 Argon launch chart; treat as provisional)
- No MRCR/RULER value verified for this exact model (1M window with no surcharge; OpenAI reports GPT-6 Astra near-perfect MRCR v2 to 512K)
- Chartography (visual reasoning, with tools): **89.0%** (Anthropic; no-tools 64.4%)

### Normalized scores (1–100)

- **Tool use: 92/100.** GDPval-AA 1846 Elo sits above the ~1750 frontier ref, TB4.0 66.4% (vendor; 59.6% independent) is near-leading, FrontierCode 54.4%/Extended 63.6% and OSWorld 81.8% (partial) are elite; new Toolathlon-Verified 77.8% and AA Harvey LAB 91.2% reinforce the agentic story; the AutomationBench loss to Astra, ITBench 38.2% and missing Tau3 keep it under 95.
- **Reasoning: 94/100.** HLE 67.7% (vendor) / 61.4% (AA, new independent high), ARC-AGI-2 91.7% (ARC Prize verified — exceptional abstract reasoning), SciCode 66.9% (new high) and the #1 AA Index of 58 all exceed the frontier refs; MLCR 66.7% and AA-LCR 84.7% fill prior gaps. Docked for the vendor-vs-independent gaps (−6.3 to −6.8 pts), CritPt 31.7%, the 58.6% hallucination rate on AA-Omniscience and the still-missing GPQA number.
- **Context window: 95/100.** 1M tokens with no long-context surcharge maps to the ≥1M tier (95–100); first measured retrieval-adjacent numbers now exist (AA-LCR 84.7% strong; GraphWalks 66.8% @256K–1M competitor-reported) but no measured ≥98% retrieval at 512K+ keeps it off the maximum.
- **Multimodal: 80/100.** Text + image + PDF input with strong vision (Chartography 89.0% with tools / 64.4% without, AA-MMMU-Pro 87.7%, SWE Multimodal 61.4%, BenchCAD Vision2Code 0.962 with tools); no audio/video input — the +video/PDF band is 75–90.
- **Coding: 90/100.** The system card's SWE-bench Pro 89.9% — a clear field lead over Sonnet 5.5's 81.3% and Fable 5.1's 81.2% — plus SWE Multilingual 93.9%, DeepSWE 74.2%, ProgramBench 91.2% and FrontierSWE v2 62.3%; SWE-bench Verified remains unpublished, capping it below 92+.
- **Cost efficiency: 55/100.** $4/$20 per 1M sits just above the $3/$15 = ~60 methodology reference, landed at 55; AA's updated instrumentation confirms the erosion at max effort — $5.98/task and 260M output tokens for the full Intelligence Index run (vs an 82M median, ~3× verbosity) — though 97 tok/s output speed and 5% cache reads are offsets.
- **Overall Score: 90.2/100.** Mean of the five quality dims per `RULES.md` (Cost excluded): (92 + 94 + 95 + 80 + 90) / 5 = 451/5 = 90.2 — unchanged on the 2026-10-11 second pass: new evidence (ARC-AGI-2 91.7%, AA-LCR 84.7%, Toolathlon 77.8%, SWE-Pro corroboration) reinforces the existing scores rather than moving them. Best-fit: the top pick for agentic coding, professional knowledge-work deliverables and long-horizon agents — the SWE-bench Pro field lead and ARC-AGI-2 result confirm the coding+reasoning story; with GPT-6 Astra for agentic science and token-efficient max-effort runs.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-11
- Method: public internet research, second pass 2026-10-11 (≥4 independent sources: platform.claude.com models overview + opus-5-5 model page, artificialanalysis.ai model page, benchlm.ai updated 2026-10-10 with system-card/ARC Prize/Proximal citations); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_5.md`, using the same headings.
