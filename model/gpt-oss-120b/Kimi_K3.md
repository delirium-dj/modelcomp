# GPT-OSS 120B — findings by Kimi K3

- Source: OpenAI / GPT-OSS 120B (`gpt-oss-120b`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS 120B
- **Short description:** OpenAI's larger open-weight release (117B MoE, 5.1B active per token) under Apache 2.0 — a reasoning model with strong tool use for its size and near-parity with o4-mini on core reasoning at launch. Viable for simple assistant/coding tasks at self-host cost; 2026 measurements show it well behind both frontier APIs and newer open peers on agentic and knowledge dimensions.
- **Provider / access:** open weights (Apache 2.0 license + gpt-oss usage policy; Hugging Face `openai/gpt-oss-120b`); hosted at many providers (OpenRouter, Fireworks, Together, Groq etc.); Responses-API-compatible serving; ships with agentic tool patterns (web search, python/code interpreter, function calling).
- **Release / knowledge:** released 2025-08-05 (OpenAI "Introducing gpt-oss"); knowledge cutoff not verified in retrieved sources.
- **IDs:** `openai/gpt-oss-120b` (HF/OpenRouter; no Zen Free ID verified).
- **Context window:** 128K tokens (131,072 per llm-stats; benchlm.ai 128K class).
- **Modalities:** text in / text out only (model card: "text-only"); reasoning yes (low/medium/high effort, full chain-of-thought accessible); tool calls; structured outputs.
- **Pricing (as of 2026-09-29):** free as weights (single 80GB GPU via MXFP4 quantization); hosted rates from ~$0.03–0.04 / $0.15–0.17 per 1M in/out (llm-stats.com, benchmarklist.com) — varies by provider.
- **Architecture:** open-weight 116.8B-parameter Mixture-of-Experts, 5.1B active per token (llm-stats / llmleaderboard summaries of the arXiv 2508.10925 model card).

### Raw benchmarks found

Agent / tool use:

- τ²-bench (Telecom): **65.8%** pass^1 (Official, evals.report; matches benchlm.ai)
- GDPval: **947 Elo** (Official, evals.report); GDPval-AA: **745 Elo** (4.8% normalized); AA Agentic Index: **6.2%**; APEX-Agents-AA: **3.1%**; Gert Labs: **29.6%** (benchlm.ai)
- MCP-Universe: **25.54%** success (evals.report)
- LMArena: **1365 Elo** (evals.report)
- Terminal-Bench 2.x / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **75.8%** (Official, evals.report); AA run **78.2–78.3%** (benchlm.ai / airank)
- AIME (OTIS Mock): **88.9%** (Official, evals.report); MMLU-Pro: **80.8%**; Global-MMLU: **82.8%** (evals.report)
- HLE (AA-HLE): **19.6%** (benchlm.ai)
- AA-LCR: **52.0%**; CritPt: **1.1%**; MultiChallenge: **45.3%** (benchlm.ai / evals.report)
- Artificial Analysis Intelligence Index: **33.3** (evals.report, unverified) / **11.6** (benchlm.ai AA row — harness differences); BenchLM overall **37.73/100, #133 of 512** (2026-09-28)
- Epoch Capabilities Index: **140.8** (Official, evals.report); benchmarklist ECI **120.72** (#140/398, open-weights #59/158)
- AA-Omniscience Index: **−49** — accuracy 21.8% / hallucination 90.8% (benchlm.ai / evals.report); AA-IFBench: **69.0%**; Vectara Hallucination Rate **14.2%**

Coding:

- SWE-bench Pro: **16.2%** (Official, evals.report); SWE-bench Verified: no verified public score found
- LiveCodeBench Pro: **1299 Codeforces Elo** (Official, evals.report); LiveCodeBench: **87.8%** pass@1 (unverified, evals.report)
- Aider Polyglot: **41.8%** (Official, evals.report)
- React Native Evals: **71.6%**; AA-SciCode: **34.0%** (SciCode 38.9% unverified on evals.report); AA Coding Index: **30.4**; WeirdML: **48.2%** (benchlm.ai / evals.report)

Long context:

- AA-LCR 52.0% within the 128K window (benchlm.ai).

Multimodal:

- Design Arena Website: **979 Elo** (benchlm.ai) / **1017** (evals.report); text-only model — no vision/audio rows.

### Normalized scores (1–100)

- **Tool use: 52/100.** τ² 65.8% okay for open weights; capped by GDPval-AA 745 and AA Agentic Index 6.2% — not agent-ready by 2026 standards.
- **Reasoning: 55/100.** GPQA ~76–78%, AIME 88.9%, MMLU-Pro 80.8% decent static QA; capped by HLE 19.6%, CritPt 1.1%, hallucination 90.8% (AA-Omniscience).
- **Context window: 50/100.** 128K window (128K class → 50s band) with mediocre LCR 52.0%.
- **Multimodal: 30/100.** Text-only by design; single Design Arena row; no vision-suite rows.
- **Coding: 52/100.** React Native 71.6% and LCB 87.8% (unverified) fine; capped by SWE-bench Pro 16.2%, Aider 41.8%, Coding Index 30.4.
- **Cost efficiency: 90/100.** Open weights (Apache 2.0, 117B/5.1B-active MoE) — free self-host on a single 80GB GPU; hosted from ~$0.03/$0.15 per 1M.
- **Overall Score: 48/100.** Mean of the five quality dims (52+55+50+30+52)/5 = 47.8 → 48. Best fit: offline/self-hosted baselines and fine-tuning fodder; superseded by GLM/Qwen open models at similar cost.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (OpenAI "Introducing gpt-oss" post, arXiv 2508.10925 model card abstract, llm-stats/llmleaderboard spec pages, evals.report 25-row scorecard, benchlm.ai); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: confirmed 2025-08-05 release, Apache 2.0 license, 116.8B/5.1B-active MoE architecture, text-only + reasoning (corrected prior "non-reasoning base" note), single-80GB-GPU deployability, hosted rates ~$0.03/$0.15–$0.04/$0.17; added evals.report rows (SWE-bench Pro 16.2%, AIME 88.9%, GPQA 75.8%, Aider 41.8%, LiveCodeBench Pro 1299 Elo, MCP-Universe 25.5%, LMArena 1365); refreshed BenchLM rank (#133 of 512); scores unchanged (48 overall confirmed as honest mid-tier 2026 placement).
- Future sources: add a new file next to this one using the same headings.
