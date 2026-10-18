# Qwen 3.5 — findings by GLM 5.3 Flash

- Source: Alibaba/Qwen (`qwen3.5-397b-a17b` open-weight / `qwen3.5-plus` hosted)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5
- **Short description:** Alibaba's "native multimodal agents" foundation model — a 397B-parameter MoE activating only 17B per forward pass, fusing text and vision from pretraining, supporting 201 languages, and shipping open weights. The open-weight Qwen3.5-397B-A17B is the flagship (BenchLM #60 of 889, 55.53); Qwen3.5-Plus is the hosted proprietary version on Alibaba Cloud Model Studio (built-in search + code interpreter). Sibling folders: `qwen-3.5-9b` (small dense) and `qwen-3.5-plus` (Zen-hosted Plus tier) are variants, not this base model.
- **Provider / access:** Hugging Face open weights `Qwen3.5-397B-A17B` (807GB full; Unsloth quants 94GB–462GB); Alibaba Cloud Model Studio hosted `qwen3.5-plus` (Chat Completions, built-in search + code interpreter); OpenCode Zen serves `qwen3.5-plus` (models.dev: 262,144/65,536, $0.20/$1.20).
- **Release / knowledge:** Released February 2026 (Serenities AI review dated 2026-02-20, updated 2026-02-26; 363 points on Hacker News within hours). Knowledge cutoff not published.
- **IDs:** `Qwen3.5-397B-A17B` (open weights); `qwen3.5-plus` (hosted/Zen). State explicitly: no Zen Free ID exists for Qwen 3.5 — the Zen `qwen3.6-plus-free` ID belongs to Qwen 3.6, not 3.5.
- **Context window:** 262,144 tokens native on the open-weight model (BenchLM lists 128K — unresolved conflict), extensible beyond 1M; hosted Qwen3.5-Plus handles 1M by default (Serenities AI). The Zen-served `qwen3.5-plus` listing caps at 262,144 total / 65,536 max output.
- **Modalities:** text and image in (native text-vision fusion); video analysis on the hosted tier (2+ hours); text out; reasoning yes (hybrid, toggleable; BenchLM classifies the base variant as non-reasoning); tool calls yes (native MCP, search, code interpreter); GUI agent capabilities (desktop + mobile); JSON mode not verified.
- **Pricing (as of 2026-10-11):** Zen `qwen3.5-plus` $0.20 in / $1.20 out per 1M (paid; no Free ID); open weights make self-hosting a $0-marginal-cost lever (FP8 native pipeline cuts activation memory ~50%).
- **Architecture:** 397B total / 17B active sparse MoE (512 experts: 10 routed + 1 shared); hybrid linear attention via Gated Delta Networks combined with standard attention heads; multi-token prediction; FP8 native pipeline; open weight (open-weight ≠ fully open source — training data/pipeline not published); decoding throughput 8.6×–19× faster than Qwen3-Max depending on context length.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **83.9%** (AA, independent — fills the Tau2 gap); MCP-Tasks: **74.2%**; WideResearch: **74.0%**; BrowseComp: **69.0 / 78.6** with the discard-all strategy, beating GPT-5.2 (65.8) (Alibaba tables)
- MCP Atlas: **46.1%**; Toolathlon: **36.3%**; VITA-Bench: **43.7%**; DeepPlanning: **37.6%**; QwenClawBench: **51.8%**; Claw-Eval: **56.8%** (Qwen tables — document the weaker base-model tool profile)
- OSWorld-Verified: **62.2%** (vs GPT-5.2 38.2, Claude 4.5 Opus 66.3); AndroidWorld: **66.8**; ScreenSpot Pro: **65.6**
- MCP-Mark: **46.1** (Alibaba comparison table; vs GPT-5.2 57.5)
- τ³-bench: **68.4%**; Terminal-Bench 2.0: **52.5%**; Gert Labs: **46.76%**; ResearchClawBench: **14.2%** (Qwen3.6-Plus table + leaderboards, added 2026-10-16); Terminal-Bench 2.1 / GDPval-AA: no verified public score found
- AA Agentic Index: **8** (prior pass, rank #103 — weak)

Reasoning / knowledge:

- GPQA (STEM): **88.4%** (Alibaba table — corroborated by the Qwen3.6-Plus table); AA-GPQA Diamond: **86.1%**
- HLE: **28.7%** (Qwen3.6-Plus comparison table — fills the gap); AA-HLE: **19.8%** (AA)
- Artificial Analysis Intelligence Index: **21.4** (AA — fills the index gap; BenchLM overall 55.53, #60 of 889; 2026-10-17: #65/954, 55.34)
- AA-LCR v1.1: **64.3%** (AA — fills the long-context gap, mid); LongBench v2: **63.2%**; AI-Needle: **68.7%** (Qwen tables); CritPt: **0.9%** (AA — near-zero)
- MMLU-Pro: **87.8%** (corroborated); MMLU-Redux: **94.9%**; C-Eval: **93%**; AIME26: **93.3%** (Qwen tables; DigitalApplied cited 91.3)
- IFBench: **76.5%** (leads all competitors); MultiChallenge: **67.6%** (leads); IFEval: **92.6%**
- MathVision: **88.6%** (leads); ZEROBench: **12 / 41.0** (leads)
SKIP — worst index measured in this repo)
- MLCR: no verified public score found

Coding:

- SWE-bench Verified: **76.2–76.4%** (Alibaba/Qwen3.6-Plus tables — consistent across both readings)
- LiveCodeBench v6: **83.6%** (Qwen3.6-Plus table — corroborates the DigitalApplied guide)
- SWE-bench Multilingual: **69.3%**; SWE-bench Pro: **50.9%** (Qwen tables — fills the SWE-Pro gap, weak); NL2Repo: **32.2%**
- SecCodeBench: **68.3%** (nearly tied with Claude 4.5 Opus 68.6); Stack Unseen: **76.3%**; AA Coding Index: **48** (prior pass)
- SciCode / AA-SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- AA-LCR 64.3%, LongBench v2 63.2%, AI-Needle 68.7% — first measured long-context evidence (mid); 262K native / 1M+ hosted per vendor coverage, still unmeasured at the top

Multimodal:

- VideoMMMU: **84.7%**; Video-MME: **83.7–87.5%**; MLVU: **86.7%** — video understanding measured; MMMU: **85.0%**; MMMU-Pro: **79.0%** (Qwen tables; AA-MMMU-Pro reads 52.7% — vendor-vs-independent conflict flagged); OmniDocBench 1.5: **90.8%**; CharXiv: **80.8%**; AI2D: **93.9%**; RefCOCO: **92.3%**; V*: **95.8%**

### Normalized scores (1–100)

- **Tool use: 74/100.** (Was 78 on the prior pass.) τ²-bench 83.9% (AA) and the BrowseComp/MCP-Tasks/WideResearch rows keep the agentic story alive, but the Qwen tables document the weaker base-model profile (MCP Atlas 46.1, Toolathlon 36.3, MCP-Mark 46.1, AA Agentic 8) — one band down.
- **Reasoning: 80/100.** (Was 85 on the prior pass.) GPQA 86.1–88.4% (two sources), MMLU-Pro 87.8% and the instruction-following leads remain strong — but the newly measured HLE 28.7%, AA Index 21.4, CritPt 0.9% and the −37.9 Omniscience index move the composite down from the launch-table-only framing.
- **Context window: 72/100.** The Zen-served `qwen3.5-plus` tier caps at 262,144 total (200K–500K tier); AA-LCR 64.3%/LongBench 63.2% provide first measured evidence (mid); the open-weight 1M+ extension and hosted 1M default stay unmeasured at the top.
- **Multimodal: 85/100.** Native text-vision fusion now with measured video (VideoMMMU 84.7, MLVU 86.7), MathVision 88.6 lead, GUI agent desktop+mobile, and hosted video analysis (2+ hours); text-only output and the AA-MMMU-Pro 52.7% conflict keep it out of the 90–100 band.
- **Coding: 86/100.** (Was 88 on the prior pass.) SWE-bench Verified 76.2–76.4% is consistent across tables and LiveCodeBench v6 83.6% is corroborated, but the newly measured SWE Pro 50.9% and NL2Repo 32.2% document the age against the 3.8 generation — one band down.
- **Cost efficiency: 93/100.** Zen `qwen3.5-plus` at $0.20/$1.20 per 1M sits between the ~$0.10/$0.20 (97–99) and ~$0.60/$2.20 (~92) bands, closer to the cheap end; no Zen Free ID (scored on paid pricing), with open-weight self-hosting as a further cost lever.
- **Overall Score: 79.4/100.** (Was 82 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (74 + 80 + 72 + 85 + 86) / 5 = 397/5 = 79.4 — lowered on the 2026-10-11 second pass as the Qwen tables and AA boards replace launch-table framing with measured evidence. Best fit: the strongest open-weight multimodal agent of its generation for self-hosting — but the Qwen 3.8 family supersedes it on every dimension at similar hosted cost.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai Qwen3.5-397B page updated 2026-10-10 citing the HF model card + Qwen3.6-Plus comparison tables, Artificial Analysis model benchmarks, plus the prior 2026-10-03 pass on Serenities/DigitalApplied/models.dev; 2026-10-16 re-check: BenchLM 73-row refresh corroborates all rows (new: τ³ 68.4%, TB2.0 52.5%, Gert Labs 46.76%, SuperGPQA 70.4%, HMMT sweep 94.8/92.7/87.9%, MMLU-ProX 84.7%, INCLUDE 85.6%, PolyMath 73.3%, MAXIFE 88.2%, NOVA-63 59.1%, AA-IFBench 51.6%, plus multimodal fills We-Math 87.9%, DynaMath 86.3%, CC-OCR 82.0%, CountBench 97.2%, ERQA 67.5%, MMLongBench-Doc 61.5% — all inside existing bands) — no score changes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
