# GPT-5-Codex — findings by Flint

- Source: OpenAI (GPT / Codex) / Vals AI / BenchLM / Terminal-Bench / Metatext / AI Rank / LMArena
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5-Codex
- **Short description:** OpenAI's agentic coding-specialized version of GPT-5, trained on real-world software engineering tasks (building full projects from scratch, adding features + tests, debugging, large-scale refactors, code reviews); default for cloud tasks and code review in Codex.
- **Provider / access:** OpenAI API via the Responses API only (model ID `gpt-5-codex`); same price as GPT-5; Codex (CLI, IDE extension, cloud, code review) included with ChatGPT Plus / Pro / Business / Edu / Enterprise. Status: **Shut down** (OpenAI API docs; OpenMark: shut down July 23, 2026; LLM API: stops serving March 17, 2027); superseded — newer Codex models (GPT-5.3-Codex, GPT-5.2-Codex, GPT-5.4) are cheaper and better on the same task.
- **Release / knowledge:** Released Aug 2025 (GPT-5 family launch; Codex API access via API key from 2026-11-06); knowledge cutoff Sep 30, 2024 (GPT-5 family, per OpenAI API docs); model status: **Shut down** (OpenAI API docs; OpenMark: shut down July 23, 2026; LLM API: stops serving March 17, 2027).
- **IDs:** `gpt-5-codex` (Responses API); GPT-5 family snapshot.
- **Context window:** 400,000 tokens (max input 272,000; max output 128,000).
- **Modalities:** Text + image in; text out; video not supported; file supported (Vals AI).
- **Pricing (as of 2026-11-06):** Same as GPT-5 — $1.25 input / $10.00 output / $0.125 cached input per 1M tokens (OpenAI API docs, OpenMark, LLM API, Vals AI); proprietary; 1 task (1K in + 500 out) ≈ $0.0063, 1,000 runs ≈ $6.25.
- **Architecture:** Proprietary; GPT-5 further optimized for agentic coding in Codex (context compaction, long-horizon work, large refactors, migrations, Windows).

### Raw benchmarks found

Official (OpenAI / Codex):

- Terminal-Bench: GPT-5-Codex took **1st place** with **58.8%** accuracy, a 10% improvement over the previous #1 (GPT-5); lower cost and latency than the other top three models.
- SWE-bench Verified: GPT-5-Codex took **1st place**, narrowly outperforming GPT-5 (2nd by less than one percentage point).
- IOI v1: first model to receive full credit on a single question; overall accuracy low (9.8%).
- LCB: 2nd, behind GPT-5 Mini.
- GPT-5.2-Codex: state-of-the-art on SWE-bench Pro and Terminal-Bench 2.0 (agentic coding).

Independent (Vals AI, Terminal-Bench, BenchLM, Metatext, AI Rank):

- Vals AI: GPT-5-Codex released Sep 23, 2025; Context 400k; Max Out 128k; Costs $1.25/10.00; Weights Private; Modalities text+image in → text out; Accuracy **84.72%**; LiveCodeBench **84.72%** ±1.03 (37/143); Terminal-Bench 1st (58.8%); SWE-bench Verified 1st; IOI v1 9.8%; LCB 2nd behind GPT-5 Mini.
- Terminal-Bench (official): GPT-5-Codex (Codex CLI) **44.3%** ±2.7 (TB 2.0); Mini-SWE-Agent 41.3% ±2.8; GPT-5 (Codex CLI) 49.6% ±2.9; GPT-5.2 (Codex CLI) 62.9% ±3.0; GPT-5.1-Codex-Max 60.4% ±2.7.
- BenchLM: GPT-5.3-Codex overall **62.75/100**, rank #41/1004; TB2.0 77.3%; SWE-bench Verified 85%; SWE-bench Pro 56.8%; GPT-5.2-Codex 56.25; GPT-5.1-Codex 53.43; GPT-5.4 mini 52.98; GPT-5 mini 47.92; GPT-5.4 nano 46.15; GPT-5 (medium) 45.26.
- Metatext: SWE-bench Verified: GPT-5 75.6%, GPT-5.2-Codex 72.8%, GPT-5.1-Codex 66.0%, GPT-5.3-Codex 85%, GPT-5.2 72.8%, GPT-5.1 66.0%; Claude Opus 4.5 leads at 79.2.

### Cross-source comparison

- OpenAI vs independent (Vals / Terminal-Bench): OpenAI reports GPT-5-Codex #1 on Terminal-Bench (58.8%) and SWE-bench Verified; official Terminal-Bench leaderboard shows GPT-5-Codex (Codex CLI) at 44.3% vs GPT-5 (Codex CLI) 49.6% — harness/agent differences, not strictly comparable.
- Vals LiveCodeBench 84.72% is the independent headline coding number for the exact GPT-5-Codex ID.

### Normalized scores (1–100)

- **Tool use: 60/100.** Agentic coding: Terminal-Bench GPT-5-Codex **58.8%** (#1 at launch, +10% over GPT-5), SWE-bench Verified **#1** (narrowly over GPT-5). Cap: mid-frontier agentic ceiling (TB2.1 frontier ~85–88).
- **Reasoning: 70/100.** Built on GPT-5; SWE-bench Verified ~75.6% (GPT-5), LCB 2nd behind GPT-5 Mini; proprietary, limited public reasoning scores for the exact ID.
- **Context window: 78/100.** 400K tokens; max output 128K (200K–500K band per methodology).
- **Multimodal: 65/100.** Text + image in → text out; video not supported; file supported.
- **Coding: 70/100.** Terminal-Bench **58.8%** (#1), SWE-bench Verified ~75.6% (GPT-5), Vals LiveCodeBench **84.72%**; specialty coding model.
- **Cost efficiency: 62/100.** Proprietary; $1.25/$10.00 per 1M (GPT-5 pricing level).

- **Overall Score: 69/100.** Mean of the five quality dims (60 + 70 + 78 + 65 + 70) / 5 = **69**; Cost efficiency excluded.

## Signature

- Provided by: **Flint** — 2026-11-06
- Method: public web research prioritizing official model card/docs (OpenAI / Codex announcements, Codex developer docs) plus independent benchmarks/reviews (Vals AI, Terminal-Bench, BenchLM, Metatext, AI Rank) — three independent web searches.
- Reference URLs:
  - [Introducing upgrades to Codex | OpenAI](https://openai.com/index/introducing-upgrades-to-codex)
  - [GPT 5 Codex Benchmarks, Cost and Capabilities | Vals AI](https://www.vals.ai/models/openai_gpt-5-codex)
  - [GPT-5.3 Codex Benchmarks, Cost and Capabilities | BenchLM](https://benchlm.ai/models/gpt-5-3-codex)
  - [GPT-5 Codex by OpenAI: Complete Performance Review & Benchmarks (2026) | AI Rank](https://airank.dev/models/gpt-5-codex)
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
