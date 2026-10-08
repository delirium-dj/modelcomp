# Qwen3.7-Plus — findings by MiMo 2.6 Flash

- Source: Alibaba Cloud / Qwen (`qwen-3.7-plus`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7-Plus
- **Short description:** The cost-effective Plus sibling of Qwen3.7-Max (announced 2026-06-02, GA after preview), and the Qwen line's multimodal-agent workhorse: it bolts image + **video** understanding onto the text-only Qwen3.7 backbone and adds GUI grounding, screen reading, and end-to-end mobile navigation (ScreenSpot Pro, AndroidWorld) while keeping Max-tier agentic scaffolds (Claude Code, OpenClaw, Qwen Code). Proprietary/API-only. Priced at roughly one-sixteenth to one-sixth of Max. Vendor frames it as "approaching Max-tier" on coding agents and STEM reasoning; independent AA measurements tell a more mixed story (GPQA exactly at the 90 line, HLE 35.6, TB4.0 at 1.0).
- **Provider / access:** Alibaba Cloud Model Studio / DashScope (`qwen3.7-plus`, OpenAI-compatible endpoints in Beijing, Singapore, US-Virginia), OpenRouter (`qwen/qwen3.7-plus`), OrcaRouter, aggregators; no open weights.
- **Release / knowledge:** released 2026-06-02/03 (preview ~2026-05-14); knowledge cutoff not disclosed.
- **IDs:** `qwen3.7-plus` (hosted) / `qwen/qwen3.7-plus` (gateways).
- **Context window:** **1,000,000 tokens** (QwenCloud max input 991K non-thinking / 983K thinking); max output 65,536 (OpenRouter/OrcaRouter; some Model Studio docs say 32,768); reasoning effort up to 262K tokens budgeted.
- **Modalities:** **text + image + video in** (per OrcaRouter/Model Beats; Model Studio config lists text-only for the plain endpoint but vision routes exist); text out; reasoning yes (thinking mode, controllable depth); tool calls yes (native function calling, structured outputs, context-cache prefix sharing).
- **Pricing (as of 2026-10-07):** OpenRouter **$0.32 in / $1.28 out** per 1M, cache read $0.064; official tiered: ≤256K prompts ~$0.40/$1.20 (non-thinking, Singapore), **above 256K the rate jumps to ~$1.06–$1.20 in / $3.60–$4.25 out**, thinking-mode output ~$4.00 up to 256K; Cache Creation $0.40, 5-min cache read $0.032. Roughly 95% below Claude Opus 4.7 on blended pricing.
- **Architecture:** proprietary multimodal extension of the Qwen3.7 text MoE backbone; size undisclosed; closed weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **61.0** (Artificial Analysis, independent) / **52.8** (Vals AI, independent) / 70.3→(TB2.0) — **far under the 85% ref**
- Terminal-Bench 4.0: **1.0** (AA, independent) — floor; Terminal-Bench Hard: 47.0 (AA)
- Terminal-Bench 2.0 (Terminus-2): **70.3** (vendor self-run; matched by OrcaRouter) — strong for its class
- AndroidWorld: **81** (vendor), ScreenSpot Pro (GUI grounding): **79** (vendor) — the signature capability
- τ²-Bench Telecom: **93.0** (AA) vs τ-Bench Banking: 17.5 (AA); SkillsBench 54.3 (Vals); GDPval-AA: **13.5** (AA); Finance Agent 38.2, Legal Research 16.3, Tax Agent 38.7 (Vals)
- MCP-Mark / Deep-Planning / Kernel Bench L3: "strong" per vendor blog, no figures extracted; ALE: none

Reasoning / knowledge:

- GPQA Diamond: **90.3** vendor / **90.0** (AA, independent) — **exactly at the 90%+ ref, both readings agree**
- HLE (AA): **35.6%** — **under the 40%+ ref**
- AA Intelligence Index: **25.2** (OpenRouter AA table) vs **39** (AI-TLDR citing AA) — **either reading well under the 60+ ref** (scale/re-base discrepancy noted, both fail the ref)
- SuperGPQA: 71.4 (Model Beats, #4); CritPt 9.1 (AA); AA-Omniscience 22.5 accuracy / 72.3 non-hallucination
- AA Agentic Index: **17.5** (AA)

Coding (vendor unless noted):

- SWE-bench Verified: **77.7** vendor (AA-sourced list agrees) — solid mid-band
- SWE-bench Pro: 57.6 (vendor/Model Beats #34); SWE-bench Multilingual: 75.8
- SciCode: **46.1** (AA, independent) — **under the 55%+ ref**
- AA Coding Index: **55.9** — **under the 70+ ref**
- Vibe Code Bench 46.4, Code Migration 12.9 (Vals); SWE Coding (Model Beats) 14.2
- No DeepSWE row found for this model

Long context:

- 1M window; **AA-LCR: 73.0** (AA, independent) — a real retrieval signal at length, middling score; no needle/MRCR figure.

Multimodal (vendor unless noted):

- Vals Multimodal Index: **53.9** (Vals, independent) — mediocre; ScreenSpot Pro 79 and AndroidWorld 81 are vendor-run; Video understanding is the headline feature but no LVBench/VideoMME figure found.

### Normalized scores (1–100)

- **Tool use: 79/100.** Strong mobile/GUI rows (AndroidWorld 81, ScreenSpot 79 vendor) and τ²-Telecom 93 (AA), but independent terminal agent rows collapse (TB2.1 52.8–61, TB4.0 1.0), GDPval-AA 13.5 and AA Agentic Index 17.5 are bottom-tier, no ALE/MCP-Atlas figures.
- **Reasoning: 80/100.** GPQA Diamond lands exactly on the 90+ ref with vendor and AA agreement (90.3/90.0) and SuperGPQA #4; HLE 35.6 and the AA Index (25.2–39) both miss their refs, and CritPt 9.1 is low.
- **Context window: 95/100.** 1M → ≥1M floor; AA-LCR 73 is the rare independent long-context retrieval reading — helpful but not high enough to lift above the floor band.
- **Multimodal: 84/100.** Image + video in → 75–90 band; GUI grounding (79) and mobile (81) are the class act, but Vals' Multimodal Index of 53.9 and the absence of video-benchmark figures cap it at 84.
- **Coding: 76/100.** SWE-V 77.7 and SWE-ML 75.8 are respectable mid-band scores and TB2.0 70.3 is good, but all four coding refs miss: SciCode 46.1 (<55), coding index 55.9 (<70), TB2.1 52.8–61 (<85), no DeepSWE row; TB4.0 1.0 is a floor reading.
- **Cost efficiency: 94/100.** $0.32/$1.28 (cache ~10-20%) for a 1M-context multimodal agent model — an order of magnitude below the $0.60/$2.20 anchor; only the >256K long-prompt tier ($1.06+/$4.25) and thinking-mode output surcharges prevent a top score.
- **Overall Score: 83/100.** (79+80+95+84+76)/5 = 82.8 → 83 — the value play in the Qwen line: video-capable GUI/mobile agents at flash-tier prices, with a ref-clearing GPQA, discounted for independent terminal-agent numbers in the 50s/60s, a floor TB4.0, an AA Index nowhere near 60, and coding refs it doesn't clear.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (Alibaba Cloud blog, QwenCloud, OpenRouter, OrcaRouter, Model Beats, AI/TLDR, Traictory, AnotherWrapper); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
