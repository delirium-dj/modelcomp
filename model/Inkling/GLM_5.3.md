# Inkling — findings by GLM 5.3

- Source: Thinking Machines Lab (`thinkingmachines/inkling`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines Lab's first open-weights model (released 2026-07-15): a 975B-total / 41B-active MoE generalist pretrained on 45T tokens of text, images, audio and video, built as a customization base with controllable thinking effort. Top use case: fine-tunable multimodal foundation for agentic and interaction-model workflows.
- **Provider / access:** Open weights on Hugging Face `thinkingmachines/inkling` (plus NVFP4 checkpoint); fine-tuning/playground on Tinker (64K / 256K context options); hosted APIs on Together AI, Fireworks, Modal, Databricks, Baseten; SGLang/vLLM/TokenSpeed/llama.cpp inference support.
- **Release / knowledge:** 2026-07-15; knowledge cutoff not stated publicly.
- **IDs:** `thinkingmachines/inkling` (curated repo metadata references `opencode/Inkling`, but the model is absent from the current OpenCode Zen endpoint list — no Zen Free ID).
- **Context window:** up to 1M tokens native (vendor announcement + BenchLM); Tinker serves 64K/256K options.
- **Modalities:** text, image, and audio in / text out (encoder-free dMel audio + 40x40 image patches; "reasons natively over text, images, and audio"); reasoning yes (hybrid, controllable thinking effort 0.2–0.99); tool calls yes (harness-randomized tool training); JSON mode not separately verified.
- **Pricing (as of 2026-09-25):** open weights (self-host license $0); Tinker fine-tuning offered at a limited-time 50% discount (full pricing in Tinker docs — per-token rates not verified in this research); hosted per-token API rates vary by partner — no single verified public price found.
- **Architecture:** MoE transformer, 975B total / 41B active; DeepSeek-V3-style 256 routed experts + 2 shared (6 active), sigmoid router with aux-loss-free balancing; 5:1 sliding-window/global attention interleave; relative positional embeddings (no RoPE); short convolutions on K/V and residual branches; trained with Muon + Adam hybrid optimizer on NVIDIA GB300 NVL72.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (best harness): **63.8%** (vendor announcement, effort 0.99, contamination-zeroed; BenchLM lists same; Vals variant 47.6%)
- MCP Atlas: **76.0%** (vendor) / **74.1%** (BenchLM)
- GDPval-AA v2: **1238 Elo** (vendor at effort 0.99) / **1165 Elo** (BenchLM)
- Toolathlon-Verified: **45.5%** (vendor)
- Tau3-Banking: **23.7%** (vendor, AA-run) / **29.1%** (BenchLM)
- BrowseComp (with context management): **77.1%** (vendor)
- AA Agentic Index **24.3%**, AA EnterpriseOps-Gym **38.0%**, AA-AnalystAgent **23.8%** (BenchLM)
- Claw-Eval / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **87.2%** (vendor, AA-run) / **87.9%** (BenchLM)
- HLE: **29.7% text-only / 46.0% with tools** (vendor; BenchLM lists 46% / 30% w-o-tools)
- AIME 2026: **97.1%** (vendor + BenchLM)
- LCR / MLCR: AA-LCR **77.3%** (BenchLM); MLCR no verified public score found
- CritPt: **5.4%** (BenchLM)
- Artificial Analysis Intelligence Index: **25.0** (BenchLM)
- Omniscience: Index **2.0–2.1**, Accuracy **41.6%**, hallucination-rate field **67.7%** (BenchLM/vendor; label ambiguous vs AA's "Non-Hallucination Rate" — flagged, not double-counted)
- MMLU-Pro (Vals) **86.3%**, Global-MMLU-Lite **88.7%**, IFBench **79.8%** (BenchLM/vendor)
- ForecastBench Brier 61.1 (no search) / 63.7 (search); Prophet Arena 0.1617 (vendor epistemics table — strong calibration)

Coding:

- SWE-bench Verified: **77.6%** (vendor, bash-only harness; BenchLM same)
- SWE-bench Pro: **54.3%** (vendor + BenchLM)
- LiveCodeBench (Vals): **85.5%** (BenchLM)
- AA-SciCode **47.0%**, AA Coding Index **52.1%**, FrontierSWE v2 **4.1%** (BenchLM)
- Design Arena Agentic Web Dev Elo: **1257** (Design Arena leaderboard via vendor — tops GLM 5.1 1233, Kimi K2.7 Code 1234; GLM 5.2 1275 is higher)
- Vibe Code Bench: **no verified public score found**

Long context:

- 1M native window (vendor/BenchLM); AA-LCR 77.3% (BenchLM); no MRCR/RULER per-length data — no long-context retrieval score found.

Multimodal:

- MMMU-Pro (Standard 10): **73.5%** (vendor + BenchLM)
- CharXiv RQ **78.1%** (no tools) / **82.0%** (with Python) (vendor + BenchLM)
- Audio MC **56.6%**, MMAU **77.2%**, VoiceBench **91.4%** (vendor — strongest open-weights audio tier)

Safety (context):

- FORTRESS Adversarial **78.0%** / Benign **95.9%**, StrongREJECT **98.6%** (vendor — strongest open-weights refusal balance in its comparison set)

### Normalized scores (1–100)

- **Tool use: 74/100.** MCP Atlas 76%, BrowseComp 77.1% and TB 2.1 63.8% are top-tier open-weights results, but GDPval-AA 1238–1165 is mid-band, Toolathlon 45.5% and Tau3 ~24–29% lag frontier agents (Toolathlon 76%+ class).
- **Reasoning: 80/100.** HLE-with-tools 46.0% is near-frontier, GPQA 87.2% and AIME 97.1% strong, and calibration training is a differentiator (ForecastBench beats GPT-5.5 no-search); CritPt 5.4%, AA Index 25.0 and weak Omniscience cap it.
- **Context window: 95/100.** 1M native window = ≥1M tier; AA-LCR 77.3% is solid but no ≥98%-retrieval evidence; Tinker serving tops out at 256K today.
- **Multimodal: 91/100.** Text+image+audio input (audio = top tier) with the best open-weights audio suite found (VoiceBench 91.4%, MMAU 77.2%) and solid vision (MMMU-Pro 73.5%, CharXiv 82% with Python); text-only output and no verified video input keep it under 95.
- **Coding: 73/100.** SWE-bench Verified 77.6% and LiveCodeBench 85.5% are competitive; SWE-bench Pro 54.3%, AA Coding Index 52.1% and FrontierSWE v2 4.1% sit well below frontier agentic coding.
- **Cost efficiency: 88/100.** Open weights with $0 self-host license and broad partner APIs; only the lack of a verified canonical per-token price (and 975B-total hosting weight) keeps it under 90.
- **Overall Score: 83/100.** Half-up mean of the five quality dims (74+80+95+91+73)/5 = 82.6 → 83 — the most balanced open-weights generalist found, and the best open base for audio-capable fine-tuning; frontier agents still beat it on agentic coding.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (Thinking Machines Lab announcement and benchmark tables, BenchLM, Design Arena leaderboard via vendor); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
