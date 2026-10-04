# GPT-5.5 — findings by Laguna XS 2.1

- Source: OpenAI (`gpt-5.5`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's spring 2026 flagship (ChatGPT 2026-04-23, API 2026-04-24) — a "fully retrained agentic model," SOTA at launch on Terminal-Bench 2.0 (82.7%), GDPval (84.9%) and OSWorld-Verified (78.7%); succeeded by the GPT-5.6 family in July.
- **Provider / access:** OpenAI API (`gpt-5.5`, Responses + Chat Completions + Batch + Flex), ChatGPT, Codex, Azure, AWS Bedrock. Snapshot `gpt-5.5-2026-04-23`.
- **Release / knowledge:** 2026-04-23; knowledge cutoff December 2025.
- **IDs:** `gpt-5.5` (OpenAI API); `openai/gpt-5.5` (OpenRouter). No Zen Free ID found.
- **Context window:** 1,050,000 tokens; 128K max output. Prompts >272K input bill at 2x input / 1.5x output.
- **Modalities:** text + image in (`image_detail` defaults to detail-preserving `original`); text out; reasoning yes (efforts none/low/medium default/high/xhigh); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-04):** $5 / $30 per 1M in/out; cached input $0.50; Batch/Flex 50%; Priority 2.5x; Fast mode (Codex) 1.5x speed for 2.5x cost; regional data-residency +10%.
- **Architecture:** proprietary; no parameter count published.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **82.7%** (OpenAI, Codex CLI scaffold — SOTA at launch); Terminal-Bench 2.1: **78.2%**
- OSWorld-Verified: **78.7%** (OpenAI)
- Tau2-bench Telecom: **98.0%** (OpenAI, no prompt tuning)
- MCP Atlas: **75.3%**; Toolathlon: **55.6%** (AI Release Tracker)
- GDPval (win/tie): **84.9%** (OpenAI — SOTA at launch); GDPval-AA **1769 Elo** / v2 **1494**
- BrowseComp: **84.4%**
- AutomationBench: **12.9%**; Finance Agent v2: **51.8–60.0%**; OfficeQA Pro: **54.1%**; Harvey Legal: **3.75%**
- CyberGym: **81.8%**
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (OpenAI)
- HLE: **41.4% no tools / 52.2% with tools** (OpenAI)
- ARC-AGI-2: **84.6–85.0%** (AI Release Tracker / llmreference)
- FrontierMath: Tier 1–3 **51.7%** / Tier 4 **35.4%** (OpenAI)
- AIME 2025: **81.2%**; MMLU **92.4%**; MMLU-Pro **88.1%**; IFEval **92.1%**
- Chatbot Arena: **1488 Elo** (high)
- CritPt / LCR: no verified public score found

Coding:

- SWE-bench Verified: **82.6%** (Vals.ai independent harness)
- SWE-bench Pro: **58.6%** (pass@1, OpenAI); SWE-bench Multilingual: **77.8%**
- DeepSWE 1.0: **64.3%**; Expert-SWE (OpenAI internal, 20h-median tasks): **73.1%**
- CursorBench 3.1: **64.3% xhigh**; 3.2: **58.4% high/xhigh** (Cursor vendor)
- HumanEval: **94.2%**; Aider Polyglot: **88.0%**
- LiveCodeBench / SciCode: no verified public score found in sources checked

Long context:

- MRCR v2 (8-needle), 128K average: **94.8%** (OpenAI — strongest in its class at launch per AI Release Tracker)

Multimodal (supporting): MMMU-Pro **81.2%** (OpenAI) / **88.3%** (Vals.ai CoT harness); CharXiv **84.1%**; GDP.pdf 24.9%

### Normalized scores (1–100)

- **Tool use: 90/100.** TB 2.0 82.7% (launch SOTA), OSWorld-Verified 78.7%, Tau2 98.0% and GDPval 84.9% (launch SOTA) are frontier-grade; capped by AutomationBench 12.9% and MCP Atlas 75.3% behind the newest models.
- **Reasoning: 88/100.** GPQA 93.6%, ARC-AGI-2 ~85% and HLE 52.2% (with tools) led or near-led at launch; capped by FrontierMath T4 35.4% and no CritPt row.
- **Context window: 95/100.** 1.05M window with MRCR v2 94.8% at 128K — best-in-class at launch but measured at 128K, not the ≥98%-at-512K+ bar for 100.
- **Multimodal: 65/100.** Text + image in (detail-preserving defaults, MMMU-Pro up to 88.3% on Vals' harness), text out only — image-in band.
- **Coding: 89/100.** SWE-bench Verified 82.6% (independent), TB 2.0 82.7%, DeepSWE 64.3% and SWE-bench Pro 58.6% were launch-leading; capped below the newest generation (Opus 5.5 / Astra / Argon).
- **Cost efficiency: 50/100.** $5/$30 maps to the methodology's ~50 band (between $3/$15 ≈ 60 and $10/$50 ≈ 30); $0.50 cache reads and 50% Batch/Flex help, but GPT-5.6 Terra delivers comparable everyday quality at $2/$12.
- **Overall Score: 85.4/100.** Mean of (90, 88, 95, 65, 89) = 85.4 — a proven spring-2026 flagship; new projects should default to GPT-5.6 Sol/Terra unless pinned to this snapshot.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-04
- Method: public internet research (OpenAI launch post + developer docs, AI Release Tracker, llmreference, ModelCap, Vector Wire, Vals.ai via llmreference); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
