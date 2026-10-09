# Kimi K2.5 — findings by Space Bunny

- Source: Moonshot AI (`kimi-k2.5`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's **native multimodal agentic** open-weight model, released **2026-01-27** via continual pretraining on ~15T mixed visual+text tokens on top of Kimi-K2-Base. Its defining feature is the **Agent Swarm** paradigm — a self-directed architecture that coordinates up to **100 parallel sub-agents** (1,500+ tool calls, up to 4.5× faster execution) without predefined roles. Top use case: visual-to-code front-end work, large-scale parallel research, and document/office automation. It has since been **superseded by Kimi K2.6 and Kimi K3**; Moonshot identifies K3 as the successor for supported frontier workloads and K2.5's hosted API is **approaching retirement**.
- **Provider / access:** Moonshot AI API (`kimi-k2.5`, `moonshot/kimi-k2.5`); NVIDIA NIM (`moonshotai/kimi-k2.5`); OpenRouter; Requesty; **Google Vertex AI does not serve K2.5** (it lists the older `vertex/kimi-k2`). OpenAI- and Anthropic-compatible APIs; instant, thinking, agent and agent-swarm modes. **No OpenCode Zen ID found.**
- **Release / knowledge:** Released **2026-01-27** (Moonshot's official research index and Kimi's help center); NVIDIA NIM and Vals list 2026-01-26. **Knowledge cutoff: October 2025** (ApX).
- **IDs:** `kimi-k2.5` (Moonshot), `moonshotai/kimi-k2.5` (NIM), `moonshot/kimi-k2.5` (OpenRouter/Requesty)
- **Context window:** **256K (262,144 tokens)** per Moonshot's official API pricing table and Vals; Requesty also lists 262K. ApX lists 512K — **unresolved discrepancy**, scored on the officially listed 256K. Max output: 262K (Requesty) / 128K (Vals harness setting).
- **Modalities:** **Image, video, and text in → text out**; NVIDIA's NIM card also lists **PDF** input, with video marked experimental. Vision is native (MoonViT, ~400M-parameter encoder, architecturally integrated rather than bolt-on) with spatial-temporal pooling before projection. Reasoning: yes (instant and thinking modes; Vals runs it at temperature 1, top_p 0.95). Tool calls: yes. Visual coding loop: the model can inspect rendered screenshots against a design and iterate.
- **Pricing (as of 2026-10-09):** **$0.60 in / $3.00 out** per 1M (Moonshot, Vals, Requesty all agree). ApX lists $2.75 output; pricepertoken lists $0.45/$2.25 for the "Thinking" variant via OpenRouter. **Moonshot's hosted endpoint is closed to newly registered users and is listed for an August 31 sunset** (year unstated in the official notice) — migrate to K2.6/K3 or self-host the weights.
- **Architecture:** **1T total / 32B active sparse MoE**, 61 layers (1 dense + 60 MoE), 384 routed experts with 8 selected per token plus 1 shared expert, attention hidden dimension 7,168, 64 attention heads, MLA attention, SwiGLU, ~160K vocabulary, MoonViT 400M vision encoder. **Modified MIT License** — commercial use, fine-tuning and redistribution permitted. Both `Kimi-K2.5-Base` and `Kimi-K2.5-Instruct` weights are public; native int4 quantization (~630 GB) is supported. Self-hosting footprint at 512K context is roughly 2.96 TB of VRAM (FP16 estimate).

### Raw benchmarks found

Agent / tool use:

- τ²-Bench: **95.9%** (Requesty/AA aggregator; vs Kimi K2's 93.0%) — the standout tool-use number
- BrowseComp: **60.6%** (benchlm.ai) / **74.9%** (Benchgen evaluation, 2025-07 — stale page with wrong release date, use with caution)
- Claw-Eval: **52.3%** (benchlm.ai) — one of the few verified Claw-Eval figures in the dataset
- ClawProBench: no verified public score found
- τ³-bench: **65.7%** (benchlm.ai)
- DeepSearchQA: **77.1%** (benchlm.ai)
- WideResearch: **72.7%** (benchlm.ai)
- MCP-Tasks: **59.1%** (benchlm.ai)
- Toolathlon: **27.8%** (benchlm.ai)
- MCP Atlas: **29.5%** (benchlm.ai)
- ResearchClawBench: **14.0%**; DeepPlanning: **14.4%**; Gert Labs: **45.88**; JobBench: **8.7%** (all benchlm.ai)
- Terminal-Bench 2.0: **50.8%** (benchlm.ai); Terminal-Bench 2.1: **41.95% ±0.75** (#67 of 75, Vals); Terminal-Bench Hard: **34.8%** (Requesty)
- GDPval-AA: no verified public score found for this model (Haiku 4.5 is listed at 1,177)
- Agent Swarm (architectural, not a benchmark): up to 100 sub-agents, 1,500+ tool calls, up to 4.5× faster than sequential single-agent execution

Reasoning / knowledge:

- GPQA Diamond: **84.09% ±2.13** (#55 of 138, Vals) / **87.6%** (benchlm.ai GPQA and GPQA-D) / **87.9%** (Requesty) — harnesses differ
- MMLU-Pro: **85.91% ±0.34** (#52 of 138, Vals)
- HLE: **30.1%** (benchlm.ai HLE leaderboard) / **30.7%** (Requesty) / **24.4%** (Benchgen, stale). Notably **ahead of Claude Opus 5.5's HLE-adjacent tier on cost** but well below GPT-5.5's 52.2%.
- LongBench v2: **61%** (benchlm.ai) — the only long-context retrieval measurement
- SuperGPQA: **69.2%** (benchlm.ai)
- AIME 2026: **95.8%** / AIME 2025: **96.1%** (vendor/Benchgen)
- CritPt / Omniscience / LCR: no verified public score found
- Artificial Analysis Intelligence Index: **23.5%** (Requesty aggregator); Coding Index **46.8%**

Coding:

- SWE-bench Verified: **76.8%** (benchlm.ai, Benchgen, kimik2ai — three sources agree)
- SWE-bench Verified (alternate harness, marked `*`): **70.8%**
- SWE-bench (Vals harness): **70.00% ±2.05** (#61 of 88)
- SWE-bench Pro: **50.7%** (benchlm.ai)
- SWE-bench Multilingual: **73.0%** (vendor) / **73%** (benchlm.ai)
- LiveCodeBench v6: **85.0%** (benchlm.ai); LiveCodeBench (Vals): **83.87% ±1.03** (#46 of 143)
- SWE-Rebench: **58.5%** (benchlm.ai)
- React Native Evals: **77.2%** (benchlm.ai)
- SciCode: **48.7%** (benchlm.ai)
- Vibe Code Bench v1.1: **17.54% ±3.26** (#79 of 106, Vals) — weak
- Terminal-Bench 2.0: **50.8%**; Terminal-Bench 2.1: **41.95%** (see above)
- DeepSWE: no verified public score found for this model
- Coding Index: **46.8%** (Requesty)

Multimodal / grounded:

- MMMU-Pro: **78.5%** (benchlm.ai) / **84.33% ±0.87** (#26 of 93, Vals)
- Video-MME: **87.4%** (benchlm.ai)
- MMVU (video understanding): **80.4%** (benchlm.ai)
- BenchLM multimodal & grounded public-lane score: **66.8 (#25 of 50)**
- Architecture: MoonViT 400M vision encoder; up to 4K images (4096×2160) and 2K video (2048×1080); png/jpeg/webp/gif and mp4/mpeg/mov/avi/flv/mpg/webm/wmv/3gpp

Long context:

- 256K context (262,144 tokens) per the official API pricing table. **LongBench v2 at 61%** is the only retrieval evidence. No MRCR/RULER/GraphWalks numbers. ApX's 512K figure is not corroborated by Moonshot or any major aggregator — noted as an unresolved discrepancy.

Industry / vertical benchmarks (Vals, 2026-01-26):

- Vals Index: **47.81%** (#1 open-weight model at the time of evaluation), avg. cost $0.60/$3.00, latency 299m 07s
- TaxEval v2: **74.20%** (#40 of 145); MedScribe **76.44%** (#73 of 106); MortgageTax **66.53%** (#34 of 98); MedCode **39.32%** (#66 of 104); EMB **28.47%** (#59 of 69); Finance Agent v2 **35.79%** (#62 of 73); Legal Research Bench **15.87%** (#53 of 72); SAGE **49.87%** (#19 of 90); Code Migration **6.96%** (#60 of 71); Vals RSI Index **6.85%** (#23 of 23); **Harvey's Legal Agent Benchmark 0.00%** (#72 of 73)

### Normalized scores (1–100)

- **Tool use: 70/100.** τ²-Bench at 95.9% and τ³-Bench at 65.7% are strong, BrowseComp 60.6% and DeepSearchQA 77.1% are credible research numbers, and Claw-Eval 52.3% gives a rare verified Claw figure. Pulled down hard by JobBench at 8.7%, ResearchClawBench 14.0%, DeepPlanning 14.4%, Toolathlon 27.8%, MCP Atlas 29.5%, and Terminal-Bench 2.1 at 41.95% — long-horizon autonomous agentic work is clearly not this checkpoint's strength.
- **Reasoning: 74/100.** GPQA Diamond 84.09% (Vals) and MMLU-Pro 85.91% are solidly mid-frontier, AIME ~96% shows real math strength. Capped by HLE at only ~30%, an AA Intelligence Index of 23.5%, and no CritPt/Omniscience/LCR data.
- **Context window: 82/100.** 256K (262,144) verified on Moonshot's own pricing table — mid tier. LongBench v2 at 61% gives modest real retrieval evidence, and the unresolved ApX 512K claim cannot be credited. Not 100 because it is nowhere near 1M.
- **Multimodal: 84/100.** Genuinely native multimodal: image + **video** + PDF + text in, with an architecturally integrated 400M MoonViT encoder. Independently corroborated by MMMU-Pro 78.5%–84.33%, Video-MME 87.4% and MMVU 80.4%. Capped only by text-only output and no audio path.
- **Coding: 76/100.** SWE-bench Verified 76.8%, SWE-bench Multilingual 73%, LiveCodeBench v6 85.0%, React Native Evals 77.2% and Terminal-Bench 2.0 50.8% are respectable open-weight results. Held well below the frontier by SWE-bench Pro 50.7%, SWE-Rebench 58.5%, SciCode 48.7% and Vibe Code Bench v1.1 at just 17.54%.
- **Cost efficiency: 88/100.** $0.60 in / $3.00 out lands at the ~$1.25/$4.25 reference point (~88), is ~16–25× cheaper than Western frontier alternatives per Moonshot, and the **Modified MIT weights permit full commercial self-hosting** — the strongest cost argument in the open-weight tier. The Moonshot-hosted sunset and no Free API tier keep it from the 90s.
- **Overall Score: 77/100.** Best fit: self-hosted native-multimodal agent and visual-coding workloads that need Agent Swarm parallelism and 100-subagent fan-out — but migrate off the hosted endpoint, and prefer K2.6 or K3 for hard agentic coding, where this checkpoint's Vibe Code Bench and JobBench numbers are weak.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-09
- Method: public internet research cross-checked across Moonshot's official model page, Kimi's Agent Swarm help-center documentation, Moonshot's GitHub repository and the K2.5 Hugging Face model card via NVIDIA NIM's model card (full architecture spec), Vals AI's model profile and benchmark tables, benchlm.ai comparison tables, Requesty's model comparison pages, ApX's specification and VRAM page, and Kimi's own release materials. Explicitly flagged the 256K-vs-512K context discrepancy, the conflicting release dates (Jan 26 vs Jan 27), the GPQA Diamond harness spread (84.09% / 87.6% / 87.9%), and a stale third-party page with an incorrect release date. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Kimi_K2.5_Retest.md`, using the same headings — worth re-scoring once the hosted endpoint sunsets and terminal/JobBench numbers are independently re-run.