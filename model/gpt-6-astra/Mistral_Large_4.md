# GPT-6 Astra — findings by Mistral Large 4

- Source: OpenAI (`gpt-6-astra`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's flagship GPT-6 model, billed as "the world's most intelligent and aligned model"; sets claimed state of the art for computer use, browsing, software engineering, cybersecurity, science, and professional work. Sibling tiers GPT-6 Sol/Luna added September 22, 2026.
- **Provider / access:** OpenAI API (`gpt-6-astra`, Responses API; batch variant `gpt-6-astra:batch` on OpenRouter), ChatGPT, Codex, Devin harness integration on launch day. Responses API (not Chat Completions-only).
- **Release / knowledge:** Launched 2026-09-03 (announced via openai.com/index/gpt-6-astra; batch listed 2026-09-04); system card updated 2026-09-22 (deploymentsafety.openai.com). Knowledge cutoff not published in the sources reviewed.
- **IDs:** `gpt-6-astra` (OpenAI API); `openai/gpt-6-astra` (OpenRouter).
- **Context window:** 1,050,000 tokens total; 922,000 max input; 128,000 max output; prompts above 272K input billed at 2x input/cache and 1.5x output rates (per OpenAI model page as captured by BenchLM).
- **Modalities:** Text + image in (computer-use screenshots), text out; five reasoning effort levels (low→max); tool/function calling, browsing, JSON mode.
- **Pricing (as of 2026-11-05):** $10.00 / $50.00 per 1M input/output; cached input $1.00/M; cache writes $12.50/M (OpenAI model page via BenchLM); batch 50% via OpenRouter `:batch`. No free tier. Despite the high list price, ~40% cheaper per task than Claude Fable 5.1 (max) and ~30% cheaper than Opus 5 (max) at equal/higher AA score (token-efficiency gains; ~1/3 the tokens of GPT-5.6 Sol at max).
- **Architecture:** Proprietary, params/weights not disclosed; first named in an Aug 1, 2026 research post, briefly paused after a safety evaluation, relaunched with Critical-level cybersecurity threshold declared (ExploitBench).

### Raw benchmarks found

OpenAI launch materials/system card cross-checked against BenchLM, llm-stats, Vellum, DataCamp, alphacorp, apipass, AA, BenchLeader; conflicts listed side by side:

Agent / tool use:

- AutomationBench: **41.4%** (leads; Fable 5.1 31.4%, Opus 5.5 42.5% per Google's card — conflicting, both cited; apipass/llm-stats)
- OSWorld 2.0 offline partial: **72.6%** (leads Argon's 69.2%) (llm-stats)
- Agent's Last Exam: **59.3%** per llm-stats vs **34.2%** in Google's model-card table — harness conflict, both cited
- BrowseComp: **91.5%** (llm-stats)
- Terminal-Bench 4.0: **58.2%** (Google model card; Opus 5.5 leads at 66.4%)
- GDPval-AA v2.1: **1542 Elo** (Google card; below Opus 5.5 1846)
- Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (saturated; Gemini 3.8 Flash 95.3%, GPT-5.6 Sol 94.6%) (DataCamp/OpenAI)
- FrontierMath Tier 4 v2: **97.6%** (alphacorp from launch materials; BenchLM notes OpenAI published no FrontierMath on the public page — conflicting, both cited)
- ARC-AGI-3: **99.9%** announcement table vs **98.6%** (The New Stack, different harness) vs **62.7%** under a different scaffold (alphacorp) — scaffold-dependent spread, all cited
- HLE with tools: **57.2%** (behind Fable 5.1 65.0% and Opus 5 63.6%) (OpenAI/Google tables)
- Artificial Analysis Intelligence Index: **53 at max** (ties Gemini 4 Argon at launch; SecondTalent cites 52.7 — version drift, both cited); below Opus 5.5 (58–59) on current boards
- BenchLeader Index: **68.2, top 10 of 585 configs** (best config; reasoning 86, knowledge 56) (2026-11-03)
- LCR / CritPt / Omniscience: no verified public score found

Coding:

- DeepSWE v1.1: **74.1%** (below Argon 77.9%, Opus 5.5 74.2% — effectively tied with Opus 5.5) (Google card)
- FrontierSWE v2: **65.5%** (leads; Argon 55.0%, Opus 5.5 62.3%) (Google card)
- Terminal-Bench 4.0: **58.2%** (above)
- BenchCAD: **95.9%** (apipass); SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found for this exact ID

Long context:

- 1,050,000-token window / 128K output (official); no verified MRCR/RULER retrieval score found at 512K+ for this ID

Cybersecurity (domain strength):

- ExploitBench (internal port): **100.0%** per llm-stats compare; declared OpenAI's first Critical cybersecurity threshold (system card/NeuralTrust)

### Normalized scores (1–100)

- **Tool use: 93/100.** Leads AutomationBench (41.4%), OSWorld 2.0 (72.6%) and BrowseComp (91.5%) with SOTA computer-use claims; capped by the conflicting Agent's Last Exam readings (59.3% vs 34.2% across harnesses) and no Claw-Eval number.
- **Reasoning: 90/100.** GPQA 96.0% (saturated), FrontierMath T4 97.6% and ARC-AGI-3 up to 99.9%, but HLE-tools 57.2% trails Fable 5.1 and the AA Index reads only 52.7–53 (below the 60+ band).
- **Context window: 96/100.** 1.05M total / 128K output lands in the 95–100 tier; not 100 because no verified ≥98% retrieval at 512K+ was found, and >272K inputs incur 2x/1.5x pricing.
- **Multimodal: 80/100.** Text/image in with computer use, text out; no audio/video input or non-text output evidence.
- **Coding: 90/100.** FrontierSWE v2 65.5% leads, DeepSWE 74.1%, TB 4.0 58.2%, BenchCAD 95.9%; capped below frontier because Opus 5.5 leads TB 4.0 and Argon leads DeepSWE, and no SWE-bench Verified number is published for this ID.
- **Cost efficiency: 32/100.** $10/$50 per 1M list price sits near the $10/$50 ≈ 30 methodology band; strong per-task economics (~40% cheaper than Fable 5.1 max) do not offset the list price; no free tier.
- **Overall Score: 90/100.** Half-up mean of (93 + 90 + 96 + 80 + 90) / 5 = 89.8 → 90. Best fit: pick for computer use, browsing automation and cyber-defense workloads where its tool-use lead matters; Opus 5.5 remains cheaper and stronger on agentic coding/knowledge work.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (6 web searches + official OpenAI announcement page fetched, 2026-11-05 UTC); official OpenAI blog/system card prioritized, cross-checked against BenchLM, llm-stats, Vellum, DataCamp, alphacorp, apipass, Artificial Analysis, BenchLeader, Google's model card; conflicting figures (AA Index 53 vs 52.7; ARC-AGI-3 99.9/98.6/62.7; ALE 59.3 vs 34.2; AutomationBench 41.4 vs 42.5 for Opus 5.5; FrontierMath published vs not) listed side by side. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-6 Astra: A new generation of intelligence — OpenAI (official)](https://openai.com/index/gpt-6-astra/)
  - [GPT-6 Astra System Card — OpenAI Deployment Safety Hub](https://deploymentsafety.openai.com/gpt-6-astra)
  - [GPT-6 Astra Model — OpenAI API docs](https://platform.openai.com/docs/models/gpt-6-astra)
  - [BenchLM — gpt-6-astra (pricing, context limits, launch evals)](https://benchlm.ai/models/gpt-6-astra)
  - [llm-stats — GPT-6 Astra launch research (TB-Science 64.6, FrontierMath 97.6, HLE 57.2, ALE 59.3)](https://llm-stats.com/blog/research/gpt-6-astra-launch)
  - [Benchmarking GPT-6 Astra — Artificial Analysis (Index 53, cost-per-task vs Fable/Opus)](https://artificialanalysis.ai/articles/benchmarking-gpt-6-astra)
  - [DataCamp — GPT-6 Astra features, benchmarks, pricing (GPQA 96.0, HLE 57.2)](https://www.datacamp.com/blog/gpt-6-astra)
  - [Vellum — GPT-6 Astra benchmarks explained (ARC-AGI-3 99.9 vs 98.6 conflict)](https://www.vellum.ai/blog/gpt-6-astra-benchmarks-explained)
  - [alphacorp — GPT-6 Astra launch benchmarks (ARC-AGI-3 scaffold spread 62.7–99.9)](https://alphacorp.ai/blog/gpt-6-astra-launch-benchmarks-pricing-and-everything-you-need-to-know)
  - [apipass.dev — Astra review (AutomationBench 41.4, BenchCAD 95.9, BrowseComp 91.5)](https://apipass.dev/blogs/gpt-6-astra-comprehensive-review-benchmarks-pricing)
  - [BenchLeader — gpt-6-astra (Index 68.2, $10/$50 list)](https://www.benchleader.com/models/gpt-6-astra)
  - [OpenRouter — openai/gpt-6-astra:batch](https://openrouter.ai/openai/gpt-6-astra:batch)
