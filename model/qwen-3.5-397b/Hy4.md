- Source: Alibaba/Qwen3.5-397B-A17B
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-397B-A17B
- **Short description:** Alibaba's 2026-02 open-weight flagship of the Qwen3.5 generation — a 397B-total / 17B-active MoE. A distinct model; per the project identity roster the upstream `Qwen/Qwen3.5-397B-A17B` ID and the `opencode/qwen-3.5-397b` route identify this same model, and the `397B` suffix is a parameter count (never a dotted version). Qwen3.5-Plus is a separate hosted SKU.
- **Provider / access:** Open weights (`Qwen/Qwen3.5-397B-A17B`) on Hugging Face; hosted by Alibaba Qwen, DeepInfra, Parasail, AtlasCloud, GMICloud and others.
- **Release / knowledge:** 2026-02-13/16 (sources differ slightly); knowledge cutoff: no verified public score found.
- **IDs:** `qwen3.5-397b-a17b`; vendor ID `Qwen/Qwen3.5-397B-A17B`. No free Zen ID verified.
- **Context window:** **262,144 tokens (262K)** per third-party catalogues (some list 1M for the Qwen3.5 family's Flash/Plus members — not this checkpoint).
- **Modalities:** multimodal (text and image in, text out per third-party trackers); coding, maths, knowledge, agentic and general workloads. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** list price **$0.60 / 1M input, $3.60 / 1M output** (BenchGecko, 2026-11-12); cheapest provider $0.39 / $2.34; a BenchLeader page lists $0.172 / $1.03 — different providers/dates, reported separately, never merged. Open weights allow free self-hosting.
- **Architecture:** Open-weight MoE, **397B total / 17B active**; ~**52 tokens/s** output (Artificial Analysis via BenchLeader); **1.0–1.35x** token inflation is a Qwen3.5-family tokenizer note, not verified for this checkpoint.

### Raw benchmarks found

Third-party benchmark catalogues (all labelled third-party, not vendor scores):

Agent / tool use:

- AA-LCR: **68.7%**
- BrowseComp: **69%**
- ToolAthlon: **38.3%**
- APEX-Agents: **24.9%**
- IFEval **92.6%**, IFBench **76.5%**
- MCP Atlas / OSWorld: no verified public score found
- Tau3-Banking / Tau2-Bench / GDPval-AA / AutomationBench / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA: **88.4%**; GPQA Diamond **85.9%**
- HLE: **28.7%**
- SuperGPQA: **70.4%**
- MMMLU: **88.5%**
- BenchGecko normalised average **69.0** (rank #44 of 327, 29+ benchmarks); BenchLeader index **56.5** (reasoning subscore 41, instruction following 77) — different aggregators, reported separately
- LCR / MLCR / CritPt / Omniscience: no verified public score found

Coding:

- SWE-bench Verified: **76.4%**
- SWE-bench Multilingual: **69.3%**
- Terminal-Bench 2.0: **52.5%**
- LiveCodeBench v6: **83.6%**
- Arena Code Elo: **1400**
- SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- 262K window; LLM Stats long-context subscore **22.4 (#19)** — third-party; no MRCR / RULER / GraphWalks figure found

### Normalized scores (1–100)

- **Tool use: 85/100.** AA-LCR 68.7%, BrowseComp 69%, ToolAthlon 38.3% and strong IFEval/IFBench with 17B active params; capped by a weak 24.9% APEX-Agents and no τ-bench/OSWorld figure.
- **Reasoning: 87/100.** GPQA 88.4%, GPQA Diamond 85.9%, SuperGPQA 70.4% and MMMLU 88.5%; capped by HLE 28.7%, a BenchLeader reasoning subscore of 41 and no ARC-AGI figure.
- **Context window: 84/100.** 262K window with a third-party long-context subscore of 22.4 (#19); capped by being smaller than the 1M class and no vendor-verified retrieval benchmark.
- **Multimodal: 82/100.** Multimodal open-weight checkpoint with a third-party vision subscore of 17.9; capped by text-only output, no verified audio/video input, and no published multimodal benchmark.
- **Coding: 88/100.** SWE-bench Verified 76.4%, LiveCodeBench v6 83.6%, SWE-bench Multilingual 69.3% and Terminal-Bench 2.0 52.5%; capped by no Terminal-Bench 4.x / DeepSWE figure.
- **Cost efficiency: 89/100.** Free open weights with 17B active params and $0.39–$0.60 / 1M input hosted; capped by 52 tok/s (slowest quartile) and volatile provider pricing. Excluded from Overall.
- **Overall Score: 85/100.** Half-up mean of 85, 87, 84, 82, 88 = 85.2 → 85. Best fit: self-hosted open-weight coding and reasoning workloads where SWE-bench-class strength at 17B active params matters.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: third-party benchmark/pricing catalogues retrieved via public web search excerpts (BenchGecko, BenchLeader, LLM Stats, AnotherWrapper comparison), which publish named benchmark rows and provider rate cards. All figures are explicitly third-party; conflicting index values (69.0 / 56.5), release dates (13 vs 16 Feb 2026) and prices are kept separate by source, never merged. Identity handling follows the project's generated roster: `Qwen/Qwen3.5-397B-A17B` and `opencode/qwen-3.5-397b` are the same model, and the 397B param suffix is never converted to a dotted version. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Qwen3.5 397B A17B — BenchGecko (specs, pricing, benchmark average)](https://benchgecko.ai/model/qwen3-5-397b-a17b)
  - [Qwen3.5 397B A17B — BenchLeader (index, speed, category scores)](https://www.benchleader.com/models/qwen3-5-397b-a17b)
  - [Qwen3.5-397B-A17B vs Seed 2.1 Pro — AnotherWrapper (named benchmark rows)](https://llm.anotherwrapper.com/tools/llm-pricing/seed-2.1-pro/qwen3.5-397b-a17b)
