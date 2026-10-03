# Qwen 3.5 — findings by GLM 5.3 Flash

- Source: Alibaba/Qwen (`qwen3.5-397b-a17b` open-weight / `qwen3.5-plus` hosted)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5
- **Short description:** Alibaba's "native multimodal agents" foundation model — a 397B-parameter MoE activating only 17B per forward pass, fusing text and vision from pretraining, supporting 201 languages, and shipping open weights. The open-weight Qwen3.5-397B-A17B is the flagship; Qwen3.5-Plus is the hosted proprietary version on Alibaba Cloud Model Studio (built-in search + code interpreter). Sibling folders: `qwen-3.5-9b` (small dense) and `qwen-3.5-plus` (Zen-hosted Plus tier) are variants, not this base model.
- **Provider / access:** Hugging Face open weights `Qwen3.5-397B-A17B` (807GB full; Unsloth quants 94GB–462GB); Alibaba Cloud Model Studio hosted `qwen3.5-plus` (Chat Completions, built-in search + code interpreter); OpenCode Zen serves `qwen3.5-plus` (models.dev: 262,144/65,536, $0.20/$1.20).
- **Release / knowledge:** Released February 2026 (Serenities AI review dated 2026-02-20, updated 2026-02-26; 363 points / 173 comments on Hacker News within hours). Knowledge cutoff not published.
- **IDs:** `Qwen3.5-397B-A17B` (open weights); `qwen3.5-plus` (hosted/Zen). State explicitly: no Zen Free ID exists for Qwen 3.5 — the Zen `qwen3.6-plus-free` ID belongs to Qwen 3.6, not 3.5.
- **Context window:** 262,144 tokens native on the open-weight model, extensible beyond 1M; hosted Qwen3.5-Plus handles 1M by default (Serenities AI). The Zen-served `qwen3.5-plus` listing caps at 262,144 total / 65,536 max output.
- **Modalities:** text and image in (native text-vision fusion); video analysis on the hosted tier (2+ hours); text out; reasoning yes; tool calls yes (native MCP, search, code interpreter); GUI agent capabilities (desktop + mobile: AndroidWorld, ScreenSpot Pro); JSON mode not verified.
- **Pricing (as of 2026-10-03):** Zen `qwen3.5-plus` $0.20 in / $1.20 out per 1M (paid; no Free ID); open weights make self-hosting a $0-marginal-cost lever (FP8 native pipeline cuts activation memory ~50%).
- **Architecture:** 397B total / 17B active sparse MoE (512 experts: 10 routed + 1 shared); hybrid linear attention via Gated Delta Networks combined with standard attention heads; multi-token prediction; FP8 native pipeline; open weight (open-weight ≠ fully open source — training data/pipeline not published); decoding throughput 8.6×–19× faster than Qwen3-Max depending on context length.

### Raw benchmarks found

Agent / tool use:

- MCP-Mark: **46.1** (Alibaba comparison table; vs GPT-5.2 57.5, Claude 4.5 Opus 42.3, Gemini 3 Pro 53.9)
- OSWorld-Verified: **62.2** (vs GPT-5.2 38.2, Claude 4.5 Opus 66.3)
- AndroidWorld: **66.8** (GUI agent, mobile)
- ScreenSpot Pro: **65.6** (GUI agent, desktop)
- BrowseComp: **69.0 / 78.6** with the discard-all strategy, beating GPT-5.2 (65.8), Claude (67.8), Gemini 3 Pro (59.2)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA (STEM): **88.4%** (vs GPT-5.2 92.4, Claude 4.5 Opus 87.0, Gemini 3 Pro 91.9)
- MMLU-Pro: **87.8** (vs 87.4 / 89.5 / 89.8)
- IFBench: **76.5** (leads all competitors; GPT-5.2 75.4)
- MultiChallenge: **67.6** (leads; Gemini 64.2)
- MathVision: **88.6** (leads)
- ZEROBench: **12 / 41.0** (leads)
- GPQA Diamond (separate): no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found (BenchmarkList ECI 129.8, #72/397 — a capability index, not the AA Intelligence Index)

Coding:

- SWE-bench Verified: **76.4%** (Alibaba comparison table; vs GPT-5.2 80.0, Claude 4.5 Opus 80.9)
- SWE-bench Multilingual: **69.3%** (vs Claude 4.5 Opus 77.5)
- SecCodeBench: **68.3** (nearly tied with Claude 4.5 Opus 68.6)
- LiveCodeBench v6: **83.6** (DigitalApplied guide; Qwen3.5-397B)
- AIME26: **91.3** (DigitalApplied guide)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index: no verified public score found

Long context:

- 262,144 native / 1M+ hosted per vendor coverage; no measured long-context retrieval published (no MRCR / RULER / GraphWalks value found)

### Normalized scores (1–100)

- **Tool use: 78/100.** OSWorld-Verified 62.2 sits close to Claude 4.5 Opus's 66.3, BrowseComp 78.6 leads all competitors, and native MCP + GUI agent (AndroidWorld 66.8, ScreenSpot Pro 65.6) confirm agentic strength; MCP-Mark 46.1 trails GPT-5.2 and missing Terminal-Bench/Tau3/GDPval verification cap it below the 90–100 frontier band.
- **Reasoning: 85/100.** GPQA (STEM) 88.4% and MMLU-Pro 87.8 sit just under the 90% frontier ref, with instruction-following leads (IFBench 76.5, MultiChallenge 67.6) and ZEROBench 12/41.0; no GPQA Diamond/HLE verification keeps it out of the 90–100 band.
- **Context window: 72/100.** The Zen-served `qwen3.5-plus` tier caps at 262,144 total (200K–500K tier, 200K = 70, scaled slightly up for 262K; 65,536 max output); the open-weight model's 1M+ extension and the hosted 1M default are noted but the evaluated Zen tier caps the score, mirroring how the MiMo V2.5 Zen cap was scored.
- **Multimodal: 85/100.** Native text-vision fusion (not bolted-on vision), MathVision 88.6 lead, GUI agent desktop+mobile, and hosted video analysis (2+ hours); text-only output keeps it out of the 90–100 band.
- **Coding: 88/100.** SWE-bench Verified 76.4% plus LiveCodeBench v6 83.6 and near-tied SecCodeBench 68.3 clear the frontier refs (DeepSWE 74%+, SciCode 55%+) but trail GPT-5.2 (80.0) and Claude 4.5 Opus (80.9) on the headline coding benchmark, capping it just under 90.
- **Cost efficiency: 93/100.** Zen `qwen3.5-plus` at $0.20/$1.20 per 1M sits between the ~$0.10/$0.20 (97–99) and ~$0.60/$2.20 (~92) bands, closer to the cheap end; no Zen Free ID (scored on paid pricing), with open-weight self-hosting as a further cost lever.
- **Overall Score: 82/100.** Mean of the five non-cost dims (78 + 85 + 72 + 85 + 88) / 5 = 81.6; best fit: the strongest open-weight multimodal agent of its generation — competitive with closed flagships on reasoning and coding while self-hostable, best paired with a 1M-context route for long-document work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-03
- Method: public internet research (Serenities AI review of Alibaba's benchmark tables, DigitalApplied guide, models.dev, Hugging Face availability, OpenCode Zen catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
