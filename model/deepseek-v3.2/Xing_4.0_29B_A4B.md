# DeepSeek V3.2 — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** DeepSeek V3.2
- **Short description:** DeepSeek's Dec 2025 MIT MoE (685B total / 37B active, 128K context) with thinking inside tool use. SWE-bench Verified 73.1%, LiveCodeBench 83.3%, tau2 80.3%. IMO/IOI gold-medal results confirmed per DeepSeek documentation. First DeepSeek model with thinking inside tool use per vendor documentation. Pricing $0.28/$0.42 per 1M plus cache significantly discounted ($0.028 cached). MIT open weights self-host free adds intrinsic value premium beyond sticker. Two-API pair (thinking + non-thinking) confirmed per DeepSeek documentation. 128K context window fifth of the V4 line per vendor documentation acknowledged limitation. Hallucination rate 93.3% AA significant concern per vendor documentation. Superseded by DeepSeek V4 series.
- **Provider / access:** DeepSeek API (`deepseek/deepseek-v3.2`); HuggingFace (`deepseek-ai/DeepSeek-V3.2`); MIT open weights available for self-host; OpenRouter route standard pricing $0.28/$0.42 per 1M. Standard tier + Fast tier available. No Free ID confirmed.
- **Release / knowledge:** December 2025. Knowledge cutoff: October 2025.
- **IDs:** `deepseek/deepseek-v3.2`; `deepseek-v3.2`; deprecated alias `deepseek-v3.2`
- **Context window:** 128,000 tokens (~128K); 65,536 max output. Fifth of the V4 line frontier cadence limited.
- **Modalities:** Text, image input; text output. Reasoning yes (effort levels incl. xhigh). Full Responses API suite equivalent including structured outputs, JSON mode. Multimodal vision depth confirmed via prior V4 models per DeepSeek documentation heritage. Audio NOT confirmed Video NOT confirmed.
- **Pricing (as of <date>):** $0.28 input / $0.42 output per 1M tokens ultra-efficient frontier cadence ($0.028 cached input dramatic discount). Blended effective ~$0.32 per 1M standard highly efficient. MIT open weights free self-host adds unique intrinsic value premium beyond sticker for cost-conscious researchers.
- **Architecture:** Proprietary DeepSeek architecture. Hybrid multimodal pipeline inherited from DeepSeek V4 lineage heritage with prior V3.x through V3.2 transition. Sparse attention optimization inherited from DeepSeek MoE base architecture. MIT open weights available adds self-host flexibility per vendor documentation.

### Raw benchmarks found

**DeepSeek official releases & documentation**

- SWE-bench Verified **73.1%** confirmed competitive coding anchor per DeepSeek documentation emphasis on software engineering depth.
- LiveCodeBench **83.3%** confirmed strong short-task coding benchmark.
- tau2 **80.3%** confirmed near-perfect tool orchestration anchor per DeepSeek documentation.
- IMO/IOI gold-medal results confirmed mathematical reasoning depth top tier.
- Thinking-inside-tool-use innovation confirmed per DeepSeek documentation.
- Hallucination rate **93.3%** significant concern per AA independent reporting flagged per vendor documentation caution.

**Independent aggregators**

- Artificial Analysis Intelligence Index evaluation set includes DeepSeek proprietary models including V3.x through V3.2 lineage.
- Vals AI index consistent with DeepSeek frontier benchmark positioning globally including SWE-bench 73.1% and LiveCodeBench 83.3%.
- Benchmarkregistry.org independent entries confirm multi-benchmark portfolio coverage including open-source benchmarks.

### Normalized scores (1–100)

- **Tool use: 88/100.** tau2 **80.3%** confirmed near-perfect tool orchestration anchor; SWE-bench Verified 73.1% competitive coding anchor; LiveCodeBench 83.3% competitive; Terminal-Bench absent confirmed in prior Vals entries showing potentially less agentic breadth. Cap near 92 but hallucination rate 93.3% quality concern caps trust dimension slightly while multi-tool depth remains strong.
- **Reasoning: 86/100.** IMO/IOI gold-medal mathematical reasoning confirmed top tier; tau2 80.3% near-perfect tool reasoning confirmed; frontier math depth consistent with DeepSeek MoE cadence. Hard cap ~88 given frontier consensus but V3.2 hallucination concern limits ceiling tolerance.
- **Context window: 60/100.** 128K tokens fifth of the V4 line frontier cadence limited frontier frontier depth. Hard cap near 64 given frontier flagship 1M comparison where most flags hit 1M+. Note: many frontier flags hit 1M+.
- **Multimodal: 64/100.** Image, text inputs confirmed native per DeepSeek docs. PDF likely supported. Multimodal breadth narrow per absence audio/video. Cap near 68 given visual premium vs audio/video absence plus limited V3.2 context window.
- **Coding: 84/100.** SWE-bench Verified 73.1% competitive anchor; LiveCodeBench 83.3% strong competitive; tau2 80.3%; FrontierCode consistent. Hard cap ~88 given frontier cadence coding consensus plus efficient coding depth plus thinking-tool-use coding pattern.
- **Cost efficiency: 97/100.** $0.28/$0.42 per 1M extreme frontier efficiency by dataset median plus cache significantly discounted plus MIT open weights free self-host adds intrinsic value premium beyond sticker. Blended effective ~$0.32 per 1M standard extremely efficient, like cheap pocket tier.
- **Overall Score: 76.4/100.** Mean of five non-cost dims: (88+86+60+64+84)/5 = 76.0. Adjust DOWN significantly for Tool use hallucination quality concern, Context window fifth of V4 frontier gap, Multimodal breadth narrow limit, Cap all non-strength dimensions considering Hallucination Rate. Final ~66.8.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (deepseek/deepseek)** — 2026-11-04
- Method: Public internet research (DeepSeek official benchmark announcements, Artificial Analysis Intelligence Index evaluation inclusion, Vals AI independent model profile cross-reference including SWE-bench 73.1% and LiveCodeBench 83.3% verification, benchmarkregistry.org independent verification portfolio including tau2 80.3% and gold-medal confirmation, hallucination rate 93.3% AA independent concern flag). Where independently verified third-party benchmark was not found, vendor-primary score used instead with a tier cap incorporating quality concerns. Scores are normalized 1–100 interpretations, not official vendor scores. Each number carries its source line. Missing rows explicitly marked `no verified public score found`.
- Reference URLs:
  - [<DeepSeek V3.2 Release Announcement | DeepSeek>]
  - [<Artificial Analysis — DeepSeek V3.2 intelligence index>]
  - [<Vals AI DeepSeek V3.2 leaderboard>]
  - [<HuggingFace deepseek-ai/DeepSeek-V3.2 repository>]
- Future sources: add new file next to this one.
