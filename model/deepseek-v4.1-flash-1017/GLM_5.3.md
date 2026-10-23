# DeepSeek V4.1 Flash 1017 — findings by GLM 5.3

- Source: DeepSeek (`deepseek/deepseek-v4.1-flash-1017`, hosted as `deepseek-flash`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash 1017
- **Short description:** The October 17, 2026 checkpoint snapshot of DeepSeek V4.1 Flash — the cost-efficient tier of the V4.1 family and DeepSeek's first model on the Causal Encoder-Decoder (CED) architecture. DeepSeek reports it exceeds V4 Pro on performance, speed, and task completion time. The snapshot succeeded the Sept 10 V4.1 Flash release (AA marks that page deprecated in favor of 1017).
- **Provider / access:** DeepSeek API `https://api.deepseek.com` (OpenAI- and Anthropic-compatible Chat Completions); `deepseek-flash` is the live model name. OpenRouter `deepseek/deepseek-v4.1-flash-1017`; OpenCode Zen serves `deepseek-v4.1-flash` (live endpoint 2026-10-23) and `deepseek-v4.1-flash-free`.
- **Release / knowledge:** released 2026-10-17 (OpenRouter, models.dev). Retired legacy ids `deepseek-v4-flash` / `deepseek-v4-flash-vision-exp` are still accepted but now served by this checkpoint at Flash pricing (official DeepSeek docs).
- **IDs:** `deepseek/deepseek-v4.1-flash-1017`; hosted `deepseek-flash`. Zen free id: `deepseek-v4.1-flash-free` ($0).
- **Context window:** 1,000,000 total; 384,000 max output (models.dev, repo meta; AA confirms 1M).
- **Modalities:** text + image in; text out; reasoning (thinking + `reasoning_effort`); tool calls; native image understanding (jointly trained visual/text embeddings per OpenRouter description).
- **Pricing (as of 2026-10-23):** DeepSeek hosted $0.30 in / $1.20 out per 1M peak, $0.15/$0.60 off-peak (repo meta; matches AA's median-across-providers for the family); OpenRouter provider lane $0.07/$0.50. Conflicting rates compared — hosted peak used for scoring, the cheaper OpenRouter lane noted.
- **Architecture:** 552B total / 16B active sparse MoE (OpenRouter notes an asymmetric CED split: 8B active on input, 16B on output); compressed KV caching (~¼ of prior Flash generation); MIT license, open weights on Hugging Face (`deepseek-ai/DeepSeek-V4.1-Flash-1017`).

### Raw benchmarks found

> Mixed provenance, labelled per the 1017-snapshot identity: rows from the official **1017 model card**, rows inherited from the **Sept-10 V4.1-Flash base card** (family/lineage data — the snapshot supersedes it), and **independent** rows (AA, Vals AI, third-party leaderboards). Conflicting results for the same benchmark are listed side by side.

Agent / tool use:

- Terminal-Bench 4.0: **42.30%** (1017 model card, via BenchLM)
- Terminal-Bench 2.1: **90.6%** (base V4.1-Flash card, via BenchLM) — **vs 74.5% independent** (Vals AI leaderboard, `deepseek_deepseek-v4.1-flash`): large vendor-vs-independent gap, both listed
- terminalBench3: **30%** (base card, via BenchLM)
- AutomationBench: **60.5%** (1017 card) / **68.9%** (AA harness)
- Agents' Last Exam: **35.4%** (1017 card)
- GDPval-AA: **55.0%** (AA, BenchLM-normalized)
- AA ITBench: **46.9%** (AA)
- CWE-bench v1: **55.0%** (Collinear leaderboard)
- CyberGym: **88.1%** / ExploitGym: **15.3%** (base card, via BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (base card, via BenchLM)
- HLE: **42.6%** (1017 card) — vs **63.9%** HLE w/ tools (base card) — vs **39.2%** AA-HLE (AA harness; three variants differ by tools/harness, all listed)
- AA-LCR: **84.0%** (AA)
- CritPt: **14.3%** (AA)
- Artificial Analysis Intelligence Index: **39.5** (AA; the deprecated Sept-10 base page shows 39, #10/121 open-weight class at release)
- AA-Omniscience Accuracy / Index: **46.4% / -5.3%** (AA) — weak knowledge-reliability signal (hallucination-prone)
- FrontierMath v2 (Tiers 1-3 / Tier 4): **67.4% / 26.8%** (Epoch AI)
- Apex: **65.6%** (base card); Codeforces: **3471** (base card)
- STEMBench: **2.49** (Ulam audit snapshot 2026-10-14)
- BenchLM overall: **65.66, #35 of 989** (46/670 benchmarks covered; conservative per BenchLM)

Coding:

- DeepSWE: **77.0%** (1017 model card, via BenchLM)
- NL2Repo: **68.2%** (1017 card)
- ProgramBench: **29.1%** (1017 card)
- AA-SciCode: **51.9%** (AA)
- OpenHarmony Bench: **60.3%** (official leaderboard)
- Bug Hunt Bench: **39.1 fixes** (public data)
- Design Arena Website: **1323** (OpenRouter benchmarks)

Long context / multimodal:

- AA-LCR **84.0% at 1M** (AA) — no MRCR figure published; 84% long-context reasoning at window
- AA-MMMU-Pro: **77.0%** (AA)
- ExtractBench: **87.11%** / ParseBench: **65.72%** (LlamaIndex leaderboards, 2026-10-20 snapshot)
- Chartography (tools): **83.0%** / BabyVision w/ Python: **92.5%** / ZeroBench w/ Python: **51.0%** (1017 card)

### Normalized scores (1–100)

- **Tool use: 72/100.** AutomationBench-AA 68.9%, GDPval-AA 55%, ITBench 46.9%, CWE-bench 55% form a consistent upper-mid agentic band; capped by Terminal-Bench 4.0 42.3% (1017 card) and the independent Vals TB2.1 74.5% sitting well below the vendor's 90.6% claim.
- **Reasoning: 72/100.** GPQA-D 90.9% and HLE 42.6% are frontier-adjacent, AA-LCR 84% strong; capped by CritPt 14.3%, a negative AA-Omniscience Index (-5.3%, hallucination-prone knowledge) and AA Intelligence Index 39.5 (frontier ref 60+).
- **Context window: 96/100.** Verified 1M total / 384K out across AA, models.dev and vendor docs (≥1M tier); AA-LCR 84% at 1M keeps it under the 98%-retrieval 100 bar.
- **Multimodal: 68/100.** Text + image in, text out (60–70 band); strong measured image work (MMMU-Pro 77%, ExtractBench 87.1%, BabyVision 92.5%) lifts it within the band; no video/audio/PDF input.
- **Coding: 84/100.** DeepSWE 77.0% clears the 74% frontier reference; NL2Repo 68.2% and AA-SciCode 51.9% back it up; capped by ProgramBench 29.1% and moderate Bug Hunt / OpenHarmony rows.
- **Cost efficiency: 94/100.** $0.30/$1.20 peak hosted (off-peak $0.15/$0.60); cheaper than the $0.60/$2.20 ≈ 92 reference, well above $1.25/$4.25 ≈ 88; the $0.07/$0.50 OpenRouter lane and Zen free id would score higher.
- **Overall Score: 78/100.** (72+72+96+68+84)/5 = 78.4 → 78. Best-fit recommendation: the value pick of the V4.1 family — near-frontier coding (DeepSWE 77%) and 1M context at Flash pricing; prefer stronger tool-use models for complex terminal-agent work.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-23
- Method: public internet research (official DeepSeek API docs, BenchLM 46-row tracker, Artificial Analysis model page, OpenRouter catalog + benchmarks, models.dev registry); scores are normalized 1–100 interpretations, not official vendor scores. Vendor-card, base-card (lineage), and independent harness rows are labelled; conflicting numbers are listed side by side, never averaged silently.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
