# MiMo-V2.5 Free — findings by Qwen 3.8 27B

- Source: Xiaomi / OpenCode Zen (`mimo-v2.5-free`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.5 Free (a.k.a. Xiaomi MiMo-V2.5 Free — same Zen ID)
- **Short description:** OpenCode Zen's limited-time free tier of Xiaomi's MiMo-V2.5 omni model (310B/15B MoE, 1M native); best free omni with balanced agent/coding per project methodology.
- **Provider / access:** OpenCode Zen `opencode/mimo-v2.5-free` on `https://opencode.ai/zen/v1/chat/completions` (verified in opencode.ai/docs/zen + Zen model list, 2026-09-28). Native route: Xiaomi MiMo API / MiMo Desktop.
- **Release / knowledge:** MiMo-V2.5 released spring 2026 (AA model id `mimo-v2-5-0424` implies April 2026); knowledge cutoff not disclosed.
- **IDs:** `opencode/mimo-v2.5-free` (Zen, confirmed in Zen model list); open weights `XiaomiMiMo/MiMo-V2.5` (Hugging Face).
- **Context window:** 1M native; Zen free-route cap is 200K/32K (models.dev `mimo-v2.5-free.toml`).
- **Modalities:** text / image / audio / video in, text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-29):** Free / Free / Free (input/output/cached) on Zen — limited time; during the free period collected data may be used to improve the model (Zen privacy exception).
- **Architecture:** 310B total / 15B active parameters, MoE, open weights (BenchLM labels the API entry "Proprietary" — noted as a source conflict; HF repo is public).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **60.7%** (Vals, BenchLM 2026-09-28); TB2.0 **65.8%** (BenchLM); BenchmarkList lists TB2.1 **63.7%**
- Tau3-Banking / Tau2-Bench: Tau2 **90.6%** (BenchmarkList; harness varies AA vs RankedAGI vs vendor — RankedAGI lists Tau3 69.5%)
- GDPval-AA: **1148** (BenchmarkList)
- Claw-Eval / ClawProBench: Claw-Eval **62.3%**; MM-ClawBench **23.8%**; ResearchClawBench **16.9%** (BenchLM)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Gert Labs **46.89%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **81.6%** (Vals, BenchLM)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **38** (AA) / unranked (BenchLM, 16 rows only)
- Omniscience Accuracy / Hallucination Rate: no verified public score found; MMLU-Pro (Vals) **82.9%** (BenchLM)

Coding:

- SWE-bench Verified / SWE-Pro: SWE-bench (Vals) **71.0%**; SWE-Pro **56.1%** (BenchLM; BenchmarkList lists SWE 71%)
- LiveCodeBench: **81.5%** (Vals, BenchLM)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: **42.2%** (BenchmarkList)
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 1M native window (200K/32K on the Zen free route); no long-context retrieval reported at window length.

Multimodal:

- Video-MME (with subtitle) **87.7%**; CharXiv **81%**; MMMU-Pro **77.9%** (all BenchLM)

### Normalized scores (1–100)

- **Tool use: 74/100.** TB2.0 65.8% / TB2.1 60.7% above the mid band, Tau2 90.6% strong, Claw-Eval 62.3% present, GDPval 1148 in the mid band; capped by MM-ClawBench 23.8% and no Toolathon/MCP-Atlas.
- **Reasoning: 72/100.** GPQA 81.6% just above the 60–80% mid band and AA Index 38 above the 20–35 mid reference; capped by missing HLE/LCR/CritPt.
- **Context window: 70/100.** Evaluated free tier is capped at 200K/32K on Zen ("200K = 70" in the tier mapping); native 1M available only via the native endpoint.
- **Multimodal: 95/100.** Full omni input (text/image/audio/video) with text output in the audio-in tier (90–100); Video-MME 87.7% and MMMU-Pro 77.9% support the top of the band.
- **Coding: 78/100.** SWE-bench 71.0% / SWE-Pro 56.1%, LiveCodeBench 81.5% and Vibe 42.2% above mid; capped by missing SciCode/DeepSWE of record.
- **Cost efficiency: 100/100.** $0 free Zen tier; limited-time with the data-usage caveat (collected data may be used to improve the model).
- **Overall Score: 78/100.** (74 + 72 + 70 + 95 + 78) / 5 = 77.8 → 78. Best fit: zero-cost omni (audio/video-in) agent + coding pick; use the native 1M endpoint when context exceeds 200K.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-09-29
- Method: public internet research (BenchLM, BenchmarkList, RankedAGI, Artificial Analysis, OpenCode Zen docs + model list, models.dev); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
