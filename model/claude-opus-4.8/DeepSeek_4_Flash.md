# Claude Opus 4.8 — findings by DeepSeek 4 Flash

- Source: Anthropic/Claude Opus 4.8
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's flagship 4.8 reasoning model with advanced multi-step execution, deep code architecture comprehension and long-horizon thinking.
- **Provider / access:** Anthropic API / OpenRouter (`anthropic/claude-opus-4.8`); no Free Zen ID.
- **Release / knowledge:** Opus 4.8 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `anthropic/claude-opus-4.8`
- **Context window:** 1,000,000 tokens via OpenRouter/BenchLM (curated listing shows 200K) — treat 1M as the verified API window.
- **Modalities:** text/image/file in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $5.00 in / $25.00 out per 1M (OpenRouter first-party).
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.6%** (Anthropic); Vals **71.9%**; Terminal-Bench 3.0 **21.1%**
- BrowseComp **84.3%**; DeepSearchQA **93.1%**; OSWorld-Verified **83.4%**; OSWorld 2.0 **20.6%**
- MCP Atlas **82.2%**; GDPval-AA **1593 Elo** (AA normalized 46.9%); Toolathlon **59.9%**
- AA Agentic Index **42.6%**; Finance Agent v2 **53.9%**; ResearchClawBench **21.1%**; Gert Labs **72.97%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (Anthropic); AA 92.0%; Vals 92.4%
- HLE: **57.9%** (reported) / **49.8%** w/o tools; AA-HLE **48.7%**
- AA-LCR **77.7%**; CritPt **20.9%**; AA Index **41.8%**
- AA-Omniscience Accuracy / Hallucination Rate: **48.8% / 39.3%**
- ARC-AGI-2 **72.1%**, ARC-AGI-3 **1.5%**; USAMO 2026 **96.7%**; FrontierMath v2 Tier 4 **31.25%**
- MMLU-Pro (Vals) **89.6%**; INCLUDE **87.6%**; AA-IFBench **62.2%**

Coding:

- SWE-bench Verified: **88.6%** (Anthropic) / **88.6%** (Vals); SWE-bench Pro **69.2%**
- SWE Multilingual **84.4%**; SWE Multimodal **38.4%**
- LiveCodeBench (Vals) **87.8%**; AA-SciCode **54.4%**; AA Coding Index **74.3%**
- CursorBench 3.2 **62.3%**; FrontierCode 1.1 Main **46.5%**; PostTrainBench v1.1 **32.9%**

Long context:

- AA-LCR 77.7%; no public MRCR full-window number found

Multimodal:

- CharXiv **89.9%** (no tools 80.5%); ScreenSpot Pro **87.9%**; OfficeQA Pro **66.2%**; Design Arena **1264 Elo**

### Normalized scores (1–100)

- **Tool use: 90/100.** TB 2.1 74.6%, OSWorld-Verified 83.4%, MCP Atlas 82.2% and GDPval 1593 are strong; AA Agentic Index 42.6% caps it.
- **Reasoning: 86/100.** GPQA 93.6%, HLE 57.9% and USAMO 96.7% are excellent; AA Index 41.8% and ARC-AGI-2 72.1% trail the top tier.
- **Context window: 95/100.** 1M API window with AA-LCR 77.7%.
- **Multimodal: 82/100.** text/image/file in with CharXiv 89.9% and ScreenSpot 87.9%; text-only output.
- **Coding: 89/100.** SWE Verified 88.6%, LiveCode 87.8% and Coding Index 74.3% are strong; SWE Multimodal 38.4% and SciCode 54.4% trail.
- **Cost efficiency: 48/100.** $5/$25 per 1M is premium.
- **Overall Score: 88/100.** Mean of (90 + 86 + 95 + 82 + 89) / 5 = 88.4 → 88. Best-fit: deep code-architecture and multi-step agent work.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Anthropic, Artificial Analysis, OpenRouter, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
