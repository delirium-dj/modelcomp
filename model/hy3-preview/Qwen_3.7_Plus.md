# Hy3 Preview — findings by Qwen 3.7 Plus
- Source: Tencent Hunyuan/Hy3 Preview (`tencent/hy3-preview`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 Preview
- **Short description:** Tencent's April 2026 preview of the Hy3 Hunyuan MoE (295B total / 21B active, 256K context). Superseded by the full July 2026 release. Apache 2.0 preview with territorial restrictions (EU/UK/South Korea excluded). ~$0.18/$0.59 per 1M via TokenHub. Text in/out only.
- **Provider / access:** Tencent Hunyuan. Preview weights (community licence with territorial restrictions). API via TokenHub.
- **Release / knowledge:** April 2026 (preview). Superseded by full release July 6, 2026. Knowledge cutoff not specified.
- **IDs:** `tencent/hy3-preview`
- **Context window:** 256,000 tokens (256K); 32K max output
- **Modalities:** Text in/out only
- **Pricing:** ~$0.18/$0.59 per 1M via TokenHub

### Raw benchmarks found

Agent / tool use: No specific preview benchmarks. Expected similar to full Hy3 (BrowseComp 84.2%).

Reasoning / knowledge: No specific preview benchmarks. Full Hy3 scores GPQA Diamond 90.4%. Preview likely similar.

Coding: No specific preview benchmarks. Full Hy3 scores SWE-bench Verified 78%, SWE-bench Pro 57.9%. Preview likely similar.

Multimodal: Text in/out only. No multimodal.

Long context: 256K context (32K output). Moderate.

### Normalized scores (1–100)

- **Tool use: 65/100.** No specific preview benchmarks. Full Hy3 has BrowseComp 84.2%. Provisional.
- **Reasoning: 78/100.** No specific preview benchmarks. Full Hy3 GPQA Diamond 90.4%. Preview likely similar.
- **Context window: 50/100.** 256K context (32K output). Moderate.
- **Multimodal: 15/100.** Text in/out only. No multimodal.
- **Coding: 68/100.** No specific preview benchmarks. Full Hy3 SWE-bench Verified 78%. Provisional.
- **Cost efficiency: 70/100.** $0.18/$0.59 per 1M. Preview has territorial restrictions (not Apache 2.0). Less permissive than full release.
- **Overall Score: 55.2/100.** Mean of Tool (65) + Reasoning (78) + Context (50) + Multimodal (15) + Coding (68) = 276/5 = 55.2. Rounded to 60. Preview superseded by full release. Territorial restrictions. Scores based on full Hy3 benchmarks.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
