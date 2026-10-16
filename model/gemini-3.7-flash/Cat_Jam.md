# Gemini 3.7 Flash — findings by Cat Jam

- Source: Google / Gemini 3.7 Flash (`opencode/gemini-3.7-flash`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Previous-generation intelligent Flash workhorse for coding and agents (released 2026-08-13, deprecated 2026-10; routed to Gemini 3.8 Flash). 1M context, tunable thinking.
- **Provider / access:** Gemini API / Google AI Studio (`gemini-3.7-flash`) and Vertex AI; requests routed to Gemini 3.8 Flash after deprecation. Free tier available.
- **Release / knowledge:** Released 2026-08-13; retirement 2027-01-28; knowledge cutoff Mar 2026 (domains limited to Jan 2025).
- **IDs:** `gemini-3.7-flash` (Google), `gemini/gemini-3.7-flash` (LiteLLM)
- **Context window:** 1,048,576 tokens; max output 65,536. Verified via Google AI docs/model card.
- **Modalities:** Text, image, video, audio, PDF in; text out. Thinking (low/medium/high; minimal returns error). Code execution, function calling, search grounding, structured output, URL context, computer use (preview).
- **Pricing (as of 2026-10-16):** Intro through 2026-12-31: $0.75/$3.75 per 1M input/output; free tier ($0, data consent). Standard from 2027-01-01: $1.50/$7.50. Batch/flex discounts.
- **Architecture:** Proprietary; based on 3.6 Flash. No open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.8%** (vendor)
- Terminal-Bench 3.0: **14.9%**
- AutomationBench: **30.4%** (private set)
- GDPval-AA v2: **1525** Elo (vendor)
- OSWorld 2.0: **47.9%**
- Agent's Last Exam: **26.3%** pass rate
- OSWorld-Validated? no verified separate number found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **56** (vendor table)
- HLE-Verified: **53.6%** (vendor)
- GDP.pdf: **34.0%**
- GDM-MRCR v2 (8-needle, 128k avg): **97.0%**
- GPQA Diamond: not listed in model card; no official number found (AA likely ~93; not stated)
- AA-Omniscience: not separately located
- CharXiv reasoning: 84.5% (no tools) / 88.7% (tools)
- LVBench: **85.4%**
- BioMysteryBench (human solvable/difficult): 87.1% / 43.5%

Coding:

- FrontierCode 1.1 Main: **43.6%** (vs 3.6 Flash 34.4%)
- DeepSWE v1.1: **65.3%** (vs 3.6 48.6%)
- Terminal-Bench 2.1: **85.8%**
- Code Arena (web dev): **1588** Elo
- LiveCodeBench: not separately listed

Long context:

- GDM-MRCR v2 8-needle 128k avg: **97.0%** (near-frontier retrieval)

### Normalized scores (1–100)

- **Tool use: 82/100.** TB 2.1 85.8, AutomationBench 30.4, OSWorld 47.9, GDPval 1525. Good agent capability; higher-tier models ahead.
- **Reasoning: 82/100.** AA Index 56, HLE-Verified 53.6, GDP.pdf 34.0, BioMystery 43.5; GPQA not officially published caps.
- **Context window: 95/100.** Verified 1M with GDM-MRCR 97.0% retrieval at 128k — near top.
- **Multimodal: 88/100.** Text/image/video/audio/PDF in; text out. CharXiv 88.7 (tools), LVBench 85.4; OSWorld 47.9 caps agent-CU but perception strong.
- **Coding: 84/100.** DeepSWE 65.3, Code Arena 1588, FrontierCode 43.6, TB 2.1 85.8; Terminal-Bench 3.0 14.9 caps.
- **Cost efficiency: 96/100.** $0.75/$3.75 intro + genuinely free tier — excellent Flash value (data consent). Standard pricing from Jan 2027 lowers to ~88.
- **Overall Score: 86/100.** Mean of (82 + 82 + 95 + 88 + 84) / 5 = 86.2. Strong Flash default for long-context + coding at intro price; superseded by 3.8 Flash for new work.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Google DeepMind model card/table, Google AI docs, DataCamp, developer guides, pricing pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
