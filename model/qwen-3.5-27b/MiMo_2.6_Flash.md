# Qwen3.5-27B — findings by MiMo 2.6 Flash

- Source: Alibaba/Qwen (`Qwen/Qwen3.5-27B`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-27B
- **Short description:** Alibaba Qwen Team's 27B **dense** open-weight reasoning model (the only dense member of the Qwen3.5 generation), mixing Gated DeltaNet linear attention with standard gated attention; strong science/coding performance for its size, aimed at efficient single-node and edge-adjacent deployment.
- **Provider / access:** Open weights (Apache 2.0) hosted by DeepInfra, Novita AI, Alibaba Cloud PAI-EAS / Model Studio, OpenRouter and Featherless; Chat Completions style APIs.
- **Release / knowledge:** released 2026-02-24 (LLM Stats; Puter card dated 2026-02-23); knowledge cutoff not published.
- **IDs:** `deepinfra/qwen3.5-27b`, `novita/qwen3.5-27b`, `qwen/qwen3.5-27b` (Model Studio), `qwen/qwen3.5-27b` on OpenRouter; weights `Qwen/Qwen3.5-27B`. No Free ID verified on OpenCode Zen.
- **Context window:** 262,144 tokens native (262K), extendable to 1,000,000 tokens (Puter developer card; BenchLM lists 262K); max output ~65,536 tokens (LLM Stats provider table; Puter cites ~66K).
- **Modalities:** text, image and video in; text out; reasoning model; tool calls and JSON mode yes (LLMReference capability flags).
- **Pricing (as of 2026-10-21):** DeepInfra $0.26 in / $2.60 out per 1M; Novita $0.30 / $2.40 (LLM Stats, verified 2026-10-02); a cheaper route at $0.20 / $1.56 also tracked (LLMReference). Paid open-weight model; no $0 tier verified.
- **Architecture:** 27B dense, decoder-only; 64 layers of hybrid Gated DeltaNet linear attention + gated attention; Apache 2.0 open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 (**agent**): **41.6%** (BenchLM mirror)
- Terminal-Bench Hard: **32.6%** (Puter developer card)
- OSWorld-Verified: **56.2%** (BenchLM)
- BrowseComp: **61%** (BenchLM)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **85.5%** (BenchLM; Puter card independently reports 85.8%)
- HLE (Humanity's Last Exam): **48.5%** (LLM Stats vs-Gemma comparison)
- LCR (long-context reasoning): **67.3%** (Puter card)
- MMLU-Pro: **86.1%** (BenchLM, LLMReference, LLM Stats)
- SuperGPQA: **65.6%** (BenchLM)
- Artificial Analysis Intelligence Index: **34.6** (outperforms ~78–80% of tracked models; Puter card)
- BenchLM overall point estimate: **48.9–50.0** (BenchLM compare pages)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **72.4%** (BenchLM; ties GPT-5 mini per Puter card)
- LiveCodeBench v6: **80.7%** (BenchLM, LLMReference)
- SWE-Rebench: **58.9%** (BenchLM)
- SciCode / AA-SciCode: no verified public score found
- DeepSWE: no verified public score found

Long context:

- LongBench v2: **60.6%** (BenchLM)
- LCR 67.3% at the long-context lane (Puter card); no MRCR/RULER figure at 512K+ found

Multimodal:

- MMMU: **82.3%** (BenchLM)
- MMVU: **73.3%** (BenchLM)
- MMMU-Pro: **75%** (BenchLM compare)

### Normalized scores (1–100)

- **Tool use: 64/100.** OSWorld-Verified 56.2% and BrowseComp 61% are solid mid-tier automation scores, but Terminal-Bench 2.0 41.6% / Hard 32.6% sit below the mid band and no Tau3/GDPval figures exist — capped by weak terminal-agent performance.
- **Reasoning: 86/100.** GPQA 85.5% and HLE 48.5% are near-frontier (HLE exceeds the 40%+ frontier reference), MMLU-Pro 86.1% confirms knowledge depth; the mid AA Index (34.6) and absent hallucination metrics keep it below 90.
- **Context window: 72/100.** 262,144 native tokens lands in the 200K–500K tier (200K = 70 reference); 1M extension is available but unproven at scale in public retrieval suites (LongBench v2 60.6%).
- **Multimodal: 82/100.** Text+image+video input with text output, backed by MMMU 82.3% / MMVU 73.3% — solid image/video understanding, no non-text output.
- **Coding: 78/100.** SWE-bench Verified 72.4% is near-frontier for a 27B dense model and LiveCodeBench v6 80.7% is strong; Terminal-Bench 2.0 41.6% (agentic coding) and missing DeepSWE/SciCode cap it below 80.
- **Cost efficiency: 92/100.** $0.26/$2.60 (DeepInfra) with routes down to $0.20/$1.56 — cheap open-weight serving; no free tier found.
- **Overall Score: 76/100.** Mean of (64 + 86 + 72 + 82 + 78) / 5 = 76.4 → 76. Best fit: the strongest dense ~27B open model for science QA and SWE-class coding under a 262K window; step up to Qwen3.5-122B-A10B/397B for harder agentic terminal work.

---

## Signature

- Provided by: **MiMo 2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-21
- Method: fresh public web research (BenchLM mirrors, Puter developer card, LLM Stats, LLMReference); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
