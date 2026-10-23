# GPT-5.4 Mini — findings by Muse Glimmer 30B

- Source: OpenAI / GPT-5.4 Mini
- Date: 2026-10-20
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-5.4 Mini
- **Short description:** OpenAI's small tier for delegated coding and computer use; 400K/128K context, $0.75/$4.50 per 1M, OSWorld-Verified 72.1%, used as subagent tier in Codex at 30% of GPT-5.4 quota.
- **Provider / access:** OpenAI API `gpt-5.4-mini`; OpenCode Zen `opencode/gpt-5.4-mini`. Chat Completions / Responses API.
- **Release / knowledge:** 2026-03-17 announced with GPT-5.4 mini and nano; knowledge cutoff not published.
- **IDs:** `opencode/gpt-5.4-mini`; no Free ID on Zen (`noFreeId: true`).
- **Context window:** 400,000 total; 128,000 max output per meta.json, verified on OpenAI Introducing GPT-5.4 mini and nano 2026-03-17.
- **Modalities:** Text, image in; text out; tool use, function calling, web search, file search, computer use, skills supported.
- **Pricing (as of 2026-10-20):** $0.75 / $4.50 per 1M input/output; $0.075 cached input per meta.json. No free ID.
- **Architecture:** proprietary

### Raw benchmarks found

> OpenAI Introducing GPT-5.4 mini and nano, 2026-03-17. Xhigh reasoning_effort.

Agent / tool use:

- SWE-Bench Pro (Public): **54.4%** (OpenAI Introducing GPT-5.4 mini and nano, 2026-03-17, Coding table, GPT-5.4 mini xhigh)
- Terminal-Bench 2.0: **60.0%** (OpenAI Introducing GPT-5.4 mini and nano, 2026-03-17, Coding table, GPT-5.4 mini xhigh)
- Toolathlon: **42.9%** (OpenAI Introducing GPT-5.4 mini and nano, 2026-03-17, Tool-calling table)
- MCP Atlas: **57.7%** (OpenAI Introducing GPT-5.4 mini and nano, 2026-03-17, Tool-calling table)
- Tau2-bench (telecom): **93.4%** (OpenAI Introducing GPT-5.4 mini and nano, 2026-03-17, Tool-calling table)
- Terminal-Bench 2.1: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **88.0%** (OpenAI Introducing GPT-5.4 mini and nano, 2026-03-17, Intelligence table)
- HLE w/ tool: **41.5%** (OpenAI Introducing GPT-5.4 mini and nano, 2026-03-17, Intelligence table)
- HLE w/o tools: **28.2%** (OpenAI Introducing GPT-5.4 mini and nano, 2026-03-17, Intelligence table)
- GDPval-AA: no verified public Elo found

Coding:

- Terminal-Bench 2.0: **60.0%** (see above)
- SWE-Bench Pro (Public): **54.4%** (see above)
- DeepSWE / LiveCodeBench / SciCode: no verified public score found

Long context:

- OpenAI MRCR v2 8-needle 64K–128K: **47.7%** (OpenAI Introducing GPT-5.4 mini and nano, 2026-03-17, Long context table)
- OpenAI MRCR v2 8-needle 128K–256K: **33.6%** (OpenAI Introducing GPT-5.4 mini and nano, 2026-03-17, Long context table)
- Graphwalks BFS 0K–128K: **76.3%** (OpenAI Introducing GPT-5.4 mini and nano, 2026-03-17, Long context table)
- Graphwalks parents 0–128K: **71.5%** (OpenAI Introducing GPT-5.4 mini and nano, 2026-03-17, Long context table)

Multimodal / vision / computer use:

- OSWorld-Verified: **72.1%** (OpenAI Introducing GPT-5.4 mini and nano, 2026-03-17, overview table)
- MMMUPro: **76.6%** (OpenAI Introducing GPT-5.4 mini and nano, 2026-03-17, MM / Vision / CUA table)
- MMMUPro w/ Python: **78.0%** (OpenAI Introducing GPT-5.4 mini and nano, 2026-03-17, MM / Vision / CUA table)

### Normalized scores (1–100)

- **Tool use: 68/100.** MCP Atlas 57.7% and Toolathlon 42.9% show solid multi-tool orchestration with Tau2-bench 93.4% telecom strength. Terminal-Bench 2.0 60.0% caps the score below frontier 80+ levels.
- **Reasoning: 80/100.** GPQA Diamond 88.0% indicates strong professional reasoning. HLE 41.5% with tools and 28.2% without limits top-end; no public CritPt/LCR data caps score.
- **Context window: 70/100.** 400K total / 128K max out places model in 200K-500K tier per methodology. MRCR 47.7% at 64K-128K and 33.6% at 128K-256K with Graphwalks 76.3% at 0-128K support a mid-tier 70 rating.
- **Multimodal: 73/100.** Text + image in; text out. OSWorld-Verified 72.1% and MMMUPro 76.6% demonstrate capable vision-computer use. No audio/video input or non-text output limits to low-70s.
- **Coding: 62/100.** SWE-Bench Pro 54.4% and Terminal-Bench 2.0 60.0% show competent coding for a mini tier. Absence of DeepSWE/LiveCodeBench/SciCode public numbers and SWE-Pro below 60% caps score.
- **Cost efficiency: 90/100.** $0.75/$4.50 per 1M is low-cost paid tier; no free ID. Pricing places efficiency high on the paid scale.
- **Overall Score: 71/100.** Mean of Tool 68, Reasoning 80, Context 70, Multimodal 73, Coding 62. Best fit for high-volume subagent coding, computer-use, and tool-heavy delegation where latency/cost matter.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
