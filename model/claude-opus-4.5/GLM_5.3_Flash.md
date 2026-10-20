# Claude Opus 4.5 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-opus-4-5-20251101`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's flagship frontier model for coding, agents, and computer use, released November 24, 2025. The first Opus priced within reach of everyday use ($5/$25 per M tokens), with a new `effort` parameter for speed/quality tradeoffs. BenchLM ranks it #74 of 889 (54.14) — three generations behind the 2026 Opus line.
- **Provider / access:** Anthropic API (`claude-opus-4-5-20251101`), Claude apps, and all three major cloud platforms (AWS Bedrock, Google Vertex AI, Microsoft Foundry). Chat Completions-style Messages API.
- **Release / knowledge:** 2025-11-24 release; knowledge cutoff August 2025 (per Artificial Analysis).
- **IDs:** `anthropic/claude-opus-4-5-20251101` (no Free ID exists on Zen)
- **Context window:** 200K total tokens (BenchLM concurs; 64K thinking budget used in official evals; Anthropic methodology page + AA spec sheet both state 200K).
- **Modalities:** text + image input; text output; reasoning via extended thinking / effort parameter (BenchLM classifies the base variant as non-reasoning; a Thinking sibling exists); tool calls yes (advanced tool use, subagents, memory tool, context compaction); JSON/structured output supported.
- **Pricing (as of 2026-10-11):** $5.00 in / $25.00 out per 1M tokens; cache discount 90% (cache hit ~$0.50 per 1M per AA). Paid only.
- **Architecture:** proprietary; parameter count undisclosed. Notable platform features: effort parameter, context compaction, memory tool, multi-subagent orchestration.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **86.3%** (AA, independent); τ³-bench: **70.2%** (Qwen3.6-Plus comparison table — fills the Tau3 gap)
- OSWorld-Verified: **66.3%** (system card via benchlm.ai); Claw-Eval: **59.6%**; CyberGym: **50.6%** (CyberGym leaderboard)
- MCP Atlas: **42.3%**; Toolathlon: **43.5%**; QwenClawBench: **52.3%**; MCP-Tasks: **71.8%**; WideResearch: **76.4%** (Qwen comparison tables — much weaker MCP/tool rows than the prior launch-window framing)
- VITA-Bench: **23.3%**; DeepPlanning: **26.4%**; JobBench: **32.3%** (weak); Gert Labs: **64.23%**
- Terminal-Bench 2.0: **59.3%** (system card — corroborated)
- BrowseComp-Plus: **70.48%** baseline → **85.30%** with context compaction + memory + subagents (Anthropic methodology footnote)
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **87.0%** (system card via benchlm.ai — corroborates the 87.1% announcement read); AA independent: **81.0%**
- HLE: **30.8%** (Qwen3.6-Plus comparison table — consistent with the 32.0% third-party comparative the prior pass cited); AA-HLE: **13.2%** (AA non-reasoning base)
- AIME26: **95.1%**; HMMT Feb 2025: **92.9%** / Nov 2025: **93.3%** / Feb 2026: **85.3%** (Qwen tables — strong math)
- FrontierMath v2: **34.4%** Tiers 1–3 / **4.9%** Tier 4 (Epoch AI leaderboard, 2026-10-17 refresh) — CHANGED: the 2026-10-11 pass recorded 20.7%/4.2% from the same source; Epoch has since re-scored upward, current values used; CritPt: **0.3%** (AA — near-zero)
- AA-LCR v1.1: **70.7%** (AA — fills the long-context gap, mid); LongBench v2: **64.4%**; AI-Needle: **74%** (Qwen tables)
- MMLU-Pro: **89.5%** (Qwen table) / **88.9%** (AA) — corroborated; MMLU-Redux: **96.6%**; SuperGPQA: **70.6%**; C-Eval: **92.2%**
- Artificial Analysis Intelligence Index: **23.7** (AA current board — corroborates the 24 estimate)
- AA-Omniscience: **40.9% accuracy / 76.2% non-hallucination row / −4.1 index** (AA)

Coding:

- SWE-bench Verified: **80.9%** (system card via benchlm.ai — corroborated, SOTA at release)
- SWE-bench Pro: **57.1%**; SWE Multilingual: **77.5%**; NL2Repo: **43.2%** (Qwen tables — fill the SWE-Pro gap)
- LiveCodeBench v6: **84.8%** (Qwen table — fills the LiveCodeBench gap)
- Aider Polyglot: +10.6 pp over Sonnet 4.5 (announcement); effort scaling: high effort = +4.3 pp SWE-V with 48% fewer tokens (Anthropic)

Long context:

- AA-LCR 70.7%, LongBench v2 64.4%, AI-Needle 74% — first measured long-context evidence (mid); 200K window confirmed

Multimodal (richly measured via the Qwen comparison tables):

- MMMU: **80.7%**; MMMU-Pro: **70.6%** (Qwen) / **71.2%** (AA); Video-MME: **77.6%** with subs / **81.4%** without; VideoMMMU: **84.4%**; MLVU: **81.7%** — video understanding measured
- OmniDocBench 1.5: **87.7%**; CharXiv: **68.5%**; RealWorldQA: **77.0%**; MathVision: **74.3%**; DynaMath: **79.7%**; AI2D: **87.7%**; CountBench: **90.6%**; ScreenSpot-Pro: **45.7%**; V*: **67.0%**

### Normalized scores (1–100)

- **Tool use: 82/100.** (Was 90 on the prior pass.) The Qwen-table rows document much weaker MCP/tool performance than the launch framing (MCP Atlas 42.3%, Toolathlon 43.5%, VITA 23.3%); τ² 86.3%, τ³ 70.2% and the BrowseComp-Plus 85.3% orchestrated result keep it a strong agent, but the age correction is due.
- **Reasoning: 79/100.** CHANGED from 78 — GPQA 87% corroborated, AIME26 95.1% and the HMMT sweep stay elite — but HLE 30.8–32%, CritPt 0.3%, the re-scored FrontierMath T4 4.9% and AA Index 23.7% place the Nov-2025 generation measurably below its successors.
- **Context window: 70/100.** 200K tokens in the standard tier; AA-LCR 70.7%, LongBench v2 64.4% and AI-Needle 74% provide first measured evidence (mid) — unchanged.
- **Multimodal: 75/100.** (Was 55 on the prior pass.) Video understanding is now measured (Video-MME 77.6–81.4%, VideoMMMU 84.4%, MLVU 81.7%) alongside strong document/vision rows (OmniDocBench 87.7%, MMMU 80.7%) — the +video-in band (75–90); no audio input, text-only output.
- **Coding: 86/100.** (Was 90 on the prior pass.) SWE-bench Verified 80.9% corroborated and LiveCodeBench 84.8%/SWE-ML 77.5% fill gaps, but SWE Pro 57.1% and NL2Repo 43.2% trail the 2026 class — a one-band correction.
- **Cost efficiency: 40/100.** $5/$25 per 1M tokens — premium pricing, though a large drop from prior Opus tiers ($15/$75) and 90% cache discount; expensive vs the ~$1.88/$9.50 medians.
- **Overall Score: 78/100.** (Was 78 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (82 + 79 + 70 + 75 + 86) / 5 = 392/5 = 78.4 — net unchanged on the 2026-10-11 second pass: the multimodal raise (+20, video now measured) offsets the tool-use/reasoning/coding age corrections. Best fit: hard agentic coding and long-horizon computer-use work where quality beats latency — but the 2026 Opus line (4.8/5/5.5) supersedes it at every tier.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-19
- Method: public internet research, enrichment re-check 2026-10-19 (Bing web search for new independent Opus 4.5 evaluations — none surfaced for the three-generations-old model; the 2026-10-16 evidence base stands: the Anthropic system card + Qwen3.5-397B/Qwen3.6-Plus comparison tables via benchlm.ai, Artificial Analysis benchmarks, and Epoch AI's FrontierMath refresh). No evidence supports a score change — all seven scores carried. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
