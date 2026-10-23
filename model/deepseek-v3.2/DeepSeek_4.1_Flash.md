# DeepSeek V3.2 — findings by DeepSeek 4.1 Flash

- Source: DeepSeek/DeepSeek V3.2 (`deepseek-ai/DeepSeek-V3.2`)
- Date: 2026-10-16 (UTC) — third pass (previous Signature 2026-10-05); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM (`deepseek-v3-2`, 5 rows) computes an overall **50.15/100 (#98 of 228)** and re-confirms the prior pass. **No score change.**

> **Third-pass refresh — 2026-10-16** (sources: BenchLM, Artificial Analysis, OpenRouter, DeepSeek AI Guide).
> V3.2 is a 2025 vintage superseded by DeepSeek V4, and the evidence base is stable: BenchLM now scores it **50.2/100 (#95 of 950, 16 benchmarks covered)** as a **non-reasoning** open-weight model with a **128K** context. The full row set corroborates the earlier pass (Tau²-Bench 78.9%, Claw-Eval 40.2%, VITA-Bench 18.5%, Gert Labs 29.57%, SWE-Rebench 60.9%, React Native Evals 71.5%, AA-GPQA 75.1%, AA-HLE 11.2%, AA Index 16.0, AA-LCR 45.7%, CritPt 0.9%, AA-IFBench 49.0%). New/updated this pass: **AA-Omniscience Index −46.9** (accuracy 24.0%, hallucination rate 93.3% — the hallucination figure dominates the negative index) and **Design Arena Website revised to 1176** (was 1181). No new reasoning/coding rows appeared; still no Terminal-Bench or GDPval-AA value.
> Sources: https://benchlm.ai/models/deepseek-v3-2 · https://artificialanalysis.ai/models/deepseek-v3-2 · https://openrouter.ai/deepseek/deepseek-v3.2

## Model card

- **Name:** DeepSeek V3.2
- **Short description:** DeepSeek's December 2025 open-weight MoE flagship (successor to V3.2-Exp) that unified chat and deep reasoning and introduced DeepSeek Sparse Attention for cheaper long-context inference; superseded by DeepSeek V4 on 2026-04-24.
- **Provider / access:** DeepSeek-AI. Hugging Face `deepseek-ai/DeepSeek-V3.2-Exp` (MIT-licensed open weights), official OpenAI-compatible API `https://api.deepseek.com` (legacy `deepseek-chat` / `deepseek-reasoner` IDs now route to V4-Flash and retire 2026-07-24), self-host via vLLM/SGLang. No OpenCode Zen ID (`noFreeId: true`).
- **Release / knowledge:** V3.2 official release 2025-12-01 (V3.2-Exp 2025-09-29). Knowledge cutoff not officially stated.
- **IDs:** `deepseek-ai/DeepSeek-V3.2` / `deepseek-ai/DeepSeek-V3.2-Exp`; no Free ID.
- **Context window:** **128K** per BenchLM / DeepSeek docs; OpenRouter/llm-stats list 163,840 (~164K). Max output provider-dependent.
- **Modalities:** Text in / text out only — no vision or audio. Hybrid thinking / non-thinking modes, tool calling in both modes, structured JSON output.
- **Pricing (as of 2026-10-16):** V3.2-era official rates ~$0.28 per 1M input (cache miss) / $0.42 per 1M output, cached input ~$0.022–$0.13 (trackers disagree: llm-stats $0.26/$0.38, OpenRouter $0.2088/$0.3096). Rates are historical now that V4-Flash undercuts them.
- **Architecture:** MoE, 671B total parameters (shared with V3.1-Terminus), Multi-Head Latent Attention + DeepSeek Sparse Attention (lightning indexer + top-k token selection, O(L²)→O(Lk)); MIT license; custom FlashMLA/DeepGEMM/TileLang kernels required for local serving.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: **78.9%** (Artificial Analysis)
- Claw-Eval: **40.2%** (Claw-Eval leaderboard)
- VITA-Bench: **18.5%** (VitaBench leaderboard)
- Gert Labs: **29.57%** (Gert Labs rankings)
- Terminal-Bench 2.1 / GDPval-AA: no verified public score found

Reasoning / knowledge:

- MMLU-Pro: **85.0%** (DeepSeek report / llm-stats)
- AIME 2025 (Pass@1): **89.3%** (DeepSeek report; V3.2-Exp)
- AA-GPQA Diamond: **75.1%** (Artificial Analysis)
- AA-HLE: **11.2%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **16.0** (Artificial Analysis)
- AA-LCR: **45.7%** (Artificial Analysis)
- CritPt: **0.9%** (Artificial Analysis)
- AA-IFBench: **49.0%** (Artificial Analysis)
- FrontierMath v2 Tiers 1–3: **22.1%** / Tier 4: **2.1%** (Epoch AI)
- AA-Omniscience Index **−46.9** / Accuracy **24.0%** / Hallucination Rate **93.3%** (Artificial Analysis — the very high hallucination rate drives the negative index)
- V3.2-Speciale (vendor): IOI/ICPC/IMO/CMO 2025 gold-medal claims, parity with Gemini-3.0-Pro — vendor-reported, not independently replicated

Coding:

- SWE-bench Verified: **67.8%** (DeepSeek report; V3.2-Exp)
- SWE-Rebench: **60.9%** (SWE-Rebench leaderboard)
- Codeforces rating: **2121** (DeepSeek report)
- React Native Evals: **71.5%** (rn-evals)
- Design Arena Website: **1176** (OpenRouter; revised from 1181)
- LiveCodeBench / SciCode / DeepSWE: no verified public score found

Long context:

- AA-LCR: **45.7%** (Artificial Analysis) — DSA keeps costs linear but retrieval accuracy is mid-tier

### Normalized scores (1–100)

- **Tool use: 70/100.** Tau2-Bench 78.9% is strong and V3.2 was DeepSeek's first model to fold thinking into tool use, but Claw-Eval 40.2%, VITA-Bench 18.5% and Gert 29.57% show uneven agentic reliability, and no Terminal-Bench/GDPval row exists.
- **Reasoning: 72/100.** MMLU-Pro 85.0% and AIME 2025 89.3% are excellent, but GPQA 75.1%, HLE 11.2%, FrontierMath Tier 4 2.1% and AA Index 16.0 mark a clear frontier gap (the −46.9 omniscience index reinforces the knowledge ceiling).
- **Context window: 62/100.** ~128K–164K lands in the 100K–200K band; DSA improves cost, not the usable window, and AA-LCR 45.7% shows shallow retrieval.
- **Multimodal: 15/100.** Text-only by design — no vision or audio input; DeepSeek directs vision work to its separate VL2 model.
- **Coding: 80/100.** SWE-bench Verified 67.8%, Codeforces 2121 and SWE-Rebench 60.9% are strong open-weight coding results; capped below the 74%+ frontier by the 2025 vintage and absent LiveCodeBench/SciCode evidence.
- **Cost efficiency: 93/100.** ~$0.28/$0.42 per 1M with cheap cached input and MIT-licensed self-host is strong value; superseded by V4-Flash pricing and slightly above the ~$0.10/$0.20 band that would score higher.
- **Overall Score: 60/100.** Mean of (70 + 72 + 62 + 15 + 80) / 5 = 59.8 → **60**. Best-fit: cheap long-document/RAG and coding-agent work on self-hosted MIT weights, with the text-only limitation priced in.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: public internet research; third-pass re-verification on 2026-10-16 against BenchLM (overall 50.2, #95/950), Artificial Analysis, OpenRouter and the DeepSeek AI Guide, adding the AA-Omniscience Index and a revised Design Arena row over the 2026-10-05 sources; no score dims changed. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
