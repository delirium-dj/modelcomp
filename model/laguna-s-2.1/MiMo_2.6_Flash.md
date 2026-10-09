# Laguna S 2.1 — findings by Mimo v2.6 Flash

- Source: Poolside/`poolside/laguna-s-2.1`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1
- **Short description:** Poolside's 2026-07-21 open-weights agentic-coding MoE (118B total / 8B active) — Western "frontier-adjacent on one DGX Spark" story: TB2.1 70.2 at 8B active, full eval trajectories published at trajectories.poolside.ai; OpenMDW-1.1 permissive.
- **Provider / access:** Hugging Face `poolside/Laguna-S-2.1` (BF16/FP8/INT4/NVFP4/GGUF/MLX + DFlash draft); Poolside API; OpenRouter; vLLM/SGLang/llama.cpp. **No OpenCode Zen Free ID** in this repo's meta (`noFreeId: true`) — note: OpenCode Zen docs also list a "Laguna S 2.1 Free" promo elsewhere; this board's meta treats it as paid ~$0.10/$0.20.
- **Release / knowledge:** **2026-07-21**; train-to-launch under nine weeks (Poolside). Knowledge cutoff not published.
- **IDs:** `poolside/laguna-s-2.1` (repo meta); `poolside/Laguna-S-2.1` (HF).
- **Context window:** **1,048,576** in (Ollama/local builds often 256K per meta); thinking + no-thinking modes; out cap not prominently published (treat as standard mid-tier).
- **Modalities:** **text only** in/out (HF card "text-to-text"); interleaved thinking between tool calls (`enable_thinking`); tool calls yes.
- **Pricing (as of 2026-09-22):** API **~$0.10 in / $0.20 out per 1M** (meta); open weights → self-host cost dominates; **no Free ID on this repo's meta**.
- **Architecture:** MoE **118B / ~8B active**; 256 routed experts (top-10) + 1 shared; 48 layers (12 global / 36 SWA window 512); GQA 8 KV heads; vocab 100,352; OpenMDW-1.1.

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Poolside launch 2026-07-21 (pool harness, thinking on, pass@1 ×4 except DeepSWE/SWE-Atlas/Toolathlon ×3); max of vendor/leaderboard/AA where noted.

Agent / tool use:

- Terminal-Bench 2.1: **70.2%** thinking (60.4% no-thinking) (Poolside; **rank #11** on compiled TB2.1 board — ahead of DeepSeek-V4-Pro-Max 64.0, Inkling 63.8, Nemotron 3 Ultra 56.4; behind Hy3 71.7, Qwen 3.7 Max 74.5, Muse 80, Fable 88)
- Toolathlon Verified: **49.7%** (Poolside/official leaderboard)
- SWE Atlas (Codebase QnA): **46.2%** (Poolside/Scale AI leaderboard third-party where marked)
- BrowseComp / GDPval / MCP-Atlas / Tau3: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / MMLU-Pro / AA Intelligence Index for Laguna S 2.1: no verified public score found in this pass (launch table is agentic-coding only)

Coding:

- SWE-bench Multilingual: **78.5%** (Poolside; ties/edges Qwen 3.7 Max 78.3, DeepSeek-V4-Pro-Max 76.2, Hy3 75.8)
- SWE-bench Pro (public): **59.4%** (Poolside; behind Fable 80.3, Qwen 3.7 Max 60.6, Muse 61.5; ahead Hy3 57.9, MiniMax M3 59.0)
- DeepSWE v1.1: **40.4%** thinking / 16.5% no-thinking (Poolside **pool harness — not mini-swe-agent leaderboard**; Poolside itself flags non-comparability; frontier cluster 67–73)
- SWE-Verified / LiveCodeBench: no verified public score found for S 2.1 (XS 2.1 sibling has SWE-V 70.9 — do not transfer)

Long context:

- **1M** window (HF); no MRCR/RULER published

Multimodal:

- **Text-only** (HF card) — template: 15

### Normalized scores (1–100)

- **Tool use: 75/100.** TB2.1 **70.2 (#11 compiled)** at 8B active is the headline; Toolathlon 49.7 and SWE-Atlas 46.2 are solid mid; no BrowseComp/GDPval rows.
- **Reasoning: 60/100.** Launch evidence is tool/coding-heavy — **zero public GPQA/HLE/AA-Index rows** for this ID → reasoning scored on structural inference only (agentic strength implies competent but unproven science/reasoning breadth).
- **Context window: 94/100.** Full **1,048,576** sticker (thinking + no-thinking); local builds may cap at 256K (meta note) — score the flagship API/HF window; no retrieval curve.
- **Multimodal: 15/100.** Text-only (template rule: 15).
- **Coding: 78/100.** SWE-Multi 78.5 and SWE-Pro 59.4 are near Qwen 3.7 Max / above Hy3 on Multi; DeepSWE 40.4 is real but harness-discounted; no SWE-Verified row for S-tier — strong open coding, not Fable/Sol frontier.
- **Cost efficiency: 90/100.** ~$0.10/$0.20 API + OpenMDW-1.1 self-host at 8B active (single DGX Spark / ~236GB BF16 or much less quantized) is elite; not 95+ because this repo's meta has **no Free ID** (paid Zen path) and BF16 multi-GPU hosting is heavy for hobbyists without quants.
- **Overall Score: 64/100.** Mean of five quality dims (75+60+94+15+78)/5 = 64.4 → 64. Best-fit: open-weights agentic coding and long-horizon terminal work where 1M context + TB2.1 70.2 at 8B active beats renting larger dense models; add a multimodal model when vision is required.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (poolside.ai/blog/introducing-laguna-s-2-1, HF poolside/Laguna-S-2.1 README, digitalapplied.com launch analysis, NatLawReview press release, LM Studio listing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
