# Claude Opus 5.5 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-opus-5-5`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's flagship general-release model and the first of the Claude 5.5 family (2026-09-22) — it performs at the level of Claude Fable 5.1 on most work while costing ~40% less to run than Opus 5, and leads the field in agentic coding, computer use, and knowledge work. Top use: long-running agentic coding and professional knowledge work. Not a variant/alias — a distinct Opus-tier release.
- **Provider / access:** Anthropic Claude API, model ID `claude-opus-5-5` (Anthropic Messages API, not Chat Completions/Responses). Also served as `anthropic.claude-opus-5-5` on Amazon Bedrock, `claude-opus-5-5` on Claude Models on Google Cloud (Google-managed and Anthropic-managed), Microsoft Foundry, Claude Platform on AWS, and Cloudflare AI; 9 API providers listed by Artificial Analysis. Claude apps (Pro/Max/Ultra/Team/Enterprise) and Claude Code. Paid only — no free API tier and no Free ID observed on OpenCode Zen.
- **Release / knowledge:** Released 2026-09-22 (retirement commitment: not sooner than 2027-09-22); reliable knowledge cutoff June 2026, training data cutoff June 2026 (verified via platform.claude.com model page, re-checked 2026-11-01).
- **IDs:** `claude-opus-5-5` (Anthropic API, pinned dateless snapshot; also the alias/ID on Google Cloud, Foundry, and Claude Platform on AWS), `anthropic.claude-opus-5-5` (Bedrock). No Free ID on Zen.
- **Context window:** 1,000,000 total tokens — default on every request, no beta header, and full-window requests billed at standard per-token pricing (Claude 4.6+ policy); 128,000 max output synchronous, rising to 300K on the Message Batches API with the `output-300k-2026-03-24` beta header. Verified via platform.claude.com/docs/en/models/opus-5-5/overview and /docs/en/build-with-claude/context-windows (2026-11-01).
- **Modalities:** text and image input (plus PDF, up to 600 images/PDF pages per request) → text output; no audio or video input, no image generation. Reasoning: yes — adaptive thinking is always on and cannot be disabled; effort levels low/medium (default)/high/xhigh/max. Tool calls: yes, including the `computer_toolset_20260801` computer-use toolset; forced `tool_choice` (`any`/named) is rejected. JSON mode/structured outputs: yes; assistant prefill is rejected.
- **Pricing (as of 2026-11-01; Anthropic list rate card effective 2026-10-07):** $4.00 / $20.00 per 1M input/output; cache reads $0.20 per 1M (5% of base input — a 5.5-family improvement vs the standard 10%); cache writes $5 (5-min) / $8 (1-hr); Batch API 50% off ($2 / $10); Fast mode (up to 2.5× faster) $8 / $40; US-only inference 1.1× ($4.40 / $22). Paid only, no free tier.
- **Architecture:** Proprietary — parameter count and MoE structure not disclosed; hybrid reasoning model with always-on adaptive thinking; not open-weights. Anthropic states it requires less compute to serve than Opus 5 (a "smaller/cheaper than Fable 5.1" Opus-tier design).

### Raw benchmarks found

Agent / tool use:

- Vals Index (composite, enterprise knowledge work): **69.69%, #1 of 63** at $32.77/test, ahead of Fable 5.1 (68.83%), Opus 5 (67.21%), GPT-6 Astra (66.61%) (Vals AI independent, vals.ai/home)
- Terminal-Bench 2.1: **87.64%, #1 of 63** (Vals AI independent harness, high effort; counts tasks completed via Anthropic's server-side safeguard fallback as successes — **79.8%** when the 26/267 fallback tasks count as failures; ahead of GPT-6 Astra 87.27%)
- Terminal-Bench 4.0: **66.4%** (Anthropic launch table, xhigh effort, Claude Code harness, 5 trials, safeguards on; Vals AI independent: **61.62% #1**; AA independent: 59.6%; Vals strict-no-fallback read 53.54% on the 30/198 affected tasks)
- GDPval-AA v2.1: **1846 Elo** (Anthropic launch table, max effort; AA-normalized 68.3%) — top of the launch table vs Fable 5.1 (1735), Opus 5 (1708), GPT-6 Astra (1542)
- OSWorld 2.1 (computer use): **81.8% partial / 48.7% strict** (Anthropic system card, safeguards on)
- AutomationBench: **40.0%** (Zapier-run early-access eval, no fallback models — safeguard interventions counted as failures; GPT-6 Astra leads at 41.4%); AA AutomationBench-AA: **69.5%** (AA independent)
- FrontierCode v1.1 (Main): **54.4%** (Anthropic; GPT-6 Astra 53.3%); FrontierCode 2.0: **45.5%** (AA independent)
- CursorBench 4.0: **57.8%** (Anthropic; +6.0 over Fable 5.1)
- Terminal-Bench-Science 0.1: **58.7%** (Anthropic, ±3.5–5 pts; Vals AI independent: **48.57% #2**, GPT-6 Astra leads; GPT-6 Astra 64.6% vendor)
- τ²-Bench (Airline domain): **75.3% ±1.7pp**, ~#30 of 119 (OpenRouter-hosted leaderboard; $0.34/task, 1.9 min/task) — mid-pack, behind GPT-5.1 Pareto (80.0%), Fable 5 (79.5%), Opus 5 (78.8%); ~96% on τ²-telecom cited as its baseline in third-party agent research (MindPattern, 2026-10-20)
- Toolathlon-Verified: **77.8%** (Anthropic system card via benchlm.ai, 2026-10-10); AA ITBench-AA (K8s incident RCA): **38.2%** (AA — weak spot)
- Harvey Legal Agent Benchmark (agentic legal): **3.75%, #31 of 64** (Vals AI — clear weak spot)
- MCP-Atlas: no verified public score found (aggregator "85.9%" is a low-confidence estimate — provisional only); Claw-Eval/ClawProBench: no verified public score found

Reasoning / knowledge:

- HLE (Humanity's Last Exam): **67.7% with tools / 64.4% no tools** (Anthropic system card Table 8.1.A, adaptive thinking max effort, safeguards on); AA independent no-tools: **61.4%** at max effort
- ARC-AGI-2: **93.3%** at high effort (ARC Prize verified, best of five variants; XHigh 92.5%, Max 91.7%, Medium 87.5%, Low 70.1%) — top-tier verified abstract reasoning
- ARC-AGI-1: **98.5%** at high effort (ARC Prize verified; 97.5% at Max/XHigh/Medium)
- ARC-AGI-3: no verified public score found (not yet attempted on arcprize.org as of 2026-11-01)
- GPQA Diamond: no verified vendor score found (Anthropic reports none; AA lists null) — closest proxy: Epoch AI third-party run **90.6%** at max effort (aggregator-reported, provisional)
- FrontierMath v2: Tiers 1–3 **91.2%**, Tier 4 **95.0%** (Epoch AI leaderboard)
- ProofBench v1.1: **100.00%, #1** (Vals AI, ties Fable 5.1 and specialized prover AlephProver)
- CritPt v2 (Hard Subset, physics): **31.7%** (AA measured — modest; caps pure-physics claims)
- SciCode: **66.9%** (AA measured, max effort)
- AA-LCR (long-context reasoning): **84.7%** (AA measured, max effort)
- AA-Omniscience v1.1: **65.5% accuracy** (AA measured)
- Artificial Analysis Intelligence Index v5.0: **58** (AA model page, Max effort with default fallback; #2 on AA's current board view; AA-measured composite: 9 evals incl. Terminal-Bench 4.0, FrontierCode 2.0, HLE-Diamond, CritPt v2, GDP.pdf 26.2%)
- LMArena text arena: **1509 Elo ±12**, #1 on debut ("Claude Opus 5.5 (High)" listing, Arena announcement)
- MLCR: no verified public score found for this exact model in this pass

Coding:

- SWE-bench Pro: **89.9%** (Anthropic system card §8.2, max effort; field-leading — Fable 5.1 81.2%, Opus 5 79.2%, GPT-5.6 58.6%; corroborated by models.wtf/AILead leaderboards)
- SWE-bench Verified: no verified public score found (Anthropic no longer reports it; Vals AI archived the board 2026-09-01 with Opus 5 last at 97.0% before measuring 5.5; aggregator "96.5%" values are model estimates — discarded)
- LiveCodeBench: no verified public score found (Vals AI did not publish a 5.5 run; aggregator "100%" figures are model estimates — discarded)
- Terminal-Bench 2.1: **87.64% #1** (Vals AI independent — the strongest independent agentic-coding evidence)
- Vibe Code Bench: **90.29%, #2 of 63** (Vals AI, OpenHands harness; within noise of Fable 5's leading 90.35%)
- IOI (competitive programming): **95.06%, #2** (Vals AI); ProofBench **100% #1** (Vals AI)
- SWE-bench Multilingual: **93.9%**; SWE-bench Multimodal: **61.4%** (Anthropic system card via benchlm.ai)
- DeepSWE v1.1: **74.2%** (Anthropic system card; mini-swe-agent harness)
- ProgramBench: **18.5% fully resolved, #1** (Vals AI independent; the system card's 91.2% uses partial-credit scoring — not comparable)
- FrontierSWE v2: **62.3%** (competitor-reported via Google's Gemini 4 Argon comparison — provisional)

Long context:

- GraphWalks BFS (≤128K bin): **90.6%** (Google-computed for the Anthropic models in its Gemini 4 Argon evaluation PDF, Oct 2026 — Fable 5.1 91.4%, GPT-6 Astra 98.7%, Gemini 4 Argon 99.7%)
- GraphWalks BFS (256K–1M bin): **66.8%** (same Google run, 200 problems; behind Gemini 4 Argon 84.2% and GPT-6 Astra 71.8%, ahead of Fable 5.1 65.0%)
- AA-LCR v1.1: **84.7%** (AA measured — long-context reasoning proxy)
- MRCR / RULER: no verified public score found for this exact model (Anthropic's Opus 5.5 card uses ProgramBench as its long-context evaluation and publishes no MRCR/RULER row; aggregator MRCRv2 "86.0%" is a low-confidence estimate)

### Normalized scores (1–100)

- **Tool use: 96/100.** #1 of 63 on Vals' independent Index (69.69%), Terminal-Bench 2.1 87.64% (#1, independent), Terminal-Bench 4.0 66.4% vendor / 61.6% Vals #1, GDPval-AA v2.1 1846 Elo (top of launch table), and OSWorld 2.1 81.8% (partial) make the strongest verified agentic profile in this pass; capped just under 100 by the mid-pack τ²-Bench Airline 75.3%, the 40% AutomationBench when fallbacks count as failures, ITBench 38.2%, and the Harvey legal-agent 3.75% weak spot.
- **Reasoning: 95/100.** ARC-AGI-2 93.3% (ARC-Prize-verified, best of five effort variants) and ARC-AGI-1 98.5% are elite, HLE 67.7% with tools (61.4% AA independent) and FrontierMath Tier 4 95.0% exceed frontier references, and ProofBench 100% (Vals) plus LMArena's #1 debut (1509 Elo) confirm breadth; capped by CritPt 31.7%, the missing vendor GPQA Diamond (third-party 90.6% only), and consistent vendor-vs-independent gaps of 3–6 points (HLE, Terminal-Bench).
- **Context window: 93/100.** 1M tokens by default with no beta header and no long-context surcharge, plus 128K output (300K batch beta), maps to the top tier; measured retrieval quality is strong but not dominant — GraphWalks BFS 90.6% at ≤128K yet 66.8% at 256K–1M, third of four frontier models behind Gemini 4 Argon (84.2%) and GPT-6 Astra (71.8%) — and no vendor MRCR/RULER is published, keeping it off 95+.
- **Multimodal: 80/100.** Text + image + PDF input (600 images/PDF pages per request) with strong vision evidence — MMMU-Pro 87.7% (AA measured), Chartography 89.0% with tools, OSWorld 2.1 81.8% partial computer use — but no audio or video input and text-only output cap it in the image+PDF band.
- **Coding: 96/100.** SWE-bench Pro 89.9% is a clear field lead (vs Fable 5.1 81.2%), and the independent Vals suite confirms #1 agentic coding — Terminal-Bench 2.1 87.64%, Terminal-Bench 4.0 61.6% (#1 of 63), Vibe Code Bench 90.29% (#2), IOI 95.06% (#2), ProofBench 100% — plus DeepSWE 74.2% and SWE Multilingual 93.9%; capped by the absence of any verified SWE-bench Verified or LiveCodeBench score for this exact ID (Vals archived SWE-bench before measuring it) and FrontierCode 54.4%.
- **Cost efficiency: 82/100.** $4/$20 per 1M with 5% cache reads ($0.20) undercuts Opus 5 by 20% on tokens and 60% on cache reads while performing at Fable-5.1 level ($10/$50) — Vals measured #1-of-63 quality at $32.77/test — excellent value at the frontier price point; capped below the mid-tier band by premium absolute pricing (5× Sonnet 5.5) and AA's max-effort verbosity ($10.04 per Intelligence-Index task, 220M output tokens ≈ 3× the median).
- **Overall Score: 92/100.** Mean of the five quality dims (Cost excluded): (96 + 95 + 93 + 80 + 96) / 5 = 460/5 = 92.0 → 92. Best-fit: the default pick for long-running agentic coding, terminal/computer-use agents, and professional knowledge work at the lowest flagship price — pair with GPT-6 Astra for agentic science (Terminal-Bench-Science 64.6% vendor) and Gemini 4 for the largest verified long-context retrieval margin.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-01 (re-research pass; prior 2026-10-16)
- Method: public internet research (approved re-research pass); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Claude Opus 5.5 — Anthropic announcement & launch benchmark table](https://www.anthropic.com/claude-opus-5-5)
  - [Claude Opus 5.5 model page — platform.claude.com (ID, context, pricing, capabilities)](https://platform.claude.com/docs/en/models/opus-5-5/overview)
  - [Vals AI independent evaluation of Claude Opus 5.5 (Vals Index, Terminal-Bench 2.1/4.0, Vibe Code Bench, ProofBench)](https://www.vals.ai/home)
  - [ARC Prize verified results — Claude Opus 5.5 (ARC-AGI-1/2 by effort variant)](https://arcprize.org/results/anthropic-claude-opus-5-5)
  - [Artificial Analysis — Claude Opus 5.5 (Intelligence Index v5.0 = 58, cost/verbosity)](https://artificialanalysis.ai/models/claude-opus-5-5)
  - [GraphWalks benchmark compilation incl. Google's Gemini 4 Argon comparison run (Opus 5.5 BFS 90.6% / 66.8%)](https://klu.ai/benchmarks/graphwalks)
- Future sources: add a new file next to this one, e.g. `GLM_5_3_Flash_v2.md`, using the same headings.
