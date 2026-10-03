# Ling 3.0 Flash VL — findings by Mimo v2.6 Flash

- Source: inclusionAI (Ant Group)/Ling-3.0-flash-VL
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash VL (native multimodal variant of Ling 3.0 Flash)
- **Short description:** inclusionAI's 124B/5.5B-active MoE that adds native image + video understanding to Ling 3.0 Flash for multimodal agentic workflows; top use case is cheap vision-in coding/agent work. Not a variant of another tracked entry (distinct weights from `ling-3.0-flash`).
- **Provider / access:** Hugging Face open weights (`inclusionAI/Ling-3.0-flash-VL`); hosted via OpenRouter, DeepInfra, Novita and 7+ providers; OpenAI-compatible Chat Completions with tool calling.
- **Release / knowledge:** 2026-09-10 (Model Beat tracker; HF card `ling-3.0-flash-vl-0910`); knowledge cutoff not published.
- **IDs:** `inclusionAI/Ling-3.0-flash-VL` (HF), `inclusionai/ling-3.0-flash-vl` (OpenRouter), `inclusionAI/Ling-3.0-flash-VL` (DeepInfra/Novita); a free `ling-3.0-flash-vl:free route exists on some aggregators (lmspeed) — no first-party Free ID verified.
- **Context window:** 262,144 tokens (marketed "256K"; HF card "up to 256K"; Model Beat changelog corrected 131K → 262,144 on 2026-09-23). Max output ≈ 32.8K (LMSpeed); some hosts (DeepInfra fp16) serve only 131,072 — noted as host cap, not model cap.
- **Modalities:** text + image + video in; text out; thinking mode on by default; tool calling yes (OpenRouter); JSON mode not verified.
- **Pricing (as of 2026-10-03):** DeepInfra $0.06 in / $0.18 out per 1M (cache $0.012); Novita $0.021/$0.062; Artificial Analysis blended ≈ $0.05–0.075 in / $0.19–0.22 out (LMSpeed). Paid, very cheap tier; no vendor-confirmed $0 first-party tier.
- **Architecture:** 124B total / 5.5B active sparse MoE, 42-layer hybrid backbone (KDA + Gated MLA at 5:1), open weights (Apache-style HF release, `bailing_moe_v3_vl`).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found (VL card documents the AA Terminus-2 protocol but publishes no VL result; BenchLM has 0 covered rows for the VL)
- Tau3-Banking / Toolathon / MCP-Atlas / GDPval-AA: no verified public score found
- Tool calling: supported (OpenRouter capability list) — no measured tool-accuracy score

Reasoning / knowledge:

- GPQA Diamond: **86.2%** (Epoch AI via Model Beat, updated 2026-09-25)
- HLE: **22.0%** (Epoch AI via Model Beat)
- Artificial Analysis Intelligence Index: **42** (AA v4.1.1 — vendor card "score of 42, +4 over Ling-3.0-flash's 38", corroborated by Model Beat 42.0, 42nd percentile)
- LCR / CritPt / Omniscience: no verified public score found for the VL row

Coding:

- SciCode: **44.2%** (Epoch AI via Model Beat)
- Artificial Analysis Coding Index: **43** (Model Beat, 43rd percentile)
- SWE-bench Verified / SWE-Pro / LiveCodeBench: no verified public score found for the VL (BenchLM "Coming soon" on every coding row)

Long context:

- 262K window documented; no MRCR / RULER retrieval figure published for the VL

Multimodal:

- BenchLM multimodal public-lane score: **77.5** (1 rankable row, Unranked — BenchLM compare pages, 2026-09)
- MMMU / MathVision / Video-MME named values: no verified public score found in this pass; vendor card shows an image/video benchmark chart without numbers extracted

### Normalized scores (1–100)

- **Tool use: 50/100.** Tool calling and agentic positioning are documented, but zero measured agent benchmarks (no TB2.1/tau/GDPval value for the VL) — neutral 50 pending data, no hallucinated score.
- **Reasoning: 75/100.** GPQA Diamond 86.2% sits just under the 90% frontier ref while HLE 22.0% and AA Index 42 both beat the documented mid band (Index 20–35 → 55–65); HLE far below 40% frontier caps it at 75.
- **Context window: 72/100.** 262,144 tokens lands in the 200K–500K tier (65–84, 200K = 70); no retrieval-at-window measurement to push higher.
- **Multimodal: 80/100.** Native image + video input wired into reasoning/acting loops (HF card), text-only output — the +video-in band is 75–90; BenchLM's 77.5 multimodal lane corroborates the high-70s/low-80s placement.
- **Coding: 72/100.** SciCode 44.2% clears the documented mid ceiling (SciCode <40 → 65–75) and AA Coding Index 43 is mid-pack, but every SWE/LiveCodeBench row is unpublished for the VL, capping it at 72.
- **Cost efficiency: 99/100.** $0.06/$0.18 (even $0.021/$0.062 on Novita) sits at the ~$0.10/$0.20 ≈ 97–99 anchor's top end.
- **Overall Score: 70/100.** (50 + 75 + 72 + 80 + 72) / 5 = 69.8 → 70 — best-fit as an ultra-cheap multimodal agentic worker for vision-in tasks where frontier tool-benchmark proof isn't required yet.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-03
- Method: public internet research (inclusionAI HF model card, Model Beat/Epoch AI benchmark tracker, BenchLM compare pages, OpenRouter/DeepInfra/Novita/LMSpeed pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
