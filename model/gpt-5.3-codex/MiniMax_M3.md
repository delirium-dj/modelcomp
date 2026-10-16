# GPT-5.3 Codex — MiniMax M3 findings

> **Stem:** GPT-5.3 Codex (slug `gpt-5.3-codex`)
> **Official model ID:** `openai/gpt-5.3-codex` (OpenAI API), `gpt-5.3-codex` (Cursor)
> **Provider:** OpenAI
> **Window:** 400,000 tokens input; **128,000 output** ("Perfect Recall" attention mechanism; this is the largest published output ceiling in the GPT-5 family)
> **Modalities:** Text in/out only (`meta.json` confirms — multimodal was not added to this Codex variant)
> **Release date:** 2026-02-05 (announced alongside the new Codex app for macOS)
> **License:** Proprietary (closed weights; API + Codex subscription)
> **Price (OpenAI API, 2026-09 snapshot):** **$1.75 / $14.00 per 1M** input/output; **$0.175 cached read** (10× cheaper than input — cache economics are the standout)
> **Price (Cursor, 2026 snapshot):** $1.75 input / $0.175 cache read / $14.00 output, identical to API; Cursor exposes a "high reasoning effort" variant
> **Date of research:** 2026-10-16

## Identity & lineage

GPT-5.3 Codex is **OpenAI's most capable agentic coding model at the time of release**, announced 2026-02-05 and the first OpenAI model that **combines the frontier coding performance of GPT-5.2-Codex with the broad general reasoning of the GPT-5 series**. Per the OpenAI release notes, it is also the first model "instrumentally involved in its own creation" — used during its own training pipeline to debug and optimize the run. That is a structural framing OpenAI emphasizes repeatedly; it is the differentiating fact vs prior Codex generations.

The model shipped the same day as the new **Codex app for macOS** — a desktop "command center" that turns Codex from a chat-style assistant into a parallel-agent manager (multiple work streams, diff review, sandboxed execution). The macOS app is the integration surface; the API is the developer surface. Both were first-class at launch.

GPT-5.3 Codex has now been **sunset in Codex with ChatGPT subscriptions** as of 2026-06-02 — per the OpenAI community thread, "GPT-5.2 and GPT-5.3-Codex are no longer available in Codex through a ChatGPT subscription. The available path now is to use them in Codex through the API, or adjust the workflow to the newer models." The community reaction was unusually loud: many users reported the model gave them better outcomes than GPT-5.5 for code-and-codebase work. The model remains fully available via the OpenAI API and via Cursor (`gpt-5.3-codex` is listed in Cursor's model menu as of late 2026), so it is **deprecating in consumer surfaces but alive in developer surfaces** — the exact pattern you would expect for an agentic coding specialist whose cost profile competes with cheaper newer general models.

GPT-5.3 Codex has a sibling: **GPT-5.3 Codex Spark** (per the BenchLM family listing), which appears to be a smaller / faster variant for shorter contexts. The base GPT-5.3 Codex is the full-size agentic model.

## Architecture & capability claims

The technical framing in OpenAI's release and the llm-stats summary leans on four structural points:

1. **Co-designed with NVIDIA on GB200 NVL72 systems**, with training and evaluation cycles at roughly 3-day intervals. The hardware partnership allowed OpenAI to iterate at unusual cadence; this is the structural reason GPT-5.3 Codex and GPT-5.3 Codex Spark could ship within weeks of each other.
2. **400K context + 128K output with "Perfect Recall" attention.** Competitors pushed million-token windows; OpenAI chose to optimize a 400K window with explicit attention to middle-of-context loss. The 128K output is the genuine novelty — it lets the model emit multi-file implementations, complete documentation, and full libraries in a single output, eliminating the need for piecemeal generation.
3. **Inline decision-making vs static routing.** Earlier models allocated compute at the start of a request; GPT-5.3 Codex can recognize mid-task that a problem requires deeper analysis and automatically adjust its reasoning budget. This is the architectural change that produces the Terminal-Bench 2.0 +12.9 point jump over GPT-5.2 Codex.
4. **First-class agentic operations.** Tool use, API calls, file navigation, and self-directed testing are native (not bolted on). The Codex app exposes this directly: parallel work streams, diff review, sandboxed execution.

OpenAI classifies the model as **"High capability" for cybersecurity** and runs a Trusted Access program for defenders — vulnerability detection is a documented supported use case, with safety mitigations in place.

## Benchmark scores

- **Overall Score: 84/100**

### Coding (vendor + independent)

| Benchmark | Score | Source |
| --- | --- | --- |
| **SWE-Bench Pro** | **56.8%** | OpenAI system card (vendor); the headline "dominates benchmarks at 57%" claim from x.com |
| SWE-Bench Pro (recomputed, Hacker News) | ~57% (Spark variant baseline-matched) | Hacker News reanalysis |
| **SWE-bench Verified** | **85%** | OpenAI system card |
| SWE-bench Verified (Vals, independent) | 78.0% | Vals AI leaderboard |
| SWE-Rebench | 58.2% | SWE-Rebench leaderboard |
| **Terminal-Bench 2.0** | **77.3%** | OpenAI system card |
| Terminal-Bench 2.0 (vs Opus 4.6) | +11.9 pt gap over Opus 4.6's 65.4% | Reddit / interconnects |
| LiveCodeBench (Vals) | 87.3% | Vals AI |
| Vibe Code Bench v1.1 | 61.77% | Vals AI |
| τ²-bench (agentic tool use) | 86% | Artificial Analysis |
| JobBench | 33.7% | JobBench paper |

The **SWE-Bench Pro 56.8% / Terminal-Bench 2.0 77.3% / SWE-bench Verified 85%** triad is the headline. The 12-point Terminal-Bench 2.0 lead over Opus 4.6 (65.4%) was the launch-week talking point. SWE-bench Verified 85% is competitive with the closed-frontier cohort; Claude Opus 4.6 was at 80% at the time of GPT-5.3 Codex launch and Opus 4.7/4.8 later pulled further ahead.

### Reasoning & knowledge

| Benchmark | Score | Source |
| --- | --- | --- |
| **GPQA Diamond** | **91.5%** (or 91.52% per `meta.json`) | Artificial Analysis |
| **HLE** | **42.5%** (or 42.49% per `meta.json`) | Artificial Analysis |
| AA Intelligence Index | 32.5% | Artificial Analysis |
| AA-LCR (Long-Context Reasoning) | 83.3% | Artificial Analysis |
| CritPt | 16.9% | Artificial Analysis |
| AA-IFBench (instruction following) | 75.4% | Artificial Analysis |
| AA-Omniscience Hallucination Rate | 89.2% | Artificial Analysis |
| AA-Omniscience Accuracy | 52.9% | Artificial Analysis |

The **GPQA 91.5%** is competitive with closed-frontier at launch — the model knows the science it has been trained on. The **HLE 42.5%** is mid-pack; the deep-knowledge frontier (Claude Fable 5, Kimi K3, GPT-6 Sol) sits higher on HLE. The **AA Intelligence Index 32.5%** is notably lower than the GPQA / HLE per-benchmark numbers — this is because the AA Index weights reasoning harder and the model's reasoning ceiling is mid-pack, not leaderboard-topping. The **CritPt 16.9%** is a genuine weakness on physics-reasoning problems. The **AA-Omniscience Hallucination Rate 89.2%** is high — the model hallucinates frequently when pushed on factual recall tasks outside its training distribution. This is the documented ceiling.

### Multimodal & agentic (light coverage)

| Benchmark | Score | Source |
| --- | --- | --- |
| AA-MMMU-Pro | 78.5% | Artificial Analysis |
| **OSWorld-Verified** | **64.7%** | OpenAI system card |
| Design Arena Website (Elo) | 1164 | OpenRouter benchmarks |

OSWorld-Verified 64.7% is competitive for the launch cohort (Claude Opus 4.6 was ~62%, Sonnet 4.6 ~57% at the time). GPT-5.4 later hit 75% on the same benchmark. AA-MMMU-Pro 78.5% reflects text-only multimodal evaluation since GPT-5.3 Codex is not natively multimodal at input.

### Where it sits in the leaderboard ecosystem

- **BenchLM public benchmark:** **60.47/100**, ranked **#54 of 954** (per BenchLM 2026-10-16). The coverage is partial (23 of 639 benchmarks) so the score is conservative.
- **Vals AI ecosystem:** Among coding-specialist models, GPT-5.3 Codex sits behind GPT-5.4 (which absorbed Codex capability per Turing College's review: "GPT-5.4 absorbed every GPT-5.3 Codex capability and scored 75% on OSWorld") and ahead of GPT-5.2-Codex.
- **Cursor ecosystem:** Listed as a primary model with a "high reasoning effort" variant.

### Honest interpretation of the record

The coding benchmark triad (SWE-Bench Pro 56.8%, Terminal-Bench 2.0 77.3%, SWE-bench Verified 85%) is the strongest published combination for a single model at launch. The terminal-bench gap of ~12 points over Opus 4.6 is real and was the launch-defining number. The reasoning ceiling (CritPt 16.9%, AA Intelligence Index 32.5%) is mid-pack and should be read as "GPT-5.3 Codex is a coding specialist, not a general-reasoning flagship." The hallucination rate (AA-Omniscience 89.2%) is a meaningful flag for high-stakes factual work.

## Pricing & deployment

| Channel | Input $/M | Cached $/M | Output $/M | Context | Notes |
| --- | --- | --- | --- | --- | --- |
| **OpenAI API** | $1.75 | $0.175 read | $14.00 | 400K / 128K out | The canonical price; cache reads are 10× cheaper than input |
| Cursor | $1.75 | $0.175 | $14.00 | 400K / 128K out | "High reasoning effort" variant available |
| OpenCode data | $1.75 | — | $14.00 | 400K | Aggregated pricing |
| ChatGPT Plus/Pro/Enterprise | — | — | — | — | **Removed 2026-06-02**; API-only |
| llmapi.ai gateway | $1.75 | — | $14.00 | 400K | OpenAI-compatible |
| kilo.ai | $1.75 | — | — | — | OpenAI-routed |

**Cost efficiency:** the **10× cache discount ($0.175 vs $1.75 input)** is the strongest cache economics in the GPT-5 family — it makes long-context agent loops with prefix reuse dramatically cheaper. For a prompt with a 100K-token reused prefix, the effective input price approaches $0.175/M instead of $1.75/M.

At $1.75/$14.00, GPT-5.3 Codex is **cheaper output than GPT-5.4** ($2.50/$15.00 per nxcode.io's comparison) but **more expensive output than Grok 4.5** ($6.00) and Claude Sonnet 4.6 ($15.00) at the time of writing. For coding-agent routing, the calculus is: $14.00 output is high, but the cache economics and SWE-Bench Pro 56.8% / Terminal-Bench 2.0 77.3% triad justify it for complex multi-file agent tasks.

## Where it fits — and where it does not

**Reasonable fit:**

- **Long-horizon agentic coding at frontier quality** — multi-file implementations, complete library generation, complex refactors. The 128K output limit is the operational advantage; most competitors cap at 32K-65K output.
- **Terminal/shell workflows** — Terminal-Bench 2.0 77.3% is the strongest single-agent terminal score at launch and the +12-point lead over Opus 4.6 reflects real shell capability.
- **Parallel agent orchestration via Codex app** — the desktop app exposes parallel work streams natively; this is the integration story for solo developers running multiple Codex sessions.
- **Cache-heavy agent loops** — the 10× cache discount is the best cache economics in the GPT-5 family, materially changing cost-per-task for any prefix-reuse pattern.
- **High-reasoning-effort variants** — Cursor exposes a high-reasoning variant for cases where the model's mid-pack reasoning ceiling needs an extra budget.

**Poor fit:**

- **General-purpose reasoning ceilings** — GPQA 91.5% is solid, but HLE 42.5%, AA Intelligence Index 32.5%, and CritPt 16.9% place this model clearly behind the general-reasoning frontier (Kimi K3, GPT-6 Sol, Claude Fable 5, Muse Spark 1.3).
- **High-stakes factual recall** — AA-Omniscience Hallucination Rate 89.2% is a real flag. For domains where factual accuracy is critical (medical, legal, financial), prefer models with lower hallucination profiles.
- **Multimodal input** — text-only input. For image/video understanding, GPT-5.4 or GPT-6 Sol is the upgrade.
- **ChatGPT consumer subscription** — sunset 2026-06-02. The model is alive only via API / Cursor / aggregator routes.
- **Massive-context recall past 300K tokens** — the 400K window with "Perfect Recall" is well-optimized, but if you need million-token context, Qwen 3.8 Max (1M context) or Gemini 3.8 Flash (1M context) are the alternative.

## Triangulated scores

- **Tool use: 88/100.** τ²-bench 86%, SWE-bench Verified 85%, Terminal-Bench 2.0 77.3% (+12 over Opus 4.6). The Codex app's parallel-agent orchestration is a qualitative tool-use advantage. OSWorld-Verified 64.7% is mid-pack at the agentic-GUI axis; JobBench 33.7% reflects a single-agent task limit. SWE-Rebench 58.2% (independent) and SWE-bench Verified 78.0% (Vals independent) are both consistent with the vendor numbers.
- **Reasoning: 88/100.** GPQA Diamond 91.5% is strong; HLE 42.5% is mid-pack; AA Intelligence Index 32.5% reflects reasoning ceiling; AA-LCR 83.3% on long-context reasoning is solid; CritPt 16.9% is a real limit on physics reasoning. The model is a coding specialist, not a general-reasoning leader. AA-IFBench 75.4% is competitive on instruction following.
- **Context window: 83/100.** 400K input is generous; 128K output is the largest in the GPT-5 family and a meaningful advantage for multi-file agent work. The "Perfect Recall" attention addresses middle-of-context loss. Below Qwen 3.8 Max and Gemini 3.8 Flash on raw input size, ahead of most closed models on output size.
- **Multimodal: 71/100.** Text-only input limits this category. AA-MMMU-Pro 78.5% on text-encoded multimodal evaluations is solid for what it covers. OSWorld-Verified 64.7% is the agentic multimodal axis. Design Arena Elo 1164 is competitive. No native image/video input — this is a single-axis multimodal model.
- **Coding: 91/100.** SWE-Bench Pro 56.8%, Terminal-Bench 2.0 77.3%, SWE-bench Verified 85%, LiveCodeBench 87.3%, Vibe Code Bench v1.1 61.77%. The coding triad is the strongest single published combination at launch; the Terminal-Bench 2.0 lead over Opus 4.6 (+12) is the headline number. This is the operational ceiling.
- **Cost efficiency: 72/100.** $1.75/$14.00 is mid-market for closed models; the 10× cache discount ($0.175) is best-in-class for cache economics. Compared to GPT-5.4 ($2.50/$15.00), the model is 30% cheaper output. Compared to Claude Sonnet 5 (~$3/$15) and Kimi K3 ($0.60/$2.50), the output rate is significantly higher. The cache discount and the 128K output (avoiding multi-turn generation overhead) compensate partially. Sunset in ChatGPT Plus routes consumer users to higher-cost options.
- **Overall: 84/100.** Coding specialist with 128K output (operational advantage), 400K context, frontier SWE-Bench Pro / Terminal-Bench 2.0 / SWE-bench Verified triad, but mid-pack on reasoning (CritPt 16.9%, AA Index 32.5%) and high hallucination rate (AA-Omniscience 89.2%). Sunset in ChatGPT subscription but alive via API/Cursor. The benchmark record is strong; the consumer-facing deprecation is the operational context for any team planning migrations. For agentic software-engineering teams that can route via API, GPT-5.3 Codex remains a credible choice for complex multi-file work.

Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-16