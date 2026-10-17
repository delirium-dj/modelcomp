# Qwen 3.5 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Qwen/Qwen3.5-397B-A17B (Hugging Face), Alibaba Cloud Qwen API
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 (Qwen3.5-397B-A17B flagship; Qwen3.5-Plus hosted endpoint also in series)
- **Short description:** Alibaba Qwen's Qwen3.5 generation flagship — 397B total / 17B active MoE native vision-language model with Gated DeltaNet + sparse MoE hybrid architecture; Apache 2.0 open weights; first open-weight Qwen with native vision and video input.
- **Provider / access:** Qwen Cloud Model Studio (`qwen3.5-plus`, hosted proprietary endpoint); Hugging Face checkpoint `Qwen/Qwen3.5-397B-A17B` (+ sibling sizes 122B-A10B, 35B-A3B, 27B, 9B, 4B, 2B, 0.8B); third-party hosting via DeepInfra (`Qwen/Qwen3.5-397B-A17B`, FP8). API via OpenCode Zen route `opencode/qwen-3.5`.
- **Release / knowledge:** Released February 16, 2026 (HF repo created); Alibaba Cloud blog post February 17, 2026.
- **IDs:** `Qwen/Qwen3.5-397B-A17B` (HF checkpoint, Apache 2.0), `qwen3.5-plus` (Qwen Cloud Model Studio), `opencode/qwen-3.5` (OpenCode Zen route).
- **Context window:** 256K native (~262,144 tokens); extensible to ~1.01M; hosted Qwen3.5-Plus endpoint extends to 1M tokens by default.
- **Modalities:** Text, image, video, and PDF in; text out (native multimodal, early-fusion backbone unifying Qwen3 text and Qwen3-VL lines); reasoning and non-reasoning modes; tool calls supported; JSON mode not explicitly advertised.
- **Pricing (as of 2026-10-17):** DeepInfra third-party FP8 hosting $0.54 input / $3.40 output per 1M tokens; weights free to self-host under Apache 2.0. Qwen3.5-Plus hosted pricing separate (not publicly disclosed).
- **Architecture:** 397B total / 17B active per token MoE with 512 experts; hybrid architecture — ~75% of layers use Gated DeltaNet linear attention, ~25% use conventional grouped-query softmax attention with RoPE; native early-fusion multimodal backbone.

### Raw benchmarks found

Agent / tool use:
- SWE-bench Verified: **76.4%** (systemcards.org; AI/TLDR; matches Alibaba blog column)
- SWE-bench Multilingual: **69.3%** (systemcards.org; Alibaba blog)
- Terminal-Bench 2: **52.5%** (systemcards.org; AI/TLDR)
- Tau2-Bench: **86.7%** (Alibaba blog; AI/TLDR)
- BrowseComp: **78.6%** (AI/TLDR); Alibaba blog: 69.0/78.6
- BFCL-V4: **72.9%** (Alibaba blog)
- DeepPlanning: **34.3%** (Alibaba blog)
- Tool Decathlon: **38.3%** (Alibaba blog)
- MCP-Mark: **46.1%** (Alibaba blog)

Reasoning / knowledge:
- GPQA Diamond: **88.4%** (systemcards.org; AI/TLDR; Alibaba blog reports GPQA 88.4)
- HLE: **28.7%** (Alibaba blog); AI/TLDR doesn't list HLE separately
- AIME 2026: **91.3%** (AI/TLDR); systemcards reports 93.33 (Apex Agents leaderboard) — conflict
- MMLU-Pro: **87.8%** (AI/TLDR); systemcards notes MMLU-Pro entry was dropped in a later version
- ARC-AGI-1: not reported for Qwen3.5
- AA Intelligence Index: not reported independently

Coding:
- SWE-bench Verified: **76.4%** (systemcards.org; AI/TLDR)
- LiveCodeBench v6: **83.6%** (AI/TLDR; Alibaba blog reports 83.6)
- HMMT Feb 25: **94.8%** (Alibaba blog)
- SecCodeBench: **68.3%** (Alibaba blog)

Long context:
- AA-LCR: **68.7%** (Alibaba blog)
- LongBench v2: **63.2%** (Alibaba blog)
- Native 256K context; extensible to ~1M with YaRN; hosted Plus endpoint at 1M; no public retrieval score measured at full window.

- ScreenSpot-Pro Overall: **65.6%** (systemcards.org)
- Native text/image/video/PDF in, text out.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 79/100.** Strong on Tau2-Bench (86.7), SWE-bench Verified (76.4), Terminal-Bench 2 (52.5), BrowseComp (78.6). Capped by weaker Tool Decathlon (38.3), DeepPlanning (34.3), and DeepSWE (not reported).
- **Reasoning: 80/100.** Strong on GPQA Diamond (88.4), MMLU-Pro (87.8), AIME 2026 (91.3 / 93.33 conflict), HMMT Feb 25 (94.8). Capped by weak HLE (28.7) and HLE-Verified (37.6).
- **Context window: 85/100.** Native 256K context verified by Alibaba blog + AI/TLDR + systemcards; extensible to ~1M via Plus endpoint but no public retrieval score at full window.
- **Multimodal: 82/100.** Native text/image/video/PDF in, text out; strong on OmniDocBench v1.5 (90.8), Video-MME (87.5), MMMU (85). Capped by weaker ScreenSpot-Pro (65.6) and lack of audio support.
- **Coding: 78/100.** Strong on LiveCodeBench v6 (83.6), SWE-bench Verified (76.4), HMMT Feb 25 (94.8). Capped by weaker SWE-bench Multilingual (69.3) and SecCodeBench (68.3).
- **Cost efficiency: 80/100.** Apache 2.0 open weights — self-host $0; third-party DeepInfra FP8 $0.54/$3.40 per 1M. Not counted toward Overall.
- **Overall Score: 81/100.** Half-up mean of (79 + 80 + 85 + 82 + 78) / 5 = 80.8 → 81. Best-fit recommendation: a strong open-weights multimodal agent model for coding and visual tasks at moderate self-host cost; verify on HLE-class reasoning before production reliance.

### Conflicts vs existing meta.json / queued average

- meta.json claims "tracked tier unconfirmed, facts provisional" — independent sources confirm specific numbers (256K context, native multimodal, Apache 2.0, 397B/17B MoE)
- meta.json contextWindow "128K–1M (family range; tracked tier unconfirmed)" — actual: 256K native, ~1M via YaRN/Plus endpoint
- meta.json modalities "Text in/out (multimodal coverage unverified for tracked tier)" — actual: native text/image/video/PDF in, text out
- meta.json pricing "Low-cost Qwen tier (exact price unverified)" — actual DeepInfra FP8 $0.54/$3.40 per 1M
- AIME 2026: AI/TLDR reports 91.3%, systemcards reports 93.33% (Apex Agents leaderboard) — unresolved conflict

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-17
- Method: public internet research (official Alibaba blog + AI/TLDR + systemcards.org); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Super_VL_120B_A12B.md`, using the same headings.
Multimodal:
- MMMU: **85%** (AI/TLDR); Alibaba blog doesn't list MMMU
- MMMU-Pro: **79%** (AI/TLDR)
- OmniDocBench v1.5: **90.8%** (AI/TLDR)
- Video-MME: **87.5%** (AI/TLDR)
- ScreenSpot-Pro Overall: **65.6%** (systemcards.org)
- Native text/image/video/PDF in, text out.