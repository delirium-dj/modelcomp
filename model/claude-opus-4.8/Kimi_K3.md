# Claude Opus 4.8 — findings by Kimi K3

- Source: Anthropic / Claude Opus 4.8 (`claude-opus-4-8`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's final Opus-4-generation flagship before Opus 5 — an exceptionally well-rounded reasoning model (USAMO 96.7%, SWE-bench Verified 88.6%) that remained a top-15 model into late 2026.
- **Provider / access:** Claude API (`claude-opus-4-8`), Amazon Bedrock, Google Cloud, Microsoft Foundry.
- **Release / knowledge:** 2026 release (pre-Opus 5; exact date not verified in my sources); knowledge cutoff not verified.
- **IDs:** `anthropic/claude-opus-4-8` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1M tokens (benchlm.ai); max output not verified.
- **Modalities:** text/image in (CharXiv, ScreenSpot Pro measured); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** no verified public price found in my sources; Opus-tier (below Opus 5's $5/$25 after succession) — provisional.
- **Architecture:** proprietary (Anthropic); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.6%** (Vals 71.9%); Terminal-Bench 3.0: **21.1%** (benchlm.ai)
- τ²-bench (Tau2-Bench): **94.4%** (benchlm.ai)
- GDPval-AA: **1593 Elo** (46.9% normalized) (benchlm.ai)
- MCP Atlas: **82.2%**; Toolathlon: **59.9%**; DeepSearchQA: **93.1%**; BrowseComp: **84.3%**; OSWorld-Verified: **83.4%** (note OSWorld 2.0: 20.6%); Finance Agent v2: **53.9%**; AA Agentic Index: **42.6%** (benchlm.ai)
- Claw-track: ResearchClawBench **21.1%** (benchlm.ai)
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (GPQA-D; AA 92.0%; Vals 92.4%) (benchlm.ai)
- HLE: **57.9%** (w/ tools); 49.8% (no tools); AA-HLE 48.7% (benchlm.ai)
- AA-LCR: **77.7%**; CritPt: **20.9%** (benchlm.ai)
- ARC-AGI-2: **72.1%**; ARC-AGI-3: **1.5%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **41.8**; BenchLM overall **70.46/100, #14 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **48.8% / 39.3%** (benchlm.ai)
- USAMO 2026: **96.7%**; FrontierMath v2 T1–3: **47.2%**, T4: **31.3%**; MMLU-Pro (Vals): **89.6%** (benchlm.ai)

Coding:

- SWE-bench Verified: **88.6%**; SWE-bench (Vals): **88.6%**; SWE-bench Pro: **69.2%**; SWE Multilingual: **84.4%**; SWE Multimodal: **38.4%** (benchlm.ai)
- LiveCodeBench (Vals): **87.8%** (benchlm.ai)
- AA-SciCode: **54.4%**; AA Coding Index: **74.3** (benchlm.ai)
- CursorBench 3.2: **62.3%**; FrontierCode 1.1 Main: **46.5%** (benchlm.ai)

Long context:

- AA-LCR 77.7% at the 1M window (benchlm.ai); no MRCR/RULER/GraphWalks public score found.

Multimodal:

- CharXiv: **89.9%** (tools); 80.5% (no tools); ScreenSpot Pro: **87.9%**; OfficeQA Pro: **66.2%**; Design Arena Website: **1266 Elo** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 84/100.** τ²-bench 94.4%, MCP Atlas 82.2%, DeepSearchQA 93.1%, OSWorld-Verified 83.4%; capped by OSWorld 2.0 (20.6%) and TB 3.0 (21.1%).
- **Reasoning: 86/100.** USAMO 96.7%, GPQA ~93.6%, HLE 57.9%, ARC-AGI-2 72.1%, low hallucination (39.3%); capped by CritPt 20.9% and ARC-AGI-3 1.5%.
- **Context window: 84/100.** 1M window with LCR 77.7%; capped by missing max-window retrieval probes.
- **Multimodal: 85/100.** CharXiv 89.9% + ScreenSpot Pro 87.9% is elite vision grounding; text-only output caps it.
- **Coding: 86/100.** SWE-bench Verified 88.6%, LiveCodeBench 87.8%, Coding Index 74.3; capped by SWE Multimodal 38.4% and CursorBench 3.2 62.3%.
- **Cost efficiency: 58/100.** Price unverified; scored provisional on Opus-tier positioning (flagship-priced in its generation, likely discounted post-Opus 5).
- **Overall Score: 85/100.** Mean of the five quality dims (84+86+84+85+86)/5 = 85.0. Best fit: proven, well-rounded Opus quality for teams not yet migrated to Opus 5 — nearly everything at a slight discount.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
