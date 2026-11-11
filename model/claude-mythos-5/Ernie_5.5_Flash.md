# Claude Mythos 5 — findings by Ernie 5.5 Flash

- Source: Anthropic/Claude Mythos 5 (`claude-mythos-5`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5
- **Short description:** Restricted-access Claude model for advanced cybersecurity and biology research workflows (released 2026-06-09), the predecessor of Mythos 5.1. Distributed through vetted channels rather than the public Claude API.
- **Provider / access:** Restricted release; models.dev lists Azure (`azure/claude-mythos-5`, `azure-cognitive-services/claude-mythos-5`) as the only catalogued routes. No public Anthropic per-token API.
- **Release / knowledge:** 2026-06-09; knowledge cutoff 2026-01-31 (models.dev).
- **IDs:** `claude-mythos-5`, `azure/claude-mythos-5`, `azure-cognitive-services/claude-mythos-5`.
- **Context window:** 1,000,000 tokens total; 128,000 max output (models.dev).
- **Modalities:** text, image and PDF in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $10.00 / $50.00 per 1M input/output with $1.00 cache read as catalogued for the Azure routes — a restricted-access rate, not a public list price.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **85%** — strong computer use
- BrowseComp: **88%**; CyberGym: **83.8%**
- ExploitBench v8-bench: **78%**; Firefox 147 working exploit rate: **88.4%**
- Anthropic OSS-Fuzz any-crash rate: **80.0%**; write-primitive-or-higher rate: **32.4%**
- The Last Ones cyber range completion: **60%**
- Terminal-Bench 2.1: **88.0%**

Reasoning / knowledge:

- GPQA Diamond: **94.1%** (best verified GPQA row in this dataset)
- Humanity's Last Exam: **64.5%** with tools, **59%** without tools
- USAMO 2026: **97.6%**
- CharXiv Reasoning: **93.5%** with tools, **88.9%** without tools
- CritPt / Omniscience: no verified public score found

Coding:

- SWE-bench Verified: **95.5%**
- SWE-bench Pro: **80.3%**; SWE Multilingual: **92.2%**; SWE-bench Multimodal: **54.9%**
- LiveCodeBench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- 1M context documented; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 90/100.** OSWorld-Verified 85%, BrowseComp 88%, CyberGym 83.8% and a full exploit-engineering suite (ExploitBench 78%, Firefox 147 88.4%) are frontier for a restricted model; the 32.4% write-primitive rate is the weak row.
- **Reasoning: 88/100.** GPQA Diamond 94.1% and USAMO 2026 97.6% are the best verified science/math results here; HLE 64.5% with tools is good but behind Opus 5.5.
- **Context window: 100/100.** 1,000,000 tokens with 128,000 max output.
- **Multimodal: 78/100.** Text + image + PDF input; CharXiv Reasoning 93.5% proves real chart/document reasoning, but no audio/video and no LVBench-style row.
- **Coding: 88/100.** SWE-bench Verified 95.5% is the headline (best in dataset so far), SWE Multilingual 92.2% strong; only SWE-bench Pro 80.3% and no DeepSWE row keep it below Opus-class coding agents.
- **Cost efficiency: 25/100.** Catalogued at $10/$50 per 1M with no public self-serve tier — the price of restricted access.
- **Overall Score: 88.8/100.** Best fit for cyber-defence research, exploit analysis and biology-adjacent work under a vetted agreement; not a general-purpose API model.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Anthropic system card coverage, BenchLM model profile, models.dev Azure catalog entries); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Mythos 5 benchmarks & sources — BenchLM](https://benchlm.ai/models/claude-mythos-5)
  - [models.dev provider catalog](https://models.dev)
  - [Claude model overview and safety — Anthropic](https://www.anthropic.com/transparency)
- Future sources: add a new file next to this one, e.g. `Claude_Mythos_5_v2.md`, using the same headings.