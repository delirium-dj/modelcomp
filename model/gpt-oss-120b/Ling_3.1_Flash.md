# GPT-OSS-120B — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / gpt-oss-120b
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** gpt-oss-120b
- **Short description:** OpenAI's larger open-weight reasoning model — 116.8B total / 5.1B active MoE with MXFP4 quantization, designed to run on a single 80GB GPU; near-parity with o4-mini on core reasoning benchmarks.
- **Provider / access:** OpenAI — Hugging Face (`openai/gpt-oss-120b`; 4.5M downloads last month), GitHub (`openai/gpt-oss`), Responses API compatible; third-party hosting (Fireworks priority, EdenAI Flex, OpenRouter batch, etc.). Companion gpt-oss-20b (20.9B/3.6B, 16GB memory) not scored here.
- **Release / knowledge:** 2025-08-05 ("Introducing gpt-oss"). Knowledge cutoff May 31, 2024 (AA).
- **IDs:** `gpt-oss-120b`; folder `gpt-oss-120b`.
- **Context window:** 128,000 tokens native (131K per AA); max output 66K (ModelBenchmark).
- **Modalities:** Text in, text out.
- **Pricing (as of 2026-10):** $0.15 / $0.60 per 1M input/output (median across providers, AA; blended $0.20/M at 7:2:1); Fireworks priority $0.18/$0.72; OpenRouter batch $0.15/$0.60; some hosts as low as $0.037/$0.17 (EdenAI Flex); cache read $0.075, cache write $0.18 (typical). AA evaluation cost: $95.05.
- **License:** Apache 2.0 (plus the gpt-oss usage policy).
- **Architecture:** Autoregressive MoE transformer building on GPT-2/GPT-3 architectures; 36 layers; MLP 114.71B + attention 0.96B + embed/unembed 1.16B; alternating dense and locally banded sparse attention (GPT-3-style); grouped multi-query attention (group size 8); RoPE; MoE weights post-trained with MXFP4 quantization (4.25 bits/parameter; checkpoint 60.8GiB; MoE is 90%+ of parameters).
- **Reasoning effort:** low / medium / high (adjustable); full chain-of-thought; structured outputs; tool use (web search, Python code execution).

### Raw benchmarks found

**Vendor-reported (model card, arXiv 2508.10925; reasoning level high, default system prompt, pass@1; all evals with MXFP4 quantization):**
- AIME 2024: **95.8%** (no tools) / 96.6% (with tools); AIME 2025: **92.5%** (no tools) / 97.9% (with tools).
- GPQA Diamond: **80.1%** (no tools) / 80.9% (with tools).
- HLE: **14.9%** (no tools) / 19.0% (with tools).
- MMLU **90.0%**; MMMLU 81.3%.
- SWE-Bench Verified **62.4%** (high; medium 52.6%, low 47.9%).
- Tau-Bench Retail **67.8%**; Tau-Bench Airline **49.2%**.
- Aider Polyglot **44.4%**.
- HealthBench 57.6%; HealthBench Hard 30.0%; HealthBench Consensus 89.9%.
- Codeforces Elo: **2463** (no tools) / 2622 (with tools).
- Positioning: surpasses o3-mini and matches/exceeds o4-mini on Codeforces, MMLU, HLE, and TauBench; better than o4-mini on HealthBench and AIME 2024/2025; gpt-oss-20b matches/exceeds o3-mini despite 6x smaller size.

**Other:**
- Laguna XS 2.1's comparison table (official leaderboards): gpt-oss-120B SWE-Bench Pro **16.2%**, Terminal-Bench 2.0 **18.7%** — weak agentic rows vs its SWE-bench Verified 62.4% (harness-dependent; flagged).
- Artificial Analysis (independent): Intelligence Index **24** (well above average; median 9); 88M tokens generated on the Index (somewhat verbose vs median 57M); "notably fast".

## Scores

- **Tool use: 67/100.** Tau-Bench Retail 67.8% and Airline 49.2%, SWE-bench Verified 62.4% (agentic), native web search and Python code execution, Responses API compatibility; offset by Terminal-Bench 2.0 18.7% (official leaderboard) and SWE-Bench Pro 16.2%.
- **Reasoning: 71/100.** AIME 2024/2025 95.8%/92.5% (no tools) and GPQA Diamond 80.1% are strong; HLE 14.9% is the weak row; MMLU 90.0%; Codeforces 2463.
- **Context window: 69/100.** 128K native (131K per AA); no long-context retrieval benchmark captured.
- **Multimodal: 15/100.** Text-only per the model card ("these text-only models").
- **Coding: 63/100.** SWE-bench Verified 62.4%, Aider Polyglot 44.4%, Codeforces 2622 (with tools); the weak official-leaderboard rows (SWE-Bench Pro 16.2%, TB 2.0 18.7%) are reported and flagged — likely harness/effort-dependent, but not averaged away.
- **Cost efficiency: 89/100.** $0.15/$0.60 per 1M median (blended $0.20/M), Apache 2.0, single-80GB-GPU deployment, some hosts at $0.037/$0.17.
- **Overall Score: 57.0/100.** Mean of Tool use 67, Reasoning 71, Context window 69, Multimodal 15, Coding 63 = 57.0.

> **Gap vs folder average (59.0): −2.0.** In agreement with the peer set. The two weak official-leaderboard rows (SWE-Bench Pro 16.2%, TB 2.0 18.7%) versus the strong model-card rows (SWE-bench Verified 62.4%, Tau-Bench Retail 67.8%) are a genuine harness/effort discrepancy — both are reported; the score weights the model-card methodology (disclosed sampling, MXFP4) more heavily.

## Notes

- Verification trail: OpenAI announcement "Introducing gpt-oss" (2025-08-05; positioning; license; deployment targets), model card (arXiv 2508.10925; full parameter breakdown; benchmark tables at low/medium/high; MXFP4 methodology; HealthBench), HF `openai/gpt-oss-120b` (downloads; MXFP4 note; companion 20b), Artificial Analysis (Intelligence Index 24; 131K; May 2024 cutoff; $0.15/$0.60 median; $95.05 eval cost; verbosity), ModelBenchmark (131K/66K; price ladder across hosts), Laguna XS 2.1 comparison table (gpt-oss-120B SWE-Bench Pro 16.2%, TB 2.0 18.7% from official leaderboards).
- Known conflicts: SWE-bench Verified 62.4% (model card, high effort) vs SWE-Bench Pro 16.2% / TB 2.0 18.7% (official leaderboards) — different benchmarks and harnesses, not directly comparable; reported as-is.
- Open questions: why the leaderboard agentic rows diverge so far from the model card; long-context retrieval rows; post-MXFP4 quality delta.

Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03

Future sources: independent agentic replications, long-context benchmarks, leaderboard methodology notes.
