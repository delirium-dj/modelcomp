# deepseek-v4-vision-exp — findings by Solar Pro 4

- Source: DeepSeek/DeepSeek V4 Vision Exp, e.g. DeepSeek (`deepseek/deepseek-v4-vision-exp`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Vision Exp (DeepSeek proprietary, DeepSeek V4 family vision experiment)
- **Short description:** DeepSeek's vision-focused experimental variant of the DeepSeek V4 family. Listed as a model folder but limited public information available — likely an experimental/internal vision model. No verified benchmark data found for this specific variant. As a vision experiment, may have specialized vision capabilities not present in the main DeepSeek V4.1 Flash model.
- **Provider / access:** Unknown — likely internal/experimental access only. Not listed on major provider directories.
- **Release / knowledge:** Unknown release date. Knowledge cutoff unknown.
- **IDs:** Unknown — likely internal DeepSeek identifiers only.
- **Context window:** Unknown.
- **Modalities:** Likely vision-focused (image/video input) based on "Vision Exp" naming. Text output likely. Tool calls, structured output, reasoning capabilities unknown.
- **Pricing (as of 2026-09-18):** Unknown — likely internal/experimental pricing or no public access.
- **Architecture:** Unknown — likely DeepSeek V4 family MoE architecture with vision enhancements.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- All benchmarks: no verified public score found for DeepSeek V4 Vision Exp specifically. This model is likely an internal/experimental vision variant with no public benchmark data available.

Reasoning / knowledge:

- All benchmarks: no verified public score found for DeepSeek V4 Vision Exp specifically.

Coding:

- All benchmarks: no verified public score found for DeepSeek V4 Vision Exp specifically.

Long context:

- Long-context recall: no verified public score found for DeepSeek V4 Vision Exp specifically.

### Normalized scores (1–100)

- **Tool use: 40/100.** No verified benchmark scores available. Score is provisional and conservative given complete lack of data. Vision experiment models may have limited agentic/tool-use capabilities compared to main coding models.
- **Reasoning: 40/100.** No verified benchmark scores available. Score is provisional and conservative given complete lack of data.
- **Context window: 50/100.** Unknown context window. Score is provisional. Vision models may have different context requirements than text models.
- **Multimodal: 70/100.** Likely vision-focused (image/video input) based on "Vision Exp" naming. Score reflects likely vision capabilities. Capped by lack of confirmed multimodal specs.
- **Coding: 40/100.** No verified coding benchmarks available. Vision experiment models may have limited coding capabilities. Score is provisional and conservative.
- **Cost efficiency: 50/100.** Unknown pricing and access. Score is provisional. If internal/experimental only, may not be accessible for general use.
- **Overall Score: 48/100.** Mean of (40 + 40 + 50 + 70 + 40 + 50) / 6 = 48.3 → **48**. Best-fit recommendation: DeepSeek V4 Vision Exp is likely an internal/experimental vision model with no public benchmark data or confirmed access. For teams needing vision capabilities, other models with confirmed specs are recommended: Gemini 3.8 Flash (TB2.1 90.8%, multimodal, $0.75/$3.75), Qwen3.8-Max (PaperBench 93.0%, multimodal, $2/$6), or MiniMax M3 (Video-MME 84.8%, multimodal, $0.30/$1.20). For teams needing confirmed vision benchmarks and access, these alternatives are better choices. Scores for this model are provisional and conservative due to complete lack of verified data.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (HokAI, modelcompare.dev), vendor documentation (DeepSeek), and model-comparison.md cross-reference; scores are normalized 1–100 interpretations, not official vendor scores. Note: no verified data found for DeepSeek V4 Vision Exp specifically — likely internal/experimental model. Scores are provisional and conservative.
- Future sources: add a new file next to this one, e.g. `Gemini_2_5_Flash_Lite.md`, using the same headings.
