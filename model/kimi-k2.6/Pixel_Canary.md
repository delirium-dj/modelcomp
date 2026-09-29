# Kimi K2.6 — findings by Pixel Canary

- Source: Moonshot AI (`opencode/kimi-k2.6`, vendor `kimi-k2.6`), BenchLM profile `kimi-2-6`
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6 (Moonshot AI's April 2026 open-weight iteration of the K2 line; **no OpenCode Zen Free ID** — paid through OpenCode, free only by self-hosting the weights)
- **Short description:** An open-weight reasoning MoE tuned for tool use and search-heavy work: τ²-bench 95.9%, DeepSearchQA 92.5%, BrowseComp 83.2% and SWE-bench Verified 80.2% at a 262K window. It is an excellent instruction-and-retrieval model but a weak autonomous worker — AA Agentic Index 22.1, GDPval-AA Elo 1115 and OSWorld 2.0 4.6% show long-horizon tasks fall apart.
- **Provider / access:** Moonshot AI first-party API (`kimi-k2.6`), OpenRouter `moonshotai/kimi-k2.6`, plus DeepInfra, Baseten, SiliconFlow, Novita, Tencent/Baidu/Runware resellers and Cloudflare Workers AI (`@cf/moonshotai/kimi-k2.6`); OpenAI-compatible API with tool calling and structured output; weights downloadable for self-hosting.
- **Release / knowledge:** **2026-04-21** across provider indexes (Novita lists 2026-04-20); knowledge cutoff not published by Moonshot.
- **IDs:** `opencode/kimi-k2.6` (repo ID), `kimi-k2.6` (vendor), `moonshotai/Kimi-K2.6` (HF/OpenRouter form).
- **Context window:** **262,144 tokens** input (BenchLM "256K"; models.dev lists 262,144 with output ceilings from 16,384 on DeepInfra up to 262,144 on Baseten/Cloudflare). This folder's `meta.json` says "128K total / Text in/out", which is stale placeholder metadata — the model takes image input too.
- **Modalities:** Text + image in (OpenRouter: `text+image`); text out. Reasoning: yes (BenchLM "Reasoning", and providers expose a `:thinking` variant). Tool calling, function calling, structured output, web search: supported.
- **Pricing (as of 2026-09-29):** Moonshot first-party **$0.95 / 1M input, $4.00 / 1M output, $0.16 cache reads**; OpenRouter **$0.65 / $3.41**; DeepInfra $0.75 / $3.50; Nano-GPT $0.50 / $2.60. Blended 4:1 on first-party rates ≈ $1.56 / 1M, and $0 if self-hosted.
- **Architecture:** open-weight sparse MoE in the Kimi K2 lineage (K2.5 → K2.6 → K2.7 Code → K3); Moonshot does not publish a parameter count for K2.6.

### Raw benchmarks found

BenchLM profile `kimi-2-6` (updated 2026-09-28): **59.22 / 100, rank #50 of 512**, coverage **55 of 486** benchmarks. Family standings BenchLM publishes: Kimi K3 is the current flagship, then Kimi K2.7 Code, Kimi K2.6 **59.22**, Kimi K2.5, Kimi K2.

Agentic / tool use (the strongest area):

- τ²-bench: **95.9%**; DeepSearchQA: **92.5%**; BrowseComp: **83.2%**; WideResearch: **80.8%**
- OSWorld-Verified: **73.1%**; Claw-Eval: **62.3%**; MCP Atlas: **55.9%**; Toolathlon: **50.0%**; Terminal-Bench 2.0: **66.7%**; Gert Labs: **56.82%**
- Long-horizon collapse: AA Agentic Index **22.1**, GDPval-AA **Elo 1115** (26.3% normalized), APEX-Agents-AA **28.5%**, OSWorld 2.0 **4.6%**, ResearchClawBench **18.0%**, Terminal-Bench 2.1 (Vals) **53.6%**

Coding:

- SWE-bench Verified: **80.2%**; SWE-bench (Vals, independent): **76.2%**; SWE-bench Pro: **58.6%**; SWE Multilingual: **76.7%**
- LiveCodeBench v6: **89.6%** (Vals 86.8%); AA Coding Index: **61.8**
- Weak agentic-coding signal: Vibe Code Bench **37.89%**, CursorBench 3.1 **47.6%**, SciCode **52.2%** (AA-SciCode 51.5%)

Reasoning / knowledge:

- GPQA Diamond **90.5%** (AA-GPQA Diamond 91.1%, Vals 89.1%); MMLU-Pro (Vals) **87.6%**
- HLE **34.7%** (AA-HLE 37.5%); CritPt **8.0%**; Artificial Analysis Intelligence Index **27.0**
- AA-Omniscience: Accuracy **32.6%**, Hallucination Rate **40.5%**, Omniscience Index **5.3**
- AA-IFBench: **76.0%**

Multimodal / long context / math:

- V\* **96.9%**, MathVision **87.4%**, CharXiv **80.4%**, MMMU-Pro **79.4%** (AA-MMMU-Pro 79.4%, w/ Python 80.1%), Design Arena Website **1277**
- AA-LCR (long-context reasoning): **81.0%**
- AIME26 **96.4%**, HMMT Feb 2026 **92.7%**, MMAnswerBench **86.0%**, FrontierMath v2 Tiers 1–3 **39.0%**, Tier 4 **14.6%**

<!--MORE-->
