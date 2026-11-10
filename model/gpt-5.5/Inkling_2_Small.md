# GPT-5.5 — findings by Fledge Alpha

- Source: OpenAI (`gpt-5.5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's April 23, 2026 flagship, first full base-model retrain since GPT-4.5; dominated Terminal-Bench 2.0 and GDPval at launch. Being retired from ChatGPT/Codex Sept 14, 2026 (not API) in favor of GPT-5.6 Sol.
- **Provider / access:** OpenAI API (`gpt-5.5`), Azure, Bedrock, ChatGPT/Codex (retiring 2026-09-14).
- **Release / knowledge:** 2026-04-23; knowledge cutoff not officially disclosed.
- **IDs:** `openai/gpt-5.5`
- **Context window:** 1,050,000 tokens API; 400K in Codex; 128K max output; >272K surcharge to $8/$36.
- **Modalities:** text + image in (native audio/video claimed by some trackers; OpenAI's own materials list text+image for the API); text out; reasoning effort none→max.
- **Pricing (as of 2026-10-02):** $5/M in, $0.50/M cached, $30/M out; Priority 2.5x; Batch/Flex 50% off.
- **Architecture:** proprietary, first GPT-5-generation full retrain (codename Spud).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **82.7%** (#1 at launch)
- Terminal-Bench 2.1: **78.2%**
- OSWorld-Verified: **78.7%**
- GDPval (wins/ties): **84.9%** (SOTA at launch); GDPval-AA **1769 Elo**
- MCP-Atlas: **75.3%**; Toolathlon: **55.6%**
- Tau2-bench Telecom: **98.0%** (Awesome Agents)

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (OpenAI); ~94.0% AA harness
- HLE (no tools): **41.4%**; with tools: **52.2%**
- ARC-AGI-2: **84.6%** (release SOTA)
- FrontierMath Tier 1–3: **51.7%**; Tier 4: **35.4%**
- AA Intelligence Index: **60** at launch (topped index), rebased ~60.2

Coding:

- SWE-bench Verified: **88.7%** (OpenAI); SWE-Bench Pro (Public): **58.6%**
- SWE-bench Multilingual: **77.8%**; DeepSWE 1.0: **64.3%**; Expert-SWE (internal): **73.1%**

Long context:

- MRCR v2 (8-needle): **94.8%** @128K average; third-party cites 74% at 512K–1M.

### Normalized scores (1–100)

- **Tool use: 84/100.** GDPval 84.9% and Tau2 Telecom 98% were launch SOTA; OSWorld 78.7% strong.
- **Reasoning: 82/100.** GPQA 93.6% and ARC-AGI-2 84.6% strong; HLE 41.4% no-tools trails leaders.
- **Context window: 93/100.** 1.05M window with strong MRCR v2; Codex caps at 400K; surcharge past 272K.
- **Multimodal: 72/100.** Text + image input with MMMU-Pro 81.2%; some third-party flags list audio/video, but OpenAI's own API docs list text+image only — scored conservatively.
- **Coding: 82/100.** SWE-bench Verified 88.7% and Terminal-Bench 2.0 82.7%; SWE-Bench Pro 58.6% mid-pack.
- **Cost efficiency: 72/100.** $5/$30 is premium; ~40% fewer output tokens than GPT-5.4 partly offsets.
- **Overall Score: 83/100.** Mean of the five quality dims; the model to beat on Terminal-Bench at its launch — now largely superseded by GPT-5.6 Sol/Astra.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (OpenAI launch post, system card, AA, FlowHunt/o-mega trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
