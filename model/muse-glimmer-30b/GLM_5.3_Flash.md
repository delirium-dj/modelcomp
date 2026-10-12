# Muse Glimmer 30B — findings by GLM 5.3 Flash

- Source: Meta (`meta-models/Muse-Glimmer-30B`, Apache 2.0 open weights)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta Superintelligence Labs' Apache-2.0 30B dense multimodal agent model distilled from Muse Spark (Meta's internal frontier line) — an American-developed open-weight option tuned for tool use, long-horizon tasks and failure recovery; runs on a single 24GB consumer GPU via first-party GGUFs. BenchLM ranks it #126 of 889 (42.02). The 2026-10-05 enrichment pass added the independent AA Intelligence Index reading.
- **Provider / access:** Open weights (Apache 2.0 + Meta Usage Policy) on Hugging Face (`meta-models/Muse-Glimmer-30B`, plus official GGUF, vision projector and DFlash drafter); hosted launch partners Together AI, Fireworks, OpenRouter (public per-token pricing not independently verified — repo meta lists ~$0.30 in / $1.10 out, Fireworks/Together/Vercel ~$0.35/$1.50, NVIDIA NIM $0); llama.cpp build b10353+, Transformers 5.15+, vLLM. No Zen Free ID found.
- **Release / knowledge:** Released 2026-08-10; knowledge cutoff 2026-01-04 (official model card).
- **IDs:** `meta-models/Muse-Glimmer-30B` (Hugging Face); `muse-glimmer-30b` (NVIDIA NIM / catalogs).
- **Context window:** 131,072 tokens (BenchLM concurs 131K; official configuration ceiling — a 262K claim would be an extension, not the published native window).
- **Modalities:** text and image input (video sampled as frames, capped ~96 frames in the example processor); text output (no image/video/audio generation); reasoning yes with low/medium/high/xhigh levels set through the prompt/template; tool calls (native); JSON mode.
- **Pricing (as of 2026-10-11):** weights free under Apache 2.0 with no per-token fee (self-hosting costs: 24GB for K-Quant-17GB, 32GB for K-Quant-Dynamic, 64GB for BF16); hosted provider rates as listed in the repo meta (not independently verified); Meta's separate Usage Policy applies.
- **Architecture:** Dense causal transformer ~29.6B total (including ~1.8B vision encoder, 50-layer ViT-G/14-style), 52 decoder layers, hidden 6,656, grouped-query attention (32 query / 2 KV heads), repeating local/local/local/global sliding-window pattern (2,048-token window), DFlash speculative-decoding drafter; Apache 2.0 license.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **790** (AA, independent — normalized **14.5%**) — **conflicts with the 953 BenchmarkList reading the prior pass cited**; the AA board is lower
- AA Agentic Index: **10.5%**; AA AutomationBench-AA: **6.8%**; AA Terminal-Bench 4.0: **0.5%** (floor); AA-Briefcase: **477 Elo**; AA EnterpriseOps-Gym: **34.7%**; AA GDP.pdf: **10.0%** (AA — the independent agentic board is weak across the board)
- AA Tau3-Banking: **23.5%** (AA — corroborated); AA Terminal-Bench 2.1: **51.7%** (corroborated)
- MCP Atlas: **75.5%**; DeepSearchQA: **74.6%**; skillsBench: **44.3%**; OSWorld-Verified: **65.9%**; WildClawBench: **47.6%**; GAIA2: **43.3%** (Meta launch post — corroborated by benchlm)
- Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **17.5** (AA current board, 2026-10-10) — **conflicts with the "35 (High)" reading the 2026-10-05 pass cited**; the recomposed board supersedes it (same launch-era-vs-current pattern documented across this pass)
- GPQA Diamond: **83.5%** (AA — corroborated; Gemma 4 31B leads at 85.7%); HLE: **22.0%** (AA — corroborated)
- AA-LCR v1.1: **83.3%** (AA — updated up from the prior 80.0 read; strong); MLCR-AA: **20.0%** (fills the gap, weak); CritPt: **2.6%** (near-zero)
- AIME26: **94.7%** (Meta — corroborated by benchlm); IFBench: **77%** (corroborated)
- AA-Omniscience: **27.0% accuracy / 81.9% non-hallucination row / −32.8 index** (AA — very weak)

Coding:

- SWE-bench Verified: **76.0%**; SWE-bench Pro: **51.2%** (Meta launch post — corroborated by benchlm); SciCode: **43.6%** / AA-SciCode: **44.9%** (AA — corroborated)
- AA Coding Index: **49.0%** (AA — new; weak)
- Terminal-Bench 2.1: **51.7%** (corroborated); LiveCodeBench / Vibe Code Bench: no verified public score found

Long context:

- AA-LCR **83.3%** (AA — strong for the class, updated); Beam128K: **65.1%** (Meta-internal, prior pass); 131K native ceiling

Multimodal:

- MMMU-Pro: **74.0%** (Meta) / **74.3%** (AA — corroborated); CharXiv: **78.8%**; ScreenSpot-Pro: **75.4%**; OmniDocBench 1.5: **75.8%** (corroborated)

### Normalized scores (1–100)

- **Tool use: 62/100.** (Was 72 on the prior pass.) The independent AA agentic board is weak (GDPval 790/14.5%, Agentic Index 10.5%, AutomationBench 6.8%, TB4.0 0.5%, Briefcase 477); the Meta-internal rows (MCP Atlas 75.5, DeepSearchQA 74.6, OSWorld 65.9) hold it above the floor — two bands down.
- **Reasoning: 62/100.** (Was 68 on the prior pass.) The AA Index recomposes from the cited 35 to 17.5, with CritPt 2.6%, MLCR 20.0% and a −32.8 Omniscience index; AIME 94.7%, GPQA 83.5% and the strong AA-LCR 83.3% keep it from dropping further.
- **Context window: 60/100.** 131,072 tokens (BenchLM concurs) maps to the 100K–200K tier (50–64); AA-LCR 83.3% is strong for the window but the ceiling is well below the 256K–1M models.
- **Multimodal: 68/100.** Text + image input (video as frames) with corroborated vision rows (MMMU-Pro 74.0/74.3, CharXiv 78.8, OmniDocBench 75.8); text-only output, no audio — the image-in band is 60–70.
- **Coding: 70/100.** (Was 74 on the prior pass.) SWE-bench Verified 76.0% and Pro 51.2% are corroborated, but AA Coding Index 49.0%, AA-SciCode 44.9% and the missing LiveCodeBench hold the mid band.
- **Cost efficiency: 95/100.** Apache 2.0 weights with no per-token fee self-hosted on a 24GB GPU; hosted rates (~$0.30/$1.10 per repo meta) are unverified but low; Meta Usage Policy review required for commercial use.
- **Overall Score: 64.4/100.** (Was 68.4 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (62 + 62 + 60 + 68 + 70) / 5 = 322/5 = 64.4 — lowered on the 2026-10-11 second pass as the recomposed AA board corrects the launch-era composite and documents the weak independent agentic profile. Best-fit: a local coding/research agent model for existing 24–32GB hardware and American-jurisdiction open-weight needs — temper the launch-table expectations per the independent boards.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-11
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai updated 2026-10-10 citing the Meta Muse Glimmer launch post, Artificial Analysis model benchmarks via benchlm.ai, the prior 2026-09-24/10-05 passes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Glimmer.md`, using the same headings.
