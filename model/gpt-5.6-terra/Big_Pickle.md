# GPT-5.6 Terra — findings by Big Pickle

- Source: OpenAI (`gpt-5.6-terra`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** The "balanced" mid tier of OpenAI's July 2026 GPT-5.6 family — everyday coding, reasoning, and agentic tasks at roughly half the price of the Sol flagship. OpenAI positions Terra as GPT-5.5-class quality at lower cost.
- **Provider / access:** OpenAI API, Codex, ChatGPT, and Azure AI (`gpt-5.6-terra`); Responses API preferred, Chat Completions compatible.
- **Release / knowledge:** 2026-07-09 (GA after 06-26 preview); knowledge cutoff 2026-02-16.
- **IDs:** `gpt-5.6-terra` (OpenAI; also `gpt-5.6-terra.pro` variant in API).
- **Context window:** 1,050,000 – 1,100,000 total / 128,000 max output (lmmarketcap, requesty.ai); pricing bands switch at >272K input.
- **Modalities:** text + image input; text output; explicit reasoning mode; tool calling, web search, code execution, JSON schema; Vision+Reasoning+Tool calling (requesty.ai capability set).
- **Pricing (as of 2026-09-20):** $2.00 / $12.00 per 1M standard; $0.20 cached read; long-context band (>272K) $4.00 / $18.00, cache $0.40 (commandcode.ai). OpenRouter/Azure rate cards match.
- **Architecture:** Proprietary, undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (lmmarketcap GPT-5.6 family report; anotherwrapper lists 84.7%; commandcode Terminal-Bench index **88, #4/46**)
- DeepSWE 1.1: **69.6%** (byteiota.com; anotherwrapper)
- FrontierCode 1.1 Main: **41.3%** (byteiota.com)
- AutomationBench: **23.6%** (byteiota.com)
- OSWorld 2.0: **50.2%** (anotherwrapper)
- BrowseComp: **87.5%** (anotherwrapper)
- ToolAthlon: **53.1%**; OpenAI Search function calling: **94.6%** (anotherwrapper)
- Agents' Last Exam: Terra edges Claude Fable 5 at a fraction of cost (lmmarketcap report; exact % not published)
- Tau3 / GDPval-AA / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.5%** (commandcode.ai); anotherwrapper comparison lists 77.3% on a different harness — use commandcode's as primary, treat as ~90+ range
- ARC-AGI-2: **83.9%**; ARC-AGI-1 Verified: **60.2%** (anotherwrapper)
- FrontierMath (provisional): **84.9%** (anotherwrapper)
- SimpleQA: **43.1%**; HLE: **no verified public score found** on the compared sources
- Intelligence Index: **56.6 (#12/52 scored)** (commandcode.ai)

Coding:

- Coding Index: **76.7 (#4 of 46 scored)** (commandcode.ai)
- LiveCodeBench: **85.9%** (anotherwrapper)
- SWE-bench Verified: **~75%** (anotherwrapper comparison row; treat as provisional)
- SWE-bench Pro: **63.4%** (#9 of 55, llm-stats.com SWE-Bench Pro leaderboard)
- SciCode: **53.9%** (commandcode.ai)
- Vibe Code Bench: **67.8%**; Arena Code Elo: **1521.61** (anotherwrapper)

Long context:

- Long-context reasoning: **79.7** (commandcode.ai); MRCR / RULER: **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 84.3% and BrowseComp 87.5% are strong agentic numbers; AutomationBench 23.6% and ToolAthlon 53.1% hold it back from the top tier.
- **Reasoning: 88/100.** GPQA Diamond ~92.5% and ARC-AGI-2 83.9% show deep reasoning; missing published HLE leaves some uncertainty.
- **Context window: 87/100.** 1.05M context with 79.7 long-context-reasoning score; solid but not the 100% MRCR-class retrieval of the top models.
- **Multimodal: 78/100.** Text+image with MMMU-Pro ~80% class results; no audio/video, so mid-pack.
- **Coding: 83/100.** Coding Index 76.7 (#4) and LiveCodeBench 85.9% are strong; SWE-bench Pro 63.4% and SciCode 53.9% cap it below Anthropic lineage.
- **Cost efficiency: 72/100.** $2/$12 with $0.20 cache reads is a fair mid-tier price; long-context band doubles input, and it is still 10× the Luna tier's price.
- **Overall Score: 84/100.** Mean of the five quality dims (82+88+87+78+83)/5 = 83.6 → 84. Best-value balanced agentic coder in the GPT-5.6 family for everyday workloads.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-20
- Method: public web research (commandcode.ai, lmmarketcap, llm-stats.com, anotherwrapper.com, byteiota.com, requesty.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.