# Mistral Small 4 — findings by MiMo 2.6 Flash

- Source: Mistral AI (`mistral-small-4` / `mistralai/mistral-small-2603`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Small 4
- **Short description:** Mistral AI's open-weight hybrid small model that unifies instruct, reasoning (Magistral), multimodal (Pixtral) and agentic coding (Devstral) capability in one 119B MoE system with per-request `reasoning_effort` control. Not a variant of another tracked entry — it is its own release in the Mistral Small line.
- **Provider / access:** Mistral API / AI Console (`mistral-small-2603`, Chat Completions style), self-host via Hugging Face `mistralai/Mistral-Small-4-119B-2603`, vLLM / SGLang / llama.cpp, NVIDIA NIM and build.nvidia.com; also served by Venice (`mistralai/mistral-small-2603`). The dataset entry carries ID `opencode/mistral-small-4` (OpenCode Zen route) — that route was not independently verifiable in the public Zen / models.dev catalog on 2026-11-06.
- **Release / knowledge:** 2026-03-16 (official announcement); no public knowledge-cutoff date published.
- **IDs:** `mistralai/mistral-small-2603` (API), `mistralai/Mistral-Small-4-119B-2603` (weights), dataset `opencode/mistral-small-4` — no Free ID verified on Zen as of 2026-11-06.
- **Context window:** 256,000 tokens input / 256,000 output (llm-stats provider table; vLLM recipe uses `--max-model-len 262144`), image input supported.
- **Modalities:** text + image in; text out; reasoning yes (configurable `reasoning_effort="none"|"high"`); tool calls / native function calling yes; JSON mode and structured outputs yes.
- **Pricing (as of 2026-11-06):** $0.15 per 1M input, $0.60 per 1M output (Mistral API; cache read $0.015 = 90% cache discount; Artificial Analysis cost per Intelligence Index task $0.04). Paid only — no $0 tier verified.
- **Architecture:** 119B total / 6.5B active parameters, MoE with 128 experts and 4 active per token (Mistral blog states 6B active, 8B including embedding/output layers), open weights under Apache 2.0.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found".

Agent / tool use:

- Terminal-Bench (2.1 / 4.0): no verified public score found (Artificial Analysis runs it inside its Intelligence Index but publishes no per-model value for this model)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **71.2%** (Hugging Face eval results on `Idavidrein/gpqa` leaderboard for `Mistral-Small-4-119B-2603`)
- HLE: no verified public score found
- LCR / MLCR: **0.72** on AA LCR with ~1.6K output characters (Mistral announcement + HF model card, vs GPT-OSS 120B and Qwen peers)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **4** (v5.0.1; class median 5 for medium open-weights models — model ranks at the lower end of its class, AA model page)
- Omniscience Accuracy / Hallucination Rate: no verified public score found; Benchable aggregate Hallucinations accuracy **66%** (15th percentile)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found as an absolute number — vendor states Small 4 with reasoning "outperforms GPT-OSS 120B while producing 20% less output" (charts only)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- Benchable aggregate Coding accuracy: **93%** (83rd percentile, "most accurate among models of comparable speed"); Mathematics **92%**; Ethics **99%**; Instruction Following **52%**

Long context:

- no long-context retrieval (MRCR / RULER / GraphWalks) value reported for this model

Speed / cost observations:

- Artificial Analysis: time to first answer token 13.04 s, output speed 142 tok/s, 1.7 min per Intelligence Index task (class median 4.6), $0.04 per task
- Vendor: 40% lower end-to-end completion time and 3x requests/second vs Mistral Small 3 in optimized setups; minimum 4x H100 / 1x DGX B200

### Normalized scores (1–100)

- **Tool use: 58/100.** Native function calling, JSON output and agentic positioning are documented, but no Terminal-Bench / Tau3 / GDPval figure exists for this model — capped by the missing tool-use evidence rather than by any measured weakness.
- **Reasoning: 62/100.** GPQA Diamond 71.2% and AA LCR 0.72 sit in the mid band of the methodology (GPQA 60–80% → 55–65), offset by a low AA Intelligence Index (4, below the class median of 5); capped by the weak composite-index showing and no HLE/CritPt data.
- **Context window: 73/100.** 256K falls in the 200K–500K tier (65–84; 200K = 70), above the 200K anchor but far below the 500K+/1M tiers.
- **Multimodal: 65/100.** Text + image in, text out — exactly the "+image in" band (60–70); no video/PDF/audio input published.
- **Coding: 72/100.** Benchable's 93% aggregate coding accuracy (83rd percentile) and a vendor LiveCodeBench win over GPT-OSS 120B are strong, but no SWE-bench Verified / DeepSWE / Terminal-Bench number is published, so it stays mid-band.
- **Cost efficiency: 95/100.** $0.15/$0.60 per 1M with a 90% cache-read discount and $0.04 per index task — cheaper than the ~$0.60/$2.20 ≈ 92 reference point; only paid access keeps it below the free-tier 100.
- **Overall Score: 66/100.** Mean of the five quality dims (58 + 62 + 73 + 65 + 72) / 5 = 66.0 — a fast, cheap, open 256K multimodal workhorse for mid-complexity coding and reasoning, not a frontier-reasoning or long-context pick.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi MiMo-V2.6-Flash)** — 2026-11-06
- Method: fresh public web research (official Mistral announcement, Hugging Face model card + eval results, Artificial Analysis model page, LLM Stats, Benchable); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Mistral Small 4 (Mistral AI announcement)](https://mistral.ai/news/mistral-small-4/)
  - [mistralai/Mistral-Small-4-119B-2603 (Hugging Face model card)](https://huggingface.co/mistralai/Mistral-Small-4-119B-2603)
  - [GPQA Diamond leaderboard entry for Mistral-Small-4-119B-2603 (71.2)](https://huggingface.co/datasets/Idavidrein/gpqa)
  - [Artificial Analysis — Mistral Small 4 (Reasoning)](https://artificialanalysis.ai/models/mistral-small-4)
  - [LLM Stats — Mistral Small 4 benchmarks, pricing, context](https://llm-stats.com/models/mistral-small-latest)
  - [Benchable — Mistral Small 4 performance summary](https://benchable.ai/models/mistralai/mistral-small-2603)
  - [Mistral docs — model card mistral-small-4-0-26-03](https://docs.mistral.ai/models/mistral-small-4-0-26-03)
