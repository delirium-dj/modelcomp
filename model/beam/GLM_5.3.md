# Beam — findings by GLM 5.3

- Source: Reflection AI (`reflection/Beam-1.0-501B-A23B`; OpenCode Zen free tier `opencode/beam-free`)
- Date: 2026-10-17 (UTC) — scored report replacing the 2026-10-17 `.excluded` negative-findings file after the open-weights release
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Beam (Beam-1.0-501B-A23B)
- **Short description:** Reflection AI's first open-weight model (announced 2026-10-05, weights released ~2026-10-16) — a 501B-total / 23B-active sparse MoE built for coding, reasoning, and agentic workloads, trained with one of the largest open-lab RL runs to date (100M+ rollouts on 10.5K GB300s), with token-efficient reasoning (~3x fewer reasoning tokens than comparable open models) as its signature claim. The OpenCode Zen stealth free tier `beam-free` serves this same base model.
- **Provider / access:** Hugging Face open weights `reflection/Beam-1.0-501B-A23B` (Apache 2.0; BF16/FP8/NVFP4 + DFlash2 drafter, community GGUF/MLX quantizations already up); Reflection API (`reflection.ai`); OpenCode Zen `opencode/beam-free` (free limited-time; provider does not use data for training, retains 30 days for safety; region-restricted). vLLM/SGLang recipes.
- **Release / knowledge:** announced 2026-10-05 (launch blog), weights ~2026-10-16 (HF "updated 1 day ago"); knowledge cutoff **June 30, 2026** (model card).
- **IDs:** `opencode/beam-free` (Zen, free tier); `reflection/Beam-1.0-501B-A23B` (HF). Reflection's own API pricing not yet published in fetched sources.
- **Context window:** 1M tokens (model card; BenchLM concurs).
- **Modalities:** text in / text out; reasoning yes (effort low→max, controllable length penalty trained in); tool calls (MCP-based integration, browsing); modified-Harmony chat template; text-only — no image/audio input.
- **Pricing (as of 2026-10-17):** $0 on Zen `beam-free` (limited time); Apache 2.0 self-host at 23B-active MoE cost; Reflection first-party API pricing unpublished.
- **Architecture:** 501.3B total / 23.4B active MoE; 52 layers (3 dense + 49 MoE), 256 experts; Gated GQA + Sliding Window Attention; pre-trained on 23.8T tokens (6,144 GB300 NVL72s, <4 weeks, 92.3% goodput); mid-trained to 1M context; 4-week high-compute RL (100M+ rollouts, 110K concurrent, ~1M environments, 1.3B sandboxes); Apache 2.0.

### Raw benchmarks found

> All numbers are vendor-run from the official HF model card (BF16 column; FP8/NVFP4 variants within ~1-2 pts), post-release figures updated 2026-10-08 per the launch blog's correction note. BenchLM tracks the same rows (`reflection-beam`, 20 rows, unranked). No independent harness replications yet — one day post-release.

Agent / tool use:

- MCP Atlas: **80.8%** (model card; blog's pre-release figure 78.7% — updated, both noted)
- Terminal-Bench 2.1: **80.1%** (model card; blog 80.1%)
- BrowseComp (w/ context management): **76.8%** (model card)
- DeepSearchQA (w/ context management): **80.5%** (model card)
- HLE with tools: **51.1%** (model card)
- Tau3-Banking: **36.1%** (model card — weak spot)
- AutomationBench (public split): **39.3%** (model card — weak)
- GDPval-AA / Claw-Eval / Toolathlon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.6%** (model card — clears the 90% frontier bar)
- HLE no tools: **36.0%** (model card — just under the 40% reference)
- AIME 2026: **97.7%** (model card — elite math tier)
- SciCode: **49.2%** (model card — below the 55% reference)
- CritPt (AA): **16.3%** (model card — weak)
- AA-LCR: **78.2%**; LongBench v2 **67.5%**; IFBench **79.6%** (model card)
- AA-Omniscience index (public split): **10.8** (model card — weak knowledge reliability)

Coding:

- SWE-bench Verified: **81.6%** (model card, SWE-agent-style harness) — leads its announced open-class peers (blog comparison: Inkling 77.6%, Nemotron 3 Ultra 70.7%)
- SWE-bench Pro v2-Hard: **76.5%** (model card; v1 **66.1%**)
- SWE Multilingual: **78.3%** (model card)
- LiveCodeBench: **88.3%** (model card)
- SWE Atlas Codebase QnA: **31.8%** (model card — weak)
- DeepSWE v1.1: **43.3%** (model card — well below the 74% frontier ref; the launch blog's own comparison shows K3 at 68.0% and Qwen 3.8 Max at 51.7% on DeepSWE, so this is Beam's soft spot, partially offset by its token-efficiency claim: comparable solution quality at ~3x fewer reasoning tokens)
- Terminal-Bench 2.1 (coding-side view): **80.1%**

Long context:

- 1M window (mid-training extended); AA-LCR 78.2% and LongBench v2 67.5% are the measured long-context values — moderate, no MRCR/RULER published.

Safety (vendor-run, Iris Safety Evaluations):

- Harmful-requests refusal/pivot rate **88.9%** (BF16); harmless-requests compliance **81.5%** (model card)

Multimodal:

- **no verified public score found** — text-only model (vendor: works with other modalities only when represented as text).

### Normalized scores (1–100)

- **Tool use: 85/100.** MCP Atlas 80.8%, Terminal-Bench 2.1 80.1%, BrowseComp 76.8%, DeepSearchQA 80.5%, and HLE-with-tools 51.1% form a strong agent profile (blog comparison: beats Inkling on every shared tool bench); capped by Tau3-Banking 36.1%, AutomationBench 39.3%, and vendor-only sourcing one day post-release.
- **Reasoning: 82/100.** GPQA Diamond 90.6% clears the frontier bar, AIME 2026 97.7% is elite, and the token-efficiency story (comparable quality at 3-4x less inference compute vs GLM-5.2-class models) is genuine differentiation; capped by HLE 36.0% (under the 40% ref), CritPt 16.3%, SciCode 49.2%, and the weak Omniscience index (10.8).
- **Context window: 95/100.** 1M verified (model card + BenchLM) — ≥1M tier; AA-LCR 78.2% / LongBench v2 67.5% are moderate, not ≥98% retrieval.
- **Multimodal: 15/100.** Text-only input and output (per template: 15 if text-only).
- **Coding: 85/100.** SWE-bench Verified 81.6% and LiveCodeBench 88.3% lead the announced open class; SWE Pro v2-Hard 76.5% and SWE Multilingual 78.3% are strong; capped by DeepSWE 43.3% (far below the 74% ref — partially excused by the efficiency claim), SWE Atlas 31.8%, and SciCode 49.2%.
- **Cost efficiency: 98/100.** $0 on the Zen free tier (no training-data use; 30-day safety retention), Apache 2.0 weights self-hostable at 23B-active cost, and trained-in token efficiency that cuts effective cost per task ~3x — near-free at every access path; Reflection first-party pricing unpublished.
- **Overall Score: 72/100.** Half-up mean of (85 + 82 + 95 + 15 + 85) / 5 = 72.4 → 72. Best-fit recommendation: the token-efficiency workhorse of the new open-weight class — frontier-adjacent coding/agent quality per FLOP with 1M context at zero or self-host cost; watch DeepSWE-class long-horizon SWE tasks (weak) and verify vendor numbers once independent harnesses replicate (release is one day old).

---

## Signature

- Provided by: **GLM 5.3 (zai/glm-5.3)** — 2026-10-17
- Method: public internet research (official HF model card `reflection/Beam-1.0-501B-A23B` with full benchmark table, Reflection launch blog with the 2026-10-08 updated comparison tables and RL/training methodology, BenchLM tracker `reflection-beam` (20 rows, unranked), models.dev registry, live Zen models endpoint + docs + pricing). This pass supersedes the same-day `.excluded` file written hours before the weights dropped; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
