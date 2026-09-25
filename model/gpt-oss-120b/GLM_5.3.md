# GPT-OSS 120B — findings by GLM 5.3

- Source: OpenAI (`gpt-oss-120b`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS 120B
- **Short description:** OpenAI's most powerful open-weight model (August-2025 release): a 117B/5.1B MoE that fits on a single H100, with configurable reasoning effort and Apache 2.0 licensing. Top use case: self-hosted agentic/text work on one GPU.
- **Provider / access:** open weights `openai/gpt-oss-120b` on Hugging Face (Apache 2.0); OpenAI Responses API (rate limits currently zeroed on the API tiers — effectively weights-only now); third-party hosts vary.
- **Release / knowledge:** released August 2025; knowledge cutoff June 1, 2024 (OpenAI model docs).
- **IDs:** `openai/gpt-oss-120b` (no OpenCode Zen Free ID; open weights are freely self-hostable).
- **Context window:** 131,072 total, 131,072 max output (OpenAI model docs). Verified.
- **Modalities:** text in / text out; reasoning yes (configurable effort low/medium/high, full chain-of-thought); tool calls yes (function calling, code_interpreter, MCP, web_search via Responses); structured outputs yes.
- **Pricing (as of 2026-09-25):** no current OpenAI API price verified (API rate limits zeroed); Apache 2.0 open weights = $0 license, single-H100 self-host; third-party hosted pricing varies.
- **Architecture:** MoE, 117B total / 5.1B active (OpenAI model docs); MXFP4-quantized weights per the HF release.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: **65.8%** (BenchLM)
- GDPval-AA: **745 Elo** (BenchLM; normalized field 4.8% — low band)
- Gert Labs: **29.6%** (BenchLM)
- APEX-Agents-AA **3.1%**, AA Agentic Index **6.2%** (BenchLM)
- Terminal-Bench / Tau3 / Toolathlon / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **78.2%** (BenchLM, AA-GPQA — mid band)
- HLE: **19.6%** (BenchLM, AA-HLE — weak)
- LCR / MLCR: AA-LCR **52.0%** (BenchLM); MLCR no verified public score found
- CritPt: **1.1%** (BenchLM)
- Artificial Analysis Intelligence Index: **11.6** (BenchLM)
- Omniscience: Index **-49.2**, Accuracy **21.8%**, hallucination-rate field **90.8%** (BenchLM; label ambiguous vs AA's "Non-Hallucination Rate" — flagged, not double-counted)
- AA-IFBench: **69.0%** (BenchLM)

Coding:

- AA Coding Index: **30.4%** (BenchLM); AA-SciCode **34.0%** (BenchLM)
- React Native Evals: **71.6%** (BenchLM)
- Design Arena Website Elo: **979** (BenchLM)
- SWE-bench / LiveCodeBench / Vibe Code Bench: **no verified public score found**

Long context:

- AA-LCR 52.0% (BenchLM) at the 131K window; no MRCR/RULER per-length data — no long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 45/100.** Native function calling/MCP/code-interpreter are verified platform features and τ² 65.8% is decent, but GDPval-AA 745, Gert Labs 29.6%, and AA Agentic Index 6.2% are low — a 2025-era agent, far off current leaders.
- **Reasoning: 48/100.** GPQA 78.2% is mid-band but HLE 19.6%, CritPt 1.1%, an AA Index of 11.6 and a -49.2 Omniscience Index (very weak knowledge reliability) drag it down; configurable high-effort reasoning helps in practice but has no verified independent numbers.
- **Context window: 55/100.** 131K verified sits in the 100K–200K tier (50–64); no retrieval-quality data.
- **Multimodal: 15/100.** Text in/out only (per template: 15 if text-only).
- **Coding: 40/100.** AA Coding Index 30.4% and AA-SciCode 34.0% are weak; React Native 71.6% and Design Arena 979 are the only brighter spots — not an agentic-coding contender in 2026.
- **Cost efficiency: 88/100.** Apache 2.0 with a $0 license on a single H100 is excellent self-host economics; no verified hosted price tempers it slightly.
- **Overall Score: 41/100.** Half-up mean of the five quality dims (45+48+55+15+40)/5 = 40.6 → 41 — a dated but permissive single-GPU open-weights baseline; useful for self-hosted experimentation, outclassed by 2026 open models on every dimension.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (OpenAI model docs, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
