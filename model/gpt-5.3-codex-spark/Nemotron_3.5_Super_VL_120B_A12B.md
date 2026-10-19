# GPT-5.3-Codex-Spark — findings by Nemotron 3.5 Super VL 120B A12B

- Source: openai.com/index/introducing-gpt-5-3-codex-spark (official launch blog, 2026-02-12), developers.openai.com/api/docs/models/gpt-5.3-codex (official API docs), zdnet.com (third-party review), opencode.ai/data/compare pages (vs GPT-5.6 Luna), benchlm.ai/models/gpt-5-3-codex-spark + benchlm.ai comparisons (vs GPT-5.4 Pro, Qwen3.6-35B-A3B, Gemini 3.8 Flash, Claude Opus 5), github.com/zakmandhro/codex-model-benchmarks (independent latency test)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3-Codex-Spark (OpenAI)
- **Short description:** Smaller, ultra-fast variant of GPT-5.3-Codex designed for real-time coding in Codex; first model of the OpenAI–Cerebras partnership; served on Cerebras Wafer Scale Engine 3 delivering >1,000 tokens/s; text-only; 128K context at launch (benchlm lists 256K — conflict, see below); research preview for ChatGPT Pro users; not a replacement for GPT-5.3-Codex but a complementary low-latency tier.
- **Provider / access:** OpenAI Codex (research preview, ChatGPT Pro), Cerebras WSE-3 hardware.
- **Release / knowledge:** Released 2026-02-12; knowledge cutoff not stated.
- **IDs:** `gpt-5.3-codex-spark` (OpenAI/opencode.ai); `openai/gpt-5-3-codex-spark` (opencode.ai data).
- **Context window:** Conflicting — OpenAI launch blog states 128K at launch; benchlm.ai model page lists 256K. Treat 128K as authoritative (OpenAI).
- **Modalities:** Text in, text out (text-only — NOT multimodal); reasoning yes; tool calls yes; structured outputs yes; minimal targeted edits by default; does not auto-run tests unless asked.
- **Pricing (as of 2026-10-16):** opencode.ai/data lists $1.75/M input, $14/M output (same as GPT-5.3-Codex); benchlm lists "Pricing unavailable". Not officially confirmed by OpenAI in fetched sources.
- **Architecture:** Smaller distilled variant of GPT-5.3-Codex; parameter count undisclosed.

### Raw benchmarks found

OpenAI blog states "strong performance" on SWE-Bench Pro and Terminal-Bench 2.0 "in a fraction of the time compared to GPT-5.3-Codex" but publishes no numeric scores for Spark itself. ZDNet confirms Spark underperforms GPT-5.3-Codex on these benchmarks but is much faster. Independent latency test (zakmandhro/codex-model-benchmarks, Sep 8 2026): Spark high effort TTFT 8.3s, delivered TPS 1,885, total 8.9s; xhigh TTFT 6.8s, TPS 1,458, total 7.5s — far faster than GPT-5.6 Sol/Terra/Luna and GPT-6 Astra (56–400s total).

Agent / tool use: No numeric SWE-Bench Pro / Terminal-Bench 2.0 scores published for Spark (only qualitative "strong performance"); opencode latency test shows task completion before GPT-6 Astra emits first code token.

Reasoning / knowledge: No published MMLU/GPQA/HLE/AIME scores.

Coding: Qualitative strong performance on SWE-Bench Pro + Terminal-Bench 2.0 vs GPT-5.3-Codex; no numbers.

Multimodal & grounded: Text-only — NOT multimodal.

Long context: 128K (OpenAI) vs 256K (benchlm) conflict; no retrieval score.

Instruction following: No published IFEval/BBH scores.

### Conflicting results noted

- **Context window:** OpenAI blog: 128K; benchlm.ai: 256K — OpenAI taken as authoritative.
- **Scores:** OpenAI gives no numeric benchmark scores for Spark (only "strong performance … in a fraction of the time"); ZDNet explicitly notes Spark underperforms GPT-5.3-Codex on SWE-Bench Pro/Terminal-Bench 2.0. benchlm.ai has 0 benchmark rows ("coverage coming soon").
- **Pricing:** Not officially published; opencode.ai/data lists GPT-5.3-Codex pricing ($1.75/$14) — unverified for Spark.

### Normalized scores (1–100)

**Evidence base is minimal** (no published benchmark numbers; only qualitative OpenAI claims + one independent latency test). Dimensional scores are low-confidence best estimates anchored to the latency/throughput strength and the codex-specialist positioning.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 55/100.** Tool calling supported; designed for real-time interactive coding with interruption/redirection; no scored agent benchmarks published.
- **Reasoning: 55/100.** "Highly capable small model" per OpenAI but no reasoning benchmark numbers published; reasoning-effort settings exist (low/medium/high per opencode).
- **Context window: 70/100.** Declared 128K (OpenAI) / 256K (benchlm, unverified); no retrieval score.
- **Multimodal: 50/100.** Text in / text out only — NOT multimodal.
- **Coding: 65/100.** Strong real-time coding positioning, >1,000 tok/s, sub-9s task completion in independent test; but SWE-Bench Pro/Terminal-Bench 2.0 scores unpublished and acknowledged below GPT-5.3-Codex.
- **Cost efficiency: 75/100.** Cerebras WSE-3 deployment yields extreme speed/token efficiency; not counted toward Overall.
- **Overall Score: 59/100.** Half-up mean of (55 + 55 + 70 + 50 + 65) / 5 = 59.0 → 59, with low confidence; treat as a speed-optimized codex specialist, not a general benchmark leader.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official OpenAI launch blog + API docs + ZDNet review + opencode.ai/data + independent Codex latency test + benchlm.ai); scores are normalized 1–100 interpretations, not official vendor scores. Benchmark numbers for Spark are unpublished — scores are low-confidence estimates.
- Future sources: if OpenAI publishes Spark benchmark numbers, add a new file next to this one using the same headings.
