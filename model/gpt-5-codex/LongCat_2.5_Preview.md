# GPT-5-Codex — findings by LongCat 2.5 Preview

- Source: OpenAI/gpt-5-codex
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5-Codex
- **Short description:** A version of GPT-5 optimized for agentic coding in Codex (September 2025), trained with RL on real-world coding tasks. Features dynamic thinking adaptation, code review training, and 7+ hour autonomous operation. Responses API only. Deprecated July 2026.
- **Provider / access:** OpenAI API `gpt-5-codex` (Responses API only), Azure AI Foundry `azure/gpt-5-codex`, OpenRouter `openai/gpt-5-codex`, Poe, Vercel AI Gateway. Available in Codex CLI, IDE extension, web, and GitHub. No Zen Free ID.
- **Release / knowledge:** Released 2025-09-15 (API 2025-09-23); knowledge cutoff September 30, 2024. Retires 2026-07-23.
- **IDs:** `gpt-5-codex` (no Free ID on Zen; paid only)
- **Context window:** 400,000 tokens (272K input on some providers); max output 128,000 tokens.
- **Modalities:** Text + image input → text output; reasoning tokens; tool calls; structured outputs; web search; prompt caching.
- **Pricing (as of 2026-10-18):** $1.25/MTok input, $10.00/MTok output; cache read $0.125; batch API 50% discount. Paid only. Deprecated.
- **Architecture:** Proprietary; API-only (no open weights); dynamic thinking adaptation (snappy on small tasks, 7+ hours on complex tasks). Regularly updated snapshots.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench Telecom: **86.8%** (Artificial Analysis / rank 65 of 332)
- APEX-Agents: **34.8%** (BenchmarkList / rank 20 of 44)
- GDPval-AA: **1,216 Elo** (BenchmarkList / rank 70 of 356)
- Hack-Verifiable TextArena: **23.3%** (rank 3 of 12)

Reasoning / knowledge:

- GPQA Diamond: **83.7%** (Artificial Analysis / rank 100 of 469)
- HLE: **27.8%** (Artificial Analysis / rank 98 of 485)
- AIME 2025: **98.7%** (Artificial Analysis / rank 2 of 226)
- MMLU-Pro: **86.5%** (Artificial Analysis / rank 21 of 312)
- IFBench: **74.1%** (Artificial Analysis)
- AA Intelligence Index: **36.12** (BenchmarkList / rank 81 of 433)
- AA-Omniscience: **-7.5** index / **38.7%** accuracy / **75.4%** hallucination rate
- CritPt: **5.1%** (AA)

Coding:

- Terminal-Bench Hard: **37.9%** (Artificial Analysis / rank 37 of 326)
- LiveCodeBench: **84.7%** (Vals AI / rank 29 of 123)
- IOI: **9.8%** (BenchmarkList / rank 36 of 58)
- Code refactoring (proprietary): **51.3%** (OpenAI / up from 33.9% for GPT-5)
- SWE-bench Verified: **no verified public score found** (OpenAI claims improvement over GPT-5 but did not publish a number)

Long context:

- AA-LCR: **71.7%** (BenchmarkList / rank 119 of 414)
- 400K token context window

### Normalized scores (1–100)

- **Tool use: 68/100.** τ²-Bench Telecom 86.8% is strong; APEX-Agents 34.8% is moderate. Capped by limited agentic benchmark coverage and no MCP-Atlas/Toolathlon data.
- **Reasoning: 72/100.** GPQA Diamond 83.7% and AIME 98.7% are good; HLE 27.8% is moderate. Capped by AA-Omniscience -7.5 (75.4% hallucination rate — very poor factuality).
- **Context window: 85/100.** 400K tokens is substantial. Below 1M frontier but enables large codebase understanding.
- **Multimodal: 68/100.** Text + image input → text output; MMMU-Pro 73.8%. No audio/video input.
- **Coding: 68/100.** Terminal-Bench Hard 37.9% is below frontier; LiveCodeBench 84.7% is decent. Capped by no published SWE-bench Verified score and yW!an finding 12.8% lower accuracy on 4+ step reasoning tasks.
- **Cost efficiency: 55/100.** $1.25/$10 per MTok is moderate; dynamic thinking adaptation helps efficiency. Capped by deprecated status and high output cost.
- **Overall Score: 72/100.** Mean of (68+72+85+68+68)/5 = 72.2 → 72. A solid coding model with good LiveCodeBench performance and dynamic thinking adaptation. Behind GPT-5.1-Codex and GPT-5.1-Codex-Max on most metrics. Best for Codex CLI workflows and code review. Deprecated as of July 2026 — not recommended for new deployments.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-18
- Method: Public internet research (OpenAI official blog + system card, Artificial Analysis, BenchmarkList, Vals AI, Simon Willison, SurgeHQ, CodeRabbit, yW!an, Luca Becker, Respan, Vercel AI Gateway, ModelBenchmark.io); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
