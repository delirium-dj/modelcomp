# Kimi K2.7 Code — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/kimi-k2-7-code (MoonshotAI Kimi K2.7 Code model card), Artificial Analysis (`artificialanalysis.ai/models/kimi-k2-7-code`), Vals AI, Epoch AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's open-weights code-focused reasoning model; 256K context / text+in → text out; related earlier model: Kimi K2.6; sibling models: Kimi K3, Kimi K2.6, Kimi K2.5.
- **Provider / access:** Moonshot API (`kimi-k2-7-code`), open weights on Hugging Face (`moonshotai/Kimi-K2.7-Code`); Qwen Community License-style open weights.
- **Release / knowledge:** Released 2026 per MoonshotAI; knowledge cutoff not stated.
- **IDs:** `kimi-k2-7-code` (Moonshot API), `moonshotai/Kimi-K2.7-Code` (HF weights). No Free ID confirmed.
- **Context window:** 256K tokens (benchlm.ai). Verified.
- **Modalities:** Text in → text out per MoonshotAI docs; reasoning yes (chain-of-thought); tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Not found on benchlm.ai or AA.
- **Architecture:** Open-weights model; parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- Kimi Claw 24/7: **46.9%** (MoonshotAI Kimi K2.7 Code model card)
- MCP Atlas: **76%** (MoonshotAI Kimi K2.7 Code model card)
- MCP Mark Verified: **81.1%** (MoonshotAI Kimi K2.7 Code model card)
- τ²-bench results: **90.1%** (Artificial Analysis)
- GDPval-AA: **1114 Elo** (Artificial Analysis); normalized **26.9%**
- AA Agentic Index: **22.5%** (Artificial Analysis)
- Terminal-Bench 2.1 (Vals): **67.0%** (Vals AI)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **25.8%** (Artificial Analysis)
- AA-GPQA Diamond: **89.6%** (Artificial Analysis)
- AA-HLE: **35.0%** (Artificial Analysis)
- AA-LCR (long-context reasoning): **79.3%** (Artificial Analysis)
- CritPt: **10.0%** (Artificial Analysis)
- AA-Omniscience Index **-10.2%**; Accuracy **39.6%**; Hallucination rate **82.4%** (AA)
- AA-IFBench: **63.1%** (Artificial Analysis)
- FrontierMath v2 Tiers 1-3: **54.035%** (Epoch AI)
- FrontierMath v2 Tier 4: **12.195%** (Epoch AI)

Coding:

- Kimi Code Bench v2: **62.0%** (MoonshotAI Kimi K2.7 Code model card)
- ProgramBench: **53.6%** (MoonshotAI Kimi K2.7 Code model card)
- MLS-Bench Lite: **35.1%** (MoonshotAI Kimi K2.7 Code model card)
- CursorBench 3.2: **49.7%** (Cursor evals)
- AA-SciCode: **47.8%** (Artificial Analysis)
- OpenHarmony Bench: **52.1%** (OpenHarmony Bench leaderboard)
- LiveCodeBench v6: **82.1%** (Vals AI)
- SWE-bench (Vals): **78.2%** (Vals AI)
- AA Coding Index: **60.8%** (Artificial Analysis)

Multimodal & grounded:

- Design Arena Website: **1266** (OpenRouter)

Long context:

- AA-LCR: **79.3%** (Artificial Analysis); declared 256K context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 65/100.** MCP Mark Verified (81.1%), MCP Atlas (76%), τ²-bench (90.1%), Terminal-Bench 2.1 Vals (67.0%); capped by weak AA Agentic Index (22.5%), GDPval-AA normalized (26.9%), Kimi Claw 24/7 (46.9%). Strong agentic tool-use profile.
- **Reasoning: 66/100.** AA-GPQA Diamond 89.6%, AA-LCR (79.3%), FrontierMath T1-3 (54.035%); capped by CritPt (10.0%), AA-HLE (35.0%), AA-Omniscience accuracy (39.6%), Intelligence Index (25.8%). Moderate reasoning.
- **Context window: 70/100.** Verified 256K tokens (benchlm.ai); AA-LCR 79.3%; capped because context below 1M frontier and no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 45/100.** No confirmed multimodal benchmarks found beyond Design Arena Website (1266); capped by text-only output assumption and thin multimodal coverage.
- **Coding: 64/100.** Kimi Code Bench v2 (62.0%), LiveCodeBench v6 (82.1%), SWE-bench Vals (78.2%), AA-SciCode (47.8%); capped by ProgramBench (53.6%), MLS-Bench Lite (35.1%), CursorBench 3.2 (49.7%), AA Coding Index (60.8%). Moderate coding.
- **Cost efficiency: 50/100.** No pricing data found; scored conservatively.
- **Overall Score: 62/100.** Half-up mean of (65 + 66 + 70 + 45 + 64) / 5 = 62.0 → 62. Best-fit recommendation: code-focused reasoning model with solid verified coding at 256K context; verify on HLE-class and multimodal tasks given weak results there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai Kimi K2.7 Code model card + Artificial Analysis + Vals AI + Epoch AI independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
