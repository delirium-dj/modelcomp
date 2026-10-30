# Kimi K3.1 Pro — findings by DeepSeek 4.1 Flash

- Source: Moonshot AI/Kimi K3.1 Pro
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Moonshot AI's flagship open-weight-class multimodal reasoning model (Oct 2026), a post-trained successor to Kimi K3 with a 1M-token context and much larger RL compute, aimed at agentic coding, 3D/CAD creation, and financial research. Weights were announced for release; at research time the model was API/product-only.
- **Provider / access:** Moonshot AI — Kimi API `kimi-k3.1-pro` and `kimi-k3.1-pro-highspeed` (Anthropic- and OpenAI-compatible endpoints); also on Kimi.ai, Kimi Work, Kimi Code. Aggregators: OpenRouter `moonshotai/kimi-k3.1-pro`, NEAR AI. Chat Completions-style endpoint.
- **Release / knowledge:** Released 2026-10-23; weights announced for release by 2026-11-04 (not yet published at research time). Knowledge cutoff not announced.
- **IDs:** `moonshotai/kimi-k3.1-pro` (OpenRouter), `kimi-k3.1-pro` (Kimi API); Highspeed variant `kimi-k3.1-pro-highspeed`. No OpenCode Zen ID found.
- **Context window:** 1,048,576 tokens (1M) total; `max_completion_tokens` documented at a 131,072 default, configurable up to ~1M (per Kimi API guide, via Kingy.ai). Verified from Moonshot docs + Artificial Analysis model page.
- **Modalities:** Text and image in (Artificial Analysis evaluated endpoint); Kimi Code additionally documents video input at product level. Text out. Reasoning yes (effort `low`/`high`/`max`; API default `max`); tool calls; structured output. No native audio/image/video generation.
- **Pricing (as of 2026-10-30):** $2.00 in / $10.00 out / $0.20 cached-input per 1M (OpenRouter and Kimi platform); ~33% below Kimi K3 on all three rates. Paid — no free tier found.
- **Architecture:** 3T-class MoE — Artificial Analysis lists ~2.8T total / 104B active parameters (≈3.7% active). K3-lineage design (93 layers, 896 routed experts, 16 selected + 2 shared; Kimi Delta Attention + gated MLA; MoonViT-V2 vision encoder; MXFP4/MXFP8 QAT). Weight licence not verified at research time.

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Terminal-Bench 4.0: **65.7%** (Moonshot blog, Claude-Code harness, max effort); **67.2%** (Artificial Analysis, mini-swe-agent, pass@1 over 3 repeats); **63.64%** (Vals AI, mini-swe-agent, ±1.75 SE). Conflict: different harnesses/runs — not one controlled ranking.
- Terminal-Bench-Science 0.1: **38.1%** (Moonshot / BenchmarkList; rank 4 of 18) — well behind GPT-6 Astra 68.1%.
- GDPval-AA v2.1: **1,846 Elo** (Artificial Analysis; rank 4 of 358, 99th pct) — up 312 Elo from Kimi K3, behind only Opus 5.5 (1,866) and Muse Wonder Full (1,857).
- AA-Briefcase v1.1: **1,678 Elo** (Artificial Analysis; 95% CI 1,667–1,688), 50.4% rubric pass.
- AutomationBench-AA: **73.3%** (Artificial Analysis; rank 3 of 32) — up from 58% for K3.
- BrowseComp: **92.1%** (Moonshot; rank 5 of 69) — behind GPT-6 Astra 94.2%.
- OSWorld 2.1: **79.6%** (Moonshot, Kimi Agent harness).
- Agents' Last Exam: **43.2%** overall / 44.2% CLI (Moonshot); BioMysteryBench 80.6%; MCP Atlas reported on the 500-task subset.
- Harvey Legal Agent Benchmark: **23.7%** all-pass (rank 1 of 16).
- Tau3-Banking / Tau2-Bench: no verified public score found.
- Claw-Eval / ClawProBench / Toolathon: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **94.2%** (Moonshot / BenchmarkList; rank 7 of 478).
- HLE: **52.5%** text-only (Artificial Analysis); **70.0%** with tools (Moonshot; reported rank 1 of 37); HLE-Diamond 39.4%.
- AA-LCR (long-context reasoning, ~100K in): **86.3%** (rank 3 of 423) — slightly below Kimi K3's 88.7%.
- MLCR-AA: **38.3%** pass^1, 93.9% accuracy / 39.4% completeness.
- CritPt: **24.6%** (rank 12 of 32).
- Artificial Analysis Intelligence Index: **55** at 4th (AA launch article, Index v4.3.2) vs **46** on the AA/BenchLM/BenchmarkList model page — a documented snapshot/version conflict. AIIQ Composite IQ **131**.
- AA-Omniscience: index 29.87; accuracy 48.9%, hallucination rate 37.3–43.9%. Internal Kimi Hallu Bench Hard claim-level hallucination **8.3%** with tools (down from 23.4% for K3).

Coding:

- DeepSWE v1.1: **75.5%** (Moonshot; rank 5 of 61).
- SciCode / AA-SciCode: **60.8%** (rank 9 of 311) — AA marks SciCode under review.
- SWE-Marathon v1.1: **51.7%** (Moonshot; rank 3 of 37).
- Kimi Code Bench 3.0 Long-horizon: **61.2%** (vs K3 55.95%); Kimi Code Bench 2.0: 77.1%.
- LiveBench 2.0 coding suite: **81.8%** (2026-10-25 release); overall 71.3; agentic suite 39.1 (via Kingy.ai).
- Vibe Code Bench v1.1: **84.89%** (Vals AI, modified OpenHands, ±2.95 SE) — essentially level with K3's 84.97%.
- ProgramBench (binary ≥95% threshold): **31.5%** (rank 31 of 42) — a clear weakness vs Opus 5.5 65.0%.
- FrontierCode 1.1 Main: **47.1%** (Artificial Analysis, Stirrup harness). Bug Hunt Bench: 36.0/105 mean fixes (32.0 if one failed run counted as zero).

Long context:

- AA-LCR v1.1 **86.3%** at ~100K input (rank 3 / 423). No independent MRCR/RULER figure at the full 1M window found — advertised capacity only; no verified retrieval-at-512K number.

### Normalized scores (1–100)

- **Tool use: 93/100.** Agentic stack is the standout: GDPval-AA 1,846 Elo (top-4 of 358), AutomationBench-AA 73.3%, BrowseComp 92.1%, OSWorld 79.6%, plus a saturated HLE-with-tools. Capped just below 95 by Terminal-Bench-Science 38.1% and the Harvey/Agents'-Last-Exam mid-tier results.
- **Reasoning: 90/100.** GPQA Diamond 94.2% is frontier-class and HLE 52.5% clears the 40%+ frontier reference, but the composite Index (55 / 46) and CritPt 24.6% lag the very top, and the non-agentic academic/scientific rows moved only modestly over K3.
- **Context window: 96/100.** True 1,048,576-token window (≥1M tier) with a documented 131K default output; capped below 100 because AA-LCR only reaches 86.3% at ~100K and no ≥98%-at-512K retrieval proof exists.
- **Multimodal: 88/100.** Text + image input (video at product level), text out, with strong vision reasoning: MMMU-Pro 90% (84.1% no-python), Chartography 90.2%, CharXiv-R 93.4%, ZeroBench 63%. Capped below 90 by no audio input and no non-text output.
- **Coding: 91/100.** DeepSWE 75.5% clears the 74% frontier reference; SciCode 60.8%, Vibe Code 84.89%, LiveBench coding 81.8%. Capped by ProgramBench 31.5% and FrontierCode 47.1% weaknesses.
- **Cost efficiency: 66/100.** $2/$10 with $0.20 cached input is cheap for a near-frontier model, but ~$2 per AA Intelligence-Index task and heavy output-token use (~55K task tokens) put it mid-pack on cost-per-task economics.
- **Overall Score: 92/100.** Half-up mean of (93 + 90 + 96 + 88 + 91) / 5 = 91.6 → 92. Best-fit: frontier-class agentic coding and long-horizon knowledge work where open weights (or a cheap frontier route) matter, and the API budget tolerates ~$2/task.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-30
- Method: public internet research (official Moonshot launch blog; Artificial Analysis article + model page; BenchmarkList; BenchLM; Kingy.ai evidence guide aggregating LiveBench 2.0, Vals AI, Plotly, Bito, Arena); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

### Sources

- Moonshot AI — Introducing Kimi K3.1 Pro (official launch blog, benchmarks, cybersecurity, availability) — https://www.kimi.ai/blog/kimi-k3-1-pro
- Artificial Analysis — "Kimi K3.1 Pro launches at 4th on the Intelligence Index" (Index 55, GDPval 1,846, costs, 2.8T/104B) — https://artificialanalysis.ai/articles/kimi-k3-1-pro-launch-benchmarks
- BenchmarkList — Moonshot AI Kimi K3.1 Pro (30 benchmarks, percentiles, $2/$10/$0.20) — https://benchmarklist.com/models/moonshotai-kimi-k3.1-pro/
- BenchLM — kimi-3-1-pro (74.61 #13, per-benchmark rows, AA cross-refs) — https://benchlm.ai/models/kimi-3-1-pro
- Kingy.ai — "Kimi K3.1 Pro: Specs, Benchmarks, Pricing & Comparisons" (verified specs, AA/LiveBench/Vals/Plotly/Bito/Arena, Terminal-Bench harness conflict) — https://kingy.ai/blog/kimi-k3-1-pro/
- Vals AI Terminal-Bench 4.0 (63.64%, ±1.75 SE) — https://www.vals.ai/benchmarks/terminal-bench-4 ; Vals Vibe Code Bench v1.1 (84.89%) — https://www.vals.ai/benchmarks/vibe-code
- OpenRouter model listing (pricing) — https://openrouter.ai/moonshotai/kimi-k3.1-pro
- LiveBench 2.0 (2026-10-25 release; overall 71.3) — https://livebench.ai/
