# HY3 — findings by GLM 5.3 Flash

- Source: Tencent (`tencent/hy3` — Hunyuan HY3 open weights)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** HY3 (Tencent Hunyuan HY3; full July 2026 open release)
- **Short description:** Tencent's open-weight Hunyuan sparse MoE flagship (295B total / 21B active / 3.8B MTP) with a 256K window and hybrid fast-and-slow thinking (`no_think` default / `low` / `high` reasoning-effort modes). Stronger agent capabilities than the April preview, production-grade tool-call stability, and hallucination rate cut from 12.5% to 5.4% (vendor internal eval). **Text-only** — the official card and Artificial Analysis both confirm no image input, correcting earlier third-party meta that claimed vision. Superseded in Tencent's own line by the Hy4 preview.
- **Provider / access:** Open weights on Hugging Face (`tencent/Hy3`, Apache-2.0; also ModelScope/GitCode/CNB, plus an FP8 build) — 725K downloads/month. Hosted via ~4 providers incl. DeepInfra: median $0.136 in / $0.555 out per 1M (AA); TokenHub preview route ~$0.18/$0.59. Not on OpenCode Zen (no Zen Free ID). Serving: vLLM/SGLang with MTP (EAGLE) speculative decoding; finetuning + GRPO RL pipelines published.
- **Release / knowledge:** Released July 6, 2026 (Tencent official release, confirmed by AA's model FAQ). Knowledge cutoff not published in reviewed sources.
- **IDs:** `tencent/Hy3` (HF); `tencent/Hy3-FP8` (quantized). Reasoning effort values: `no_think` / `low` / `high` (verified in the HF chat template).
- **Context window:** 256,000 tokens (official card; AA FAQ lists ~260k); ~32K max output (folder meta). MRCR-class long-dialogue retention explicitly improved (vendor, unmeasured publicly).
- **Modalities:** text in / text out (official HF card — text-generation pipeline, no vision; AA: "Hy3 does not support image input"). Tool calling with preserved thinking history in the chat template; reasoning-toolcall-retry fallback; JSON/structured output via constrained decoding.
- **Pricing (as of 2026-10-19):** hosted median $0.136 / $0.555 per 1M in/out with 75% cache discount (AA, across providers); Apache 2.0 self-hosting free (299B BF16, 8× large-memory GPUs recommended, e.g. H20-3e).
- **Architecture:** Open weights, Apache 2.0. Sparse MoE: 295B total / 21B active (+3.8B MTP layer), 80 layers, 192 experts top-8, GQA 64 heads (8 KV, head dim 128), hidden 4096, vocab 120,832, BF16 (official card).

### Raw benchmarks found

Sources this pass: official HF model card + its eval-results tab (SWE-bench/DeepSWE/GPQA/Terminal-Bench/Apex/SWE-Pro/Multilingual/LHTB rows, each tied to a public harness leaderboard), Artificial Analysis model page (independent, AA Intelligence Index v4.3.2), and prior-pass corroborations (innfactory.ai, llm-stats, BenchLM). Conflicts: SWE-bench Verified 74.4% (BenchLM, base variant) vs ~78% (innfactory) vs **78** (HF eval leaderboard) — the 78 figure is now double-corroborated and cited; AA Index moved 25.3 → 25 under index v4.3.2 (within noise). Multimodal conflict resolved decisively against the folder meta (see below).

Agent / tool use:

- Terminal-Bench 2.1: **71.7%** (HF eval-results row → harborframework/terminal-bench-2.1 leaderboard — fills the prior gap; strong)
- GDPval-AA: **1136** Elo (AA, independent — normalized **28.3%**; weak)
- Apex Agents (Mercor): **25.6** (HF eval-results row ≤500B class — new)
- Long-Horizon Terminal Bench (LHTB): **1** (HF eval-results row — near-zero on the extreme long-horizon variant)
- AA Agentic Index: **25.6%** (AA, prior pass); Design Arena Website: **1183** (OpenRouter)
- Tool-call stability: SWE-bench Verified variance ≤4% across CodeBuddy/Cline/KiloCode scaffolds (vendor, official card)
- Tau2 / Claw-Eval / MCP-Atlas: no verified public score found for the full HY3 build

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (HF eval-results row, corroborating the prior 87.2–90.4 three-source spread at its top end)
- HLE: **33.5%** (AA, prior pass)
- Artificial Analysis Intelligence Index: **25** (#31 of 121; AA v4.3.2, independent)
- AA-LCR v1.1: **79.0%** (AA — long-context reasoning, solid); CritPt: **4.9%** (AA — near-zero)
- AA-Omniscience: **32.0% accuracy / 74.1% non-hallucination row / −18.5 index** (AA); vendor internal hallucination rate 5.4% (official card)
- Blind expert eval: **2.67/4** vs GLM-5.1's 2.51/4 (vendor, 270 experts, self-advantage noted)

Coding:

- SWE-bench Verified: **78%** (HF eval-results leaderboard row; corroborated by innfactory.ai ~78%; BenchLM's 74.4% base-variant run is the low outlier)
- SWE-bench Multilingual: **75.8%** (HF eval-results row — new)
- SWE-bench Pro: **57.9** (HF eval-results row, matching llm-stats)
- DeepSWE: **28** (HF eval-results row → datacurve/deep-swe — new, weak)
- AA-SciCode: **48.6%** (AA, prior pass); AA Coding Index: **58.8%** (AA, prior pass)
- LiveCodeBench / Vibe Code Bench: no verified public score found

Long context:

- 256K window; AA-LCR 79.0% measured at 65K-class settings; vendor claims marked MRCR improvement (official card, number unpublished); LHTB 1 suggests long-*horizon agentic* persistence is a different, much weaker axis. No public MRCR/RULER rows.

### Normalized scores (1–100)

- **Tool use: 78/100.** (Was 62.) Raised decisively: Terminal-Bench 2.1 at 71.7% is a top-tier agentic-terminal row for an open model, scaffold-stable tool calling (≤4% variance) and production-grade tool-call recovery corroborate it; capped by the weak GDPval-AA (28.3%) and Apex Agents (25.6) rows.
- **Reasoning: 78/100.** (Unchanged — evidence now firmer.) GPQA Diamond 90.4 confirmed on the HF eval row, AA Index 25, HLE 33.5, AA-LCR 79.0; capped by near-zero CritPt (4.9) and the mid AA composite.
- **Context window: 72/100.** (Unchanged.) 256K keeps the 200K–500K band; AA-LCR 79.0% remains the only strong measured retrieval-adjacent row; MRCR improvement is claimed but unpublished, and LHTB 1 flags long-horizon weakness.
- **Multimodal: 15/100.** (Was 62 — corrected.) The official model card is a text-generation pipeline with no vision claim, and AA states outright "Hy3 does not support image input"; the folder-meta "image in" that anchored the old 62 is not backed by any vendor source. Text-only.
- **Coding: 80/100.** (Was 74.) Raised: SWE-bench Verified 78% (double-corroborated), SWE-bench Multilingual 75.8%, SWE-bench Pro 57.9, AA-SciCode 48.6%; capped by DeepSWE 28 and the absent LiveCodeBench row.
- **Cost efficiency: 95/100.** (Unchanged.) AA-verified $0.136/$0.555 per 1M (cheaper than the prior $0.14/$0.58 estimate, 75% cache discount) plus free Apache-2.0 self-hosting; no free hosted tier keeps it below the $0 anchors.
- **Overall Score: 65/100.** (Was 69.6.) Mean of the five non-cost dims: (78 + 78 + 72 + 15 + 80) / 5 = 323/5 = 64.6 → 65. The tool-use and coding gains from the new Terminal-Bench 2.1 and SWE-bench rows are outweighed by the evidence-backed multimodal correction (text-only). Best fit: an affordable Apache-2.0 self-host agentic coding MoE — now with the strongest measured Terminal-Bench row in its class — but strictly text-only and superseded by Hy4 preview in Tencent's own line.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-19
- Method: enrichment re-research 2026-10-19 (≥3 independent sources this pass: the official HF model card `https://huggingface.co/tencent/Hy3` with its eval-results leaderboard rows, the Artificial Analysis model page `https://artificialanalysis.ai/models/hy3`, and Bing web search; prior passes' HF chat template, llm-stats, innfactory.ai and BenchLM figures retained as corroboration). Scores are normalized 1–100 interpretations, not official vendor scores; multimodal corrected to text-only on dual-source evidence.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
