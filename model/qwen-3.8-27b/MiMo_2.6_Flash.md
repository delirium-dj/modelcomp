# Qwen3.8-27B — findings by MiMo 2.6 Flash

- Source: Alibaba Cloud / Qwen Team (`Qwen/Qwen3.8-27B`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B — the compact, deployment-friendly dense member of the Qwen3.8 open-model generation (family blog: August 2026; distinct from Qwen3.8-Max / Qwen3.8-Plus hosted entries).
- **Short description:** A dense 27B **native vision-language** model (image + video understanding, hour-scale video with config) built on Qwen3.5's architecture for coding, professional work, and long-horizon agentic tasks — with surprising punch: it beats Claude Opus 4.6 Max on SWE-bench Pro, OSWorld-Verified, IFBench, AndroidWorld, and LiveCodeBench v6 in Qwen's own harness-controlled runs.
- **Provider / access:** Hugging Face weights (Apache-2.0; 6.76M downloads/month, 1,347 community quantizations); Qwen Cloud hosted API (1M context + built-in tools, **"coming soon"** as of the card); HF Inference Providers (Novita +1); self-host via Transformers, vLLM, SGLang, TokenSpeed, llama.cpp, Ollama. No Free ID on OpenCode Zen (`noFreeId: true`).
- **Release / knowledge:** released **August 2026** (Qwen3.8 generation; citation blog Aug 2026, HF collection updated 2026-08-13); knowledge cutoff not disclosed → not scored.
- **IDs:** `Qwen/Qwen3.8-27B` (HF / model IDs); hosted ID on Qwen Cloud TBD.
- **Context window:** **262,144 tokens native**; extensible to **1,000,000** with static YaRN (`factor: 4.0`, `original_max_position_embeddings: 262144`, documented for vLLM/SGLang/TokenSpeed with caveats — static scaling can hurt shorter-text performance). Recommended outputs: reasoning up to 262,144 tokens, final response up to 131,072 within the 1M setup.
- **Modalities:** **text, image, video in**; text out; reasoning **yes — thinking on by default**, disable per request; `reasoning_effort` = **`xhigh` (default)** / `medium` / `low`; `preserve_thinking` on by default (keeps historical reasoning blocks for agent consistency + KV-cache efficiency); tool calls via standard harnesses (Chat Completions OpenAI-compatible).
- **Pricing:** open weights Apache-2.0 → self-host = hardware cost only; Qwen Cloud hosted pricing not yet published ("coming soon"); third-party hosted pricing varies (Novita etc.). No official list price to score against — evaluated as open-weights.
- **Architecture:** dense **27B** (28B safetensors BF16), 64 layers, hidden 5,120; hybrid layout `16 × (3 × (Gated DeltaNet → FFN) → 1 × (Gated Attention → FFN))` — linear-attention (Gated DeltaNet) + gated full attention; MTP (multi-token prediction) trained; vision encoder native.

### Raw benchmarks found

> All rows from the official HF model card (Qwen-run). Harnesses per card footnotes:
> SWE-bench Pro / DeepSWE / NL2Repo / QwenSWEBench / Vision2Web / SWE-MM run in the
> Claude Code harness, temp 1.0 / top_p 0.95 / 256K context; baselines re-evaluated
> on the corrected benchmark. In-house rows (QwenSWEBench, CoWorkBench, JobBench,
> RecreationBench) flagged as vendor-internal. No independent AA/Vals rows found.

Agent / tool use:

- OSWorld-Verified (computer use): **84.3%** — bold-best in Qwen's table, above Opus 4.6 Max's 72.7.
- WebArena-Verified (browser use): **64.8%**; AndroidWorld (mobile): **81.9%** (Opus 62.0).
- CoWorkBench (long-horizon office, in-house): **70.7%** (above Opus 68.2); JobBench (in-house): **33.4%**.
- Agents' Last Exam: **20.4%** Pass@1 / 42.9 score.
- ClawEval-MM (multimodal tool use): Pass@3 **57.4** / average 56.9; Vision2Web: 62.9%.
- Terminal-Bench 2.1 (Terminus): **73.0%** (Opus 4.6 Max 78.2 — capped by the incumbent).
- RecreationBench (in-house): 47.1%. Tau3 / GDPval / MCP-Atlas / Toolathlon: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **89.2%** (HF eval-results leaderboard confirmed; Opus 4.6 Max 91.3 — misses the 90+ ref by 0.8).
- HLE: **30.8%** (judged by GPT-4o; Opus 4.6 Max 40.0) — under the 40% ref.
- IFBench: **79.5%** — bold-best (beats Qwen3.7-Plus 79.1 and Opus 62.5).
- AA Intelligence Index: no verified public score found (AA has not published a row for this model).
- CritPt / LCR / Omniscience / BenchLM: no verified public score found.

Coding (vendor, harness-controlled):

- SWE-bench Pro: **61.7%** — bold-best, above Opus 4.6 Max's official 53.4 (harness caveat: Qwen re-ran baselines on the corrected benchmark; Opus number is official-report).
- LiveCodeBench v6: **90.3%** — bold-best (Opus 4.6 Max 88.8).
- QwenSWEBench (in-house, avg@3, 8h timeout): **79.0%** (Opus 63.8).
- NL2Repo-Bench: 42.3% (Opus 47.6); DeepSWE 1.1: **42.2%** (HF eval-results confirmed — well under the 74% frontier ref).
- SWE-MM (multimodal SE): 38.6%. SciCode / SWE-bench Verified / AA Coding Index / Vibe: no verified public score found.

Multimodal / vision (vendor):

- MathVision: 90.0 w/o chain inspection, **94.6 with CI**; BabyVision: 65.7 / **85.6 with CI**; CharXiv RQ: 83.7 / **90.2 with CI**.
- OmniDocBench 1.5 (documents): **91.1**; RealWorldQA: **85.9**; ERQA (embodied): 65.5.
- Vision2Web: 62.9; ClawEval-MM average 56.9 (above GPT-5.4-based rows in Qwen's set).
- Hour-scale video understanding supported natively (up to 224K video tokens with recommended config).

Long context:

- No MRCR/RULER retrieval row found. Native 262,144; YaRN path to 1M is documented (static-scaling caveats apply) but unbenchmarked → capacity documented, retrieval unproven.

### Normalized scores (1–100)

- **Tool use: 85/100.** OSWorld-Verified 84.3 is best-in-table (beats Opus 4.6 Max), AndroidWorld 81.9, WebArena 64.8, CoWorkBench 70.7 and TB2.1 73.0 form a genuinely strong agentic profile for any model size; capped at 85 by TB2.1 under the 88 ref, mid JobBench/RecreationBench rows, and no Tau3/GDPval/MCP-Atlas/Toolathlon evidence.
- **Reasoning: 77/100.** IFBench 79.5 is best-in-table and GPQA 89.2 is nearly at the 90 ref, but HLE 30.8 misses 40 by a wide margin and there is no AA Index row — knowledge/reasoning is the one dimension where it plays like a 27B.
- **Context window: 90/100.** 262,144 native = 256K tier floor; the documented YaRN path to 1M is a real architectural bonus but unbenchmarked (static-scaling caveat) → 90.
- **Multimodal: 85/100.** Text + image + video in (video band 75–90) with elite vision rows — MathVision 94.6, CharXiv 90.2, OmniDocBench 91.1, RealWorldQA 85.9, OSWorld 84.3 — held at 85 only because there's no audio, no generated-image/video output, and no long-video benchmark number.
- **Coding: 87/100.** SWE-bench Pro 61.7 beats Opus 4.6 Max, LCB v6 90.3 tops the table, QwenSWEBench 79.0 and TB2.1 73.0 are strong; capped by DeepSWE 1.1 42.2 (far under the 74 ref), NL2Repo below Opus, and no SWE-bench Verified / SciCode / AA Coding Index rows.
- **Cost efficiency: 95/100.** Apache-2.0 weights at 27B dense run on a single accelerator, 1,347 quantizations for consumer hardware, zero license friction; held 5 points off perfect only because no official hosted price exists yet to verify the API-side economics.
- **Overall Score: 85/100.** (85+77+90+85+87)/5 = 84.8 → 85 — the efficiency anomaly of the batch: a 27B that out-accounts Opus 4.6 Max on SWE-Pro and OSWorld at self-host cost; HLE 30.8 and missing independent-index rows keep the reasoning score honest.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (official Hugging Face model card with full benchmark tables + HF eval-results leaderboards; Qwen Cloud/Quickstart docs embedded in the card; DuckDuckGo discovery hit a bot-CAPTCHA this cycle, so no third-party aggregator rows were available); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
