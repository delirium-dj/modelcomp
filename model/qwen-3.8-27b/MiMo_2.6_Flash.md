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

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Qwen3.8-27B — findings by Mimo v2.6 Flash

- Source: Alibaba (Qwen)/`Qwen3.8-27B`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** Alibaba Qwen's compact 27B dense, natively multimodal (text/image/video in) open-weights model released 2026-08-14 under Apache 2.0, aimed at self-hosted coding agents and office workflows; it outperforms the hosted Qwen3.7-Plus on Qwen's own tables. Distinct from `qwen3.8-max` (2.4T MoE, bespoke licence) and from `qwen-3.8-flash`.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.8-27b` (per folder `meta.json`, `noFreeId: true` — **no Zen Free ID**); open weights on Hugging Face `Qwen/Qwen3.8-27B` (+ `-FP8`) and ModelScope; served via vLLM/SGLang/llama.cpp and third-party hosts. OpenAI-compatible Chat Completions.
- **Release / knowledge:** 2026-08-14 (Hugging Face / GitHub / DataNorth); **Alibaba published no system card, training cutoff or safety eval** for this checkpoint.
- **IDs:** `Qwen/Qwen3.8-27B` (HF); `opencode/qwen-3.8-27b` on Zen.
- **Context window:** 262,144 native (GitHub/HF), extendable to 1,048,576 via YaRN; recommended 131,072-token cap on final responses for agentic workloads, 262K for reasoning tokens (AI/TLDR). YaRN is static and can reduce quality on short prompts.
- **Modalities:** text, image, video in; text out; thinking mode toggle (on by default) with multi-token-prediction speculative decoding; tool calls; JSON/structured output supported by the serving stack.
- **Pricing (as of 2026-09-25):** **no first-party metered API price published for the 27B at release** (Alibaba lists none, unlike Qwen3.8-Max at $2/$6 per 1M); Zen `meta.json` records "Open weights (Apache-2.0): self-hosting free, API provider pricing varies; no Free ID". Hosting cost is GPU rental: BF16 ≈ 51.8 GiB (≈68 GiB for full 262K on an 80GB card), FP8 ≈ 28.8 GiB.
- **Architecture:** 27.78B dense, 64 layers in a hybrid layout (48 Gated DeltaNet linear-attention blocks + 16 full-attention blocks) on the Qwen3.5 foundation, 5120 hidden, MTP head; **Apache 2.0** (licence file confirmed, not just card front matter).

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness). Missing rows = no verified public score found.
> All rows below are from Alibaba's Qwen model card / GitHub release tables (Claude Code harness, temp 1.0, top_p 0.95, 256K context) unless another source is named; QwenSWEBench, CoWorkBench and JobBench are in-house and cannot be independently checked.

Agent / tool use:

- Terminal-Bench 2.1 (Terminus): **73.0%** (Qwen model card; also listed on the Harbor/terminal-bench-2.1 leaderboard)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: text Claw-Eval no verified public score found; **ClawEval-MM (multimodal): Pass@3 57.4, Average 56.9** (Qwen card)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- OSWorld-Verified: **84.3%**; WebArena-Verified: **64.8%**; AndroidWorld: **81.9%** (Qwen card — computer/browser/mobile use)
- CoWorkBench (in-house): 70.7%; JobBench: 33.4%; RecreationBench: 47.1% (Qwen card)
- Agents' Last Exam: **Pass@1 20.4% / score 42.9** (Qwen card)

Reasoning / knowledge:

- GPQA Diamond: **89.2%** (Qwen card; listed on the idavidrein/gpqa Diamond leaderboard)
- HLE (no tools): **30.8%** (Qwen card)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- IFBench (instruction following): 79.5% (Qwen card)

Coding:

- SWE-bench Verified: no verified public score found
- SWE-bench Pro: **61.7%** (Qwen card, Claude Code harness on a corrected task set — not directly comparable to unmodified runs)
- LiveCodeBench v6: **90.3%** (Qwen card — its highest-ranked text number, ahead of Opus 4.6 Max's 88.8 on the same table)
- DeepSWE 1.1: **42.2%** (Qwen card; also listed on the datacurve/deep-swe leaderboard)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- QwenSWEBench (in-house): 79.0%; NL2Repo-Bench: 42.3% (Qwen card)

Long context / multimodal (measured):

- Long-context retrieval: no MRCR / RULER / GraphWalks reported for 262K or YaRN-1M — **no long-context retrieval reported**
- MathVision: 90.0 without CI / **94.6 with CI**; OmniDocBench 1.5: **91.1**; RealWorldQA: **85.9**; CharXiv RQ: 83.7 / 90.2 with CI; BabyVision: 65.7 / 85.6 with CI; SWE-MM: 38.6; Vision2Web: 62.9 (Qwen card)

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong agentic-surface evidence — TB 2.1 73.0, OSWorld-Verified 84.3, AndroidWorld 81.9, WebArena 64.8, ClawEval-MM 56.9 — all above the mid band (TB 2.1 45–60 → 50–70) but short of the frontier reference (TB 2.1 ~88+, plus no Tau3 or GDPval number at all), and Agents' Last Exam Pass@1 is only 20.4. That gap between 73 and ~88 is what caps it below 80.
- **Reasoning: 80/100.** GPQA Diamond 89.2 is a point off the 90+ frontier reference and HLE 30.8 sits well above the mid band; capped by no LCR, CritPt or Intelligence Index figure, an HLE short of the 40+ frontier reference, and Alibaba's unpublished cutoff/system card.
- **Context window: 74/100.** 262,144 native is in the 200K–500K tier (65–84, 200K = 70) and scores at the upper-middle of it; the 1M YaRN extension is documented but static-YaRN quality loss on short prompts plus zero published retrieval accuracy (MRCR/RULER) keep it out of the ≥1M 95–100 band.
- **Multimodal: 85/100.** Text + image + video in with text out lands in the +video/PDF band (75–90); backed by OSWorld 84.3, OmniDocBench 91.1, MathVision 94.6 (with CI), RealWorldQA 85.9 and native hour-scale video input. Not higher because output is text-only and no audio in is documented.
- **Coding: 84/100.** LiveCodeBench v6 90.3, SWE-bench Pro 61.7, DeepSWE 42.2, TB 2.1 73.0 — clearly past the mid band and competitive with bigger models on Qwen's table, but short of the frontier references (TB 2.1 85+, DeepSWE 74+) and missing SWE-bench Verified, SciCode and Vibe Code Bench entirely.
- **Cost efficiency: 90/100.** Apache 2.0 open weights with no metered first-party API price = effectively free to self-host (the realistic cost is an 80GB-class GPU for BF16 at 262K, or FP8 on 24–48GB consumer cards); held just below the 97–99 band because there is no verified $0.10/$0.20-class hosted rate for this checkpoint yet.
- **Overall Score: 80/100.** (78 + 80 + 74 + 85 + 84) / 5 = 80.2 → 80 — best-fit as a self-hostable, Apache-2.0 coding + computer-use agent with real multimodal reach; choose it when you need local/air-gapped deployment, and step up to a frontier closed model for Tau/GDPval-class tool reliability or hardest-tier reasoning.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-25
- Method: fresh public internet research (Qwen/Qwen3.8-27B Hugging Face card and GitHub release repo, DataNorth and AI/TLDR write-ups, HokAI and AI Release Tracker summaries, Harbor/DeepSWE leaderboard listings); scores are normalized 1–100 interpretations, not official vendor scores. In-house Qwen benchmarks are labelled as such.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

