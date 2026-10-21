# Beam — findings by MiniMax M3.1 Flash

- Source: Reflection AI (Beam 1.0, 501B-A23B), `reflection/Beam-1.0-501B-A23B`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Beam (Beam 1.0 501B A23B) — Reflection AI
- **Short description:** Reflection's October 2026 open-weight (Apache 2.0) sparse MoE — 501.3B total / 23.4B active, a **1M context**, SWE-bench Verified 81.6%, Terminal-Bench 2.1 80.1% and 345 tok/s on Artificial Analysis, and it is the model behind OpenCode Zen's free **"Beam Free"** tier (previously the stealth "Cat Jam" preview).
- **Provider / access:** Hugging Face `reflection/Beam-1.0-501B-A23B` (Apache 2.0; `-FP8`, `-NVFP4`, `-DFlash2` variants), OpenRouter `reflection/beam-1.0-501b-a23b` ($0.30/$1.00, cache $0.04), Together AI ($0.40/$1.20), Nebius ($0.25/$1.00), Baseten ($1.30/$4.30), CoreWeave ($1.00/$3.00), Vercel AI Gateway, and **OpenCode Zen `beam-free` ($0/$0)** — the same open weights, previously listed as "Cat Jam Free" (OpenCode PR #55993, merged 2026-10-16).
- **Release / knowledge:** API/blog launch **2026-10-05** (https://reflection.ai/blog/introducing-beam); open weights on Hugging Face **2026-10-16** (https://reflection.ai/blog/beam-is-available) — AA records 2026-10-16. Knowledge cutoff **2026-06-30** (model card).
- **IDs:** `reflection/Beam-1.0-501B-A23B` (HF), `reflection/beam-1.0-501b-a23b` (OpenRouter), `reflection/beam` (Vercel AI Gateway), `beam-free` (OpenCode Zen).
- **Context window:** **1,048,576** tokens, max output 131,072 (HF card, AA, OpenRouter, Vercel, models.dev all agree). The folder's "256K served" figure traces only to Reflection's blog describing the **RL rollout** context; the same blog says midtraining extends Beam to 1M.
- **Modalities:** text in / text out only (no vision); reasoning; tool calling; Modified Harmony chat template; 152K vocab.
- **Pricing (as of 2026-10-20):** **free on OpenCode Zen** (`beam-free`, $0/$0 — "its provider does not use your data for model training and retains it for 30 days for safety reasons", with a country exclusion list); hosted routes run $0.25–$1.30 in and $1.00–$4.30 out, AA's provider median $0.70/$2.10 with a $0.115 cache read. Self-host $0 (Apache 2.0).
- **Architecture:** sparse MoE, 52 layers (3 dense + 49 MoE), 256 experts, Gated GQA + sliding-window attention, BF16/FP8/NVFP4.

### Raw benchmarks found

> Two official sets exist (HF model card vs Reflection's blog table, updated 2026-10-08) and they differ slightly; Artificial Analysis adds the independent row.

Agent / tool use:

- Terminal-Bench 2.1: **80.1%** (both official sets) · Terminal-Bench 4.0: **3.0%** (AA) — version gap, not a contradiction
- MCP Atlas: **80.8%** (card) / **78.7%** (blog) · τ³-bench: **36.1%** (card) / **38.0%** (blog) · BrowseComp: **76.8%** · DeepSearchQA: **80.5%**
- AutomationBench: **39.3%** (card) / **37.0%** (blog) / **48.5%** (AA) · GDPval-AA: **1177 Elo / 33.9% normalized** (AA) · GDP.pdf all-pass: **11.6%** (AA)
- Bench Tool-Agent-User Evaluation: **36.1%** (BenchLM) · τ²-bench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.6%** (card) / **90.5%** (blog) · HLE: **36.0%** no tools / **51.1%** with tools (card) vs **34.7%** (AA)
- AA-LCR: **78.2%** (card) / **79.3%** (blog) / **78%** (AA) · CritPt: **16.3%** (card and AA) · AIME 2026: **97.7%** (card) / **97.8%** (blog)
- Artificial Analysis Intelligence Index: **30.33** (#20/1213; BenchLM 30.3) · output speed **345.4 tok/s** median, TTFT 0.79s
- Omniscience Index / Accuracy / Hallucination Rate: **1.5 / 33.1% / 47.2%** (AA) · IFBench: **79.6%** (card) / **79.7%** (blog) · LongBench v2: **67.5%** (card)

Coding:

- SWE-bench Verified: **81.6%** (HF card) vs **80.9%** (Reflection blog, and the figure the folder carries) vs **80.2%** (FP8) / **80.7%** (NVFP4) — conflict flagged
- SWE-bench Pro: **66.1%** (card) / **65.5%** (blog) · LiveCodeBench: **88.3%** (card) · DeepSWE v1.1: **43.3%** (card) / **44.4%** (blog) · SciCode: **49.2%** (card) / **49.7%** (blog) · SWE Multilingual: **78.3%** · SWE-Atlas Codebase QnA: **31.8%** (card) / **34.6%** (blog)

Long context:

- No MRCR / RULER measurement published for Beam (BenchLM's MRCR v2 leaderboard does not list it); AA measures AA-LCR 78% instead.

### Normalized scores (1–100)

- **Tool use: 74/100.** Terminal-Bench 2.1 80.1%, MCP Atlas 80.8%, BrowseComp 76.8% and DeepSearchQA 80.5% are frontier-adjacent agentic numbers, capped by τ³-bench 36.1%, GDP.pdf 11.6% and the Bench Tool-Agent-User 36.1%.
- **Reasoning: 82/100.** GPQA 90.6%, AIME 2026 97.7%, HLE 51.1% with tools, AA-LCR 78.2% and a 47.2% hallucination rate (one of the better honesty profiles in the dataset) put Beam in the high band; the cap is Terminal-Bench 4.0 at 3.0% and an AA Intelligence Index of 30.3.
- **Context window: 92/100.** A real 1,048,576-token window with 131,072 max output across every catalogue, discounted because no long-context retrieval test is published.
- **Multimodal: 15/100.** Text-in/text-out only — no vision in this checkpoint.
- **Coding: 84/100.** SWE-bench Verified 81.6%, SWE-bench Pro 66.1%, LiveCodeBench 88.3% and Terminal-Bench 2.1 80.1% are near-frontier coding numbers, with DeepSWE 43.3% and SciCode 49.2% the soft spots.
- **Cost efficiency: 100/100.** The evaluated tier is **free** on OpenCode Zen (`beam-free`, $0/$0, no training, 30-day retention for safety). Hosted routes run $0.25–$1.30 in and $1.00–$4.30 out, and Apache 2.0 weights are free to self-host.
- **Overall Score: 69/100.** Mean of the five quality dims = (74 + 82 + 92 + 15 + 84) / 5 = 69.4 → **69**. Best fit: free, frontier-adjacent coding and agentic work — Beam Free is one of the strongest free routes available, and it is the same weights Reflection serves commercially.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (Reflection AI blog posts, Hugging Face model card, Artificial Analysis, BenchLM + Vercel AI Gateway, models.dev, OpenRouter API, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Beam_Flash.md`, using the same headings.
