# Claude Opus 4.8 — findings by Qwen 3.8 Max

- Source: Anthropic (`claude-opus-4.8`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's Opus-tier flagship, released 2026-05-28 — it dethroned GPT-5.5 on the Artificial Analysis Intelligence Index and was the world's #1 model for 12 days (May 28 – June 9) until Claude Fable 5 (Mythos-class) arrived. Its signature is calibrated, cautious honesty (a 4x honesty improvement, 35.9% hallucination vs Fable 5's higher rate) plus Dynamic Workflows (hundreds of parallel subagents). Successor to Opus 4.7 (April 16).
- **Provider / access:** Claude API (`claude-opus-4-8`), Claude Pro/Max, Claude Code, AWS Bedrock, Google Cloud Vertex AI.
- **Release / knowledge:** Released 2026-05-28; knowledge cutoff not published.
- **IDs:** `anthropic/claude-opus-4.8`.
- **Context window:** 1,000,000 tokens — expanded from ~200K in Q2 2026 (5x increase). GraphWalks BFS evaluated at the 1M span (68.1%).
- **Modalities:** text + image + file in → text out; reasoning yes (extended thinking); tool calls yes (MCP, Dynamic Workflows / parallel subagents, computer use).
- **Pricing (as of 2026-10-21):** $5.00 / 1M input, $25.00 / 1M output (standard — "pricing unchanged" from Opus 4.7 despite the 5x context expansion); **fast mode** $10.00 / 1M input, $50.00 / 1M output. Batch route discounted.
- **Architecture:** proprietary (closed weights).

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified (computer use): **83.4%** (behind Fable 5 85.0%)
- MCP Atlas (multi-tool orchestration): **82.2%**; Online-Mind2Web: **84%**; BrowseComp (multi-agent): **88.5%**; Toolathlon: **59.9%** (Opus 4.8 has published scores where Fable 5 did not)
- GDPval-AA (Elo): **1,890** (behind Fable 5 1,932); AutomationBench: **15.5%** (behind Fable 5 17.4%)
- GDP.pdf (no tools): **22.5%**; Finance Agent v2: **53.9%**; Legal Agent Benchmark: **10.4%** (all behind Fable 5)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **61.4** (#2 behind Fable 5's 64.9; was #1 for its 12-day reign)
- GPQA Diamond: **93.6%** (leads / ties Fable 5's ~93%)
- Humanity's Last Exam: **49.8%** no tools / **57.9%** with tools (behind Fable 5 59.0% / 64.5%)
- USAMO 2026: **96.7%**; ARC-AGI-2 (High): **72.1%** (both Opus-4.8-only scores in the comparison)
- AA-Omniscience Index: **27.4** (#3), Accuracy **46.6%**, Hallucination **35.9%** — the more honest/calibrated model vs Fable 5

Coding:

- SWE-bench Verified: **88.6%** (behind Fable 5 95.0%/93.9%)
- SWE-bench Pro: **69.2%** (behind Fable 5 80.3%); SWE-bench Multilingual: **84.4%** (behind Fable 5 ~87%)
- Terminal-Bench 2.1: **82.7%** (behind Fable 5 88.0%); FrontierCode Diamond: **13.4%** (behind Fable 5 29.3%)

Multimodal / biology:

- HealthBench Professional: **56.9%**; BioMysteryBench hard **40.0%**, human-solved **80.4%** (all behind Fable 5)
- Blueprint-Bench 2 (spatial reasoning): **14.5%** (a marked weak point vs Fable 5's 38.6%)

Long context:

- 1,000,000-token window (expanded from 200K); GraphWalks BFS 1M: **68.1%** (behind Fable 5 80.0%) — retrieval degrades more than Fable 5 at the full 1M span.

> Provenance: benchmark figures compiled by CodingFleet (June 11, 2026) from Anthropic, Vals.ai and Artificial Analysis for the Claude Fable 5 vs Opus 4.8 head-to-head; pricing confirmed via Anthropic's "Introducing Claude Opus 4.8" ($5/$25 standard, $10/$50 fast) and finout.io ("pricing unchanged"), and the 1M context expansion (from ~200K, Q2 2026) via Anthropic/developer coverage. A conflicting "$15/$75, 200K" figure in one third-party table reflects stale Opus 4/4.1-era data and was disregarded.

### Normalized scores (1–100)

- **Tool use: 90/100.** Broad, strong agentic coverage — MCP Atlas 82.2%, BrowseComp 88.5%, Online-Mind2Web 84%, OSWorld-Verified 83.4% and Dynamic Workflows (hundreds of parallel subagents); capped by low AutomationBench (15.5%) and GDP.pdf (22.5%), and it trails Fable 5 on GDPval-AA.
- **Reasoning: 91/100.** GPQA Diamond 93.6% (leads), USAMO 2026 96.7%, ARC-AGI-2 (High) 72.1% and an Intelligence Index of 61.4 (#1 for 12 days), with best-in-class calibrated honesty (35.9% hallucination, a 4x improvement); held below the ceiling by HLE (49.8%/57.9%) trailing Fable 5.
- **Context window: 90/100.** A genuine 1M-token window (5x expansion at unchanged price); discounted because GraphWalks BFS at 1M is 68.1% — noticeably weaker long-span retrieval than Fable 5's 80.0%.
- **Multimodal: 82/100.** Capable computer-use vision (OSWorld 83.4%) and solid biology/health (BioMysteryBench human-solved 80.4%), but Blueprint-Bench spatial reasoning is weak (14.5%) and no MMMU-Pro / Chartography / video benchmark is published — text+image only.
- **Coding: 90/100.** Top-tier at release — SWE-bench Verified 88.6%, SWE-bench Pro 69.2%, SWE-bench Multilingual 84.4%, Terminal-Bench 2.1 82.7% (it "led on coding benchmarks by wide margins" for its 12-day reign); capped by FrontierCode Diamond 13.4% and being overtaken by Fable 5 (and later GPT-5.6 Sol on DeepSWE/Terminal-Bench).
- **Cost efficiency: 72/100.** $5/$25 standard is competitive flagship pricing (below GPT-6 Astra $10/$50 and GPT-5.6 Sol's $30 output) and the 1M context came at no price increase; not higher because it is still a premium Opus tier with a $10/$50 fast mode and a discounted-only batch lane.
- **Overall Score: 89/100.** Mean of Tool 90 + Reasoning 91 + Context 90 + Multimodal 82 + Coding 90 = 88.6 → 89. Best fit: production coding agents and knowledge work where calibrated honesty matters (its lower hallucination rate is arguably safer than Fable 5 for unattended, safety-critical runs), long multi-subagent workflows via Dynamic Workflows, and 1M-context tasks; raw capability ceilings (HLE, spatial, deep-repo coding) now favor Fable 5 / Opus 5.5.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-21
- Method: public internet research (CodingFleet's Claude Fable 5 vs Opus 4.8 30-benchmark comparison compiling Anthropic/Vals.ai/Artificial Analysis; Anthropic's Opus 4.8 announcement and finout.io for pricing; developer coverage for the 1M-context expansion); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
