# Claude Opus 5.5 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-opus-5-5`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's September 2026 flagship general-release model — near-Fable 5.1 performance at 60% less per token, #1 on the Artificial Analysis Intelligence Index, and the leader on agentic coding (Terminal-Bench 4.0, FrontierCode, CursorBench) and knowledge work (GDPval-AA). Smaller and cheaper than Fable 5.1; the first model of the Claude 5.5 family.
- **Provider / access:** Claude Platform API (`claude-opus-5-5`, Messages API; Bedrock `anthropic.claude-opus-5-5`); Claude apps (Pro/Max/Team/Enterprise), Claude Code, Claude Cowork; Google Cloud Vertex AI, Microsoft Foundry. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-09-22; knowledge cutoff June 2026 (verified via Anthropic launch coverage).
- **IDs:** `claude-opus-5-5` (Anthropic API / Bedrock / Vertex). No Free ID on Zen.
- **Context window:** 1,000,000 total tokens with no long-context surcharge; 128,000 max output (verified via Anthropic launch coverage and kingy.ai analysis).
- **Modalities:** text and image input (PDF support, Files API, vision); text output; adaptive thinking always on (cannot be disabled — legacy `thinking: disabled` returns 400), effort levels low/medium (default)/high/xhigh/max; tool calls (new `computer_toolset_20260801` computer-use toolset; forced `tool_choice` removed); JSON mode/structured outputs.
- **Pricing (as of 2026-09-24):** $4.00 / $20.00 per 1M in/out; cache reads $0.20 (5% of base input), cache writes $5 (5-min) / $8 (1-hr); Batch $2/$10; Fast mode (research preview) $8/$40; US data residency 1.1x. Paid only — no free API tier.
- **Architecture:** Proprietary — parameter count not disclosed (smaller than Fable 5.1).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (Anthropic, xhigh; AA independent run 59.6% — level with GPT-6 Astra's top score)
- FrontierCode v1.1 Main: **54.4%** (Anthropic; leads GPT-6 Astra's 53.3%; medium effort 54.6%)
- CursorBench 4.0: **57.8%** (Anthropic; +6 over Fable 5.1)
- GDPval-AA v2.1: **1846 Elo** (Anthropic/AA; +304 over Astra — widest margin)
- AutomationBench: **40.0%** (Zapier leaderboard, no fallbacks; GPT-6 Astra leads at 41.4%)
- OSWorld 2.0 (partial credit): **81.8%** (Anthropic; full-completion rate lower; different scoring from Astra's 72.6%)
- Terminal-Bench-Science 0.1: **58.7%** (Anthropic; ~2x Opus 5's 29.0%; Astra leads at 64.6%)
- Tau3-Banking, Claw-Eval: no verified public score found

Reasoning / knowledge:

- HLE (with tools): **67.7%** (Anthropic; AA independent run 61.4% — new AA high, prev best 59.1%)
- SciCode: **66.9%** (Artificial Analysis, independent — new AA high)
- AA-Briefcase: **1822 Elo** (Artificial Analysis, independent — new AA high)
- Artificial Analysis Intelligence Index: **58 / #1** (Artificial Analysis, launch-day independent; ahead of GPT-6 Astra and Fable 5.1, both 53)
- GPQA Diamond: no verified public score found (Anthropic's table doesn't headline it; OpenAI reports GPT-6 Astra at 96.0%)
- LCR / MLCR, CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- Terminal-Bench 4.0: **66.4%** / **59.6%** independent (as above)
- FrontierCode v1.1 Main: **54.4%** (as above)
- CursorBench 4.0: **57.8%** (as above)
- SWE-bench Verified / SWE-bench Pro: no verified public score found (Anthropic's launch table uses newer tests; no SWE-bench headline)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **66.9%** (AA, independent; as above)
- Efficiency: A 680K-line code migration finished in under a day; 200K-line codebase audit under 3 hours vs 20+ hours for Opus 5 (Anthropic customer reports)

Long context:

- No MRCR/RULER/GraphWalks value verified for this exact model (1M window with no surcharge; OpenAI reports GPT-6 Astra near-perfect MRCR v2 to 512K, not Opus 5.5)
- Chartography (visual reasoning, with tools): **89.0%** (Anthropic)

### Normalized scores (1–100)

- **Tool use: 92/100.** GDPval-AA 1846 Elo sits above the ~1750 frontier ref, TB4.0 66.4% (vendor; 59.6% independent) is near-leading, FrontierCode 54.4% and OSWorld 81.8% (partial) are elite; the AutomationBench loss to Astra and missing Tau3 keep it under 95.
- **Reasoning: 94/100.** HLE 67.7% (vendor) / 61.4% (AA, new independent high), SciCode 66.9% (new high) and the #1 AA Index of 58 all exceed the frontier refs (GPQA 90%+, HLE 40%+, Index 60+ on the old scale); docked for the vendor-vs-independent gaps (−6.3 to −6.8 pts) and the missing GPQA number.
- **Context window: 95/100.** 1M tokens with no long-context surcharge maps to the ≥1M tier (95–100); no measured ≥98% retrieval at 512K+ keeps it off the maximum.
- **Multimodal: 80/100.** Text + image + PDF input with strong vision (Chartography 89.0%, OSWorld 2.0 81.8% computer use); no audio/video input — the +video/PDF band is 75–90.
- **Coding: 88/100.** TB4.0 66.4%/59.6%, FrontierCode 54.4% and CursorBench 57.8% lead the field; the missing SWE-bench headline and the AA finding of parity (not superiority) with Astra on TB4.0 prevent 90+.
- **Cost efficiency: 55/100.** $4/$20 per 1M sits just above the $3/$15 = ~60 methodology reference, landed at 55; no long-context surcharge, cache reads at 5% of input and strong medium-effort efficiency are offsets, but at max effort ~119K output tokens per task (AA) erodes the savings.
- **Overall Score: 90/100.** Mean of the five quality dims (92 + 94 + 95 + 80 + 88) / 5 = 89.8 → 90. Best-fit: the top pick for agentic coding, professional knowledge-work deliverables and long-horizon agents — with GPT-6 Astra for agentic science and token-efficient max-effort runs.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-24
- Method: public internet research (Anthropic launch coverage and system-card findings via Kingy AI with AA/Zapier independent data, DuckDuckGo web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_5.md`, using the same headings.
