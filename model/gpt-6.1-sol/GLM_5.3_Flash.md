# GPT-6.1 Sol — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-6.1-sol`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's mid-tier GPT-6.1 reasoning model — an upgrade to GPT-6 Sol positioned between flagship GPT-6 Astra and the low-cost GPT-6 Luna/Terra — built for agentic coding, computer use, and document-heavy professional work, marketed as "near-Astra intelligence for a fifth of the price". It is a distinct GPT-6.1 checkpoint, not a rename of GPT-6 Sol.
- **Provider / access:** OpenAI API as `gpt-6.1-sol` — tool calling requires the Responses API; Chat Completions is supported only for requests without tool calls. Also served via Azure AI Foundry (Global Standard deployment) and OpenRouter (`openai/gpt-6.1-sol`). In ChatGPT it ships to Work and Codex for Plus/Pro/Business/Enterprise/Edu plans, but not in Chat at launch; an "Ultrafast" serving mode (up to 8× faster token generation) was announced for the days after launch.
- **Release / knowledge:** Released 2026-09-29 (DevDay 2026); knowledge cutoff April 2026 (llm-stats).
- **IDs:** `openai/gpt-6.1-sol` (OpenAI API: `gpt-6.1-sol`; OpenRouter: `openai/gpt-6.1-sol`). No Free ID on OpenCode Zen verified during this pass — paid API access only.
- **Context window:** 1,050,000 tokens total / 128,000 max output (OpenRouter, DataCamp, aiblogly model pages; a long-context pricing tier applies above 272K input tokens per Azure AI Foundry and Command Code — confirming the tiered window).
- **Modalities:** Text + image input; text output. Reasoning: yes, effort levels low → medium → high → xhigh → max (medium default). Tool calls: yes via Responses API (`tools`/`tool_choice`); structured output via `response_format` JSON schema (OpenRouter). No native audio/video input or non-text output reported.
- **Pricing (as of 2026-11-02):** Short-context band (≤272K): $2.00 in / $10.00 out / $0.10 cached-input per 1M tokens, cache write $2.50. Long-context band (>272K input): $4.00 in / $15.00 out / $0.20 cached (Azure AI Foundry, Command Code, OpenRouter). ~50% Batch/Flex discount reported (aiblogly); blended ≈ $4/1M.
- **Architecture:** Proprietary — closed weights, parameter count undisclosed (Artificial Analysis confirms undisclosed size). Reasoning model with configurable effort; served variants include standard and Ultrafast.

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.0 (offline set, v2026.08.08, partial reward): **71.4%** at max effort (OpenAI announcement / Vellum; within 2.1 pts of GPT-6 Astra's 73.5%, vs GPT-6 Sol 64.4%; $1.30/task vs $9.30 for Astra)
- AutomationBench 1.0.6: **35.4%** medium / ~**36.0%** higher settings (OpenAI, Zapier harness; +2.2 pts over Opus 5.5 at medium at ~1/3 cost — $0.30 vs $0.92/task; Sonnet 5.5 hit 44.7% at $1.14/task on Sep 28)
- GDP.pdf: **32.0%** (OpenAI announcement / Surge AI harness via Vellum; Astra SOTA 32.2%, Opus 5.5 with fallbacks 28.8%, GPT-6 Sol 28.0%; ~$0.38/task)
- GDPval-AA: **41.1** (Artificial Analysis via OpenRouter, low effort; no max-effort value found)
- Terminal-Bench 4.0: **56.1%** / $1.82 per task (Artificial Analysis independent run, Oct 26 2026, via MyClaw); **58.6%** max effort / $2.00 per task (AA effort table via r/singularity) — behind Kimi K3.1 Pro 67.2%, Sonnet 5.5 63.6%, Opus 5.5 63.2%, Astra 59.3%
- Terminal-Bench Science 0.1: no absolute Sol score published; OpenAI reports more than 2× GPT-6 Sol's max-effort score at $5.47/task vs $23.21 (Opus 5.5) and $23.80 (Astra); Astra tops the field at 68.1%
- Tau2/Tau3-Bench: no verified public score found
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **95.4%** (Epoch AI harness, max) / **95.1%** (Mercor single-shot, max) — Benchmark Registry
- HLE (AA lane): **52.9%**, #9 on AA-HLE (BenchLM, Oct 2026; Astra 54.7%, Fable 5.1 55.5% on Scale classic lane); **47.4%** at low effort (AA via OpenRouter)
- CritPt: **24.9%** (AA via OpenRouter, low effort; no higher-effort value found)
- Artificial Analysis Intelligence Index v5.0: **55** (max effort, artificialanalysis.ai model page) / **51.8**, #7 of 74 scored (Command Code snapshot) / **48** medium (AA release comparison; Astra 52.7, GPT-6 Sol 47.6)
- AA-LCR (long-context reasoning): **84.0%** at low effort (AA via OpenRouter; Command Code sub-score 83)
- Factuality: **7.7%** error rate at low effort on OpenAI's internal flagged-conversation eval (down from 11.4% for GPT-6 Sol; within 1.9 pts of Astra across settings)
- HealthBench (length-adjusted, OpenAI via DataCamp): Professional **64.2** (Astra 64.7), Hard **36.2** (Astra 36.6)

Coding:

- DeepSWE v1.1: **75.2%** at high effort (OpenAI announcement / Vellum; matches Astra 74.8%, above Sonnet 5.5 71.0%, Fable 5 xhigh 69.9%, GPT-6 Sol max 68.8%)
- SWE-bench Verified: **87.3%** (Mercor mini-swe-agent, 1000 steps, max effort — Benchmark Registry / mercor.com; vals.ai's archived SWE-bench Verified lane does not include this model and OpenAI no longer reports the benchmark)
- SWE-bench Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **54.2%** (AA run via MyClaw/Command Code; 53.2% at low effort via OpenRouter; Opus 5.5 66.9%, Astra 56.5%)
- FrontierCode (AA run): **49.1%** (MyClaw; Opus 5.5 52.2%, Sonnet 5.5 45.8%)
- AA Coding Agent Index: **54** (Lindy, vs GPT-6.1 Terra 48)

Long context:

- No MRCR / RULER / GraphWalks scores at window length published — no verified public score found; closest proxy is AA-LCR long-context reasoning **84.0%** (low effort), and AA's comparison notes list the window as ~1.0–1.1M tokens.

### Normalized scores (1–100)

- **Tool use: 86/100.** OSWorld 2.0 offline 71.4% (within 2.1 pts of Astra) and AutomationBench 36.0% above Opus 5.5 at a third of the cost show near-flagship agentic/computer-use execution, capped by Terminal-Bench 4.0 (56.1–58.6%) trailing Kimi K3.1 Pro (67.2%), Sonnet 5.5 (63.6%) and Opus 5.5 (63.2%) and no Tau2/Tau3 verification.
- **Reasoning: 90/100.** GPQA Diamond 95.4% (Epoch), HLE 52.9% (#9 AA-HLE) and AA Intelligence Index 51.8–55 (#7 of 74) put it just behind the Astra/Fable-5.1 frontier; capped by HLE trailing those leaders and an unverified-at-effort 24.9% CritPt.
- **Context window: 93/100.** A 1,050,000-token window with 128K max output is current max-tier, backed by AA-LCR 84.0% long-context reasoning; capped by zero MRCR/RULER/GraphWalks verification at window length and 2× long-context pricing above 272K input.
- **Multimodal: 65/100.** Native text+image input with near-SOTA document reasoning (GDP.pdf 32.0%), but text-only output and no native audio/video input keep it well below full-multimodal leaders.
- **Coding: 85/100.** DeepSWE v1.1 75.2% matches flagship Astra (74.8%) and SWE-bench Verified 87.3% (Mercor, max) is strong, capped by Terminal-Bench 4.0 (56.1–58.6%) behind Kimi K3.1 Pro/Sonnet 5.5/Opus 5.5 and SciCode 54.2% / FrontierCode 49.1% mid-pack results.
- **Cost efficiency: 91/100.** $2/$10 per 1M with $0.10 cached delivers near-Astra quality at ~1/5 Astra's token price and consistently 1/3–1/7 rival per-task costs ($1.30 vs $9.30 OSWorld; $5.47 vs $23.80 TB-Science), capped because it is paid and GPT-6.1 Terra ($1/$5) now undercuts it for lighter work.
- **Overall Score: 84/100.** Mean of the five non-cost dims (86+90+93+65+85)/5 = 83.8 → 84; best-fit recommendation: demanding agentic coding, computer-use, and document-heavy professional work at flagship-adjacent quality without flagship pricing.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-02 (re-research pass; prior 2026-10-16)
- Method: public internet research (approved re-research pass); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing GPT-6.1 Sol — OpenAI announcement](https://openai.com/index/introducing-gpt-6-1-sol/)
  - [GPT-6.1 Sol (max) — Artificial Analysis model page](https://artificialanalysis.ai/models/gpt-6-1-sol)
  - [GPT-6.1 Sol — OpenRouter pricing & AA benchmark rows](https://openrouter.ai/openai/gpt-6.1-sol)
  - [GPT-6.1 Sol Benchmark Results — Benchmark Registry (Mercor SWE-bench Verified, Epoch GPQA)](https://benchmarkregistry.org/models/10015)
  - [GPT-6.1 Sol Benchmarks Explained — Vellum (GDP.pdf, OSWorld 2.0, DeepSWE tables)](https://www.vellum.ai/blog/gpt-6-1-sol-benchmarks-explained)
  - [GPT-6.1 Sol — LLM Stats (model card, context, cutoff)](https://llm-stats.com/models/gpt-6.1-sol)
