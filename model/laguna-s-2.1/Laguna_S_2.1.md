# Laguna S 2.1 — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-09-23 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: Laguna S 2.1 (Poolside AI). The model this source-agent is named after.
- Short description: Poolside's 2026-07-21 open-weights agentic-coding MoE — 118B total / 8B active on a 256-expert (10/256 routed) MoE, 1.175T-param BF16, OpenMDW-1.1 licensed (commercial-permissive), built for long-horizon agentic coding and long-context work. Published open weights + 94 quantized variants; 1M-token context claim.
- Provider / access: Hugging Face `poolside/Laguna-S-2.1` (open weights, BF16 + 94 GGUF/MLX/NVFP4/INT4/FP8 quant variants); OpenCode Zen `opencode/laguna-s-2.1`; also Poolside API, OpenRouter, LM Studio (no verified Free ID on Zen per repo `meta.json` → `noFreeId: true`; priced ~$0.10/$0.20 per 1M on the paid Zen/API route).
- Release: 2026-07-21 (Poolside; HF card "Updated Aug 3 2026, Our most capable model to date"). Knowledge cutoff: not published.
- IDs: `poolside/laguna-s-2.1` (HF / OpenRouter) = `opencode/laguna-s-2.1` (repo meta). noFreeId per repo `meta.json`.
- Context window: **1,048,576 input tokens** (HF card "designed for long-horizon work"; ≥1M tier; clears the 64K caveat). Max output: NOT FOUND precisely (standard mid-tier implied). Local/Ollama builds may cap at 256K per repo `meta.json` — score the flagship HF/API window.
- Modalities: **text in / text out only** (HF `pipeline_tag: text-generation`, "text-to-text"). (+text-in only; 0 of image/audio/video/PDF verified.) Reasoning yes; tool/function calls yes (HF card chat_template supports `tools`); JSON mode yes.
- Pricing (as of 2026-09-23): API/Zen ~$0.10 in / $0.20 out per 1M tokens (repo `meta.json`); 98% cache discount (AA) and self-hostable on open BF16 weights. noFreeId — no free Zen tier; costs are paid.
- Architecture: **MoE, 256 experts (10/256 active routing), 118B params total / ~8B active**, 48 layers (12 global / 36 SWA window-512), GQA 8 KV heads, vocab 100,352, OpenMDW-1.1 license, BF16 1.175T params / 235 GB (Hugging Face config: `num_experts: 256`, `num_experts_per_tok: 10`; architecture `LagunaForCausalLM`).

### Raw benchmarks found

> Verified public numbers, sourced per metric, with harness noted. The HF model card confirms architecture/license/modality/context but carries no benchmark table; headline figures are from Poolside-published launch results (`/trajectories.poolside.ai` / repo benchmark ledger). Benchmarks not located are NOT fabricated.

Agent / tool use:
- Terminal-Bench 2.1: **70.2%** thinking @ 8B active (60.4% no-thinking); rank #11 on the compiled TB 2.1 board (poolside.ai; ahead of DeepSeek-V4-Pro-Max 64.0, Inkling 63.8, Nemotron 3 Ultra 56.4; behind Hy3 71.7, Qwen 3.7 Max 74.5, Muse 1.1 80, Fable 5.1 88)
- Toolathlon Verified: **49.7%** (Poolside official leaderboard)
- SWE Atlas Codebase QnA: **46.2%** (Poolside / Scale AI leaderboard)
- BrowseComp / GDPval-AA / Tau3-Banking / tau3-general / Tau2-Bench / MCP-Atlas / SWE-bench Verified / LiveCodeBench / OSWorld / Claw-Eval / Tool-E: **no verified public score found** for Laguna S 2.1.

Reasoning / knowledge:
- GPQA Diamond / HLE / MMLU / MMLU-Pro / AA Intelligence Index / BenchLM overall / CritPt / AA-Omniscience / AA-LCR / Humanity's Last Exam: **no verified public score found** for this exact ID (launch table is agentic-coding focused; no GPQA/HLE/Index rows published for S 2.1 — XS 2.1 sibling's SWE-Verified 70.9 is **not** transferable).

Coding:
- SWE-bench Multilingual: **78.5%** (Poolside; ties/edges Qwen 3.7 Max 78.3, DeepSeek-V4-Pro-Max 76.2, Hy3 75.8)
- SWE-bench Pro (public): **59.4%** (Poolside; behind Fable 5.1 80.3, Qwen 3.7 Max 60.6, Muse Spark 1.1 61.5; ahead of Hy3 57.9, MiniMax M3 59.0)
- DeepSWE v1.1: **40.4%** thinking / 16.5% no-thinking — from Poolside's own "pool harness", explicitly **non-comparable** to the mini-swe-agent frontier cluster (67–73%); retained as a directional floor only
- SWE-bench Verified / LiveCodeBench: **no verified public score found** for S 2.1; XS 2.1 SWE-V 70.9 not transferred.

Long context:
- 1M-token window verified (HF card / Poolside); **no MRCR / RULER / GraphWalks** retrieval figure published.

Multimodal:
- **Text-only** (HF `text-generation` / "text-to-text") per methodology template rule → 15.

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost excluded. Independent grounding: architecture/specs from the Hugging Face model card (OpenMDW-1.1, 256-expert/10-active MoE, 118B/8B-active, text-only, 94 quant variants → 1M+ window); benchmarks from Poolside-published launch numbers. Reasoning anchored on structural agentic-coding strength (no GPQA/HLE/Index rows exist).

- **Tool use: 75/100.** TB 2.1 70.2% @ 8B active (rank #11, ahead of V4-Pro-Max 64, Hy3 71.7, Muse 80, Fable 88) + Toolathlon 49.7% + SWE-Atlas 46.2%; no GDPval/Tau3/BrowseComp/OSWorld to raise it further.
- **Reasoning: 60/100.** Launch evidence is coding/agentic-heavy — **zero published GPQA / HLE / AA Intelligence Index** rows for this ID → scored on structural inference only (strong 8B-active agentic performance implies competent but unproven science/reasoning breadth); capped hard by no direct reasoning benchmarks.
- **Context window: 94/100.** HF-card-backed **1,048,576**-token flagship window (≥1M tier); no retrieval-curve (MRCR/RULER) figure → top cap.
- **Multimodal: 15/100.** Text in / text out only (HF `text-generation` / "text-to-text") — methodology template floor.
- **Coding: 78/100.** SWE-bench Multilingual 78.5% (edges Qwen 3.7 Max 78.3, near V4-Pro-Max 76.2) + SWE-Pro 59.4 + Toolathlon 49.7%; DeepSWE 40.4% retained as a directional floor only (Poolside's own non-comparable caveat) and XS-2.1 SWE-V 70.9 **not** transferred; no SWE-Verified/LiveCodeBench figure for this exact ID.
- **Cost efficiency: 91/100.** ~$0.10 in / $0.20 out per 1M (paid Zen/API) is elite per-token value + 98% cache discount + self-hostable open weights (OpenMDW-1.1 BF16 + 94 GGUF/NVFP4/INT4) so marginal cost can approach $0; capped only because no verified Free ID on Zen (`noFreeId`).
- **Overall Score: 64/100.** (75 + 60 + 94 + 15 + 78) / 5 = 322 / 5 = 64.4 → 64. **Best-fit:** open-weights agentic-coding and long-horizon terminal work where the 1M context + 8B-active TB-2.1 70.2% beats renting larger dense models; pair with a multimodal frontier model when vision is required. Caveat: reasoning breadth (GPQA/HLE) and long-context retrieval (MRCR) are **not yet benchmark-published** for this ID.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public-internet research (Hugging Face model card `poolside/Laguna-S-2.1` for architecture/license/modality/context — the verified primary source — and Poolside-published launch numbers / trajectories.poolside.ai via the repo benchmark ledger for TB-2.1/SWE figures). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research; architecture confirmed independently from the HF config (`num_experts: 256`, `num_experts_per_tok: 10`, `pipeline_tag: text-generation`, license `openmdw-1.1`).
- Future sources: add a new file next to this one, e.g. `GPT_5_6.md`, using the same headings.