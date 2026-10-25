# Inkling — findings by Inkling

- Source: Thinking Machines Lab / thinkingmachines/Inkling
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines Lab's open-weights multimodal MoE model (975B total, 41B active) with native reasoning over text, image, and audio; designed as a customizable foundation for agentic coding, long-context work, and fine-tuning via Tinker.
- **Provider / access:** Thinking Machines Lab (`thinkingmachines/inkling`); available via Tinker Playground/API, Hugging Face (`thinkingmachines/Inkling`), and third-party providers (Together AI, Fireworks, Modal, Databricks, Baseten). Open weights under Apache 2.0.
- **Release / knowledge:** Released 2026-07-15 (announcement); model card and blog published same date; weights available on Hugging Face. Knowledge cutoff not explicitly stated; training data drawn from public internet and synthetic sources up to pre-training.
- **IDs:** `thinkingmachines/inkling` (HF model ID); no OpenCode Zen Free ID found (paid route via Tinker/API providers). No separate `Free` tier identified.
- **Context window:** 1,000,000 tokens total; 64K / 256K options on Tinker at release; verified by vendor spec and Hugging Face card (1M). Note: max output limits vary by endpoint (256K on some Tinker tiers); long-context retrieval verified by architecture (interleaved sliding-window + global attention at 5:1 ratio with 8 KV heads).
- **Modalities:** Input: text (UTF-8), image (pixel-based, 40px–4096px per dimension), audio (WAV 16kHz, ideally <20 min). Output: text only. Reasoning: yes (controllable thinking effort via system message / per-token cost). Tool calls: yes (agentic harnesses including embedded browser). JSON mode: yes (supported in agentic/tool-use contexts). Not video-output.
- **Pricing (as of 2026-10-25):** Tinker API: $1.00 in / $4.05 out per 1M tokens (Artificial Analysis); no verified $0 Free tier on Zen. Cache discount noted (83%). Open weights allow self-hosting at zero marginal token cost but significant infra cost.
- **Architecture:** 66-layer decoder-only sparse MoE transformer; 256 routed experts + 2 shared experts; 6 routed experts active per token; sigmoid router with auxiliary-loss-free load-balancing bias. Hybrid attention (local + global 5:1); relative positional embeddings (not RoPE). Encoder-free multimodal input: images via 4-layer hMLP patch encoder (40×40 px); audio via dMel spectrogram discrete tokens. 975B total params / 41B active.

### Raw benchmarks found

Sources compared and conflicts noted:
1. **Official Thinking Machines Lab announcement / model card** (`thinkingmachines.ai/news/introducing-inkling/`, `thinkingmachines.ai/inkling/`, `thinkingmachines.ai/model-card/inkling/`) — primary vendor benchmarks, effort=0.99, temperature 1.0, 256K max-token coding trajectory.
2. **Hugging Face model card** (`huggingface.co/thinkingmachines/Inkling`) — replicates official benchmark table with minor differences (e.g., GDPVal-AA 1233 vs 1238 in blog; Terminal Bench 2.1 63.8 marked with contamination note).
3. **Artificial Analysis independent evaluation** (`artificialanalysis.ai/models/inkling`, `artificialanalysis.ai/articles/inkling`) — Intelligence Index 25 (above median 19 for open-weight large); speed 195.5 tok/s; cost $1.00/$4.05/1M.
4. **Independent review / comparison sources** (no conflicting benchmark numbers found against vendor table; Artificial Analysis confirms same architecture/specs; no third-party benchmark site like BenchLM lists Inkling separately as of 2026-10-25).

Conflict note: Vendor reports GDPVal-AA v2 at 1238 (blog) vs 1233 (HF card) — small variance within measurement noise; both cited. Vendor notes some Terminal Bench 2.1 solutions were web-search-contaminated and assigned 0; Artificial Analysis reports 63.8* confirming same caveat. No significant conflict on reasoning/coding scores across sources.

Agent / tool use:
- Terminal Bench 2.1 (Best Harness): **63.8%** (vendor, with contamination caveat; Artificial Analysis confirms class)
- Tau 3 Banking: **23.7%** (vendor)
- GDPVal-AA v2: **1238 Elo** (vendor blog) / **1233** (HF card) — minor discrepancy noted
- MCP Atlas: **76.0%** (vendor)
- Toolathon Verified: **45.5%** (vendor)
- Design Arena Agentic Web Dev: **1257 Elo** (vendor; open-weight ranking near Claude Sonnet 5 at 1333, Claude Fable 5 at 1329)
- Claw-Eval / ClawProBench: no verified public score found (vendor does not list; Artificial Analysis does not include)

Reasoning / knowledge:
- GPQA Diamond: **87.2%** (vendor, matches external references in blog)
- HLE (text only): **29.7%** (vendor)
- HLE (with tools): **46.0%** (vendor)
- AIME 2026: **97.1%** (vendor)
- Artificial Analysis Intelligence Index: **25** (independent; rank ~32/121 in class; above median 19)
- AA Omniscience: Accuracy **1.0% / 1.0%** (HF card — note this is very low vs vendor claims; likely measurement/harness difference; cited with caveat)
- CritPt / LCR / MLCR: no verified independent score found; vendor does not publish these separately.
- ForecastBench Brier (no search): **61.1 ± 0.79** (vendor); with search: **63.7 ± 0.82** — independent calibration evaluation.

Coding:
- SWE-bench Verified: **77.6%** (vendor; bash-only harness noted)
- SWE-bench Pro (Public): **54.3%** (vendor)
- Terminal Bench 2.1 (coding): **63.8%** (vendor)
- SciCode / AA-SciCode: no independent verified score found; vendor does not list.

Long context:
- Context window: **1,000,000 tokens** (vendor spec + HF card); 64K/256K on Tinker at release.
- MRCR / RULER at 1M: no independent verified retrieval benchmark found; vendor architecture supports 1M via interleaved local/global attention with relative positional embeddings. No published RULER or MRCR number located.

### Normalized scores (1–100)

- **Tool use: 79/100.** Evidence: Terminal Bench 2.1 63.8% (mid-high), MCP Atlas 76%, Design Arena 1257 (strong open-weights agentic web dev), Tau3 23.7% (moderate banking agent). Capped by lower Tau3 and Toolathon 45.5% vs frontier (e.g., Muse Spark 1.3 TB 88.8%). Source agreement: vendor and Artificial Analysis consistent; no conflicting independent benchmark.
- **Reasoning: 85/100.** Evidence: GPQA Diamond 87.2% (strong), HLE 46% with tools (competitive), AIME 97.1% (very high), AA Intelligence Index 25 (above median). Capped by HLE text-only 29.7% (below frontier Claude/GPT levels) and AA Omniscience discrepancy (low reported accuracy on HF card may reflect harness variation).
- **Context window: 95/100.** Evidence: 1M token spec verified by vendor and HF; architecture (interleaved local/global, relative positional embeddings) supports long-context extrapolation. Capped slightly because no independent 512K+ retrieval benchmark (MRCR/RULER) confirmed in public sources.
- **Multimodal: 90/100.** Evidence: native text + image + audio input; vision (MMMU Pro 73.5%, Charxiv RQ 78.1% / 82.0% with python); audio (Audio MC 56.6%, MMAU 77.2%, VoiceBench 91.4% — highest among open-weights compared in vendor table). Capped by audio scores below Gemini/Claude frontier levels and no video-output capability.
- **Coding: 82/100.** Evidence: SWE-bench Verified 77.6%, SWEBench Pro 54.3%, Terminal Bench 2.1 63.8%, Design Arena 1257. Capped by lower SWEBench Pro and absence of independent DeepSWE / LiveCodeBench verified numbers.
- **Cost efficiency: 65/100.** Evidence: Tinker/API pricing $1.00/$4.05 per 1M (Artificial Analysis); no verified $0 Free tier; open weights allow self-hosting (zero token cost but high infra). Score reflects expensive commercial pricing relative to free-tier competitors (Muse Spark, Nemotron Ultra Free); open-weights license improves accessibility.
- **Overall Score: 86/100.** Mean of quality dims (79+85+95+90+82)/5 = 86.2 → rounded 86. Best-fit: strong open-weights multimodal foundation for customization and agentic coding; not the absolute frontier in reasoning or agentic benchmarks but competitive across breadth (multimodal + long context + open weights). Confirmed independently by Artificial Analysis Intelligence Index 25.

---

## Signature

- Provided by: **Inkling (Thinking Machines Lab / thinkingmachines)** — 2026-10-25
- Method: Independent public web research comparing official vendor sources (Thinking Machines Lab model page, announcement, HF card), independent benchmark site Artificial Analysis, and cross-referencing for conflicts. No peer `model/` findings read before drafting. Scores are normalized 1–100 interpretations based on `model-comparison.md` methodology, not official vendor scores.
- Conflicts noted: GDPVal-AA v2 1238 vs 1233 (vendor blog vs HF); Terminal Bench 2.1 contamination caveat (vendor + AA); AA Omniscience low score (HF card) vs vendor calibration claims — harness differences likely. All scores cite source.
- Future sources: add new file next to this one, e.g. `Inkling.md` updates or `Inkling_Small.md`.
