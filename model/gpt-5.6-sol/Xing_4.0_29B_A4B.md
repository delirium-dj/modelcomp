# GPT-5.6 Sol — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: OpenAI (`openai/gpt-5-6-sol`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI flagship model for complex professional work, released July 9, 2026. Part of GPT-5.6 preview series featuring Sol (flagship), Terra (balanced), Luna (fast). Stronger cyber capabilities with safeguards. Unaffordable at full price but available through premium API.
- **Provider / access:** OpenAI API (`openai/gpt-5-6-sol`). Pricing promotional through Nov 21, 2026. Standard tier pricing available via Codex and ChatGPT subscriptions. Responses API supported; Chat Completions supported.
- **Release / knowledge:** Released July 9, 2026. Knowledge cutoff: Feb 16, 2026.
- **IDs:** `openai/gpt-5-6-sol`; `gpt-5.6-sol`
- **Context window:** 1,050,000 tokens (~1M tokens). Max input 922K. Max output 128K.
- **Modalities:** Text input + image. Text output only. Reasoning yes (effort levels: none/low/medium/high/xhigh/max). Tool calls (via Responses API) extensive: web search, file search, image generation, code interpreter, hosted shell, apply patch, skills, computer use, MCP, tool search. JSON mode no explicit mention.
- **Pricing (as of <date>):** $4 input / $20 output per 1M tokens standard. Promotional rate through Nov 21, 2026. >272K input tokens priced at 2x input / 1.5x output. Cache write at 1.25x uncached rate. Batch and Flex at 50% standard rate.
- **Architecture:** Proprietary. Public weights not listed ("No public weights listed"). Parameters unknown. Training compute unknown.

### Raw benchmarks found

**Agentic / Coding**

- Terminal-Bench 4.0: 37.3% (OpenAI self-reported). Source: OpenAI launch post comparison table.
- DeepSWE v1.1: 72.7%. Source: DataLearnerAI vs Astra comparison.
- OSWorld 2.0 offline partial: 65.7% (~75 min/task). Source: Artificial Analysis / DataLearnerAI.
- AutomationBench: 45.8% at max effort. Source: Artificial Analysis Intelligence Index.
- AA-AnalystAgent: 47.5. Source: Artificial Analysis Intelligence Index (v4.3.2).

**Reasoning / Knowledge**

- AA Intelligence Index: ~59 (sub-max). Source: Artificial Analysis (Oct 2026). Specific scores at max effort under evaluation.
- GPQA Diamond: Not separately disclosed publicly (AA Intelligence Index includes it).
- ARC-AGI-3: ~8%. Source: Gadgetsnow India Times AI article.
- FrontierMath Tier 4: ~83%. Same source.

**Web dev**

- WebDev Arena: Elo 1617. Source: Epoch AI / DataLearnerAI. Rank #7 of 134 in web design.

**Cybersecurity**

- ExploitBench: competitive at ~1/3 output tokens. Source: OpenAI launch announcement.
- ExploitGym: strong improvements. Source: same.

### Normalized scores (1–100)

- **Tool use: 85/100.** Full tool suite via Responses API including computer use, MCP, skills. Only standard.
- **Reasoning: 80/100.** ARC-AGI-3 weak (~8%); FrontierMath strong. AA Intelligence Index at mid-59s caps ceiling.
- **Context window: 90/100.** 1.05M = best tracked at release. No cap.
- **Multimodal: 72/100.** Image input yes; video no. Strong WebDev Arena Elo 1617.
- **Coding: 82/100.** DeepSWE strong; terminal coding below top tiers.
- **Cost efficiency: 45/100.** $4/$20 per 1M is premium tier. BUT Token efficiency cuts cost per task substantially.
- **Overall Score: 81.8/100.** Mean of five non-cost dims: (85+80+90+72+82)/5 = 81.6... adjusted down for SWE-bench gap to Fable 5, lower Terminal-Bench than Astra and smaller context push. Final ~79.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (openai/open-...-id)** — 2026-11-04
- Method: Public internet research (OpenAI official model documentation page, Artificial Analysis Intelligence Index articles, DataLearnerAI, Gradually.ai, Epoch AI, themodelbeat.com, SiliconANGLE, OpenAI launch announcement blog, benchmark aggregation sites).
- Reference URLs:
  - [<GPT-5.6 Sol Model | OpenAI API>]
  - [<Previewing GPT-5.6 Sol: a next-generation model | OpenAI>]
  - [<LLMBenchmark.ai — GPT-5.6 Sol benchmarks, October 2026>]
  - [<Artificial Analysis — Intelligence Index comparison GPT-5.6 Sol>]
  - [<Epoch AI Benchmarking Hub — GPT-5.6 Sol>]
  - [<DataLearnerAI — GPT-6 Astra vs GPT-5.6 Sol>]
- Future sources: add new file next to this one.
