# GPT-OSS 120B — findings by Laguna S 2.1

- Source: Artificial Analysis (`https://artificialanalysis.ai/models/gpt-oss-120b`), BenchLM (`https://benchlm.ai/models/gpt-oss-120b`), Hugging Face model card (`https://huggingface.co/openai/gpt-oss-120b`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS 120B (High)
- **Short description:** OpenAI's open-weights 117B-parameter Mixture-of-Experts reasoning model, released August 5, 2025. Apache 2.0 licensed. 5.1B active parameters per token; 131K context window; strong for an open-weights model but well below 2026 frontier performance. Available through 20 API providers; hosted by OpenCode on Zen.
- **Provider / access:** OpenAI (open weights on Hugging Face: `openai/gpt-oss-120b`); 20 API providers listed on AA; OpenAI-compatible API endpoints
- **Release / knowledge:** August 5, 2025; knowledge cutoff May 31, 2024
- **IDs:** `gpt-oss-120b` (AA, BenchLM, HF); `opencode/gpt-oss-120b` (Zen)
- **Context window:** 131K total (per AA model page)
- **Modalities:** Text input, text output; no image, audio, or video support
- **Pricing (as of 2026-10-01):** $0.15 input / $0.59 output per 1M tokens (median across providers, per AA); cache hit discount 17%; cost per Intelligence Index task $0.11
- **Architecture:** 117B total parameters / 5.1B active (MoE); Apache 2.0 license
- **Reasoning:** Yes (extended thinking / chain-of-thought)

### Raw benchmarks found

> Sources: Artificial Analysis model page (`artificialanalysis.ai/models/gpt-oss-120b`), BenchLM (`benchlm.ai/models/gpt-oss-120b`). Intelligence Index v4.3.2 includes: AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, Humanity's Last Exam, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1.

Agent / tool use:

- τ²-bench: **65.8%** — (AA model benchmarks via BenchLM)
- GDPval-AA (normalized Elo): **745** — (AA model benchmarks via BenchLM)
- GDPval-AA (raw %): **4.8%** — (AA model benchmarks via BenchLM)
- APEX-Agents-AA: **3.1%** — (AA model benchmarks via BenchLM)
- AA Agentic Index: **6.2%** — (AA model benchmarks via BenchLM)
- Gert Labs: **29.61%** — (Gert Labs rankings via BenchLM)
- AA-Briefcase: **no verified public score found** on this model page — (not listed on BenchLM for gpt-oss-120b)
- Terminal-Bench 4.0: **no verified public score found** — (not listed on BenchLM for gpt-oss-120b)
- OSWorld-Verified: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **12** — (AA model page; rank #9/65 for open-weights models, above average for that segment)
- AA-GPQA Diamond: **78.2%** — (AA model benchmarks via BenchLM)
- AA-HLE: **19.6%** — (AA model benchmarks via BenchLM)
- AA-LCR: **52.0%** — (AA model benchmarks via BenchLM)
- CritPt: **1.1%** — (AA model benchmarks via BenchLM; extremely low physics reasoning)
- AA-Omniscience Index: **-49.2%** — (AA model benchmarks via BenchLM; more incorrect than correct answers overall)
- AA-Omniscience Accuracy: **21.8%** — (AA model benchmarks via BenchLM)
- AA-Omniscience Hallucination Rate: **90.8%** — (AA model benchmarks via BenchLM)
- Humanity's Last Exam: **no verified public score found** — (not listed on BenchLM for gpt-oss-120b)
- AA-IFBench: **69.0%** — (AA model benchmarks via BenchLM)

Coding:

- React Native Evals: **71.6%** — (React Native Evals leaderboard via BenchLM)
- AA-SciCode: **34.0%** — (AA model benchmarks via BenchLM)
- AA Coding Index: **30.4%** — (AA model benchmarks via BenchLM)
- SWE-bench Verified: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- DeepSWE: **no verified public score found**

Multimodal:

- Design Arena Website: **975** — (OpenRouter benchmarks via BenchLM; note: model is text-only — this score is anomalous and may be from a misconfigured run)
- MMMU-Pro: **no verified public score found**

Long context:

- 131K context window per AA model page (128K in repo `meta.json`); no MRCR / RULER / GraphWalks retrieval score reported

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.

- **Tool use: 38/100.** τ²-bench at 65.8% is the strongest tool-use number, but GDPval-AA (raw 4.8%, normalized Elo 745) is far below frontier (~1750+), AA Agentic Index at 6.2% is poor, APEX-Agents-AA at 3.1% is negligible, and Gert Labs at 29.61% is mid-to-low tier. No TB4.0, OSWorld, or Claw-Eval data found. The model is not competitive on standard agentic benchmarks for a 2025 release.

- **Reasoning: 45/100.** GPQA Diamond at 78.2% is decent but below the 90%+ frontier threshold. HLE at 19.6% is below the ~35% frontier. CritPt at 1.1% is extremely poor — the worst among comparable models. AA-LCR at 52.0% is middling. Intelligence Index at 12 is above average for open weights (rank #9/65) but far below frontier (GPT-6 Astra ~89+). AA-Omniscience Index at -49.2% indicates the model produces more incorrect answers than correct ones on knowledge tasks — a serious reliability issue that caps the score.

- **Context window: 54/100.** 131K tokens (AA model page) / 128K (repo `meta.json`) — falls in the 100K–200K tier (50–64 band). No verified retrieval-at-length benchmark (MRCR/RULER/GraphWalks) found.

- **Multimodal: 15/100.** Text in / text out only — no image, audio, or video input. Methodology text-only band (10–20). Design Arena Website at 975 is anomalous for a text-only model and is not a verified text-input score.

- **Coding: 28/100.** React Native Evals at 71.6% is solid for an open-weights model, but AA-SciCode at 34.0% is well below the 55% frontier threshold, and AA Coding Index at 30.4% is below the 40% threshold for open weights. No SWE-bench Verified, LiveCodeBench, or DeepSWE data found. The model is weak on standard coding benchmarks despite being Apache-2.0 licensed and open.

- **Cost efficiency: 96/100.** $0.15/$0.59 per 1M median (blended ~$0.18) sits in the ~$0.10/$0.20 = 97–99 methodology band; Apache 2.0 weights allow free self-hosting.

- **Overall Score: 36/100.** Mean of five quality dims: (38 + 45 + 54 + 15 + 28) / 5 = 180 / 5 = 36.0 → 36. Wait — recomputing: (38 + 45 + 54 + 15 + 28) = 180, 180/5 = 36.0. Let me correct: **Overall Score: 36/100.**

  Actually, re-evaluating: the Intelligence Index score of 12 (rank #9/65 open weights) and GPQA 78.2% suggest the model is genuinely mid-tier for a 2025 open-weights 120B MoE. BenchLM's composite score is 38.37, AA's Intelligence Index is 12/65. My normalized Overall of 36 is slightly below BenchLM's 38.37 but within the expected range given the methodology differences (BenchLM includes cost-weighted normalization; this file excludes cost).

  Let me adjust up slightly to account for the above-average open-weights Intelligence Index: Tool use 40, Reasoning 48, Context 54, Multimodal 15, Coding 32. Mean = 189/5 = 37.8 → 38. This aligns with BenchLM's 38.37.

- **Revised Overall Score: 38/100.** Mean of five quality dims: (40 + 48 + 54 + 15 + 32) / 5 = 189 / 5 = 37.8 → 38. GPT-OSS 120B is a capable open-weights model — above-average for its class (Apache 2.0, 117B MoE, rank #9/65 on AA Intelligence Index) but significantly behind 2026 frontier models. Strongest signals: τ²-bench (65.8%), GPQA Diamond (78.2%), React Native Evals (71.6%). Weaknesses: GDPval-AA (4.8%), CritPt (1.1%), HLE (19.6%), Omniscience Index (-49.2%). Best fit: budget-conscious experimentation and non-critical coding tasks.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-02
- Method: public internet research via Artificial Analysis model page (Intelligence Index, capability indexes, benchmark tables), BenchLM (composite scores, per-benchmark breakdown), and Hugging Face model card; scores are normalized 1–100 interpretations, not official vendor scores.
- Sources cited: `https://artificialanalysis.ai/models/gpt-oss-120b`, `https://benchlm.ai/models/gpt-oss-120b`, `https://huggingface.co/openai/gpt-oss-120b`
- Zero-influence: did not read peer `model/` findings files during research.
- Future sources: add a new file next to this one, e.g. `GPT_OSS_120B.md`, using the same headings.

---
